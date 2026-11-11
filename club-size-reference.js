/* Copie des grilles réellement présentes sur les fiches des équipes nationales vers les fiches clubs.
   Les tailles déjà renseignées sur une fiche club ne sont jamais écrasées. */
(()=> {
  const national = typeof PRODUCTS !== "undefined" && Array.isArray(PRODUCTS)
    ? PRODUCTS.filter(p => p && p.category === "national" && Array.isArray(p.sizes) && p.sizes.length)
    : [];
  const isKids = p => p.version === "kids" || p.sizeAudience === "kids" || /\\b(kids|children|junior)\\b/i.test(p.name || "");
  const mostCommonSizes = rows => {
    const counts = new Map();
    for (const p of rows) {
      const sizes = [...new Set(p.sizes)];
      const key = JSON.stringify(sizes);
      counts.set(key, (counts.get(key) || 0) + 1);
    }
    let winner = null, max = 0;
    for (const [key, count] of counts) {
      if (count > max) { winner = key; max = count; }
    }
    return winner ? JSON.parse(winner) : [];
  };
  const adultSizes = mostCommonSizes(national.filter(p => !isKids(p)));
  const kidsSizes = mostCommonSizes(national.filter(isKids));
  const apply = list => {
    if (!Array.isArray(list)) return 0;
    let copied = 0;
    for (const p of list) {
      if (!p || p.category !== "clubs" || (Array.isArray(p.sizes) && p.sizes.length)) continue;
      const sizes = isKids(p) ? kidsSizes : adultSizes;
      if (!sizes.length) continue;
      p.sizes = [...sizes];
      p.sizeSource = "Tailles copiées depuis les fiches des équipes nationales";
      p.sizeAudience = isKids(p) ? "kids" : (p.sizeAudience || "adult");
      copied++;
    }
    return copied;
  };
  const updated = apply(typeof CLUB_PRODUCTS !== "undefined" ? CLUB_PRODUCTS : null)
    + apply(typeof PRODUCTS !== "undefined" ? PRODUCTS : null);
  window.JH_CLUB_SIZE_REFERENCE = { adult: adultSizes, kids: kidsSizes, nationalProductsUsed: national.length, updated };
  console.info("JerseyHub — tailles nationales copiées sur les fiches clubs sans tailles :", updated);
})();