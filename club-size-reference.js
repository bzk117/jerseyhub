/* Référentiel de tailles clubs — reprend les grilles communes déjà utilisées dans le catalogue national.
   Les tailles déjà renseignées sur une fiche restent prioritaires et ne sont jamais écrasées. */
(()=>{
  const ADULT=["S","M","L","XL","2XL"];
  const KIDS=["16","18","20","22","24","26","28"];
  const apply=(list)=>{
    if(!Array.isArray(list)) return 0;
    let changed=0;
    for(const p of list){
      if(!p || (p.category!=="clubs" && !p.group && !p.team)) continue;
      const isKids=p.version==="kids" || p.sizeAudience==="kids" || /\b(kids|children|junior)\b/i.test(p.name||"");
      if(!Array.isArray(p.sizes) || p.sizes.length===0){
        p.sizes=[...(isKids?KIDS:ADULT)];
        p.sizeSource="Référentiel commun repris des équipes nationales — à confirmer par modèle fournisseur";
        changed++;
      }
      if(isKids){
        if(!Array.isArray(p.kidsSizes) || !p.kidsSizes.length) p.kidsSizes=[...KIDS];
        p.sizeAudience="kids";
      }else{
        if(!Array.isArray(p.adultSizes) || !p.adultSizes.length) p.adultSizes=[...ADULT];
        p.sizeAudience=p.sizeAudience||"adult";
      }
    }
    return changed;
  };
  const total=apply(typeof CLUB_PRODUCTS!=="undefined"?CLUB_PRODUCTS:null)
    +apply(typeof PRODUCTS!=="undefined"?PRODUCTS:null);
  window.JH_CLUB_SIZE_REFERENCE={adult:ADULT,kids:KIDS,updated:total};
  console.info("JerseyHub — référentiel de tailles appliqué aux fiches clubs sans tailles propres:",total);
})();
