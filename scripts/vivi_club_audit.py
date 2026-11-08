#!/usr/bin/env python3
"""Audit Vivi Jersey club collections and product options without publishing guessed records."""
import csv, json, os, re, sys, time, hashlib
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import urljoin, urlparse, urlunparse, parse_qs
import requests
from bs4 import BeautifulSoup

BASE = "https://www.vivi-jersey.com"
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; JerseyHubCatalogAudit/1.0; +https://bzk117.github.io/jerseyhub/)"}
SESSION = requests.Session()
SESSION.headers.update(HEADERS)
EXCLUDED = {
    "rugby","nhl","nfl","mlb","nba","jersey-enthusiasts","club-team","national-team",
    "retro-football-jersey","kids-jersey","women-s-jersey","womens-jersey","jacket-suit",
    "polo-suit-short-sleeve-suit","windbreaker","warmweet-jacket","player","fan","trousers",
    "pants","shorts","football-socks","soccer-others","formula-1","blind-box"
}
COUNTRIES = {
    "netherlands","holland","spain","portugal","france","england","italy","germany",
    "argentina","brazil","belgium","ireland","poland","scotland","denmark","finland",
    "wales","serbia","greece","norway","croatia","sweden","switzerland","mexico",
    "united-states","usa","canada","jamaica","nigeria","morocco","egypt","senegal",
    "algeria","cameroon","tunisia","ivory-coast","cape-verde","japan","south-korea",
    "korea","palestine","qatar","saudi-arabia","united-arab-emirates","uae","jordan",
    "ecuador","paraguay","peru","bolivia","costa-rica","venezuela","panama","haiti",
    "turkey","ghana","uruguay","chile","colombia"
}
SIZE_TOKENS = [
    "XXXXL","XXXL","XXL","XXXL","XXS","XXL","XXXXL","5XL","6XL","4XL","3XL","2XL",
    "3XS","2XS","XS","S","M","L","XL","16-2XL","16","18","20","22","24","26",
    "28","30","32","34","36","38","40","42","44","46","48","50","52","54","56",
    "2-3Y","3-4Y","4-5Y","5-6Y","6-7Y","7-8Y","8-9Y","9-10Y","10-11Y","11-12Y",
    "12-13Y","13-14Y","14-15Y"
]
SIZE_RE = re.compile(r"(?<![A-Z0-9])(" + "|".join(sorted(map(re.escape, set(SIZE_TOKENS)), key=len, reverse=True)) + r")(?![A-Z0-9])", re.I)

def fetch(url, attempts=3):
    for i in range(attempts):
        try:
            r = SESSION.get(url, timeout=30)
            if r.status_code == 200 and r.text:
                return r.text, r.url
            if r.status_code in (403, 429):
                time.sleep(2 + i * 3)
            else:
                time.sleep(0.5 + i)
        except requests.RequestException:
            time.sleep(1 + i * 2)
    return "", url

def norm_url(href, base=BASE):
    u = urljoin(base, href.strip())
    p = urlparse(u)
    if p.netloc.lower() not in ("vivi-jersey.com", "www.vivi-jersey.com"):
        return ""
    path = re.sub(r"/+", "/", p.path)
    return urlunparse(("https", "www.vivi-jersey.com", path.rstrip("/") + ("/" if path.endswith("/") else ""), "", p.query, ""))

def slug_of(url):
    return urlparse(url).path.rstrip("/").split("/")[-1].lower()

def is_club_collection(url, label):
    slug = slug_of(url)
    if not slug or slug in EXCLUDED or slug in COUNTRIES:
        return False
    if any(x in slug for x in ("national-team","world-cup","country","retro-kids","kids-jersey","women-s","training-suit")):
        return False
    low = label.lower().strip()
    generic = {"home","all products","collections","products","2025-26","2026-27","2026 world cup","retro","kids","women"}
    if low in generic:
        return False
    if re.fullmatch(r"\d{4}[- ]?\d{2,4}", low):
        return False
    return True

def collect_links(html, pattern):
    soup = BeautifulSoup(html, "html.parser")
    out = set()
    for a in soup.select("a[href]"):
        u = norm_url(a.get("href",""))
        if u and re.search(pattern, urlparse(u).path, re.I):
            out.add(u)
    return soup, out

