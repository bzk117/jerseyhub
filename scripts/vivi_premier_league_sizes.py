#!/usr/bin/env python3
"""Read only existing JerseyHub Premier League Vivi product URLs and update their sizes."""
import csv, json, re, time
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
import requests
from bs4 import BeautifulSoup
from vivi_club_audit import FETCH_STATS, fetch, extract_sizes, classify_size_groups

CATALOG_URL = "https://raw.githubusercontent.com/bzk117/jerseyhub/main/clubs-products.js"
PL_CLUBS = {
 "arsenal","aston villa","bournemouth","brentford","brighton","brighton and hove albion",
 "burnley","chelsea","crystal palace","everton","fulham","leeds united","liverpool",
 "manchester city","manchester united","newcastle","newcastle united","nottingham forest",
 "sunderland","tottenham","tottenham hotspur","west ham","west ham united","wolves",
 "wolverhampton wanderers"
}
def norm(s):
 return re.sub(r"[^a-z0-9]+"," ",(s or "").lower()).strip()
def existing_products():
 r=requests.get(CATALOG_URL,timeout=25)
 r.raise_for_status()
 source=r.text
 # Catalogue objects use two-space object indentation; nested objects are deeper.
 blocks=re.findall(r'(?ms)^  \{(.*?)^  \}',source)
 found={}
 for block in blocks:
  if '"supplier": "Vivi Jersey"' not in block: continue
  group=re.search(r'"(?:group|team)":\s*"([^"]+)"',block)
  url=re.search(r'"(?:supplierUrl|sourceUrl)":\s*"(https://www\.vivi-jersey\.com/products/[^"]+)"',block)
  name=re.search(r'"name":\s*"([^"]+)"',block)
  if not group or not url: continue
  club=norm(group.group(1))
  if club not in PL_CLUBS: continue
  found[url.group(1)]=(group.group(1),name.group(1) if name else "")
 return found
def read_product(item):
 url, (club,name)=item
 html,final=fetch(url,attempts=2)
 if not html: return {"url":url,"club":club,"name":name,"sizes":[],"status":"unavailable"}
 soup=BeautifulSoup(html,"html.parser")
 title=(soup.find("h1").get_text(" ",strip=True) if soup.find("h1") else name)
 text=soup.get_text(" ",strip=True)
 sizes,raw=extract_sizes(soup,text)
 adults,kids,audience=classify_size_groups(sizes,title,raw)
 return {"url":url,"club":club,"name":name or title,"sizes":sizes,"adultSizes":adults,"kidsSizes":kids,"sizeAudience":audience,"status":"verified" if sizes else "no_sizes"}
def main():
 products=existing_products()
 if not products: raise SystemExit("No existing Premier League Vivi product URLs found; nothing changed.")
 print(f"Existing Premier League Vivi product URLs: {len(products)}",flush=True)
 results=[]
 with ThreadPoolExecutor(max_workers=10) as pool:
  futures=[pool.submit(read_product,x) for x in products.items()]
  for i,f in enumerate(as_completed(futures),1):
   try: results.append(f.result())
   except Exception as e: results.append({"url":"","club":"","name":"","sizes":[],"status":"error","error":str(e)})
   if i%25==0: print(f"Checked {i}/{len(futures)}",flush=True)
 verified=[x for x in results if x["status"]=="verified"]
 # Exact URL-only updates. Never add, remove, rename or replace a catalogue product.
 overlay={"verified":verified}
 js="/* Verified size-only overlay; existing product records are preserved. */\n(()=>{const rows="+json.dumps(verified,ensure_ascii=False,separators=(",",":"))+";let updated=0;for(const row of rows){const p=CLUB_PRODUCTS.find(x=>x&&x.supplier==='Vivi Jersey'&&(x.supplierUrl===row.url||x.sourceUrl===row.url));if(p){p.sizes=row.sizes;if(row.sizeAudience!=='unknown')p.sizeAudience=row.sizeAudience;if(row.adultSizes.length)p.adultSizes=row.adultSizes;if(row.kidsSizes.length)p.kidsSizes=row.kidsSizes;updated++;}}console.info('JerseyHub verified PL sizes',{updated,verified:rows.length});})();\n"
 Path("vivi-premier-league-sizes.js").write_text(js,encoding="utf-8")
 Path("data").mkdir(exist_ok=True)
 report={"generated_at_utc":time.strftime("%Y-%m-%dT%H:%M:%SZ",time.gmtime()),"existing_products_checked":len(products),"verified_count":len(verified),"without_sizes":sum(x["status"]=="no_sizes" for x in results),"unavailable_or_errors":sum(x["status"] in ("unavailable","error") for x in results),"results":results,"fetch_stats":FETCH_STATS}
 Path("data/vivi-premier-league-sizes.json").write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding="utf-8")
 with open("data/vivi-premier-league-sizes.csv","w",encoding="utf-8-sig",newline="") as f:
  w=csv.writer(f);w.writerow(["club","product","sizes","status","supplier_url"])
  for x in sorted(results,key=lambda z:(z.get("club",""),z.get("name",""))):w.writerow([x.get("club"),x.get("name"),", ".join(x.get("sizes",[])),x.get("status"),x.get("url")])
 print(f"VERIFIED={len(verified)} CHECKED={len(results)} NO_SIZES={report['without_sizes']} ERRORS={report['unavailable_or_errors']}",flush=True)
if __name__=="__main__":main()
