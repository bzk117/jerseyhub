# Préparation — patchs, flocages et personnalisation

Statut : document de préparation uniquement. Aucun changement de comportement du site n'est activé par ce document.

## Objectif

Préparer JerseyHub à gérer, pour chaque maillot, les patchs compatibles, les flocages officiels (nom imprimé et numéro), ainsi que la personnalisation libre du client. Le fonctionnement doit couvrir les clubs et les sélections nationales, sans inventer d'options et sans rendre commandable un article dont les informations essentielles ne sont pas vérifiées.

## État existant observé dans le dépôt

- Le parcours d'ajout au panier dans `app.js` possède déjà un choix de personnalisation : aucune, nom/numéro d'un joueur, ou nom/numéro personnalisés.
- La personnalisation manuelle existe déjà. La sélection automatique d'un joueur est actuellement réservée aux équipes nationales.
- `national-players.js` contient des listes de joueurs structurées avec nom, texte de flocage et numéro. Les commentaires du fichier indiquent une référence aux listes FIFA 2026 ; ces données doivent être contrôlées avant d'être présentées comme flocages réellement proposés par le fournisseur.
- Les commandes enregistrent déjà `customization_type`, `custom_name` et `custom_number`.
- Le schéma Supabase contient déjà `patch_selections`, `patch_total_eur` et la table `patch_options`, avec lecture publique limitée aux options actives et gestion réservée aux administrateurs.
- L'interface d'administration comporte déjà un panneau de gestion des patchs. Il est actuellement limité à la catégorie `national`, et son formulaire ne propose que trois emplacements.
- Les patchs et flocages disponibles ne doivent pas être déduits uniquement de l'effectif officiel d'un club ou d'une sélection : les options de marquage du fournisseur peuvent être différentes.

## Données à prévoir par fiche maillot

- Équipe / sélection.
- Saison.
- Version : domicile, extérieur, third, gardien, rétro ou autre valeur confirmée.
- Statut de vérification des informations.
- Patchs disponibles : identifiant, libellé exact, visuel, emplacement (manche gauche/droite ou autre), compétition, compatibilité avec le modèle et éventuel supplément.
- Flocages officiels disponibles : nom du joueur, texte exact imprimé, numéro, saison/compétition concernée et statut de vérification.
- Personnalisation libre : autorisée, indisponible ou à confirmer.
- Restrictions et remarques fournisseur.

Les informations absentes doivent rester « à vérifier » / non renseignées ; ne jamais transformer une absence de donnée en confirmation de disponibilité.

## Règles métier

1. Distinguer le joueur présent dans l'effectif officiel du flocage effectivement proposé par le fournisseur.
2. Conserver le nom imprimé exact (accents, espaces, abréviations) séparément du nom civil.
3. Associer chaque numéro à une saison et à une équipe ; ne pas réutiliser automatiquement un ancien numéro.
4. N'afficher au client que les options confirmées et actives.
5. Permettre la saisie libre uniquement lorsque la personnalisation libre est confirmée comme disponible.
6. Sauvegarder dans la commande un instantané des options sélectionnées (libellé, numéro, patch, supplément) afin que les commandes historiques restent exactes même si le catalogue change.
7. Ne pas modifier ni supprimer les options existantes sans comparaison et validation.
8. Les produits incomplets ou non vérifiés restent en attente et ne deviennent pas commandables.

## Travaux techniques à réaliser ensuite

1. Cartographier précisément le rendu produit, le panier, la commande, l'administration et les tables Supabase avant toute modification.
2. Définir un modèle de données commun clubs/sélections, avec compatibilité ascendante avec les commandes existantes.
3. Étendre la gestion des flocages aux clubs et lier les listes à une équipe + saison + modèle, avec saisie manuelle de secours.
4. Réactiver et compléter l'administration des patchs : création, modification, activation/désactivation, visuel, emplacement, compatibilité et supplément.
5. Relier les options vérifiées aux fiches produits et afficher clairement les choix côté client.
6. Vérifier les snapshots de commande et l'affichage côté administration.
7. Tester les cas club/sélection, joueur disponible/indisponible, patchs multiples, personnalisation libre, option non vérifiée, ancien panier et anciennes commandes.
8. Effectuer les tests sur une branche isolée et un environnement de prévisualisation. Ne fusionner dans `main` et ne déployer sur le site public qu'après validation.

## Contrôles anti-erreur

- Aucune liste de joueurs n'est automatiquement qualifiée de « flocage officiel disponible » sans preuve fournisseur pour le modèle/saison.
- Aucun patch n'est proposé sur un maillot auquel il n'est pas associé.
- Aucun supplément n'est inventé.
- Les données et fonctionnalités déjà présentes sont conservées.
- Les fichiers et images du catalogue existant ne sont ni supprimés ni remplacés par cette préparation.


## Audit technique complémentaire — 6 novembre 2026

Lecture effectuée sur la branche de préparation, sans modifier le code fonctionnel.

### Points précis à corriger ou à vérifier

- Dans `app.js`, le chargement Supabase des patchs est exécuté uniquement lorsque `p.category === "national"`. Les clubs ne récupèrent donc pas les options de la table `patch_options`.
- Si aucune option Supabase n'est trouvée pour une sélection nationale, le site affiche une liste de patchs intégrée directement dans `app.js`. Ce comportement doit être retiré ou neutralisé pour éviter de présenter des options non confirmées pour la fiche précise.
- Les patchs intégrés au code utilisent cinq emplacements, alors que le formulaire d'administration et la contrainte SQL de `patch_options.slot_number` n'acceptent que les emplacements 1 à 3. Il faut choisir un modèle cohérent, sans perdre les données déjà enregistrées.
- La gestion d'administration enregistre actuellement `category: 'national'` en dur. Elle doit permettre de gérer les clubs et les sélections, et de relier les options à une saison et/ou à un modèle lorsque nécessaire.
- La sélection automatique de joueur est actuellement limitée aux sélections nationales. Pour les clubs, le choix « joueur » affiche aujourd'hui des champs de saisie manuelle au lieu d'une liste de joueurs.
- Les listes de `national-players.js` sont des listes d'effectifs/numéros de compétition. Elles ne prouvent pas que le fournisseur propose ces flocages sur chaque maillot.
- Le panier conserve déjà des sélections de patchs et des informations de personnalisation. La création des lignes de commande enregistre également les patchs et les champs de personnalisation.
- Le schéma `request_items` contient une colonne `season`, mais le code de création des lignes de commande examiné ne transmet pas cette valeur. Il faudra vérifier comment la saison est portée dans les fiches et le panier avant de l'ajouter au snapshot.
- Les snapshots de patchs enregistrent actuellement un supplément nul dans le parcours client. La gestion du prix réel doit être raccordée uniquement à une valeur confirmée par l'administration/fournisseur.

### Ordre de réalisation recommandé

1. Définir le modèle commun des options (catégorie, équipe, saison, modèle, emplacement, libellé, visuel, prix, statut de vérification et statut actif).
2. Corriger la lecture des patchs pour clubs et sélections, et supprimer les choix de secours non vérifiés du parcours client.
3. Harmoniser les emplacements entre interface et base, après inventaire des lignes déjà enregistrées.
4. Ajouter la gestion des flocages fournisseurs par équipe/saison/modèle, sans confondre effectif officiel et disponibilité de marquage.
5. Ajouter les champs de saison/version manquants au panier et au snapshot de commande, avec compatibilité pour les anciennes commandes.
6. Tester le rendu client, les permissions Supabase, l'administration, les commandes et les anciennes données sur la branche de préparation uniquement.
