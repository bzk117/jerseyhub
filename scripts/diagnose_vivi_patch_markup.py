#!/usr/bin/env python3
import json, re, time
from pathlib import Path
import requests
from bs4 import BeautifulSoup

URLS = [
 "https://www.vivi-jersey.com/products/2026-27-bayern-munchen-home-football-jersey-s-4xl",
 "https://www.vivi-jersey.com/products/2025-26-dortmund-special-edition-football-jersey",
 "https://www.vivi-jersey.com/products/2025-26-rb-leipzig-home-football-jersey",
]
s = requests.Session()
s.headers.update({"User-Agent":"Mozilla/5.0 (compatible; JerseyHubPatchMarkupDiagnostic/1.0)","Accept-Language":"en-US,en;q=0.9"})
out = []
for url in URLS:
    r = s.get(url, timeout=35)
    row = {"url":url,"status":r.status_code,"final_url":r.url,"length":len(r.text),"select_patch_nodes":[],"interesting_scripts":[],"form_controls":[]}
    if r.status_code == 200:
        soup = BeautifulSoup(r.text,"html.parser")
        strings = soup.find_all(string=re.compile(r"Select\\s+Patch",re.I))
        for st in strings[:8]:
            chain=[]
            node=st.parent
            for depth in range(6):
                if not node: break
                chain.append({"depth":depth,"tag":node.name,"attrs":dict(node.attrs),"text":node.get_text(" ",strip=True)[:1200],"html":str(node)[:12000]})
                node=node.parent
            row["select_patch_nodes"].append(chain)
        for tag in soup.find_all(["script","input","select","option","img","label"]):
            raw=str(tag)
            if re.search(r"patch|Image\\s*:",raw,re.I):
                if tag.name in ("script",) and len(raw)>25000: raw=raw[:25000]
                row["interesting_scripts"].append(raw[:15000])
        for tag in soup.find_all(["input","select","option","label"]):
            row["form_controls"].append({"tag":tag.name,"attrs":dict(tag.attrs),"text":tag.get_text(" ",strip=True)[:500]})
    out.append(row)
    time.sleep(1)
Path("patch-markup-diagnostic.json").write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding="utf-8")
for row in out:
    print(row["url"],"status",row["status"],"bytes",row["length"],"markers",len(row["select_patch_nodes"]),"scripts/attrs",len(row["interesting_scripts"]),"controls",len(row["form_controls"]),flush=True)
