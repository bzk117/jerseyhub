#!/usr/bin/env python3
"""Apply previously supplier-verified sizes to exact existing JerseyHub PL product URLs."""
import csv, json, re, time
from pathlib import Path
import requests

CATALOG_URL = "https://raw.githubusercontent.com/bzk117/jerseyhub/main/clubs-products.js"
AUDIT_URL = "https://raw.githubusercontent.com/bzk117/jerseyhub/main/data/vivi-clubs-audit.json"
PL_CLUBS = {
 "arsenal","aston villa","bournemouth","brentford","brighton","brighton and hove albion",
 "burnley","chelsea","crystal palace","everton","fulham","leeds united","liverpool",
 "manchester city","manchester united","newcastle","newcastle united","nottingham forest",
 "sunderland","tottenham","tottenham hotspur","west ham","west ham united","wolves",
 "wolverhampton wanderers"
}
def norm(s):
 return re.sub(r"[^a-z0-9]+"," ",(s or "").lower()).strip()
def get_json(url):
 r=requests.get(url,timeout=25,headers={"User-Agent":"JerseyHub-size-audit/1.0"})
 r.raise_for_status()
 return r.json()
def existing_products():
 source=requests.get(CATALOG_URL,timeout=25,headers={"User-Agent":"JerseyHub-size-audit/1.0"})
 source.raise_for_status()
 blocks=re.findall(r'(?ms)^  \{(.*?)^  \}',source.text)
 found={}
 for block in blocks:
  if '"supplier": "Vivi Jersey"' not in block: continue
  group=re.search(r'"(?:group|team)":\s*"([^"]+)"',block)
  url=re.search(r'"(?:supplierUrl|sourceUrl)":\s*"(https://www\.vivi-jersey\.com/products/[^"]+)"',block)
  name=re.search(r'"name":\s*"([^"]+)"',block)
  if not group or not url or norm(group.group(1)) not in PL_CLUBS: continue
  found[url.group(1)]={"club":group.group(1),"name":name.group(1) if name else ""}
 return found
def main():
 existing=existing_products()
 audit=get_json(AUDIT_URL)
 verified={}
 for p in audit.get("ready_products",[]):
  url=p.get("supplierUrl") or p.get("url")
  sizes=p.get("sizes")
  if url and isinstance(sizes,list) and sizes:
   verified[url]={"url":url,"club":p.get("team") or p.get("group",""),"name":p.get("name",""),"sizes":sizes}
 matched=[]
 unmatched=[]
 for url,meta in existing.items():
  p=verified.get(url)
  if p:
   matched.append({**p,"club":meta["club"],"name":meta["name"] or p["name"]})
  else:
   unmatched.append({"url":url,"club":meta["club"],"name":meta["name"],"status":"no_exact_verified_size_record"})
 if not matched:
  raise SystemExit("No exact supplier-verified size matches; no import.")
 js="/* Supplier-verified size overlay. Exact existing product URLs only; no products are added or removed. */\n(()=>{const rows="+json.dumps(matched,ensure_ascii=False,separators=(",",":"))+";let updated=0;for(const row of rows){const p=CLUB_PRODUCTS.find(x=>x&&x.supplier==='Vivi Jersey'&&(x.supplierUrl===row.url||x.sourceUrl===row.url));if(p){p.sizes=row.sizes;updated++;}}console.info('JerseyHub Premier League size update',{updated,verified:rows.length});})();\n"
 Path("vivi-premier-league-sizes.js").write_text(js,encoding="utf-8")
 Path("data").mkdir(exist_ok=True)
 report={"generated_at_utc":time.strftime("%Y-%m-%dT%H:%M:%SZ",time.gmtime()),"source":"Existing supplier-verified Vivi Jersey audit; exact URL matching only","source_audit_generated_at_utc":audit.get("generated_at_utc"),"existing_premier_league_products":len(existing),"updated_with_verified_sizes":len(matched),"without_exact_verified_size_record":len(unmatched),"verified_products":matched,"unmatched_products":unmatched}
 Path("data/vivi-premier-league-sizes.json").write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding="utf-8")
 with open("data/vivi-premier-league-sizes.csv","w",encoding="utf-8-sig",newline="") as f:
  w=csv.writer(f);w.writerow(["club","product","sizes","supplier_url"])
  for p in matched:w.writerow([p["club"],p["name"],", ".join(p["sizes"]),p["url"]])
 print(f"UPDATED={len(matched)} EXISTING={len(existing)} UNMATCHED={len(unmatched)} SOURCE_AUDIT={audit.get('generated_at_utc')}",flush=True)
if __name__=="__main__":main()
