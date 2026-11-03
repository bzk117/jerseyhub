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
const PRODUCTS = []; // Les fiches restent vides tant que les visuels, tailles et stocks Vivi Jersey ne sont pas vérifiés.


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
