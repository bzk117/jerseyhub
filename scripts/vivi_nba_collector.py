#!/usr/bin/env python3
"""Collecteur NBA Vivi Jersey pour JerseyHub — audit uniquement, aucun import/publication."""
import csv, json, os, re, time
from pathlib import Path
from urllib.parse import urljoin, urlparse
import requests
from bs4 import BeautifulSoup

BASE = "https://www.vivi-jersey.com"
REPO_RAW = "https://raw.githubusercontent.com/bzk117/jerseyhub/main/"
OUT = Path("vivi_nba_output")
IMAGES = OUT / "photos"
TEAMS = [
"Atlanta Hawks","Boston Celtics","Brooklyn Nets","Charlotte Hornets","Chicago Bulls",
"Cleveland Cavaliers","Dallas Mavericks","Denver Nuggets","Detroit Pistons","Golden State Warriors",
"Houston Rockets","Indiana Pacers","LA Clippers","Los Angeles Lakers","Memphis Grizzlies",
"Miami Heat","Milwaukee Bucks","Minnesota Timberwolves","New Orleans Pelicans","New York Knicks",
"Oklahoma City Thunder","Orlando Magic","Philadelphia 76ers","Phoenix Suns","Portland Trail Blazers",
"Sacramento Kings","San Antonio Spurs","Toronto Raptors","Utah Jazz","Washington Wizards"]
HEADERS = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
           "Accept-Language":"en-US,en;q=0.9"}
S = requests.Session()
S.headers.update(HEADERS)
BLOCKED = False

def get(url):
    global BLOCKED
    if BLOCKED: return None
    try:
        r = S.get(url, timeout=25)
        if r.status_code in (403, 429):
            BLOCKED = True
            print(f"Accès refusé ({r.status_code}). Arrêt propre : aucune tentative de contournement.")
            return None
        r.raise_for_status()
        time.sleep(0.35)
        return r
    except requests.RequestException as e:
        print(f"Page inaccessible : {url} ({e})")
        return None

def clean(s):
    return re.sub(r"\\s+", " ", str(s or "")).strip()

def is_child_product(title, tags):
    txt = (title + " " + " ".join(tags)).casefold()
    return bool(re.search(r"\\b(kids?|children|child|youth|junior|boy|girl|toddler|infant)\\b", txt))

def is_explicitly_adult(title, tags):
    txt = (title + " " + " ".join(tags)).casefold()
    return bool(re.search(r"\\b(adult|men|mens|men’s|male)\\b", txt))

def load_existing_urls():
    urls = set()
    for filename in ("catalog.js", "nba-products.js"):
        r = get(REPO_RAW + filename)
        if r:
            urls.update(re.findall(r"https?://(?:www\\.)?vivi-jersey\\.com/products/[^\\s\"']+", r.text, re.I))
    return urls

