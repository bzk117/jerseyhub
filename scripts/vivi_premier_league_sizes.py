#!/usr/bin/env python3
"""Collect size-verified products from Vivi Jersey Premier League club collections."""
import csv, json, sys, time
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
from bs4 import BeautifulSoup
sys.path.insert(0, str(Path(__file__).resolve().parent))
from vivi_club_audit import FETCH_STATS, fetch, norm_url, slug_of, find_pages, collect_links, product_detail

LEAGUE_PAGE = "https://www.vivi-jersey.com/pages/collections-premier-league"
CLUBS = {
 "manchester-united":"Manchester United","arsenal":"Arsenal","liverpool":"Liverpool",
 "manchester-city":"Manchester City","chelsea":"Chelsea","tottenham":"Tottenham",
 "newcastle":"Newcastle","everton":"Everton","west-ham-united":"West Ham United",
 "aston-villa":"Aston Villa","crystal-palace":"Crystal Palace","wolves":"Wolves",
 "fulham":"Fulham","leeds-united":"Leeds United","nottingham-forest":"Nottingham Forest",
 "leicester-city":"Leicester City","brighton":"Brighton"
}

def main():
 Path("data").mkdir(exist_ok=True)
 html, final = fetch(LEAGUE_PAGE)
 if not html: raise SystemExit("Premier League page unavailable; no import.")
 soup=BeautifulSoup(html,"html.parser")
 collections={}
 for a in soup.select("a[href]"):
  u=norm_url(a.get("href",""))
  if u and "/collections/" in u and slug_of(u) in CLUBS: collections[u]=CLUBS[slug_of(u)]
 if not collections: raise SystemExit("No recognised Premier League club collections; no import.")
 print(f"Clubs found: {len(collections)}",flush=True)
 urls={}
 errors=[]
 for n,(cu,club) in enumerate(collections.items(),1):
  ch,canonical=fetch(cu)
  if not ch: errors.append({"club":club,"url":cu,"error":"collection unavailable"}); continue
  _,found=collect_links(ch,r"/products/")
  for page in find_pages(canonical,ch,max_pages=80):
   if page!=canonical:
    ph,_=fetch(page)
    if ph:
     _,more=collect_links(ph,r"/products/"); found.update(more)
  for u in found: urls.setdefault(u,club)
  print(f"{n}/{len(collections)} {club}: {len(found)} products",flush=True)
 if not urls: raise SystemExit("No Premier League product links; no import.")
 details=[]
 with ThreadPoolExecutor(max_workers=3) as pool:
  futures={pool.submit(product_detail,u,c):u for u,c in urls.items()}
  for i,f in enumerate(as_completed(futures),1):
   try: details.append(f.result())
   except Exception as e: details.append({"supplierUrl":futures[f],"group":urls[futures[f]],"status":"incomplete","reasons":[str(e)]})
   if i%100==0: print(f"Product pages: {i}/{len(futures)}",flush=True)
 verified=[]; incomplete=[]
 for p in details:
  if p.get("status")=="ready" and p.get("sizes") and p.get("image"):
   verified.append({k:p.get(k) for k in ("name","season","kitType","version","sizes","adultSizes","kidsSizes","sizeAudience","image","images","supplierUrl")}|{"group":p["group"],"team":p["group"],"category":"clubs","supplier":"Vivi Jersey","supplierVerified":True,"sourceUrl":p["supplierUrl"]})
  else: incomplete.append({"club":p.get("group",""),"name":p.get("name",""),"url":p.get("supplierUrl",p.get("url","")),"sizes":p.get("sizes",[]),"reasons":p.get("reasons",[])})
 if not verified: raise SystemExit("No complete size-verified products; no import.")
 # Size-only overlay: exact URL matches are updated in-place; other verified products are appended.
 data=json.dumps(verified,ensure_ascii=False,separators=(",",":"))
 js='''/* Auto-generated: verified Premier League sizes only. No patch/flocking data. */
(() => {
 const incoming = '''+data+''';
 if (!Array.isArray(window.PRODUCTS)) { console.error("JerseyHub PRODUCTS unavailable; size import skipped."); return; }
 let updated=0, added=0;
 for (const item of incoming) {
  const old=window.PRODUCTS.find(p=>p && p.category==="clubs" && ((p.supplierUrl && p.supplierUrl===item.supplierUrl)||(p.sourceUrl && p.sourceUrl===item.supplierUrl)));
  if(old) { old.sizes=item.sizes; old.adultSizes=item.adultSizes; old.kidsSizes=item.kidsSizes; old.sizeAudience=item.sizeAudience; updated++; }
  else { window.PRODUCTS.push(item); added++; }
 }
 console.info("Premier League size import", {updated,added,verified:incoming.length});
})();
'''
 Path("vivi-premier-league-sizes.js").write_text(js,encoding="utf-8")
 report={"source":LEAGUE_PAGE,"generated_at_utc":time.strftime("%Y-%m-%dT%H:%M:%SZ",time.gmtime()),"clubs_found":list(collections.values()),"collection_count":len(collections),"product_url_count":len(urls),"verified_product_count":len(verified),"incomplete_product_count":len(incomplete),"collection_errors":errors,"fetch_status_counts":dict(FETCH_STATS),"verified_products":verified,"incomplete_products":incomplete}
 Path("data/vivi-premier-league-sizes.json").write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding="utf-8")
 with Path("data/vivi-premier-league-sizes.csv").open("w",encoding="utf-8-sig",newline="") as f:
  w=csv.writer(f); w.writerow(["club","product","season","kit_type","version","audience","sizes","supplier_url"])
  for p in verified: w.writerow([p["group"],p["name"],p["season"],p["kitType"],p["version"],p["sizeAudience"],", ".join(p["sizes"]),p["supplierUrl"]])
 print(f"Verified: {len(verified)}; incomplete: {len(incomplete)}; collection errors: {len(errors)}",flush=True)
if __name__=="__main__": main()
