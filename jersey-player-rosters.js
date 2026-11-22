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
    ["De'Von Achane",28],["Tucker Addington",46],["Kaytron Allen",null],["Liam Anderson",null],["Zayne Anderson",23],
    ["Darrell Baker Jr.",22],["Chris Bell",18],["Zeek Biggers",93],["Ethan Bonner",27],["Brady Boyd",null],
    ["Julius Brents",8],["Aaron Brewer",55],["Jordyn Brooks",20],["Jack Browning",null],["Major Burns",43],
    ["Matthew Butler",91],["DJ Campbell",63],["Daniel Carlson",null],["Kevin Coleman Jr.",21],["Brady Cook",15],
    ["Keith Cooper Jr.",null],["Marcellas Dial Jr.",24],["Caleb Douglas",7],["Greg Dulcich",85],["James Ester",null],
    ["Amari Gainer",null],["Willie Gay Jr.",40],["Chukwuebuka Godrick",79],["Ollie Gordon II",null],["Kenneth Grant",78],
    ["Ronnie Harrison",56],["Christian Haynes",null],["A.J. Henning",82],["DJ Herman",34],["Malik Herring",90],
    ["Shaka Heyward",null],["Austin Jackson",73],["Jordan Jefferson",null],["Chris Johnson",3],["Justin Joly",80],
    ["Will Kacmarek",89],["Jarrett Kingston",62],["Max Llewellyn",57],["Kyle Louis",19],["Jason Marshall Jr.",4],
    ["Kyle McCord",14],["Rodney McGraw",59],["Andrew Meyer",60],["Trey Moore",17],["Patrick Paul",52],
    ["Jordan Phillips",94],["Bradley Pinion",48],["Kadyn Proctor",74],["Jalen Reagor",88],["Chop Robinson",44],
    ["Jacob Rodriguez",10],["Jonah Savaiinaea",71],["Will Sheppard",null],["Zach Sieler",92],["Jaylin Simpson",null],
    ["Chris Smith",null],["Michael Taaffe",16],["Jalen Tolbert",1],["Dante Trader Jr.",11],["Seydou Traore",83],
    ["Cole Turner",87],["Joshua Uche",9],["Caedan Wallace",77],["Carlos Washington",26],["Malik Washington",6],
    ["Tre Watson",null],["Eric Watts",null],["Jared Wayne",null],["Malik Willis",2],["Julius Wood",25],
    ["Jackson Woodard",42],["Jaylen Wright",5]
  ]
};
