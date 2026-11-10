#!/usr/bin/env python3
"""Read-only, Bundesliga-only Vivi Jersey patch audit for JerseyHub.

The report is an evidence-gathering step only. It never edits the catalogue,
Supabase, product records, or the public site.
"""
import csv
import json
import os
import re
import time
import unicodedata
from pathlib import Path
from urllib.parse import urljoin, urlparse, urlunparse, parse_qs, unquote
import xml.etree.ElementTree as ET

import requests
from bs4 import BeautifulSoup

BASE = "https://www.vivi-jersey.com"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; JerseyHub-Bundesliga-Patch-Audit/1.0)",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}
# German top-flight clubs for the 2025-26 / 2026-27 supplier catalogue.
# Official 2026-27 Bundesliga membership (18 clubs). St. Pauli and Wolfsburg
# are deliberately excluded: they are not in the 2026-27 top flight.
CURRENT_BUNDESLIGA_SEASON = "2026-27"
CLUB_ALIASES = {
    "bayern": ("bayern-munchen", "bayern-munich", "fc-bayern", "拜仁"),
    "dortmund": ("dortmund", "borussia-dortmund", "bvb", "多特"),
    "rb-leipzig": ("rb-leipzig", "rasenballsport-leipzig", "leipzig", "莱比锡"),
    "leverkusen": ("bayer-leverkusen", "leverkusen", "勒沃库森"),
    "frankfurt": ("eintracht-frankfurt", "frankfurt", "法兰克福"),
    "freiburg": ("sc-freiburg", "freiburg", "弗赖堡"),
    "stuttgart": ("vfb-stuttgart", "stuttgart", "斯图加特"),
    "mainz": ("mainz-05", "fsv-mainz", "mainz", "美因茨"),
    "werder-bremen": ("werder-bremen", "bremen", "云达不莱梅"),
    "monchengladbach": ("borussia-monchengladbach", "monchengladbach", "gladbach", "门兴"),
    "union-berlin": ("union-berlin", "1-fc-union-berlin", "柏林联合"),
    "augsburg": ("fc-augsburg", "augsburg", "奥格斯堡"),
    "hoffenheim": ("tsg-hoffenheim", "hoffenheim", "霍芬海姆"),
    "hamburg": ("hamburger-sv", "hamburg-sv", "hamburg", "汉堡"),
    "koln": ("1-fc-koln", "fc-koln", "koln", "koeln", "cologne", "科隆"),
    "schalke": ("fc-schalke-04", "schalke-04", "schalke", "沙尔克"),
    "elversberg": ("sv-elversberg", "elversberg", "埃尔弗斯贝格"),
    "paderborn": ("sc-paderborn-07", "sc-paderborn", "paderborn", "帕德博恩"),
}
TEAM_COLLECTION_SLUGS = {
    "augsburg": ("fc-augsburg", "augsburg"),
    "freiburg": ("sc-freiburg", "freiburg"),
    "hoffenheim": ("tsg-hoffenheim", "hoffenheim"),
    "mainz": ("mainz-05", "fsv-mainz"),
    "hamburg": ("hamburger-sv", "hamburg"),
    "koln": ("1-fc-koln", "fc-koln", "koln"),
    "schalke": ("fc-schalke-04", "schalke-04", "schalke"),
    "elversberg": ("sv-elversberg", "elversberg"),
    "paderborn": ("sc-paderborn-07", "sc-paderborn", "paderborn"),
}
CURRENT_TEAMS = set(CLUB_ALIASES)

SESSION = requests.Session()
SESSION.headers.update(HEADERS)
COUNTS = {}

def norm(value):
    value = unicodedata.normalize("NFKD", str(value or "")).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", " ", value.lower()).strip()

def canonical(url):
    p = urlparse(urljoin(BASE, url))
    if p.netloc.lower() not in ("vivi-jersey.com", "www.vivi-jersey.com"):
        return ""
    return urlunparse(("https", "www.vivi-jersey.com", p.path.rstrip("/"), "", "", ""))

