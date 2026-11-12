/* Grille commune de tailles choisie pour les fiches clubs JerseyHub.
   Reprise des tailles présentes sur les fiches Standard, Anderlecht et Bruges.
   Une grille déjà renseignée sur un produit reste prioritaire. */
(()=> {
  const sharedSizes = ["S", "M", "L", "XL", "XXL", "3XL", "4XL"];
  window.JH_CLUB_DEFAULT_SIZES = [...sharedSizes];
  const apply = list => {
    if (!Array.isArray(list)) return 0;
    let copied = 0;
    for (const product of list) {
      if (!product || product.category !== "clubs") continue;
      if (Array.isArray(product.sizes) && product.sizes.length) continue;
      product.sizes = [...sharedSizes];
      product.sizeSource = "Grille commune reprise des fiches Standard, Anderlecht et Bruges";
      product.sizeAudience = product.sizeAudience || "adult";
      copied++;
    }
    return copied;
  };
  const updated = apply(typeof PRODUCTS !== "undefined" ? PRODUCTS : null)
    + apply(typeof CLUB_PRODUCTS !== "undefined" ? CLUB_PRODUCTS : null);
  window.JH_CLUB_SIZE_REFERENCE = { sizes: [...sharedSizes], updated };
  console.info("JerseyHub — grille commune des tailles clubs appliquée :", updated);
})();