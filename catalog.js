/*
  FOURNISSEUR DE RÉFÉRENCE : VIVI JERSEY
  Catalogue source : https://vivi-jersey.com/
  Les articles, images, tailles et stocks doivent être vérifiés sur ce fournisseur
  avant d'être ajoutés dans PRODUCTS. Ne jamais publier ses prix ni ses liens clients.
*/
const SUPPLIER = {
  name: "Vivi Jersey",
  catalogueUrl: "https://vivi-jersey.com/",
  sourceOfTruth: true
};
/*
  CATALOGUE À MODIFIER
  - Ajoute/retire des équipes dans les tableaux ci-dessous.
  - Pour ajouter un maillot, ajoute un objet dans PRODUCTS.
  - Mets uniquement les tailles réellement proposées pour ce produit.
  - image: photo du modèle exact récupérée depuis sa fiche Vivi Jersey.
  - sizes: liste exacte des tailles proposées pour CE modèle, relevée sur la même fiche.
  - Associer systématiquement chaque image à ses propres tailles : ne jamais réutiliser
    les tailles d'un autre maillot, ni deviner une taille manquante.
  - Si les tailles ne sont pas visibles ou vérifiables, ne pas publier la fiche.
  - Les tailles renseignées dans PRODUCTS sont affichées automatiquement sur la fiche.
  - Ne renseigne aucun prix : le site n'en affiche pas.

  Exemple de structure (illustration uniquement, pas un produit réel) :
  {
    name: "Nom exact du maillot",
    category: "national",
    group: "Maroc",
    image: "chemin/vers/photo-validee.jpg",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"]
  }
*/
const NATIONAL_REGIONS = [
  {name:"Europe", items:[
    ["Allemagne","🇩🇪"],["France","🇫🇷"],["Angleterre","🏴"],["Italie","🇮🇹"],["Portugal","🇵🇹"],["Pays-Bas","🇳🇱"],["Espagne","🇪🇸"],["Belgique","🇧🇪"],["Irlande","🇮🇪"],["Pologne","🇵🇱"],["Écosse","🏴"],["Danemark","🇩🇰"],["Finlande","🇫🇮"],["Pays de Galles","🏴"],["Serbie","🇷🇸"],["Grèce","🇬🇷"],["Norvège","🇳🇴"],["Croatie","🇭🇷"]
  ]},
  {name:"Afrique", items:[
    ["Maroc","🇲🇦"],["Algérie","🇩🇿"],["Tunisie","🇹🇳"],["Sénégal","🇸🇳"],["Côte d’Ivoire","🇨🇮"],["Cameroun","🇨🇲"],["Nigeria","🇳🇬"],["Égypte","🇪🇬"],["Ghana","🇬🇭"],["Afrique du Sud","🇿🇦"],["Cap-Vert","🇨🇻"]
  ]},
  {name:"Amériques", items:[
    ["Argentine","🇦🇷"],["Brésil","🇧🇷"],["Uruguay","🇺🇾"],["Colombie","🇨🇴"],["Mexique","🇲🇽"],["États-Unis","🇺🇸"],["Canada","🇨🇦"],["Chili","🇨🇱"],["Équateur","🇪🇨"],["Paraguay","🇵🇾"],["Pérou","🇵🇪"],["Bolivie","🇧🇴"],["Costa Rica","🇨🇷"],["Venezuela","🇻🇪"],["Panama","🇵🇦"],["Jamaïque","🇯🇲"],["Haïti","🇭🇹"]
  ]},
  {name:"Asie", items:[
    ["Japon","🇯🇵"],["Corée du Sud","🇰🇷"],["Palestine","🇵🇸"],["Arabie saoudite","🇸🇦"],["Qatar","🇶🇦"],["Émirats arabes unis","🇦🇪"],["Jordanie","🇯🇴"]
  ]},
  {name:"Océanie", items:[
    ["Australie","🇦🇺"]
  ]}
];
const CLUB_LEAGUES = [
  {name:"Angleterre",items:["Premier League","Championship","Autres clubs anglais"]},
  {name:"Espagne",items:["La Liga","Autres clubs espagnols"]},
  {name:"Italie",items:["Serie A","Autres clubs italiens"]},
  {name:"Allemagne",items:["Bundesliga","Autres clubs allemands"]},
  {name:"France",items:["Ligue 1","Autres clubs français"]},
  {name:"Autres championnats",items:["Portugal","Pays-Bas","Écosse","Belgique","Turquie","Arabie saoudite","Brésil","Argentine","États-Unis"]}
];
const OTHER_SPORTS = [
  {name:"NBA",emoji:"🏀",desc:"Basket-ball américain"},
  {name:"NFL",emoji:"🏈",desc:"Football américain"},
  {name:"MLB",emoji:"⚾",desc:"Baseball"},
  {name:"NHL",emoji:"🏒",desc:"Hockey sur glace"},
  {name:"Rugby",emoji:"🏉",desc:"Sélections et clubs"},
  {name:"Autres articles",emoji:"👕",desc:"Vestes, survêtements, rétro et accessoires"}
];
// Exemple de fiche : {name:"Allemagne domicile 2026",category:"national",group:"Allemagne",image:"assets/...",sizes:["S","M","L","XL","2XL","3XL"]}
// Les fiches seront publiées après vérification des modèles, des photos autorisées,
// des tailles et des disponibilités.
const PRODUCTS = [
  {
    "name": "2025 26 Algeria Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Algérie",
    "image": "assets/equipes-nationales/Afrique/algerie/001_2025-26-Algeria-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Algeria Away Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Algérie",
    "image": "assets/equipes-nationales/Afrique/algerie/005_2025-26-Algeria-Away-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Ghana Home Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Ghana",
    "image": "assets/equipes-nationales/Afrique/ghana/001_2026-Ghana-Home-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Ghana Away Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Ghana",
    "image": "assets/equipes-nationales/Afrique/ghana/005_2026-Ghana-Away-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Morocco Home Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Maroc",
    "image": "assets/equipes-nationales/Afrique/maroc/001_2025-26-Morocco-Home-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Morocco Away Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Maroc",
    "image": "assets/equipes-nationales/Afrique/maroc/005_2026-Morocco-Away-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Nigeria Home Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Nigeria",
    "image": "assets/equipes-nationales/Afrique/nigeria/001_2026-Nigeria-Home-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Nigeria Away Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Nigeria",
    "image": "assets/equipes-nationales/Afrique/nigeria/003_2026-Nigeria-Away-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Nigeria Home Football jersey S 4XL",
    "category": "national",
    "group": "Nigeria",
    "image": "assets/equipes-nationales/Afrique/nigeria/005_2025-26-Nigeria-Home-Football-jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Senegal Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Sénégal",
    "image": "assets/equipes-nationales/Afrique/senegal/001_2025-26-Senegal-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Senegal Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Sénégal",
    "image": "assets/equipes-nationales/Afrique/senegal/004_2025-26-Senegal-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Tunisia Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Tunisie",
    "image": "assets/equipes-nationales/Afrique/tunisie/004_2025-26-Tunisia-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Tunisia Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Tunisie",
    "image": "assets/equipes-nationales/Afrique/tunisie/005_2025-26-Tunisia-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Tunisia Third away game Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Tunisie",
    "image": "assets/equipes-nationales/Afrique/tunisie/006_2025-26-Tunisia-Third-away-game-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Argentina Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/001_2025-26-Argentina-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2025 26 Argentina Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/002_Player-2025-26-Argentina-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "PLAYER 2024 25 Argentina 50 years commemorate Football jersey S 4XL",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/020_PLAYER-2024-25-Argentina-50-years-commemorate-Football-jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player version Retro 2022 Argentina Home Football jersey Retro S 3XL",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/036_Player-version-Retro-2022-Argentina-Home-Football-jersey-Retro-S-3XL.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "Player version Retro 2021 Argentina Home Football jersey Retro S 3XL",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/048_Player-version-Retro-2021-Argentina-Home-Football-jersey-Retro-S-3XL.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "Player Retro 2019 Argentina Home Football jersey S 3XL Retro",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/051_Player-Retro-2019-Argentina-Home-Football-jersey-S-3XL-Retro.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "Player Retro 2018 Argentina Home Football jersey S 3XL Retro",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/052_Player-Retro-2018-Argentina-Home-Football-jersey-S-3XL-Retro.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "Player version Retro 2014 Argentina Home Football jersey Retro S 3XL",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/057_Player-version-Retro-2014-Argentina-Home-Football-jersey-Retro-S-3XL.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "Player version Retro 2014 Argentina Away Football jersey Retro S 3XL",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/060_Player-version-Retro-2014-Argentina-Away-Football-jersey-Retro-S-3XL.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "Player 2025 26 Argentina Home Football jersey Long sleeves S 3XL World Cup",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/158_Player-2025-26-Argentina-Home-Football-jersey-Long-sleeves-S-3XL-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "2025 26 Argentina goalkeeper Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/162_2025-26-Argentina-goalkeeper-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 Argentina Away Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/164_Player-2026-Argentina-Away-Football-Jersey-S-4XL-World-Cup.png",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Argentina Home Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/165_2025-26-Argentina-Home-Football-Jersey-S-4XL-Long-sleeves-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Argentina Away Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/174_2026-Argentina-Away-Football-Jersey-S-4XL-World-Cup.png",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 Argentina Goalkeeper Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/187_Player-2026-Argentina-Goalkeeper-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 Argentina MARADONA10 Football jersey S 3XL",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/200_Player-2026-Argentina-MARADONA10-Football-jersey-S-3XL.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "Player 2026 Argentina MARADONA10 Football jersey S 3XL",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/201_Player-2026-Argentina-MARADONA10-Football-jersey-S-3XL.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "Player 2026 Argentina MARADONA10 Football jersey S 3XL",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/202_Player-2026-Argentina-MARADONA10-Football-jersey-S-3XL.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "Player 2026 Argentina Special Edition Football jersey S 3XL",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/203_Player-2026-Argentina-Special-Edition-Football-jersey-S-3XL.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "2026 Argentina Away Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/206_2026-Argentina-Away-Football-Jersey-S-4XL-Long-sleeves-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 Argentina Away Football jersey Long sleeves S 3XL World Cup",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/216_Player-2026-Argentina-Away-Football-jersey-Long-sleeves-S-3XL-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "2026 Argentina x Thrasher Black Blue Football jersey S 4XL",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/228_2026-Argentina-x-Thrasher-Black-Blue-Football-jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Argentina EQT Cotten Football Jersey S 4XL",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/232_2026-Argentina-EQT-Cotten-Football-Jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 Argentina Special Edition Football jersey S 4XL",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/235_Player-2026-Argentina-Special-Edition-Football-jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Argentina Tribute Goalkeeper Football Jersey S 4XL",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/236_2026-Argentina-Tribute-Goalkeeper-Football-Jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Argentina Maradona Culture Polo Football Jersey S 4XL",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/237_2026-Argentina-Maradona-Culture-Polo-Football-Jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 Argentina Special Edition Football jersey Long sleeve S 3XL",
    "category": "national",
    "group": "Argentine",
    "image": "assets/equipes-nationales/Ameriques/argentine/238_Player-2026-Argentina-Special-Edition-Football-jersey-Long-sleeve-S-3XL.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "Player 2026 Brazil Home Football jersey Long sleeves S 3XL World Cup",
    "category": "national",
    "group": "Brésil",
    "image": "assets/equipes-nationales/Ameriques/bresil/184_Player-2026-Brazil-Home-Football-jersey-Long-sleeves-S-3XL-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "2025 26 Brazil Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Brésil",
    "image": "assets/equipes-nationales/Ameriques/bresil/208_2025-26-Brazil-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2025 26 Brazil Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Brésil",
    "image": "assets/equipes-nationales/Ameriques/bresil/223_Player-2025-26-Brazil-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Brazil Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Brésil",
    "image": "assets/equipes-nationales/Ameriques/bresil/226_2025-26-Brazil-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Brazil Away Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Brésil",
    "image": "assets/equipes-nationales/Ameriques/bresil/244_2026-Brazil-Away-Football-Jersey-S-4XL-Long-sleeves-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Brazil Special Edition Football Jersey S 4XL",
    "category": "national",
    "group": "Brésil",
    "image": "assets/equipes-nationales/Ameriques/bresil/251_2026-Brazil-Special-Edition-Football-Jersey-S-4XL.png",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Brazil Special Edition Football Jersey S 4XL",
    "category": "national",
    "group": "Brésil",
    "image": "assets/equipes-nationales/Ameriques/bresil/252_2026-Brazil-Special-Edition-Football-Jersey-S-4XL.png",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Brazil Special Edition Football Jersey S 4XL",
    "category": "national",
    "group": "Brésil",
    "image": "assets/equipes-nationales/Ameriques/bresil/255_2026-Brazil-Special-Edition-Football-Jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Brazil Home Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Brésil",
    "image": "assets/equipes-nationales/Ameriques/bresil/261_2026-Brazil-Home-Football-Jersey-S-4XL-Long-sleeves-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Brazil Goalkeeper Football Jersey S 4XL",
    "category": "national",
    "group": "Brésil",
    "image": "assets/equipes-nationales/Ameriques/bresil/278_2026-Brazil-Goalkeeper-Football-Jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 Brazil Away Football jersey Long sleeves S 3XL World Cup",
    "category": "national",
    "group": "Brésil",
    "image": "assets/equipes-nationales/Ameriques/bresil/280_Player-2026-Brazil-Away-Football-jersey-Long-sleeves-S-3XL-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "2026 Brazil Travis Scott Cactus Total 90 Football Jersey S 4XL",
    "category": "national",
    "group": "Brésil",
    "image": "assets/equipes-nationales/Ameriques/bresil/307_2026-Brazil-Travis-Scott-Cactus-Total-90-Football-Jersey-S-4XL.webp",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Canada Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Canada",
    "image": "assets/equipes-nationales/Ameriques/canada/020_2025-26-Canada-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Chile Home Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Chili",
    "image": "assets/equipes-nationales/Ameriques/chili/001_2025-26-Chile-Home-Football-Jersey-S-4XL-World-Cup.png",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Colombia EQT Cotton Black Football Jersey S 4XL",
    "category": "national",
    "group": "Colombie",
    "image": "assets/equipes-nationales/Ameriques/colombie/001_2026-Colombia-EQT-Cotton-Black-Football-Jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Colombia EQT Cotton White Football Jersey S 4XL",
    "category": "national",
    "group": "Colombie",
    "image": "assets/equipes-nationales/Ameriques/colombie/002_2026-Colombia-EQT-Cotton-White-Football-Jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Colombia Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Colombie",
    "image": "assets/equipes-nationales/Ameriques/colombie/003_2025-26-Colombia-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Colombia Home Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Colombie",
    "image": "assets/equipes-nationales/Ameriques/colombie/004_2025-26-Colombia-Home-Football-Jersey-S-4XL-Long-sleeves-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player version 2025 26 Colombia Home Football jersey S 3XL World Cup",
    "category": "national",
    "group": "Colombie",
    "image": "assets/equipes-nationales/Ameriques/colombie/005_Player-version-2025-26-Colombia-Home-Football-jersey-S-3XL-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "Player version 2025 26 Colombia Home Football jersey S 3XL Long sleeves World Cu",
    "category": "national",
    "group": "Colombie",
    "image": "assets/equipes-nationales/Ameriques/colombie/006_Player-version-2025-26-Colombia-Home-Football-jersey-S-3XL-Long-sleeves-World-Cu.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "Player 2026 Colombia Away Football jersey Long sleeves S 3XL World Cup",
    "category": "national",
    "group": "Colombie",
    "image": "assets/equipes-nationales/Ameriques/colombie/014_Player-2026-Colombia-Away-Football-jersey-Long-sleeves-S-3XL-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "2025 26 USA Home Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "États-Unis",
    "image": "assets/equipes-nationales/Ameriques/etats-unis/001_2025-26-USA-Home-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 USA Away Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "États-Unis",
    "image": "assets/equipes-nationales/Ameriques/etats-unis/003_2025-26-USA-Away-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 USA Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "États-Unis",
    "image": "assets/equipes-nationales/Ameriques/etats-unis/026_Player-2026-USA-Away-Football-jersey-S-4XL-World-Cup.png",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 USA Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "États-Unis",
    "image": "assets/equipes-nationales/Ameriques/etats-unis/031_2026-USA-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 USA Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "États-Unis",
    "image": "assets/equipes-nationales/Ameriques/etats-unis/032_2026-USA-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 USA Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "États-Unis",
    "image": "assets/equipes-nationales/Ameriques/etats-unis/033_Player-2026-USA-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 USA Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "États-Unis",
    "image": "assets/equipes-nationales/Ameriques/etats-unis/034_Player-2026-USA-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 USA Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "États-Unis",
    "image": "assets/equipes-nationales/Ameriques/etats-unis/037_2026-USA-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Mexico Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Mexique",
    "image": "assets/equipes-nationales/Ameriques/mexique/001_2025-26-Mexico-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Mexico Home Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Mexique",
    "image": "assets/equipes-nationales/Ameriques/mexique/002_2025-26-Mexico-Home-Football-Jersey-S-4XL-Long-sleeves-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player version 2025 26 Mexico World Cup Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Mexique",
    "image": "assets/equipes-nationales/Ameriques/mexique/003_Player-version-2025-26-Mexico-World-Cup-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Mexico away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Mexique",
    "image": "assets/equipes-nationales/Ameriques/mexique/011_2025-26-Mexico-away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Mexico Away Football jersey Long sleeved S 4XL World Cup",
    "category": "national",
    "group": "Mexique",
    "image": "assets/equipes-nationales/Ameriques/mexique/012_2025-26-Mexico-Away-Football-jersey-Long-sleeved-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 Mexico Away Football jersey Long sleeves S 3XL World Cup",
    "category": "national",
    "group": "Mexique",
    "image": "assets/equipes-nationales/Ameriques/mexique/014_Player-2026-Mexico-Away-Football-jersey-Long-sleeves-S-3XL-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "2025 26 Mexico Black Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Mexique",
    "image": "assets/equipes-nationales/Ameriques/mexique/017_2025-26-Mexico-Black-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Mexico Black Football jersey Long sleeved S 4XL World Cup",
    "category": "national",
    "group": "Mexique",
    "image": "assets/equipes-nationales/Ameriques/mexique/018_2025-26-Mexico-Black-Football-jersey-Long-sleeved-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Mexico 125th Anniversary Football jersey S 4XL",
    "category": "national",
    "group": "Mexique",
    "image": "assets/equipes-nationales/Ameriques/mexique/067_2025-26-Mexico-125th-Anniversary-Football-jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Mexico 125th Anniversary Football jersey Long Sleeve S 4XL",
    "category": "national",
    "group": "Mexique",
    "image": "assets/equipes-nationales/Ameriques/mexique/068_2025-26-Mexico-125th-Anniversary-Football-jersey-Long-Sleeve-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Mexico EQT Iconic Black Football Jersey S 4XL",
    "category": "national",
    "group": "Mexique",
    "image": "assets/equipes-nationales/Ameriques/mexique/198_2026-Mexico-EQT-Iconic-Black-Football-Jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Uruguay Home Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Uruguay",
    "image": "assets/equipes-nationales/Ameriques/uruguay/001_2026-Uruguay-Home-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 Uruguay Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Uruguay",
    "image": "assets/equipes-nationales/Ameriques/uruguay/002_Player-2026-Uruguay-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 Uruguay Home Football jersey Long sleeves S 3XL World Cup",
    "category": "national",
    "group": "Uruguay",
    "image": "assets/equipes-nationales/Ameriques/uruguay/003_Player-2026-Uruguay-Home-Football-jersey-Long-sleeves-S-3XL-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "2026 Uruguay Away Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Uruguay",
    "image": "assets/equipes-nationales/Ameriques/uruguay/004_2026-Uruguay-Away-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Saudi Arabia Away Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Arabie saoudite",
    "image": "assets/equipes-nationales/Asie-Oceanie/arabie-saoudite/002_2025-26-Saudi-Arabia-Away-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 Saudi Arabia Away Football Jersey S 3XL World Cup",
    "category": "national",
    "group": "Arabie saoudite",
    "image": "assets/equipes-nationales/Asie-Oceanie/arabie-saoudite/003_Player-2026-Saudi-Arabia-Away-Football-Jersey-S-3XL-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "2025 26 Saudi Arabia Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Arabie saoudite",
    "image": "assets/equipes-nationales/Asie-Oceanie/arabie-saoudite/006_2025-26-Saudi-Arabia-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Korea Away Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Corée du Sud",
    "image": "assets/equipes-nationales/Asie-Oceanie/coree-du-sud/005_2026-Korea-Away-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Korea Home Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Corée du Sud",
    "image": "assets/equipes-nationales/Asie-Oceanie/coree-du-sud/008_2026-Korea-Home-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Korea Home Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Corée du Sud",
    "image": "assets/equipes-nationales/Asie-Oceanie/coree-du-sud/009_2026-Korea-Home-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Japan Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Japon",
    "image": "assets/equipes-nationales/Asie-Oceanie/japon/098_2025-26-Japan-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player version 2025 26 Japan Home Football jersey S 3XL World Cup",
    "category": "national",
    "group": "Japon",
    "image": "assets/equipes-nationales/Asie-Oceanie/japon/099_Player-version-2025-26-Japan-Home-Football-jersey-S-3XL-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "Player version 2025 26 Japan Home Football jersey S 3XL Long sleeves World Cup",
    "category": "national",
    "group": "Japon",
    "image": "assets/equipes-nationales/Asie-Oceanie/japon/100_Player-version-2025-26-Japan-Home-Football-jersey-S-3XL-Long-sleeves-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "Player version 2025 26 Japan Away Football jersey S 3XL World Cup",
    "category": "national",
    "group": "Japon",
    "image": "assets/equipes-nationales/Asie-Oceanie/japon/101_Player-version-2025-26-Japan-Away-Football-jersey-S-3XL-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "Player 2025 26 Japan Away Football Jersey S 3XL World Cup",
    "category": "national",
    "group": "Japon",
    "image": "assets/equipes-nationales/Asie-Oceanie/japon/103_Player-2025-26-Japan-Away-Football-Jersey-S-3XL-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "2025 26 Japan Home Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Japon",
    "image": "assets/equipes-nationales/Asie-Oceanie/japon/106_2025-26-Japan-Home-Football-Jersey-S-4XL-Long-sleeves-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Japan Away Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Japon",
    "image": "assets/equipes-nationales/Asie-Oceanie/japon/107_2025-26-Japan-Away-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Japan Away Football Jersey S 4XL Long Sleeve World Cup",
    "category": "national",
    "group": "Japon",
    "image": "assets/equipes-nationales/Asie-Oceanie/japon/108_2025-26-Japan-Away-Football-Jersey-S-4XL-Long-Sleeve-World-Cup.png",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Japan EQT Cotton White Football Jersey S 4XL",
    "category": "national",
    "group": "Japon",
    "image": "assets/equipes-nationales/Asie-Oceanie/japon/116_2026-Japan-EQT-Cotton-White-Football-Jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Qatar home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Qatar",
    "image": "assets/equipes-nationales/Asie-Oceanie/qatar/004_2025-26-Qatar-home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Scotland Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Écosse",
    "image": "assets/equipes-nationales/Europe/Scotland/001_2025-26-Scotland-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Scotland away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Écosse",
    "image": "assets/equipes-nationales/Europe/Scotland/005_2025-26-Scotland-away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2025 26 Scotland away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Écosse",
    "image": "assets/equipes-nationales/Europe/Scotland/006_Player-2025-26-Scotland-away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Wales Home Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Pays de Galles",
    "image": "assets/equipes-nationales/Europe/Wales/001_2025-26-Wales-Home-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Wales Away Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Pays de Galles",
    "image": "assets/equipes-nationales/Europe/Wales/003_2025-26-Wales-Away-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Germany 125th Anniversary Blue Football jersey S 4XL",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/096_2025-26-Germany-125th-Anniversary-Blue-Football-jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Germany 125th Anniversary White Football jersey S 4XL",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/097_2025-26-Germany-125th-Anniversary-White-Football-jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Germany Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/106_2025-26-Germany-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player Version 2025 26 Germany Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/109_Player-Version-2025-26-Germany-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Germany Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/110_2025-26-Germany-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Germany Home Football jersey Long sleeves S 4XL World Cup",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/116_2025-26-Germany-Home-Football-jersey-Long-sleeves-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Germany away Long Sleeve Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/119_2025-26-Germany-away-Long-Sleeve-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player version 2025 26 Germany Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/120_Player-version-2025-26-Germany-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Germany Goalkeeper Football Jersey S 4XL Long Sleeve",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/137_2026-Germany-Goalkeeper-Football-Jersey-S-4XL-Long-Sleeve.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Germany Goalkeeper Football Jersey S 4XL",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/138_2026-Germany-Goalkeeper-Football-Jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Germany Special Edition Football Jersey S 4XL",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/149_2026-Germany-Special-Edition-Football-Jersey-S-4XL.png",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 Germany Away Football jersey Long sleeves S 3XL World Cup",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/160_Player-2026-Germany-Away-Football-jersey-Long-sleeves-S-3XL-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "2026 Germany Third Football Jersey S 4XL",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/220_2026-Germany-Third-Football-Jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Germany Third Football Jersey S 4XL Long sleeves",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/221_2026-Germany-Third-Football-Jersey-S-4XL-Long-sleeves.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 England Away Football jersey S 4XL",
    "category": "national",
    "group": "Angleterre",
    "image": "assets/equipes-nationales/Europe/angleterre/107_2025-26-England-Away-Football-jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player version 2025 26 England Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Angleterre",
    "image": "assets/equipes-nationales/Europe/angleterre/108_Player-version-2025-26-England-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 England Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Angleterre",
    "image": "assets/equipes-nationales/Europe/angleterre/109_2025-26-England-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 England Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Angleterre",
    "image": "assets/equipes-nationales/Europe/angleterre/119_Player-2026-England-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 England Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Angleterre",
    "image": "assets/equipes-nationales/Europe/angleterre/120_2026-England-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 England Away Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Angleterre",
    "image": "assets/equipes-nationales/Europe/angleterre/125_2026-England-Away-Football-Jersey-S-4XL-Long-sleeves-World-Cup.png",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 England Home Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Angleterre",
    "image": "assets/equipes-nationales/Europe/angleterre/128_2026-England-Home-Football-Jersey-S-4XL-Long-sleeves-World-Cup.png",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 England Away Football jersey Long sleeves S 3XL World Cup",
    "category": "national",
    "group": "Angleterre",
    "image": "assets/equipes-nationales/Europe/angleterre/133_Player-2026-England-Away-Football-jersey-Long-sleeves-S-3XL-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "2026 England x Palace Mens Pre match Football Jersey S 4XL",
    "category": "national",
    "group": "Angleterre",
    "image": "assets/equipes-nationales/Europe/angleterre/141_2026-England-x-Palace-Mens-Pre-match-Football-Jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Belgium Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Belgique",
    "image": "assets/equipes-nationales/Europe/belgique/001_2025-26-Belgium-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Belgium Home Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Belgique",
    "image": "assets/equipes-nationales/Europe/belgique/002_2026-Belgium-Home-Football-Jersey-S-4XL-Long-sleeves-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Belgium Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Belgique",
    "image": "assets/equipes-nationales/Europe/belgique/007_2026-Belgium-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 Belgium Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Belgique",
    "image": "assets/equipes-nationales/Europe/belgique/008_Player-2026-Belgium-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Croatia Home Football Jersey World Cup S 4XL",
    "category": "national",
    "group": "Croatie",
    "image": "assets/equipes-nationales/Europe/croatie/001_2026-Croatia-Home-Football-Jersey-World-Cup-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 Croatia Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Croatie",
    "image": "assets/equipes-nationales/Europe/croatie/002_Player-2026-Croatia-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "champion 2026 Spain home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/002_champion-2026-Spain-home-Football-jersey-S-4XL-World-Cup.webp",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "champion 2026 Spain Home Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/003_champion-2026-Spain-Home-Football-Jersey-S-4XL-Long-sleeves-World-Cup.webp",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "champion Player version 2025 26 Spain Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/004_champion-Player-version-2025-26-Spain-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "champion Player version 2025 26 Spain Home Football jersey Long sleeves S 4XL Wo",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/005_champion-Player-version-2025-26-Spain-Home-Football-jersey-Long-sleeves-S-4XL-Wo.webp",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "champion 2026 Spain Away Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/008_champion-2026-Spain-Away-Football-Jersey-S-4XL-World-Cup.webp",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "champion 2026 Spain Away Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/009_champion-2026-Spain-Away-Football-Jersey-S-4XL-Long-sleeves-World-Cup.webp",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "champion Player 2026 Spain Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/010_champion-Player-2026-Spain-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "champion Player 2026 Spain Away Football jersey Long sleeves S 3XL World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/011_champion-Player-2026-Spain-Away-Football-jersey-Long-sleeves-S-3XL-World-Cup.webp",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "champion 2026 Spain Third Away champion Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/014_champion-2026-Spain-Third-Away-champion-Football-Jersey-S-4XL-World-Cup.webp",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "champion 2026 Spain Black Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/015_champion-2026-Spain-Black-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Spain home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/020_2025-26-Spain-home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Spain Home Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/021_2025-26-Spain-Home-Football-Jersey-S-4XL-Long-sleeves-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player version 2025 26 Spain Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/022_Player-version-2025-26-Spain-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player version 2025 26 Spain Home Football jersey Long sleeves S 4XL World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/023_Player-version-2025-26-Spain-Home-Football-jersey-Long-sleeves-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Spain Away Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/031_2026-Spain-Away-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Spain x Dellafuente Away Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/032_2026-Spain-x-Dellafuente-Away-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Spain Away Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/033_2026-Spain-Away-Football-Jersey-S-4XL-Long-sleeves-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2025 26 Spain Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/034_Player-2025-26-Spain-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 Spain Away Football jersey Long sleeves S 3XL World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/035_Player-2026-Spain-Away-Football-jersey-Long-sleeves-S-3XL-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "2025 26 Spain Goalkeeper Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/049_2025-26-Spain-Goalkeeper-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Spain Away Football jersey S 4XL",
    "category": "national",
    "group": "Espagne",
    "image": "assets/equipes-nationales/Europe/espagne/055_2025-26-Spain-Away-Football-jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Finland Home Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Finlande",
    "image": "assets/equipes-nationales/Europe/finlande/001_2025-26-Finland-Home-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 France Home Football jersey S 4XL",
    "category": "national",
    "group": "France",
    "image": "assets/equipes-nationales/Europe/france/102_2025-26-France-Home-Football-jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 France Away Football jersey S 4XL",
    "category": "national",
    "group": "France",
    "image": "assets/equipes-nationales/Europe/france/103_2025-26-France-Away-Football-jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 France home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "France",
    "image": "assets/equipes-nationales/Europe/france/106_2026-France-home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player version 2026 France Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "France",
    "image": "assets/equipes-nationales/Europe/france/107_Player-version-2026-France-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 France Away Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "France",
    "image": "assets/equipes-nationales/Europe/france/113_2026-France-Away-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 France Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "France",
    "image": "assets/equipes-nationales/Europe/france/119_Player-2026-France-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 France Away Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "France",
    "image": "assets/equipes-nationales/Europe/france/122_2026-France-Away-Football-Jersey-S-4XL-Long-sleeves-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 France Away Football jersey Long sleeves S 3XL World Cup",
    "category": "national",
    "group": "France",
    "image": "assets/equipes-nationales/Europe/france/124_Player-2026-France-Away-Football-jersey-Long-sleeves-S-3XL-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "2026 France Goalkeeper Football Jersey S 4XL",
    "category": "national",
    "group": "France",
    "image": "assets/equipes-nationales/Europe/france/139_2026-France-Goalkeeper-Football-Jersey-S-4XL.jpeg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 France Home Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "France",
    "image": "assets/equipes-nationales/Europe/france/145_2026-France-Home-Football-Jersey-S-4XL-Long-sleeves-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 France Home Football jersey Long sleeves S 3XL World Cup",
    "category": "national",
    "group": "France",
    "image": "assets/equipes-nationales/Europe/france/152_Player-2026-France-Home-Football-jersey-Long-sleeves-S-3XL-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "2026 Greece Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Grèce",
    "image": "assets/equipes-nationales/Europe/grece/001_2026-Greece-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Greece Home Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Grèce",
    "image": "assets/equipes-nationales/Europe/grece/003_2025-26-Greece-Home-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Northern Ireland home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Irlande",
    "image": "assets/equipes-nationales/Europe/irlande/003_2025-26-Northern-Ireland-home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Northern Ireland Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Irlande",
    "image": "assets/equipes-nationales/Europe/irlande/007_2025-26-Northern-Ireland-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Ireland Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Irlande",
    "image": "assets/equipes-nationales/Europe/irlande/010_2026-Ireland-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Ireland Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Irlande",
    "image": "assets/equipes-nationales/Europe/irlande/013_2026-Ireland-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player version 2025 26 Italy Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Italie",
    "image": "assets/equipes-nationales/Europe/italie/104_Player-version-2025-26-Italy-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Italy Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Italie",
    "image": "assets/equipes-nationales/Europe/italie/105_2026-Italy-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player version 2025 26 Italy Home Football jersey S 3XL World Cup",
    "category": "national",
    "group": "Italie",
    "image": "assets/equipes-nationales/Europe/italie/106_Player-version-2025-26-Italy-Home-Football-jersey-S-3XL-World-Cup.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "2025 26 Italy Away Football jersey S 4XL",
    "category": "national",
    "group": "Italie",
    "image": "assets/equipes-nationales/Europe/italie/107_2025-26-Italy-Away-Football-jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Italy Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Italie",
    "image": "assets/equipes-nationales/Europe/italie/108_2025-26-Italy-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Italy Tiro Pre Match Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Italie",
    "image": "assets/equipes-nationales/Europe/italie/111_2025-26-Italy-Tiro-Pre-Match-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Italy Tiro Pre Match Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Italie",
    "image": "assets/equipes-nationales/Europe/italie/112_2025-26-Italy-Tiro-Pre-Match-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Italy Away Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Italie",
    "image": "assets/equipes-nationales/Europe/italie/127_2026-Italy-Away-Football-Jersey-S-4XL-Long-sleeves-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Italy Home Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Italie",
    "image": "assets/equipes-nationales/Europe/italie/128_2026-Italy-Home-Football-Jersey-S-4XL-Long-sleeves-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Norway Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Norvège",
    "image": "assets/equipes-nationales/Europe/norvege/002_2026-Norway-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 Norway Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Norvège",
    "image": "assets/equipes-nationales/Europe/norvege/003_Player-2026-Norway-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Norway Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Norvège",
    "image": "assets/equipes-nationales/Europe/norvege/005_2026-Norway-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Netherlands Home Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Pays-Bas",
    "image": "assets/equipes-nationales/Europe/pays-bas/001_2026-Netherlands-Home-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 Netherlands Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Pays-Bas",
    "image": "assets/equipes-nationales/Europe/pays-bas/002_Player-2026-Netherlands-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Netherlands Away Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Pays-Bas",
    "image": "assets/equipes-nationales/Europe/pays-bas/007_2026-Netherlands-Away-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2026 Netherlands Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Pays-Bas",
    "image": "assets/equipes-nationales/Europe/pays-bas/008_Player-2026-Netherlands-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Netherlands Goalkeeper Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Pays-Bas",
    "image": "assets/equipes-nationales/Europe/pays-bas/012_2026-Netherlands-Goalkeeper-Football-Jersey-S-4XL-Long-sleeves-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Poland Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Pologne",
    "image": "assets/equipes-nationales/Europe/pologne/001_2026-Poland-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Poland Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Pologne",
    "image": "assets/equipes-nationales/Europe/pologne/002_2026-Poland-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Portugal Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Portugal",
    "image": "assets/equipes-nationales/Europe/portugal/001_2025-26-Portugal-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player Edition 2025 26 Portugal Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Portugal",
    "image": "assets/equipes-nationales/Europe/portugal/003_Player-Edition-2025-26-Portugal-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Portugal Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Portugal",
    "image": "assets/equipes-nationales/Europe/portugal/005_2025-26-Portugal-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player Edition 2025 26 Portugal Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Portugal",
    "image": "assets/equipes-nationales/Europe/portugal/006_Player-Edition-2025-26-Portugal-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player version Retro 2014 Portugal Away Football jersey S 3XL Retro",
    "category": "national",
    "group": "Portugal",
    "image": "assets/equipes-nationales/Europe/portugal/054_Player-version-Retro-2014-Portugal-Away-Football-jersey-S-3XL-Retro.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "Player version Retro 2014 Portugal Away Long sleeves Football jersey S 3XL Retro",
    "category": "national",
    "group": "Portugal",
    "image": "assets/equipes-nationales/Europe/portugal/055_Player-version-Retro-2014-Portugal-Away-Long-sleeves-Football-jersey-S-3XL-Retro.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "Player version Retro 2006 Portugal Home Football jersey S 3XL Retro",
    "category": "national",
    "group": "Portugal",
    "image": "assets/equipes-nationales/Europe/portugal/077_Player-version-Retro-2006-Portugal-Home-Football-jersey-S-3XL-Retro.jpg",
    "sizes": [
      "S–3XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "3XL"
  },
  {
    "name": "2025 26 Portugal Home Football jersey long sleeves S 4XL World Cup",
    "category": "national",
    "group": "Portugal",
    "image": "assets/equipes-nationales/Europe/portugal/150_2025-26-Portugal-Home-Football-jersey-long-sleeves-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Portugal Home Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Portugal",
    "image": "assets/equipes-nationales/Europe/portugal/156_2026-Portugal-Home-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Portugal Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Portugal",
    "image": "assets/equipes-nationales/Europe/portugal/157_2026-Portugal-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player version 2025 26 Portugal Away Football jersey S 4XL World Cup",
    "category": "national",
    "group": "Portugal",
    "image": "assets/equipes-nationales/Europe/portugal/163_Player-version-2025-26-Portugal-Away-Football-jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Portugal Away Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Portugal",
    "image": "assets/equipes-nationales/Europe/portugal/166_2025-26-Portugal-Away-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player 2025 26 Portugal Home Football jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Portugal",
    "image": "assets/equipes-nationales/Europe/portugal/167_Player-2025-26-Portugal-Home-Football-jersey-S-4XL-Long-sleeves-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2025 26 Portugal Home Long sleeves Football Jersey S 4XL World Cup",
    "category": "national",
    "group": "Portugal",
    "image": "assets/equipes-nationales/Europe/portugal/170_2025-26-Portugal-Home-Long-sleeves-Football-Jersey-S-4XL-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Portugal Away Football Jersey S 4XL Long sleeves World Cup",
    "category": "national",
    "group": "Portugal",
    "image": "assets/equipes-nationales/Europe/portugal/175_2026-Portugal-Away-Football-Jersey-S-4XL-Long-sleeves-World-Cup.jpg",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "2026 Portugal Travis Scott Cactus Total 90 Football Jersey S 4XL",
    "category": "national",
    "group": "Portugal",
    "image": "assets/equipes-nationales/Europe/portugal/196_2026-Portugal-Travis-Scott-Cactus-Total-90-Football-Jersey-S-4XL.webp",
    "sizes": [
      "S–4XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied from filename",
    "sizeRange": "4XL"
  },
  {
    "name": "Player Version 2025 26 Germany Home Football jersey Long Sleeve World Cup",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/107_Player-Version-2025-26-Germany-Home-Football-jersey-Long-Sleeve-World-Cup.jpg",
    "sizes": [
      "S–2XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "sourceUrl": "https://www.vivi-jersey.com/products/player-version-2025-26-germany-home-football-jersey-long-sleeve-world-cup",
    "assetSource": "Vivi Jersey product page; sizes verified on supplier page",
    "sizeRange": "2XL"
  },
  {
    "name": "Kids 2025 26 Germany Home Football jersey World Cup",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/113_KIDS-2025-26-Germany-Home-KIDS-Football-jersey-World-Cup.png",
    "sizes": [
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "sourceUrl": "https://www.vivi-jersey.com/products/kids-2025-26-germany-home-kids-football-jersey-world-cup",
    "assetSource": "Vivi Jersey product page; sizes verified on supplier page",
    "sizeRange": "28"
  },
  {
    "name": "Kids 2025 26 Germany Away Football jersey World Cup",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/115_KIDS-2025-26-Germany-Away-KIDS-Football-jersey-World-Cup.jpg",
    "sizes": [
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "sourceUrl": "https://www.vivi-jersey.com/products/kids-2025-26-germany-away-kids-football-jersey-world-cup-1",
    "assetSource": "Vivi Jersey product page; sizes verified on supplier page",
    "sizeRange": "28"
  },
  {
    "name": "2024-25 Germany Goalkeeper Football jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/006_2024-25-Germany-goalkeeper-Football-jersey.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "sourceUrl": "https://www.vivi-jersey.com/products/2024-25-germany-special-edition-football-jersey",
    "assetSource": "Vivi Jersey product page; exact goalkeeper model and sizes verified on supplier page",
    "sizeRange": "2XL"
  },
  {
    "name": "2026 Germany Training Football Jersey",
    "image": "assets/equipes-nationales/Europe/allemagne/153_2026-Germany-Training-Football-Jersey-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "sizeRange": "4XL",
    "category": "national",
    "group": "Allemagne",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied exactly from filename"
  },
  {
    "name": "Player Edition 2026 Germany Short-Sleeved Training Shirt",
    "image": "assets/equipes-nationales/Europe/allemagne/200_Player-Edition-2026-Germany-short-sleeved-training-shirt-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "sizeRange": "4XL",
    "category": "national",
    "group": "Allemagne",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied exactly from filename"
  },
  {
    "name": "Player Edition 2026 Germany Short-Sleeved Training Shirt – modèle 2",
    "image": "assets/equipes-nationales/Europe/allemagne/204_Player-Edition-2026-Germany-short-sleeved-training-shirt-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "sizeRange": "4XL",
    "category": "national",
    "group": "Allemagne",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied exactly from filename"
  },
  {
    "name": "Player Edition 2026 Germany Sleeveless Training Vest",
    "image": "assets/equipes-nationales/Europe/allemagne/205_Player-Edition-2026-Germany-Sleeveless-Vest-Training-Wear-suit-S-4XL.jpg",
    "sizes": [
      "S–4XL"
    ],
    "sizeRange": "4XL",
    "category": "national",
    "group": "Allemagne",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied exactly from filename"
  },
  {
    "name": "2026 Germany Training Polo Shirt",
    "image": "assets/equipes-nationales/Europe/allemagne/135_2026-Germany-Training---POLO-Shirt-Football-Jersey-S-4XL.png",
    "sizes": [
      "S–4XL"
    ],
    "sizeRange": "4XL",
    "category": "national",
    "group": "Allemagne",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied exactly from filename"
  },
  {
    "name": "Player 2026 Germany Casual T-Shirt",
    "image": "assets/equipes-nationales/Europe/allemagne/219_Player-2026-Germany-Casual-T-shirt-Football-jersey-S-3XL.jpg",
    "sizes": [
      "S–3XL"
    ],
    "sizeRange": "3XL",
    "category": "national",
    "group": "Allemagne",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; size range copied exactly from filename"
  },
  {
    "name": "Allemagne — 2024 25 Player Germany Home Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/001_2024-25-Player-Germany-Home-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany Homee KROOS WIRTZ MUSIALA MULLER FULLKRUG HAVERTZ FUHRICH Footba",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/002_2024-25-Germany-Homee-KROOS-WIRTZ-MUSIALA-MULLER-FULLKRUG-HAVERTZ-FUHRICH-Footba.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany Home Kids Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/003_2024-25-Germany-Home-KIDS-Football-jersey.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany Away KROOS WIRTZ MUSIALA MULLER FULLKRUG HAVERTZ FUHRICH Footbal",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/004_2024-25-Germany-Away-KROOS-WIRTZ-MUSIALA-MULLER-FULLKRUG-HAVERTZ-FUHRICH-Footbal.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Player Germany Away KROOS WIRTZ MUSIALA MULLER FULLKRUG HAVERTZ FUHRICH",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/005_2024-25-Player-Germany-Away-KROOS-WIRTZ-MUSIALA-MULLER-FULLKRUG-HAVERTZ-FUHRICH-.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany Especial Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/007_2024-25-Germany-Especial-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany Especial Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/008_2024-25-Germany-Especial-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Player Germany Especial Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/009_2024-25-PLAYER-Germany-Especial-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player 2024 25 Germany 125th Anniversary Edition Player",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/010_Player-2024-25-Germany-125th-Anniversary-Edition-Player.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player 2024 25 Germany Away Soccer Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/011_Player-2024-25-Germany-Away-Soccer-Jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany Especial Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/012_2024-25-Germany-Especial-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany White cotton T shirt Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/013_2024-25-Germany-White-cotton-T-shirt-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany black cotton T shirt Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/014_2024-25-Germany-black-cotton-T-shirt-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany Especial Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/015_2024-25-Germany-Especial-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany Pre Jogo Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/016_2024-25-Germany-Pre-Jogo-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 22 23 Germany Away national team Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/017_22-23-Germany-away-national-team-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 22 23 Player Germany Home Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/018_22-23-Player-Germany-Home-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 22 23 Germany sweater loose version Retro Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/019_22-23-Germany-sweater-loose-version-retro-Football-jersey-retro.jpeg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 2020 Germany Home Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/020_Retro-2020-Germany-Home-Football-jersey-Retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 2020 Germany Away Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/021_Retro-2020-Germany-Away-Football-jersey-Retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 2018 Germany Home Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/022_retro-2018-Germany-Home-Football-jersey-retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 2016 Germany Away Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/023_Retro-2016-Germany-Away-Football-jersey-Retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro Germany 2014 Home zil KLOSE MULLER GOTZE REUS Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/024_Retro-Germany-2014-Home-zil-KLOSE-MULLER-GOTZE-REUS-Football-jersey-retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Reteo 2014 Germany Home Football Jersey Long Sleeve",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/025_Reteo-2014-Germany-Home-Football-jersey-Long-Sleeve.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro Germany 2014 Away Özil KLOSE MULLER GOTZE REUS Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/026_Retro-Germany-2014-away-Özil-KLOSE-MULLER-GOTZE-REUS-Football-jersey-retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 2014 Germany Home Kids Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/027_Retro-2014-Germany-Home-Kids-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 2010 Germany Away MULLER LAHM SCHWEINSTEIGER Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/028_Retro-2010-Germany-Away-MULLER-LAHM-SCHWEINSTEIGER-Football-jersey-retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Reteo 2008 Germany Home Football Jersey Reteo",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/029_Reteo-2008-Germany-Home-Football-jersey-Reteo.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 2008 Germany Away Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/030_retro-2008-Germany-Away-Football-jersey-retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Reteo 2006 Germany Home Reteo LAHM 16 BALLACK 13 PODOLSKI 10 SCHWEINSTEIGER 7 Fo",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/031_Reteo-2006-Germany-Home-Reteo-LAHM-16-BALLACK-13-PODOLSKI-10-SCHWEINSTEIGER-7-Fo.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Reteo 2006 Germany Home Football Jersey Long Sleeve",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/032_Reteo-2006-Germany-Home-Football-jersey-Long-Sleeve.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro Kids 2006 Germany Home Kids Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/033_Retro-Kids-2006-Germany-Home-Kids-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Germany 2002 03 Home Retro Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/034_Germany-2002-03-Home-Retro-Jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1998 99 Germany Home Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/035_retro-1998-99-Germany-Home-Football-jersey-retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1998 Germany Away MOLLER 7 Klinsmann 18 MATTHAUS 8 Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/036_Retro-1998-Germany-away-MOLLER-7-Klinsmann-18-MATTHAUS-8-Football-jersey-retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro Germany 1998 Home MOLLER 7 Klinsmann 18 MATTHAUS 8 Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/037_Retro-Germany-1998-home-MOLLER-7-Klinsmann-18-MATTHAUS-8-Football-jersey-retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1996 Germany Away MOLLER 7 Klinsmann 18 KUNTZ 11 Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/038_Retro-1996-Germany-away-MOLLER-7-Klinsmann-18-KUNTZ-11-Football-jersey-retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1996 Germany Home Kids Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/039_Retro-1996-Germany-Home-Kids-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Reteo shirt Germany 1996 Home MOLLER 7 Klinsmann 18 KUNTZ 11",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/040_Reteo-shirt-germany-1996-home-MOLLER-7-Klinsmann-18-KUNTZ-11.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Reteo 1996 Germany Home Football Jersey Retro Long sleeve",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/041_Reteo-1996-germany-home-Football-jersey-Retro-Long-sleeve.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1996 Germany Home Kids Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/042_Retro-1996-Germany-Home-Kids-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1994 Germany Away Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/043_Retro-1994-Germany-away-Football-jersey-retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1994 Germany Away Kids Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/044_Retro-1994-Germany-Away-Kids-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Reteo shirt Germany 1994 Home matthaus klinsmann",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/045_Reteo-shirt-germany-1994-home-matthaus-klinsmann.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1994 Germany Home Kids Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/046_Retro-1994-Germany-Home-Kids-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1992 Germany Home Vller Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/047_Retro-1992-Germany-Home-Vller-Football-jersey-retro.jpeg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1992 Germany Home Kids Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/048_Retro-1992-Germany-Home-Kids-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1992 Germany Away Vller Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/049_Retro-1992-Germany-away-Vller-Football-jersey-retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1992 Germany Away Kids Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/050_Retro-1992-Germany-Away-Kids-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1992 Germany Home Völler Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/051_Retro-1992-Germany-Home-Völler-Football-jersey-retro.jpeg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1990 Germany Away Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/052_Retro-1990-Germany-Away-Football-jersey-Retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1990 Germany Away Football Jersey Retro Long sleeve",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/053_Retro-1990-Germany-Away-Football-jersey-Retro-Long-sleeve.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1990 World Cup Germany Tank Top Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/054_Retro-1990-World-Cup-Germany-Tank-Top-Football-jersey-retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1990 World Cup Germany Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/055_Retro-1990-World-Cup-Germany-Football-jersey-retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1990 Germany Home 9VOLLER 10MATTHAUS Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/056_Retro-1990-Germany-Home-9VOLLER-10MATTHAUS-Football-jersey-retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Reteo 1990 Germany Home Football Jersey Retro Long sleeve",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/057_Reteo-1990-germany-home-Football-jersey-Retro-Long-sleeve.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1990 Germany Home Kids Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/058_Retro-1990-Germany-Home-Kids-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1988 Germany Away Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/059_Retro-1988-germany-away-Football-jersey-retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Reteo 1988 90 Germany Away Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/060_Reteo-1988-90-Germany-Away-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Germany 1986 Home Retro Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/061_Germany-1986-Home-Retro-Jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Reteo 1984 Germany Home Football Jersey Reteo",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/062_Reteo-1984-Germany-Home-Football-jersey-Reteo.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Reteo 1984 Germany Home Football Jersey Reteo",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/063_Reteo-1984-Germany-Home-Football-jersey-Reteo.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 1980 Germany Home Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/064_Retro-1980-Germany-Home-Football-jersey-Retro.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2025 26 season Germany jacket suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/065_2025-26-season-Germany-jacket-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany jacket suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/066_2024-25-Germany-jacket-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany jacket suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/067_2024-25-Germany-jacket-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany jacket suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/068_2024-25-Germany-jacket-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany jacket Suit set",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/069_2024-25-Germany-jacket-Suit-set.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany jacket Suit set",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/070_2024-25-Germany-jacket-Suit-set.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany jacket Suit set",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/071_2024-25-Germany-jacket-Suit-set.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany jacket Suit set",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/072_2024-25-Germany-jacket-Suit-set.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany half pull training suit Adults and Kids",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/073_2024-25-Germany-half-pull-training-suit-Adults-and-KIDS.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany half pull training suit Adults and Kids",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/074_2024-25-Germany-half-pull-training-suit-Adults-and-KIDS.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany half pull training suit Adults and Kids",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/075_2024-25-Germany-half-pull-training-suit-Adults-and-KIDS.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany half pull training suit Adults and Kids",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/076_2024-25-Germany-half-pull-training-suit-Adults-and-KIDS.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany half pull training suit Adults and Kids",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/077_2024-25-Germany-half-pull-training-suit-Adults-and-KIDS.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany short sleeved training Jersey shirt Adults and Kids",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/078_2024-25-Germany-short-sleeved-training-jersey-shirt-Adults-and-KIDS.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany Sleeveless Vest Training Wear suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/079_2024-25-Germany-Sleeveless-Vest-Training-Wear-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany short sleeved training Jersey shirt Adults and Kids",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/080_2024-25-Germany-short-sleeved-training-jersey-shirt-Adults-and-KIDS.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany Sleeveless Vest Training Wear suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/081_2024-25-Germany-Sleeveless-Vest-Training-Wear-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany short sleeved training Jersey shirt Adults and Kids",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/082_2026-Germany-short-sleeved-training-jersey-shirt-Adults-and-KIDS.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany Sleeveless Vest Training Wear suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/083_2024-25-Germany-Sleeveless-Vest-Training-Wear-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Germany Windbreaker 2 LADOS Double faced windbreaker",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/084_Germany-Windbreaker-2-LADOS-Double-faced-windbreaker.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Germany Windbreaker 2 LADOS Double faced windbreaker",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/085_Germany-Windbreaker-2-LADOS-Double-faced-windbreaker.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Germany Windbreaker 2 LADOS",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/086_2024-25-Germany-Windbreaker-2-LADOS.jpeg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Germany Windbreaker 2 LADOS Double faced windbreaker",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/087_Germany-Windbreaker-2-LADOS-Double-faced-windbreaker.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 1990 Germany Windbreaker 2 LADOS Double faced windbreaker",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/088_1990-Germany-Windbreaker-2-LADOS-Double-faced-windbreaker.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Germany Windbreaker 2 LADOS Double faced windbreaker",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/089_Germany-Windbreaker-2-LADOS-Double-faced-windbreaker.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Windbreaker Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/090_2024-25-Windbreaker-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2024 25 Windbreaker Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/091_2024-25-Windbreaker-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Germany Windbreaker",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/092_Germany-Windbreaker.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Germany Windbreaker",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/093_Germany-Windbreaker.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Germany Windbreaker",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/094_Germany-Windbreaker.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Germany Windbreaker",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/095_Germany-Windbreaker.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player 2025 26 Germany Special Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/098_Player-2025-26-Germany-Special-Edition-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2025 26 Germany Away Kids Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/099_KIDS-2025-26-Germany-Away-KIDS-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2025 26 Germany 125th Anniversary White Kids Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/100_KIDS-2025-26-Germany-125th-Anniversary-White-KIDS-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2025 26 Germany 125th Anniversary Edition Football Jersey Long Sleeve",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/101_2025-26-Germany-125th-Anniversary-Edition-Football-jersey-Long-Sleeve.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player 2025 26 Germany Anniversary Edition Black Edition Jersey Long sleeve",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/102_Player-2025-26-Germany-Anniversary-Edition-Black-Edition-jersey-Long-sleeve.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player 2025 26 Germany Anniversary Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/103_Player-2025-26-Germany-Anniversary-Edition-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2025 26 Germany Special Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/104_2025-26-Germany-Special-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player Version 2025 26 Germany 125th Anniversary Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/105_Player-Version-2025-26-Germany-125th-Anniversary-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2025 26 Germany 125th Anniversary Jacquard Special Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/108_2025-26-Germany-125th-Anniversary-Jacquard-Special-Edition-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2025 26 Germany 125th Anniversary Kids Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/111_KIDS-2025-26-Germany-125th-Anniversary-KIDS-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2025 26 Germany 125th Anniversary Kids Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/112_KIDS-2025-26-Germany-125th-Anniversary-KIDS-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2025 26 Germany 125th Anniversary Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/114_2025-26-Germany-125th-Anniversary-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2025 26 Shorts Germany 125th Anniversary Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/117_2025-26-Shorts-Germany-125th-Anniversary-Football-jersey.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Women 2025 26 Germany Home Womens Football Jersey World Cup",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/118_Women-2025-26-Germany-Home-Womens-Football-jersey-World-Cup.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player version 2025 26 Germany Black White Special Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/121_Player-version-2025-26-Germany-Black-White-Special-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player 2025 26 Germany Training Football Jersey World Cup",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/122_Player-2025-26-Germany-Training-Football-Jersey-World-Cup.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player 2025 26 Germany Special Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/123_Player-2025-26-Germany-Special-Edition-Football-Jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2025 26 Windbreaker Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/124_2025-26-Windbreaker-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2025 26 Windbreaker Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/125_2025-26-Windbreaker-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2025 26 Windbreaker Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/126_2025-26-Windbreaker-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2025 26 Trench Coat Reversible windbreaker Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/127_2025-26-Trench-Coat-Reversible-windbreaker-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2025 26 Trench Coat Reversible windbreaker Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/128_2025-26-Trench-Coat-Reversible-windbreaker-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2025 26 Trench Coat Reversible windbreaker Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/129_2025-26-Trench-Coat-Reversible-windbreaker-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2025 26 Trench Coat Reversible windbreaker Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/130_2025-26-Trench-Coat-Reversible-windbreaker-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2025 26 Trench Coat Reversible windbreaker Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/131_2025-26-Trench-Coat-Reversible-windbreaker-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player Shorts 2026 Shorts Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/132_Player-Shorts-2026-Shorts-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player Shorts 2026 Shorts Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/133_Player-Shorts-2026-Shorts-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player 2026 Germany Special Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/134_Player-2026-Germany-Special-Edition-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Baby Germany Home Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/136_2026-Baby-Germany-Home-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player 2026 Germany Special Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/139_Player-2026-Germany-Special-Edition-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany Originals Bringback Remixed Version Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/140_2026-Germany-Originals-Bringback-Remixed-Version-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2026 Germany Special Version Kids Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/141_KIDS-2026-Germany-Special-Version-KIDS-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany Special Version Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/142_2026-Germany-Special-Version-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 half pull training suit Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/143_2026-half-pull-training-suit-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany Special Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/144_2026-Germany-Special-Edition-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany Special Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/145_2026-Germany-Special-Edition-Football-jersey.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany Special Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/146_2026-Germany-Special-Edition-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany Special Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/147_2026-Germany-Special-Edition-Football-jersey.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany Special Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/148_2026-Germany-Special-Edition-Football-jersey.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany Special Edition Polo Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/150_2026-Germany-Special-Edition-Polo-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player 2026 Germany Special Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/151_Player-2026-Germany-Special-Edition-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player 2026 Germany Special Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/152_Player-2026-Germany-Special-Edition-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Shorts 2026 Shorts Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/154_Shorts-2026-Shorts-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Shorts 2026 Shorts Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/155_Shorts-2026-Shorts-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany Special Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/156_2026-Germany-Special-Edition-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2026 Germany Goalkeeper Kids Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/157_KIDS-2026-Germany-Goalkeeper-KIDS-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Shorts 2026 Shorts Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/158_Shorts-2026-Shorts-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Women 2026 Germany Away Womens Football Jersey World Cup",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/159_Women-2026-Germany-Away-Womens-Football-jersey-World-Cup.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany Special Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/161_2026-Germany-Special-Edition-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player 2026 Germany Special Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/162_Player-2026-Germany-Special-Edition-Football-jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany Training Football Jersey S 4XL",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/163_2026-Germany-Training-Football-Jersey-S-4XL.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Football socks Germany Home 2026",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/164_Football-socks-Germany-Home-2026.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Football socks Germany Away 2026",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/165_Football-socks-Germany-Away-2026.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany jacket suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/166_2026-Germany-jacket-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany jacket suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/167_2026-Germany-jacket-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany jacket suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/168_2026-Germany-jacket-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany jacket suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/169_2026-Germany-jacket-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany jacket suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/170_2026-Germany-jacket-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany jacket suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/171_2026-Germany-jacket-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany jacket suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/172_2026-Germany-jacket-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany jacket suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/173_2026-Germany-jacket-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany jacket suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/174_2026-Germany-jacket-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany Half Pull Training Suit Soccer Shirt Set",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/175_2026-Germany-Half-Pull-Training-Suit-Soccer-Shirt-Set.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany Half Pull Training Suit Soccer Shirt Set",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/176_2026-Germany-Half-Pull-Training-Suit-Soccer-Shirt-Set.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2026 Germany jacket suit Kids 1018",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/177_KIDS-2026-Germany-jacket-suit-KIDS-1018.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2026 Germany jacket suit Kids 1018",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/178_KIDS-2026-Germany-jacket-suit-KIDS-1018.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2026 Germany jacket suit Kids 1018",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/179_KIDS-2026-Germany-jacket-suit-KIDS-1018.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2026 Germany jacket suit Kids 1018",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/180_KIDS-2026-Germany-jacket-suit-KIDS-1018.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2026 Germany jacket suit Kids 1018",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/181_KIDS-2026-Germany-jacket-suit-KIDS-1018.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany half pull training suit Adults and Kids",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/182_2026-Germany-half-pull-training-suit-Adults-and-KIDS.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany half pull training suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/183_2026-Germany-half-pull-training-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany half pull training suit Adults and Kids",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/184_2026-Germany-half-pull-training-suit-Adults-and-KIDS.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany half pull training suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/185_2026-Germany-half-pull-training-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany half pull training suit",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/186_2026-Germany-half-pull-training-suit.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2026 Germany half pull training suit Kids 1018",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/187_Kids-2026-Germany-half-pull-training-suit-Kids-1018.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2026 Germany half pull training suit 1018",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/188_Kids-2026-Germany-half-pull-training-suit-1018.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2026 Germany half pull training suit Kids 1018",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/189_Kids-2026-Germany-half-pull-training-suit-Kids-1018.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany short sleeved training shirt",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/190_2026-Germany-short-sleeved-training-shirt.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2026 Germany short sleeved training shirt Kids 16 28",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/191_Kids-2026-Germany-short-sleeved-training-shirt-KIDS-16-28.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany short sleeved training shirt",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/192_2026-Germany-short-sleeved-training-shirt.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2026 Germany short sleeved training shirt Kids 16 28",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/193_Kids-2026-Germany-short-sleeved-training-shirt-KIDS-16-28.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2026 Germany short sleeved training shirt Kids 16 28",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/194_Kids-2026-Germany-short-sleeved-training-shirt-KIDS-16-28.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany short sleeved training shirt",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/195_2026-Germany-short-sleeved-training-shirt.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany short sleeved training shirt",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/196_2026-Germany-short-sleeved-training-shirt.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2026 Germany short sleeved training shirt Kids 16 28",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/197_Kids-2026-Germany-short-sleeved-training-shirt-KIDS-16-28.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany short sleeved training shirt",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/198_2026-Germany-short-sleeved-training-shirt.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2026 Germany short sleeved training shirt Kids 16 28",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/199_Kids-2026-Germany-short-sleeved-training-shirt-KIDS-16-28.png",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player Edition 2026 Germany short sleeved training shirt S 4XL",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/201_Player-Edition-2026-Germany-short-sleeved-training-shirt-S-4XL.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Football socks Germany Away 2026",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/202_Football-socks-Germany-Away-2026.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Germany Training POLO Shirt Football Jersey S 4XL",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/203_2026-Germany-Training---POLO-Shirt-Football-Jersey-S-4XL.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player Edition 2026 Germany Sleeveless Vest Training Wear suit S 4XL",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/206_Player-Edition-2026-Germany-Sleeveless-Vest-Training-Wear-suit-S-4XL.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Windbreaker Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/207_2026-Windbreaker-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Windbreaker Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/208_2026-Windbreaker-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Windbreaker Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/209_2026-Windbreaker-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Windbreaker Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/210_2026-Windbreaker-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Windbreaker Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/211_2026-Windbreaker-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — 2026 Windbreaker Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/212_2026-Windbreaker-Germany.jpeg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player Version Shorts 2026 Shorts Germany Casual",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/213_Player-Version-Shorts-2026-Shorts-Germany-Casual.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player 2026 Germany Special Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/214_Player-2026-Germany-Special-Edition-Football-Jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Retro 2012 Germany Goalkeeper Football Jersey Retro",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/215_Retro-2012-Germany-Goalkeeper-Football-jersey-retro.webp",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player 2026 Germany Special Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/216_Player-2026-Germany-Special-Edition-Football-Jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player 2026 Germany Special Edition Football Jersey",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/217_Player-2026-Germany-Special-Edition-Football-Jersey.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Player Version Shorts 2026 Shorts Germany",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/218_Player-Version-Shorts-2026-Shorts-Germany.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  },
  {
    "name": "Allemagne — Kids 2026 Germany Third Football Jersey Kids",
    "category": "national",
    "group": "Allemagne",
    "image": "assets/equipes-nationales/Europe/allemagne/222_KIDS-2026-Germany-Third-Football-jersey-KIDS.jpg",
    "sizes": [
      "À confirmer"
    ],
    "description": "Visuel ajouté au catalogue. Tailles et disponibilité à confirmer avant commande.",
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "assetSource": "Vivi Jersey archive filename; tailles à confirmer",
    "sizePending": true
  }
];


const SHOE_BRANDS = [
  {name:"Nike",emoji:"👟",desc:"Sneakers et chaussures de sport"},
  {name:"Air Jordan",emoji:"🏀",desc:"Jordan et modèles basket"},
  {name:"Adidas",emoji:"👟",desc:"Originals, running et lifestyle"},
  {name:"New Balance",emoji:"👟",desc:"Sneakers et running"},
  {name:"Puma",emoji:"👟",desc:"Sport et lifestyle"},
  {name:"On",emoji:"🏃",desc:"Running et lifestyle"},
  {name:"Salomon",emoji:"🥾",desc:"Trail et outdoor"},
  {name:"Asics",emoji:"🏃",desc:"Running et sport"},
  {name:"Hoka",emoji:"🏃",desc:"Running et trail"},
  {name:"Brooks",emoji:"🏃",desc:"Running"},
  {name:"Mizuno",emoji:"🏃",desc:"Sport et running"},
  {name:"Altra",emoji:"🏃",desc:"Running et trail"},
  {name:"Keen",emoji:"🥾",desc:"Outdoor"},
  {name:"Timberland",emoji:"🥾",desc:"Bottes et chaussures"},
  {name:"UGG",emoji:"🥾",desc:"Bottes et chaussures confort"},
  {name:"Birkenstock",emoji:"🩴",desc:"Sandales et sabots"},
  {name:"Crocs",emoji:"🩴",desc:"Sabots et chaussures décontractées"},
  {name:"Converse",emoji:"👟",desc:"Sneakers classiques"},
  {name:"Vans",emoji:"👟",desc:"Skate et lifestyle"},
  {name:"Veja",emoji:"👟",desc:"Sneakers"},
  {name:"Golden Goose",emoji:"👟",desc:"Sneakers premium"},
  {name:"BAPE",emoji:"👟",desc:"Streetwear et sneakers"},
  {name:"Yeezy",emoji:"👟",desc:"Sneakers et slides"},
  {name:"Off-White",emoji:"👟",desc:"Sneakers designer"},
  {name:"Balenciaga",emoji:"👟",desc:"Sneakers et chaussures"},
  {name:"Alexander McQueen",emoji:"👞",desc:"Sneakers et chaussures"},
  {name:"Maison Margiela",emoji:"👟",desc:"Sneakers et chaussures"},
  {name:"Rick Owens",emoji:"👟",desc:"Sneakers et chaussures"},
  {name:"Lanvin",emoji:"👟",desc:"Sneakers"},
  {name:"Amiri",emoji:"👟",desc:"Sneakers et chaussures"},
  {name:"Gucci",emoji:"👞",desc:"Chaussures et sneakers"},
  {name:"Louis Vuitton",emoji:"👞",desc:"Chaussures et sneakers"},
  {name:"Prada",emoji:"👞",desc:"Chaussures et sneakers"},
  {name:"Bottega Veneta",emoji:"👞",desc:"Chaussures et sneakers"},
  {name:"Zegna",emoji:"👞",desc:"Chaussures et mocassins"},
  {name:"The Row",emoji:"👞",desc:"Chaussures et slides"},
  {name:"Dior",emoji:"👟",desc:"Sneakers et chaussures"},
  {name:"Fendi",emoji:"👞",desc:"Chaussures et sneakers"},
  {name:"Versace",emoji:"👞",desc:"Chaussures et sneakers"},
  {name:"Ferragamo",emoji:"👞",desc:"Chaussures et mocassins"},
  {name:"Dr. Martens",emoji:"🥾",desc:"Bottes et chaussures"},
  {name:"Vibram",emoji:"🥾",desc:"Chaussures à semelles techniques"},
  {name:"Alo",emoji:"👟",desc:"Sport et lifestyle"},
  {name:"Under Armour",emoji:"👟",desc:"Chaussures de sport et entraînement"},
  {name:"Arc’teryx",emoji:"🥾",desc:"Chaussures outdoor et trail"},
  {name:"Kobe",emoji:"🏀",desc:"Chaussures de basketball"},
  {name:"Mihara Yasuhiro",emoji:"👟",desc:"Sneakers"},
  {name:"Loewe",emoji:"👟",desc:"Sneakers et chaussures"},
  {name:"NOCTA",emoji:"👟",desc:"Sneakers"},
  {name:"Mercurial",emoji:"⚽",desc:"Chaussures de football"}
];

const LIFESTYLE = [
  {name:"Audio & Musique",emoji:"🎧",desc:"Écouteurs, casques et enceintes",folder:"audio-musique",items:["Écouteurs sans fil","Casques audio","Enceintes Bluetooth","Accessoires audio"]},
  {name:"LEGO & Construction",emoji:"🧱",desc:"LEGO, voitures et sets de collection",folder:"lego-construction",items:["LEGO","Voitures","Sets de collection","Autres briques de construction"]},
  {name:"Lunettes",emoji:"🕶️",desc:"Soleil, sport et vue",folder:"lunettes",items:["Lunettes de soleil","Lunettes de sport","Lunettes de vue"]},
  {name:"Casquettes & Bonnets",emoji:"🧢",desc:"Casquettes, snapbacks, bonnets et bobs",folder:"casquettes-bonnets",items:["Casquettes classiques","Snapback","Bonnets","Bob"]}
];


// Équipes réellement référencées dans les rubriques sportives de Vivi Jersey.
// Les fiches produits restent séparées : aucun article n'est publié sans photo et tailles vérifiées.
const SPORT_TEAM_GROUPS = {
  NBA: [
    "Boston Celtics","Brooklyn Nets","New York Knicks","Philadelphia 76ers","Toronto Raptors",
    "Chicago Bulls","Cleveland Cavaliers","Detroit Pistons","Indiana Pacers","Milwaukee Bucks",
    "Atlanta Hawks","Charlotte Hornets","Miami Heat","Orlando Magic","Washington Wizards",
    "Golden State Warriors","LA Clippers","Los Angeles Lakers","Phoenix Suns","Sacramento Kings",
    "Denver Nuggets","Minnesota Timberwolves","Oklahoma City Thunder","Portland Trail Blazers",
    "Utah Jazz","Dallas Mavericks","Houston Rockets","Memphis Grizzlies","New Orleans Pelicans","San Antonio Spurs"
  ],
  MLB: [
    "Baltimore Orioles","Boston Red Sox","New York Yankees","Tampa Bay Rays","Toronto Blue Jays",
    "Chicago White Sox","Cleveland Guardians","Detroit Tigers","Kansas City Royals","Minnesota Twins",
    "Houston Astros","Los Angeles Angels","Oakland Athletics","Seattle Mariners","Texas Rangers",
    "Atlanta Braves","Miami Marlins","New York Mets","Philadelphia Phillies","Washington Nationals",
    "Chicago Cubs","Cincinnati Reds","Milwaukee Brewers","Pittsburgh Pirates","St. Louis Cardinals",
    "Arizona Diamondbacks","Colorado Rockies","Los Angeles Dodgers","San Diego Padres","San Francisco Giants"
  ],
  NFL: [
    "Buffalo Bills","Miami Dolphins","New England Patriots","New York Jets","Baltimore Ravens",
    "Cincinnati Bengals","Cleveland Browns","Pittsburgh Steelers","Houston Texans","Indianapolis Colts",
    "Jacksonville Jaguars","Tennessee Titans","Denver Broncos","Kansas City Chiefs","Las Vegas Raiders",
    "Los Angeles Chargers","Dallas Cowboys","New York Giants","Philadelphia Eagles","Washington Commanders",
    "Chicago Bears","Detroit Lions","Green Bay Packers","Minnesota Vikings","Atlanta Falcons",
    "Carolina Panthers","New Orleans Saints","Tampa Bay Buccaneers","Arizona Cardinals","Los Angeles Rams",
    "San Francisco 49ers","Seattle Seahawks"
  ],
  NHL: [
    "Boston Bruins","Buffalo Sabres","Detroit Red Wings","Florida Panthers","Montreal Canadiens",
    "Ottawa Senators","Tampa Bay Lightning","Toronto Maple Leafs","Carolina Hurricanes","Columbus Blue Jackets",
    "New Jersey Devils","New York Islanders","New York Rangers","Philadelphia Flyers","Pittsburgh Penguins",
    "Washington Capitals","Chicago Blackhawks","Colorado Avalanche","Dallas Stars","Minnesota Wild",
    "Nashville Predators","St. Louis Blues","Winnipeg Jets","Utah Mammoth","Anaheim Ducks","Calgary Flames",
    "Edmonton Oilers","Los Angeles Kings","San Jose Sharks","Seattle Kraken","Vancouver Canucks","Vegas Golden Knights"
  ],
  Rugby: [
    "All Blacks","Bath Rugby","British & Irish Lions","Cardiff","Connacht","Croatia","England","Fiji",
    "Fiji Warriors","Fijian Drua","France","Harlequins","Ireland","Kenya","Leinster","Maori All Blacks",
    "Melbourne Rebels","Munster","Northampton Saints","Samoa","Scotland","Stade Toulouse","Tasman Mako",
    "Tonga","Ulster","Wallabies","Worcester Warriors","South Africa","Australia","Australia Kangaroos",
    "Brisbane Broncos","Canberra Raiders","Canterbury Bankstown Bulldogs","Cronulla Sharks","Dolphins",
    "Fiji Bati","Gold Coast Titans","Hull FC","Manly Warringah Sea Eagles","Melbourne Storm",
    "New South Wales Blues","New Zealand Kiwis","New Zealand Warriors","Newcastle Knights",
    "North Queensland Cowboys","Parramatta Eels","Penrith Panthers","Queensland Maroons",
    "South Sydney Rabbitohs","St George Illawarra Dragons","Sydney Roosters","Wests Tigers"
  ]
};

const CLUB_TEAM_GROUPS = {
  "Premier League": ["Manchester United","Arsenal","Liverpool","Manchester City","Chelsea","Tottenham","Newcastle","Everton","West Ham United","Aston Villa","Crystal Palace","Wolves","Fulham","Leeds United","Nottingham Forest","Brighton","Leicester City"],
  "La Liga": ["Real Madrid","FC Barcelona","Atletico Madrid","Athletic Bilbao","Real Betis","Valencia","Rayo Vallecano","Sevilla","Las Palmas","Girona","Mallorca","Osasuna"],
  "Serie A": ["Inter Milan","AC Milan","Juventus","Napoli","AS Roma","Lazio","Atalanta","Fiorentina","Parma","Venezia","Genoa"],
  "Bundesliga": ["Bayern Munich","Borussia Dortmund","Eintracht Frankfurt","Bayer Leverkusen","RB Leipzig","VfL Wolfsburg","VfB Stuttgart","Werder Bremen","Borussia Mönchengladbach","Heidenheim","St. Pauli","Union Berlin"],
  "Ligue 1": ["Paris Saint-Germain","Marseille","Lyon","Monaco","Lens","Lille"],
  "Portugal": ["Benfica","FC Porto","Sporting CP","Sporting Braga"],
  "Pays-Bas": ["Ajax","PSV Eindhoven","Feyenoord"],
  "Écosse": ["Celtic FC","Glasgow Rangers"],
  "Belgique": [],
  "Turquie": [],
  "Arabie saoudite": ["Al-Nassr","Al-Ittihad","Al-Hilal","Al-Ahli","Al-Ain FC"],
  "Brésil": ["Palmeiras","Flamengo","São Paulo","Santos","Atlético Mineiro","Cruzeiro","Corinthians"],
  "Argentine": ["Boca Juniors","River Plate"],
  "États-Unis": ["Inter Miami CF","LA Galaxy","Orlando City"]
};