def find_pages(first_url, first_html, max_pages=80):
    pages = {first_url}
    queue = [first_url]
    while queue and len(pages) < max_pages:
        u = queue.pop(0)
        html = first_html if u == first_url else fetch(u)[0]
        if not html:
            continue
        soup = BeautifulSoup(html, "html.parser")
        candidates = set()
        for a in soup.select("a[href]"):
            href = a.get("href","")
            dest = norm_url(href, u)
            if not dest or urlparse(dest).path.rstrip("/") != urlparse(first_url).path.rstrip("/"):
                continue
            q = parse_qs(urlparse(dest).query)
            if any(k.lower() in ("page","p","pageindex","currentpage") for k in q):
                candidates.add(dest)
            elif (a.get("rel") and "next" in [str(x).lower() for x in a.get("rel")]) or re.search(r"next|下一页|›|»", a.get_text(" ",strip=True), re.I):
                candidates.add(dest)
        for dest in sorted(candidates):
            if dest not in pages and len(pages) < max_pages:
                pages.add(dest); queue.append(dest)
    return sorted(pages)

def extract_sizes(soup, text):
    segment = ""
    m = re.search(r"\bSize\s*[:：]\s*(.*?)(?=\bSelect\s+Patch\b|\bCustomi[sz]e\b|\bQty\s*:|\bTotal\s+extras\b|\bADD\s+TO\s+CART\b)", text, re.I | re.S)
    if m:
        segment = m.group(1)
    found = []
    for source in (segment, " ".join(el.get_text(" ",strip=True) for el in soup.select("select option, [class*=size]"))):
        for s in SIZE_RE.findall(source):
            canonical = s.upper()
            if canonical not in found:
                found.append(canonical)
    preferred = ["S","M","L","XL","2XL","3XL","4XL","5XL","6XL","XS","XXS","XXL","XXXL","XXXXL"]
    found.sort(key=lambda x: (preferred.index(x) if x in preferred else 100, x))
    return found, segment.strip()