def fetch(url, attempts=4):
    for attempt in range(attempts):
        try:
            response = SESSION.get(url, timeout=(12, 25), allow_redirects=True)
            COUNTS[str(response.status_code)] = COUNTS.get(str(response.status_code), 0) + 1
            if response.status_code == 200 and len(response.text) > 500:
                time.sleep(0.8)
                return response.text, response.url, 200
            if response.status_code in (404, 410):
                return "", response.url, response.status_code
            if response.status_code not in (403, 408, 425, 429, 500, 502, 503, 504):
                return "", response.url, response.status_code
        except requests.RequestException:
            COUNTS["exception"] = COUNTS.get("exception", 0) + 1
        time.sleep(min(20, 2 ** (attempt + 1)))
    return "", url, "retry_exhausted"

def team_for_collection(url, label):
    path = unquote(urlparse(url).path).rstrip("/")
    slug = path.split("/")[-1].lower()
    raw_label = str(label or "").lower()
    haystack = slug + " " + raw_label + " " + norm(label).replace(" ", "-")
    for team, aliases in CLUB_ALIASES.items():
        if any(alias in haystack for alias in aliases):
            return team
    return ""


def sitemap_locs(content):
    """Extract sitemap <loc> values, including XML namespaces."""
    try:
        root = ET.fromstring(content)
        return [
            (node.text or "").strip()
            for node in root.iter()
            if node.tag.rsplit("}", 1)[-1].lower() == "loc" and (node.text or "").strip()
        ]
    except ET.ParseError:
        soup = BeautifulSoup(content, "html.parser")
        return [node.get_text(strip=True) for node in soup.find_all("loc") if node.get_text(strip=True)]


def product_links(page_html, page_url, default_team=None):
    links = {}
    page = BeautifulSoup(page_html, "html.parser")
    for anchor in page.select("a[href]"):
        product_url = canonical(anchor.get("href", ""))
        if not product_url or "/products/" not in urlparse(product_url).path:
            continue
        team = team_for_collection(product_url, anchor.get_text(" ", strip=True)) or default_team
        if team in CURRENT_TEAMS:
            links[product_url] = team
    return links

def paginated_collection_pages(url, html, max_pages=12):
    """Discover collection pages from anchors and probe numbered pagination.

    Vivi sometimes exposes only a subset of pagination links in the initial HTML.
    Probe ?page=1..N as a fallback so later collection pages are not silently
    skipped. Only keep pages that actually contain product links.
    """
    pages = {url}
    queue = [url]
    base_path = urlparse(url).path.rstrip("/")
    while queue and len(pages) < max_pages:
        current = queue.pop(0)
        page_html = html if current == url else fetch(current)[0]
        if not page_html:
            continue
        soup = BeautifulSoup(page_html, "html.parser")
        for anchor in soup.select("a[href]"):
            dest = urljoin(current, anchor.get("href", ""))
            parsed = urlparse(dest)
            if parsed.netloc.lower() not in ("vivi-jersey.com", "www.vivi-jersey.com"):
                continue
            if parsed.path.rstrip("/") != base_path:
                continue
            query = parse_qs(parsed.query)
            if any(k.lower() in ("page", "p", "pageindex", "currentpage") for k in query):
                normalized = urlunparse(("https", "www.vivi-jersey.com", parsed.path, "", parsed.query, ""))
                if normalized not in pages and len(pages) < max_pages:
                    pages.add(normalized)
                    queue.append(normalized)

    # Fallback: sequentially probe numbered pages because Vivi's pager may
    # render page links through JavaScript or omit later numbers from the DOM.
    for page_number in range(1, max_pages + 1):
        candidate = urlunparse(("https", "www.vivi-jersey.com", base_path, "",
                                f"page={page_number}", ""))
        if candidate in pages:
            continue
        page_html, final_url, status = fetch(candidate, attempts=2)
        if status != 200 or not page_html:
            continue
        has_products = bool(BeautifulSoup(page_html, "html.parser").select('a[href*="/products/"]'))
        if has_products:
            normalized = urlunparse(("https", "www.vivi-jersey.com",
                                     urlparse(final_url).path, "",
                                     urlparse(final_url).query, ""))
            pages.add(normalized)
    return sorted(pages)

