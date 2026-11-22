// Registre commun des effectifs actuels et des légendes historiques.
// Les sources existantes sont reprises ici pour que la sélection soit indépendante du maillot choisi.
window.JH_TEAM_PLAYER_ROSTERS = Object.assign({}, window.JH_NATIONAL_PLAYERS || {}, window.JH_RUGBY_UNION_PLAYERS || {});

// Registre séparé des légendes et joueurs historiques.
// Une légende n'est jamais présentée comme membre de l'effectif actuel.
window.JH_TEAM_PLAYER_LEGENDS = {
  "Chicago Bulls": [
    ["Michael Jordan", "JORDAN", 23]
  ]
};


// Effectif Miami Dolphins — NFL 2026, relevé NFL.com le 22/11/2026.
// Joueurs sous contrat listés comme ACT, RES ou DEV sur la page officielle ;
// aucun numéro n'est inventé lorsque NFL.com ne l'affiche pas.
window.JH_NFL_PLAYERS = {
  "Miami Dolphins": [
    ["De'Von Achane","De'Von Achane",28],["Tucker Addington","Tucker Addington",46],["Kaytron Allen","Kaytron Allen",null],["Liam Anderson","Liam Anderson",null],["Zayne Anderson","Zayne Anderson",23],
    ["Darrell Baker Jr.","Darrell Baker Jr.",22],["Chris Bell","Chris Bell",18],["Zeek Biggers","Zeek Biggers",93],["Ethan Bonner","Ethan Bonner",27],["Brady Boyd","Brady Boyd",null],
    ["Julius Brents","Julius Brents",8],["Aaron Brewer","Aaron Brewer",55],["Jordyn Brooks","Jordyn Brooks",20],["Jack Browning","Jack Browning",null],["Major Burns","Major Burns",43],
    ["Matthew Butler","Matthew Butler",91],["DJ Campbell","DJ Campbell",63],["Daniel Carlson","Daniel Carlson",null],["Kevin Coleman Jr.","Kevin Coleman Jr.",21],["Brady Cook","Brady Cook",15],
    ["Keith Cooper Jr.","Keith Cooper Jr.",null],["Marcellas Dial Jr.","Marcellas Dial Jr.",24],["Caleb Douglas","Caleb Douglas",7],["Greg Dulcich","Greg Dulcich",85],["James Ester","James Ester",null],
    ["Amari Gainer","Amari Gainer",null],["Willie Gay Jr.","Willie Gay Jr.",40],["Chukwuebuka Godrick","Chukwuebuka Godrick",79],["Ollie Gordon II","Ollie Gordon II",null],["Kenneth Grant","Kenneth Grant",78],
    ["Ronnie Harrison","Ronnie Harrison",56],["Christian Haynes","Christian Haynes",null],["A.J. Henning","A.J. Henning",82],["DJ Herman","DJ Herman",34],["Malik Herring","Malik Herring",90],
    ["Shaka Heyward","Shaka Heyward",null],["Austin Jackson","Austin Jackson",73],["Jordan Jefferson","Jordan Jefferson",null],["Chris Johnson","Chris Johnson",3],["Justin Joly","Justin Joly",80],
    ["Will Kacmarek","Will Kacmarek",89],["Jarrett Kingston","Jarrett Kingston",62],["Max Llewellyn","Max Llewellyn",57],["Kyle Louis","Kyle Louis",19],["Jason Marshall Jr.","Jason Marshall Jr.",4],
    ["Kyle McCord","Kyle McCord",14],["Rodney McGraw","Rodney McGraw",59],["Andrew Meyer","Andrew Meyer",60],["Trey Moore","Trey Moore",17],["Patrick Paul","Patrick Paul",52],
    ["Jordan Phillips","Jordan Phillips",94],["Bradley Pinion","Bradley Pinion",48],["Kadyn Proctor","Kadyn Proctor",74],["Jalen Reagor","Jalen Reagor",88],["Chop Robinson","Chop Robinson",44],
    ["Jacob Rodriguez","Jacob Rodriguez",10],["Jonah Savaiinaea","Jonah Savaiinaea",71],["Will Sheppard","Will Sheppard",null],["Zach Sieler","Zach Sieler",92],["Jaylin Simpson","Jaylin Simpson",null],
    ["Chris Smith","Chris Smith",null],["Michael Taaffe","Michael Taaffe",16],["Jalen Tolbert","Jalen Tolbert",1],["Dante Trader Jr.","Dante Trader Jr.",11],["Seydou Traore","Seydou Traore",83],
    ["Cole Turner","Cole Turner",87],["Joshua Uche","Joshua Uche",9],["Caedan Wallace","Caedan Wallace",77],["Carlos Washington","Carlos Washington",26],["Malik Washington","Malik Washington",6],
    ["Tre Watson","Tre Watson",null],["Eric Watts","Eric Watts",null],["Jared Wayne","Jared Wayne",null],["Malik Willis","Malik Willis",2],["Julius Wood","Julius Wood",25],
    ["Jackson Woodard","Jackson Woodard",42],["Jaylen Wright","Jaylen Wright",5]
  ]
};

// Ajout au registre commun après chargement des effectifs spécifiques.
Object.assign(window.JH_TEAM_PLAYER_ROSTERS, window.JH_NFL_PLAYERS || {});


