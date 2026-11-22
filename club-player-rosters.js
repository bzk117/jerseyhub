// Registres d'effectifs des clubs de football.
// IMPORTANT : les anciennes données ont été retirées car la source utilisée mélangeait
// des joueurs entre plusieurs clubs. Aucun nom/numéro non vérifié ne doit être proposé.
// Les effectifs seront réintroduits club par club après vérification auprès de sources
// officielles du club ou de la ligue.
// Ce fichier reste chargé par index.html et expose un registre vide en attendant.
window.JH_CLUB_FOOTBALL_PLAYERS = {};
window.JH_TEAM_PLAYER_ROSTERS = window.JH_TEAM_PLAYER_ROSTERS || {};
Object.assign(window.JH_TEAM_PLAYER_ROSTERS, window.JH_CLUB_FOOTBALL_PLAYERS);
