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
from urllib.parse import urljoin, urlparse, urlunparse, parse_qs

import requests
from bs4 import BeautifulSoup

BASE = "https://www.vivi-jersey.com"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; JerseyHub-Bundesliga-Patch-Audit/1.0)",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}
# German top-flight clubs for the 2025-26 / 2026-27 supplier catalogue.
CLUB_ALIASES = {
    "bayern": ("bayern-munchen", "bayern-munich", "fc-bayern"),
    "dortmund": ("dortmund", "borussia-dortmund", "bvb"),
    "rb-leipzig": ("rb-leipzig", "rasenballsport-leipzig"),
    "leverkusen": ("bayer-leverkusen", "leverkusen"),
    "frankfurt": ("eintracht-frankfurt", "frankfurt"),
    "freiburg": ("sc-freiburg", "freiburg"),
    "stuttgart": ("vfb-stuttgart", "stuttgart"),
    "wolfsburg": ("vfl-wolfsburg", "wolfsburg"),
    "mainz": ("mainz-05", "fsv-mainz"),
    "werder-bremen": ("werder-bremen", "bremen"),
    "monchengladbach": ("borussia-monchengladbach", "monchengladbach", "gladbach"),
    "union-berlin": ("union-berlin", "1-fc-union-berlin"),
    "augsburg": ("fc-augsburg", "augsburg"),
    "hoffenheim": ("tsg-hoffenheim", "hoffenheim"),
    "st-pauli": ("fc-st-pauli", "st-pauli"),
    "hamburg": ("hamburger-sv", "hamburg-sv", "hamburg"),
    "heidenheim": ("fc-heidenheim", "heidenheim"),
    "koln": ("fc-koln", "1-fc-koln", "koln", "cologne"),
}
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
    slug = urlparse(url).path.rstrip("/").split("/")[-1].lower()
    haystack = slug + " " + norm(label).replace(" ", "-")
    for team, aliases in CLUB_ALIASES.items():
        if any(alias in haystack for alias in aliases):
            return team
    return ""

def paginated_collection_pages(url, html, max_pages=12):
    pages = {url}
    queue = [url]
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
            if parsed.path.rstrip("/") != urlparse(url).path.rstrip("/"):
                continue
            query = parse_qs(parsed.query)
            if any(k.lower() in ("page", "p", "pageindex", "currentpage") for k in query):
                normalized = urlunparse(("https", "www.vivi-jersey.com", parsed.path, "", parsed.query, ""))
                if normalized not in pages and len(pages) < max_pages:
                    pages.add(normalized)
                    queue.append(normalized)
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
    text = soup.get_text(" ", strip=True)
    markers = list(re.finditer(r"Select\s+Patch\s*[:：]?", text, re.I))
    options = []
    for slot, marker in enumerate(markers, 1):
        end = markers[slot].start() if slot < len(markers) else len(text)
        section = text[marker.end():end]
        stop = re.search(r"Customi[sz]e\s+this\s+item|Total\s+extras|Qty\s*:|ADD\s+TO\s+CART", section, re.I)
        if stop:
            section = section[:stop.start()]
        # Vivi pages expose option captions as "Image: NAME" followed by its surcharge.
        blocks = list(re.finditer(r"Image\s*:\s*(.+?)(?=(?:\s*\[Input\])?\s*Image\s*:|$)", section, re.I))
        for block in blocks:
            raw = block.group(1).strip()
            price_match = re.search(r"\[\s*\+\s*\$\s*([0-9]+(?:\.[0-9]+)?)\s*\]", raw)
            label = clean_label(raw)
            if not label or norm(label) == "no patch":
                continue
            image_url = exact_image_for_label(soup, label)
            options.append({
                "slot_number": slot,
                "label": label,
                "extra_price_usd": float(price_match.group(1)) if price_match else None,
                "image_url": image_url or None,
                "image_status": "exact_alt_match" if image_url else "image_not_unambiguously_matched",
            })
    # De-duplicate identical label/slot pairs without merging different slots.
    unique = {}
    for item in options:
        unique[(item["slot_number"], norm(item["label"]))] = item
    return list(unique.values()), len(markers)

def main():
    index_html, index_url, status = fetch(BASE + "/collections/")
    if status != 200:
        raise SystemExit(f"Collections index unavailable: {status}")
    index = BeautifulSoup(index_html, "html.parser")
    collections = {}
    for anchor in index.select("a[href]"):
        url = canonical(anchor.get("href", ""))
        if not url or "/collections/" not in urlparse(url).path:
            continue
        label = anchor.get_text(" ", strip=True) or urlparse(url).path.split("/")[-1]
        team = team_for_collection(url, label)
        if team:
            collections[url] = {"team": team, "label": label}
    if not collections:
        raise SystemExit("No German club collections detected; stopping without changes.")
    products = {}
    collection_errors = []
    for collection_url, meta in collections.items():
        html, final_url, code = fetch(collection_url)
        if code != 200:
            collection_errors.append({"team": meta["team"], "url": collection_url, "status": code})
            continue
        for page_url in paginated_collection_pages(final_url, html):
            page_html = html if page_url == final_url else fetch(page_url)[0]
            if not page_html:
                continue
            page = BeautifulSoup(page_html, "html.parser")
            for anchor in page.select("a[href]"):
                product_url = canonical(anchor.get("href", ""))
                if product_url and "/products/" in urlparse(product_url).path:
                    products.setdefault(product_url, meta["team"])
        time.sleep(0.5)
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
    report = {
        "source": "Vivi Jersey German club collections",
        "generated_at_utc": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "collection_count": len(collections),
        "product_count": len(results),
        "collection_errors": collection_errors,
        "http_status_counts": COUNTS,
        "teams_found": sorted(set(x["team"] for x in results)),
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
        "# Audit des patchs — clubs allemands / Bundesliga",
        "",
        f"- Collections de clubs allemands détectées : {len(collections)}",
        f"- Fiches produits analysées : {len(results)}",
        f"- Clubs trouvés : {', '.join(report['teams_found']) or 'aucun'}",
        f"- Fiches avec toutes les images reliées sans ambiguïté : {sum(x['patch_status'] == 'images_matched' for x in results)}",
        f"- Fiches nécessitant une vérification d'image : {sum(x['patch_status'] == 'needs_image_review' for x in results)}",
        "",
        "Audit en lecture seule : aucune donnée du catalogue, de Supabase ou du site public n'a été modifiée.",
        "Les suppléments restent en USD dans ce rapport ; aucune conversion en EUR n'est inventée.",
    ]
    Path("VIVI-BUNDESLIGA-PATCH-AUDIT.md").write_text("\n".join(summary) + "\n", encoding="utf-8")
    print("\n".join(summary), flush=True)

if __name__ == "__main__":
    main()