def clean_dupes(s):
    words = re.sub(r"\s+"," ",s).strip(" \t\r\n:;")
    toks = words.split()
    for n in range(1, len(toks)//2 + 1):
        if toks[:n] == toks[n:2*n]:
            return " ".join(toks[:n])
    return words

def extract_patches(text):
    matches = list(re.finditer(r"Select\s+Patch\s*[:：]?", text, re.I))
    result = []
    for slot, match in enumerate(matches, 1):
        end = matches[slot].start() if slot < len(matches) else len(text)
        section = text[match.end():end]
        cut = re.search(r"Customi[sz]e\s+this\s+item|Total\s+extras|Qty\s*:|ADD\s+TO\s+CART", section, re.I)
        if cut: section = section[:cut.start()]
        options = []
        for im in re.finditer(r"Image\s*:\s*(.+?)(?=(?:\s*\[Input\])?\s*Image\s*:|$)", section, re.I):
            chunk = im.group(1).strip()
            price_match = re.search(r"\[\s*\+\s*\$\s*([0-9]+(?:\.[0-9]+)?)\s*\]", chunk)
            label = re.sub(r"\[\s*\+\s*\$.*?\]", "", chunk)
            label = re.sub(r"\[Input\].*$", "", label, flags=re.I).strip()
            label = clean_dupes(label)
            label = re.sub(r"\s+", " ", label).strip(" -")
            if label and label.lower() not in ("input",):
                options.append({"label":label,"extra_price_usd":float(price_match.group(1)) if price_match else 0.0})
        # The page can expose options as labels without the Image marker.
        if not options:
            for line in re.findall(r"([A-Za-z][A-Za-z0-9 +&'’().〖〗-]{2,}?)\s*\[\s*\+\s*\$\s*([0-9]+(?:\.[0-9]+)?)\s*\]", section):
                label = clean_dupes(line[0])
                if label: options.append({"label":label,"extra_price_usd":float(line[1])})
        uniq = []
        seen = set()
        for o in options:
            key = o["label"].casefold()
            if key not in seen:
                seen.add(key); uniq.append(o)
        result.append({"slot_number":slot,"label":f"Patch {slot}","options":uniq,"raw_text":section[:1200].strip()})
    return result

def extract_customization(text):
    m = re.search(r"Customi[sz]e\s+this\s+item\s*[:：]?\s*(.*?)(?=\bTotal\s+extras\b|\bQty\s*:|\bADD\s+TO\s+CART\b)", text, re.I | re.S)
    raw = m.group(1).strip() if m else ""
    opts = []
    for m2 in re.finditer(r"(NO|Choose\s+player|Personalize|Personalise|Customize|Customise)(?:\s*\[\s*\+\s*\$\s*([0-9.]+)\s*\])?", raw, re.I):
        opts.append({"label":m2.group(1),"extra_price_usd":float(m2.group(2) or 0)})
    return raw, opts

def season_from(title):
    m = re.search(r"\b(19|20)\d{2}\s*[-/]\s*\d{2,4}\b", title)
    if m: return re.sub(r"\s+","",m.group(0)).replace("/","-")
    m = re.search(r"\b(19|20)\d{2}\b", title)
    if m: return m.group(0)
    m = re.search(r"\b(19|20)\d{2}\s*[-/]\s*(\d{2})\b", title)
    return re.sub(r"\s+","",m.group(0)).replace("/","-") if m else ""

def kit_type(title):
    s = title.lower()
    if "goalkeeper" in s or "goal keeper" in s: return "goalkeeper"
    if "training" in s or "training wear" in s: return "training"
    if "home" in s: return "home"
    if "away" in s: return "away"
    if "third" in s or "3rd" in s: return "third"
    if "fourth" in s or "4th" in s: return "fourth"
    if "retro" in s: return "retro"
    if "suit" in s or "jacket" in s or "tracksuit" in s: return "training"
    if "special" in s: return "special"
    return ""

def version_from(title):
    s = title.lower()
    if "kids" in s or "kid " in s: return "kids"
    if "women" in s or "women's" in s: return "women"
    if "player" in s: return "player"
    if "retro" in s: return "retro"
    return "fan"

def product_detail(url, team):
    html, final_url = fetch(url)
    if not html: return {"url":url,"team":team,"error":"page introuvable"}
    soup = BeautifulSoup(html, "html.parser")
    title = ""
    h1 = soup.find("h1")
    if h1: title = h1.get_text(" ",strip=True)
    if not title:
        meta = soup.find("meta", property="og:title")
        title = meta.get("content","").strip() if meta else ""
    text = soup.get_text(" ",strip=True)
    sizes, size_raw = extract_sizes(soup,text)
    patches = extract_patches(text)
    customization_raw, customization = extract_customization(text)
    images = []
    meta_image = soup.find("meta", property="og:image")
    if meta_image and meta_image.get("content"):
        images.append(urljoin(final_url,meta_image["content"]))
    for img in soup.select("img[src], img[data-src]"):
        src = img.get("data-src") or img.get("src")
        if not src: continue
        full = urljoin(final_url,src)
        if "logo" in full.lower() or "icon" in full.lower() or "avatar" in full.lower(): continue
        if full not in images and re.search(r"\.(jpe?g|png|webp)(?:\?|$)",full,re.I):
            images.append(full)
    season = season_from(title)
    kind = kit_type(title)
    reasons = []
    if not title: reasons.append("titre absent")
    if not sizes: reasons.append("tailles non extraites")
    if not images: reasons.append("image principale absente")
    if not season: reasons.append("saison/année non identifiable")
    if not kind: reasons.append("type domicile/extérieur/third/rétro/entraînement non identifiable")
    if not patches: reasons.append("aucun emplacement de patch proposé sur la fiche")
    if not team: reasons.append("club non identifié depuis sa collection")
    return {
        "name":title,"group":team,"team":team,"category":"clubs","season":season,
        "kitType":kind,"version":version_from(title),"sizes":sizes,"size_raw":size_raw,
        "image":images[0] if images else "","images":images[:12],
        "supplier":"Vivi Jersey","supplierVerified":bool(title and final_url.startswith("https://")),
        "supplierUrl":final_url,"sourceUrl":final_url,
        "patchSlots":len(patches),"patchOptions":patches,
        "personalizationAllowed":any("personalize" in x["label"].lower() or "choose player" in x["label"].lower() for x in customization),
        "personalization":{"allowed":bool(customization),"customName":any("personalize" in x["label"].lower() for x in customization),"customNumber":any("personalize" in x["label"].lower() for x in customization)},
        "customizationOptions":customization,"customizationRaw":customization_raw,
        "status":"incomplete" if reasons else "ready","reasons":reasons,
        "auditHash":hashlib.sha256(final_url.encode()).hexdigest()
    }

def main():
    os.makedirs("data",exist_ok=True)
    html, final = fetch(BASE + "/collections/")
    if not html: raise SystemExit("Impossible de charger la page /collections/")
    soup = BeautifulSoup(html,"html.parser")
    collections = {}
    for a in soup.select("a[href]"):
        href = norm_url(a.get("href",""))
        if not href or "/collections/" not in urlparse(href).path: continue
        label = a.get_text(" ",strip=True) or slug_of(href).replace("-"," ").title()
        if is_club_collection(href,label):
            collections[href] = label
    if not collections:
        raise SystemExit("Aucune collection de club détectée : arrêt sans modification du catalogue.")
    print("Collections candidates:",len(collections),flush=True)
    products = {}
    collection_errors = []
    max_collections = int(os.getenv("MAX_COLLECTIONS","500"))
    for idx,(collection_url,label) in enumerate(list(collections.items())[:max_collections],1):
        ch, cf = fetch(collection_url)
        if not ch:
            collection_errors.append({"url":collection_url,"team":label,"error":"collection inaccessible"})
            continue
        cp, _ = collect_links(ch,r"/products/")
        detail_urls = set(cp)
        for page_url in find_pages(cf,ch):
            if page_url == cf: continue
            ph,_ = fetch(page_url)
            if ph:
                _, links = collect_links(ph,r"/products/")
                detail_urls.update(links)
        collection_title = label
        h1 = BeautifulSoup(ch,"html.parser").find("h1")
        if h1 and h1.get_text(" ",strip=True): collection_title = h1.get_text(" ",strip=True)
        for purl in detail_urls:
            # Keep the most explicit club collection for each supplier product URL.
            if purl not in products:
                products[purl] = collection_title
        if idx % 20 == 0:
            print(f"Collections parcourues: {idx}/{min(len(collections),max_collections)} — produits uniques: {len(products)}",flush=True)
        time.sleep(0.12)
    print("Products uniques collected:",len(products),flush=True)
    if not products:
        raise SystemExit("Aucun produit extrait des collections de clubs : arrêt sans modification du catalogue.")
    details = []
    with ThreadPoolExecutor(max_workers=8) as pool:
        futures = {pool.submit(product_detail,u,t):u for u,t in products.items()}
        for i,f in enumerate(as_completed(futures),1):
            try: details.append(f.result())
            except Exception as e: details.append({"url":futures[f],"error":str(e),"status":"incomplete"})
            if i % 100 == 0: print(f"Fiches détaillées: {i}/{len(futures)}",flush=True)
    existing = ""
    for path in ("catalog.js","clubs-products.js"):
        try:
            with open(path,encoding="utf-8") as f: existing += "\n"+f.read()
        except OSError: pass
    existing_urls = set(re.findall(r"https?://(?:www\.)?vivi-jersey\.com/products/[^\s\"']+",existing,re.I))
    existing_names = {re.sub(r"\s+"," ",x).strip().casefold() for x in re.findall(r'name\s*:\s*["\']([^"\']+)["\']',existing)}
    ready, duplicates, incomplete = [], [], []
    for p in details:
        if p.get("status") != "ready":
            incomplete.append(p); continue
        title_key = re.sub(r"\s+"," ",p["name"]).strip().casefold()
        if p["supplierUrl"] in existing_urls or title_key in existing_names:
            p["status"] = "duplicate"; duplicates.append(p)
        else:
            ready.append(p)
    report = {
        "source":"Vivi Jersey /collections/",
        "generated_at_utc":time.strftime("%Y-%m-%dT%H:%M:%SZ",time.gmtime()),
        "collection_count":len(collections),"product_url_count":len(products),
        "product_detail_count":len(details),"ready_count":len(ready),
        "duplicate_count":len(duplicates),"incomplete_count":len(incomplete),
        "collection_errors":collection_errors[:100],
        "ready_products":ready,"duplicates":duplicates,"incomplete_products":incomplete
    }
    with open("data/vivi-clubs-audit.json","w",encoding="utf-8") as f: json.dump(report,f,ensure_ascii=False,indent=2)
    with open("data/vivi-clubs-audit.csv","w",encoding="utf-8",newline="") as f:
        w=csv.writer(f); w.writerow(["status","club","name","season","kitType","version","sizes","patch_slots","patch_options","supplier_url","image","reasons"])
        for p in ready+duplicates+incomplete:
            patch_summary=" | ".join(f"slot {s['slot_number']}: "+", ".join(o["label"] for o in s.get("options",[])) for s in p.get("patchOptions",[]))
            w.writerow([p.get("status","incomplete"),p.get("group",""),p.get("name",""),p.get("season",""),p.get("kitType",""),p.get("version",""),", ".join(p.get("sizes",[])),p.get("patchSlots",0),patch_summary,p.get("supplierUrl",p.get("url","")),p.get("image",""),"; ".join(p.get("reasons",[]))])
    summary = [
        "# Audit du catalogue clubs Vivi Jersey",
        "",
        f"- Collections de clubs candidates : {len(collections)}",
        f"- Fiches distinctes trouvées : {len(products)}",
        f"- Fiches détaillées : {len(details)}",
        f"- Fiches complètes et non déjà présentes : {len(ready)}",
        f"- Doublons détectés : {len(duplicates)}",
        f"- Fiches incomplètes à contrôler : {len(incomplete)}",
        f"- Erreurs de collections : {len(collection_errors)}",
        "",
        "Les fiches incomplètes ne sont pas publiées. Les prix fournisseur et les options sont conservés dans les devises affichées par Vivi Jersey ; aucune conversion arbitraire n'est appliquée.",
        ""
    ]
    with open("VIVI-CLUBS-AUDIT.md","w",encoding="utf-8") as f: f.write("\n".join(summary))
    print("\n".join(summary),flush=True)

if __name__ == "__main__":
    main()