def clean_label(value):
    value = re.sub(r"\[\s*\+\s*\$\s*[0-9]+(?:\.[0-9]+)?\s*\]", "", value)
    value = re.sub(r"\s+", " ", value).strip(" -:;")
    return value

def exact_image_for_label(soup, label):
    wanted = norm(label)
    matches = []
    for img in soup.select("img[src], img[data-src], img[data-original], img[data-original-src]"):
        alt = norm(img.get("alt") or img.get("title") or img.get("data-title") or "")
        if not alt or alt != wanted:
            continue
        src = img.get("data-original") or img.get("data-original-src") or img.get("data-src") or img.get("src")
        if src:
            matches.append(urljoin(BASE, src))
    unique = list(dict.fromkeys(matches))
    return unique[0] if len(unique) == 1 else ""

def extract_options(soup):
    """Read Vivi's real custom-attribute controls and their adjacent image nodes.

    Vivi renders patch options as input[data-name][data-price] inside
    .custom_attr_item, with the original image in .pro_enlarge[data-picture]
    and/or .attr_pic img[data-picture]. Group IDs are kept in DOM order;
    text-only personalization groups are excluded.
    """
    groups = {}
    for control in soup.select('input[name*="OtherAttributes[custom_attributes]"]'):
        name_attr = control.get("name", "")
        match = re.search(r"custom_attributes\]\[(\d+)\]", name_attr)
        if not match:
            continue
        group_id = match.group(1)
        item = control.find_parent(class_="custom_attr_item")
        if not item:
            continue
        label = (control.get("data-name") or item.get("data-title") or "").strip()
        if not label:
            tip = item.select_one(".attr_value_tips span")
            label = tip.get_text(" ", strip=True) if tip else item.get_text(" ", strip=True)
        display_label = re.sub(r"\s*\[\s*\+\s*\$\s*[0-9]+(?:\.[0-9]+)?\s*\]\s*", "", label).strip()
        price_raw = control.get("data-price")
        try:
            price = float(price_raw) if price_raw is not None else None
        except (TypeError, ValueError):
            price = None
        picture = None
        enlarge = item.select_one(".pro_enlarge[data-picture]")
        if enlarge:
            picture = enlarge.get("data-picture")
        if not picture:
            image = item.select_one(".attr_pic img[data-picture], img[data-picture], img[src]")
            if image:
                picture = image.get("data-picture") or image.get("src")
        if picture:
            picture = urljoin(BASE, picture)
        group = groups.setdefault(group_id, {"items": [], "has_picture_options": False})
        if item.get("data-is-picture") == "1" and picture:
            group["has_picture_options"] = True
        group["items"].append({
            "label": display_label,
            "extra_price_usd": price,
            "image_url": picture,
            "image_status": "exact_adjacent_option_image" if picture and item.get("data-is-picture") == "1" else "no_option_image",
            "input_type": control.get("type", ""),
            "source_group_id": group_id,
        })

    options = []
    slot = 0
    for group_id, group in groups.items():
        if not group["has_picture_options"]:
            continue
        slot += 1
        for item in group["items"]:
            if item["image_status"] == "no_option_image":
                continue
            options.append({
                "slot_number": slot,
                "label": item["label"],
                "extra_price_usd": item["extra_price_usd"],
                "image_url": item["image_url"],
                "image_status": item["image_status"],
                "input_type": item["input_type"],
                "source_group_id": group_id,
            })
    unique = {}
    for item in options:
        unique[(item["slot_number"], norm(item["label"]), item["image_url"])] = item
    return list(unique.values()), slot


