# Bundesliga 2026-27 — revue des candidats patchs (10 novembre 2026)

## Résultat du dernier audit fournisseur

Rapport source : artefact GitHub Actions `vivi-bundesliga-patch-integration-prep`, run [#8](https://github.com/bzk117/jerseyhub/actions/runs/42810664899).

- 479 fiches fournisseur analysées dans 13 collections.
- 13 clubs détectés sur les 18 attendus.
- 252 fiches avec sélecteur de patch et images d'options extraites.
- 1 269 options d'options extraites au total ; 2 fiches sont restées illisibles.
- Réponses HTTP : 518 × 200, 24 × 404, 8 × 429.
- Le générateur a isolé 50 candidats larges et 31 images distinctes. Cette liste mélange plusieurs compétitions et saisons : elle ne doit pas être utilisée telle quelle pour la phase Bundesliga.

## Candidats stricts « Bundesliga » repérés sur des fiches 2026-27

Critères de cette liste : libellé fournisseur exactement « Bundesliga » (casse conservée), prix et image lus depuis le sélecteur d'option, et au moins une fiche source dont le titre indique la saison 2026-27. Les options restent à vérifier visuellement et individuellement avant toute utilisation.

| Club | Fiche fournisseur 2026-27 | Libellé exact | Prix fournisseur | Image extraite |
|---|---|---|---:|---|
| FC Augsburg | [Away](https://www.vivi-jersey.com/products/2026-27-augsburg-away-football-jersey-s-4xl) | Bundesliga | 1.00 USD | [Image](https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/03/photo/39c4b1f4d1.jpg) |
| Bayern Munich | [Away](https://www.vivi-jersey.com/products/2026-27-bayern-munchen-away-football-jersey-s-4xl) | Bundesliga | 1.00 USD | [Image](https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/19/photo/br-11134207-820lw-mpp6ef1m2y9u8a-1031244347.png) |
| Borussia Dortmund | [Away](https://www.vivi-jersey.com/products/2026-27-dortmund-away-football-jersey-s-4xl) | BUNDESLIGA | 1.00 USD | [Image](https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/03/photo/39c4b1f4d1.jpg) |
| Hamburger SV | [Third Kids Kit](https://www.vivi-jersey.com/products/kids-2026-27-hamburger-sv-third-kids-kit-football-jersey) | Bundesliga | 1.00 USD | [Image](https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/03/photo/39c4b1f4d1.jpg) |
| Borussia Mönchengladbach | [Away](https://www.vivi-jersey.com/products/2026-27-borussia-monchengladbach-away-football-jersey-s-4xl) | Bundesliga | 1.00 USD | [Image](https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/03/photo/39c4b1f4d1.jpg) |
| RB Leipzig | [Home](https://www.vivi-jersey.com/products/2026-27-rb-leipzig-home-football-jersey-s-4xl) | Bundesliga | 1.00 USD | [Image](https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/03/photo/39c4b1f4d1.jpg) |
| Union Berlin | [Away](https://www.vivi-jersey.com/products/2026-27-union-berlin-away-football-jersey-s-4xl) | Bundesliga | 1.00 USD | [Image](https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/03/photo/39c4b1f4d1.jpg) |
| Werder Bremen | [Away](https://www.vivi-jersey.com/products/2026-27-werder-bremen-away-football-jersey-s-4xl) | Bundesliga | 1.00 USD | [Image](https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/03/photo/39c4b1f4d1.jpg) |

**Important :** l'image extraite est identique pour 7 clubs sur 8 ; seul Bayern a une image distincte. Cela peut être normal pour un patch de ligue commun, mais il faut contrôler visuellement que l'image est bien le patch Bundesliga officiel attendu et pas une vignette générique ou une erreur de mapping. Le libellé, l'emplacement et le prix doivent aussi être revérifiés sur chaque fiche source. Le cas Hamburger SV est une fiche *Kids Third Kit* : ne pas généraliser son option à d'autres modèles HSV.

## Autres options isolées — hors lot Bundesliga

Les 50 candidats initiaux contiennent aussi des libellés « UCL », « UCL + FOUNDATION », « UCL 6… », « Club World Cup », « FIFA 2013/2020 », « Supercup », « CUP », ainsi qu'une option « 2024-25 bundesliga ». Ils sont classés hors du lot Bundesliga 2026-27 strict, à examiner dans une phase distincte si nécessaire. Les variantes UCL ne sont pas des patchs Bundesliga ; les mentions FIFA/Club World Cup/Supercup et les références 2024-25 nécessitent une validation de compétition et de saison avant tout rattachement.

## Couverture des clubs

Clubs détectés : Augsburg, Bayern, Dortmund, Frankfurt, Hamburger SV, Hoffenheim, Leverkusen, Mainz, Mönchengladbach, RB Leipzig, Stuttgart, Union Berlin et Werder Bremen.

Clubs non détectés par l'audit : SV Elversberg, SC Freiburg, 1. FC Köln, SC Paderborn 07 et Schalke 04. Les essais de collections ciblées n'ont pas retourné de collection exploitable dans cet audit ; cela ne prouve pas que le fournisseur ne vend aucun article pour ces clubs.

Parmi les 13 clubs détectés, seuls les 8 clubs listés ci-dessus ont une option portant exactement le libellé Bundesliga sur au moins une fiche dont le titre indique 2026-27. Frankfurt, Hoffenheim, Leverkusen, Mainz et Stuttgart restent sans candidat strict 2026-27 identifié dans ce rapport.

## Décision de préparation

- Aucun candidat n'est activé.
- Aucun enregistrement Supabase n'est créé ou modifié.
- Aucun maillot n'est ajouté au catalogue JerseyHub.
- Aucun prix USD n'est converti en EUR.
- Aucun déploiement public n'est effectué.
- Rattachement uniquement à une fiche JerseyHub existante, avec correspondance exacte équipe/produit et contrôle visuel préalable.
