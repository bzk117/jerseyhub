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
- L'interface d'administration comporte une gestion des patchs, mais le code examiné indique qu'elle est masquée/inactive dans l'interface actuelle.
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
