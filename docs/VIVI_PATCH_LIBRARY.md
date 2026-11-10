# Bibliothèque de patchs de clubs

Le script `scripts/vivi_patch_library.py` parcourt les collections de clubs et de ligues de Vivi Jersey, examine les fiches produit, télécharge les images de patch identifiées et relève aussi les tailles ainsi que les options de flocage/personnalisation.

## Classement et association

- Les images téléchargées sont rangées dans `assets/patches/<ligue>/<club>/`.
- `data/tailles.csv` contient les tailles adultes/enfants détectées pour chaque fiche.
- `data/flocages.csv` contient les options de flocage/personnalisation et les suppléments fournisseur en USD lorsqu'ils sont disponibles.
- Les données détaillées de tailles et de flocages sont aussi conservées dans le rapport JSON de chaque produit.
- Le manifeste `vivi-patch-library.js` est indexé par URL fournisseur exacte de la fiche produit.
- Le sélecteur JerseyHub lit ce manifeste et fusionne les options avec les options déjà présentes sans doublonner les libellés et emplacements.
- Une fiche dont le club est ambigu, ou dont le patch n'a pas d'image identifiée de façon fiable, est conservée dans le rapport mais n'est pas ajoutée au manifeste affiché.

## Exécution

Le workflow GitHub Actions « Build and integrate Vivi club patch library » peut être lancé manuellement. Il télécharge les images et prépare une pull request contenant le rapport et les fichiers intégrés.

## Protections

- Pas d'écriture dans Supabase.
- Pas de suppression ou de remplacement des produits existants.
- Pas de déploiement public automatique.
- Les prix fournisseur restent en USD dans les données d'audit. Aucun taux de change n'est inventé.
