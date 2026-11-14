/* Grille commune des tailles adultes des sélections nationales.
   Référence demandée : Belgique. Les modèles explicitement enfants/juniors
   restent exclus. Les disponibilités finales sont confirmées à la commande. */
(()=> {
  const sharedSizes = ["S", "M", "L", "XL", "XXL", "3XL", "4XL"];
  window.JH_NATIONAL_DEFAULT_SIZES = [...sharedSizes];
  const isAdultNational = product => {
    if (!product || product.category !== "national") return false;
    const audience = String(product.sizeAudience || "").toLowerCase();
    const details = [product.name, product.version, product.kitType, product.description]
      .filter(Boolean).join(" ").toLowerCase();
    if (audience === "kids" || audience === "junior") return false;
    if (/(^|[^a-z])(kids?|children|junior|youth|baby|enfant|jeune)([^a-z]|$)/i.test(details)) return false;
    return true;
  };
  const apply = list => {
    if (!Array.isArray(list)) return 0;
    let updated = 0;
    list.forEach(product => {
      if (!isAdultNational(product)) return;
      product.sizes = [...sharedSizes];
      product.adultSizes = [...sharedSizes];
      product.kidsSizes = [];
      product.sizeAudience = "adult";
      updated++;
    });
    return updated;
  };
  const updated = apply(typeof PRODUCTS !== "undefined" ? PRODUCTS : null);
  window.JH_NATIONAL_SIZE_REFERENCE = { sizes: [...sharedSizes], updated };
  console.info("JerseyHub — grille commune des tailles nationales adultes appliquée :", updated);
})();