// NBA — Chicago Bulls : effectif 2026-27 relevé dans les game notes officiels NBA.
window.JH_NBA_PLAYERS = {
  "Atlanta Hawks": [
    [
      "Luguentz Dort",
      "Luguentz Dort",
      "0"
    ],
    [
      "Jalen Johnson",
      "Jalen Johnson",
      "1"
    ],
    [
      "Aaron Wiggins",
      "Aaron Wiggins",
      "2"
    ],
    [
      "CJ McCollum",
      "CJ McCollum",
      "3"
    ],
    [
      "Kingston Flemings",
      "Kingston Flemings",
      "4"
    ],
    [
      "Dyson Daniels",
      "Dyson Daniels",
      "5"
    ],
    [
      "Nickeil Alexander-Walker",
      "Nickeil Alexander-Walker",
      "7"
    ],
    [
      "Dorian Finney-Smith",
      "Dorian Finney-Smith",
      "8"
    ],
    [
      "RayJ Dennis",
      "RayJ Dennis",
      "10"
    ],
    [
      "Henri Veesaar",
      "Henri Veesaar",
      "13"
    ],
    [
      "Asa Newell",
      "Asa Newell",
      "14"
    ],
    [
      "Onyeka Okongwu",
      "Onyeka Okongwu",
      "17"
    ],
    [
      "Mouhamed Gueye",
      "Mouhamed Gueye",
      "18"
    ],
    [
      "Zuby Ejiofor",
      "Zuby Ejiofor",
      "20"
    ],
    [
      "Jalen Wilson",
      "Jalen Wilson",
      "22"
    ],
    [
      "Corey Kispert",
      "Corey Kispert",
      "24"
    ],
    [
      "Rafael Castro",
      "Rafael Castro",
      "30"
    ],
    [
      "Jock Landale",
      "Jock Landale",
      "31"
    ]
  ],
  "Boston Celtics": [
    [
      "Jayson Tatum",
      "Jayson Tatum",
      "0"
    ],
    [
      "Mitchell Robinson",
      "Mitchell Robinson",
      "4"
    ],
    [
      "Ron Harper Jr.",
      "Ron Harper Jr.",
      "8"
    ],
    [
      "Derrick White",
      "Derrick White",
      "9"
    ],
    [
      "Payton Pritchard",
      "Payton Pritchard",
      "11"
    ],
    [
      "Chris Cenac Jr.",
      "Chris Cenac Jr.",
      "12"
    ],
    [
      "Paul George",
      "Paul George",
      "13"
    ],
    [
      "Dillon Mitchell",
      "Dillon Mitchell",
      "20"
    ],
    [
      "Jordan Walsh",
      "Jordan Walsh",
      "27"
    ],
    [
      "Hugo Gonzalez",
      "Hugo Gonzalez",
      "28"
    ],
    [
      "Sam Hauser",
      "Sam Hauser",
      "30"
    ],
    [
      "Mike Conley Jr.",
      "Mike Conley Jr.",
      "45"
    ],
    [
      "Luka Garza",
      "Luka Garza",
      "52"
    ],
    [
      "Baylor Scheierman",
      "Baylor Scheierman",
      "55"
    ],
    [
      "Amari Williams",
      "Amari Williams",
      "77"
    ],
    [
      "Neemias Queta",
      "Neemias Queta",
      "88"
    ],
    [
      "Devin Carter",
      "Devin Carter",
      "99"
    ]
  ],
  "Charlotte Hornets": [
    [
      "Royce O'Neale",
      "Royce O'Neale",
      "00"
    ],
    [
      "Naz Reid",
      "Naz Reid",
      "0"
    ],
    [
      "Grant Williams",
      "Grant Williams",
      "2"
    ],
    [
      "Coby White",
      "Coby White",
      "3"
    ],
    [
      "Sion James",
      "Sion James",
      "4"
    ],
    [
      "Christian Anderson Jr.",
      "Christian Anderson Jr.",
      "5"
    ],
    [
      "Kon Knueppel",
      "Kon Knueppel",
      "7"
    ],
    [
      "Grayson Allen",
      "Grayson Allen",
      "8"
    ],
    [
      "Michael Ajayi",
      "Michael Ajayi",
      "10"
    ],
    [
      "Ryan Kalkbrenner",
      "Ryan Kalkbrenner",
      "11"
    ],
    [
      "Moussa Diabate",
      "Moussa Diabate",
      "14"
    ],
    [
      "PJ Hall",
      "PJ Hall",
      "16"
    ],
    [
      "Dennis Schröder",
      "Dennis Schröder",
      "17"
    ],
    [
      "Kylan Boswell",
      "Kylan Boswell",
      "18"
    ],
    [
      "Hannes Steinbach",
      "Hannes Steinbach",
      "22"
    ],
    [
      "Brandon Miller",
      "Brandon Miller",
      "24"
    ],
    [
      "Tidjane Salaün",
      "Tidjane Salaün",
      "31"
    ],
    [
      "Liam McNeeley",
      "Liam McNeeley",
      "33"
    ]
  ],
  "Chicago Bulls": [
    [
      "Orlando Robinson",
      "Orlando Robinson",
      "00"
    ],
    [
      "Noa Essengue",
      "Noa Essengue",
      "2"
    ],
    [
      "Josh Giddey",
      "Josh Giddey",
      "3"
    ],
    [
      "Dailyn Swain",
      "Dailyn Swain",
      "5"
    ],
    [
      "Buddy Hield",
      "Buddy Hield",
      "7"
    ],
    [
      "Caleb Wilson",
      "Caleb Wilson",
      "8"
    ],
    [
      "Nic Claxton",
      "Nic Claxton",
      "9"
    ],
    [
      "Leonard Miller",
      "Leonard Miller",
      "11"
    ],
    [
      "Zach Collins",
      "Zach Collins",
      "12"
    ],
    [
      "Matas Buzelis",
      "Matas Buzelis",
      "14"
    ],
    [
      "Jordan Hawkins",
      "Jordan Hawkins",
      "15"
    ],
    [
      "Tobe Awaka",
      "Tobe Awaka",
      "19"
    ],
    [
      "Jaylin Sellers",
      "Jaylin Sellers",
      "22"
    ],
    [
      "Norman Powell",
      "Norman Powell",
      "24"
    ],
    [
      "Jalen Smith",
      "Jalen Smith",
      "25"
    ],
    [
      "Tre Jones",
      "Tre Jones",
      "30"
    ],
    [
      "Isaac Okoro",
      "Isaac Okoro",
      "35"
    ],
    [
      "Patrick Williams",
      "Patrick Williams",
      "44"
    ]
  ],
  "Cleveland Cavaliers": [
    [
      "James Harden",
      "James Harden",
      "1"
    ],
    [
      "Thomas Bryant",
      "Thomas Bryant",
      "3"
    ],
    [
      "Evan Mobley",
      "Evan Mobley",
      "4"
    ],
    [
      "Sam Merrill",
      "Sam Merrill",
      "5"
    ],
    [
      "Peyton Watson",
      "Peyton Watson",
      "8"
    ],
    [
      "Craig Porter Jr.",
      "Craig Porter Jr.",
      "9"
    ],
    [
      "Meleek Thomas",
      "Meleek Thomas",
      "15"
    ],
    [
      "Khalifa Diop",
      "Khalifa Diop",
      "18"
    ],
    [
      "Jaylon Tyson",
      "Jaylon Tyson",
      "20"
    ],
    [
      "Tyrese Proctor",
      "Tyrese Proctor",
      "24"
    ],
    [
      "Jarrett Allen",
      "Jarrett Allen",
      "31"
    ],
    [
      "Mario Hezonja",
      "Mario Hezonja",
      "33"
    ],
    [
      "Nae'Qwan Tomlin",
      "Nae'Qwan Tomlin",
      "35"
    ],
    [
      "Donovan Mitchell",
      "Donovan Mitchell",
      "45"
    ],
    [
      "Zack Austin",
      "Zack Austin",
      "55"
    ],
    [
      "Norchad Omier",
      "Norchad Omier",
      "77"
    ],
    [
      "Ernest Udeh Jr.",
      "Ernest Udeh Jr.",
      "88"
    ]
  ],
  "Dallas Mavericks": [
    [
      "Max Christie",
      "Max Christie",
      "0"
    ],
    [
      "Walter Clayton Jr.",
      "Walter Clayton Jr.",
      "1"
    ],
    [
      "Dereck Lively II",
      "Dereck Lively II",
      "2"
    ],
    [
      "Naji Marshall",
      "Naji Marshall",
      "3"
    ],
    [
      "Marcus Sasser",
      "Marcus Sasser",
      "8"
    ],
    [
      "Jett Howard",
      "Jett Howard",
      "9"
    ],
    [
      "Zaccharie Risacher",
      "Zaccharie Risacher",
      "10"
    ],
    [
      "Kyrie Irving",
      "Kyrie Irving",
      "11"
    ],
    [
      "Tarik Biberović",
      "Tarik Biberović",
      "13"
    ],
    [
      "Morez Johnson Jr.",
      "Morez Johnson Jr.",
      "14"
    ],
    [
      "Caleb Martin",
      "Caleb Martin",
      "16"
    ],
    [
      "Daniel Gafford",
      "Daniel Gafford",
      "21"
    ],
    [
      "P.J. Washington Jr.",
      "P.J. Washington Jr.",
      "25"
    ],
    [
      "Moussa Cissé",
      "Moussa Cissé",
      "30"
    ],
    [
      "Cooper Flagg",
      "Cooper Flagg",
      "32"
    ],
    [
      "Tobi Lawal",
      "Tobi Lawal",
      "33"
    ],
    [
      "Santi Aldama",
      "Santi Aldama",
      "34"
    ],
    [
      "Sergio De Larrea",
      "Sergio De Larrea",
      "55"
    ]
  ],
  "Denver Nuggets": [
    [
      "Christian Braun",
      "Christian Braun",
      "0"
    ],
    [
      "Julian Strawther",
      "Julian Strawther",
      "1"
    ],
    [
      "Marvin Bagley III",
      "Marvin Bagley III",
      "3"
    ],
    [
      "Tyus Jones",
      "Tyus Jones",
      "5"
    ],
    [
      "Trevon Brazile",
      "Trevon Brazile",
      "7"
    ],
    [
      "Ryan Nembhard",
      "Ryan Nembhard",
      "9"
    ],
    [
      "DeMar DeRozan",
      "DeMar DeRozan",
      "10"
    ],
    [
      "Alpha Diallo",
      "Alpha Diallo",
      "11"
    ],
    [
      "Bryce Hopkins",
      "Bryce Hopkins",
      "13"
    ],
    [
      "DaRon Holmes II",
      "DaRon Holmes II",
      "14"
    ],
    [
      "Nikola Jokić",
      "Nikola Jokić",
      "15"
    ],
    [
      "Spencer Jones",
      "Spencer Jones",
      "21"
    ],
    [
      "Zeke Nnaji",
      "Zeke Nnaji",
      "22"
    ],
    [
      "Cameron Johnson",
      "Cameron Johnson",
      "23"
    ],
    [
      "Jamal Murray",
      "Jamal Murray",
      "27"
    ],
    [
      "Aaron Gordon",
      "Aaron Gordon",
      "32"
    ],
    [
      "Cam Whitmore",
      "Cam Whitmore",
      "00"
    ]
  ],
  "Detroit Pistons": [
    [
      "Jalen Duren",
      "Jalen Duren",
      "0"
    ],
    [
      "Cade Cunningham",
      "Cade Cunningham",
      "2"
    ],
    [
      "Ron Holland II",
      "Ron Holland II",
      "5"
    ],
    [
      "Paul Reed",
      "Paul Reed",
      "7"
    ],
    [
      "Chaz Lanier",
      "Chaz Lanier",
      "8"
    ],
    [
      "Ausar Thompson",
      "Ausar Thompson",
      "9"
    ],
    [
      "Taurean Prince",
      "Taurean Prince",
      "12"
    ],
    [
      "Isaac Jones",
      "Isaac Jones",
      "13"
    ],
    [
      "Isaiah Joe",
      "Isaiah Joe",
      "17"
    ],
    [
      "John Collins",
      "John Collins",
      "20"
    ],
    [
      "Ebuka Okorie",
      "Ebuka Okorie",
      "23"
    ],
    [
      "Daniss Jenkins",
      "Daniss Jenkins",
      "24"
    ],
    [
      "Kevin Huerter",
      "Kevin Huerter",
      "27"
    ],
    [
      "Javonte Green",
      "Javonte Green",
      "31"
    ],
    [
      "Ugonna Onyenso",
      "Ugonna Onyenso",
      "34"
    ],
    [
      "Tolu Smith",
      "Tolu Smith",
      "35"
    ],
    [
      "Duncan Robinson",
      "Duncan Robinson",
      "55"
    ],
    [
      "Elijah Harkless",
      "Elijah Harkless",
      "94"
    ]
  ],
  "Golden State Warriors": [
    [
      "Gary Payton II",
      "Gary Payton II",
      "0"
    ],
    [
      "Yaxel Lendeborg",
      "Yaxel Lendeborg",
      "1"
    ],
    [
      "Brandin Podziemski",
      "Brandin Podziemski",
      "2"
    ],
    [
      "Will Richard",
      "Will Richard",
      "3"
    ],
    [
      "Moses Moody",
      "Moses Moody",
      "4"
    ],
    [
      "Kristaps Porziņģis",
      "Kristaps Porziņģis",
      "7"
    ],
    [
      "De'Anthony Melton",
      "De'Anthony Melton",
      "8"
    ],
    [
      "Jimmy Butler III",
      "Jimmy Butler III",
      "10"
    ],
    [
      "Brandon Williams",
      "Brandon Williams",
      "12"
    ],
    [
      "Gui Santos",
      "Gui Santos",
      "15"
    ],
    [
      "LJ Cryer",
      "LJ Cryer",
      "18"
    ],
    [
      "Al Horford",
      "Al Horford",
      "20"
    ],
    [
      "Draymond Green",
      "Draymond Green",
      "23"
    ],
    [
      "Charles Bassey",
      "Charles Bassey",
      "28"
    ],
    [
      "Stephen Curry",
      "Stephen Curry",
      "30"
    ],
    [
      "Georges Niang",
      "Georges Niang",
      "32"
    ],
    [
      "Malevy Leons",
      "Malevy Leons",
      "33"
    ],
    [
      "Graham Ike",
      "Graham Ike",
      "45"
    ]
  ],
  "Indiana Pacers": [
    [
      "Tyrese Haliburton",
      "Tyrese Haliburton",
      "0"
    ],
    [
      "Obi Toppin",
      "Obi Toppin",
      "1"
    ],
    [
      "Andrew Nembhard",
      "Andrew Nembhard",
      "2"
    ],
    [
      "Braden Smith",
      "Braden Smith",
      "3"
    ],
    [
      "Jarace Walker",
      "Jarace Walker",
      "5"
    ],
    [
      "T.J. McConnell",
      "T.J. McConnell",
      "9"
    ],
    [
      "Kelly Oubre Jr.",
      "Kelly Oubre Jr.",
      "10"
    ],
    [
      "Johnny Furphy",
      "Johnny Furphy",
      "12"
    ],
    [
      "Jalen Slawson",
      "Jalen Slawson",
      "18"
    ],
    [
      "Larry Nance Jr.",
      "Larry Nance Jr.",
      "22"
    ],
    [
      "Aaron Nesmith",
      "Aaron Nesmith",
      "23"
    ],
    [
      "Kobe Brown",
      "Kobe Brown",
      "24"
    ],
    [
      "Ben Sheppard",
      "Ben Sheppard",
      "26"
    ],
    [
      "Quenton Jackson",
      "Quenton Jackson",
      "29"
    ],
    [
      "Jay Huff",
      "Jay Huff",
      "32"
    ],
    [
      "Ivica Zubac",
      "Ivica Zubac",
      "40"
    ],
    [
      "Pascal Siakam",
      "Pascal Siakam",
      "43"
    ]
  ],
  "Los Angeles Lakers": [
    [
      "Adou Thiero",
      "Adou Thiero",
      "1"
    ],
    [
      "Jarred Vanderbilt",
      "Jarred Vanderbilt",
      "2"
    ],
    [
      "Matisse Thybulle",
      "Matisse Thybulle",
      "4"
    ],
    [
      "Quentin Grimes",
      "Quentin Grimes",
      "5"
    ],
    [
      "Jaden Hardy",
      "Jaden Hardy",
      "7"
    ],
    [
      "Bronny James Jr.",
      "Bronny James Jr.",
      "9"
    ],
    [
      "Collin Sexton",
      "Collin Sexton",
      "10"
    ],
    [
      "Ziaire Williams",
      "Ziaire Williams",
      "11"
    ],
    [
      "Jake LaRavia",
      "Jake LaRavia",
      "12"
    ],
    [
      "Walker Kessler",
      "Walker Kessler",
      "14"
    ],
    [
      "Austin Reaves",
      "Austin Reaves",
      "15"
    ],
    [
      "Carson Cooper",
      "Carson Cooper",
      "20"
    ],
    [
      "Chris Mañon",
      "Chris Mañon",
      "30"
    ],
    [
      "Cameron Carr",
      "Cameron Carr",
      "43"
    ],
    [
      "Arthur Kaluma",
      "Arthur Kaluma",
      "47"
    ],
    [
      "Sandro Mamukelashvili",
      "Sandro Mamukelashvili",
      "54"
    ],
    [
      "Kevon Looney",
      "Kevon Looney",
      "55"
    ],
    [
      "Luka Dončić",
      "Luka Dončić",
      "77"
    ]
  ],
  "Memphis Grizzlies": [
    [
      "Jaylen Wells",
      "Jaylen Wells",
      "0"
    ],
    [
      "Scotty Pippen Jr.",
      "Scotty Pippen Jr.",
      "1"
    ],
    [
      "Ty Jerome",
      "Ty Jerome",
      "2"
    ],
    [
      "Jerami Grant",
      "Jerami Grant",
      "3"
    ],
    [
      "Richie Saunders",
      "Richie Saunders",
      "5"
    ],
    [
      "Javon Small",
      "Javon Small",
      "10"
    ],
    [
      "Zach Edey",
      "Zach Edey",
      "14"
    ],
    [
      "Kris Murray",
      "Kris Murray",
      "17"
    ],
    [
      "Olivier-Maxence Prosper",
      "Olivier-Maxence Prosper",
      "18"
    ],
    [
      "Jahmai Mashack",
      "Jahmai Mashack",
      "21"
    ],
    [
      "Taylor Hendricks",
      "Taylor Hendricks",
      "22"
    ],
    [
      "Cedric Coward",
      "Cedric Coward",
      "23"
    ],
    [
      "Cam Spencer",
      "Cam Spencer",
      "24"
    ],
    [
      "Cameron Boozer",
      "Cameron Boozer",
      "27"
    ],
    [
      "Isaiah Stewart",
      "Isaiah Stewart",
      "28"
    ],
    [
      "Karim López",
      "Karim López",
      "35"
    ],
    [
      "Quinten Post",
      "Quinten Post",
      "41"
    ],
    [
      "GG Jackson II",
      "GG Jackson II",
      "45"
    ]
  ],
  "Miami Heat": [
    [
      "Simone Fontecchio",
      "Simone Fontecchio",
      "0"
    ],
    [
      "Davion Mitchell",
      "Davion Mitchell",
      "2"
    ],
    [
      "Ryan Conwell",
      "Ryan Conwell",
      "4"
    ],
    [
      "Nikola Jović",
      "Nikola Jović",
      "5"
    ],
    [
      "Giannis Antetokounmpo",
      "Giannis Antetokounmpo",
      "7"
    ],
    [
      "Nick Richards",
      "Nick Richards",
      "8"
    ],
    [
      "Pelle Larsson",
      "Pelle Larsson",
      "9"
    ],
    [
      "Tim Hardaway Jr.",
      "Tim Hardaway Jr.",
      "10"
    ],
    [
      "Klay Thompson",
      "Klay Thompson",
      "11"
    ],
    [
      "Dru Smith",
      "Dru Smith",
      "12"
    ],
    [
      "Bam Adebayo",
      "Bam Adebayo",
      "13"
    ],
    [
      "Myron Gardner",
      "Myron Gardner",
      "15"
    ],
    [
      "Keshad Johnson",
      "Keshad Johnson",
      "16"
    ],
    [
      "Andrew Wiggins",
      "Andrew Wiggins",
      "22"
    ],
    [
      "Tre Donaldson",
      "Tre Donaldson",
      "24"
    ],
    [
      "Vladislav Goldin",
      "Vladislav Goldin",
      "50"
    ],
    [
      "Bobby Portis Jr.",
      "Bobby Portis Jr.",
      "95"
    ]
  ],
  "Milwaukee Bucks": [
    [
      "Jericho Sims",
      "Jericho Sims",
      "00"
    ],
    [
      "Brayden Burries",
      "Brayden Burries",
      "0"
    ],
    [
      "Myles Turner",
      "Myles Turner",
      "3"
    ],
    [
      "Gary Trent Jr.",
      "Gary Trent Jr.",
      "5"
    ],
    [
      "Kel'el Ware",
      "Kel'el Ware",
      "9"
    ],
    [
      "Tyler Herro",
      "Tyler Herro",
      "11"
    ],
    [
      "Caris LeVert",
      "Caris LeVert",
      "12"
    ],
    [
      "Ryan Rollins",
      "Ryan Rollins",
      "13"
    ],
    [
      "Nate Ament",
      "Nate Ament",
      "15"
    ],
    [
      "Kyle Kuzma",
      "Kyle Kuzma",
      "18"
    ],
    [
      "Kam Jones",
      "Kam Jones",
      "19"
    ],
    [
      "AJ Green",
      "AJ Green",
      "20"
    ],
    [
      "Ousmane Dieng",
      "Ousmane Dieng",
      "21"
    ],
    [
      "Bogoljub Marković",
      "Bogoljub Marković",
      "23"
    ],
    [
      "Jaime Jaquez Jr.",
      "Jaime Jaquez Jr.",
      "24"
    ],
    [
      "Kasparas Jakučionis",
      "Kasparas Jakučionis",
      "25"
    ],
    [
      "Cormac Ryan",
      "Cormac Ryan",
      "30"
    ],
    [
      "Pete Nance",
      "Pete Nance",
      "35"
    ]
  ],
  "New Orleans Pelicans": [
    [
      "Jeremiah Fears",
      "Jeremiah Fears",
      "0"
    ],
    [
      "Zion Williamson",
      "Zion Williamson",
      "1"
    ],
    [
      "Herbert Jones",
      "Herbert Jones",
      "2"
    ],
    [
      "Jordan Poole",
      "Jordan Poole",
      "3"
    ],
    [
      "Dejounte Murray",
      "Dejounte Murray",
      "5"
    ],
    [
      "DeAndre Jordan",
      "DeAndre Jordan",
      "6"
    ],
    [
      "Malik Dia",
      "Malik Dia",
      "8"
    ],
    [
      "Trendon Watford",
      "Trendon Watford",
      "9"
    ],
    [
      "Jaron Pierre Jr.",
      "Jaron Pierre Jr.",
      "10"
    ],
    [
      "Bryce McGowens",
      "Bryce McGowens",
      "11"
    ],
    [
      "Julian Reese",
      "Julian Reese",
      "13"
    ],
    [
      "AJ Johnson",
      "AJ Johnson",
      "14"
    ],
    [
      "Karlo Matković",
      "Karlo Matković",
      "17"
    ],
    [
      "Yves Missi",
      "Yves Missi",
      "21"
    ],
    [
      "Derik Queen",
      "Derik Queen",
      "22"
    ],
    [
      "Bennedict Mathurin",
      "Bennedict Mathurin",
      "24"
    ],
    [
      "Trey Murphy III",
      "Trey Murphy III",
      "25"
    ],
    [
      "Saddiq Bey",
      "Saddiq Bey",
      "41"
    ]
  ],
  "New York Knicks": [
    [
      "Jordan Clarkson",
      "Jordan Clarkson",
      "00"
    ],
    [
      "Andre Drummond",
      "Andre Drummond",
      "0"
    ],
    [
      "Dalton Knecht",
      "Dalton Knecht",
      "1"
    ],
    [
      "Miles McBride",
      "Miles McBride",
      "2"
    ],
    [
      "Josh Hart",
      "Josh Hart",
      "3"
    ],
    [
      "Pacôme Dadiet",
      "Pacôme Dadiet",
      "4"
    ],
    [
      "Jose Alvarado",
      "Jose Alvarado",
      "5"
    ],
    [
      "OG Anunoby",
      "OG Anunoby",
      "8"
    ],
    [
      "Jalen Brunson",
      "Jalen Brunson",
      "11"
    ],
    [
      "Tyler Kolek",
      "Tyler Kolek",
      "13"
    ],
    [
      "Jaden Akins",
      "Jaden Akins",
      "14"
    ],
    [
      "Mikal Bridges",
      "Mikal Bridges",
      "25"
    ],
    [
      "Karl-Anthony Towns",
      "Karl-Anthony Towns",
      "32"
    ],
    [
      "James Wiseman",
      "James Wiseman",
      "35"
    ],
    [
      "Landry Shamet",
      "Landry Shamet",
      "44"
    ],
    [
      "Mohamed Diawara",
      "Mohamed Diawara",
      "51"
    ],
    [
      "Tyler Nickel",
      "Tyler Nickel",
      "55"
    ]
  ],
  "Oklahoma City Thunder": [
    [
      "Shai Gilgeous-Alexander",
      "Shai Gilgeous-Alexander",
      "2"
    ],
    [
      "Jared McCain",
      "Jared McCain",
      "3"
    ],
    [
      "Jaylin Williams",
      "Jaylin Williams",
      "6"
    ],
    [
      "Chet Holmgren",
      "Chet Holmgren",
      "7"
    ],
    [
      "Jalen Williams",
      "Jalen Williams",
      "8"
    ],
    [
      "Alex Caruso",
      "Alex Caruso",
      "9"
    ],
    [
      "Thomas Sorber",
      "Thomas Sorber",
      "12"
    ],
    [
      "Bennett Stirtz",
      "Bennett Stirtz",
      "14"
    ],
    [
      "Aday Mara",
      "Aday Mara",
      "15"
    ],
    [
      "Micah Peavy",
      "Micah Peavy",
      "16"
    ],
    [
      "Nique Clifford",
      "Nique Clifford",
      "18"
    ],
    [
      "Josh Dix",
      "Josh Dix",
      "21"
    ],
    [
      "Cason Wallace",
      "Cason Wallace",
      "22"
    ],
    [
      "Brooks Barnhizer",
      "Brooks Barnhizer",
      "23"
    ],
    [
      "Ajay Mitchell",
      "Ajay Mitchell",
      "25"
    ],
    [
      "Kenrich Williams",
      "Kenrich Williams",
      "34"
    ],
    [
      "Nikola Topić",
      "Nikola Topić",
      "44"
    ],
    [
      "Isaiah Hartenstein",
      "Isaiah Hartenstein",
      "55"
    ]
  ],
  "Philadelphia 76ers": [
    [
      "Tyrese Maxey",
      "Tyrese Maxey",
      "0"
    ],
    [
      "Labaron Philon Jr.",
      "Labaron Philon Jr.",
      "00"
    ],
    [
      "Kentavious Caldwell-Pope",
      "Kentavious Caldwell-Pope",
      "1"
    ],
    [
      "Anfernee Simons",
      "Anfernee Simons",
      "5"
    ],
    [
      "Jaylen Brown",
      "Jaylen Brown",
      "7"
    ],
    [
      "Caleb Love",
      "Caleb Love",
      "8"
    ],
    [
      "Justin Edwards",
      "Justin Edwards",
      "11"
    ],
    [
      "Rayan Rupert",
      "Rayan Rupert",
      "12"
    ],
    [
      "Joel Embiid",
      "Joel Embiid",
      "21"
    ],
    [
      "LeBron James",
      "LeBron James",
      "23"
    ],
    [
      "Dominick Barlow",
      "Dominick Barlow",
      "25"
    ],
    [
      "Adem Bona",
      "Adem Bona",
      "30"
    ],
    [
      "Jabari Walker",
      "Jabari Walker",
      "33"
    ],
    [
      "Dean Wade",
      "Dean Wade",
      "45"
    ],
    [
      "Ariel Hukporti",
      "Ariel Hukporti",
      "55"
    ],
    [
      "VJ Edgecombe",
      "VJ Edgecombe",
      "77"
    ],
    [
      "Tacko Fall",
      "Tacko Fall",
      "99"
    ]
  ],
  "Phoenix Suns": [
    [
      "Ryan Dunn",
      "Ryan Dunn",
      "0"
    ],
    [
      "Drew Timme",
      "Drew Timme",
      "2"
    ],
    [
      "Dillon Brooks",
      "Dillon Brooks",
      "3"
    ],
    [
      "Jalen Green",
      "Jalen Green",
      "4"
    ],
    [
      "Luke Kennard",
      "Luke Kennard",
      "8"
    ],
    [
      "Khaman Maluach",
      "Khaman Maluach",
      "10"
    ],
    [
      "Oso Ighodaro",
      "Oso Ighodaro",
      "11"
    ],
    [
      "Collin Gillespie",
      "Collin Gillespie",
      "12"
    ],
    [
      "Devin Booker",
      "Devin Booker",
      "15"
    ],
    [
      "Jamaree Bouyea",
      "Jamaree Bouyea",
      "17"
    ],
    [
      "Koa Peat",
      "Koa Peat",
      "18"
    ],
    [
      "Rasheer Fleming",
      "Rasheer Fleming",
      "20"
    ],
    [
      "Miles Bridges",
      "Miles Bridges",
      "22"
    ],
    [
      "Jordan Goodwin",
      "Jordan Goodwin",
      "23"
    ],
    [
      "Mark Williams",
      "Mark Williams",
      "25"
    ],
    [
      "Duop Reath",
      "Duop Reath",
      "26"
    ],
    [
      "Pat Spencer",
      "Pat Spencer",
      "61"
    ]
  ],
  "Portland Trail Blazers": [
    [
      "Damian Lillard",
      "Damian Lillard",
      "0"
    ],
    [
      "Scoot Henderson",
      "Scoot Henderson",
      "00"
    ],
    [
      "Ja Morant",
      "Ja Morant",
      "1"
    ],
    [
      "John Tonje",
      "John Tonje",
      "2"
    ],
    [
      "Jrue Holiday",
      "Jrue Holiday",
      "5"
    ],
    [
      "Deni Avdija",
      "Deni Avdija",
      "8"
    ],
    [
      "Micah Potter",
      "Micah Potter",
      "9"
    ],
    [
      "Branden Carlson",
      "Branden Carlson",
      "10"
    ],
    [
      "Chris Youngblood",
      "Chris Youngblood",
      "11"
    ],
    [
      "Yang Hansen",
      "Yang Hansen",
      "16"
    ],
    [
      "Shaedon Sharpe",
      "Shaedon Sharpe",
      "17"
    ],
    [
      "Donovan Clingan",
      "Donovan Clingan",
      "23"
    ],
    [
      "Vit Krejčí",
      "Vit Krejčí",
      "27"
    ],
    [
      "Jayson Kent",
      "Jayson Kent",
      "29"
    ],
    [
      "Toumani Camara",
      "Toumani Camara",
      "33"
    ],
    [
      "Robert Williams III",
      "Robert Williams III",
      "35"
    ],
    [
      "Sidy Cissoko",
      "Sidy Cissoko",
      "91"
    ]
  ],
  "Sacramento Kings": [
    [
      "Malik Monk",
      "Malik Monk",
      "0"
    ],
    [
      "Sean Pedulla",
      "Sean Pedulla",
      "3"
    ],
    [
      "Darius Acuff Jr.",
      "Darius Acuff Jr.",
      "5"
    ],
    [
      "Zach LaVine",
      "Zach LaVine",
      "8"
    ],
    [
      "Precious Achiuwa",
      "Precious Achiuwa",
      "9"
    ],
    [
      "Domantas Sabonis",
      "Domantas Sabonis",
      "11"
    ],
    [
      "Keegan Murray",
      "Keegan Murray",
      "13"
    ],
    [
      "De'Andre Hunter",
      "De'Andre Hunter",
      "15"
    ],
    [
      "Leaky Black",
      "Leaky Black",
      "19"
    ],
    [
      "Jonathan Mogbo",
      "Jonathan Mogbo",
      "22"
    ],
    [
      "Mason Plumlee",
      "Mason Plumlee",
      "24"
    ],
    [
      "Ben Simmons",
      "Ben Simmons",
      "25"
    ],
    [
      "Daeqwon Plowden",
      "Daeqwon Plowden",
      "29"
    ],
    [
      "Dylan Cardwell",
      "Dylan Cardwell",
      "32"
    ],
    [
      "Alex Karaban",
      "Alex Karaban",
      "33"
    ],
    [
      "Emanuel Sharp",
      "Emanuel Sharp",
      "34"
    ],
    [
      "Maxime Raynaud",
      "Maxime Raynaud",
      "42"
    ]
  ],
  "San Antonio Spurs": [
    [
      "Jordan McLaughlin",
      "Jordan McLaughlin",
      "0"
    ],
    [
      "Victor Wembanyama",
      "Victor Wembanyama",
      "1"
    ],
    [
      "Dylan Harper",
      "Dylan Harper",
      "2"
    ],
    [
      "Keldon Johnson",
      "Keldon Johnson",
      "3"
    ],
    [
      "De'Aaron Fox",
      "De'Aaron Fox",
      "4"
    ],
    [
      "Stephon Castle",
      "Stephon Castle",
      "5"
    ],
    [
      "Luke Kornet",
      "Luke Kornet",
      "7"
    ],
    [
      "Tarris Reed Jr.",
      "Tarris Reed Jr.",
      "10"
    ],
    [
      "Carter Bryant",
      "Carter Bryant",
      "11"
    ],
    [
      "Maliq Brown",
      "Maliq Brown",
      "15"
    ],
    [
      "Ja'Kobi Gillespie",
      "Ja'Kobi Gillespie",
      "17"
    ],
    [
      "Jayden Quaintance",
      "Jayden Quaintance",
      "22"
    ],
    [
      "Tobias Harris",
      "Tobias Harris",
      "23"
    ],
    [
      "Devin Vassell",
      "Devin Vassell",
      "24"
    ],
    [
      "David Jones Garcia",
      "David Jones Garcia",
      "25"
    ],
    [
      "Julian Champagnie",
      "Julian Champagnie",
      "30"
    ],
    [
      "Harrison Barnes",
      "Harrison Barnes",
      "40"
    ]
  ],
  "Toronto Raptors": [
    [
      "Jamal Shead",
      "Jamal Shead",
      "1"
    ],
    [
      "Kawhi Leonard",
      "Kawhi Leonard",
      "2"
    ],
    [
      "Scottie Barnes",
      "Scottie Barnes",
      "4"
    ],
    [
      "Immanuel Quickley",
      "Immanuel Quickley",
      "5"
    ],
    [
      "Jaden Bradley",
      "Jaden Bradley",
      "8"
    ],
    [
      "RJ Barrett",
      "RJ Barrett",
      "9"
    ],
    [
      "Kevin McCullar Jr.",
      "Kevin McCullar Jr.",
      "11"
    ],
    [
      "Nate Bittle",
      "Nate Bittle",
      "12"
    ],
    [
      "Kyle Anderson",
      "Kyle Anderson",
      "13"
    ],
    [
      "Ja'Kobe Walter",
      "Ja'Kobe Walter",
      "14"
    ],
    [
      "Malachi Smith",
      "Malachi Smith",
      "18"
    ],
    [
      "Jakob Poeltl",
      "Jakob Poeltl",
      "19"
    ],
    [
      "Allen Graves",
      "Allen Graves",
      "22"
    ],
    [
      "Collin Murray-Boyles",
      "Collin Murray-Boyles",
      "30"
    ],
    [
      "Trayce Jackson-Davis",
      "Trayce Jackson-Davis",
      "32"
    ],
    [
      "Alijah Martin",
      "Alijah Martin",
      "55"
    ],
    [
      "Jamison Battle",
      "Jamison Battle",
      "77"
    ]
  ],
  "Utah Jazz": [
    [
      "Harrison Ingram",
      "Harrison Ingram",
      "00"
    ],
    [
      "Kobe Bufkin",
      "Kobe Bufkin",
      "0"
    ],
    [
      "Kyle Filipowski",
      "Kyle Filipowski",
      "2"
    ],
    [
      "Keyonte George",
      "Keyonte George",
      "3"
    ],
    [
      "Josh Green",
      "Josh Green",
      "5"
    ],
    [
      "Isaiah Collier",
      "Isaiah Collier",
      "8"
    ],
    [
      "Svi Mykhailiuk",
      "Svi Mykhailiuk",
      "10"
    ],
    [
      "Jaxson Hayes",
      "Jaxson Hayes",
      "11"
    ],
    [
      "Tony Bradley",
      "Tony Bradley",
      "13"
    ],
    [
      "Ace Bailey",
      "Ace Bailey",
      "19"
    ],
    [
      "Jaren Jackson Jr.",
      "Jaren Jackson Jr.",
      "20"
    ],
    [
      "Josh Okogie",
      "Josh Okogie",
      "21"
    ],
    [
      "Darryn Peterson",
      "Darryn Peterson",
      "22"
    ],
    [
      "Lauri Markkanen",
      "Lauri Markkanen",
      "23"
    ],
    [
      "Jonas Aidoo",
      "Jonas Aidoo",
      "25"
    ],
    [
      "Brice Sensabaugh",
      "Brice Sensabaugh",
      "28"
    ],
    [
      "Jusuf Nurkić",
      "Jusuf Nurkić",
      "30"
    ],
    [
      "Mo Bamba",
      "Mo Bamba",
      "44"
    ]
  ],
  "Washington Wizards": [
    [
      "Bilal Coulibaly",
      "Bilal Coulibaly",
      "0"
    ],
    [
      "Tristan Vukcevic",
      "Tristan Vukcevic",
      "00"
    ],
    [
      "Tre Mann",
      "Tre Mann",
      "1"
    ],
    [
      "Trae Young",
      "Trae Young",
      "3"
    ],
    [
      "AJ Dybantsa",
      "AJ Dybantsa",
      "4"
    ],
    [
      "Jamir Watkins",
      "Jamir Watkins",
      "5"
    ],
    [
      "Bub Carrington",
      "Bub Carrington",
      "7"
    ],
    [
      "Deandre Ayton",
      "Deandre Ayton",
      "8"
    ],
    [
      "Justin Champagnie",
      "Justin Champagnie",
      "9"
    ],
    [
      "Tre Johnson",
      "Tre Johnson",
      "12"
    ],
    [
      "Anthony Gill",
      "Anthony Gill",
      "16"
    ],
    [
      "Kyshawn George",
      "Kyshawn George",
      "18"
    ],
    [
      "Alex Sarr",
      "Alex Sarr",
      "20"
    ],
    [
      "Khris Middleton",
      "Khris Middleton",
      "22"
    ],
    [
      "Anthony Davis",
      "Anthony Davis",
      "23"
    ],
    [
      "Reece Beekman",
      "Reece Beekman",
      "26"
    ],
    [
      "Will Riley",
      "Will Riley",
      "27"
    ],
    [
      "Felix Okpara",
      "Felix Okpara",
      "34"
    ]
  ],
  "Brooklyn Nets": [
    [
      "Josh Minott",
      "Josh Minott",
      "00"
    ],
    [
      "Mikel Brown Jr.",
      "Mikel Brown Jr.",
      "0"
    ],
    [
      "Keon Ellis",
      "Keon Ellis",
      "1"
    ],
    [
      "Danny Wolf",
      "Danny Wolf",
      "2"
    ],
    [
      "Drake Powell",
      "Drake Powell",
      "4"
    ],
    [
      "Egor Dëmin",
      "Egor Dëmin",
      "8"
    ],
    [
      "Joshua Jefferson",
      "Joshua Jefferson",
      "9"
    ],
    [
      "Nolan Traore",
      "Nolan Traore",
      "10"
    ],
    [
      "Moritz Wagner",
      "Moritz Wagner",
      "13"
    ],
    [
      "Terance Mann",
      "Terance Mann",
      "14"
    ],
    [
      "Grant Nelson",
      "Grant Nelson",
      "16"
    ],
    [
      "Michael Porter Jr.",
      "Michael Porter Jr.",
      "17"
    ],
    [
      "Day'Ron Sharpe",
      "Day'Ron Sharpe",
      "20"
    ],
    [
      "Noah Clowney",
      "Noah Clowney",
      "21"
    ],
    [
      "Julius Randle",
      "Julius Randle",
      "30"
    ],
    [
      "Chaney Johnson",
      "Chaney Johnson",
      "31"
    ],
    [
      "Tyler Bilodeau",
      "Tyler Bilodeau",
      "34"
    ],
    [
      "Ben Saraf",
      "Ben Saraf",
      "77"
    ]
  ],
  "Houston Rockets": [
    [
      "Amen Thompson",
      "Amen Thompson",
      "1"
    ],
    [
      "Bruce Thornton",
      "Bruce Thornton",
      "2"
    ],
    [
      "Julian Phillips",
      "Julian Phillips",
      "3"
    ],
    [
      "Fred VanVleet",
      "Fred VanVleet",
      "5"
    ],
    [
      "Kevin Durant",
      "Kevin Durant",
      "7"
    ],
    [
      "Jae'Sean Tate",
      "Jae'Sean Tate",
      "8"
    ],
    [
      "Oscar Tshiebwe",
      "Oscar Tshiebwe",
      "9"
    ],
    [
      "Jabari Smith Jr.",
      "Jabari Smith Jr.",
      "10"
    ],
    [
      "Steven Adams",
      "Steven Adams",
      "12"
    ],
    [
      "Reed Sheppard",
      "Reed Sheppard",
      "15"
    ],
    [
      "Tari Eason",
      "Tari Eason",
      "17"
    ],
    [
      "Quadir Copeland",
      "Quadir Copeland",
      "25"
    ],
    [
      "Isaiah Crawford",
      "Isaiah Crawford",
      "27"
    ],
    [
      "Alperen Şengün",
      "Alperen Şengün",
      "28"
    ],
    [
      "Clint Capela",
      "Clint Capela",
      "30"
    ],
    [
      "Bogdan Bogdanović",
      "Bogdan Bogdanović",
      "31"
    ],
    [
      "Marcus Smart",
      "Marcus Smart",
      "36"
    ]
  ],
  "LA Clippers": [
    [
      "Bradley Beal",
      "Bradley Beal",
      "3"
    ],
    [
      "Cam Christie",
      "Cam Christie",
      "24"
    ],
    [
      "Gradey Dick",
      "Gradey Dick",
      "9"
    ],
    [
      "Kris Dunn",
      "Kris Dunn",
      "8"
    ],
    [
      "Darius Garland",
      "Darius Garland",
      "10"
    ],
    [
      "Rui Hachimura",
      "Rui Hachimura",
      "28"
    ],
    [
      "Brandon Ingram",
      "Brandon Ingram",
      "7"
    ],
    [
      "Isaiah Jackson",
      "Isaiah Jackson",
      "23"
    ],
    [
      "Derrick Jones Jr.",
      "Derrick Jones Jr.",
      "5"
    ],
    [
      "Brook Lopez",
      "Brook Lopez",
      "11"
    ],
    [
      "Nick Martinelli",
      "Nick Martinelli",
      "12"
    ],
    [
      "Baba Miller",
      "Baba Miller",
      "18"
    ],
    [
      "Jordan Miller",
      "Jordan Miller",
      "22"
    ],
    [
      "Yanic Konan Niederhäuser",
      "Yanic Konan Niederhäuser",
      "14"
    ],
    [
      "Jalen Pickett",
      "Jalen Pickett",
      "21"
    ],
    [
      "Kobe Sanders",
      "Kobe Sanders",
      "4"
    ],
    [
      "Max Strus",
      "Max Strus",
      "31"
    ],
    [
      "Keaton Wagler",
      "Keaton Wagler",
      "1"
    ]
  ],
  "Minnesota Timberwolves": [
    [
      "Donte DiVincenzo",
      "Donte DiVincenzo",
      "0"
    ],
    [
      "LaMelo Ball",
      "LaMelo Ball",
      "1"
    ],
    [
      "Jaden McDaniels",
      "Jaden McDaniels",
      "3"
    ],
    [
      "Terrence Shannon Jr.",
      "Terrence Shannon Jr.",
      "4"
    ],
    [
      "Anthony Edwards",
      "Anthony Edwards",
      "5"
    ],
    [
      "Jaylen Clark",
      "Jaylen Clark",
      "7"
    ],
    [
      "Bones Hyland",
      "Bones Hyland",
      "8"
    ],
    [
      "Cody Williams",
      "Cody Williams",
      "9"
    ],
    [
      "Ayo Dosunmu",
      "Ayo Dosunmu",
      "13"
    ],
    [
      "Zyon Pullin",
      "Zyon Pullin",
      "15"
    ],
    [
      "Joan Beringer",
      "Joan Beringer",
      "19"
    ],
    [
      "Johni Broome",
      "Johni Broome",
      "22"
    ],
    [
      "Jonathan Kuminga",
      "Jonathan Kuminga",
      "24"
    ],
    [
      "Rudy Gobert",
      "Rudy Gobert",
      "27"
    ],
    [
      "Isaiah Evans",
      "Isaiah Evans",
      "33"
    ],
    [
      "Trey Lyles",
      "Trey Lyles",
      "41"
    ],
    [
      "Rocco Zikarsky",
      "Rocco Zikarsky",
      "44"
    ]
  ],
  "Orlando Magic": [
    [
      "Anthony Black",
      "Anthony Black",
      "0"
    ],
    [
      "Jonathan Isaac",
      "Jonathan Isaac",
      "1"
    ],
    [
      "Jevon Carter",
      "Jevon Carter",
      "2"
    ],
    [
      "Desmond Bane",
      "Desmond Bane",
      "3"
    ],
    [
      "Jalen Suggs",
      "Jalen Suggs",
      "4"
    ],
    [
      "Paolo Banchero",
      "Paolo Banchero",
      "5"
    ],
    [
      "Jamal Cain",
      "Jamal Cain",
      "8"
    ],
    [
      "Nikola Vučević",
      "Nikola Vučević",
      "9"
    ],
    [
      "Jase Richardson",
      "Jase Richardson",
      "11"
    ],
    [
      "Colin Castleton",
      "Colin Castleton",
      "14"
    ],
    [
      "Franz Wagner",
      "Franz Wagner",
      "22"
    ],
    [
      "Tristan da Silva",
      "Tristan da Silva",
      "23"
    ],
    [
      "Izaiyah Nelson",
      "Izaiyah Nelson",
      "25"
    ],
    [
      "Alex Morales",
      "Alex Morales",
      "30"
    ],
    [
      "Wendell Carter Jr.",
      "Wendell Carter Jr.",
      "34"
    ],
    [
      "Goga Bitadze",
      "Goga Bitadze",
      "35"
    ],
    [
      "Noah Penda",
      "Noah Penda",
      "93"
    ]
  ]
};
Object.assign(window.JH_TEAM_PLAYER_ROSTERS, window.JH_NBA_PLAYERS || {});

