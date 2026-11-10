#!/usr/bin/env python3
"""Syntax-check inline JavaScript in administration.html with Node.js."""
import subprocess
import tempfile
from pathlib import Path
from bs4 import BeautifulSoup

html = BeautifulSoup(Path("administration.html").read_text(encoding="utf-8"), "html.parser")
scripts = [tag.get_text() for tag in html.find_all("script") if not tag.get("src") and tag.get_text(strip=True)]
if not scripts:
    raise SystemExit("No inline administration script found")
for index, source in enumerate(scripts, 1):
    with tempfile.NamedTemporaryFile("w", suffix=".js", encoding="utf-8", delete=False) as handle:
        handle.write(source)
        path = handle.name
    result = subprocess.run(["node", "--check", path], capture_output=True, text=True)
    if result.returncode:
        raise SystemExit(result.stderr or f"Inline script {index} failed syntax check")
print(f"JavaScript syntax OK: {len(scripts)} inline administration script(s).")
