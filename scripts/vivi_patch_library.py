#!/usr/bin/env python3
"""Build a real, club-specific Vivi Jersey patch image library for JerseyHub.

The crawler only publishes options tied to an exact supplier product URL already
present in the JerseyHub catalogue. Ambiguous club matches and unlabelled images
are kept in the audit report and are never assigned to a club by guesswork.
"""
from __future__ import annotations

import csv
import hashlib
import json
import os
import re
import sys
import time
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

# Reuse the established Vivi session, pagination, URL normalisation and patch
# label parser; this script adds image download + strict club/product mapping.
sys.path.insert(0, str(Path(__file__).resolve().parent))
import vivi_club_audit as audit  # noqa: E402

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"
ASSET_DIR = ROOT / "assets" / "patches"
CATALOG_FILES = (ROOT / "catalog.js", ROOT / "clubs-products.js")
BASE = "https://www.vivi-jersey.com"
LEAGUE_COLLECTIONS = {
    "premier-league", "la-liga", "serie-a", "bundesliga", "ligue-1",
    "portuguese-league", "eredivisie", "mls", "brazil-clubs",
    "saudi-professional-league", "scottish-premier-league",
    "chilean-football-league",
}
GENERIC_FOOTBALL_COLLECTIONS = {"football-jersey", "football-jerseys", "football-shirts"}

# Longest/most specific aliases are tested first. These are used only to
# disambiguate a product title; the source collection remains the primary key.
TEAM_ALIASES = {
    "Manchester United": ["manchester united", "man utd", "man-utd"],
    "Manchester City": ["manchester city", "man city"],
    "Liverpool": ["liverpool"],
    "Arsenal": ["arsenal"],
    "Chelsea": ["chelsea"],
    "Tottenham Hotspur": ["tottenham hotspur", "tottenham", "spurs"],
    "Newcastle United": ["newcastle united", "newcastle"],
    "Real Madrid": ["real madrid"],
    "FC Barcelona": ["fc barcelona", "barcelona", "barca"],
    "Atletico Madrid": ["atletico madrid", "atlético madrid"],
    "Athletic Club": ["athletic bilbao", "athletic club"],
    "Sevilla": ["sevilla"],
    "Valencia": ["valencia"],
    "Real Betis": ["real betis", "betis"],
    "Inter Milan": ["inter milan", "internazionale", "inter"],
    "AC Milan": ["ac milan", "acmilan"],
    "Juventus": ["juventus", "juve"],
    "Napoli": ["napoli"],
    "AS Roma": ["as roma", "roma"],
    "Lazio": ["lazio"],
    "Bayern Munich": ["bayern munich", "bayern munchen", "bayern münchen"],
    "Borussia Dortmund": ["borussia dortmund", "dortmund", "bvb"],
    "Bayer Leverkusen": ["bayer leverkusen", "leverkusen"],
    "Eintracht Frankfurt": ["eintracht frankfurt", "frankfurt"],
    "RB Leipzig": ["rb leipzig", "leipzig"],
    "Paris Saint-Germain": ["paris saint germain", "paris-saint-germain", "psg"],
    "Olympique de Marseille": ["olympique de marseille", "marseille", "om"],
    "Olympique Lyonnais": ["olympique lyonnais", "lyon"],
    "AS Monaco": ["as monaco", "monaco"],
    "LOSC Lille": ["losc lille", "lille"],
    "Benfica": ["benfica"],
    "FC Porto": ["fc porto", "porto"],
    "Sporting CP": ["sporting cp", "sporting lisbon"],
    "Ajax": ["afc ajax", "ajax"],
    "PSV Eindhoven": ["psv eindhoven", "psv"],
    "Feyenoord": ["feyenoord"],
    "Celtic": ["celtic"],
    "Rangers": ["glasgow rangers", "rangers"],
    "Al-Nassr": ["al nassr", "al-nassr"],
    "Al-Hilal": ["al hilal", "al-hilal"],
    "Inter Miami": ["inter miami"],
    "Boca Juniors": ["boca juniors", "boca"],
    "River Plate": ["river plate"],
    "Anderlecht": ["anderlecht"],
    "Club Brugge": ["club brugge"],
    "Standard de Liège": ["standard de liege", "standard liege"],
}

