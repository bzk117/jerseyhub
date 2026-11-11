#!/usr/bin/env python3
"""Audit NBA jersey listings from Vivi Jersey. Does not publish products."""
import csv, json, re, time, os
from urllib.parse import urljoin, urlparse
from concurrent.futures import ThreadPoolExecutor, as_completed
import requests
from bs4 import BeautifulSoup

BASE = "https://www.vivi-jersey.com"
TEAMS = [
"Atlanta Hawks","Boston Celtics","Brooklyn Nets","Charlotte Hornets","Chicago Bulls",
"Cleveland Cavaliers","Dallas Mavericks","Denver Nuggets","Detroit Pistons","Golden State Warriors",
"Houston Rockets","Indiana Pacers","LA Clippers","Los Angeles Lakers","Memphis Grizzlies",
"Miami Heat","Milwaukee Bucks","Minnesota Timberwolves","New Orleans Pelicans","New York Knicks",
"Oklahoma City Thunder","Orlando Magic","Philadelphia 76ers","Phoenix Suns","Portland Trail Blazers",
"Sacramento Kings","San Antonio Spurs","Toronto Raptors","Utah Jazz","Washington Wizards"]
S = requests.Session()
S.headers.update({"User-Agent":"Mozilla/5.0 (compatible; JerseyHubCatalogAudit/1.0; +https://github.com/bzk117/jerseyhub)","Accept-Language":"en-US,en;q=0.9"})
def get(url):
    for attempt in range(4):
        try:
            r=S.get(url,timeout=35); r.raise_for_status()
            return r.url, r.text
        except Exception as e:
            if attempt == 3: return url, ""
            time.sleep(2*(attempt+1))