// NHL : effectifs nationaux masculins de référence pour les maillots Canada et USA.
// Canada : roster Hockey Canada 2026 Olympic Winter Games ; USA : USA Hockey 2026 Olympic roster.
window.JH_NHL_PLAYERS = {
  "Canada": [
    ["Darcy Kuemper","Darcy Kuemper","35"],["Logan Thompson","Logan Thompson","48"],["Jordan Binnington","Jordan Binnington","50"],
    ["Travis Sanheim","Travis Sanheim","6"],["Devon Toews","Devon Toews","7"],["Cale Makar","Cale Makar","8"],["Thomas Harley","Thomas Harley","20"],
    ["Shea Theodore","Shea Theodore","27"],["Josh Morrissey","Josh Morrissey","44"],["Colton Parayko","Colton Parayko","55"],["Drew Doughty","Drew Doughty","89"],
    ["Sam Bennett","Sam Bennett","9"],["Nick Suzuki","Nick Suzuki","10"],["Sam Reinhart","Sam Reinhart","13"],["Bo Horvat","Bo Horvat","14"],
    ["Macklin Celebrini","Macklin Celebrini","17"],["Seth Jarvis","Seth Jarvis","24"],["Nathan MacKinnon","Nathan MacKinnon","29"],["Brandon Hagel","Brandon Hagel","38"],
    ["Tom Wilson","Tom Wilson","43"],["Mark Stone","Mark Stone","61"],["Brad Marchand","Brad Marchand","63"],["Sidney Crosby","Sidney Crosby","87"],
    ["Mitch Marner","Mitch Marner","93"],["Connor McDavid","Connor McDavid","97"]
  ],
  "USA": [
    ["Matt Boldy","Matt Boldy","12"],["Kyle Connor","Kyle Connor","81"],["Jack Eichel","Jack Eichel","9"],["Brock Faber","Brock Faber","14"],
    ["Jake Guentzel","Jake Guentzel","59"],["Noah Hanifin","Noah Hanifin","15"],["Connor Hellebuyck","Connor Hellebuyck","37"],["Jack Hughes","Jack Hughes","86"],
    ["Quinn Hughes","Quinn Hughes","43"],["Clayton Keller","Clayton Keller","91"],["Jackson LaCombe","Jackson LaCombe","2"],["Dylan Larkin","Dylan Larkin","21"],
    ["Auston Matthews","Auston Matthews","34"],["Charlie McAvoy","Charlie McAvoy","25"],["J.T. Miller","J.T. Miller","10"],["Brock Nelson","Brock Nelson","29"],
    ["Jake Oettinger","Jake Oettinger","30"],["Jake Sanderson","Jake Sanderson","85"],["Jaccob Slavin","Jaccob Slavin","74"],["Jeremy Swayman","Jeremy Swayman","1"],
    ["Tage Thompson","Tage Thompson","72"],["Brady Tkachuk","Brady Tkachuk","7"],["Matthew Tkachuk","Matthew Tkachuk","19"],["Vincent Trocheck","Vincent Trocheck","16"],
    ["Zach Werenski","Zach Werenski","8"]
  ]
};