def norm_text(value: str) -> str:
    value = (value or "").casefold().replace("&", " and ")
    value = re.sub(r"[^a-z0-9]+", " ", value)
    return re.sub(r"\s+", " ", value).strip()

ALIAS_LOOKUP = sorted(
    ((norm_text(alias), team) for team, aliases in TEAM_ALIASES.items() for alias in aliases),
    key=lambda item: len(item[0]), reverse=True
)

def infer_team_from_title(title: str) -> str | None:
    haystack = f" {norm_text(title)} "
    matches = []
    for alias, team in ALIAS_LOOKUP:
        if alias and f" {alias} " in haystack:
            matches.append((len(alias), team))
    if not matches:
        return None
    matches.sort(reverse=True)
    best_len = matches[0][0]
    best_teams = {team for length, team in matches if length == best_len}
    return next(iter(best_teams)) if len(best_teams) == 1 else None

def collection_is_relevant(url: str, label: str) -> bool:
    slug = audit.slug_of(url)
    if slug in LEAGUE_COLLECTIONS or slug in GENERIC_FOOTBALL_COLLECTIONS:
        return True
    return audit.is_club_collection(url, label)

def image_url_from_tag(tag, page_url: str) -> str:
    for key in ("data-src", "data-original", "data-lazy-src", "src", "data-image", "content"):
        value = tag.get(key) if hasattr(tag, "get") else None
        if value and isinstance(value, str) and not value.startswith("data:"):
            candidate = urljoin(page_url, value.strip())
            if urlparse(candidate).scheme in ("http", "https"):
                return candidate
    style = tag.get("style", "") if hasattr(tag, "get") else ""
    match = re.search(r"background-image\s*:\s*url\(['\"]?([^'\")]+)", style, re.I)
    return urljoin(page_url, match.group(1)) if match else ""

def contextual_patch_image(soup: BeautifulSoup, label: str, page_url: str) -> str:
    """Find an image only when its nearby visible text identifies this option."""
    wanted = norm_text(label)
    if not wanted:
        return ""
    words = [w for w in wanted.split() if len(w) > 2]
    best_url, best_score = "", 0
    for node in soup.find_all(string=True):
        visible = norm_text(str(node))
        if not visible or (wanted not in visible and visible not in wanted):
            continue
        parent = node.parent
        for depth in range(5):
            if parent is None:
                break
            context = norm_text(parent.get_text(" ", strip=True))
            score = sum(1 for word in words if word in context)
            # Exact label context is required; don't grab a generic product photo.
            if score >= max(1, len(words) - 1) and len(context) < 900:
                candidates = []
                for tag in parent.find_all(["img", "source"]):
                    url = image_url_from_tag(tag, page_url)
                    if url:
                        candidates.append(url)
                for tag in [parent]:
                    url = image_url_from_tag(tag, page_url)
                    if url:
                        candidates.append(url)
                if candidates and score > best_score:
                    best_url, best_score = candidates[0], score
            parent = parent.parent
    if best_url:
        return best_url
    # Fallback to the existing label-aware alt/title matcher. It must still
    # identify the label; no first-image or generic logo fallback is allowed.
    fallback = audit.patch_image_for_label(soup, label)
    return fallback if fallback and words else ""

def valid_image_bytes(data: bytes, content_type: str) -> str | None:
    if not data or len(data) < 80:
        return None
    if data.startswith(b"\x89PNG\r\n\x1a\n"):
        return ".png"
    if data.startswith(b"\xff\xd8\xff"):
        return ".jpg"
    if data[:6] in (b"GIF87a", b"GIF89a"):
        return ".gif"
    if data[:4] == b"RIFF" and data[8:12] == b"WEBP":
        return ".webp"
    ctype = (content_type or "").split(";")[0].strip().lower()
    return { "image/png": ".png", "image/jpeg": ".jpg", "image/webp": ".webp", "image/gif": ".gif" }.get(ctype)

