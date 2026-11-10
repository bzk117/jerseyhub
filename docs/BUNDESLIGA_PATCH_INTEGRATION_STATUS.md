# Bundesliga 2026-27 — préparation à l'intégration des patchs

**Branche :** `prep/bundesliga-patch-integration`  
**PR de préparation :** [#14](https://github.com/bzk117/jerseyhub/pull/14)

## Périmètre de référence

La saison 2026-27 compte 18 clubs : Bayern, Dortmund, RB Leipzig, Leverkusen, Frankfurt, Freiburg, Stuttgart, Mainz, Werder Bremen, Borussia Mönchengladbach, Union Berlin, Augsburg, Hoffenheim, Hamburger SV, 1. FC Köln, Schalke 04, SV Elversberg et SC Paderborn 07.

St. Pauli et Wolfsburg ne font pas partie de cette liste 2026-27. Les scripts ont été corrigés pour ne plus les compter comme clubs attendus et inclure les trois promus.

## Résultat de l'audit précédent

L'audit initial a analysé 498 fiches issues de 12 collections, mais il utilisait une liste de clubs de saison précédente. Il a trouvé 11 identifiants de clubs, dont St. Pauli et Wolfsburg, et n'a ajouté aucune fiche depuis le sitemap. Il a aussi reçu 128 réponses HTTP 429. Ce résultat est utile comme première extraction, mais ne valide pas une couverture complète de la Bundesliga 2026-27.

## Correctifs de préparation ajoutés

- Référence des 18 clubs mise à jour pour 2026-27.
- Détection des noms de clubs en anglais, allemand et chinois lorsque l'URL ou le libellé les contient.
- Recherche complémentaire des collections par slugs canoniques pour les clubs absents de l'index public.
- Lecture plus robuste des sitemaps XML et de leurs index, avec plusieurs points d'entrée courants.
- Filtrage des produits hors de la liste actuelle des 18 clubs.
- Génération des candidats sans activation, en conservant les images et les prix USD d'origine.
- Contrôle automatisé : saison, roster, absence de clubs hors périmètre, URL de preuve, image, devise, unicité et statut obligatoirement inactif.

## État du catalogue JerseyHub

- `public.patch_options` existe et contient 0 ligne.
- `clubs-products.js` contient 46 fiches de Manchester United ; aucune fiche de club allemand n'y est actuellement enregistrée.
- `catalog.js` ne fournit pas de catalogue de clubs allemand.
- `app.js` affiche les patchs de clubs uniquement lorsqu'ils sont associés à un nom exact de produit (ou intégrés dans la fiche produit elle-même).
- L'interface d'administration des patchs est préparée sur cette branche, mais elle n'a pas été publiée.

## Conditions bloquantes avant publication

1. Obtenir une collecte suffisamment complète pour les 18 clubs de la saison 2026-27, ou documenter précisément les clubs absents du catalogue Vivi.
2. Reprendre les pages illisibles et les erreurs de limitation fournisseur.
3. Vérifier visuellement chaque image, le libellé exact, l'emplacement et le supplément du patch sur la fiche source.
4. Écarter les options sponsor, commémoratives, « No Patch » et les patchs de compétitions incompatibles avec la saison ou le maillot.
5. Relier chaque patch à une fiche de maillot JerseyHub existante et compatible. **Aucun nouveau maillot ne doit être créé pour contourner l'absence de fiche.**
6. Les prix fournisseurs sont en USD : ne pas les écrire dans `extra_price_eur` sans taux daté et conversion vérifiée.
7. Tester le sélecteur client, le total de supplément et l'enregistrement du snapshot dans une commande.

Tant que le catalogue JerseyHub ne contient pas de fiches allemandes existantes auxquelles relier les patchs, l'activation de patchs Bundesliga pour les clients est impossible sans enfreindre le périmètre demandé. Les options doivent rester non actives.

**Aucune écriture Supabase, aucune activation, aucune modification du catalogue client et aucun déploiement public ne sont effectués par les scripts d'audit.**
