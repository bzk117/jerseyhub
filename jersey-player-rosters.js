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