def download_patch_image(url: str, team: str) -> str:
    if not url:
        return ""
    digest = hashlib.sha256(url.encode("utf-8")).hexdigest()[:20]
    headers = {**audit.HEADERS, "Referer": BASE + "/"}
    response = requests.get(url, headers=headers, timeout=(12, 35), stream=True)
    response.raise_for_status()
    chunks, total = [], 0
    for chunk in response.iter_content(64 * 1024):
        if not chunk:
            continue
        total += len(chunk)
        if total > 8 * 1024 * 1024:
            raise ValueError("image exceeds 8 MiB")
        chunks.append(chunk)
    data = b"".join(chunks)
    extension = valid_image_bytes(data, response.headers.get("Content-Type", ""))
    if not extension:
        raise ValueError("supplier URL did not return a recognised image")
    team_slug = re.sub(r"[^a-z0-9]+", "-", norm_text(team)).strip("-") or "club-a-verifier"
    folder = ASSET_DIR / team_slug
    folder.mkdir(parents=True, exist_ok=True)
    target = folder / f"{digest}{extension}"
    if not target.exists():
        target.write_bytes(data)
    return target.relative_to(ROOT).as_posix()

def existing_supplier_urls() -> set[str]:
    found = set()
    pattern = re.compile(r"""["'](?:supplierUrl|sourceUrl)["']\s*:\s*["'](https?://[^"']+)["']""", re.I)
    for path in CATALOG_FILES:
        if path.exists():
            found.update(match.group(1).rstrip("/") for match in pattern.finditer(path.read_text(encoding="utf-8")))
    return found

def crawl_collections():
    html, final_url = audit.fetch(BASE + "/collections/")
    if not html:
        raise RuntimeError("Impossible de charger l'index des collections Vivi Jersey")
    soup = BeautifulSoup(html, "html.parser")
    collections = {}
    for anchor in soup.select("a[href]"):
        url = audit.norm_url(anchor.get("href", ""))
        if not url or "/collections/" not in urlparse(url).path:
            continue
        label = anchor.get_text(" ", strip=True) or audit.slug_of(url).replace("-", " ").title()
        if collection_is_relevant(url, label):
            collections[url] = label
    max_collections = int(os.getenv("MAX_COLLECTIONS", "500"))
    if len(collections) > max_collections:
        collections = dict(list(collections.items())[:max_collections])
    print(f"Collections clubs/ligues candidates: {len(collections)}", flush=True)
    product_teams = defaultdict(set)
    collection_errors = []
    for index, (collection_url, label) in enumerate(collections.items(), 1):
        page_html, final_collection_url = audit.fetch(collection_url)
        if not page_html:
            collection_errors.append({"collection": label, "url": collection_url, "error": "collection inaccessible"})
            continue
        collection_soup = BeautifulSoup(page_html, "html.parser")
        h1 = collection_soup.find("h1")
        collection_label = h1.get_text(" ", strip=True) if h1 else label
        product_urls = set()
        _, first_links = audit.collect_links(page_html, r"/products/")
        product_urls.update(first_links)
        for page_url in audit.find_pages(final_collection_url, page_html):
            if page_url == final_collection_url:
                continue
            page, _ = audit.fetch(page_url)
            if page:
                _, links = audit.collect_links(page, r"/products/")
                product_urls.update(links)
        slug = audit.slug_of(collection_url)
        is_league = slug in LEAGUE_COLLECTIONS or slug in GENERIC_FOOTBALL_COLLECTIONS
        collection_team = None if is_league else (
            infer_team_from_title(collection_label) or collection_label
        )
        for product_url in product_urls:
            # Keep league-page products too; process_product will require an
            # explicit club name in the product title before assigning them.
            product_teams[product_url]
            if collection_team:
                product_teams[product_url].add(collection_team)
        if index % 10 == 0 or index == len(collections):
            print(f"Collections parcourues {index}/{len(collections)} — fiches uniques {len(product_teams)}", flush=True)
        time.sleep(0.1)
    # League collections are used to discover missing clubs. The product title
    # must name a known club before a league-only item can be assigned.
    return product_teams, collection_errors, len(collections)

