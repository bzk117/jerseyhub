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
    row = {"url":url,"status":r.status_code,"final_url":r.url,"length":len(r.text),"custom_inputs":[],"option_images":[],"custom_groups":[]}
    if r.status_code == 200:
        soup = BeautifulSoup(r.text,"html.parser")
        for tag in soup.select('input[name*="custom_attributes"]'):
            data = {"attrs":dict(tag.attrs),"parent_html":str(tag.parent)[:8000],"grandparent_html":str(tag.parent.parent)[:12000] if tag.parent and tag.parent.parent else ""}
            row["custom_inputs"].append(data)
        for img in soup.select('img[data-picture], img[alt]'):
            src=img.get("data-picture") or img.get("src") or ""
            if src and ("photo/" in src or "patch" in src.lower()):
                row["option_images"].append({"attrs":dict(img.attrs),"parent_html":str(img.parent)[:5000]})
        for el in soup.find_all(attrs={"data-name":True}):
            row["custom_groups"].append({"tag":el.name,"attrs":dict(el.attrs),"parent_html":str(el.parent)[:7000]})
    out.append(row)
    print(url,"status",row["status"],"bytes",row["length"],"custom inputs",len(row["custom_inputs"]),"option images",len(row["option_images"]),"data-name elements",len(row["custom_groups"]),flush=True)
    time.sleep(1)
Path("patch-markup-diagnostic.json").write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding="utf-8")
