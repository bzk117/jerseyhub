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
  "Chicago Bulls": [
    ["Orlando Robinson","Orlando Robinson",0],
    ["Noa Essengue","Noa Essengue",2],
    ["Josh Giddey","Josh Giddey",3],
    ["Dailyn Swain","Dailyn Swain",5],
    ["Buddy Hield","Buddy Hield",7],
    ["Caleb Wilson","Caleb Wilson",8],
    ["Nic Claxton","Nic Claxton",9],
    ["Leonard Miller","Leonard Miller",11],
    ["Zach Collins","Zach Collins",12],
    ["Matas Buzelis","Matas Buzelis",14],
    ["Jordan Hawkins","Jordan Hawkins",15],
    ["Tobe Awaka","Tobe Awaka",19],
    ["Jaylin Sellers","Jaylin Sellers",22],
    ["Norman Powell","Norman Powell",24],
    ["Jalen Smith","Jalen Smith",25],
    ["Tre Jones","Tre Jones",30],
    ["Isaac Okoro","Isaac Okoro",35],
    ["Patrick Williams","Patrick Williams",44]
  ]
};
Object.assign(window.JH_TEAM_PLAYER_ROSTERS, window.JH_NBA_PLAYERS || {});
