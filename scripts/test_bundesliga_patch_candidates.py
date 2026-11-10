#!/usr/bin/env python3
"""Safety checks for the generated Bundesliga patch candidate library."""
import json
from pathlib import Path

CANDIDATES = Path("data/vivi-bundesliga-patch-candidates.json")
AUDIT = Path("data/vivi-bundesliga-patch-audit.json")

EXPECTED = {
    "bayern", "dortmund", "rb-leipzig", "leverkusen", "frankfurt",
    "freiburg", "stuttgart", "mainz", "werder-bremen", "monchengladbach",
    "union-berlin", "augsburg", "hoffenheim", "hamburg", "koln",
    "schalke", "elversberg", "paderborn",
}


def main():
    audit = json.loads(AUDIT.read_text(encoding="utf-8"))
    data = json.loads(CANDIDATES.read_text(encoding="utf-8"))
    assert audit.get("season") == "2026-27", "Audit season must be 2026-27"
    assert set(audit.get("current_league_teams", [])) == EXPECTED, "Wrong current league roster"
    detected = set(audit.get("teams_found", []))
    assert detected <= EXPECTED, f"Out-of-season clubs detected: {sorted(detected - EXPECTED)}"
    assert set(data.get("teams_detected", [])) == detected, "Candidate roster differs from audit"
    assert set(data.get("teams_not_detected", [])) == EXPECTED - detected, "Missing-club list is inconsistent"

    rows = data.get("candidates", [])
    seen = set()
    for row in rows:
        assert row.get("team") in EXPECTED, f"Unknown team in candidate: {row.get('team')}"
        assert row.get("review_status") == "candidate_not_active", "Candidates must never auto-activate"
        assert row.get("supplier_currency") == "USD", "Supplier currency must remain explicit"
        assert row.get("image_url", "").startswith("https://"), "Candidate missing original HTTPS image"
        assert row.get("evidence_products"), "Candidate missing supplier evidence"
        assert all(x.get("url", "").startswith("https://www.vivi-jersey.com/products/") for x in row["evidence_products"]), "Invalid evidence URL"
        key = (row["team"], row["slot_number"], row["label"], row["image_url"], row["supplier_price_usd"])
        assert key not in seen, f"Duplicate candidate: {key}"
        seen.add(key)
    print(f"Safety checks passed: {len(rows)} inactive candidates, {len(detected)}/18 current clubs detected.")


if __name__ == "__main__":
    main()
