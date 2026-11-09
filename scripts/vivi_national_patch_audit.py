#!/usr/bin/env python3
"""Audit Vivi Jersey national-team product pages for model-specific patch options.

Read-only: this script does not modify the catalogue, Supabase, or the public site.
It only creates JSON/CSV/Markdown reports for human review.
"""
import csv
import json
import os
import re
import threading
import time
import unicodedata
from concurrent.futures import ThreadPoolExecutor, as_completed
from difflib import SequenceMatcher
from pathlib import Path
from urllib.parse import unquote, urlparse

import requests
from bs4 import BeautifulSoup

BASE = "https://www.vivi-jersey.com"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; JerseyHubCatalogAudit/1.0; +https://github.com/bzk117/jerseyhub)",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}
USD_TO_EUR = 0.8957  # Same reference conversion factor used by the existing Vivi audit.
LOCAL = threading.local()
STATS = {"200": 0, "404": 0, "other": 0, "exception": 0}
LOCK = threading.Lock()


def session():
    if not hasattr(LOCAL, "session"):
        LOCAL.session = requests.Session()
        LOCAL.session.headers.update(HEADERS)
    return LOCAL.session


def norm(value):
    value = unicodedata.normalize("NFKD", str(value or "")).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", " ", value.lower()).strip()


def product_url(product):
    for key in ("supplierUrl", "sourceUrl"):
        candidate = str(product.get(key) or "").strip()
        host = urlparse(candidate).netloc.lower()
        if candidate.startswith("http") and host.endswith("vivi-jersey.com"):
            return candidate.split("?")[0]
    image = str(product.get("image") or "")
    filename = unquote(urlparse(image).path.rsplit("/", 1)[-1])
    stem = re.sub(r"^\d+_", "", Path(filename).stem)
    slug = re.sub(r"[^a-z0-9]+", "-", unicodedata.normalize("NFKD", stem).encode("ascii", "ignore").decode().lower()).strip("-")
    return f"{BASE}/products/{slug}" if slug else ""


def fetch(url):
    last_status = "exception"
    for attempt in range(3):
        try:
            response = session().get(url, timeout=(10, 22), allow_redirects=True)
            if response.status_code == 200 and len(response.text) > 500:
                with LOCK:
                    STATS["200"] += 1
                time.sleep(0.12)
                return response.text, response.url, 200
            if response.status_code == 404:
                with LOCK:
                    STATS["404"] += 1
                return "", response.url, 404
            last_status = str(response.status_code)
            with LOCK:
                STATS["other"] += 1
            if response.status_code not in (403, 408, 425, 429, 500, 502, 503, 504):
                return "", response.url, response.status_code
        except requests.RequestException:
            with LOCK:
                STATS["exception"] += 1
        time.sleep(1.5 * (attempt + 1))
    return "", url, last_status


