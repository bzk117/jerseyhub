/*
 * Catalogue indépendant des maillots de clubs.
 * Les fiches ne sont ajoutées qu'après vérification visuelle du groupe R2,
 * de la saison, du type de maillot, des tailles et de la source fournisseur.
 * Ne jamais remplacer une fiche historique : import anti-doublon uniquement.
 */
const CLUB_PRODUCTS = [];

CLUB_PRODUCTS.forEach(product => {
  const duplicate = PRODUCTS.some(existing =>
    existing.category === "clubs" &&
    existing.group === product.group &&
    (
      (product.supplierUrl && existing.supplierUrl === product.supplierUrl) ||
      (product.sourceUrl && existing.sourceUrl === product.sourceUrl) ||
      (existing.name && product.name &&
        existing.name.trim().toLowerCase() === product.name.trim().toLowerCase())
    )
  );
  if (!duplicate) PRODUCTS.push(product);
});
