/*
 * Catalogue des maillots de clubs JerseyHub.
 *
 * Une fiche ne devient visible que lorsque sa source fournisseur, ses photos
 * et ses tailles sont confirmées. Les images R2 existantes sont référencées,
 * jamais déplacées ni supprimées.
 *
 * Champs attendus :
 * - group / team : club
 * - season : saison (ex. 2026-27)
 * - kitType : home | away | third | fourth | retro | training
 * - version : fan | player | kids | women | retro
 * - sizes : tailles réellement confirmées par le fournisseur
 * - sizeChart : mesures si disponibles
 * - patchSlots / patchSlotLabels / patchOptions : patchs par emplacement
 * - players : [{name, number, shirt}] pour les flocages joueurs vérifiés
 * - personalizationAllowed : true uniquement si Vivi confirme le flocage libre
 * - personalization : {allowed, customName, customNumber}
 *
 * Ne pas remplir les données manquantes par supposition.
 */
const CLUB_PRODUCTS = [];

function isCompleteClubProduct(product) {
  if (!product || product.category !== "clubs") return false;
  const validSource = product.supplier === "Vivi Jersey" &&
    product.supplierVerified === true &&
    typeof (product.supplierUrl || product.sourceUrl) === "string" &&
    /^https?:\/\/(?:[a-z0-9-]+\.)?vivi-jersey\.com\//i.test(product.supplierUrl || product.sourceUrl);
  const validImages = typeof product.image === "string" &&
    /^https?:\/\//i.test(product.image) &&
    (!product.images || (Array.isArray(product.images) && product.images.every(url => typeof url === "string" && /^https?:\/\//i.test(url))));
  const validSizes = Array.isArray(product.sizes) && product.sizes.length > 0 &&
    product.sizes.every(size => typeof size === "string" && size.trim() && !/à confirmer|unknown|tbc/i.test(size));
  return validSource && validImages && validSizes &&
    typeof product.name === "string" && product.name.trim() &&
    typeof product.group === "string" && product.group.trim() &&
    typeof product.season === "string" && product.season.trim() &&
    typeof product.kitType === "string" && product.kitType.trim();
}

CLUB_PRODUCTS.forEach(product => {
  if (!isCompleteClubProduct(product)) {
    console.warn("Fiche club ignorée : informations fournisseur, saison, photos ou tailles incomplètes.", product?.name || "Sans nom");
    return;
  }
  const duplicate = PRODUCTS.some(existing =>
    existing.category === "clubs" &&
    (
      (product.supplierUrl && (existing.supplierUrl === product.supplierUrl || existing.sourceUrl === product.supplierUrl)) ||
      (product.sourceUrl && (existing.supplierUrl === product.sourceUrl || existing.sourceUrl === product.sourceUrl)) ||
      (existing.name && product.name &&
        existing.name.trim().toLowerCase() === product.name.trim().toLowerCase() &&
        existing.group === product.group)
    )
  );
  if (!duplicate) PRODUCTS.push(product);
});


/*
 * Enrichissement d'une fiche club déjà présente dans catalog.js.
 * Correspondance exacte confirmée avec la page Vivi Jersey source.
 * Les photos et tailles déjà présentes sont conservées.
 */
const manchesterUnitedSpecial = PRODUCTS.find(product =>
  product.category === "clubs" &&
  product.group === "Manchester United" &&
  product.name === "Player 2026-27 Manchester United Special Football Jersey - Bleu"
);
if (manchesterUnitedSpecial) {
  Object.assign(manchesterUnitedSpecial, {
    season: "2026-27",
    kitType: "special",
    version: "player",
    patchSlots: 2,
    patchSlotLabels: ["Compétition", "Badge complémentaire"],
    patchOptions: [
      { id: "mu-pl", label: "Premier League", slot_number: 1, extra_price_eur: 0 },
      { id: "mu-pl-nrfr", label: "Premier League + No Room For Racism", slot_number: 1, extra_price_eur: 0 },
      { id: "mu-ucl-foundation", label: "UCL + FOUNDATION", slot_number: 1, extra_price_eur: 0 },
      { id: "mu-carabao-6", label: "Carabao Cup 6", slot_number: 1, extra_price_eur: 0 },
      { id: "mu-carabao-6-nrfr", label: "Carabao Cup 6 + No Room For Racism", slot_number: 1, extra_price_eur: 0 },
      { id: "mu-fa-13", label: "FA Cup 13", slot_number: 1, extra_price_eur: 0 },
      { id: "mu-fa-13-nrfr", label: "FA Cup 13 + No Room For Racism", slot_number: 1, extra_price_eur: 0 },
      { id: "mu-europa-foundation", label: "Europa + FOUNDATION", slot_number: 1, extra_price_eur: 0 },
      { id: "mu-bpl-2024-25", label: "BPL 2024-25", slot_number: 2, extra_price_eur: 0 }
    ],
    personalizationAllowed: true,
    personalization: { allowed: true, customName: true, customNumber: true },
    players: []
  });
}


/*
 * Métadonnées lisibles des quatre fiches historiques HKLFP déjà publiées.
 * On ne touche ni aux images, ni aux tailles, ni aux URL fournisseur.
 * Les patchs/flocages restent désactivés tant que la fiche exacte ne les confirme pas.
 */
const existingClubMetadata = [
  { name: "26-27 Standard de Liège domicile - Rouge", season: "2026-27", kitType: "home", version: "fan" },
  { name: "26-27 Standard de Liège extérieur - Noir", season: "2026-27", kitType: "away", version: "fan" },
  { name: "26-27 Anderlecht domicile - Violet", season: "2026-27", kitType: "home", version: "fan" },
  { name: "26-27 Club Brugge Home Adult Suit - Ensemble domicile", season: "2026-27", kitType: "home", version: "adult-suit" }
];
existingClubMetadata.forEach(metadata => {
  const product = PRODUCTS.find(item => item.category === "clubs" && item.name === metadata.name);
  if (product) Object.assign(product, metadata, { personalizationAllowed: false });
});
