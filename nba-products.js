/*
 * Maillots NBA vérifiés sur Vivi Jersey.
 * Import indépendant pour ne pas modifier le catalogue historique.
 * Les tailles et l'image proviennent de la fiche fournisseur exacte.
 */
const NBA_PRODUCTS = [
  {
    name: "Neemias Queta Boston Celtics Nike Unisex 2025/26 White Swingman Jersey – City Edition",
    category: "sports",
    group: "Boston Celtics",
    league: "NBA",
    team: "Boston Celtics",
    image: "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-124124c36d.jpg?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_1000%2Cw_1000",
    sizes: ["S", "M", "L", "XL", "2XL"],
    supplier: "Vivi Jersey",
    supplierVerified: true,
    supplierUrl: "https://vivi-jersey.com/products/neemias-queta-boston-celtics-nike-unisex-2025-26-white-swingman-jersey-city-edition",
    sourceUrl: "https://vivi-jersey.com/products/neemias-queta-boston-celtics-nike-unisex-2025-26-white-swingman-jersey-city-edition",
    description: "2025/26 • Swingman • City Edition"
  }
];

// Import sans doublon : une fiche existante n'est jamais remplacée.
NBA_PRODUCTS.forEach(product => {
  const duplicate = PRODUCTS.some(existing =>
    existing.category === product.category &&
    existing.group === product.group &&
    (existing.supplierUrl === product.supplierUrl ||
     existing.sourceUrl === product.sourceUrl ||
     existing.name?.trim().toLowerCase() === product.name.trim().toLowerCase())
  );
  if (!duplicate) PRODUCTS.push(product);
});
