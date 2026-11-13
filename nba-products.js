/*
 * Catalogue NBA JerseyHub : nom du maillot, équipe, photo et tailles proposées.
 * Aucune donnée tarifaire ni aucun lien fournisseur ne sont affichés.
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
  },
  {
    name: "MN Retro Jersey Toronto Raptors 99 Season White 15 Carter",
    category: "sports",
    group: "Toronto Raptors",
    league: "NBA",
    team: "Toronto Raptors",
    image: "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2409/02/products/aea2ed8e67.jpg?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_1000%2Cw_1000",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    name: "23 Season Detroit Pistons Away Blue 1 IVERSON",
    category: "sports",
    group: "Detroit Pistons",
    league: "NBA",
    team: "Detroit Pistons",
    image: "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/17/products/8a31519114.jpg?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_1000%2Cw_1000",
    sizes: ["S", "M", "L", "XL", "2XL"],
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

// Catalogue NBA : aucune URL fournisseur, aucun prix, aucune description fournisseur.