// Alias par sport pour empêcher tout mélange avec les sélections nationales de football.
Object.entries(window.JH_NBA_PLAYERS||{}).forEach(([team,players])=>{window.JH_TEAM_PLAYER_ROSTERS[`NBA|${team}`]=players;});
Object.entries(window.JH_NFL_PLAYERS||{}).forEach(([team,players])=>{window.JH_TEAM_PLAYER_ROSTERS[`NFL|${team}`]=players;});
Object.entries(window.JH_RUGBY_UNION_PLAYERS||{}).forEach(([team,players])=>{window.JH_TEAM_PLAYER_ROSTERS[`RUGBY_UNION|${team}`]=players;});
Object.entries(window.JH_NHL_PLAYERS||{}).forEach(([team,players])=>{window.JH_TEAM_PLAYER_ROSTERS[`NHL|${team}`]=players;});

// MLB : rosters 40-Man officiels des quatre équipes présentes au catalogue (22/11/2026).
window.JH_MLB_PLAYERS = {
  "Baltimore Orioles": [
    [
      "Félix Bautista",
      "Félix Bautista",
      "74"
    ],
    [
      "Shane Baz",
      "Shane Baz",
      "34"
    ],
    [
      "Kyle Bradish",
      "Kyle Bradish",
      "38"
    ],
    [
      "Braxton Bragg",
      "Braxton Bragg",
      null
    ],
    [
      "Yennier Cano",
      "Yennier Cano",
      "78"
    ],
    [
      "Luis De León",
      "Luis De León",
      "81"
    ],
    [
      "Michael Forret",
      "Michael Forret",
      null
    ],
    [
      "Rico Garcia",
      "Rico Garcia",
      "50"
    ],
    [
      "Nestor German",
      "Nestor German",
      null
    ],
    [
      "Trey Gibson",
      "Trey Gibson",
      "43"
    ],
    [
      "Ryan Helsley",
      "Ryan Helsley",
      "21"
    ],
    [
      "Yaramil Hiraldo",
      "Yaramil Hiraldo",
      "76"
    ],
    [
      "Alex Hoppe",
      "Alex Hoppe",
      "26"
    ],
    [
      "Braden Nett",
      "Braden Nett",
      null
    ],
    [
      "Anthony Nunez",
      "Anthony Nunez",
      "66"
    ],
    [
      "Cade Povich",
      "Cade Povich",
      "37"
    ],
    [
      "Patrick Reilly",
      "Patrick Reilly",
      null
    ],
    [
      "Cam Sanders",
      "Cam Sanders",
      "73"
    ],
    [
      "Josh Walker",
      "Josh Walker",
      "61"
    ],
    [
      "Levi Wells",
      "Levi Wells",
      null
    ],
    [
      "Grant Wolfram",
      "Grant Wolfram",
      "48"
    ],
    [
      "Brandon Young",
      "Brandon Young",
      "63"
    ],
    [
      "Samuel Basallo",
      "Samuel Basallo",
      "29"
    ],
    [
      "Carlos Narváez",
      "Carlos Narváez",
      "75"
    ],
    [
      "Blaze Alexander",
      "Blaze Alexander",
      "23"
    ],
    [
      "Pete Alonso",
      "Pete Alonso",
      "25"
    ],
    [
      "Christian Encarnacion-Strand",
      "Christian Encarnacion-Strand",
      "32"
    ],
    [
      "Aron Estrada",
      "Aron Estrada",
      null
    ],
    [
      "Gunnar Henderson",
      "Gunnar Henderson",
      "2"
    ],
    [
      "Jackson Holliday",
      "Jackson Holliday",
      "7"
    ],
    [
      "Jeremiah Jackson",
      "Jeremiah Jackson",
      "82"
    ],
    [
      "Coby Mayo",
      "Coby Mayo",
      "16"
    ],
    [
      "Jordan Westburg",
      "Jordan Westburg",
      "11"
    ],
    [
      "Dylan Beavers",
      "Dylan Beavers",
      "12"
    ],
    [
      "Enrique Bradfield Jr.",
      "Enrique Bradfield Jr.",
      null
    ],
    [
      "Colton Cowser",
      "Colton Cowser",
      "17"
    ],
    [
      "Christian Franklin",
      "Christian Franklin",
      "27"
    ],
    [
      "Tyler O'Neill",
      "Tyler O'Neill",
      "9"
    ],
    [
      "Reed Trimble",
      "Reed Trimble",
      "62"
    ]
  ],
  "Los Angeles Angels": [
    [
      "Sam Aldegheri",
      "Sam Aldegheri",
      "61"
    ],
    [
      "Sam Bachman",
      "Sam Bachman",
      "40"
    ],
    [
      "Caden Dana",
      "Caden Dana",
      "36"
    ],
    [
      "Reid Detmers",
      "Reid Detmers",
      "48"
    ],
    [
      "Mitch Farris",
      "Mitch Farris",
      "70"
    ],
    [
      "José Fermin",
      "José Fermin",
      "65"
    ],
    [
      "Ryan Johnson",
      "Ryan Johnson",
      "32"
    ],
    [
      "Ben Joyce",
      "Ben Joyce",
      "44"
    ],
    [
      "Brett Kerry",
      "Brett Kerry",
      "71"
    ],
    [
      "Yusei Kikuchi",
      "Yusei Kikuchi",
      "16"
    ],
    [
      "George Klassen",
      "George Klassen",
      "58"
    ],
    [
      "Jack Kochanowicz",
      "Jack Kochanowicz",
      "41"
    ],
    [
      "Trevor Martin",
      "Trevor Martin",
      "54"
    ],
    [
      "Luke Murphy",
      "Luke Murphy",
      "72"
    ],
    [
      "Samy Natera Jr.",
      "Samy Natera Jr.",
      "52"
    ],
    [
      "Nicolo Pinazzi",
      "Nicolo Pinazzi",
      null
    ],
    [
      "Grayson Rodriguez",
      "Grayson Rodriguez",
      "21"
    ],
    [
      "Tayler Saucedo",
      "Tayler Saucedo",
      "55"
    ],
    [
      "Walbert Ureña",
      "Walbert Ureña",
      "57"
    ],
    [
      "Ryan Watson",
      "Ryan Watson",
      "56"
    ],
    [
      "Blake Weiman",
      "Blake Weiman",
      "68"
    ],
    [
      "Tyler Heineman",
      "Tyler Heineman",
      "31"
    ],
    [
      "Logan Porter",
      "Logan Porter",
      "33"
    ],
    [
      "Nacho Alvarez Jr.",
      "Nacho Alvarez Jr.",
      null
    ],
    [
      "Vaughn Grissom",
      "Vaughn Grissom",
      "5"
    ],
    [
      "Denzer Guzman",
      "Denzer Guzman",
      "23"
    ],
    [
      "Jace Jung",
      "Jace Jung",
      null
    ],
    [
      "Christian Moore",
      "Christian Moore",
      "4"
    ],
    [
      "Zach Neto",
      "Zach Neto",
      "9"
    ],
    [
      "Oswald Peraza",
      "Oswald Peraza",
      "2"
    ],
    [
      "Nolan Schanuel",
      "Nolan Schanuel",
      "18"
    ],
    [
      "Gustavo Campero",
      "Gustavo Campero",
      "51"
    ],
    [
      "Josh Lowe",
      "Josh Lowe",
      "3"
    ],
    [
      "Wade Meckler",
      "Wade Meckler",
      "53"
    ],
    [
      "Nelson Rada",
      "Nelson Rada",
      null
    ],
    [
      "Raudi Rodriguez",
      "Raudi Rodriguez",
      null
    ],
    [
      "Jose Siri",
      "Jose Siri",
      "28"
    ],
    [
      "Bryce Teodosio",
      "Bryce Teodosio",
      "22"
    ],
    [
      "Mike Trout",
      "Mike Trout",
      "27"
    ],
    [
      "Moisés Ballesteros",
      "Moisés Ballesteros",
      "13"
    ]
  ],
  "Boston Red Sox": [
    [
      "Brayan Bello",
      "Brayan Bello",
      "66"
    ],
    [
      "Jake Bennett",
      "Jake Bennett",
      "64"
    ],
    [
      "Aroldis Chapman",
      "Aroldis Chapman",
      "44"
    ],
    [
      "Kutter Crawford",
      "Kutter Crawford",
      "50"
    ],
    [
      "Garrett Crochet",
      "Garrett Crochet",
      "35"
    ],
    [
      "Alec Gamboa",
      "Alec Gamboa",
      "68"
    ],
    [
      "Tyron Guerrero",
      "Tyron Guerrero",
      "41"
    ],
    [
      "Tanner Houck",
      "Tanner Houck",
      "89"
    ],
    [
      "Erik Miller",
      "Erik Miller",
      "67"
    ],
    [
      "Jovani Morán",
      "Jovani Morán",
      "47"
    ],
    [
      "Wyatt Olds",
      "Wyatt Olds",
      "75"
    ],
    [
      "Jedixson Paez",
      "Jedixson Paez",
      "65"
    ],
    [
      "Tyler Samaniego",
      "Tyler Samaniego",
      "78"
    ],
    [
      "Justin Slaten",
      "Justin Slaten",
      "63"
    ],
    [
      "Ranger Suárez",
      "Ranger Suárez",
      "55"
    ],
    [
      "Payton Tolle",
      "Payton Tolle",
      "70"
    ],
    [
      "Greg Weissert",
      "Greg Weissert",
      "57"
    ],
    [
      "Garrett Whitlock",
      "Garrett Whitlock",
      "22"
    ],
    [
      "Nick Fortes",
      "Nick Fortes",
      "10"
    ],
    [
      "Adley Rutschman",
      "Adley Rutschman",
      "31"
    ],
    [
      "Jake Bauers",
      "Jake Bauers",
      "18"
    ],
    [
      "Triston Casas",
      "Triston Casas",
      "36"
    ],
    [
      "Willson Contreras",
      "Willson Contreras",
      "40"
    ],
    [
      "Caleb Durbin",
      "Caleb Durbin",
      "5"
    ],
    [
      "Curtis Mead",
      "Curtis Mead",
      "11"
    ],
    [
      "Andruw Monasterio",
      "Andruw Monasterio",
      "32"
    ],
    [
      "Anthony Seigler",
      "Anthony Seigler",
      "48"
    ],
    [
      "Nick Sogard",
      "Nick Sogard",
      "20"
    ],
    [
      "Trevor Story",
      "Trevor Story",
      "10"
    ],
    [
      "Wilyer Abreu",
      "Wilyer Abreu",
      "52"
    ],
    [
      "Roman Anthony",
      "Roman Anthony",
      "19"
    ],
    [
      "Kristian Campbell",
      "Kristian Campbell",
      "28"
    ],
    [
      "Jarren Duran",
      "Jarren Duran",
      "16"
    ],
    [
      "Ceddanne Rafaela",
      "Ceddanne Rafaela",
      "3"
    ],
    [
      "Eli White",
      "Eli White",
      "38"
    ],
    [
      "Mickey Gasper",
      "Mickey Gasper",
      "30"
    ],
    [
      "Romy Gonzalez",
      "Romy Gonzalez",
      "23"
    ],
    [
      "Jahmai Jones",
      "Jahmai Jones",
      "37"
    ],
    [
      "Masataka Yoshida",
      "Masataka Yoshida",
      "7"
    ]
  ],
  "New York Yankees": [
    [
      "Brendan Beck",
      "Brendan Beck",
      "89"
    ],
    [
      "David Bednar",
      "David Bednar",
      "53"
    ],
    [
      "Kyle Carr",
      "Kyle Carr",
      null
    ],
    [
      "Kervin Castro",
      "Kervin Castro",
      "74"
    ],
    [
      "Angel Chivilli",
      "Angel Chivilli",
      "57"
    ],
    [
      "Gerrit Cole",
      "Gerrit Cole",
      "45"
    ],
    [
      "Yerry De los Santos",
      "Yerry De los Santos",
      "73"
    ],
    [
      "Max Fried",
      "Max Fried",
      "54"
    ],
    [
      "Chase Hampton",
      "Chase Hampton",
      null
    ],
    [
      "Bradley Hanner",
      "Bradley Hanner",
      "93"
    ],
    [
      "Brent Headrick",
      "Brent Headrick",
      "47"
    ],
    [
      "Carlos Lagrange",
      "Carlos Lagrange",
      null
    ],
    [
      "Carlos Rodón",
      "Carlos Rodón",
      "55"
    ],
    [
      "Elmer Rodríguez",
      "Elmer Rodríguez",
      "71"
    ],
    [
      "Cam Schlittler",
      "Cam Schlittler",
      "31"
    ],
    [
      "Clarke Schmidt",
      "Clarke Schmidt",
      "36"
    ],
    [
      "Will Warren",
      "Will Warren",
      "29"
    ],
    [
      "Ryan Weathers",
      "Ryan Weathers",
      "40"
    ],
    [
      "J.C. Escarra",
      "J.C. Escarra",
      "25"
    ],
    [
      "Ali Sánchez",
      "Ali Sánchez",
      "39"
    ],
    [
      "Austin Wells",
      "Austin Wells",
      "28"
    ],
    [
      "José Caballero",
      "José Caballero",
      "72"
    ],
    [
      "Luis García Jr.",
      "Luis García Jr.",
      "26"
    ],
    [
      "George Lombard Jr.",
      "George Lombard Jr.",
      "96"
    ],
    [
      "Marco Luciano",
      "Marco Luciano",
      null
    ],
    [
      "Ryan McMahon",
      "Ryan McMahon",
      "19"
    ],
    [
      "Anthony Volpe",
      "Anthony Volpe",
      "11"
    ],
    [
      "Cody Bellinger",
      "Cody Bellinger",
      "35"
    ],
    [
      "Jasson Domínguez",
      "Jasson Domínguez",
      "24"
    ],
    [
      "Spencer Jones",
      "Spencer Jones",
      "78"
    ],
    [
      "Aaron Judge",
      "Aaron Judge",
      "99"
    ],
    [
      "Garrett Martin",
      "Garrett Martin",
      null
    ],
    [
      "Heliot Ramos",
      "Heliot Ramos",
      "34"
    ],
    [
      "Max Schuemann",
      "Max Schuemann",
      "30"
    ],
    [
      "Ben Rice",
      "Ben Rice",
      "22"
    ],
    [
      "Giancarlo Stanton",
      "Giancarlo Stanton",
      "27"
    ]
  ]
};
Object.entries(window.JH_MLB_PLAYERS).forEach(([team,roster])=>{window.JH_TEAM_PLAYER_ROSTERS[`MLB|${team}`]=roster;});

