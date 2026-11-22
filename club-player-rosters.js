// Effectifs des clubs de football — source : pages officielles des équipes.
 // Chaque entrée est indépendante de la saison du maillot : les modèles rétro
 // proposent donc aussi l'effectif actuel du club.
window.JH_CLUB_FOOTBALL_PLAYERS = {
  "Chelsea": [
    ["Emiliano Martinez","Emiliano Martinez","1"],
    ["Marco Palestra","Marco Palestra","2"],
    ["Wesley Fofana","Wesley Fofana","3"],
    ["Valentin Barco","Valentin Barco","4"],
    ["Maxence Lacroix","Maxence Lacroix","5"],
    ["Levi Colwill","Levi Colwill","6"],
    ["Pedro Neto","Pedro Neto","7"],
    ["Joao Pedro","Joao Pedro","9"],
    ["Cole Palmer","Cole Palmer","10"],
    ["Jamie Gittens","Jamie Gittens","11"],
    ["Jordan Henderson","Jordan Henderson","14"],
    ["Morgan Rogers","Morgan Rogers","17"],
    ["Danny Welbeck","Danny Welbeck","18"],
    ["Jorrel Hato","Jorrel Hato","21"],
    ["Emmanuel Emegha","Emmanuel Emegha","22"],
    ["Geovany Quenda","Geovany Quenda","23"],
    ["Reece James","Reece James","24"],
    ["Moises Caicedo","Moises Caicedo","25"],
    ["Malo Gusto","Malo Gusto","27"],
    ["Teddy Sharman-Lowe","Teddy Sharman-Lowe","28"],
    ["Pep Chavarria","Pep Chavarria","29"],
    ["Aaron Anselmino","Aaron Anselmino","30"],
    ["Mahdi Nicoll-Jazuli","Mahdi Nicoll-Jazuli","32"],
    ["Josh Acheampong","Josh Acheampong","34"],
    ["Olutayo Subuloye","Olutayo Subuloye","37"],
    ["Mike Penders","Mike Penders","39"],
    ["Estevao Willian","Estevao Willian","41"],
    ["Gabriel Slonina","Gabriel Slonina","44"],
    ["Romeo Lavia","Romeo Lavia","45"]
  ],
  "Manchester City": [
    ["Marcus Bettinelli","Marcus Bettinelli","13"],
    ["Gianluigi Donnarumma","Gianluigi Donnarumma","1"],
    ["Geronimo Rulli","Geronimo Rulli","28"],
    ["Rayan Ait-Nouri","Rayan Ait-Nouri","21"],
    ["Kaden Braithwaite","Kaden Braithwaite","61"],
    ["Ruben Dias","Ruben Dias","3"],
    ["Marc Guehi","Marc Guehi","6"],
    ["Josko Gvardiol","Josko Gvardiol","24"],
    ["Abdukodir Khusanov","Abdukodir Khusanov","45"],
    ["Rico Lewis","Rico Lewis","82"],
    ["Matheus Nunes","Matheus Nunes","27"],
    ["Vitor Reis","Vitor Reis","22"],
    ["Elliot Anderson","Elliot Anderson","5"],
    ["Ayyoub Bouaddi","Ayyoub Bouaddi","32"],
    ["Rayan Cherki","Rayan Cherki","10"],
    ["Enzo Fernandez","Enzo Fernandez","17"],
    ["Phil Foden","Phil Foden","47"],
    ["Mateo Kovacic","Mateo Kovacic","8"],
    ["Nico O'Reilly","Nico O'Reilly","33"],
    ["Floyd Samba","Floyd Samba","75"],
    ["Allan Elias","Allan Elias","37"],
    ["Jeremy Doku","Jeremy Doku","11"],
    ["Erling Haaland","Erling Haaland","9"],
    ["Ryan McAidoo","Ryan McAidoo","56"],
    ["Iliman Ndiaye","Iliman Ndiaye","7"],
    ["Antoine Semenyo","Antoine Semenyo","42"]
  ]
};

// Registre partagé utilisé par le sélecteur de personnalisation existant.
window.JH_TEAM_PLAYER_ROSTERS = window.JH_TEAM_PLAYER_ROSTERS || {};
Object.assign(window.JH_TEAM_PLAYER_ROSTERS, window.JH_CLUB_FOOTBALL_PLAYERS);
