/* Groupes des sports multisports — catalogue adulte préparé. */
(function(){
  const groups={
  "Rugby Union": [
    "Bath Rugby",
    "Cardiff",
    "Connacht",
    "Fijian Drua",
    "Harlequins",
    "Ireland",
    "Kenya",
    "Leinster",
    "Melbourne Rebels",
    "Munster",
    "Queensland Maroons",
    "South Africa",
    "Stade Toulouse",
    "Ulster"
  ],
  "Rugby League": [
    "Brisbane Broncos",
    "Canberra Raiders",
    "Canterbury Bankstown Bulldogs",
    "Cronulla Sharks",
    "Dolphins",
    "Gold Coast Titans",
    "Hull FC",
    "Manly Warringah Sea Eagles",
    "Maori All Stars",
    "Melbourne Storm",
    "New South Wales Blues",
    "New Zealand Kiwis",
    "New Zealand Warriors",
    "Newcastle Knights",
    "North Queensland Cowboys",
    "Parramatta Eels",
    "Penrith Panthers",
    "Queensland Maroons",
    "Samoa",
    "South Sydney Rabbitohs",
    "St George Illawarra Dragons",
    "Sydney Roosters"
  ],
  "Sports gaéliques": [
    "Antrim",
    "Armagh",
    "Carlow",
    "Cavan",
    "Cork",
    "Donegal",
    "Down",
    "Dublin",
    "Fermanagh",
    "Galway",
    "Ireland",
    "Kerry",
    "Kildare",
    "Laois",
    "Limerick",
    "Louth",
    "Mayo",
    "Meath",
    "Offaly",
    "Roscommon",
    "Sligo",
    "Tipperary",
    "Tyrone",
    "Waterford",
    "Westmeath",
    "Wexford",
    "Wicklow"
  ]
};
  if(typeof SPORT_TEAM_GROUPS!=="undefined"){
    Object.entries(groups).forEach(([name,teams])=>{SPORT_TEAM_GROUPS[name]=teams;});
    ["Canada","USA"].forEach(name=>{
      if(Array.isArray(SPORT_TEAM_GROUPS.NHL)&&!SPORT_TEAM_GROUPS.NHL.includes(name))SPORT_TEAM_GROUPS.NHL.push(name);
    });
  }
  if(typeof OTHER_SPORTS!=="undefined"&&Array.isArray(OTHER_SPORTS)){
    // Une seule catégorie parent Rugby : les deux disciplines sont proposées à l’intérieur.
    ["Rugby Union","Rugby League"].forEach(name=>{
      const index=OTHER_SPORTS.findIndex(item=>String(item.name||"").toLowerCase()===name.toLowerCase());
      if(index>=0)OTHER_SPORTS.splice(index,1);
    });
    const rugbyIndex=OTHER_SPORTS.findIndex(item=>String(item.name||"").toLowerCase()==="rugby");
    if(rugbyIndex>=0)OTHER_SPORTS[rugbyIndex]={name:"Rugby",emoji:"🏉",desc:"Rugby à XV et rugby à XIII"};
    else OTHER_SPORTS.push({name:"Rugby",emoji:"🏉",desc:"Rugby à XV et rugby à XIII"});
  }
  window.JH_MULTISPORT_GROUPS_READY={sports:Object.keys(groups),teams:Object.fromEntries(Object.entries(groups).map(([k,v])=>[k,v.length]))};
})();