// GAA : panels seniors de football 2026, 26 joueurs par comté, d'après les annonces de championnat 2026.
window.JH_GAA_PLAYERS = {
  "Mayo": [
    [
      "Rob Hennelly",
      "Rob Hennelly",
      "1"
    ],
    [
      "Jack Coyne",
      "Jack Coyne",
      "2"
    ],
    [
      "Rory Brickenden",
      "Rory Brickenden",
      "3"
    ],
    [
      "Fenton Kelly",
      "Fenton Kelly",
      "4"
    ],
    [
      "Sam Callinan",
      "Sam Callinan",
      "5"
    ],
    [
      "Michael Plunkett",
      "Michael Plunkett",
      "6"
    ],
    [
      "Paddy Durcan",
      "Paddy Durcan",
      "7"
    ],
    [
      "Bob Tuohy",
      "Bob Tuohy",
      "8"
    ],
    [
      "David McBrien",
      "David McBrien",
      "9"
    ],
    [
      "Jack Carney",
      "Jack Carney",
      "10"
    ],
    [
      "Ryan O Donoghue",
      "Ryan O Donoghue",
      "11"
    ],
    [
      "Hugh O Loughlin",
      "Hugh O Loughlin",
      "12"
    ],
    [
      "Cian McHale",
      "Cian McHale",
      "13"
    ],
    [
      "Aidan O Shea",
      "Aidan O Shea",
      "14"
    ],
    [
      "Paul Towey",
      "Paul Towey",
      "15"
    ],
    [
      "Jack Livinstone",
      "Jack Livinstone",
      "16"
    ],
    [
      "John McMonagle",
      "John McMonagle",
      "17"
    ],
    [
      "Donnacaha McHugh",
      "Donnacaha McHugh",
      "18"
    ],
    [
      "Stephen Coen",
      "Stephen Coen",
      "19"
    ],
    [
      "Sean Morahan",
      "Sean Morahan",
      "20"
    ],
    [
      "Jordan Flynn",
      "Jordan Flynn",
      "21"
    ],
    [
      "Conal Dawson",
      "Conal Dawson",
      "22"
    ],
    [
      "Fergal Boland",
      "Fergal Boland",
      "23"
    ],
    [
      "Diarmuid O Connor",
      "Diarmuid O Connor",
      "24"
    ],
    [
      "Tommy Conroy",
      "Tommy Conroy",
      "25"
    ],
    [
      "Cillian O Connor",
      "Cillian O Connor",
      "26"
    ]
  ],
  "Sligo": [
    [
      "Aidan Devaney",
      "Aidan Devaney",
      "1"
    ],
    [
      "Tommy Ross",
      "Tommy Ross",
      "2"
    ],
    [
      "Conor Sheridan",
      "Conor Sheridan",
      "3"
    ],
    [
      "Luke Casserly",
      "Luke Casserly",
      "4"
    ],
    [
      "Canice Mulligan",
      "Canice Mulligan",
      "5"
    ],
    [
      "Jack Lavin",
      "Jack Lavin",
      "6"
    ],
    [
      "Paul Kilcoyne",
      "Paul Kilcoyne",
      "7"
    ],
    [
      "Darragh Cummins",
      "Darragh Cummins",
      "8"
    ],
    [
      "Luke Towey",
      "Luke Towey",
      "9"
    ],
    [
      "Lee Deignan",
      "Lee Deignan",
      "10"
    ],
    [
      "Alan McLoughlin",
      "Alan McLoughlin",
      "11"
    ],
    [
      "Cian Lally",
      "Cian Lally",
      "12"
    ],
    [
      "Joshua Flynn",
      "Joshua Flynn",
      "13"
    ],
    [
      "Niall Murphy",
      "Niall Murphy",
      "14"
    ],
    [
      "Shane Deignan",
      "Shane Deignan",
      "15"
    ],
    [
      "Keelan Harte",
      "Keelan Harte",
      "16"
    ],
    [
      "Paul McNamara",
      "Paul McNamara",
      "17"
    ],
    [
      "Michael Lavin",
      "Michael Lavin",
      "18"
    ],
    [
      "Rossa Sloyan",
      "Rossa Sloyan",
      "19"
    ],
    [
      "Daire O’Boyle",
      "Daire O’Boyle",
      "20"
    ],
    [
      "Gavin Gorman",
      "Gavin Gorman",
      "21"
    ],
    [
      "Conor Johnston",
      "Conor Johnston",
      "22"
    ],
    [
      "Kyle Cawley",
      "Kyle Cawley",
      "23"
    ],
    [
      "David Quinn",
      "David Quinn",
      "24"
    ],
    [
      "James Donlon",
      "James Donlon",
      "25"
    ],
    [
      "Pat Spillane",
      "Pat Spillane",
      "26"
    ]
  ],
  "Roscommon": [
    [
      "Conor Carroll",
      "Conor Carroll",
      "1"
    ],
    [
      "Patrick Gavin",
      "Patrick Gavin",
      "2"
    ],
    [
      "Caelim Keogh",
      "Caelim Keogh",
      "3"
    ],
    [
      "Eoin McCormack",
      "Eoin McCormack",
      "4"
    ],
    [
      "Eoin Ward",
      "Eoin Ward",
      "5"
    ],
    [
      "Ronan Daly",
      "Ronan Daly",
      "6"
    ],
    [
      "Senan Lambe",
      "Senan Lambe",
      "7"
    ],
    [
      "Keith Doyle",
      "Keith Doyle",
      "8"
    ],
    [
      "Conor Ryan",
      "Conor Ryan",
      "9"
    ],
    [
      "Dylan Ruane",
      "Dylan Ruane",
      "10"
    ],
    [
      "Enda Smith",
      "Enda Smith",
      "11"
    ],
    [
      "Darragh Heneghan",
      "Darragh Heneghan",
      "12"
    ],
    [
      "Diarmuid Murtagh",
      "Diarmuid Murtagh",
      "13"
    ],
    [
      "Daire Cregg",
      "Daire Cregg",
      "14"
    ],
    [
      "Robert Heneghan",
      "Robert Heneghan",
      "15"
    ],
    [
      "Aaron Brady",
      "Aaron Brady",
      "16"
    ],
    [
      "Niall Higgins",
      "Niall Higgins",
      "17"
    ],
    [
      "Colm Neary",
      "Colm Neary",
      "18"
    ],
    [
      "Robbie Dolan",
      "Robbie Dolan",
      "19"
    ],
    [
      "Shane Cunnane",
      "Shane Cunnane",
      "20"
    ],
    [
      "Jack Duggan",
      "Jack Duggan",
      "21"
    ],
    [
      "Paul Carey",
      "Paul Carey",
      "22"
    ],
    [
      "Ben O’Carroll",
      "Ben O’Carroll",
      "23"
    ],
    [
      "Conor Hand",
      "Conor Hand",
      "24"
    ],
    [
      "Eoin Colleran",
      "Eoin Colleran",
      "25"
    ],
    [
      "Ciaran Lennon",
      "Ciaran Lennon",
      "26"
    ]
  ],
  "Offaly": [
    [
      "Conor Melia",
      "Conor Melia",
      "1"
    ],
    [
      "Shane O’Toole Greene",
      "Shane O’Toole Greene",
      "2"
    ],
    [
      "David Dempsey",
      "David Dempsey",
      "3"
    ],
    [
      "Lee Pearson",
      "Lee Pearson",
      "4"
    ],
    [
      "Cormac Egan",
      "Cormac Egan",
      "5"
    ],
    [
      "Diarmuid Egan",
      "Diarmuid Egan",
      "6"
    ],
    [
      "Daire McDaid",
      "Daire McDaid",
      "7"
    ],
    [
      "Jack McEvoy",
      "Jack McEvoy",
      "8"
    ],
    [
      "Jordan Hayes",
      "Jordan Hayes",
      "9"
    ],
    [
      "Marcas Dalton",
      "Marcas Dalton",
      "10"
    ],
    [
      "Keith O’Neill",
      "Keith O’Neill",
      "11"
    ],
    [
      "Rory Egan",
      "Rory Egan",
      "12"
    ],
    [
      "Dylan Hyland",
      "Dylan Hyland",
      "13"
    ],
    [
      "Shane Tierney",
      "Shane Tierney",
      "14"
    ],
    [
      "Darragh Flynn",
      "Darragh Flynn",
      "15"
    ],
    [
      "Sean O’Toole",
      "Sean O’Toole",
      "16"
    ],
    [
      "Aidan Bracken",
      "Aidan Bracken",
      "17"
    ],
    [
      "Conor Dunican",
      "Conor Dunican",
      "18"
    ],
    [
      "Nathan Poland",
      "Nathan Poland",
      "19"
    ],
    [
      "Kyle Higgins",
      "Kyle Higgins",
      "20"
    ],
    [
      "Jack Bryant",
      "Jack Bryant",
      "21"
    ],
    [
      "Eoin Sawyer",
      "Eoin Sawyer",
      "22"
    ],
    [
      "Harry Plunkett",
      "Harry Plunkett",
      "23"
    ],
    [
      "Sean Conway",
      "Sean Conway",
      "24"
    ],
    [
      "Eoin Dunne",
      "Eoin Dunne",
      "25"
    ],
    [
      "Cathal Ryan",
      "Cathal Ryan",
      "26"
    ]
  ],
  "Laois": [
    [
      "Killian Roche",
      "Killian Roche",
      "1"
    ],
    [
      "Jack Lacey",
      "Jack Lacey",
      "2"
    ],
    [
      "Trevor Collins",
      "Trevor Collins",
      "3"
    ],
    [
      "Alex Mohan",
      "Alex Mohan",
      "4"
    ],
    [
      "Pa Kirwan",
      "Pa Kirwan",
      "5"
    ],
    [
      "Aaron McEvoy",
      "Aaron McEvoy",
      "6"
    ],
    [
      "Simon Fingleton",
      "Simon Fingleton",
      "7"
    ],
    [
      "Ciaran Burke",
      "Ciaran Burke",
      "8"
    ],
    [
      "Conor Heffernan",
      "Conor Heffernan",
      "9"
    ],
    [
      "Kevin Swayne",
      "Kevin Swayne",
      "10"
    ],
    [
      "Ronan Coffey",
      "Ronan Coffey",
      "11"
    ],
    [
      "Patrick O’Sullivan",
      "Patrick O’Sullivan",
      "12"
    ],
    [
      "Brian Byrne",
      "Brian Byrne",
      "13"
    ],
    [
      "Daragh Galvin",
      "Daragh Galvin",
      "14"
    ],
    [
      "Evan O’Carroll",
      "Evan O’Carroll",
      "15"
    ],
    [
      "Matthew Byron",
      "Matthew Byron",
      "16"
    ],
    [
      "Darren Brennan",
      "Darren Brennan",
      "17"
    ],
    [
      "Killian Byrne",
      "Killian Byrne",
      "18"
    ],
    [
      "Niall Corbet",
      "Niall Corbet",
      "19"
    ],
    [
      "Jake Darcy",
      "Jake Darcy",
      "20"
    ],
    [
      "Ben Dempsey",
      "Ben Dempsey",
      "21"
    ],
    [
      "Mikie Dempsey",
      "Mikie Dempsey",
      "22"
    ],
    [
      "Paul Kingston",
      "Paul Kingston",
      "23"
    ],
    [
      "Rioghan Murphy",
      "Rioghan Murphy",
      "24"
    ],
    [
      "Cian Nolan",
      "Cian Nolan",
      "25"
    ],
    [
      "Robert Tyrrell",
      "Robert Tyrrell",
      "26"
    ]
  ],
  "Carlow": [
    [
      "Ben McCarron",
      "Ben McCarron",
      "1"
    ],
    [
      "Colin Byrne",
      "Colin Byrne",
      "2"
    ],
    [
      "Niall Roche",
      "Niall Roche",
      "3"
    ],
    [
      "Paddy McDonnell",
      "Paddy McDonnell",
      "4"
    ],
    [
      "John Phiri",
      "John Phiri",
      "5"
    ],
    [
      "Dara Curran",
      "Dara Curran",
      "6"
    ],
    [
      "Padraig Bolger",
      "Padraig Bolger",
      "7"
    ],
    [
      "Mark Furey",
      "Mark Furey",
      "8"
    ],
    [
      "Conor Doyle",
      "Conor Doyle",
      "9"
    ],
    [
      "Lee Walker",
      "Lee Walker",
      "10"
    ],
    [
      "Colm Hulton",
      "Colm Hulton",
      "11"
    ],
    [
      "Mikey Bambrick",
      "Mikey Bambrick",
      "12"
    ],
    [
      "Liam Gavin",
      "Liam Gavin",
      "13"
    ],
    [
      "Christopher Blake",
      "Christopher Blake",
      "14"
    ],
    [
      "Sean Murphy",
      "Sean Murphy",
      "15"
    ],
    [
      "Johnny Furey",
      "Johnny Furey",
      "16"
    ],
    [
      "Lee Moore",
      "Lee Moore",
      "17"
    ],
    [
      "John Murphy",
      "John Murphy",
      "18"
    ],
    [
      "Tadgh Roche",
      "Tadgh Roche",
      "19"
    ],
    [
      "Ross Dunphy",
      "Ross Dunphy",
      "20"
    ],
    [
      "Adam Burgess",
      "Adam Burgess",
      "21"
    ],
    [
      "Kyle Nolan",
      "Kyle Nolan",
      "22"
    ],
    [
      "Jamie Clarke",
      "Jamie Clarke",
      "23"
    ],
    [
      "Kevin Murphy",
      "Kevin Murphy",
      "24"
    ],
    [
      "Eoghan Ruth",
      "Eoghan Ruth",
      "25"
    ],
    [
      "Aaron Amond",
      "Aaron Amond",
      "26"
    ]
  ],
  "Wicklow": [
    [
      "Mark Jackson",
      "Mark Jackson",
      "1"
    ],
    [
      "Tom Moran",
      "Tom Moran",
      "2"
    ],
    [
      "Conall Ó Gallchobhair",
      "Conall Ó Gallchobhair",
      "3"
    ],
    [
      "Gavin Fogarty",
      "Gavin Fogarty",
      "4"
    ],
    [
      "Cian Deering",
      "Cian Deering",
      "5"
    ],
    [
      "Matt Nolan",
      "Matt Nolan",
      "6"
    ],
    [
      "Jonathan Carlin",
      "Jonathan Carlin",
      "7"
    ],
    [
      "Dean Healy",
      "Dean Healy",
      "8"
    ],
    [
      "Jack Hardy",
      "Jack Hardy",
      "9"
    ],
    [
      "Joe Prendergast",
      "Joe Prendergast",
      "10"
    ],
    [
      "Padraig O Toole",
      "Padraig O Toole",
      "11"
    ],
    [
      "Christopher O Brien",
      "Christopher O Brien",
      "12"
    ],
    [
      "Oisin Mc Graynor",
      "Oisin Mc Graynor",
      "13"
    ],
    [
      "Kevin Quinn",
      "Kevin Quinn",
      "14"
    ],
    [
      "Eoin Darcy",
      "Eoin Darcy",
      "15"
    ],
    [
      "Cathal Fitzgerald",
      "Cathal Fitzgerald",
      "16"
    ],
    [
      "Brian Bohan",
      "Brian Bohan",
      "17"
    ],
    [
      "Jack Kirwan",
      "Jack Kirwan",
      "18"
    ],
    [
      "Cathal Baker",
      "Cathal Baker",
      "19"
    ],
    [
      "Mark Kenny",
      "Mark Kenny",
      "20"
    ],
    [
      "Conor Fee",
      "Conor Fee",
      "21"
    ],
    [
      "Jacques Mc Call",
      "Jacques Mc Call",
      "22"
    ],
    [
      "Liam O Neill",
      "Liam O Neill",
      "23"
    ],
    [
      "Eoin Murtagh",
      "Eoin Murtagh",
      "24"
    ],
    [
      "Sean Murphy",
      "Sean Murphy",
      "25"
    ],
    [
      "John Paul Nolan",
      "John Paul Nolan",
      "26"
    ]
  ],
  "Westmeath": [
    [
      "Jason Daly",
      "Jason Daly",
      "1"
    ],
    [
      "Daniel Scahill",
      "Daniel Scahill",
      "2"
    ],
    [
      "Charlie Drumm",
      "Charlie Drumm",
      "3"
    ],
    [
      "Tadhg Baker",
      "Tadhg Baker",
      "4"
    ],
    [
      "Ronan Wallace",
      "Ronan Wallace",
      "5"
    ],
    [
      "Shane Allen",
      "Shane Allen",
      "6"
    ],
    [
      "Matthew Whittaker",
      "Matthew Whittaker",
      "7"
    ],
    [
      "Brían Cooney",
      "Brían Cooney",
      "8"
    ],
    [
      "Ray Connellan",
      "Ray Connellan",
      "9"
    ],
    [
      "Kevin O’Sullivan",
      "Kevin O’Sullivan",
      "10"
    ],
    [
      "Sam McCartan",
      "Sam McCartan",
      "11"
    ],
    [
      "Conor Dillon",
      "Conor Dillon",
      "12"
    ],
    [
      "Tom Molloy",
      "Tom Molloy",
      "13"
    ],
    [
      "Luke Loughlin",
      "Luke Loughlin",
      "14"
    ],
    [
      "Brandon Kelly",
      "Brandon Kelly",
      "15"
    ],
    [
      "Jack Connaughton",
      "Jack Connaughton",
      "16"
    ],
    [
      "Adam Treanor",
      "Adam Treanor",
      "17"
    ],
    [
      "Shane Corcoran",
      "Shane Corcoran",
      "18"
    ],
    [
      "Robbie Forde",
      "Robbie Forde",
      "19"
    ],
    [
      "Senan Baker",
      "Senan Baker",
      "20"
    ],
    [
      "Devin Hill",
      "Devin Hill",
      "21"
    ],
    [
      "Shane Ormsby",
      "Shane Ormsby",
      "22"
    ],
    [
      "Danny McCartan",
      "Danny McCartan",
      "23"
    ],
    [
      "Eoghan McCabe",
      "Eoghan McCabe",
      "24"
    ],
    [
      "Jack Duncan",
      "Jack Duncan",
      "25"
    ],
    [
      "TJ Cox",
      "TJ Cox",
      "26"
    ]
  ],
  "Cork": [
    [
      "Micheál Aodh Martin",
      "Micheál Aodh Martin",
      "1"
    ],
    [
      "Maurice Shanley",
      "Maurice Shanley",
      "2"
    ],
    [
      "Daniel O’Mahony",
      "Daniel O’Mahony",
      "3"
    ],
    [
      "Seán Meehan",
      "Seán Meehan",
      "4"
    ],
    [
      "Brian O’Driscoll",
      "Brian O’Driscoll",
      "5"
    ],
    [
      "Tommy Walsh",
      "Tommy Walsh",
      "6"
    ],
    [
      "Luke Fahy",
      "Luke Fahy",
      "7"
    ],
    [
      "Colm O’Callaghan",
      "Colm O’Callaghan",
      "8"
    ],
    [
      "Ian Maguire",
      "Ian Maguire",
      "9"
    ],
    [
      "Paul Walsh",
      "Paul Walsh",
      "10"
    ],
    [
      "Mark Cronin",
      "Mark Cronin",
      "11"
    ],
    [
      "Seán McDonnell",
      "Seán McDonnell",
      "12"
    ],
    [
      "Chris Óg Jones",
      "Chris Óg Jones",
      "13"
    ],
    [
      "Dara Sheedy",
      "Dara Sheedy",
      "14"
    ],
    [
      "Steven Sherlock",
      "Steven Sherlock",
      "15"
    ],
    [
      "Patrick Doyle",
      "Patrick Doyle",
      "16"
    ],
    [
      "Tomas O’Mahony",
      "Tomas O’Mahony",
      "17"
    ],
    [
      "Rory Maguire",
      "Rory Maguire",
      "18"
    ],
    [
      "Darragh Cashman",
      "Darragh Cashman",
      "19"
    ],
    [
      "Seán Walsh",
      "Seán Walsh",
      "20"
    ],
    [
      "Conor Cahalane",
      "Conor Cahalane",
      "21"
    ],
    [
      "David Buckley",
      "David Buckley",
      "22"
    ],
    [
      "Ruairi Deane",
      "Ruairi Deane",
      "23"
    ],
    [
      "Eoghan McSweeney",
      "Eoghan McSweeney",
      "24"
    ],
    [
      "Conor Corbett",
      "Conor Corbett",
      "25"
    ],
    [
      "Brian Hurley",
      "Brian Hurley",
      "26"
    ]
  ],
  "Limerick": [
    [
      "Jeffrey Alfred",
      "Jeffrey Alfred",
      "1"
    ],
    [
      "Sean Kilbridge",
      "Sean Kilbridge",
      "2"
    ],
    [
      "Cormac Woulfe",
      "Cormac Woulfe",
      "3"
    ],
    [
      "Diarmuid Buckley",
      "Diarmuid Buckley",
      "4"
    ],
    [
      "Barry Coleman",
      "Barry Coleman",
      "5"
    ],
    [
      "Killian Ryan",
      "Killian Ryan",
      "6"
    ],
    [
      "Tony McCarthy",
      "Tony McCarthy",
      "7"
    ],
    [
      "Eliah Riordan",
      "Eliah Riordan",
      "8"
    ],
    [
      "Jack McCarthy",
      "Jack McCarthy",
      "9"
    ],
    [
      "Rory O Brien",
      "Rory O Brien",
      "10"
    ],
    [
      "Cillian Fahy",
      "Cillian Fahy",
      "11"
    ],
    [
      "Paul Maher",
      "Paul Maher",
      "12"
    ],
    [
      "Robbie Childs",
      "Robbie Childs",
      "13"
    ],
    [
      "James Naughton",
      "James Naughton",
      "14"
    ],
    [
      "Danny Neville",
      "Danny Neville",
      "15"
    ],
    [
      "Ronan McElligott",
      "Ronan McElligott",
      "16"
    ],
    [
      "Darren O Doherty",
      "Darren O Doherty",
      "17"
    ],
    [
      "Oran Collins",
      "Oran Collins",
      "18"
    ],
    [
      "Oisín Moss",
      "Oisín Moss",
      "19"
    ],
    [
      "Lee Woulfe",
      "Lee Woulfe",
      "20"
    ],
    [
      "Mark McCarthy",
      "Mark McCarthy",
      "21"
    ],
    [
      "Colm McSweeney",
      "Colm McSweeney",
      "22"
    ],
    [
      "Josh Dineen",
      "Josh Dineen",
      "23"
    ],
    [
      "Zach McCarthy",
      "Zach McCarthy",
      "24"
    ],
    [
      "Shane Cross",
      "Shane Cross",
      "25"
    ],
    [
      "Peter Nash",
      "Peter Nash",
      "26"
    ]
  ],
  "Waterford": [
    [
      "Simon Burns",
      "Simon Burns",
      "1"
    ],
    [
      "Tommy Martin",
      "Tommy Martin",
      "2"
    ],
    [
      "Billy Hynes",
      "Billy Hynes",
      "3"
    ],
    [
      "Conor Ó Cuirrín",
      "Conor Ó Cuirrín",
      "4"
    ],
    [
      "Glen Power",
      "Glen Power",
      "5"
    ],
    [
      "Adam Crawford",
      "Adam Crawford",
      "6"
    ],
    [
      "Conor Murray",
      "Conor Murray",
      "7"
    ],
    [
      "Michael O’Brien",
      "Michael O’Brien",
      "8"
    ],
    [
      "Michael Curry",
      "Michael Curry",
      "9"
    ],
    [
      "Donal Fitzgerald",
      "Donal Fitzgerald",
      "10"
    ],
    [
      "Aaron Ryan",
      "Aaron Ryan",
      "11"
    ],
    [
      "Liam Mulligan",
      "Liam Mulligan",
      "12"
    ],
    [
      "Dermot Ryan",
      "Dermot Ryan",
      "13"
    ],
    [
      "Stephen Curry",
      "Stephen Curry",
      "14"
    ],
    [
      "Alan Dunwoody",
      "Alan Dunwoody",
      "15"
    ],
    [
      "Paudie Hunt",
      "Paudie Hunt",
      "16"
    ],
    [
      "Darach Ó Cathasaigh",
      "Darach Ó Cathasaigh",
      "17"
    ],
    [
      "Adam Murray",
      "Adam Murray",
      "18"
    ],
    [
      "Darragh Walsh",
      "Darragh Walsh",
      "19"
    ],
    [
      "Caoimhín Walsh",
      "Caoimhín Walsh",
      "20"
    ],
    [
      "Cian Kiely",
      "Cian Kiely",
      "21"
    ],
    [
      "Kyle Flynn",
      "Kyle Flynn",
      "22"
    ],
    [
      "Conor Keating",
      "Conor Keating",
      "23"
    ],
    [
      "Colin Foley",
      "Colin Foley",
      "24"
    ],
    [
      "Conor Fennell",
      "Conor Fennell",
      "25"
    ],
    [
      "David Butler",
      "David Butler",
      "26"
    ]
  ],
  "Tipperary": [
    [
      "Shane Garland",
      "Shane Garland",
      "1"
    ],
    [
      "Jack O’Neill",
      "Jack O’Neill",
      "2"
    ],
    [
      "Eoin O’Connell",
      "Eoin O’Connell",
      "3"
    ],
    [
      "Manus McFadden",
      "Manus McFadden",
      "4"
    ],
    [
      "Kieran Costello",
      "Kieran Costello",
      "5"
    ],
    [
      "James Morris",
      "James Morris",
      "6"
    ],
    [
      "Charlie King",
      "Charlie King",
      "7"
    ],
    [
      "Joe Higgins",
      "Joe Higgins",
      "8"
    ],
    [
      "Paudie Feehan",
      "Paudie Feehan",
      "9"
    ],
    [
      "Eoin Craddock",
      "Eoin Craddock",
      "10"
    ],
    [
      "Michéal Freaney",
      "Michéal Freaney",
      "11"
    ],
    [
      "Killian Butler",
      "Killian Butler",
      "12"
    ],
    [
      "Cian Smith",
      "Cian Smith",
      "13"
    ],
    [
      "Sean O’Connor",
      "Sean O’Connor",
      "14"
    ],
    [
      "Daithi Hogan",
      "Daithi Hogan",
      "15"
    ],
    [
      "Robbie McGrath",
      "Robbie McGrath",
      "16"
    ],
    [
      "Darragh Brennan",
      "Darragh Brennan",
      "17"
    ],
    [
      "Mark Corcoran",
      "Mark Corcoran",
      "18"
    ],
    [
      "Paddy Creedon",
      "Paddy Creedon",
      "19"
    ],
    [
      "Michael Lowry",
      "Michael Lowry",
      "20"
    ],
    [
      "JP Mboka Tansia",
      "JP Mboka Tansia",
      "21"
    ],
    [
      "Emmet Moloney",
      "Emmet Moloney",
      "22"
    ],
    [
      "Darragh O’Connor",
      "Darragh O’Connor",
      "23"
    ],
    [
      "Paddy O’Keeffe",
      "Paddy O’Keeffe",
      "24"
    ],
    [
      "Mark Russell",
      "Mark Russell",
      "25"
    ],
    [
      "Mark Stokes",
      "Mark Stokes",
      "26"
    ]
  ],
  "Armagh": [
    [
      "Blaine Hughes",
      "Blaine Hughes",
      "1"
    ],
    [
      "Peter McGrane",
      "Peter McGrane",
      "2"
    ],
    [
      "Aaron McKay",
      "Aaron McKay",
      "3"
    ],
    [
      "Paddy Burns",
      "Paddy Burns",
      "4"
    ],
    [
      "Ross McQuillan",
      "Ross McQuillan",
      "5"
    ],
    [
      "Gareth Murphy",
      "Gareth Murphy",
      "6"
    ],
    [
      "Jarly Og Burns",
      "Jarly Og Burns",
      "7"
    ],
    [
      "Tiernan Kelly",
      "Tiernan Kelly",
      "8"
    ],
    [
      "Ben Crealey",
      "Ben Crealey",
      "9"
    ],
    [
      "Greg McCabe",
      "Greg McCabe",
      "10"
    ],
    [
      "Darragh McMullan",
      "Darragh McMullan",
      "11"
    ],
    [
      "Tomas McCormack",
      "Tomas McCormack",
      "12"
    ],
    [
      "Cian McConville",
      "Cian McConville",
      "13"
    ],
    [
      "Jason Duffy",
      "Jason Duffy",
      "14"
    ],
    [
      "Oisin Conaty",
      "Oisin Conaty",
      "15"
    ],
    [
      "Ethan Rafferty",
      "Ethan Rafferty",
      "16"
    ],
    [
      "Barry McCambridge",
      "Barry McCambridge",
      "17"
    ],
    [
      "Joe McElroy",
      "Joe McElroy",
      "18"
    ],
    [
      "Ryan Duffy",
      "Ryan Duffy",
      "19"
    ],
    [
      "Callum O’Neill",
      "Callum O’Neill",
      "20"
    ],
    [
      "Daniel Magee",
      "Daniel Magee",
      "21"
    ],
    [
      "Conor Turbitt",
      "Conor Turbitt",
      "22"
    ],
    [
      "Oisin O’Neill",
      "Oisin O’Neill",
      "23"
    ],
    [
      "Fergal O’Brien",
      "Fergal O’Brien",
      "24"
    ],
    [
      "Rory Grugan",
      "Rory Grugan",
      "25"
    ],
    [
      "Andrew Murnin",
      "Andrew Murnin",
      "26"
    ]
  ],
  "Tyrone": [
    [
      "Niall Morgan",
      "Niall Morgan",
      "1"
    ],
    [
      "Cormac Quinn",
      "Cormac Quinn",
      "2"
    ],
    [
      "Peter Teague",
      "Peter Teague",
      "3"
    ],
    [
      "Niall Devlin",
      "Niall Devlin",
      "4"
    ],
    [
      "Frank Burns",
      "Frank Burns",
      "5"
    ],
    [
      "Joey Clarke",
      "Joey Clarke",
      "6"
    ],
    [
      "Michael McKernan",
      "Michael McKernan",
      "7"
    ],
    [
      "Brian Kennedy",
      "Brian Kennedy",
      "8"
    ],
    [
      "Conn Kilpatrick",
      "Conn Kilpatrick",
      "9"
    ],
    [
      "Seanie O’Donnell",
      "Seanie O’Donnell",
      "10"
    ],
    [
      "Ronan Cassidy",
      "Ronan Cassidy",
      "11"
    ],
    [
      "Ben McDonnell",
      "Ben McDonnell",
      "12"
    ],
    [
      "Darren McCurry",
      "Darren McCurry",
      "13"
    ],
    [
      "Mattie Donnelly",
      "Mattie Donnelly",
      "14"
    ],
    [
      "Daragh Canavan",
      "Daragh Canavan",
      "15"
    ],
    [
      "Oisin O’Kane",
      "Oisin O’Kane",
      "16"
    ],
    [
      "Michael Rafferty",
      "Michael Rafferty",
      "17"
    ],
    [
      "Aidan Clarke",
      "Aidan Clarke",
      "18"
    ],
    [
      "Ben Cullen",
      "Ben Cullen",
      "19"
    ],
    [
      "Kieran McGeary",
      "Kieran McGeary",
      "20"
    ],
    [
      "Dalaigh Jones",
      "Dalaigh Jones",
      "21"
    ],
    [
      "Aodhan Donaghy",
      "Aodhan Donaghy",
      "22"
    ],
    [
      "Ciaran Daly",
      "Ciaran Daly",
      "23"
    ],
    [
      "Lorcan McGarrity",
      "Lorcan McGarrity",
      "24"
    ],
    [
      "Eoin McElholm",
      "Eoin McElholm",
      "25"
    ],
    [
      "Ethan Jordan",
      "Ethan Jordan",
      "26"
    ]
  ],
  "Donegal": [
    [
      "Gavin Mulreany",
      "Gavin Mulreany",
      "1"
    ],
    [
      "Caolan McColgan",
      "Caolan McColgan",
      "2"
    ],
    [
      "Brendan McCole",
      "Brendan McCole",
      "3"
    ],
    [
      "Peadar Mogan",
      "Peadar Mogan",
      "4"
    ],
    [
      "Ryan McHugh",
      "Ryan McHugh",
      "5"
    ],
    [
      "Eoghan Bán Gallagher",
      "Eoghan Bán Gallagher",
      "6"
    ],
    [
      "Finnbarr Roarty",
      "Finnbarr Roarty",
      "7"
    ],
    [
      "Caolan McGonagle",
      "Caolan McGonagle",
      "8"
    ],
    [
      "Hugh McFadden",
      "Hugh McFadden",
      "9"
    ],
    [
      "Sean Martin",
      "Sean Martin",
      "10"
    ],
    [
      "Shane O’Donnell",
      "Shane O’Donnell",
      "11"
    ],
    [
      "Ciarán Moore",
      "Ciarán Moore",
      "12"
    ],
    [
      "Conor O’Donnell",
      "Conor O’Donnell",
      "13"
    ],
    [
      "Michael Murphy",
      "Michael Murphy",
      "14"
    ],
    [
      "Shea Malone",
      "Shea Malone",
      "15"
    ],
    [
      "Shaun Patton",
      "Shaun Patton",
      "16"
    ],
    [
      "Stephen McMenamin",
      "Stephen McMenamin",
      "17"
    ],
    [
      "Jamie Brennan",
      "Jamie Brennan",
      "18"
    ],
    [
      "Max Campbell",
      "Max Campbell",
      "19"
    ],
    [
      "Dáire Ó Baoill",
      "Dáire Ó Baoill",
      "20"
    ],
    [
      "Jason McGee",
      "Jason McGee",
      "21"
    ],
    [
      "Oisín Gallen",
      "Oisín Gallen",
      "22"
    ],
    [
      "Paul O’Hare",
      "Paul O’Hare",
      "23"
    ],
    [
      "Turlough Carr",
      "Turlough Carr",
      "24"
    ],
    [
      "Kieran Gallagher",
      "Kieran Gallagher",
      "25"
    ],
    [
      "Michael Langan",
      "Michael Langan",
      "26"
    ]
  ],
  "Dublin": [
    [
      "Evan Comerford",
      "Evan Comerford",
      "1"
    ],
    [
      "Greg McEneaney",
      "Greg McEneaney",
      "2"
    ],
    [
      "Nathan Doran",
      "Nathan Doran",
      "3"
    ],
    [
      "David Byrne",
      "David Byrne",
      "4"
    ],
    [
      "Seán MacMahon",
      "Seán MacMahon",
      "5"
    ],
    [
      "Charlie McMorrow",
      "Charlie McMorrow",
      "6"
    ],
    [
      "Eoin Kennedy",
      "Eoin Kennedy",
      "7"
    ],
    [
      "Ciaran Kilkenny",
      "Ciaran Kilkenny",
      "8"
    ],
    [
      "Brian Howard",
      "Brian Howard",
      "9"
    ],
    [
      "Seán Bugler",
      "Seán Bugler",
      "10"
    ],
    [
      "Con O'Callaghan",
      "Con O'Callaghan",
      "11"
    ],
    [
      "Niall Scully",
      "Niall Scully",
      "12"
    ],
    [
      "Paddy Small",
      "Paddy Small",
      "13"
    ],
    [
      "Killian McGinnis",
      "Killian McGinnis",
      "14"
    ],
    [
      "Cormac Costello",
      "Cormac Costello",
      "15"
    ],
    [
      "Hugh O'Sullivan",
      "Hugh O'Sullivan",
      "16"
    ],
    [
      "Tom Lahiff",
      "Tom Lahiff",
      "17"
    ],
    [
      "Liam Smith",
      "Liam Smith",
      "18"
    ],
    [
      "Lee Gannon",
      "Lee Gannon",
      "19"
    ],
    [
      "Cian Murphy",
      "Cian Murphy",
      "20"
    ],
    [
      "Seán Guiden",
      "Seán Guiden",
      "21"
    ],
    [
      "Ethan Dunne",
      "Ethan Dunne",
      "22"
    ],
    [
      "Páidí White",
      "Páidí White",
      "23"
    ],
    [
      "Niall O'Callaghan",
      "Niall O'Callaghan",
      "24"
    ],
    [
      "Luke Breathnach",
      "Luke Breathnach",
      "25"
    ],
    [
      "Tim Deering",
      "Tim Deering",
      "26"
    ]
  ],
  "Louth": [
    [
      "Niall McDonnell",
      "Niall McDonnell",
      "1"
    ],
    [
      "Tiernan Markey",
      "Tiernan Markey",
      "2"
    ],
    [
      "Emmet Carolan",
      "Emmet Carolan",
      "3"
    ],
    [
      "Donal McKenny",
      "Donal McKenny",
      "4"
    ],
    [
      "Tadhg McDonnell",
      "Tadhg McDonnell",
      "5"
    ],
    [
      "Leonard Grey",
      "Leonard Grey",
      "6"
    ],
    [
      "Seán Callaghan",
      "Seán Callaghan",
      "7"
    ],
    [
      "Conor Early",
      "Conor Early",
      "8"
    ],
    [
      "Ciarán Downey",
      "Ciarán Downey",
      "9"
    ],
    [
      "Conall McKeever",
      "Conall McKeever",
      "10"
    ],
    [
      "Sam Mulroy",
      "Sam Mulroy",
      "11"
    ],
    [
      "Conor Grimes",
      "Conor Grimes",
      "12"
    ],
    [
      "Ryan Burns",
      "Ryan Burns",
      "13"
    ],
    [
      "Dara McDonnell",
      "Dara McDonnell",
      "14"
    ],
    [
      "Tommy Durnin",
      "Tommy Durnin",
      "15"
    ],
    [
      "Conor Branigan",
      "Conor Branigan",
      "16"
    ],
    [
      "James Maguire",
      "James Maguire",
      "17"
    ],
    [
      "Ciarán Keenan",
      "Ciarán Keenan",
      "18"
    ],
    [
      "Conall McCaul",
      "Conall McCaul",
      "19"
    ],
    [
      "Craig Lennon",
      "Craig Lennon",
      "20"
    ],
    [
      "Ciarán Byrne",
      "Ciarán Byrne",
      "21"
    ],
    [
      "Seán Reynolds",
      "Seán Reynolds",
      "22"
    ],
    [
      "Dáire Nally",
      "Dáire Nally",
      "23"
    ],
    [
      "Paul Matthews",
      "Paul Matthews",
      "24"
    ],
    [
      "Anthony Williams",
      "Anthony Williams",
      "25"
    ],
    [
      "Kieran McArdle",
      "Kieran McArdle",
      "26"
    ],
    [
      "Padraic Tinnelly",
      "Padraic Tinnelly",
      "27"
    ]
  ],
  "Galway": [
    [
      "Connor Gleeson",
      "Connor Gleeson",
      "1"
    ],
    [
      "Jack Glynn",
      "Jack Glynn",
      "2"
    ],
    [
      "Cian Hernon",
      "Cian Hernon",
      "3"
    ],
    [
      "Liam Silke",
      "Liam Silke",
      "4"
    ],
    [
      "Dylan McHugh",
      "Dylan McHugh",
      "5"
    ],
    [
      "John Daly",
      "John Daly",
      "6"
    ],
    [
      "Kieran Molloy",
      "Kieran Molloy",
      "20"
    ],
    [
      "Paul Conroy",
      "Paul Conroy",
      "8"
    ],
    [
      "John Maher",
      "John Maher",
      "9"
    ],
    [
      "Céin D'Arcy",
      "Céin D'Arcy",
      "22"
    ],
    [
      "Finnian Ó Laoí",
      "Finnian Ó Laoí",
      "24"
    ],
    [
      "Cillian McDaid",
      "Cillian McDaid",
      "12"
    ],
    [
      "Robert Finnerty",
      "Robert Finnerty",
      "13"
    ],
    [
      "Matthew Tierney",
      "Matthew Tierney",
      "14"
    ],
    [
      "Shane Walsh",
      "Shane Walsh",
      "15"
    ],
    [
      "Conor Flaherty",
      "Conor Flaherty",
      "16"
    ],
    [
      "Brian Cogger",
      "Brian Cogger",
      "17"
    ],
    [
      "Seán Ó Maoilchiaráin",
      "Seán Ó Maoilchiaráin",
      "18"
    ],
    [
      "Johnny McGrath",
      "Johnny McGrath",
      "19"
    ],
    [
      "Seán Kelly",
      "Seán Kelly",
      "7"
    ],
    [
      "Fionn McDonagh",
      "Fionn McDonagh",
      "21"
    ],
    [
      "Daniel O'Flaherty",
      "Daniel O'Flaherty",
      "23"
    ],
    [
      "Shane McGrath",
      "Shane McGrath",
      "11"
    ],
    [
      "Jack Mullen",
      "Jack Mullen",
      "25"
    ],
    [
      "Damien Comer",
      "Damien Comer",
      "26"
    ],
    [
      "Liam Ó Conghaile",
      "Liam Ó Conghaile",
      "27"
    ]
  ],
  "Kildare": [
    [
      "Colm Moran",
      "Colm Moran",
      null
    ],
    [
      "James McGrath",
      "James McGrath",
      null
    ],
    [
      "Kevin Feely",
      "Kevin Feely",
      null
    ],
    [
      "Michael Spillane",
      "Michael Spillane",
      null
    ],
    [
      "Padraic Spillane",
      "Padraic Spillane",
      null
    ],
    [
      "Jimmy Hyland",
      "Jimmy Hyland",
      null
    ],
    [
      "Darragh Swords",
      "Darragh Swords",
      null
    ],
    [
      "Ryan Burke",
      "Ryan Burke",
      null
    ],
    [
      "Aaron O'Neill",
      "Aaron O'Neill",
      null
    ],
    [
      "Eoin Cully",
      "Eoin Cully",
      null
    ],
    [
      "Tommy Gill",
      "Tommy Gill",
      null
    ],
    [
      "James Harris",
      "James Harris",
      null
    ],
    [
      "Harry O'Neill",
      "Harry O'Neill",
      null
    ],
    [
      "Cian Burke",
      "Cian Burke",
      null
    ],
    [
      "Brian McLoughlin",
      "Brian McLoughlin",
      null
    ],
    [
      "Jack Robinson",
      "Jack Robinson",
      null
    ],
    [
      "Sam Doran",
      "Sam Doran",
      null
    ],
    [
      "Eoin Sheehan",
      "Eoin Sheehan",
      null
    ],
    [
      "Brendan Gibbons",
      "Brendan Gibbons",
      null
    ],
    [
      "Neil Flynn",
      "Neil Flynn",
      null
    ],
    [
      "Liam Kelly",
      "Liam Kelly",
      null
    ],
    [
      "Mark Dempsey",
      "Mark Dempsey",
      null
    ],
    [
      "Alex Beirne",
      "Alex Beirne",
      null
    ],
    [
      "Brian Byrne",
      "Brian Byrne",
      null
    ],
    [
      "Darragh Kirwan",
      "Darragh Kirwan",
      null
    ],
    [
      "Eoin Lawlor",
      "Eoin Lawlor",
      null
    ],
    [
      "Jack McKevitt",
      "Jack McKevitt",
      null
    ],
    [
      "Ryan Sinkey",
      "Ryan Sinkey",
      null
    ],
    [
      "Niall Dolan",
      "Niall Dolan",
      null
    ],
    [
      "Daragh Mangan",
      "Daragh Mangan",
      null
    ],
    [
      "Colm Dalton",
      "Colm Dalton",
      null
    ],
    [
      "Callum Bolton",
      "Callum Bolton",
      null
    ],
    [
      "Ben McCormack",
      "Ben McCormack",
      null
    ],
    [
      "Ben Loakman",
      "Ben Loakman",
      null
    ],
    [
      "Darragh Ryan",
      "Darragh Ryan",
      null
    ]
  ],
  "Kerry": [
    [
      "Shane Murphy",
      "Shane Murphy",
      "1"
    ],
    [
      "Evan Looney",
      "Evan Looney",
      "2"
    ],
    [
      "Jason Foley",
      "Jason Foley",
      "3"
    ],
    [
      "Dylan Casey",
      "Dylan Casey",
      "4"
    ],
    [
      "Tadhg Morley",
      "Tadhg Morley",
      "5"
    ],
    [
      "Mike Breen",
      "Mike Breen",
      "6"
    ],
    [
      "Graham O'Sullivan",
      "Graham O'Sullivan",
      "7"
    ],
    [
      "Mark O'Shea",
      "Mark O'Shea",
      "8"
    ],
    [
      "Diarmuid O'Connor",
      "Diarmuid O'Connor",
      "9"
    ],
    [
      "Micheál Burns",
      "Micheál Burns",
      "10"
    ],
    [
      "Keith Evans",
      "Keith Evans",
      "11"
    ],
    [
      "Cillian Trant",
      "Cillian Trant",
      "12"
    ],
    [
      "Tony Brosnan",
      "Tony Brosnan",
      "13"
    ],
    [
      "David Clifford",
      "David Clifford",
      "14"
    ],
    [
      "Dylan Geaney",
      "Dylan Geaney",
      "15"
    ],
    [
      "Seán Broderick",
      "Seán Broderick",
      "16"
    ],
    [
      "Eddie Healy",
      "Eddie Healy",
      "17"
    ],
    [
      "Tomás Kennedy",
      "Tomás Kennedy",
      "18"
    ],
    [
      "Killian Spillane",
      "Killian Spillane",
      "19"
    ],
    [
      "Donagh O'Sullivan",
      "Donagh O'Sullivan",
      "20"
    ],
    [
      "Paudie Clifford",
      "Paudie Clifford",
      "21"
    ],
    [
      "Joe O'Connor",
      "Joe O'Connor",
      "22"
    ],
    [
      "Brian Ó Beaglaoich",
      "Brian Ó Beaglaoich",
      "23"
    ],
    [
      "Seán O'Brien",
      "Seán O'Brien",
      "24"
    ],
    [
      "Joey Nagle",
      "Joey Nagle",
      "25"
    ],
    [
      "Barry Dan O'Sullivan",
      "Barry Dan O'Sullivan",
      "26"
    ]
  ],
  "Meath": [
    [
      "Seán Brennan",
      "Seán Brennan",
      "1"
    ],
    [
      "Donal Keogan",
      "Donal Keogan",
      "2"
    ],
    [
      "Seán Rafferty",
      "Seán Rafferty",
      "3"
    ],
    [
      "Brian O'Halloran",
      "Brian O'Halloran",
      "4"
    ],
    [
      "Seán Coffey",
      "Seán Coffey",
      "5"
    ],
    [
      "Bryan Menton",
      "Bryan Menton",
      "6"
    ],
    [
      "Ciarán Caulfield",
      "Ciarán Caulfield",
      "7"
    ],
    [
      "Cian McBride",
      "Cian McBride",
      "8"
    ],
    [
      "Adam O'Neill",
      "Adam O'Neill",
      "9"
    ],
    [
      "Jack O'Connor",
      "Jack O'Connor",
      "10"
    ],
    [
      "Jordan Morris",
      "Jordan Morris",
      "11"
    ],
    [
      "Cathal Hickey",
      "Cathal Hickey",
      "12"
    ],
    [
      "Mathew Costello",
      "Mathew Costello",
      "13"
    ],
    [
      "Eoghan Frayne",
      "Eoghan Frayne",
      "14"
    ],
    [
      "Aaron Lynch",
      "Aaron Lynch",
      "15"
    ],
    [
      "Billy Hogan",
      "Billy Hogan",
      "16"
    ],
    [
      "Ronan Ryan",
      "Ronan Ryan",
      "17"
    ],
    [
      "Killian Smyth",
      "Killian Smyth",
      "18"
    ],
    [
      "Charlie O'Connor",
      "Charlie O'Connor",
      "19"
    ],
    [
      "Ronan Jones",
      "Ronan Jones",
      "20"
    ],
    [
      "Keith Curtis",
      "Keith Curtis",
      "21"
    ],
    [
      "James Conlon",
      "James Conlon",
      "22"
    ],
    [
      "Oisín Martin",
      "Oisín Martin",
      "23"
    ],
    [
      "James McEntee",
      "James McEntee",
      "24"
    ],
    [
      "Jamie Murphy",
      "Jamie Murphy",
      "25"
    ],
    [
      "Seamus Lavin",
      "Seamus Lavin",
      "26"
    ]
  ],
  "Down": [
    [
      "Ronan Burns",
      "Ronan Burns",
      "1"
    ],
    [
      "Peter Fegan",
      "Peter Fegan",
      "2"
    ],
    [
      "Pierce Laverty",
      "Pierce Laverty",
      "3"
    ],
    [
      "Finn McElroy",
      "Finn McElroy",
      "4"
    ],
    [
      "Callum Rogers",
      "Callum Rogers",
      "5"
    ],
    [
      "Pearse McPolin",
      "Pearse McPolin",
      "6"
    ],
    [
      "Ryan Magill",
      "Ryan Magill",
      "7"
    ],
    [
      "Odhran Murdock",
      "Odhran Murdock",
      "8"
    ],
    [
      "Daniel Guinness",
      "Daniel Guinness",
      "9"
    ],
    [
      "Shane Annett",
      "Shane Annett",
      "10"
    ],
    [
      "Ceilum Doherty",
      "Ceilum Doherty",
      "11"
    ],
    [
      "Miceal Rooney",
      "Miceal Rooney",
      "12"
    ],
    [
      "John McGeough",
      "John McGeough",
      "13"
    ],
    [
      "Pat Havern",
      "Pat Havern",
      "14"
    ],
    [
      "Gareth McKibben",
      "Gareth McKibben",
      "15"
    ],
    [
      "John O'Hare",
      "John O'Hare",
      "16"
    ],
    [
      "Patrick Brooks",
      "Patrick Brooks",
      "17"
    ],
    [
      "Caolan Mooney",
      "Caolan Mooney",
      "18"
    ],
    [
      "Tom McCarroll",
      "Tom McCarroll",
      "19"
    ],
    [
      "Tom Close",
      "Tom Close",
      "20"
    ],
    [
      "Barry O’Hagan",
      "Barry O’Hagan",
      "21"
    ],
    [
      "Seamus Loughran",
      "Seamus Loughran",
      "22"
    ],
    [
      "Ruairi McCormack",
      "Ruairi McCormack",
      "23"
    ],
    [
      "Eamon Brown",
      "Eamon Brown",
      "24"
    ],
    [
      "Finn Murdock",
      "Finn Murdock",
      "25"
    ],
    [
      "Órán Cunningham",
      "Órán Cunningham",
      "26"
    ]
  ],
  "Fermanagh": [
    [
      "Seán McNally",
      "Seán McNally",
      "1"
    ],
    [
      "Luke Flanagan",
      "Luke Flanagan",
      "2"
    ],
    [
      "Oisin Smyth",
      "Oisin Smyth",
      "3"
    ],
    [
      "Shane McGullion",
      "Shane McGullion",
      "4"
    ],
    [
      "Jonathan Cassidy",
      "Jonathan Cassidy",
      "5"
    ],
    [
      "Ronan McCaffrey",
      "Ronan McCaffrey",
      "6"
    ],
    [
      "Josh Largo Elis",
      "Josh Largo Elis",
      "7"
    ],
    [
      "Conor McGee",
      "Conor McGee",
      "8"
    ],
    [
      "Stephen McGullion",
      "Stephen McGullion",
      "9"
    ],
    [
      "Brandon Horan",
      "Brandon Horan",
      "10"
    ],
    [
      "Seán Cassidy",
      "Seán Cassidy",
      "11"
    ],
    [
      "Joe McDade",
      "Joe McDade",
      "12"
    ],
    [
      "Conor Love",
      "Conor Love",
      "13"
    ],
    [
      "Darragh McGurn",
      "Darragh McGurn",
      "14"
    ],
    [
      "Ciaran Corrigan",
      "Ciaran Corrigan",
      "15"
    ],
    [
      "Ethan McCaffrey",
      "Ethan McCaffrey",
      "16"
    ],
    [
      "Garvan Jones",
      "Garvan Jones",
      "17"
    ],
    [
      "Ultan Kelm",
      "Ultan Kelm",
      "18"
    ],
    [
      "Mattie McDermott",
      "Mattie McDermott",
      "19"
    ],
    [
      "Declan McCusker",
      "Declan McCusker",
      "20"
    ],
    [
      "Oisín Kelm",
      "Oisín Kelm",
      "21"
    ],
    [
      "Cian O'Brien",
      "Cian O'Brien",
      "22"
    ],
    [
      "Lughaidh Donnelly",
      "Lughaidh Donnelly",
      "23"
    ],
    [
      "Jack Largo Elis",
      "Jack Largo Elis",
      "24"
    ],
    [
      "Conor O’Hanlon",
      "Conor O’Hanlon",
      "25"
    ],
    [
      "Aogán Kelm",
      "Aogán Kelm",
      "26"
    ]
  ],
  "Wexford": [
    [
      "Darragh Brooks",
      "Darragh Brooks",
      "1"
    ],
    [
      "Eoin Porter",
      "Eoin Porter",
      "2"
    ],
    [
      "Gavin Sheehan",
      "Gavin Sheehan",
      "3"
    ],
    [
      "Dylan Furlong",
      "Dylan Furlong",
      "4"
    ],
    [
      "Liam O'Connor",
      "Liam O'Connor",
      "5"
    ],
    [
      "Eoghan Nolan",
      "Eoghan Nolan",
      "6"
    ],
    [
      "Glen Malone",
      "Glen Malone",
      "7"
    ],
    [
      "Liam Coleman",
      "Liam Coleman",
      "8"
    ],
    [
      "Niall Hughes",
      "Niall Hughes",
      "9"
    ],
    [
      "Páiric Hughes",
      "Páiric Hughes",
      "10"
    ],
    [
      "Tom Byrne",
      "Tom Byrne",
      "11"
    ],
    [
      "Michael Kinsella",
      "Michael Kinsella",
      "12"
    ],
    [
      "Ben Brosnan",
      "Ben Brosnan",
      "13"
    ],
    [
      "Mark Rossiter",
      "Mark Rossiter",
      "14"
    ],
    [
      "Sean Nolan",
      "Sean Nolan",
      "15"
    ],
    [
      "William Gaul",
      "William Gaul",
      "16"
    ],
    [
      "Sean Barden",
      "Sean Barden",
      "17"
    ],
    [
      "Ciarán Hourihane",
      "Ciarán Hourihane",
      "18"
    ],
    [
      "Shane Doyle",
      "Shane Doyle",
      "19"
    ],
    [
      "Darragh Lyons",
      "Darragh Lyons",
      "20"
    ],
    [
      "Patrick Breen",
      "Patrick Breen",
      "21"
    ],
    [
      "Aaron Breen",
      "Aaron Breen",
      "22"
    ],
    [
      "Colum Feeney",
      "Colum Feeney",
      "23"
    ],
    [
      "Martin O'Connor",
      "Martin O'Connor",
      "24"
    ],
    [
      "Robbie Brooks",
      "Robbie Brooks",
      "25"
    ],
    [
      "Sean Ryan",
      "Sean Ryan",
      "26"
    ]
  ],
  "Antrim": [
    [
      "Cormac McFadden",
      "Cormac McFadden",
      "1"
    ],
    [
      "Ruairí McCormick",
      "Ruairí McCormick",
      "2"
    ],
    [
      "Niall O'Connor",
      "Niall O'Connor",
      "3"
    ],
    [
      "Stephen Rooney",
      "Stephen Rooney",
      "4"
    ],
    [
      "Oisín Donnelly",
      "Oisín Donnelly",
      "5"
    ],
    [
      "Joe Maskey",
      "Joe Maskey",
      "6"
    ],
    [
      "Gerard Walsh",
      "Gerard Walsh",
      "7"
    ],
    [
      "Ryan McCambridge",
      "Ryan McCambridge",
      "8"
    ],
    [
      "Paul Boyle",
      "Paul Boyle",
      "9"
    ],
    [
      "Conall Bohill",
      "Conall Bohill",
      "10"
    ],
    [
      "Keelan Molloy",
      "Keelan Molloy",
      "11"
    ],
    [
      "James McNaughton",
      "James McNaughton",
      "12"
    ],
    [
      "Jack McCloskey",
      "Jack McCloskey",
      "13"
    ],
    [
      "Conal Cunning",
      "Conal Cunning",
      "14"
    ],
    [
      "Joseph McLaughlin",
      "Joseph McLaughlin",
      "15"
    ],
    [
      "Seán Óg McLaren",
      "Seán Óg McLaren",
      "16"
    ],
    [
      "Ryan McNulty",
      "Ryan McNulty",
      "17"
    ],
    [
      "Rory McCloskey",
      "Rory McCloskey",
      "18"
    ],
    [
      "Eoin McFerran",
      "Eoin McFerran",
      "19"
    ],
    [
      "Scott Walsh",
      "Scott Walsh",
      "20"
    ],
    [
      "Cormac McKeown",
      "Cormac McKeown",
      "21"
    ],
    [
      "Ruairí Donaghy",
      "Ruairí Donaghy",
      "22"
    ],
    [
      "Ben McGarry",
      "Ben McGarry",
      "23"
    ],
    [
      "Kealan McCann",
      "Kealan McCann",
      "24"
    ],
    [
      "Morgan Nelson",
      "Morgan Nelson",
      "25"
    ],
    [
      "Caolán Ó Duibhfinn",
      "Caolán Ó Duibhfinn",
      "26"
    ]
  ],
  "Cavan": [
    [
      "Oisin Brady",
      "Oisin Brady",
      null
    ],
    [
      "Conor Casey",
      "Conor Casey",
      null
    ],
    [
      "Darragh Lovett",
      "Darragh Lovett",
      null
    ],
    [
      "Paddy Lynch",
      "Paddy Lynch",
      null
    ],
    [
      "Gearóid McKiernan",
      "Gearóid McKiernan",
      null
    ],
    [
      "Cormac O'Reilly",
      "Cormac O'Reilly",
      null
    ],
    [
      "Fionntán O'Reilly",
      "Fionntán O'Reilly",
      null
    ],
    [
      "Cian Shekleton",
      "Cian Shekleton",
      null
    ],
    [
      "Peter Corrigan",
      "Peter Corrigan",
      null
    ],
    [
      "Barry Donnelly",
      "Barry Donnelly",
      null
    ],
    [
      "Tiarnan Madden",
      "Tiarnan Madden",
      null
    ],
    [
      "Ciarán Brady",
      "Ciarán Brady",
      null
    ],
    [
      "Conor Brady",
      "Conor Brady",
      null
    ],
    [
      "Ryan Brady",
      "Ryan Brady",
      null
    ],
    [
      "Dara McVeety",
      "Dara McVeety",
      null
    ],
    [
      "Ryan Tobin",
      "Ryan Tobin",
      null
    ],
    [
      "Cormac Brady",
      "Cormac Brady",
      null
    ],
    [
      "Niall Carolan",
      "Niall Carolan",
      null
    ],
    [
      "Jason McLoughlin",
      "Jason McLoughlin",
      null
    ],
    [
      "Liam Brady",
      "Liam Brady",
      null
    ],
    [
      "Gary O'Rourke",
      "Gary O'Rourke",
      null
    ],
    [
      "Ryan Connolly",
      "Ryan Connolly",
      null
    ],
    [
      "Ben McGahan",
      "Ben McGahan",
      null
    ],
    [
      "Evan McIntyre",
      "Evan McIntyre",
      null
    ],
    [
      "Favour Shehu",
      "Favour Shehu",
      null
    ],
    [
      "Gerard Smith",
      "Gerard Smith",
      null
    ],
    [
      "Eoin Clarke",
      "Eoin Clarke",
      null
    ],
    [
      "Evan Crowe",
      "Evan Crowe",
      null
    ],
    [
      "Ryan Donohoe",
      "Ryan Donohoe",
      null
    ],
    [
      "Cian Madden",
      "Cian Madden",
      null
    ],
    [
      "Caoimhán McGovern",
      "Caoimhán McGovern",
      null
    ],
    [
      "Paddy Meade",
      "Paddy Meade",
      null
    ],
    [
      "Tristan Noack Hofmann",
      "Tristan Noack Hofmann",
      null
    ],
    [
      "Brían O'Connell",
      "Brían O'Connell",
      null
    ],
    [
      "Jensen Tynan",
      "Jensen Tynan",
      null
    ],
    [
      "Thomas Smith",
      "Thomas Smith",
      null
    ]
  ]
};
Object.entries(window.JH_GAA_PLAYERS).forEach(([team,roster])=>{window.JH_TEAM_PLAYER_ROSTERS[`GAA|${team}`]=roster;});