def process_product(url: str, collection_teams: set[str], catalog_urls: set[str]) -> dict:
    html, final_url = audit.fetch(url)
    if not html:
        return {"supplier_url": url, "status": "unreadable_product_page", "options": []}
    soup = BeautifulSoup(html, "html.parser")
    h1 = soup.find("h1")
    title = h1.get_text(" ", strip=True) if h1 else ""
    if not title:
        meta = soup.find("meta", property="og:title")
        title = meta.get("content", "").strip() if meta else ""
    title_team = infer_team_from_title(title)
    candidate_teams = set(collection_teams)
    if title_team:
        if not candidate_teams or title_team in candidate_teams:
            team = title_team
        else:
            return {"supplier_url": final_url, "title": title, "status": "team_conflict", "candidate_teams": sorted(candidate_teams), "title_team": title_team, "options": []}
    elif len(candidate_teams) == 1:
        team = next(iter(candidate_teams))
    elif not candidate_teams:
        return {"supplier_url": final_url, "title": title, "status": "club_unidentified", "options": []}
    else:
        return {"supplier_url": final_url, "title": title, "status": "ambiguous_club", "candidate_teams": sorted(candidate_teams), "options": []}

    page_text = soup.get_text(" ", strip=True)
    patch_groups = audit.extract_patches(page_text)
    options = []
    download_errors = []
    for group in patch_groups:
        slot = int(group.get("slot_number") or 0)
        for raw_option in group.get("options", []):
            label = re.sub(r"\s+", " ", str(raw_option.get("label", ""))).strip()
            if not label or label.casefold() in {"no patch", "none", "no"}:
                continue
            image_source = contextual_patch_image(soup, label, final_url)
            local_image = ""
            if image_source:
                try:
                    local_image = download_patch_image(image_source, team)
                except Exception as exc:
                    download_errors.append({"label": label, "image_url": image_source, "error": str(exc)})
            usd = raw_option.get("extra_price_usd")
            options.append({
                "id": hashlib.sha1(f"{final_url}|{slot}|{label}".encode()).hexdigest()[:16],
                "label": label,
                "slot_number": slot,
                "image_url": local_image,
                "source_image_url": image_source,
                "extra_price_usd": usd,
                "extra_price_eur": None,
                "price_currency": "USD",
                "supplier_url": final_url,
                "image_downloaded": bool(local_image),
            })
    status = "patches_found" if options else ("no_patch_options" if not patch_groups else "patch_options_unreadable")
    if options and any(not option["image_downloaded"] for option in options):
        status = "patch_images_incomplete"
    return {
        "supplier_url": final_url,
        "title": title,
        "team": team,
        "status": status,
        "patch_slots_detected": len(patch_groups),
        "options": options,
        "download_errors": download_errors,
        "catalog_match": final_url.rstrip("/") in catalog_urls,
    }