def clean_label(value):
    value = re.sub(r"\[\s*\+\s*\$\s*[0-9]+(?:\.[0-9]+)?\s*\]", "", value)
    value = re.sub(r"\[Input\].*$", "", value, flags=re.I)
    value = re.sub(r"\s+", " ", value).strip(" -:;")
    words = value.split()
    for n in range(1, len(words) // 2 + 1):
        if words[:n] == words[n:2*n]:
            value = " ".join(words[:n])
            break
    return value


def image_for_label(soup, label):
    wanted = [w for w in norm(label).split() if len(w) > 2]
    best_url, best_score = "", 0
    for img in soup.select("img[src], img[data-src], img[data-original], source[srcset]"):
        src = img.get("data-src") or img.get("data-original") or img.get("src") or img.get("srcset") or ""
        if not src:
            continue
        candidate = " ".join(str(img.get(k, "")) for k in ("alt", "title", "aria-label", "data-title"))
        if img.parent:
            candidate += " " + img.parent.get_text(" ", strip=True)
        candidate += " " + src
        candidate = norm(candidate)
        score = sum(1 for word in wanted if word in candidate)
        if score > best_score:
            best_score, best_url = score, requests.compat.urljoin(BASE, src.split()[0])
    return best_url if wanted and best_score >= min(2, len(wanted)) else ""


def extract_patch_groups(soup):
    text = soup.get_text(" ", strip=True)
    matches = list(re.finditer(r"Select\s+Patch\s*[:：]?", text, re.I))
    groups = []
    for slot, match in enumerate(matches, 1):
        end = matches[slot].start() if slot < len(matches) else len(text)
        section = text[match.end():end]
        cut = re.search(r"Customi[sz]e\s+this\s+item|Total\s+extras|Qty\s*:|ADD\s+TO\s+CART", section, re.I)
        if cut:
            section = section[:cut.start()]
        raw_options = []
        image_blocks = re.finditer(r"Image\s*:\s*(.+?)(?=(?:\s*\[Input\])?\s*Image\s*:|$)", section, re.I)
        for block in image_blocks:
            chunk = block.group(1).strip()
            price_match = re.search(r"\[\s*\+\s*\$\s*([0-9]+(?:\.[0-9]+)?)\s*\]", chunk)
            label = clean_label(chunk)
            if label and norm(label) != "no patch":
                raw_options.append((label, float(price_match.group(1)) if price_match else None))
        if not raw_options:
            for match_price in re.finditer(r"([A-Za-z][A-Za-z0-9 +&'’().-]{2,}?)\s*\[\s*\+\s*\$\s*([0-9]+(?:\.[0-9]+)?)\s*\]", section):
                label = clean_label(match_price.group(1))
                if label and norm(label) != "no patch":
                    raw_options.append((label, float(match_price.group(2))))
        unique = {}
        for label, price in raw_options:
            unique.setdefault(norm(label), (label, price))
        options = []
        for label, price in unique.values():
            image = image_for_label(soup, label)
            options.append({
                "slot_number": slot,
                "label": label,
                "extra_price_usd": price,
                "extra_price_eur": round(price * USD_TO_EUR, 2) if price is not None else None,
                "image_url": image or None,
                "publishable": price is not None and bool(image),
            })
        groups.append({"slot_number": slot, "options": options})
    return groups, len(matches)


def read_products():
    source = Path("catalog.js").read_text(encoding="utf-8")
    marker = "const PRODUCTS = "
    start = source.index(marker) + len(marker)
    products, _ = json.JSONDecoder().raw_decode(source[start:].lstrip())
    national = []
    for p in products:
        if p.get("category") != "national":
            continue
        if not re.search(r"jersey|soccer|football.*shirt|shirt", p.get("name", ""), re.I):
            continue
        url = product_url(p)
        if url:
            national.append({**p, "_audit_url": url})
    return national


def audit_one(product):
    html, final_url, status = fetch(product["_audit_url"])
    base = {
        "name": product.get("name", ""),
        "team": product.get("group", ""),
        "image": product.get("image", ""),
        "supplier_url": final_url,
        "http_status": status,
        "patch_status": "unreadable",
        "patch_slots": 0,
        "patch_options": [],
        "title_match": None,
        "title_seen": "",
    }
    if status != 200:
        base["patch_status"] = "page_not_found" if status == 404 else "fetch_error"
        return base
    soup = BeautifulSoup(html, "html.parser")
    h1 = soup.find("h1")
    og = soup.find("meta", property="og:title")
    page_title = (h1.get_text(" ", strip=True) if h1 else "") or (og.get("content", "") if og else "")
    base["title_seen"] = page_title
    score = SequenceMatcher(None, norm(product.get("name", "")), norm(page_title)).ratio() if page_title else 0
    base["title_match"] = round(score, 3)
    if score < 0.78:
        base["patch_status"] = "title_mismatch"
        return base
    groups, slot_count = extract_patch_groups(soup)
    base["patch_slots"] = slot_count
    base["patch_options"] = [o for group in groups for o in group["options"]]
    if not slot_count:
        base["patch_status"] = "not_offered"
    elif not base["patch_options"]:
        base["patch_status"] = "unreadable"
    elif all(o["publishable"] for o in base["patch_options"]):
        base["patch_status"] = "verified"
    else:
        base["patch_status"] = "needs_review"
    return base


def main():
    products = read_products()
    limit = int(os.getenv("MAX_PRODUCTS", "0") or 0)
    if limit:
        products = products[:limit]
    # Deduplicate supplier pages, then map each result back to all matching catalogue entries.
    unique = {}
    for p in products:
        unique.setdefault(p["_audit_url"], []).append(p)
    results_by_url = {}
    with ThreadPoolExecutor(max_workers=int(os.getenv("WORKERS", "8"))) as pool:
        futures = {pool.submit(audit_one, entries[0]): url for url, entries in unique.items()}
        for future in as_completed(futures):
            url = futures[future]
            try:
                result = future.result()
            except Exception as exc:
                result = {"name": unique[url][0].get("name", ""), "team": unique[url][0].get("group", ""), "supplier_url": url, "http_status": "exception", "patch_status": "fetch_error", "patch_slots": 0, "patch_options": [], "title_match": None, "title_seen": "", "error": str(exc)}
            results_by_url[url] = result
    results = []
    for url, entries in unique.items():
        result = results_by_url[url]
        for p in entries:
            results.append({**result, "name": p.get("name", ""), "team": p.get("group", ""), "image": p.get("image", "")})
    results.sort(key=lambda x: (x.get("team", ""), x.get("name", "")))
    Path("data").mkdir(exist_ok=True)
    Path("data/vivi-national-patch-audit.json").write_text(json.dumps({
        "supplier": BASE, "catalogue_products_checked": len(results),
        "unique_supplier_pages": len(unique), "usd_to_eur": USD_TO_EUR,
        "fetch_stats": STATS, "results": results
    }, ensure_ascii=False, indent=2), encoding="utf-8")
    with Path("data/vivi-national-patch-audit.csv").open("w", newline="", encoding="utf-8-sig") as f:
        fields = ["patch_status", "team", "name", "http_status", "title_match", "title_seen", "patch_slots", "patch_option_count", "publishable_option_count", "supplier_url"]
        writer = csv.DictWriter(f, fieldnames=fields)
        writer.writeheader()
        for r in results:
            opts = r.get("patch_options", [])
            writer.writerow({
                "patch_status": r.get("patch_status"), "team": r.get("team"), "name": r.get("name"),
                "http_status": r.get("http_status"), "title_match": r.get("title_match"),
                "title_seen": r.get("title_seen"), "patch_slots": r.get("patch_slots"),
                "patch_option_count": len(opts), "publishable_option_count": sum(1 for o in opts if o.get("publishable")),
                "supplier_url": r.get("supplier_url")
            })
    counts = {}
    for r in results:
        counts[r["patch_status"]] = counts.get(r["patch_status"], 0) + 1
    verified = [r for r in results if r["patch_status"] == "verified"]
    option_total = sum(len(r.get("patch_options", [])) for r in verified)
    lines = [
        "# Audit des patchs — équipes nationales",
        "",
        f"- Fiches catalogue examinées : **{len(results)}**",
        f"- Pages fournisseur uniques : **{len(unique)}**",
        f"- Fiches avec patchs lisibles et images/prix vérifiés : **{len(verified)}**",
        f"- Options publiables sur ces fiches : **{option_total}**",
        f"- Conversion utilisée : 1 USD = {USD_TO_EUR} EUR (même facteur que l'audit Vivi existant)",
        "",
        "## Résultats par statut",
        ""
    ]
    lines += [f"- {key} : {value}" for key, value in sorted(counts.items())]
    lines += ["", "Aucune donnée n'a été écrite dans Supabase ou dans le catalogue public.", "Les options marquées needs_review ne doivent pas être publiées avant contrôle manuel.", ""]
    Path("VIVI-NATIONAL-PATCH-AUDIT.md").write_text("\n".join(lines), encoding="utf-8")
    print("\n".join(lines))
    print("Fetch stats:", json.dumps(STATS))


if __name__ == "__main__":
    main()
