# Bundesliga — préparation à l'intégration des patchs

**Branche de préparation :** `prep/bundesliga-patch-integration`  
**Audit source :** [GitHub Actions #42784843400](https://github.com/bzk117/jerseyhub/actions/runs/42784843400)

## État vérifié

- 498 fiches Vivi Jersey analysées.
- 12 collections détectées.
- 11 clubs identifiés dans les collections.
- 247 fiches avec options illustrées extraites.
- 220 fiches sans sélecteur de patch détecté.
- 31 fiches illisibles (limitation/réponse fournisseur en fin de collecte).
- 1 254 lignes d'options brutes dans le rapport ; ce nombre comprend les répétitions et les options non-patch.
- La table Supabase `public.patch_options` existe mais contient actuellement 0 ligne.
- Le catalogue de produits clubs `clubs-products.js` contient 46 fiches, toutes associées à Manchester United : aucun produit allemand JerseyHub n'est actuellement présent dans ce fichier.
- `app.js` sait déjà lire les options `category = 'clubs'`, mais uniquement lorsqu'elles sont liées au nom exact du produit. Il ignore volontairement les options génériques par équipe.
- Aucune interface de gestion de `patch_options` n'a été trouvée dans `administration.html` : il faudra prévoir un écran admin pour gérer les options, les activer et les désactiver.

## Ce qui a été préparé dans cette branche

Le script `scripts/build_bundesliga_patch_candidates.py` transforme le rapport brut en bibliothèque de candidats :
- conserve uniquement des libellés exacts liés à une compétition (Bundesliga, UCL, Club World Cup, coupe, Supercup, FIFA) ;
- exclut « No Patch », les sponsors (Allianz, Vodafone, Polestar, Audi, etc.) et les choix commémoratifs ;
- conserve les images originales et les liens vers les fiches Vivi où l'option a été observée ;
- conserve les suppléments dans leur devise fournisseur USD ;
- marque chaque option `candidate_not_active`.

Cette bibliothèque est un support de préparation, **pas une activation publique**. Il faut confirmer le modèle exact, le club, la saison, le placement et la correspondance avec une fiche JerseyHub avant d'activer une option.

## Clubs encore absents de la collecte

Les 7 clubs non détectés dans les collections identifiées sont :
Freiburg, Hoffenheim, Augsburg, Mainz, Hamburg, Heidenheim et Köln.

Quatre clubs identifiés dans les collections ne disposent pas d'options de patch exploitables dans le rapport actuel : Frankfurt, Leverkusen, St. Pauli et Union Berlin.

L'absence d'options dans le rapport ne prouve pas que Vivi ne propose aucun patch. Ces cas doivent rester « à vérifier ».

## Pourquoi rien n'est encore activé dans Supabase

L'interface client actuelle n'affiche que les options associées au nom exact d'un produit (ou déjà présentes dans `p.patchOptions`). Elle ignore volontairement les options génériques par équipe pour éviter d'afficher un patch sur un maillot incompatible.

En outre, les fiches allemandes Vivi ne correspondent pas à des fiches produit actuellement présentes dans `clubs-products.js`. Importer maintenant des lignes actives créerait une bibliothèque orpheline, sans maillot client auquel les rattacher. L'administration ne possède pas encore d'écran pour gérer ces lignes. Les prix USD ne peuvent pas être placés dans `extra_price_eur` sans conversion confirmée.

## Conditions avant activation

1. Compléter la collecte des 18 clubs et reprendre les fiches illisibles.
2. Revoir les images et séparer les patchs de compétition des sponsors/insignes commémoratifs.
3. Relier chaque option à une fiche JerseyHub précise, sans créer de maillot.
4. Convertir les suppléments USD en EUR à partir d'un taux daté, ou les faire confirmer par l'administrateur.
5. Insérer les options en état inactif, tester l'affichage sur une fiche pilote, puis activer seulement après validation.
6. Vérifier le snapshot des choix et des suppléments dans les commandes.
7. Ne rien supprimer ni remplacer dans les options existantes.

**Aucune donnée Supabase et aucune fiche publique n'ont été modifiées par cette préparation.**
