/*
  CATALOGUE À MODIFIER
  - Ajoute/retire des équipes dans les tableaux ci-dessous.
  - Pour ajouter un maillot, ajoute un objet dans PRODUCTS.
  - Mets uniquement les tailles réellement proposées pour ce produit.
  - image: chemin d'une photo autorisée, ex. "assets/equipes-nationales/Europe/allemagne/domicile.jpg"
  - Ne renseigne aucun prix : le site n'en affiche pas.
*/
const NATIONAL_REGIONS = [
  {name:"Europe", items:[
    ["Allemagne","🇩🇪"],["France","🇫🇷"],["Angleterre","🏴"],["Italie","🇮🇹"],["Portugal","🇵🇹"],["Pays-Bas","🇳🇱"],["Espagne","🇪🇸"],["Belgique","🇧🇪"],["Irlande","🇮🇪"],["Pologne","🇵🇱"],["Écosse","🏴"],["Danemark","🇩🇰"],["Finlande","🇫🇮"],["Pays de Galles","🏴"],["Serbie","🇷🇸"],["Grèce","🇬🇷"],["Norvège","🇳🇴"],["Croatie","🇭🇷"]
  ]},
  {name:"Afrique", items:[
    ["Maroc","🇲🇦"],["Algérie","🇩🇿"],["Tunisie","🇹🇳"],["Sénégal","🇸🇳"],["Côte d’Ivoire","🇨🇮"],["Cameroun","🇨🇲"],["Nigeria","🇳🇬"],["Égypte","🇪🇬"],["Ghana","🇬🇭"],["Afrique du Sud","🇿🇦"]
  ]},
  {name:"Amériques", items:[
    ["Argentine","🇦🇷"],["Brésil","🇧🇷"],["Uruguay","🇺🇾"],["Colombie","🇨🇴"],["Mexique","🇲🇽"],["États-Unis","🇺🇸"],["Canada","🇨🇦"],["Chili","🇨🇱"]
  ]},
  {name:"Asie", items:[
    ["Japon","🇯🇵"],["Corée du Sud","🇰🇷"],["Arabie saoudite","🇸🇦"],["Qatar","🇶🇦"]
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
const PRODUCTS = [];


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
