/*
 * Effectifs 2026/27 pour les clubs dont les fiches sont présentes dans JerseyHub.
 * Les listes sont limitées aux numéros publiés par les sources de référence.
 * Aucun effectif actuel n'est proposé sur les maillots d'une autre saison.
 *
 * Sources :
 * Manchester United : https://www.manutd.com/en/news/confirmed-our-2026-27-squad-numbers
 * Standard de Liège : https://standard.be/fr/equipes/noyau-a
 * RSC Anderlecht : https://www.uefa.com/uefaeuropaleague/clubs/50074--anderlecht/squad/
 * Club Brugge : https://www.proleague.be/teams/club-brugge-4/squad
 */
const roster = entries => entries.map(([name, number, shirt]) => ({
  name, shirt: shirt || name, number
}));

const MU_2026_27 = roster([
  ["Senne Lammens",1],["Diogo Dalot",2],["Noussair Mazraoui",3],["Matthijs de Ligt",4],
  ["Harry Maguire",5],["Lisandro Martínez",6],["Mason Mount",7],["Bruno Fernandes",8],
  ["Marcus Rashford",9],["Matheus Cunha",10],["Joshua Zirkzee",11],["Karl Darlow",12],
  ["Patrick Dorgu",13],["Leny Yoro",15],["Amad",16],["Andrey Santos",17],
  ["Youri Tielemans",18],["Bryan Mbeumo",19],["Tom Heaton",22],["Luke Shaw",23],
  ["Manuel Ugarte",25],["Ayden Heaven",26],["Tynan Thompson",27],["Benjamin Šeško",30],
  ["Shea Lacey",31],["Kobbie Mainoo",37],["Jack Fletcher",38],["Tyler Fletcher",39],
  ["Harry Amass",41],["Toby Collyer",43],["Dermot Mee",45],["JJ Gabriel",77]
]);

const STANDARD_2026_27 = roster([
  ["Matthieu Epolo",1],["Lucas Pirard",21],["Belmin Dizdarević",35],
  ["Gustav Mortensen",3],["Dimitri Lavalée",4],["Marlon Fossey",13],["Boško Šutalo",14],
  ["Henry Lawrence",18],["Ibrahim Karamoko",20],["Josué Homawoo",24],["Ibe Hautekiet",25],["Daan Dierckx",29],
  ["Laurens Goemaere",6],["Tobias Mohr",7],["Adnane Abid",11],["Salieu Drammeh",15],
  ["Sylvester Jasper",19],["Alexis Trouillet",22],["Marco Ilaimaharitra",23],
  ["Mohammed El Hankouri",27],["Rayan Touzghar",84],["Casper Nielsen",94],
  ["Dennis Ayensa",10],["Bernard Nguene",17],["Timothé Nkada",59],["Bruny Nsimba",77]
]);

const ANDERLECHT_2026_27 = roster([
  ["Colin Coosemans",26],["Justin Heekeren",32],["Mattis Seghers",33],
  ["Michiel Haentjens",66],["Kamiel Timmermans",96],
  ["Zoumana Keita",2],["Lucas Hey",3],["Giulian Biancone",4],["Oleg Reabciuk",5],
  ["Ludwig Augustinsson",6],["Ilay Camara",7],["Andrew Omobamidele",12],
  ["Léo Pétrot",27],["Kaïs Barry",50],["Killian Sardella",54],["Ali Maamar",79],
  ["Romeo Amane",8],["Marten Winkler",10],["Lukáš Ambros",18],["Thelo Aasgaard",19],
  ["Enric Llansana",24],["Mario Stroeykens",29],["Marco Kana",55],
  ["Joshua Nga Kana",61],["Alexander De Ridder",64],["Noah Kalonji",68],["Tristan Degreef",83],
  ["Mihajlo Cvetković",9],["Oliver Antman",11],["Danylo Sikan",14],
  ["Tawfik Bentayeb",21],["Jayden Onia Seke",49],["Noa Ojea",53],
  ["Terry Van De Ven",76],["Adriano Bertaccini",91]
]);

const CLUB_BRUGGE_2026_27 = roster([
  ["Yann Sommer",1],["Nordin Jackers",29],["Axl De Corte",71],["Argus Vanden Driessche",81],
  ["Lee Han-Beom",3],["Joel Ordóñez",4],["Bjorn Meijer",14],["Vince Osuji",24],
  ["Hugo Siquet",41],["Brandon Mechele",44],["Samba Coulibaly",54],
  ["Jorne Spileers",58],["Kyriani Sabbe",64],["Joaquin Seys",65],
  ["Ludovit Reis",6],["Freddie Potts",8],["Hugo Vetlesen",10],["Cheveyo Tsawa",16],
  ["Hans Vanaken",20],["Lynnt Audoor",62],["Félix Lemaréchal",80],
  ["Tian Nai Koren",85],["Gianluca Okon-Engstler",86],
  ["Nicolò Tresoldi",7],["Carlos Forbs",9],["Romeo Vermant",17],
  ["Gustaf Nilsson",19],["Mamadou Diakhon",67],["Andrej Vasović",77]
]);

window.JERSEYHUB_CLUB_ROSTERS = {
  "manchesterunited|2026-27": MU_2026_27,
  "standarddeliege|2026-27": STANDARD_2026_27,
  "anderlecht|2026-27": ANDERLECHT_2026_27,
  "clubbrugge|2026-27": CLUB_BRUGGE_2026_27
};

// Index exact des cinq fiches Vivi Jersey Manchester United 2026/27.
window.JERSEYHUB_PLAYER_LIBRARY = {
  "https://www.vivi-jersey.com/products/2026-27-manchester-united-special-edition-football-jersey": MU_2026_27,
  "https://www.vivi-jersey.com/products/kids-2026-27-manchester-united-special-edition-kids-football-jersey-1": MU_2026_27,
  "https://www.vivi-jersey.com/products/kids-2026-27-manchester-united-third-kids-football-jersey": MU_2026_27,
  "https://www.vivi-jersey.com/products/women-2026-27-manchester-united-home-womens-football-jersey": MU_2026_27,
  "https://www.vivi-jersey.com/products/2026-27-manchester-united-third-football-jersey-s-4xl-long-sleeves": MU_2026_27
};