def clean(s): return re.sub(r"\\s+"," ",s or "").strip()
def main():
    _, html = get(BASE + "/pages/nba")
    if not html: raise SystemExit("NBA page inaccessible; no catalogue changes made.")
    soup=BeautifulSoup(html,"html.parser")
    team_urls={}
    aliases={"LA Clippers":["LA Clippers","Los Angeles Clippers"]}
    for a in soup.select("a[href]"):
        label=clean(a.get_text(" ",strip=True))
        href=urljoin(BASE,a.get("href",""))
        for team in TEAMS:
            if label.casefold()==team.casefold() or label.casefold() in [x.casefold() for x in aliases.get(team,[])]:
                if "/collections/" in urlparse(href).path: team_urls.setdefault(team,href)
    if len(team_urls)<25:
        # Team collections are also linked from the all-collections index.
        _, idx=get(BASE+"/collections/")
        si=BeautifulSoup(idx,"html.parser")
        for a in si.select("a[href]"):
            label=clean(a.get_text(" ",strip=True)); href=urljoin(BASE,a.get("href",""))
            for team in TEAMS:
                if label.casefold()==team.casefold() or label.casefold() in [x.casefold() for x in aliases.get(team,[])]:
                    if "/collections/" in urlparse(href).path: team_urls.setdefault(team,href)
    if not team_urls: raise SystemExit("No NBA franchise collections resolved; no catalogue changes made.")
    product_map={}
    collection_errors=[]
    for team,url in team_urls.items():
        _, body=get(url)
        if not body:
            collection_errors.append({"team":team,"url":url,"error":"collection inaccessible"}); continue
        ps=BeautifulSoup(body,"html.parser")
        for a in ps.select('a[href*="/products/"]'):
            u=urljoin(BASE,a.get("href","")).split("#")[0]
            if u not in product_map: product_map[u]=team
    def detail(item):
        url,team=item; final,body=get(url)
        if not body: return {"team":team,"url":url,"status":"incomplete","reasons":["fiche inaccessible"]}
        sp=BeautifulSoup(body,"html.parser")
        h=sp.find("h1"); title=clean(h.get_text(" ",strip=True)) if h else ""
        og=sp.find("meta",property="og:image"); image=og.get("content","") if og else ""
        if image: image=urljoin(final,image)
        else:
            im=sp.select_one("img[src]")
            image=urljoin(final,im.get("src","")) if im else ""
        text=clean(sp.get_text(" ",strip=True))
        size_tokens=re.findall(r'(?<![A-Z0-9])(XS|S|M|L|XL|2XL|3XL|4XL|5XL|6XL)(?![A-Z0-9])',text,re.I)
        sizes=list(dict.fromkeys(x.upper() for x in size_tokens))
        reasons=[]
        if not title: reasons.append("titre absent")
        if not image: reasons.append("image principale absente")
        if not sizes: reasons.append("tailles non détectées")
        if not re.search(r'\\b(19|20)\\d{2}\\b',title): reasons.append("saison/année non identifiée")
        return {"name":title,"team":team,"league":"NBA","category":"sports","image":image,
          "sizes":sizes,"supplier":"Vivi Jersey","supplierUrl":final,"sourceUrl":final,
          "season":(re.search(r'\\b(?:19|20)\\d{2}(?:\\s*[-/]\\s*\\d{2,4})?\\b',title).group(0) if re.search(r'\\b(?:19|20)\\d{2}(?:\\s*[-/]\\s*\\d{2,4})?\\b',title) else ""),
          "status":"incomplete" if reasons else "ready","reasons":reasons}
    details=[]
    with ThreadPoolExecutor(max_workers=4) as ex:
        fs=[ex.submit(detail,x) for x in product_map.items()]
        for f in as_completed(fs):
            try: details.append(f.result())
            except Exception as e: details.append({"status":"incomplete","reasons":[str(e)]})
    # Duplicate check against existing public catalogue files; no existing file is overwritten.
    existing_text=""
    for p in ("catalog.js","clubs-products.js","nba-products.js"):
        try: existing_text += open(p,encoding="utf-8").read()
        except OSError: pass
    existing_urls=set(re.findall(r'https?://(?:www\\.)?vivi-jersey\\.com/products/[^\\s"\\']+',existing_text,re.I))
    ready=[]; duplicates=[]; incomplete=[]
    for p in details:
        if p.get("status")!="ready": incomplete.append(p)
        elif p["supplierUrl"] in existing_urls: p["status"]="duplicate"; duplicates.append(p)
        else: ready.append(p)
    report={"source":BASE+"/pages/nba","generated_at_utc":time.strftime("%Y-%m-%dT%H:%M:%SZ",time.gmtime()),
      "franchises_found":len(team_urls),"franchises_expected":30,"team_collections":team_urls,
      "product_urls_found":len(product_map),"product_details_checked":len(details),
      "ready_count":len(ready),"duplicate_count":len(duplicates),"incomplete_count":len(incomplete),
      "collection_errors":collection_errors,"ready_products":ready,"duplicates":duplicates,"incomplete_products":incomplete}
    os.makedirs("data",exist_ok=True)
    with open("data/vivi-nba-audit.json","w",encoding="utf-8") as f: json.dump(report,f,ensure_ascii=False,indent=2)
    with open("data/vivi-nba-audit.csv","w",encoding="utf-8",newline="") as f:
        w=csv.writer(f); w.writerow(["status","team","name","season","sizes","supplier_url","image","reasons"])
        for p in ready+duplicates+incomplete: w.writerow([p.get("status"),p.get("team"),p.get("name"),p.get("season"),", ".join(p.get("sizes",[])),p.get("supplierUrl",p.get("url","")),p.get("image",""),"; ".join(p.get("reasons",[]))])
    with open("VIVI-NBA-AUDIT.md","w",encoding="utf-8") as f:
        f.write("# Audit du catalogue NBA Vivi Jersey\\n\\n")
        f.write(f"- Franchises trouvées : {len(team_urls)}/30\\n- Fiches produits trouvées : {len(product_map)}\\n- Fiches détaillées : {len(details)}\\n- Fiches prêtes à vérifier avant import : {len(ready)}\\n- Doublons : {len(duplicates)}\\n- Fiches incomplètes : {len(incomplete)}\\n- Collections inaccessibles : {len(collection_errors)}\\n\\nAucune fiche n'est publiée automatiquement par cet audit. Les fiches incomplètes restent exclues; les produits existants ne sont jamais remplacés.\\n")
    print(f"NBA audit: franchises={len(team_urls)}/30 products={len(product_map)} ready={len(ready)} duplicates={len(duplicates)} incomplete={len(incomplete)}")
if __name__=="__main__": main()