def main():
    OUT.mkdir(exist_ok=True)
    IMAGES.mkdir(exist_ok=True)
    page = get(BASE + "/pages/nba")
    if not page:
        raise SystemExit("La page NBA n'est pas accessible actuellement. Réessaie plus tard depuis un accès autorisé.")
    soup = BeautifulSoup(page.text, "html.parser")
    team_urls = {}
    aliases = {"LA Clippers": ["Los Angeles Clippers"]}
    for a in soup.select("a[href]"):
        label = clean(a.get_text(" ", strip=True))
        href = urljoin(BASE, a.get("href", ""))
        for team in TEAMS:
            if label.casefold() == team.casefold() or label.casefold() in [x.casefold() for x in aliases.get(team, [])]:
                if "/collections/" in urlparse(href).path:
                    team_urls.setdefault(team, href.split("?")[0])
    if len(team_urls) < 30 and not BLOCKED:
        idx = get(BASE + "/collections/")
        if idx:
            for a in BeautifulSoup(idx.text, "html.parser").select("a[href]"):
                label = clean(a.get_text(" ", strip=True))
                href = urljoin(BASE, a.get("href", ""))
                for team in TEAMS:
                    if label.casefold() == team.casefold() or label.casefold() in [x.casefold() for x in aliases.get(team, [])]:
                        if "/collections/" in urlparse(href).path:
                            team_urls.setdefault(team, href.split("?")[0])
    if not team_urls:
        raise SystemExit("Aucune collection NBA reconnue. Aucun fichier JerseyHub n'a été modifié.")

    products = {}
    collection_errors = []
    for team, url in team_urls.items():
        r = get(url)
        if not r:
            collection_errors.append({"team":team,"url":url,"error":"inaccessible"})
            if BLOCKED: break
            continue
        for a in BeautifulSoup(r.text, "html.parser").select('a[href*="/products/"]'):
            purl = urljoin(BASE, a.get("href", "")).split("?")[0].split("#")[0]
            if "/products/" in urlparse(purl).path:
                products.setdefault(purl, team)

    existing = load_existing_urls() if not BLOCKED else set()
    results, seen_handles = [], set()
    for url, team in products.items():
        if BLOCKED: break
        handle = urlparse(url).path.rstrip("/").split("/")[-1]
        if handle in seen_handles: continue
        seen_handles.add(handle)
        r = get(url + ".js")
        if not r:
            results.append({"status":"incomplete","team":team,"supplierUrl":url,"reasons":["données variantes indisponibles"]})
            continue
        try:
            p = r.json()
        except ValueError:
            results.append({"status":"incomplete","team":team,"supplierUrl":url,"reasons":["réponse produit non JSON"]})
            continue
        title = clean(p.get("title"))
        tags = p.get("tags") or []
        if is_child_product(title, tags):
            continue
        variants = p.get("variants") or []
        size_values = []
        size_availability = {}
        for v in variants:
            opts = v.get("options") or []
            option_names = p.get("options") or []
            for i, value in enumerate(opts):
                opt_name = clean(option_names[i] if i < len(option_names) else "")
                if re.search(r"size|taille", opt_name, re.I):
                    value = clean(value)
                    if value and value.casefold() not in ("default title", "one size", "onesize"):
                        if value not in size_values: size_values.append(value)
                        size_availability[value] = size_availability.get(value, False) or bool(v.get("available"))
        images = p.get("images") or []
        image = images[0] if images else ""
        if image and image.startswith("//"): image = "https:" + image
        reasons = []
        if not is_explicitly_adult(title, tags): reasons.append("statut adulte non confirmé par la fiche fournisseur")
        if not title: reasons.append("titre absent")
        if not image: reasons.append("photo absente")
        if not size_values: reasons.append("tailles non identifiées dans les variantes")
        if not any(size_availability.values()): reasons.append("aucune taille actuellement disponible")
        filename = ""
        if image and not BLOCKED:
            try:
                ir = get(image)
                if ir and ir.content:
                    ext = os.path.splitext(urlparse(image).path)[1].lower()
                    if ext not in (".jpg",".jpeg",".png",".webp"): ext = ".jpg"
                    filename = re.sub(r"[^a-zA-Z0-9_-]+","_",handle) + ext
                    (IMAGES / filename).write_bytes(ir.content)
            except Exception:
                reasons.append("téléchargement photo échoué")
        status = "duplicate" if url in existing else ("ready" if not reasons else "incomplete")
        results.append({
            "status":status,"name":title,"team":team,"league":"NBA","age_group":"adult_confirmed" if is_explicitly_adult(title, tags) else "unconfirmed",
            "supplier":"Vivi Jersey","supplierUrl":url,"image":image,
            "local_image":str(Path("photos") / filename) if filename else "",
            "sizes":size_values,"size_availability":size_availability,
            "price":p.get("price"),"currency":"supplier_currency_unverified",
            "variant_count":len(variants),"reasons":reasons
        })

    ready = [x for x in results if x["status"]=="ready"]
    duplicates = [x for x in results if x["status"]=="duplicate"]
    incomplete = [x for x in results if x["status"]=="incomplete"]
    report = {
        "source":BASE+"/pages/nba","generated_at_utc":time.strftime("%Y-%m-%dT%H:%M:%SZ",time.gmtime()),
        "franchises_found":len(team_urls),"franchises_expected":30,
        "product_urls_found":len(products),"product_details_checked":len(results),
        "ready_count":len(ready),"duplicate_count":len(duplicates),"incomplete_count":len(incomplete),
        "collection_errors":collection_errors,"products":results,
        "notice":"Audit uniquement. Aucun produit JerseyHub n'est ajouté, remplacé ou supprimé. Les tailles viennent des variantes du fournisseur et leur disponibilité est indiquée séparément."
    }
    (OUT/"nba_report.json").write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding="utf-8")
    with (OUT/"nba_report.csv").open("w",encoding="utf-8-sig",newline="") as f:
        w=csv.writer(f); w.writerow(["status","team","name","price_raw","sizes_found","availability_by_size","supplier_url","image_url","local_image","reasons"])
        for p in results:
            w.writerow([p.get("status"),p.get("team"),p.get("name"),p.get("price"),
                        " | ".join(p.get("sizes",[])),json.dumps(p.get("size_availability",{}),ensure_ascii=False),
                        p.get("supplierUrl"),p.get("image"),p.get("local_image")," ; ".join(p.get("reasons",[]))])
    summary = (f"# Rapport NBA Vivi Jersey\n\n- Franchises trouvées : {len(team_urls)}/30\n"
               f"- URLs produits : {len(products)}\n- Fiches détaillées : {len(results)}\n"
               f"- Prêtes à vérifier : {len(ready)}\n- Doublons : {len(duplicates)}\n"
               f"- Incomplètes : {len(incomplete)}\n- Photos téléchargées : {len(list(IMAGES.iterdir()))}\n\n"
               "Les tailles et leur disponibilité proviennent des variantes produit exposées par le fournisseur. "
               "Les produits enfants/juniors explicitement identifiés sont exclus. Les fiches sans mention explicite adulte restent incomplètes et à vérifier. "
               "Aucun changement n'est effectué dans le catalogue JerseyHub.\n")
    (OUT/"LISEZ-MOI_RAPPORT_NBA.md").write_text(summary,encoding="utf-8")
    print(summary)
    print(f"Résultats dans : {OUT.resolve()}")

if __name__ == "__main__":
    main()
