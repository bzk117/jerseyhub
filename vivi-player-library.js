/*
 * Effectifs 2026/27 pour les clubs dont les fiches sont présentes dans JerseyHub.
 * Les listes sont limitées aux numéros publiés par les sources de référence.
 * Aucun effectif actuel n'est proposé sur les maillots d'une autre saison.
 *
 * Sources :
 * Manchester United : https://www.manutd.com/en/news/confirmed-our-2026-27-squad-numbers
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







window.JERSEYHUB_CLUB_ROSTERS = {
  "manchesterunited|2026-27": MU_2026_27
};

// Index exact des cinq fiches Vivi Jersey Manchester United 2026/27.
window.JERSEYHUB_PLAYER_LIBRARY = {
  "https://www.vivi-jersey.com/products/2026-27-manchester-united-special-edition-football-jersey": MU_2026_27,
  "https://www.vivi-jersey.com/products/kids-2026-27-manchester-united-special-edition-kids-football-jersey-1": MU_2026_27,
  "https://www.vivi-jersey.com/products/kids-2026-27-manchester-united-third-kids-football-jersey": MU_2026_27,
  "https://www.vivi-jersey.com/products/women-2026-27-manchester-united-home-womens-football-jersey": MU_2026_27,
  "https://www.vivi-jersey.com/products/2026-27-manchester-united-third-football-jersey-s-4xl-long-sleeves": MU_2026_27
};
