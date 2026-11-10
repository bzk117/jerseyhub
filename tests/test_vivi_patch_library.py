import unittest

from bs4 import BeautifulSoup
from scripts import vivi_club_audit as audit
from scripts.vivi_patch_library import infer_team_from_title, norm_text, league_for_team


class PatchLibraryTests(unittest.TestCase):
    def test_liverpool_is_identified(self):
        self.assertEqual(infer_team_from_title("2026-27 Liverpool Home Jersey"), "Liverpool")

    def test_psg_is_identified(self):
        self.assertEqual(infer_team_from_title("Paris Saint Germain 2026-27 Away Shirt"), "Paris Saint-Germain")

    def test_marcelona_is_not_misassigned_to_marseille(self):
        self.assertEqual(infer_team_from_title("Olympique de Marseille 2026-27 Home"), "Olympique de Marseille")
        self.assertNotEqual(infer_team_from_title("FC Barcelona 2026-27 Home"), "Olympique de Marseille")

    def test_unknown_club_stays_unknown(self):
        self.assertIsNone(infer_team_from_title("2026-27 New Club Home Shirt"))

    def test_league_classification(self):
        self.assertEqual(league_for_team("Liverpool"), "Premier League")
        self.assertEqual(league_for_team("Olympique de Marseille"), "Ligue 1")

    def test_size_extraction(self):
        soup = BeautifulSoup("<div>Size: S M L XL 2XL Select Patch: Image: UEFA</div>", "html.parser")
        sizes, _ = audit.extract_sizes(soup, soup.get_text(" ", strip=True))
        self.assertIn("S", sizes)
        self.assertIn("XL", sizes)

    def test_flocage_extraction(self):
        raw, options = audit.extract_customization("Customise this item: Choose player Personalize [+ $3.00] Total extras")
        self.assertTrue(raw)
        self.assertTrue(any("Personalize" in item["label"] for item in options))

    def test_text_normalisation(self):
        self.assertEqual(norm_text("Paris-Saint-Germain"), "paris saint germain")


if __name__ == "__main__":
    unittest.main()