def sitemap_product_urls():
    """Discover product URLs from common Ueeshop sitemap index/product endpoints."""
    queue = [
        BASE + "/sitemap.xml",
        BASE + "/sitemap_index.xml",
        BASE + "/sitemap_products_1.xml",
    ]
    visited = set()
    found = []
    max_sitemaps = 40
    while queue and len(visited) < max_sitemaps:
        sitemap_url = queue.pop(0)
        if sitemap_url in visited:
            continue
        visited.add(sitemap_url)
        content, final_url, code = fetch(sitemap_url, attempts=2)
        if code != 200 or not content:
            continue
        for loc in sitemap_locs(content):
            absolute = urljoin(final_url or BASE, loc)
            parsed = urlparse(absolute)
            if parsed.netloc.lower() not in ("vivi-jersey.com", "www.vivi-jersey.com"):
                continue
            if "/products/" in parsed.path:
                product_url = canonical(absolute)
                if product_url:
                    found.append(product_url)
            elif "sitemap" in parsed.path.lower() and absolute not in visited and len(queue) + len(visited) < max_sitemaps:
                queue.append(absolute)
    unique = list(dict.fromkeys(found))
    print(f"Sitemap discovery: {len(visited)} sitemap(s) checked, {len(unique)} product URL(s) found.", flush=True)
    return unique