// Garde-fous : un effectif absent dans un sport ne doit jamais retomber sur celui d'un autre sport.
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_UNION|Kenya"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_UNION|Leinster"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_UNION|Melbourne Rebels"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_UNION|Munster"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_UNION|Queensland Maroons"] = [];
window.JH_TEAM_PLAYER_ROSTERS["GAA|Ireland"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|Brisbane Broncos"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|Canberra Raiders"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|Canterbury Bankstown Bulldogs"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|Cronulla Sharks"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|Dolphins"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|Gold Coast Titans"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|Hull FC"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|Manly Warringah Sea Eagles"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|Maori All Stars"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|Melbourne Storm"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|New South Wales Blues"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|New Zealand Kiwis"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|New Zealand Warriors"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|Newcastle Knights"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|North Queensland Cowboys"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|Parramatta Eels"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|Penrith Panthers"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|Queensland Maroons"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|Samoa"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|South Sydney Rabbitohs"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|St George Illawarra Dragons"] = [];
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|Sydney Roosters"] = [];

// Rugby Union 2026/27 : effectifs seniors Leinster et Munster.
window.JH_TEAM_PLAYER_ROSTERS[`RUGBY_UNION|Leinster`] = [["Alex Soroka","Alex Soroka",null],["Andrew Porter","Andrew Porter",null],["Conor O'Tighearnaigh","Conor O'Tighearnaigh",null],["Dan Sheehan","Dan Sheehan",null],["Gus McCarthy","Gus McCarthy",null],["Jack Boyle","Jack Boyle",null],["James Ryan","James Ryan",null],["James Culhane","James Culhane",null],["Joe McCarthy","Joe McCarthy",null],["Josh van der Flier","Josh van der Flier",null],["Niall Smyth","Niall Smyth",null],["Paddy McCarthy","Paddy McCarthy",null],["Peter Dooley","Peter Dooley",null],["RG Snyman","RG Snyman",null],["Ronan Kelleher","Ronan Kelleher",null],["Ryan Baird","Ryan Baird",null],["Scott Penny","Scott Penny",null],["Stephen Smyth","Stephen Smyth",null],["Tadhg Furlong","Tadhg Furlong",null],["Tom Clarkson","Tom Clarkson",null],["Andrew Osborne","Andrew Osborne",null],["Charlie Tector","Charlie Tector",null],["Cormac Foley","Cormac Foley",null],["Fintan Gunne","Fintan Gunne",null],["Garry Ringrose","Garry Ringrose",null],["Hugh Cooney","Hugh Cooney",null],["Hugo Keenan","Hugo Keenan",null],["Jamie Osborne","Jamie Osborne",null],["Jamison Gibson-Park","Jamison Gibson-Park",null],["Jimmy O'Brien","Jimmy O'Brien",null],["Joey Carbery","Joey Carbery",null],["Jordan Larmour","Jordan Larmour",null],["Joshua Kenny","Joshua Kenny",null],["Robbie Henshaw","Robbie Henshaw",null],["Sam Prendergast","Sam Prendergast",null],["Tommy O'Brien","Tommy O'Brien",null],["Brian Deeney","Brian Deeney",null],["Brian Deeny","Brian Deeny",null],["Caelan Doris","Caelan Doris",null],["Diarmuid Mangan","Diarmuid Mangan",null],["Jack Conan","Jack Conan",null],["Max Deegan","Max Deegan",null],["Oliver Coffey","Oliver Coffey",null]];
window.JH_TEAM_PLAYER_ROSTERS[`RUGBY_UNION|Munster`] = [["Michael Ala'alatoa","Michael Ala'alatoa",null],["Mike Haley","Mike Haley",null],["Ruadhán Quinn","Ruadhán Quinn",null],["Diarmuid Barron","Diarmuid Barron",null],["JJ Hanrahan","JJ Hanrahan",null],["Conor Ryan","Conor Ryan",null],["Lee Barron","Lee Barron",null],["John Hodnett","John Hodnett",null],["Kieran Ryan","Kieran Ryan",null],["Tadhg Beirne","Tadhg Beirne",null],["Dan Kelly","Dan Kelly",null],["Fineen Wycherley","Fineen Wycherley",null],["Tony Butler","Tony Butler",null],["Alex Kendellen","Alex Kendellen",null],["Josh Wycherley","Josh Wycherley",null],["Craig Casey","Craig Casey",null],["Diarmuid Kilgallen","Diarmuid Kilgallen",null],["Will Harrison","Will Harrison",null],["Gavin Coombes","Gavin Coombes",null],["Jeremy Loughman","Jeremy Loughman",null],["Jack Aungier","Jack Aungier",null],["Ethan Coughlan","Ethan Coughlan",null],["Shay McCarthy","Shay McCarthy",null],["Kieran Brookes","Kieran Brookes",null],["Jack Crowley","Jack Crowley",null],["Michael Milne","Michael Milne",null],["Max Clein","Max Clein",null],["Shane Daly","Shane Daly",null],["Alex Nankivell","Alex Nankivell",null],["Marnus van der Merwe","Marnus van der Merwe",null],["Mark Donnelly","Mark Donnelly",null],["Calvin Nash","Calvin Nash",null],["Edwin Edogbo","Edwin Edogbo",null],["Seán O'Brien","Seán O'Brien",null],["Seán Edogbo","Seán Edogbo",null],["Evan O'Connell","Evan O'Connell",null],["Tom Farrell","Tom Farrell",null],["Ben O'Connor","Ben O'Connor",null],["Ronan Foxe","Ronan Foxe",null],["Jack O'Donoghue","Jack O'Donoghue",null],["Tom Ahern","Tom Ahern",null],["Brian Gleeson","Brian Gleeson",null],["Ben O'Donovan","Ben O'Donovan",null]];

// Rugby League : sélections représentatives 2026 et effectif Hull FC 2026.
window.JH_TEAM_PLAYER_ROSTERS[`RUGBY_LEAGUE|New Zealand Kiwis`] = [["Erin Clark","Erin Clark",null],["James Fisher-Harris","James Fisher-Harris",null],["Dane Gagai","Dane Gagai",null],["Jahrome Hughes","Jahrome Hughes",null],["Jamayne Isaako","Jamayne Isaako",null],["Keano Kini","Keano Kini",null],["Jacob Laban","Jacob Laban",null],["Moses Leo","Moses Leo",null],["Moses Leota","Moses Leota",null],["Jeremy Marshall-King","Jeremy Marshall-King",null],["Te Maire Martin","Te Maire Martin",null],["Casey McLean","Casey McLean",null],["Ronaldo Mulitalo","Ronaldo Mulitalo",null],["Charnze Nicoll-Klokstad","Charnze Nicoll-Klokstad",null],["Briton Nikora","Briton Nikora",null],["Kodi Nikorima","Kodi Nikorima",null],["Isaiah Papali'i","Isaiah Papali'i",null],["Kalyn Ponga","Kalyn Ponga",null],["Scott Sorensen","Scott Sorensen",null],["Tanner Stowers-Smith","Tanner Stowers-Smith",null],["Joseph Tapine","Joseph Tapine",null],["Leo Thompson","Leo Thompson",null],["Naufahu Whyte","Naufahu Whyte",null],["Xavier Willison","Xavier Willison",null],["Phoenix Crossland","Phoenix Crossland",null]];
window.JH_TEAM_PLAYER_ROSTERS[`RUGBY_LEAGUE|Samoa`] = [["Shawn Blore Anae Ulesese","Shawn Blore Anae Ulesese",null],["Stephen Crichton","Stephen Crichton",null],["Sua Fa'alogo","Sua Fa'alogo",null],["Clayton Faulalo","Clayton Faulalo",null],["Chanel Harris-Tavita","Chanel Harris-Tavita",null],["Eddie Ieremia-Toeava","Eddie Ieremia-Toeava",null],["Benaiah Ioelu","Benaiah Ioelu",null],["Connelly Lemuelu","Connelly Lemuelu",null],["Spencer Leniu","Spencer Leniu",null],["Jarome Luai","Jarome Luai",null],["Francis Manuleleua","Francis Manuleleua",null],["Deine Mariner","Deine Mariner",null],["Ata Mariota","Ata Mariota",null],["Jermaine McEwen","Jermaine McEwen",null],["Francis Molo","Francis Molo",null],["Junior Paulo","Junior Paulo",null],["Pasami Saulo","Pasami Saulo",null],["Hamiso Tabuai-Fidow","Hamiso Tabuai-Fidow",null],["Izack Tago","Izack Tago",null],["Jazz Tevaga","Jazz Tevaga",null],["Brian To'o","Brian To'o",null],["Enari Tuala","Enari Tuala",null],["Ronald Volkman","Ronald Volkman",null]];
window.JH_TEAM_PLAYER_ROSTERS[`RUGBY_LEAGUE|Maori All Stars`] = [["Keano Kini","Keano Kini","1"],["Jojo Fifita","Jojo Fifita","2"],["Casey McLean","Casey McLean","3"],["Mawene Hiroti","Mawene Hiroti","4"],["Dallin Watene-Zelezniak","Dallin Watene-Zelezniak","5"],["Charnze Nicoll-Klokstad","Charnze Nicoll-Klokstad","6"],["Te Maire Martin","Te Maire Martin","7"],["Trey Mooney","Trey Mooney","8"],["Zach Dockar-Clay","Zach Dockar-Clay","9"],["Royce Hunt","Royce Hunt","15"],["Briton Nikora","Briton Nikora","11"],["Jacob Laban","Jacob Laban","12"],["James Fisher-Harris","James Fisher-Harris","13"],["Trent Toelau","Trent Toelau","14"],["Preston Riki","Preston Riki","16"],["Joe Chan","Joe Chan","17"],["Manaia Waitere","Manaia Waitere","18"],["Adam Pompey","Adam Pompey","19"],["Jesse Arthars","Jesse Arthars","20"]];
window.JH_TEAM_PLAYER_ROSTERS[`RUGBY_LEAGUE|New South Wales Blues`] = [["James Tedesco","James Tedesco","1"],["Brian To'o","Brian To'o","2"],["Stephen Crichton","Stephen Crichton","3"],["Kotoni Staggs","Kotoni Staggs","4"],["Tolutau Koula","Tolutau Koula","5"],["Mitchell Moses","Mitchell Moses","6"],["Nathan Cleary","Nathan Cleary","7"],["Addin Fonua-Blake","Addin Fonua-Blake","8"],["Reece Robson","Reece Robson","9"],["Mitchell Barnett","Mitchell Barnett","10"],["Hudson Young","Hudson Young","11"],["Haumole Olakau'atu","Haumole Olakau'atu","12"],["Isaah Yeo","Isaah Yeo","13"],["Cameron Murray","Cameron Murray","14"],["Victor Radley","Victor Radley","15"],["Jacob Saifiti","Jacob Saifiti","16"],["Blayke Brailey","Blayke Brailey","17"],["Ethan Strange","Ethan Strange","18"],["Casey McLean","Casey McLean","19"],["Dylan Lucas","Dylan Lucas","20"]];
window.JH_TEAM_PLAYER_ROSTERS[`RUGBY_LEAGUE|Queensland Maroons`] = [["Kalyn Ponga","Kalyn Ponga","1"],["Selwyn Cobbo","Selwyn Cobbo","2"],["Robert Toia","Robert Toia","3"],["Hamiso Tabuai-Fidow","Hamiso Tabuai-Fidow","4"],["Jojo Fifita","Jojo Fifita","5"],["Cameron Munster","Cameron Munster","6"],["Sam Walker","Sam Walker","7"],["Tom Flegler","Tom Flegler","8"],["Harry Grant","Harry Grant","9"],["Tino Fa'asuamaleaui","Tino Fa'asuamaleaui","10"],["Reuben Cotter","Reuben Cotter","11"],["Kurt Capewell","Kurt Capewell","12"],["Max Plath","Max Plath","13"],["Briton Nikora","Briton Nikora","14"],["Lindsay Collins","Lindsay Collins","15"],["Pat Carrigan","Pat Carrigan","16"],["Trent Loiero","Trent Loiero","17"],["Ezra Mam","Ezra Mam","18"],["Gehamat Shibasaki","Gehamat Shibasaki","19"],["Kulikefu Finefeuiaki","Kulikefu Finefeuiaki","20"]];
window.JH_TEAM_PLAYER_ROSTERS[`RUGBY_LEAGUE|Hull FC`] = [["Will Pryce","Will Pryce","1"],["Harvey Barron","Harvey Barron","2"],["Davy Litten","Davy Litten","3"],["Zak Hardaker","Zak Hardaker","4"],["Lewis Martin","Lewis Martin","5"],["Jake Arthur","Jake Arthur","6"],["Aidan Sezer","Aidan Sezer","7"],["Herman Ese'ese","Herman Ese'ese","8"],["Amir Bourouh","Amir Bourouh","9"],["Harvie Hill","Harvie Hill","10"],["Joe Batchelor","Joe Batchelor","11"],["Jed Cartwright","Jed Cartwright","12"],["John Asiata","John Asiata","13"],["Cade Cust","Cade Cust","14"],["James Bell","James Bell","15"],["Sam Lisone","Sam Lisone","16"],["Liam Knight","Liam Knight","17"],["Ligi Sao","Ligi Sao","18"],["Tom Briscoe","Tom Briscoe","19"],["Yusuf Aydin","Yusuf Aydin","20"],["Arthur Romano","Arthur Romano","21"],["Connor Bailey","Connor Bailey","22"],["Brad Fash","Brad Fash","23"],["Logan Moy","Logan Moy","24"],["Matty Laidlaw","Matty Laidlaw","25"],["Hugo Salabio","Hugo Salabio","26"],["Callum Kemp","Callum Kemp","27"],["Joe Phillips","Joe Phillips","28"],["Will Hutchinson","Will Hutchinson","29"],["Will Kirby","Will Kirby","30"],["Ryan Westerman","Ryan Westerman","31"],["Lloyd Kemp","Lloyd Kemp","32"],["Roman Dawson","Roman Dawson","33"],["Joe Ward","Joe Ward","34"],["Ben Johnson","Ben Johnson","35"],["Lennon Clark","Lennon Clark","36"]];
// Le produit Queensland Maroons apparaît aussi sous Rugby Union dans le catalogue ; il s'agit bien de l'équipe de Rugby League.
window.JH_TEAM_PLAYER_ROSTERS["RUGBY_UNION|Queensland Maroons"] = window.JH_TEAM_PLAYER_ROSTERS["RUGBY_LEAGUE|Queensland Maroons"];
