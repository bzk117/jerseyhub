import unittest

from scripts.vivi_patch_library import infer_team_from_title, norm_text


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

    def test_text_normalisation(self):
        self.assertEqual(norm_text("Paris-Saint-Germain"), "paris saint germain")


if __name__ == "__main__":
    unittest.main()