def main():
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    catalog_urls = existing_supplier_urls()
    if not catalog_urls:
        print("AVERTISSEMENT: aucune URL fournisseur exacte trouvée dans le catalogue actuel.", flush=True)
    product_teams, collection_errors, collection_count = crawl_collections()
    if not product_teams:
        raise RuntimeError("Aucune fiche produit trouvée dans les collections de clubs/ligues.")
    results = []
    with ThreadPoolExecutor(max_workers=3) as pool:
        futures = {
            pool.submit(process_product, url, teams, catalog_urls): url
            for url, teams in product_teams.items()
        }
        for index, future in enumerate(as_completed(futures), 1):
            try:
                results.append(future.result())
            except Exception as exc:
                results.append({"supplier_url": futures[future], "status": "processing_error", "error": str(exc), "options": []})
            if index % 50 == 0 or index == len(futures):
                print(f"Fiches fournisseur inspectées: {index}/{len(futures)}", flush=True)

    # Only exact existing supplier URL matches are eligible for website display.
    # No club-only/global options are generated; each key is a precise product URL.
    library = {}
    for product in results:
        if not product.get("catalog_match") or product.get("status") not in {"patches_found", "patch_images_incomplete"}:
            continue
        if not product.get("team") or not product.get("options"):
            continue
        existing = library.setdefault(product["supplier_url"].rstrip("/"), [])
        seen = {(int(item["slot_number"]), norm_text(item["label"])) for item in existing}
        for option in product["options"]:
            key = (int(option["slot_number"]), norm_text(option["label"]))
            if key not in seen:
                existing.append({
                    "id": option["id"],
                    "label": option["label"],
                    "slot_number": option["slot_number"],
                    "image_url": option["image_url"],
                    "extra_price_eur": 0,
                    "extra_price_usd": option["extra_price_usd"],
                    "supplier_image_url": option["source_image_url"],
                    "supplier_url": option["supplier_url"],
                })
                seen.add(key)

    # Site-facing JS manifest is deliberately keyed by exact supplier URL.
    js_payload = "window.JERSEYHUB_PATCH_LIBRARY = " + json.dumps(library, ensure_ascii=False, separators=(",", ":")) + ";\n"
    (ROOT / "vivi-patch-library.js").write_text(js_payload, encoding="utf-8")
    manifest = {
        "source": BASE,
        "generated_at_utc": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "collection_count": collection_count,
        "unique_product_pages": len(product_teams),
        "catalog_supplier_urls": len(catalog_urls),
        "catalog_matched_products_with_patches": len(library),
        "options_in_site_manifest": sum(len(items) for items in library.values()),
        "options_detected_total": sum(len(item.get("options", [])) for item in results),
        "images_downloaded": sum(1 for item in results for option in item.get("options", []) if option.get("image_downloaded")),
        "options_without_downloaded_image": sum(1 for item in results for option in item.get("options", []) if not option.get("image_downloaded")),
        "collection_errors": collection_errors,
        "products": sorted(results, key=lambda item: (item.get("team", ""), item.get("title", ""))),
    }
    (DATA_DIR / "vivi-patch-library.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    with (DATA_DIR / "vivi-patch-library.csv").open("w", encoding="utf-8", newline="") as handle:
        writer = csv.writer(handle)
        writer.writerow(["team", "product", "status", "catalog_match", "slot", "label", "price_usd", "image_downloaded", "local_image", "supplier_url"])
        for product in results:
            for option in product.get("options", []):
                writer.writerow([product.get("team", ""), product.get("title", ""), product.get("status", ""), product.get("catalog_match", False), option.get("slot_number"), option.get("label"), option.get("extra_price_usd"), option.get("image_downloaded"), option.get("image_url"), product.get("supplier_url", "")])

    summary = [
        "# Bibliothèque de patchs Vivi Jersey — JerseyHub",
        "",
        f"- Collections parcourues : {collection_count}",
        f"- Fiches fournisseur uniques : {len(product_teams)}",
        f"- Fiches fournisseur exactes déjà présentes dans JerseyHub : {sum(1 for item in results if item.get('catalog_match'))}",
        f"- Options de patch détectées : {manifest['options_detected_total']}",
        f"- Images de patch réellement téléchargées : {manifest['images_downloaded']}",
        f"- Options sans image téléchargée : {manifest['options_without_downloaded_image']}",
        f"- Fiches existantes avec options ajoutées au manifeste site : {len(library)}",
        f"- Options dans le manifeste site : {manifest['options_in_site_manifest']}",
        "",
        "Les options du manifeste site sont associées à une URL fournisseur exacte déjà présente dans le catalogue.",
        "Les patchs ambigus, les clubs non identifiés et les images sans correspondance fiable restent hors du manifeste site.",
        "Les prix sont conservés dans leur devise fournisseur (USD). Aucun taux EUR arbitraire n'est appliqué.",
        "Aucune donnée Supabase n'est modifiée et aucun déploiement n'est lancé par ce script.",
        "",
    ]
    (ROOT / "VIVI-PATCH-LIBRARY-REPORT.md").write_text("\n".join(summary), encoding="utf-8")
    print("\n".join(summary), flush=True)

if __name__ == "__main__":
    main()
