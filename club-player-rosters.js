// Effectifs de clubs de football pour la personnalisation JerseyHub.
// Registre volontairement vide tant que les affectations club/joueur/numéro
// n'ont pas été validées de manière cohérente par les sources de chaque club.
// Ne jamais recopier une liste globale contenant des joueurs attribués au mauvais club.
window.JH_CLUB_FOOTBALL_PLAYERS = Object.create(null);
window.JH_TEAM_PLAYER_ROSTERS = window.JH_TEAM_PLAYER_ROSTERS || {};
Object.assign(window.JH_TEAM_PLAYER_ROSTERS, window.JH_CLUB_FOOTBALL_PLAYERS);