def main():
    index_html, index_url, status = fetch(BASE + "/collections/")
    if status != 200:
        raise SystemExit(f"Collections index unavailable: {status}")
    index = BeautifulSoup(index_html, "html.parser")
    collections = {}
    collection_errors = []
    for anchor in index.select("a[href]"):
        url = canonical(anchor.get("href", ""))
        if not url or "/collections/" not in urlparse(url).path:
            continue
        label = anchor.get_text(" ", strip=True) or unquote(urlparse(url).path.split("/")[-1])
        team = team_for_collection(url, label)
        if team in CURRENT_TEAMS:
            collections[url] = {"team": team, "label": label, "discovery": "collections_index"}

    # Probe canonical collection slugs for current 2026-27 clubs not linked
    # from Vivi's public collections index. A URL is accepted only after HTTP
    # 200 and at least one product link has been observed.
    known_teams = {meta["team"] for meta in collections.values()}
    for team, slugs in TEAM_COLLECTION_SLUGS.items():
        if team in known_teams:
            continue
        for slug in slugs:
            collection_url = canonical(f"{BASE}/collections/{slug}")
            html, final_url, code = fetch(collection_url, attempts=2)
            if code == 200 and html:
                links = product_links(html, final_url, team)
                if links:
                    collections[final_url] = {
                        "team": team, "label": slug, "discovery": "targeted_collection_probe"
                    }
                    known_teams.add(team)
                    print(f"Collection probe found {team}: {final_url} ({len(links)} products)", flush=True)
                    break
            elif code not in (404, 410):
                collection_errors.append({"team": team, "url": collection_url, "status": code})
            time.sleep(0.5)

    if not collections:
        raise SystemExit("No current Bundesliga club collections detected; stopping without changes.")

    products = {}
    for collection_url, meta in collections.items():
        html, final_url, code = fetch(collection_url)
        if code != 200:
            collection_errors.append({"team": meta["team"], "url": collection_url, "status": code})
            continue
        for page_url in paginated_collection_pages(final_url, html):
            page_html = html if page_url == final_url else fetch(page_url)[0]
            if not page_html:
                continue
            for product_url, team in product_links(page_html, page_url, meta["team"]).items():
                products.setdefault(product_url, team)
        time.sleep(0.5)

    # Some supplier landing pages are league-wide rather than team-specific.
    # Only retain product URLs whose own URL/title identifies a current club.
    league_pages_checked = []
    for slug in ("the-bundesliga", "bundesliga", "bundesliga-jersey"):
        league_url = canonical(f"{BASE}/collections/{slug}")
        html, final_url, code = fetch(league_url, attempts=2)
        if code == 200 and html:
            for page_url in paginated_collection_pages(final_url, html):
                league_pages_checked.append(page_url)
                page_html = html if page_url == final_url else fetch(page_url)[0]
                if not page_html:
                    continue
                for product_url, team in product_links(page_html, page_url).items():
                    products.setdefault(product_url, team)

    sitemap_added = 0
    for product_url in sitemap_product_urls():
        team = team_for_collection(product_url, "")
        if team and team in CURRENT_TEAMS and product_url not in products:
            products[product_url] = team
            sitemap_added += 1

    results = []
    for number, (product_url, team) in enumerate(products.items(), 1):
        html, final_url, code = fetch(product_url)
        row = {"team": team, "supplier_url": final_url, "http_status": code,
               "title": "", "patch_slots": 0, "patch_options": [], "patch_status": "unreadable"}
        if code == 200:
            soup = BeautifulSoup(html, "html.parser")
            h1 = soup.find("h1")
            og = soup.find("meta", property="og:title")
            row["title"] = (h1.get_text(" ", strip=True) if h1 else "") or (og.get("content", "") if og else "")
            row["patch_options"], row["patch_slots"] = extract_options(soup)
            if not row["patch_slots"]:
                row["patch_status"] = "no_patch_selector_found"
            elif not row["patch_options"]:
                row["patch_status"] = "selector_found_options_unreadable"
            elif all(x["image_url"] for x in row["patch_options"]):
                row["patch_status"] = "images_matched"
            else:
                row["patch_status"] = "needs_image_review"
        results.append(row)
        print(f"[{number}/{len(products)}] {team}: {row['title']} — {row['patch_status']}", flush=True)

    results.sort(key=lambda x: (x["team"], x["title"]))
    teams_found = sorted(set(x["team"] for x in results))
    teams_missing = sorted(CURRENT_TEAMS - set(teams_found))
    report = {
        "source": "Vivi Jersey 2026-27 Bundesliga club collections",
        "season": CURRENT_BUNDESLIGA_SEASON,
        "current_league_teams": sorted(CURRENT_TEAMS),
        "generated_at_utc": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "collection_count": len(collections),
        "league_collection_pages_checked": league_pages_checked,
        "sitemap_product_pages_added": sitemap_added,
        "product_count": len(results),
        "collection_errors": collection_errors,
        "http_status_counts": COUNTS,
        "teams_found": teams_found,
        "teams_not_detected": teams_missing,
        "products": results,
    }
    Path("data").mkdir(exist_ok=True)
    Path("data/vivi-bundesliga-patch-audit.json").write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    with open("data/vivi-bundesliga-patch-audit.csv", "w", encoding="utf-8-sig", newline="") as file:
        writer = csv.writer(file)
        writer.writerow(["team", "title", "supplier_url", "patch_status", "slot_number", "label", "extra_price_usd", "image_url", "image_status"])
        for product in results:
            if product["patch_options"]:
                for option in product["patch_options"]:
                    writer.writerow([product["team"], product["title"], product["supplier_url"], product["patch_status"], option["slot_number"], option["label"], option["extra_price_usd"], option["image_url"] or "", option["image_status"]])
            else:
                writer.writerow([product["team"], product["title"], product["supplier_url"], product["patch_status"], "", "", "", "", ""])
    summary = [
        "# Audit des patchs — Bundesliga 2026-27",
        "",
        f"- Clubs de Bundesliga attendus : {len(CURRENT_TEAMS)}",
        f"- Collections de clubs détectées : {len(collections)}",
        f"- Fiches produits analysées : {len(results)}",
        f"- Clubs trouvés : {', '.join(teams_found) or 'aucun'}",
        f"- Clubs non détectés : {', '.join(teams_missing) or 'aucun'}",
        f"- Fiches avec images de patch reliées sans ambiguïté : {sum(x['patch_status'] == 'images_matched' for x in results)}",
        f"- Fiches nécessitant une vérification d'image : {sum(x['patch_status'] == 'needs_image_review' for x in results)}",
        "",
        "Audit en lecture seule : aucune donnée du catalogue, de Supabase ou du site public n'a été modifiée.",
        "Les suppléments restent en USD ; aucune conversion EUR n'est inventée.",
    ]
    Path("VIVI-BUNDESLIGA-PATCH-AUDIT.md").write_text("\n".join(summary) + "\n", encoding="utf-8")
    print("\n".join(summary), flush=True)

if __name__ == "__main__":
    main()

# Trigger a fresh supplier-sitemap coverage audit on the preparation branch.
