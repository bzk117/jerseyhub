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
  ]
};
Object.assign(window.JH_TEAM_PLAYER_ROSTERS, window.JH_NBA_PLAYERS || {});