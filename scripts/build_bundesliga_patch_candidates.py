#!/usr/bin/env python3
"""Build a conservative, non-active Bundesliga patch candidate library.

Input: data/vivi-bundesliga-patch-audit.json
Outputs: data/vivi-bundesliga-patch-candidates.json and .csv
This never writes to Supabase or the public catalogue.
"""
import csv
import json
from collections import Counter
from pathlib import Path

SOURCE = Path("data/vivi-bundesliga-patch-audit.json")
OUT_JSON = Path("data/vivi-bundesliga-patch-candidates.json")
OUT_CSV = Path("data/vivi-bundesliga-patch-candidates.csv")

# Exact observed labels only. Sponsor names, "No Patch", anniversary and
# commemorative labels are intentionally excluded. Review is still required.
COMPETITION_LABELS = {
    "BUNDESLIGA", "Bundesliga", "bundesliga", "2024-25 bundesliga",
    "UCL 6+FOUNDATION",
    "UCL + FOUNDATION+10", "UCL 6 DEBUT+ FOUNDATION",
    "UCL 6+FOUNDATION+10", "UCL + FOUNDATION", "UCL+FOUNDATION",
    "UCL", "UCL DEBUT+FOUNDATION", "UCL + RESPECT",
    "UCL + Trophy 5 + RESPECT", "UCL + Trophy 4 + RESPECT",
    "UCL2013 + Trophy 5 + RESPECT",
    "Club World Cup", "Club World Cup +FOOTBALL UNITES",
    "CUP", "Supercup", "FIFA 2020", "FIFA 2013",
}
TEAM_NAMES = {
    "bayern": "Bayern Munich",
    "dortmund": "Borussia Dortmund",
    "rb-leipzig": "RB Leipzig",
    "leverkusen": "Bayer Leverkusen",
    "frankfurt": "Eintracht Frankfurt",
    "freiburg": "SC Freiburg",
    "stuttgart": "VfB Stuttgart",
    "mainz": "Mainz 05",
    "werder-bremen": "Werder Bremen",
    "monchengladbach": "Borussia Mönchengladbach",
    "union-berlin": "Union Berlin",
    "augsburg": "FC Augsburg",
    "hoffenheim": "TSG Hoffenheim",
    "hamburg": "Hamburger SV",
    "koln": "1. FC Köln",
    "schalke": "Schalke 04",
    "elversberg": "SV Elversberg",
    "paderborn": "SC Paderborn 07",
}
EXPECTED_TEAMS = set(TEAM_NAMES)


def main():
    if not SOURCE.exists():
        raise SystemExit(f"Missing audit input: {SOURCE}")
    audit = json.loads(SOURCE.read_text(encoding="utf-8"))
    aggregate = {}
    for product in audit.get("products", []):
        for option in product.get("patch_options", []):
            label = str(option.get("label") or "").strip()
            image = str(option.get("image_url") or "").strip()
            if label not in COMPETITION_LABELS or not image.startswith("https://"):
                continue
            key = (
                product.get("team"), int(option.get("slot_number") or 0),
                label, image, option.get("extra_price_usd"),
            )
            row = aggregate.setdefault(key, {
                "team": product.get("team"),
                "team_display": TEAM_NAMES.get(product.get("team"), product.get("team")),
                "slot_number": int(option.get("slot_number") or 0),
                "label": label,
                "image_url": image,
                "supplier_price_usd": option.get("extra_price_usd"),
                "supplier_currency": "USD",
                "review_status": "candidate_not_active",
                "evidence_products": [],
            })
            evidence = {
                "title": product.get("title") or "",
                "url": product.get("supplier_url") or "",
            }
            if evidence not in row["evidence_products"]:
                row["evidence_products"].append(evidence)

    candidates = sorted(
        aggregate.values(),
        key=lambda x: (x["team"] or "", x["slot_number"], x["label"], x["image_url"]),
    )
    for row in candidates:
        row["evidence_product_count"] = len(row["evidence_products"])

    detected = sorted(set(audit.get("teams_found", [])) & EXPECTED_TEAMS)
    missing = sorted(EXPECTED_TEAMS - set(detected))
    summary = {
        "source": "Vivi Jersey Bundesliga 2026-27 audit",
        "season": "2026-27",
        "generated_at_utc": audit.get("generated_at_utc"),
        "audit_totals": {
            "collections_detected": audit.get("collection_count", 0),
            "products_scanned": audit.get("product_count", 0),
            "teams_detected": len(detected),
            "products_with_patch_images": sum(
                p.get("patch_status") == "images_matched" for p in audit.get("products", [])
            ),
            "option_rows_in_audit": sum(
                len(p.get("patch_options", [])) for p in audit.get("products", [])
            ),
        },
        "current_league_teams": sorted(EXPECTED_TEAMS),
        "teams_detected": detected,
        "teams_not_detected": missing,
        "candidate_count": len(candidates),
        "unique_image_count": len({x["image_url"] for x in candidates}),
        "note": (
            "Staging library only: do not activate or display to customers yet. "
            "Only exact observed competition-related labels are included; sponsor, "
            "No Patch and commemorative choices are excluded. Evidence URLs identify "
            "Vivi product pages where each option was observed. A matching JerseyHub "
            "product record and compatibility review are required before activation. "
            "Supplier prices remain USD and must not be copied into EUR fields."
        ),
        "candidates": candidates,
    }
    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8")
    with OUT_CSV.open("w", encoding="utf-8-sig", newline="") as f:
        writer = csv.writer(f)
        writer.writerow([
            "team", "team_display", "slot_number", "label", "image_url",
            "supplier_price_usd", "supplier_currency", "review_status",
            "evidence_product_count", "supplier_product_title", "supplier_product_url",
        ])
        for row in candidates:
            for evidence in row["evidence_products"]:
                writer.writerow([
                    row["team"], row["team_display"], row["slot_number"],
                    row["label"], row["image_url"], row["supplier_price_usd"],
                    row["supplier_currency"], row["review_status"],
                    row["evidence_product_count"], evidence["title"], evidence["url"],
                ])
    print(json.dumps({
        "candidate_count": len(candidates),
        "unique_images": summary["unique_image_count"],
        "evidence_links": sum(x["evidence_product_count"] for x in candidates),
        "detected_teams": detected,
        "teams_not_detected": missing,
        "excluded_option_labels": sorted({
            str(o.get("label") or "").strip()
            for p in audit.get("products", [])
            for o in p.get("patch_options", [])
            if str(o.get("label") or "").strip() not in COMPETITION_LABELS
        }),
    }, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()
