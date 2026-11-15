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
  },

  {
    "name": "Men’s Atlanta Hawks Dominique Wilkins #21 Throwback Mitchell & Ness Red 86-87 Hardwood Classics Player Jersey",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1749458e1c.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot de joueur Atlanta Hawks Dominique Wilkins n° 21, collection rétro Mitchell & Ness rouge 86-87 Hardwood Classics, pour homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-atlanta-hawks-dominique-wilkins-21-throwback-mitchell-ness-red-86-87-hardwood-classics-player-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Atlanta Hawks Trae Young #11 Nike Yellow 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1340191f7d.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike jaune 2021/22 Trae Young n°11 des Atlanta Hawks – City Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-atlanta-hawks-trae-young-11-nike-yellow-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Atlanta Hawks Trae Young Nike Black 2020/21 Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-134051eb15.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman noir Nike 2020/21 de Trae Young (Atlanta Hawks) pour homme – Édition City",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-atlanta-hawks-trae-young-nike-black-2020-21-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Atlanta Hawks Trae Young #11 Nike White 2020/21 Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1339501e25.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike blanc 2020/21 de Trae Young (Atlanta Hawks) n° 11 – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-atlanta-hawks-trae-young-11-nike-white-2020-21-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Atlanta Hawks Trae Young #11 Nike Red 2020/21 Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-13391841b3.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike rouge 2020/21 de Trae Young (Atlanta Hawks) n° 11 – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-atlanta-hawks-trae-young-11-nike-red-2020-21-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Boston Celtics Jaylen Brown #7 Green 2021/22 Diamond Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Boston Celtics",
    "league": "NBA",
    "team": "Boston Celtics",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-13435275ea.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Diamant Vert Jaylen Brown n°7 des Boston Celtics 2021/22 – Édition Icône,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-boston-celtics-jaylen-brown-7-green-2021-22-diamond-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "BALL #1 Charlotte Hornets Men’s Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/1f089fdf92.png?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "BALL #1 Maillot Swingman pour homme des Charlotte Hornets – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/ball-1-charlotte-hornets-swingman-nba-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Charlotte Hornets Lamelo Ball #2 Jordan Green 20/21 Swingman Jersey-Association Edition",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-142817d4cb.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan vert 20/21 des Charlotte Hornets pour homme, Lamelo Ball n° 2, édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-charlotte-hornets-lamelo-ball-2-jordan-green-20-21-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Charlotte Hornets Lamelo Ball #2 Jordan Green Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-142852090c.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman vert Jordan Lamelo Ball n°2 des Charlotte Hornets – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-charlotte-hornets-lamelo-ball-2-jordan-green-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Charlotte Hornets Lamelo Ball #2 Jordan White 2020/21 Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1429234aa7.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan blanc 2020/21 – Édition Association, Charlotte Hornets Lamelo Ball n°2",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-charlotte-hornets-lamelo-ball-2-jordan-white-2020-21-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Charlotte Hornets Kelly Oubre #12 Nike Blue 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-142735ce28.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike bleu 2021/22 de Kelly Oubre (Charlottes Hornets) - Édition City, homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-charlotte-hornets-kelly-oubre-12-nike-blue-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Charlotte Hornets Miles Bridges #0 Nike Blue 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-143026733b.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike bleu 2021/22 Miles Bridges #0 des Charlotte Hornets – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-charlotte-hornets-miles-bridges-0-nike-blue-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Charlotte Hornets Gordon Hayward #20 Nike Blue 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-142542e7a3.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike bleu 2021/22 de Gordon Hayward (Charlotte Hornets) - Édition City, homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-charlotte-hornets-gordon-hayward-20-nike-blue-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Charlotte Hornets Terry Rozier #3 Nike Blue 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1432024ce2.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike bleu 2021/22 de Terry Rozier (Charlotte Hornets) - Édition City, homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-charlotte-hornets-terry-rozier-3-nike-blue-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Charlotte Hornets LaMelo Ball #2 Nike Blue 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-142955ac78.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike bleu 2021/22 LaMelo Ball n°2 des Charlotte Hornets – Édition City, pour homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-charlotte-hornets-lamelo-ball-2-nike-blue-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Charlotte Hornets Terry Rozier #3 Jordan Blue Swingman NBA Jersey – Association Edition",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-143134de7d.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Jordan bleu Jordan Terry Rozier n°3 des Charlotte Hornets – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-charlotte-hornets-terry-rozier-3-jordan-blue-swingman-nba-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Charlotte Hornets Hayward #20 Jordan Brand Blue 20/21 Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-14261866e7.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand bleu 20/21 des Charlotte Hornets pour homme, Hayward n° 20 – Édition Association",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-charlotte-hornets-hayward-20-jordan-brand-blue-20-21-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Charlotte Hornets Hayward #20 Jordan Green Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1427041ea3.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman vert Jordan Hayward n° 20 des Charlotte Hornets pour homme – Édition Association",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-charlotte-hornets-hayward-20-jordan-green-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2023-24 Charlotte Hornets Home White LaMelo Ball #1 Men’s Jersey",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/24/products/01-21584719cc.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot domicile blanc LaMelo Ball n°1 des Charlotte Hornets 2023-24,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/2023-24-charlotte-hornets-home-white-lamelo-ball-1-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2026-27 Charlotte Hornets City Edition LaMelo Ball #1 Men’s Jersey",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-055842c35f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot pour hommes Charlotte Hornets City Edition LaMelo Ball #1 2026-27,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/2026-27-charlotte-hornets-city-edition-lamelo-ball-1-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2025-26 Charlotte Hornets City Edition LaMelo Ball #1 Men’s Jersey",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-0444359605.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot pour hommes Charlotte Hornets City Edition LaMelo Ball #1 2025-26,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/2025-26-charlotte-hornets-city-edition-lamelo-ball-1-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2018-19 Charlotte Hornets City Edition LaMelo Ball #1 Men’s Jersey",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/24/products/01-17294481a3.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot pour hommes Charlotte Hornets City Edition LaMelo Ball #1 2018-19,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/2018-19-charlotte-hornets-city-edition-lamelo-ball-1-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2019-20 Charlotte Hornets Classic White LaMelo Ball #1 Men’s Jersey",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/24/products/01-1743182004.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme blanc classique 2019-20 des Charlotte Hornets, LaMelo Ball n°1",
    "supplierUrl": "https://www.vivi-jersey.com/products/2019-20-charlotte-hornets-classic-white-lamelo-ball-1-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "MITCHELL #45 Cleveland Cavaliers Men’s Swingman Jersey",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-175936debf.png?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman pour hommes MITCHELL #45 Cleveland Cavaliers,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mitchell-45-cleveland-cavaliers-swingman-nba-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "GARLAND #10 Cleveland Cavaliers Men’s Swingman Jersey – Classic Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-17411966cd.png?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "GARLAND #10 Maillot Swingman pour homme des Cleveland Cavaliers – Édition classique,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/garland-10-cleveland-cavaliers-swingman-nba-jersey-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Cleveland Cavaliers Collin Sexton Nike Men’s Swingman Jersey – Wine",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-1743013285.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike pour homme de Collin Sexton, Cleveland Cavaliers – Vin,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/cleveland-cavaliers-collin-sexton-nike-mens-swingman-jersey-wine",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Cleveland Cavaliers LeBron James #23 Throwback Navy 2008-09 Hardwood Classics Jersey",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1509503850.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot rétro bleu marine 2008-09 des Cleveland Cavaliers, LeBron James n° 23, collection Hardwood Classics.",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-cleveland-cavaliers-lebron-james-23-throwback-navy-2008-09-hardwood-classics-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Cleveland Cavaliers Collin Sexton #2 Nike Wine Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-150341c5c4.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman Wine Icon Edition de Collin Sexton n°2 des Cleveland Cavaliers pour hommes",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-cleveland-cavaliers-collin-sexton-2-nike-wine-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Cleveland Cavaliers Darius Garland #10 Nike Black Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-150416d37c.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman noir pour homme des Cleveland Cavaliers, Darius Garland n° 10 – Édition Statement",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-cleveland-cavaliers-darius-garland-10-nike-black-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Dallas Mavericks Luka Doncic Nike Men’s Swingman Jersey – Royal",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-1923446ae7.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike Luka Doncic Dallas Mavericks pour Homme – Royal,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/dallas-mavericks-luka-doncic-nike-mens-swingman-jersey-royal",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Denver Nuggets Nikola Jokic #15 Nike Red 2020/21 Swingman Player Jersey – City Edition",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1543369ab1.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot de joueur Nike Swingman rouge 2020/21 des Denver Nuggets, Nikola Jokic n° 15 – Édition City, pour homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-denver-nuggets-nikola-jokic-15-nike-red-2020-21-swingman-player-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Denver Nuggets Nikola Jokic #15 Nike White 2020/21 Swingman Player Jersey – Earned Edition",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1544094c2a.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot de joueur Nike Swingman blanc 2020/21 de Nikola Jokic (Denver Nuggets) n° 15 – Édition Earned",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-denver-nuggets-nikola-jokic-15-nike-white-2020-21-swingman-player-jersey-earned-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Denver Nuggets Nikola Jokic #15 Jordan Blue 2020/21 Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1540198b54.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Blue 2020/21 des Denver Nuggets pour homme, Nikola Jokic n° 15 – Édition Statement",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-denver-nuggets-nikola-jokic-15-jordan-blue-2020-21-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Denver Nuggets Nikola Jokic #15 Jordan Brand Blue 202021 Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1540533a2d.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman bleu Jordan Brand 2020-21 des Denver Nuggets pour homme, Nikola Jokic n° 15 – Édition Statement",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-denver-nuggets-nikola-jokic-15-jordan-brand-blue-202021-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Denver Nuggets Nikola Jokic #15 Nike Black Swingman Player Jersey – City Edition",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1541299224.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot de joueur Nike Swingman noir Denver Nuggets Nikola Jokic n° 15 – Édition City, Joueur",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-denver-nuggets-nikola-jokic-15-nike-black-swingman-player-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Denver Nuggets Nikola Jokic #15 Nike Navy Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1543021781.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman bleu marine des Denver Nuggets pour homme, Nikola Jokic n° 15 – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-denver-nuggets-nikola-jokic-15-nike-navy-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Denver Nuggets Will Barton #5 Nike Navy 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1545191c2e.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike bleu marine 2021/22 - Édition City, homme Denver Nuggets Will Barton #5",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-denver-nuggets-will-barton-5-nike-navy-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2023-24 Detroit Pistons Grant Hill #33 Men’s Jersey",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/24/products/01-23071642be.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot pour hommes Detroit Pistons Grant Hill #33 2023-24,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/2023-24-detroit-pistons-grant-hill-33-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2023-24 Detroit Pistons White Allen Iverson #1 Men’s Jersey",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/24/products/01-2307562852.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot blanc Allen Iverson #1 des Detroit Pistons 2023-24 pour hommes,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/2023-24-detroit-pistons-white-allen-iverson-1-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2023-24 Detroit Pistons Avery Bradley #23 Men’s Jersey",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/24/products/01-230209ef49.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Detroit Pistons Avery Bradley #23 2023-24 pour homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/2023-24-detroit-pistons-avery-bradley-23-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Detroit Pistons Mitchell & Ness Classic Red Allen Iverson #1 Men’s Jersey",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-212409f6a7.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme Mitchell & Ness Classic rouge Allen Iverson n°1 des Detroit Pistons",
    "supplierUrl": "https://www.vivi-jersey.com/products/detroit-pistons-mitchell-ness-classic-red-allen-iverson-1-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "1998-99 Detroit Pistons Mitchell & Ness Classic Blue Men’s Jersey",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/24/products/01-1655547020.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot pour homme Detroit Pistons Mitchell & Ness Classic Blue 1998-99,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/1998-99-detroit-pistons-mitchell-ness-classic-blue-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2023-24 Detroit Pistons City Edition Avery Bradley #23 Men’s Jersey",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/24/products/01-2305406afb.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot pour homme Avery Bradley #23 Detroit Pistons City Edition 2023-24",
    "supplierUrl": "https://www.vivi-jersey.com/products/2023-24-detroit-pistons-city-edition-avery-bradley-23-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "1998-99 Detroit Pistons Mitchell & Ness Classic Grant Hill #33 Men’s Jersey",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/24/products/01-1709080a0f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme Grant Hill n° 33 des Detroit Pistons, édition Mitchell & Ness Classic 1998-99",
    "supplierUrl": "https://www.vivi-jersey.com/products/1998-99-detroit-pistons-mitchell-ness-classic-grant-hill-33-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Draymond Green Golden State Warriors Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Navy",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1620133e7f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2024/25 des Golden State Warriors de Draymond Green – Édition City – Bleu marine",
    "supplierUrl": "https://www.vivi-jersey.com/products/draymond-green-golden-state-warriors-nike-unisex-2024-25-swingman-player-jersey-city-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Stephen Curry Golden State Warriors Jordan Brand 2022/23 Statement Edition Swingman Jersey – Navy",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1622555440.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Stephen Curry Golden State Warriors Jordan Brand 2022/23 Statement Edition – Bleu marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/stephen-curry-golden-state-warriors-jordan-brand-2022-23-statement-edition-swingman-jersey-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Klay Thompson Golden State Warriors Jordan Brand 2022/23 Statement Edition Swingman Jersey – Navy",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1623179bfd.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Klay Thompson Golden State Warriors Jordan Brand 2022/23 Statement Edition – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/klay-thompson-golden-state-warriors-jordan-brand-2022-23-statement-edition-swingman-jersey-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Draymond Green Golden State Warriors Jordan Brand Unisex 2022/23 Swingman Badge Jersey – Statement Edition – Navy",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-16231452bb.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Badge unisexe Jordan Brand 2022/23 des Golden State Warriors de Draymond Green – Édition Statement – ​​Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/draymond-green-golden-state-warriors-jordan-brand-unisex-2022-23-swingman-badge-jersey-statement-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Draymond Green Golden State Warriors Nike Unisex 2022/23 Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1620336995.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 des Golden State Warriors de Draymond Green – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/draymond-green-golden-state-warriors-nike-unisex-2022-23-swingman-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Golden State Warriors Nike Unisex Adult Swingman Custom Jersey – Classic Edition – White",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0133059557.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe adulte des Golden State Warriors – Édition classique – Blanc, Golden State Warriors",
    "supplierUrl": "https://www.vivi-jersey.com/products/golden-state-warriors-nike-unisex-adult-swingman-custom-jersey-classic-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Golden State Warriors Nike Unisex 2024/25 Custom Swingman Jersey – City Edition – Navy",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0132336ebf.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Golden State Warriors 2024/25 – Édition City – Bleu marine, Golden State Warriors",
    "supplierUrl": "https://www.vivi-jersey.com/products/golden-state-warriors-nike-unisex-2024-25-custom-swingman-jersey-city-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Andrew Wiggins Golden State Warriors Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-100836053a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2023/24 d'Andrew Wiggins, Golden State Warriors – Noir – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/andrew-wiggins-golden-state-warriors-nike-unisex-2023-24-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Stephen Curry Golden State Warriors Nike Unisex Select Series Swingman Jersey?– Black",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-103008bd34.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike Select Series de Stephen Curry, Golden State Warriors – Noir,",
    "supplierUrl": "https://www.vivi-jersey.com/products/stephen-curry-golden-state-warriors-nike-unisex-select-series-swingman-jersey-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Golden State Warriors Nike Unisex 2023/24 Custom Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0132015250.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Golden State Warriors 2023/24 – Noir – Édition City, Golden State Warriors",
    "supplierUrl": "https://www.vivi-jersey.com/products/golden-state-warriors-nike-unisex-2023-24-custom-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Draymond Green Golden State Warriors Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-222711ebae.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2023/24 des Golden State Warriors de Draymond Green – Noir – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/draymond-green-golden-state-warriors-nike-unisex-2023-24-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Draymond Green Golden State Warriors Nike Swingman Jersey – Classic Edition – Blue",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-2224592333.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman Draymond Green Golden State Warriors – Édition Classique – Bleu,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/draymond-green-golden-state-warriors-nike-swingman-jersey-classic-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Klay Thompson Golden State Warriors Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-08104580b8.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike unisexe 2023/24 des Golden State Warriors de Klay Thompson – Noir – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/klay-thompson-golden-state-warriors-nike-unisex-2023-24-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Stephen Curry Golden State Warriors Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1029383c26.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2023/24 de Stephen Curry, Golden State Warriors – Noir – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/stephen-curry-golden-state-warriors-nike-unisex-2023-24-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Golden State Warriors Nike Unisex 2019/20 Custom Swingman Jersey – White – Classic Edition",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-012910ab16.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Golden State Warriors 2019/20 – Blanc – Édition classique, Golden State Warriors",
    "supplierUrl": "https://www.vivi-jersey.com/products/golden-state-warriors-nike-unisex-2019-20-custom-swingman-jersey-white-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Golden State Warriors Nike Unisex 2019/20 Custom Swingman Jersey – Royal – Icon Edition",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-012833c67d.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Golden State Warriors 2019/20 – Bleu royal – Édition Icone, Golden State Warriors",
    "supplierUrl": "https://www.vivi-jersey.com/products/golden-state-warriors-nike-unisex-2019-20-custom-swingman-jersey-royal-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jordan Poole Golden State Warriors Nike 2022/23 Swingman Jersey Royal – Classic Edition",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-053633a62d.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2022/23 Royal – Édition Classique de Jordan Poole, Golden State Warriors",
    "supplierUrl": "https://www.vivi-jersey.com/products/jordan-poole-golden-state-warriors-nike-2022-23-swingman-jersey-royal-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Draymond Green Golden State Warriors Nike Unisex 2022/23 Swingman Jersey – City Edition – Black",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-222605dd85.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 des Golden State Warriors de Draymond Green – Édition City – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/draymond-green-golden-state-warriors-nike-unisex-2022-23-swingman-jersey-city-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Draymond Green Golden State Warriors Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Royal",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-22263862b6.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 des Golden State Warriors de Draymond Green – Édition Icon – Bleu Royal",
    "supplierUrl": "https://www.vivi-jersey.com/products/draymond-green-golden-state-warriors-nike-unisex-2022-23-swingman-jersey-icon-edition-royal",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Andrew Wiggins Golden State Warriors Nike 2022/23 Swingman Jersey Blue – Classic Edition",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-1007410300.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman bleu Nike 2022/23 des Golden State Warriors d'Andrew Wiggins – Édition classique",
    "supplierUrl": "https://www.vivi-jersey.com/products/andrew-wiggins-golden-state-warriors-nike-2022-23-swingman-jersey-blue-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Stephen Curry Golden State Warriors Nike 2022/23 Swingman Jersey Blue – Classic Edition",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1027056ff6.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman bleu Stephen Curry Golden State Warriors Nike 2022/23 – Édition classique,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/stephen-curry-golden-state-warriors-nike-2022-23-swingman-jersey-blue-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Stephen Curry Golden State Warriors Nike Unisex 2022/23 Swingman Jersey – City Edition – Black",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-102837a53a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 de Stephen Curry, Golden State Warriors – Édition City – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/stephen-curry-golden-state-warriors-nike-unisex-2022-23-swingman-jersey-city-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Klay Thompson Golden State Warriors Nike 2022/23 Swingman Jersey Blue – Classic Edition",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-08092004f7.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2022/23 bleu des Golden State Warriors de Klay Thompson – Édition classique",
    "supplierUrl": "https://www.vivi-jersey.com/products/klay-thompson-golden-state-warriors-nike-2022-23-swingman-jersey-blue-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Golden State Warriors Nike Unisex 2022/23 Custom Swingman Jersey – Classic Edition – Blue",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-01294334fa.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Golden State Warriors 2022/23 – Édition classique – Bleu, Golden State Warriors",
    "supplierUrl": "https://www.vivi-jersey.com/products/golden-state-warriors-nike-unisex-2022-23-custom-swingman-jersey-classic-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Golden State Warriors Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Blue",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-012345cbbe.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe personnalisé Jordan Brand 2022/23 des Golden State Warriors – Édition Statement – ​​Bleu, Golden State Warriors",
    "supplierUrl": "https://www.vivi-jersey.com/products/golden-state-warriors-jordan-brand-unisex-2022-23-swingman-custom-jersey-statement-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Stephen Curry Golden State Warriors Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Royal",
    "category": "sports",
    "group": "Golden State Warriors",
    "league": "NBA",
    "team": "Golden State Warriors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-102907145f.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 de Stephen Curry, Golden State Warriors – Édition Icon – Bleu Royal",
    "supplierUrl": "https://www.vivi-jersey.com/products/stephen-curry-golden-state-warriors-nike-unisex-2022-23-swingman-jersey-icon-edition-royal",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jalen Green Houston Rockets Nike Unisex 2023/24 Swingman Jersey – White – City Edition",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-173151add6.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2023/24 de Jalen Green (Houston Rockets) – Blanc – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/jalen-green-houston-rockets-nike-unisex-2023-24-swingman-jersey-white-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Fred VanVleet Houston Rockets Nike Unisex 2024/25 Swingman Player Jersey – City Edition – White",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0008095e76.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Nike Swingman 2024/25 de Fred VanVleet, Houston Rockets – Édition City – Blanc",
    "supplierUrl": "https://www.vivi-jersey.com/products/fred-vanvleet-houston-rockets-nike-unisex-2024-25-swingman-player-jersey-city-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jabari Smith Jr. Houston Rockets Nike Unisex 2024/25 Swingman Player Jersey – City Edition – White",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-030125923d.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2024/25 de Jabari Smith Jr. (Houston Rockets) – Édition City – Blanc",
    "supplierUrl": "https://www.vivi-jersey.com/products/jabari-smith-jr-houston-rockets-nike-unisex-2024-25-swingman-player-jersey-city-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Alperen Sengun Houston Rockets Nike Unisex 2024/25 Swingman Player Jersey – City Edition – White",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-0945225a9c.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Alperen Sengun Houston Rockets Nike Unisexe 2024/25 Swingman Player Jersey – City Edition – White,球员",
    "supplierUrl": "https://www.vivi-jersey.com/products/alperen-sengun-houston-rockets-nike-unisex-2024-25-swingman-player-jersey-city-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jalen Green Houston Rockets Jordan Brand 2022/23 Statement Edition Swingman Jersey – Black",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0333219ff6.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand Statement Edition 2022/23 de Jalen Green, Houston Rockets – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/jalen-green-houston-rockets-jordan-brand-2022-23-statement-edition-swingman-jersey-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jalen Green Houston Rockets Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Red",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-033609d333.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 de Jalen Green (Houston Rockets) – Édition Icon – Rouge,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/jalen-green-houston-rockets-nike-unisex-2022-23-swingman-jersey-icon-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jalen Green Houston Rockets Nike Unisex 2022/23 Swingman Jersey – City Edition – Navy",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0335414101.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 de Jalen Green (Houston Rockets) – Édition City – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/jalen-green-houston-rockets-nike-unisex-2022-23-swingman-jersey-city-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Houston Rockets Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-021001604a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Swingman unisexe Jordan Brand Houston Rockets 2022/23 – Édition Statement – ​​Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/houston-rockets-jordan-brand-unisex-2022-23-swingman-custom-jersey-statement-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jalen Green Houston Rockets Nike 2021/22 Swingman Jersey – City Edition – Navy",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-033417097f.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2021/22 de Jalen Green (Houston Rockets) – Édition City – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/jalen-green-houston-rockets-nike-2021-22-swingman-jersey-city-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Houston Rockets Nike Unisex 2022/23 Custom Swingman Jersey – Classic Edition – White",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-021624e1f1.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Houston Rockets 2022/23 – Édition classique – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/houston-rockets-nike-unisex-2022-23-custom-swingman-jersey-classic-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Houston Rockets Nike Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0217571dc9.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe blanc Houston Rockets 2022/23 – Édition Association",
    "supplierUrl": "https://www.vivi-jersey.com/products/houston-rockets-nike-unisex-2022-23-swingman-custom-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Houston Rockets Nike Unisex 2022/23 Swingman Custom Jersey – City Edition – Navy",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0216541202.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe Houston Rockets 2022/23 – Édition City – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/houston-rockets-nike-unisex-2022-23-swingman-custom-jersey-city-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Houston Rockets Nike Unisex 2022/23 Swingman Custom Jersey Red – Icon Edition",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-021725f6a4.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe Houston Rockets 2022/23 rouge – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/houston-rockets-nike-unisex-2022-23-swingman-custom-jersey-red-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Houston Rockets Nike 2021/22 Swingman Custom Jersey – City Edition – Navy",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-021349946d.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Houston Rockets Nike Swingman 2021/22 – Édition City – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/houston-rockets-nike-2021-22-swingman-custom-jersey-city-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jalen Green Houston Rockets Jordan Brand 2021/22 Swingman Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-033252f5b7.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand 2021/22 de Jalen Green (Houston Rockets) – Édition Statement – ​​Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/jalen-green-houston-rockets-jordan-brand-2021-22-swingman-jersey-statement-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jabari Smith Jr. Houston Rockets Nike Unisex 2022 NBA Draft First Round Pick Swingman Jersey – Icon Edition – Red",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-030055dfe6.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike unisexe de Jabari Smith Jr., Houston Rockets, sélectionné au premier tour de la draft NBA 2022 – Édition Icon – Rouge,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/jabari-smith-jr-houston-rockets-nike-unisex-2022-nba-draft-first-round-pick-swingman-jersey-icon-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jalen Green Houston Rockets Nike 2021 NBA Draft First Round Pick Swingman Jersey Red – Icon Edition",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-03344572c5.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Jalen Green Houston Rockets Nike 2021 NBA Draft First Round Pick Swingman Jersey Red – Icon Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/jalen-green-houston-rockets-nike-2021-nba-draft-first-round-pick-swingman-jersey-red-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "John Wall Houston Rockets Nike 2020/21 Swingman Jersey – Icon Edition – Red",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-051832e910.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2020/21 de John Wall, Houston Rockets – Édition Icone – Rouge,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/john-wall-houston-rockets-nike-2020-21-swingman-jersey-icon-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Houston Rockets Nike 2021/22 Diamond Swingman Custom Jersey – Icon Edition – Red",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-021318fc69.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Houston Rockets Nike 2021/22 Diamond Swingman – Édition Icon – Rouge,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/houston-rockets-nike-2021-22-diamond-swingman-custom-jersey-icon-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Houston Rockets Nike 2020/21 Swingman Custom Jersey – Icon Edition – Red",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0212466d5f.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman 2020/21 des Houston Rockets – Édition Icon – Rouge,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/houston-rockets-nike-2020-21-swingman-custom-jersey-icon-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Houston Rockets Nike 2020/21 Swingman Custom Jersey – Association Edition – White",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-021214d2ec.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Houston Rockets Nike 2020/21 Swingman – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/houston-rockets-nike-2020-21-swingman-custom-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jalen Green Houston Rockets Nike 2021/22 Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-033349666d.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2021/22 de Jalen Green (Houston Rockets) – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/jalen-green-houston-rockets-nike-2021-22-swingman-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Houston Rockets Nike Swingman Custom Jersey – Association Edition – White",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-021520688c.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman des Houston Rockets – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/houston-rockets-nike-swingman-custom-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Houston Rockets Nike Swingman Custom Jersey Black – Statement Edition",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0215515ce6.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman noir des Houston Rockets – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/houston-rockets-nike-swingman-custom-jersey-black-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Eric Gordon Houston Rockets Nike Swingman Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-231121be81.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike Eric Gordon Houston Rockets – Édition Statement – ​​Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/eric-gordon-houston-rockets-nike-swingman-jersey-statement-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Houston Rockets Nike Custom Swingman Jersey – Icon Edition – Red",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0214509d23.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike des Houston Rockets – Édition Icone – Rouge,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/houston-rockets-nike-custom-swingman-jersey-icon-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Houston Rockets Tracy McGrady #1 Throwback Red 04-05 Hardwood Classics Swingman Jersey",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1630570281.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Hardwood Classics rouge rétro 04-05 des Houston Rockets, Tracy McGrady n° 1, pour homme.",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-houston-rockets-tracy-mcgrady-1-throwback-red-04-05-hardwood-classics-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Houston Rockets Hakeem Olajuwon Throwback Navy 1996-97 Hardwood Classics Swingman Jersey",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1627361750.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Hardwood Classics Hakeem Olajuwon des Houston Rockets, collection rétro bleu marine 1996-97, pour homme.",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-houston-rockets-hakeem-olajuwon-throwback-navy-1996-97-hardwood-classics-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Houston Rockets Tracy McGrady #1 Jordan Black 20/21 Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-162914e04a.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Black 20/21 de Tracy McGrady #1 des Houston Rockets pour homme – Édition Statement",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-houston-rockets-tracy-mcgrady-1-jordan-black-20-21-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Houston Rockets Hakeem Olajuwon Throwback Red 1993-94 Hardwood Classics Swingman Jersey",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1709345d27.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Hardwood Classics rouge rétro 1993-94 des Houston Rockets, Hakeem Olajuwon, pour homme.",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-houston-rockets-hakeem-olajuwon-throwback-red-1993-94-hardwood-classics-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Houston Rockets Tracy McGrady #1 Nike White Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-163024f186.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc Nike Tracy McGrady n°1 des Houston Rockets pour homme – Édition Association",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-houston-rockets-tracy-mcgrady-1-nike-white-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Houston Rockets Yao Ming #11 Nike White Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-163203367c.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc Nike Yao Ming n° 11 des Houston Rockets – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-houston-rockets-yao-ming-11-nike-white-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Houston Rockets John Wall #1 Nike Navy 2021/22 Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1628412413.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike bleu marine 2021/22 de John Wall (Houston Rockets) pour homme – Édition City",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-houston-rockets-john-wall-1-nike-navy-2021-22-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Houston Rockets Jalen Green #0 Nike Navy 2021/22 Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Houston Rockets",
    "league": "NBA",
    "team": "Houston Rockets",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-162808b78b.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike bleu marine 2021/22 de Jalen Green (Houston Rockets) – Édition City, pour homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-houston-rockets-jalen-green-0-nike-navy-2021-22-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Pascal Siakam Indiana Pacers Nike Unisex Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-2111489080.png?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike Unisexe Pascal Siakam Indiana Pacers – Icon Edition – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/pascal-siakam-indiana-pacers-nike-unisex-swingman-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "T.J. McConnell Indiana Pacers Nike Unisex Swingman Replica Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1037209951.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot réplique unisexe Swingman Nike TJ McConnell Indiana Pacers – Édition Icon – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/t-j-mcconnell-indiana-pacers-nike-unisex-swingman-replica-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Tyrese Haliburton Indiana Pacers Nike Unisex Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1306301d21.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Swingman Nike Tyrese Haliburton Indiana Pacers – Édition Icon – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/tyrese-haliburton-indiana-pacers-nike-unisex-swingman-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Indiana Pacers Nike Unisex 2024/25 Custom Swingman Jersey – City Edition – White",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0241054224.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Indiana Pacers 2024/25 – Édition City – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/indiana-pacers-nike-unisex-2024-25-custom-swingman-jersey-city-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Tyrese Haliburton Indiana Pacers Nike Unisex 2022/23 Swingman Jersey – City Edition – Blue",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1305289205.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 des Indiana Pacers de Tyrese Haliburton – Édition City – Bleu",
    "supplierUrl": "https://www.vivi-jersey.com/products/tyrese-haliburton-indiana-pacers-nike-unisex-2022-23-swingman-jersey-city-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Tyrese Haliburton Indiana Pacers Nike Unisex 2024/25 Swingman Player Jersey – City Edition – White",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-130558b4dc.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot de joueur unisexe Nike Swingman 2024/25 des Indiana Pacers de Tyrese Haliburton – Édition City – Blanc",
    "supplierUrl": "https://www.vivi-jersey.com/products/tyrese-haliburton-indiana-pacers-nike-unisex-2024-25-swingman-player-jersey-city-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Tyrese Haliburton Indiana Pacers Jordan Brand 2022/23 Statement Edition Swingman Jersey – Gold",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-13045401e8.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand Statement Edition 2022/23 de Tyrese Haliburton (Indiana Pacers) – Or",
    "supplierUrl": "https://www.vivi-jersey.com/products/tyrese-haliburton-indiana-pacers-jordan-brand-2022-23-statement-edition-swingman-jersey-gold",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Indiana Pacers Nike Unisex 2022/23 Swingman Custom Jersey – City Edition – Blue",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0239071465.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Nike Swingman 2022/23 des Indiana Pacers – Édition City – Bleu,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/indiana-pacers-nike-unisex-2022-23-swingman-custom-jersey-city-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Indiana Pacers Nike Unisex 2023/24 Custom Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0240341cd1.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Indiana Pacers 2023/24 – Noir – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/indiana-pacers-nike-unisex-2023-24-custom-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Bennedict Mathurin Indiana Pacers Nike Unisex Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-114911efcb.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Bennedict Mathurin Indiana Pacers Nike Unisex Swingman Jersey – Icon Edition – Navy,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/bennedict-mathurin-indiana-pacers-nike-unisex-swingman-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Indiana Pacers Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Yellow",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-023535a777.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Jordan Brand Swingman 2022/23 des Indiana Pacers – Édition Statement – ​​Jaune,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/indiana-pacers-jordan-brand-unisex-2022-23-swingman-custom-jersey-statement-edition-yellow",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Indiana Pacers Nike Unisex 2022/23 Swingman Custom Jersey Navy – Icon Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-023937daf8.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe Indiana Pacers 2022/23 bleu marine – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/indiana-pacers-nike-unisex-2022-23-swingman-custom-jersey-navy-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Indiana Pacers Nike Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0240056d62.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe Indiana Pacers 2022/23 blanc – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/indiana-pacers-nike-unisex-2022-23-swingman-custom-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Indiana Pacers Nike 2021/22 Diamond Swingman Custom Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-023807a18a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Indiana Pacers Nike 2021/22 Diamond Swingman – Édition Icon – Bleu marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/indiana-pacers-nike-2021-22-diamond-swingman-custom-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Indiana Pacers Nike Swingman Custom Jersey Navy – Icon Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0238374356.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman Indiana Pacers bleu marine – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/indiana-pacers-nike-swingman-custom-jersey-navy-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Myles Turner Indiana Pacers Nike Finished Swingman Jersey Gold – Statement Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-011902801c.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike Finished Gold de Myles Turner, Indiana Pacers – Statement Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/myles-turner-indiana-pacers-nike-finished-swingman-jersey-gold-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Myles Turner Indiana Pacers Nike Swingman Jersey Navy – Icon Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-011931d16a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman bleu marine Myles Turner Indiana Pacers – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/myles-turner-indiana-pacers-nike-swingman-jersey-navy-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Indiana Pacers Nike 2019/20 Custom Swingman Jersey Yellow – Statement Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0236078b14.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike Indiana Pacers 2019/20 jaune – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/indiana-pacers-nike-2019-20-custom-swingman-jersey-yellow-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Domantas Sabonis Indiana Pacers Nike 2021/22 Swingman Jersey – City Edition – Navy",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-220705284f.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Domantas Sabonis Indiana Pacers Nike 2021/22 Swingman – City Edition – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/domantas-sabonis-indiana-pacers-nike-2021-22-swingman-jersey-city-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Indiana Pacers Myles Turner #33 Nike Gold Finished Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-163525eba6.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Men’s Indiana Pacers Myles Turner #33 Nike Gold Finished Swingman Jersey – Statement Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-indiana-pacers-myles-turner-33-nike-gold-finished-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Indiana Pacers Nike 2020/21 Swingman Custom Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-023737a1b0.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman 2020/21 des Indiana Pacers – Édition Icon – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/indiana-pacers-nike-2020-21-swingman-custom-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Indiana Pacers Nike 2020/21 Swingman Custom Jersey – Association Edition – White",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-023707c47f.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman 2020/21 des Indiana Pacers – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/indiana-pacers-nike-2020-21-swingman-custom-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Indiana Pacers Myles Turner #33 Nike Gold Replica Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-163558de38.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot réplique Nike Gold Swingman Myles Turner n° 33 des Indiana Pacers – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-indiana-pacers-myles-turner-33-nike-gold-replica-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Indiana Pacers Victor Oladipo #4 Nike Gold Finished Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-163842bd7a.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike doré Victor Oladipo n°4 des Indiana Pacers – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-indiana-pacers-victor-oladipo-4-nike-gold-finished-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Indiana Pacers Myles Turner #33 Nike Navy Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-163703f2fa.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman bleu marine Myles Turner n° 33 des Indiana Pacers – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-indiana-pacers-myles-turner-33-nike-navy-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Indiana Pacers Myles Turner #33 Nike White 2019/20 Finished Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-16373764ff.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike blanc 2019/20 de Myles Turner #33 des Indiana Pacers (édition City)",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-indiana-pacers-myles-turner-33-nike-white-2019-20-finished-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Indiana Pacers Victor Oladipo #4 Jordan Gold 202021 Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1638091a80.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Gold 2020-21 de Victor Oladipo (Indiana Pacers), numéro 4, édition Statement,",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-indiana-pacers-victor-oladipo-4-jordan-gold-202021-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Indiana Pacers Malcolm Brogdon #7 Nike Navy 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-163452695a.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike bleu marine 2021/22 - Édition City - Malcolm Brogdon #7 des Indiana Pacers (Homme)",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-indiana-pacers-malcolm-brogdon-7-nike-navy-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Indiana Pacers Victor Oladipo #4 Nike Navy Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-16391262d7.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike bleu marine Victor Oladipo n°4 des Indiana Pacers – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-indiana-pacers-victor-oladipo-4-nike-navy-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Indiana Pacers Chris Duarte #3 Nike Navy 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1633079337.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike bleu marine 2021/22 – City Edition Chris Duarte n°3 des Indiana Pacers, pour homme.",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-indiana-pacers-chris-duarte-3-nike-navy-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Indiana Pacers Domantas Sabonis #11 Nike Navy 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1634191e97.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman #11 Nike Navy 2021/22 Swingman pour hommes Indiana Pacers Domantas Sabonis – City Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-indiana-pacers-domantas-sabonis-11-nike-navy-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Indiana Pacers Myles Turner #33 Nike Navy 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1636318496.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike bleu marine 2021/22 de Myles Turner (Indiana Pacers), numéro 33, pour homme – Édition City",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-indiana-pacers-myles-turner-33-nike-navy-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Indiana Pacers Caris LeVert #22 Nike Navy 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-163235efac.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike bleu marine 2021/22 Caris LeVert n° 22 des Indiana Pacers – Édition City, pour homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-indiana-pacers-caris-levert-22-nike-navy-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Indiana Pacers Chris Duarte #3 Nike Navy Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-163347e308.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman bleu marine Chris Duarte n°3 des Indiana Pacers – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-indiana-pacers-chris-duarte-3-nike-navy-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "HALIBURTON #0 Indiana Pacers Men’s Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Indiana Pacers",
    "league": "NBA",
    "team": "Indiana Pacers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-203916c30f.png?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman pour hommes HALIBURTON #0 Indiana Pacers – City Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/haliburton-0-indiana-pacers-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "LA Clippers Nike Unisex 2024/25 Custom Swingman Jersey – City Edition – Light Blue",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0858215b36.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe LA Clippers 2024/25 – Édition City – Bleu clair,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/la-clippers-nike-unisex-2024-25-custom-swingman-jersey-city-edition-light-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kawhi Leonard LA Clippers Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Light Blue",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-07181557f5.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Nike Swingman Kawhi Leonard LA Clippers 2024/25 – Édition City – Bleu clair",
    "supplierUrl": "https://www.vivi-jersey.com/products/kawhi-leonard-la-clippers-nike-unisex-2024-25-swingman-player-jersey-city-edition-light-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kawhi Leonard LA Clippers Nike Unisex 2023/24 Swingman Jersey – Navy – City Edition",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-071747d0c6.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2023/24 des LA Clippers de Kawhi Leonard – Bleu marine – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/kawhi-leonard-la-clippers-nike-unisex-2023-24-swingman-jersey-navy-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "LA Clippers Nike Unisex 2022/23 Swingman Custom Jersey Royal – Icon Edition",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-085657f2e3.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Swingman unisexe Nike LA Clippers 2022/23 Royal – Icon Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/la-clippers-nike-unisex-2022-23-swingman-custom-jersey-royal-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kawhi Leonard LA Clippers Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Royal",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-07172088be.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 des LA Clippers de Kawhi Leonard – Édition Icon – Royal,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/kawhi-leonard-la-clippers-nike-unisex-2022-23-swingman-jersey-icon-edition-royal",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "LA Clippers Nike Unisex 2023/24 Custom Swingman Jersey – Navy – City Edition",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-085753a6d2.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe LA Clippers 2023/24 – Bleu marine – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/la-clippers-nike-unisex-2023-24-custom-swingman-jersey-navy-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Paul George LA Clippers Nike Unisex 2023/24 Swingman Jersey – Navy – City Edition",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-04504454c0.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Paul George LA Clippers Nike Maillot Swingman Unisexe 2023/24 – Marine – City Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/paul-george-la-clippers-nike-unisex-2023-24-swingman-jersey-navy-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Paul George LA Clippers Jordan Brand 2022/23 Statement Edition Swingman Jersey – Black",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0448251c67.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Paul George LA Clippers Jordan Brand 2022/23 Statement Edition – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/paul-george-la-clippers-jordan-brand-2022-23-statement-edition-swingman-jersey-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "LA Clippers Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-085029cdfd.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Swingman unisexe LA Clippers Jordan Brand 2022/23 – Édition Statement – ​​Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/la-clippers-jordan-brand-unisex-2022-23-swingman-custom-jersey-statement-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kawhi Leonard LA Clippers Jordan Brand 2022/23 Statement Edition Swingman Jersey – Black",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-071339ba89.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Kawhi Leonard LA Clippers Jordan Brand 2022/23 Statement Edition – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/kawhi-leonard-la-clippers-jordan-brand-2022-23-statement-edition-swingman-jersey-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kawhi Leonard LA Clippers Nike Unisex 2022/23 Swingman Jersey – City Edition – Black",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-071653cb33.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 des LA Clippers de Kawhi Leonard – Édition City – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/kawhi-leonard-la-clippers-nike-unisex-2022-23-swingman-jersey-city-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "LA Clippers Nike Unisex 2022/23 Swingman Custom Jersey – City Edition – Black",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-085629f8a1.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Nike Swingman 2022/23 des LA Clippers – Édition City – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/la-clippers-nike-unisex-2022-23-swingman-custom-jersey-city-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Paul George LA Clippers Nike Unisex 2022/23 Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0449488b98.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 Paul George LA Clippers – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/paul-george-la-clippers-nike-unisex-2022-23-swingman-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Paul George LA Clippers Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Royal",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-045015c2d0.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Paul George LA Clippers Nike Maillot Swingman Unisexe 2022/23 – Icon Edition – Royal,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/paul-george-la-clippers-nike-unisex-2022-23-swingman-jersey-icon-edition-royal",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "LA Clippers Nike Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0857250857.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Nike Swingman blanc LA Clippers 2022/23 – Édition Association",
    "supplierUrl": "https://www.vivi-jersey.com/products/la-clippers-nike-unisex-2022-23-swingman-custom-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Paul George LA Clippers Jordan Brand 2020/21 Swingman Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-044757263d.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Paul George LA Clippers Jordan Brand 2020/21 – Édition Statement – ​​Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/paul-george-la-clippers-jordan-brand-2020-21-swingman-jersey-statement-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kawhi Leonard LA Clippers Nike Unisex 2022/23 Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-071625f8d6.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 des LA Clippers de Kawhi Leonard – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/kawhi-leonard-la-clippers-nike-unisex-2022-23-swingman-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Paul George LA Clippers Nike 2021/22 Diamond Swingman Jersey – Icon Edition – Royal",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0449208430.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Paul George LA Clippers Nike 2021/22 Diamond Swingman – Édition Icon – Royal,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/paul-george-la-clippers-nike-2021-22-diamond-swingman-jersey-icon-edition-royal",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kawhi Leonard LA Clippers Jordan Brand 2020/21 Swingman Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-071312568a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Kawhi Leonard LA Clippers Jordan Brand 2020/21 – Édition Statement – ​​Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/kawhi-leonard-la-clippers-jordan-brand-2020-21-swingman-jersey-statement-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kawhi Leonard LA Clippers Nike 2019/20 Swingman Jersey Blue – Icon Edition",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-071407c99b.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman bleu Kawhi Leonard LA Clippers Nike 2019/20 – Édition Icone,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/kawhi-leonard-la-clippers-nike-2019-20-swingman-jersey-blue-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kawhi Leonard LA Clippers Nike 2020/21 Swingman Jersey – Royal – Icon Edition",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-071502f877.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2020/21 des LA Clippers de Kawhi Leonard – Bleu royal – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/kawhi-leonard-la-clippers-nike-2020-21-swingman-jersey-royal-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kawhi Leonard LA Clippers Nike 2020/21 Swingman Player Jersey Gray – Earned Edition",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-071529cede.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman gris Kawhi Leonard LA Clippers Nike 2020/21 – Édition Earned,球员",
    "supplierUrl": "https://www.vivi-jersey.com/products/kawhi-leonard-la-clippers-nike-2020-21-swingman-player-jersey-gray-earned-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kawhi Leonard LA Clippers Nike 2021/22 Diamond Swingman Jersey – Icon Edition – Royal",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-071557904b.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Kawhi Leonard LA Clippers Nike 2021/22 Diamond Swingman – Édition Icon – Royal,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/kawhi-leonard-la-clippers-nike-2021-22-diamond-swingman-jersey-icon-edition-royal",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "LA Clippers Nike 2021/22 Diamond Swingman Custom Jersey – Icon Edition – Royal",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-085532c055.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé LA Clippers Nike 2021/22 Diamond Swingman – Édition Icon – Royal,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/la-clippers-nike-2021-22-diamond-swingman-custom-jersey-icon-edition-royal",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "LA Clippers Nike 2020/21 Swingman Custom Jersey – Icon Edition – Royal",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0855034c30.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé LA Clippers Nike Swingman 2020/21 – Édition Icon – Royal,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/la-clippers-nike-2020-21-swingman-custom-jersey-icon-edition-royal",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Paul George LA Clippers Nike 2019/20 Swingman Jersey Blue – Icon Edition",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-04485238ea.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Paul George LA Clippers Nike 2019/20 Swingman Bleu – Icon Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/paul-george-la-clippers-nike-2019-20-swingman-jersey-blue-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "LA Clippers Nike 2021/22 Swingman Custom Jersey – City Edition – Light Blue",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-085600a0e6.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Swingman Nike LA Clippers 2021/22 – Édition City – Bleu clair,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/la-clippers-nike-2021-22-swingman-custom-jersey-city-edition-light-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kawhi Leonard LA Clippers Nike 2019/2020 Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-07143494dd.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2019/2020 des LA Clippers de Kawhi Leonard – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/kawhi-leonard-la-clippers-nike-2019-2020-swingman-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s LA Clippers Paul George #13 Nike Black 2020/21 Swingman Player Jersey – City Edition",
    "category": "sports",
    "group": "LA Clippers",
    "league": "NBA",
    "team": "LA Clippers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-16482453fa.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot de joueur Nike Swingman noir 2020/21 de Paul George (LA Clippers), numéro 13 – Édition City",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-la-clippers-paul-george-13-nike-black-2020-21-swingman-player-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Dwight Howard #39 Yellow Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/a3cbea87e1.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot jaune pour homme Los Angeles Lakers 75e anniversaire Dwight Howard #39,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-dwight-howard-39-yellow-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers Jordan Edition Dwight Howard #39 Purple Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/22/products/b30f98f0dc.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot violet pour homme Los Angeles Lakers Jordan Edition Dwight Howard #39,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-jordan-edition-dwight-howard-39-purple-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary LeBron James #6 White Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-130349bb74.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot blanc pour homme Los Angeles Lakers 75e anniversaire LeBron James #6,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-lebron-james-6-white-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Rajon Rondo #4 White Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-13061270f9.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot pour homme blanc 75e anniversaire des Lakers de Los Angeles Rajon Rondo #4,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-rajon-rondo-4-white-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Anthony Davis #3 White Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-130908852c.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot blanc homme Los Angeles Lakers 75e anniversaire Anthony Davis #3,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-anthony-davis-3-white-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Kyle Kuzma #0 White Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1312159345.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot blanc pour homme Kyle Kuzma n° 0, édition spéciale 75e anniversaire des Los Angeles Lakers.",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-kyle-kuzma-0-white-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Carmelo Anthony #7 White Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-131544da5f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot blanc pour homme Los Angeles Lakers 75e anniversaire Carmelo Anthony #7,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-carmelo-anthony-7-white-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Nick Young #0 White Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-13183663b1.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot blanc pour homme Nick Young n° 0, édition spéciale 75e anniversaire des Los Angeles Lakers.",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-nick-young-0-white-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Shaquille O’Neal #34 White Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-132312daeb.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot blanc pour homme Los Angeles Lakers 75e anniversaire Shaquille O'Neal #34,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-shaquille-oneal-34-white-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Kobe Bryant #8 White Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-132751bc7d.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot blanc pour homme des Los Angeles Lakers, 75e anniversaire de Kobe Bryant n° 8,",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-kobe-bryant-8-white-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary LeBron James #23 White Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-13312540d1.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot blanc pour homme Los Angeles Lakers 75e anniversaire LeBron James #23,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-lebron-james-23-white-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Dwight Howard #39 White Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1335385a9e.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot blanc pour homme Los Angeles Lakers 75e anniversaire Dwight Howard #39,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-dwight-howard-39-white-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2022/23 Los Angeles Lakers 75th Anniversary City Edition Kobe Bryant #24 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-134012ec57.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme Kobe Bryant n° 24, édition spéciale 75e anniversaire des Los Angeles Lakers (saison 2022/23)",
    "supplierUrl": "https://www.vivi-jersey.com/products/2022-23-los-angeles-lakers-75th-anniversary-city-edition-kobe-bryant-24-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2022/23 Los Angeles Lakers 75th Anniversary City Edition Carmelo Anthony #7 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1345483e0c.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Carmelo Anthony n°7, édition spéciale 75e anniversaire des Los Angeles Lakers, saison 2022/23",
    "supplierUrl": "https://www.vivi-jersey.com/products/2022-23-los-angeles-lakers-75th-anniversary-city-edition-carmelo-anthony-7-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Kobe Bryant #24 White Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1353043ab4.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot blanc pour homme des Los Angeles Lakers, édition spéciale 75e anniversaire, Kobe Bryant n° 24",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-kobe-bryant-24-white-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2022/23 Los Angeles Lakers 75th Anniversary City Edition LeBron James #6 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1356154be1.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme LeBron James n° 6, édition spéciale 75e anniversaire des Los Angeles Lakers (saison 2022/23)",
    "supplierUrl": "https://www.vivi-jersey.com/products/2022-23-los-angeles-lakers-75th-anniversary-city-edition-lebron-james-6-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Russell Westbrook #0 White Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-140134525b.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot blanc homme Russell Westbrook n° 0, édition spéciale 75e anniversaire des Los Angeles Lakers",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-russell-westbrook-0-white-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2022/23 Los Angeles Lakers 75th Anniversary City Edition Dwight Howard #39 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1406317ca9.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme Dwight Howard n° 39, édition spéciale 75e anniversaire des Los Angeles Lakers (saison 2022/23)",
    "supplierUrl": "https://www.vivi-jersey.com/products/2022-23-los-angeles-lakers-75th-anniversary-city-edition-dwight-howard-39-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2022/23 Los Angeles Lakers 75th Anniversary City Edition LeBron James #23 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-141211a30e.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme LeBron James n° 23, édition spéciale 75e anniversaire des Los Angeles Lakers (saison 2022/23)",
    "supplierUrl": "https://www.vivi-jersey.com/products/2022-23-los-angeles-lakers-75th-anniversary-city-edition-lebron-james-23-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2022/23 Los Angeles Lakers 75th Anniversary City Edition Anthony Davis #3 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/020-1423240213.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme Anthony Davis n° 3, édition spéciale 75e anniversaire des Los Angeles Lakers (saison 2022/23)",
    "supplierUrl": "https://www.vivi-jersey.com/products/2022-23-los-angeles-lakers-75th-anniversary-city-edition-anthony-davis-3-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2022/23 Los Angeles Lakers 75th Anniversary City Edition Russell Westbrook #0 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-142411150b.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme Russell Westbrook n° 0, édition spéciale 75e anniversaire des Los Angeles Lakers (saison 2022/23)",
    "supplierUrl": "https://www.vivi-jersey.com/products/2022-23-los-angeles-lakers-75th-anniversary-city-edition-russell-westbrook-0-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2022/23 Los Angeles Lakers 75th Anniversary City Edition Rajon Rondo #4 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-14304092f1.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme Rajon Rondo n° 4, édition spéciale 75e anniversaire des Los Angeles Lakers (saison 2022/23)",
    "supplierUrl": "https://www.vivi-jersey.com/products/2022-23-los-angeles-lakers-75th-anniversary-city-edition-rajon-rondo-4-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2022/23 Los Angeles Lakers 75th Anniversary City Edition Kobe Bryant #8 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/019-144204f71f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme Kobe Bryant n° 8, édition spéciale 75e anniversaire des Los Angeles Lakers (saison 2022/23)",
    "supplierUrl": "https://www.vivi-jersey.com/products/2022-23-los-angeles-lakers-75th-anniversary-city-edition-kobe-bryant-8-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2022/23 Los Angeles Lakers City Edition X-BOX Collaboration #117 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1445494d5a.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme Los Angeles Lakers City Edition 2022/23, collaboration Xbox #117, Los Angeles Lakers",
    "supplierUrl": "https://www.vivi-jersey.com/products/2022-23-los-angeles-lakers-city-edition-x-box-collaboration-117-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary X-BOX Collaboration #117 Yellow Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1452052118.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Los Angeles Lakers 75th Anniversary X-BOX Collaboration #117 Yellow Men’s Jersey,Los Angeles Lakers",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-x-box-collaboration-117-yellow-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Jordan Edition Kobe Bryant #8 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-145544990b.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Los Angeles Lakers 75th Anniversary Jordan Edition Kobe Bryant #8 Men’s Jersey,Los Angeles Lakers",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-jordan-edition-kobe-bryant-8-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Jordan Edition LeBron James #6 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-145802bfad.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme LeBron James n°6, édition spéciale 75e anniversaire des Los Angeles Lakers (Jordan Edition)",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-jordan-edition-lebron-james-6-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Jordan Edition Kobe Bryant #24 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-14593340ad.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme Kobe Bryant n° 24, édition spéciale 75e anniversaire des Los Angeles Lakers (Jordan), Los Angeles Lakers",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-jordan-edition-kobe-bryant-24-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Jordan Edition Rajon Rondo #4 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1502210279.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme Rajon Rondo n°4, édition spéciale 75e anniversaire des Los Angeles Lakers (Jordan Edition)",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-jordan-edition-rajon-rondo-4-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Jordan Edition LeBron James #23 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-15035904bc.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme LeBron James n° 23, édition spéciale 75e anniversaire des Los Angeles Lakers (Jordan Edition)",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-jordan-edition-lebron-james-23-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Jordan Edition Anthony Davis #3 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1505272f6b.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme Anthony Davis n°3, édition spéciale 75e anniversaire des Los Angeles Lakers (Jordan), Los Angeles Lakers",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-jordan-edition-anthony-davis-3-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Jordan Edition Carmelo Anthony #7 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-151330f65a.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme Carmelo Anthony n°7, édition spéciale 75e anniversaire des Los Angeles Lakers (Jordan Edition)",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-jordan-edition-carmelo-anthony-7-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Jordan Edition Dwight Howard #39 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1514529a61.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme Dwight Howard n° 39, édition spéciale 75e anniversaire des Los Angeles Lakers (Jordan), Los Angeles Lakers",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-jordan-edition-dwight-howard-39-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Jordan Edition Russell Westbrook #0 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1520541e40.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme Russell Westbrook n° 0, édition spéciale 75e anniversaire des Los Angeles Lakers (Jordan), Los Angeles Lakers",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-jordan-edition-russell-westbrook-0-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Kyle Anderson #95 Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-152401d474.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot homme Kyle Anderson n° 95, édition spéciale 75e anniversaire des Los Angeles Lakers",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-kyle-anderson-95-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Los Angeles Lakers 75th Anniversary Kyrie Irving #11 White Men’s Jersey",
    "category": "sports",
    "group": "Los Angeles Lakers",
    "league": "NBA",
    "team": "Los Angeles Lakers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1526073a61.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot blanc Kyrie Irving n° 11 pour homme, édition spéciale 75e anniversaire des Los Angeles Lakers",
    "supplierUrl": "https://www.vivi-jersey.com/products/los-angeles-lakers-75th-anniversary-kyrie-irving-11-white-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jaren Jackson Jr. Memphis Grizzlies Jordan Brand 2022/23 Statement Edition Swingman Jersey – Light Blue",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-174610c6a3.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand Statement Edition 2022/23 de Jaren Jackson Jr. (Memphis Grizzlies) – Bleu clair",
    "supplierUrl": "https://www.vivi-jersey.com/products/jaren-jackson-jr-memphis-grizzlies-jordan-brand-2022-23-statement-edition-swingman-jersey-light-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Memphis Grizzlies Jaren Jackson #13 Nike Navy Swingman Team Jersey",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-17420382df.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot d'équipe Nike Swingman bleu marine Jaren Jackson n° 13 des Memphis Grizzlies, pour homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-memphis-grizzlies-jaren-jackson-13-nike-navy-swingman-team-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Memphis Grizzlies Grizzlies Ja Morant #12 White Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1808198fa8.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "description": "Maillot Swingman blanc unisexe Memphis Grizzlies Ja Morant n° 12 – Édition Association, Memphis Grizzlies",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-memphis-grizzlies-grizzlies-ja-morant-12-white-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Memphis Grizzlies Grizzlies Ja Morant #12 Navy Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1820520a1b.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "description": "Maillot Swingman bleu marine unisexe Memphis Grizzlies Ja Morant n° 12 – Édition Icon",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-memphis-grizzlies-grizzlies-ja-morant-12-navy-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Memphis Grizzlies Grizzlies Ja Morant #12 Light Blue Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-180722a500.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "description": "Maillot Swingman bleu clair unisexe Memphis Grizzlies Ja Morant n° 12 – Édition Statement, Memphis Grizzlies",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-memphis-grizzlies-grizzlies-ja-morant-12-light-blue-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Memphis Grizzlies Grizzlies Ja Morant #12 Black Swingman Jersey – Classic Edition",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1807046393.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "description": "Maillot Swingman noir unisexe Memphis Grizzlies Ja Morant n° 12 – Édition classique, Memphis Grizzlies",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-memphis-grizzlies-grizzlies-ja-morant-12-black-swingman-jersey-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Ja Morant Memphis Grizzlies Nike Black Classic Edition Swingman Jersey",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-1534025411.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Ja Morant Memphis Grizzlies Nike Black Classic Edition Swingman Jersey,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/ja-morant-memphis-grizzlies-nike-black-classic-edition-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Memphis Grizzlies Nike Black Classic Edition Swingman Custom Jersey",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/c3b7bb3ff1.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Black Classic Edition Swingman des Memphis Grizzlies,",
    "supplierUrl": "https://www.vivi-jersey.com/products/memphis-grizzlies-nike-black-classic-edition-swingman-custom-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Memphis Grizzlies Nike Unisex Adult Swingman Custom Jersey – Classic Edition – White",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-131834580a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe adulte Memphis Grizzlies – Édition classique – Blanc, Memphis Grizzlies",
    "supplierUrl": "https://www.vivi-jersey.com/products/memphis-grizzlies-nike-unisex-adult-swingman-custom-jersey-classic-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Memphis Grizzlies Ja Morant Nike Green 2019/20 Hardwood Classics Swingman Player Jersey",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1753562e18.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot de joueur Nike vert John Marant Ja Morant, Memphis Grizzlies, collection Hardwood Classics 2019/20, Swingman",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-memphis-grizzlies-ja-morant-nike-green-2019-20-hardwood-classics-swingman-player-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Memphis Grizzlies Nike Unisex 2024/25 Custom Swingman Jersey – City Edition – Red",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1318046afe.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Memphis Grizzlies 2024/25 – Édition City – Rouge, Memphis Grizzlies",
    "supplierUrl": "https://www.vivi-jersey.com/products/memphis-grizzlies-nike-unisex-2024-25-custom-swingman-jersey-city-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Ja Morant Memphis Grizzlies Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Red",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-025955559f.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Nike Swingman 2024/25 des Memphis Grizzlies, Ja Morant – Édition City – Rouge",
    "supplierUrl": "https://www.vivi-jersey.com/products/ja-morant-memphis-grizzlies-nike-unisex-2024-25-swingman-player-jersey-city-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Memphis Grizzlies Nike Unisex 2023/24 Custom Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1317322b4e.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Memphis Grizzlies 2023/24 – Noir – Édition City, Memphis Grizzlies",
    "supplierUrl": "https://www.vivi-jersey.com/products/memphis-grizzlies-nike-unisex-2023-24-custom-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Ja Morant Memphis Grizzlies Nike Unisex Select Series Swingman Jersey?– Black",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-030024306b.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike Select Series des Memphis Grizzlies de Ja Morant – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/ja-morant-memphis-grizzlies-nike-unisex-select-series-swingman-jersey-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Ja Morant Memphis Grizzlies Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0259267561.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Ja Morant Memphis Grizzlies Nike Unisexe 2023/24 Swingman Jersey – Noir – City Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/ja-morant-memphis-grizzlies-nike-unisex-2023-24-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Memphis Grizzlies Nike Unisex 2022/23 Swingman Custom Jersey – City Edition – Black",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1316252dff.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe Memphis Grizzlies 2022/23 – Édition City – Noir, Memphis Grizzlies",
    "supplierUrl": "https://www.vivi-jersey.com/products/memphis-grizzlies-nike-unisex-2022-23-swingman-custom-jersey-city-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Desmond Bane Memphis Grizzlies Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-21205427dc.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2023/24 des Memphis Grizzlies de Desmond Bane – Noir – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/desmond-bane-memphis-grizzlies-nike-unisex-2023-24-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Ja Morant Memphis Grizzlies Jordan Brand 2022/23 Statement Edition Swingman Jersey – Light Blue",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-02573159a4.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand Statement Edition 2022/23 des Memphis Grizzlies de Ja Morant – Bleu clair,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/ja-morant-memphis-grizzlies-jordan-brand-2022-23-statement-edition-swingman-jersey-light-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Memphis Grizzlies Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Blue",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-13130668ce.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé unisexe Jordan Brand Memphis Grizzlies 2022/23 – Édition Statement – ​​Bleu, Memphis Grizzlies",
    "supplierUrl": "https://www.vivi-jersey.com/products/memphis-grizzlies-jordan-brand-unisex-2022-23-swingman-custom-jersey-statement-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Ja Morant Memphis Grizzlies Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-025857a148.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 des Memphis Grizzlies de Ja Morant – Édition Icon – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/ja-morant-memphis-grizzlies-nike-unisex-2022-23-swingman-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Memphis Grizzlies Nike Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-160812532a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe Memphis Grizzlies 2022/23 blanc – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/memphis-grizzlies-nike-unisex-2022-23-swingman-custom-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Ja Morant Memphis Grizzlies Nike Unisex 2022/23 Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "Memphis Grizzlies",
    "league": "NBA",
    "team": "Memphis Grizzlies",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-025828e5d3.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 des Memphis Grizzlies de Ja Morant – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/ja-morant-memphis-grizzlies-nike-unisex-2022-23-swingman-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jaime Jaquez Jr. Miami Heat Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Red",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-03224045bb.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2024/25 de Jaime Jaquez Jr., Miami Heat – Édition City – Rouge",
    "supplierUrl": "https://www.vivi-jersey.com/products/jaime-jaquez-jr-miami-heat-nike-unisex-2024-25-swingman-player-jersey-city-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Bam Adebayo Miami Heat Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Red",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-113943bef1.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2024/25 de Bam Adebayo, Miami Heat – Édition City – Rouge, Miami",
    "supplierUrl": "https://www.vivi-jersey.com/products/bam-adebayo-miami-heat-nike-unisex-2024-25-swingman-player-jersey-city-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Tyler Herro Miami Heat Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Red",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1256348f34.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot de joueur unisexe Nike Swingman 2024/25 de Tyler Herro, Miami Heat – Édition City – Rouge",
    "supplierUrl": "https://www.vivi-jersey.com/products/tyler-herro-miami-heat-nike-unisex-2024-25-swingman-player-jersey-city-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jimmy Butler Miami Heat Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Red",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-045120e38b.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Nike Swingman 2024/25 de Jimmy Butler, Miami Heat – Édition City – Rouge, Miami",
    "supplierUrl": "https://www.vivi-jersey.com/products/jimmy-butler-miami-heat-nike-unisex-2024-25-swingman-player-jersey-city-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Tyler Herro Miami Heat Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1256051760.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2023/24 de Tyler Herro, Miami Heat – Noir – Édition City",
    "supplierUrl": "https://www.vivi-jersey.com/products/tyler-herro-miami-heat-nike-unisex-2023-24-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Miami Heat Nike Unisex 2024/25 Custom Swingman Jersey – City Edition – Red",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-22291816f5.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Miami Heat 2024/25 – Édition City – Rouge, Miami",
    "supplierUrl": "https://www.vivi-jersey.com/products/miami-heat-nike-unisex-2024-25-custom-swingman-jersey-city-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Bam Adebayo Miami Heat Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-113915a147.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike unisexe 2023/24 de Bam Adebayo, Miami Heat – Noir – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/bam-adebayo-miami-heat-nike-unisex-2023-24-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Miami Heat Nike 2019/20 Swingman Custom Jersey Blue – City Edition",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-2224558902.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman Miami Heat 2019/20 bleu – Édition City, Miami",
    "supplierUrl": "https://www.vivi-jersey.com/products/miami-heat-nike-2019-20-swingman-custom-jersey-blue-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jimmy Butler Miami Heat Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0450520a42.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2023/24 de Jimmy Butler, Miami Heat – Noir – Édition City, Miami",
    "supplierUrl": "https://www.vivi-jersey.com/products/jimmy-butler-miami-heat-nike-unisex-2023-24-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Miami Heat Nike Unisex 2022/23 Swingman Custom Jersey Black – Icon Edition",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-2227397416.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe Miami Heat 2022/23 noir – Édition Icon, Miami",
    "supplierUrl": "https://www.vivi-jersey.com/products/miami-heat-nike-unisex-2022-23-swingman-custom-jersey-black-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jimmy Butler Miami Heat Nike Unisex 2022/23 Swingman Jersey – City Edition – White",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-044956ef67.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 de Jimmy Butler, Miami Heat – Édition City – Blanc, Miami",
    "supplierUrl": "https://www.vivi-jersey.com/products/jimmy-butler-miami-heat-nike-unisex-2022-23-swingman-jersey-city-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Miami Heat Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Red",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-222207a795.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Miami Heat Jordan Brand Swingman 2022/23 – Édition Statement – ​​Rouge, Miami",
    "supplierUrl": "https://www.vivi-jersey.com/products/miami-heat-jordan-brand-unisex-2022-23-swingman-custom-jersey-statement-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kyle Lowry Miami Heat Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-08285006e1.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Nike Swingman 2022/23 de Kyle Lowry, Miami Heat – Édition Icon – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/kyle-lowry-miami-heat-nike-unisex-2022-23-swingman-jersey-icon-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kyle Lowry Miami Heat Nike Unisex 2022/23 Swingman Jersey – City Edition – White",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-082821368e.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Nike Swingman 2022/23 de Kyle Lowry, Miami Heat – Édition City – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/kyle-lowry-miami-heat-nike-unisex-2022-23-swingman-jersey-city-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jimmy Butler Miami Heat Nike 2022/23 Swingman Jersey White – Classic Edition",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0448593032.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc Nike 2022/23 de Jimmy Butler, Miami Heat – Édition Classique, Miami",
    "supplierUrl": "https://www.vivi-jersey.com/products/jimmy-butler-miami-heat-nike-2022-23-swingman-jersey-white-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Miami Heat Nike Unisex 2022/23 Custom Swingman Jersey – Classic Edition – White",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-2227027516.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Miami Heat 2022/23 – Édition classique – Blanc, Miami",
    "supplierUrl": "https://www.vivi-jersey.com/products/miami-heat-nike-unisex-2022-23-custom-swingman-jersey-classic-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Tyler Herro Miami Heat Nike Unisex 2022/23 Swingman Jersey – City Edition – White",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1254572bbd.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 de Tyler Herro, Miami Heat – Édition City – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/tyler-herro-miami-heat-nike-unisex-2022-23-swingman-jersey-city-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Bam Adebayo Miami Heat Nike Unisex 2022/23 Swingman Jersey – City Edition – White",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-113818915b.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 de Bam Adebayo, Miami Heat – Édition City – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/bam-adebayo-miami-heat-nike-unisex-2022-23-swingman-jersey-city-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Miami Heat Nike Unisex 2022/23 Swingman Custom Jersey – City Edition – White",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-2228127d72.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Nike Miami Heat 2022/23 Swingman – Édition City – Blanc, Miami",
    "supplierUrl": "https://www.vivi-jersey.com/products/miami-heat-nike-unisex-2022-23-swingman-custom-jersey-city-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jimmy Butler Miami Heat Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0450245e97.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 de Jimmy Butler, Miami Heat – Édition Icon – Noir, Miami",
    "supplierUrl": "https://www.vivi-jersey.com/products/jimmy-butler-miami-heat-nike-unisex-2022-23-swingman-jersey-icon-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jimmy Butler Miami Heat Jordan Brand 2022/23 Statement Edition Swingman Jersey – Red",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0447368472.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand Statement Edition 2022/23 de Jimmy Butler, Miami Heat – Rouge, Miami",
    "supplierUrl": "https://www.vivi-jersey.com/products/jimmy-butler-miami-heat-jordan-brand-2022-23-statement-edition-swingman-jersey-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jimmy Butler Miami Heat Nike Unisex 2022/23 Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "Miami Heat",
    "league": "NBA",
    "team": "Miami Heat",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-04492825f5.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 de Jimmy Butler, Miami Heat – Édition Association – Blanc, Miami",
    "supplierUrl": "https://www.vivi-jersey.com/products/jimmy-butler-miami-heat-nike-unisex-2022-23-swingman-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Milwaukee Bucks Giannis Antetokounmpo #34 Black Select Series Swingman Jersey",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1821112e30.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "description": "Maillot unisexe Milwaukee Bucks Giannis Antetokounmpo #34 Noir Select Series Swingman,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-milwaukee-bucks-giannis-antetokounmpo-34-black-select-series-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Milwaukee Bucks Giannis Antetokounmpo #34 Cream Swingman Jersey 2025/26 – City Edition",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1808065418.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "description": "Maillot Swingman unisexe Milwaukee Bucks Giannis Antetokounmpo #34 crème 2025/26 – City Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-milwaukee-bucks-giannis-antetokounmpo-34-cream-swingman-jersey-2025-26-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Milwaukee Bucks Giannis Antetokounmpo #34 White Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1808267e79.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "description": "Maillot unisexe Milwaukee Bucks Giannis Antetokounmpo #34 Blanc Swingman – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-milwaukee-bucks-giannis-antetokounmpo-34-white-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Milwaukee Bucks Giannis Antetokounmpo #34 Hunter Green Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1808364f23.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "description": "Maillot Swingman unisexe Milwaukee Bucks Giannis Antetokounmpo #34 vert chasseur – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-milwaukee-bucks-giannis-antetokounmpo-34-hunter-green-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Milwaukee Bucks Giannis Antetokounmpo #34 Black Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-180745cf8d.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "description": "Maillot unisexe Milwaukee Bucks Giannis Antetokounmpo #34 Noir Swingman – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-milwaukee-bucks-giannis-antetokounmpo-34-black-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Milwaukee Bucks Nike Unisex 2023/24 Custom Swingman Jersey – Royal – City Edition",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0016031286.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Milwaukee Bucks 2023/24 – Bleu royal – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/milwaukee-bucks-nike-unisex-2023-24-custom-swingman-jersey-royal-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Giannis Antetokounmpo Milwaukee Bucks Nike Unisex 2023/24 Swingman Jersey – Blue – City Edition",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0055150fff.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Giannis Antetokounmpo Maillot Swingman Milwaukee Bucks Nike Unisexe 2023/24 – Bleu – City Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/giannis-antetokounmpo-milwaukee-bucks-nike-unisex-2023-24-swingman-jersey-blue-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Damian Lillard Milwaukee Bucks Nike Unisex Swingman Jersey – Icon Edition – Hunter Green",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-194412cfd1.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Swingman Nike des Milwaukee Bucks de Damian Lillard – Édition Icon – Vert chasseur,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/damian-lillard-milwaukee-bucks-nike-unisex-swingman-jersey-icon-edition-hunter-green",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Giannis Antetokounmpo Milwaukee Bucks Nike Unisex Select Series Swingman Jersey?– Black",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-005548888f.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike Select Series de Giannis Antetokounmpo (Milwaukee Bucks) – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/giannis-antetokounmpo-milwaukee-bucks-nike-unisex-select-series-swingman-jersey-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Giannis Antetokounmpo Milwaukee Bucks Nike Unisex 2022/23 Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-005327d0eb.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 des Milwaukee Bucks de Giannis Antetokounmpo – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/giannis-antetokounmpo-milwaukee-bucks-nike-unisex-2022-23-swingman-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Giannis Antetokounmpo Milwaukee Bucks Jordan Brand 2022/23 Statement Edition Swingman Jersey – Black",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0051406198.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand Statement Edition 2022/23 de Giannis Antetokounmpo des Milwaukee Bucks – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/giannis-antetokounmpo-milwaukee-bucks-jordan-brand-2022-23-statement-edition-swingman-jersey-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Khris Middleton Milwaukee Bucks Jordan Brand 2022/23 Statement Edition Swingman Jersey – Black",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0801235a45.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand Statement Edition 2022/23 de Khris Middleton, Milwaukee Bucks – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/khris-middleton-milwaukee-bucks-jordan-brand-2022-23-statement-edition-swingman-jersey-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Giannis Antetokounmpo Milwaukee Bucks Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Hunter Green",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-005439cc21.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 des Milwaukee Bucks de Giannis Antetokounmpo – Édition Icon – Vert chasseur",
    "supplierUrl": "https://www.vivi-jersey.com/products/giannis-antetokounmpo-milwaukee-bucks-nike-unisex-2022-23-swingman-jersey-icon-edition-hunter-green",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Milwaukee Bucks Nike Unisex 2022/23 Custom Swingman Jersey – Classic Edition – Purple",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-001350996b.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Milwaukee Bucks 2022/23 – Édition classique – Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/milwaukee-bucks-nike-unisex-2022-23-custom-swingman-jersey-classic-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Giannis Antetokounmpo Milwaukee Bucks Nike Unisex 2022/23 Swingman Jersey – City Edition – Royal",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-00540188f6.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Giannis Antetokounmpo Maillot Swingman Milwaukee Bucks Nike Unisexe 2022/23 – City Edition – Royal,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/giannis-antetokounmpo-milwaukee-bucks-nike-unisex-2022-23-swingman-jersey-city-edition-royal",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Milwaukee Bucks Nike Unisex 2022/23 Swingman Custom Jersey – City Edition – Royal",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0014235dd9.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe Milwaukee Bucks 2022/23 – City Edition – Royal,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/milwaukee-bucks-nike-unisex-2022-23-swingman-custom-jersey-city-edition-royal",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Milwaukee Bucks Nike Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0015295a2e.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe Milwaukee Bucks 2022/23 blanc – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/milwaukee-bucks-nike-unisex-2022-23-swingman-custom-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Giannis Antetokounmpo Milwaukee Bucks Nike 2022/23 Swingman Jersey Purple – Classic Edition",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-005254b1e7.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Giannis Antetokounmpo Milwaukee Bucks Nike 2022/23 Swingman Maillot Violet – Édition Classique,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/giannis-antetokounmpo-milwaukee-bucks-nike-2022-23-swingman-jersey-purple-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Khris Middleton Milwaukee Bucks Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Hunter Green",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0803164234.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 des Milwaukee Bucks de Khris Middleton – Édition Icon – Vert chasseur,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/khris-middleton-milwaukee-bucks-nike-unisex-2022-23-swingman-jersey-icon-edition-hunter-green",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Milwaukee Bucks Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-00095731fa.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Swingman unisexe Jordan Brand Milwaukee Bucks 2022/23 – Édition Statement – ​​Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/milwaukee-bucks-jordan-brand-unisex-2022-23-swingman-custom-jersey-statement-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Milwaukee Bucks Nike Unisex 2022/23 Swingman Custom Jersey Hunter Green – Icon Edition",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/02-001456952a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe Milwaukee Bucks 2022/23 vert chasseur – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/milwaukee-bucks-nike-unisex-2022-23-swingman-custom-jersey-hunter-green-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Khris Middleton Milwaukee Bucks Nike Unisex 2022/23 Swingman Jersey – City Edition – Royal",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0802485639.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Khris Middleton Maillot Swingman Milwaukee Bucks Nike Unisexe 2022/23 – City Edition – Royal,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/khris-middleton-milwaukee-bucks-nike-unisex-2022-23-swingman-jersey-city-edition-royal",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Khris Middleton Milwaukee Bucks Nike 2022/23 Swingman Jersey Purple – Classic Edition",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-08022036e6.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Khris Middleton Milwaukee Bucks Nike 2022/23 Swingman Maillot Violet – Édition Classique,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/khris-middleton-milwaukee-bucks-nike-2022-23-swingman-jersey-purple-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Giannis Antetokounmpo Milwaukee Bucks Nike 2020/21 Swingman Jersey Green – Icon Edition",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-00521871ce.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Giannis Antetokounmpo Maillot Swingman Milwaukee Bucks Nike 2020/21 Vert – Icon Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/giannis-antetokounmpo-milwaukee-bucks-nike-2020-21-swingman-jersey-green-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Milwaukee Bucks Nike Swingman Custom Jersey Green – Icon Edition",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0013131139.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman vert des Milwaukee Bucks – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/milwaukee-bucks-nike-swingman-custom-jersey-green-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Milwaukee Bucks Nike 2021/22 Swingman Custom Jersey – City Edition – White",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0012397b58.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Milwaukee Bucks Nike 2021/22 Swingman – City Edition – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/milwaukee-bucks-nike-2021-22-swingman-custom-jersey-city-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jrue Holiday Milwaukee Bucks Nike 2020/21 Swingman Jersey Hunter Green – Icon Edition",
    "category": "sports",
    "group": "Milwaukee Bucks",
    "league": "NBA",
    "team": "Milwaukee Bucks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-06162707da.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2020/21 Vert chasseur – Édition Icon de Jrue Holiday Milwaukee Bucks",
    "supplierUrl": "https://www.vivi-jersey.com/products/jrue-holiday-milwaukee-bucks-nike-2020-21-swingman-jersey-hunter-green-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Anthony Edwards Minnesota Timberwolves Jordan Brand Unisex Swingman Black Jersey – Statement Edition",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1703340a41.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Anthony Edwards Minnesota Timberwolves Jordan Brand Unisex Swingman Maillot Noir – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/anthony-edwards-minnesota-timberwolves-jordan-brand-unisex-swingman-black-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Anthony Edwards Minnesota Timberwolves Nike Unisex 2024/25 Swingman Player Jersey – City Edition – White",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-17124859e5.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2024/25 des Minnesota Timberwolves, Anthony Edwards – Édition City – Blanc",
    "supplierUrl": "https://www.vivi-jersey.com/products/anthony-edwards-minnesota-timberwolves-nike-unisex-2024-25-swingman-player-jersey-city-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Rudy Gobert Minnesota Timberwolves Nike Unisex 2024/25 Swingman Player Jersey – City Edition – White",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-180631f765.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Nike Swingman 2024/25 des Minnesota Timberwolves, Rudy Gobert – Édition City – Blanc, Minnesota Timberwolves",
    "supplierUrl": "https://www.vivi-jersey.com/products/rudy-gobert-minnesota-timberwolves-nike-unisex-2024-25-swingman-player-jersey-city-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Minnesota Timberwolves Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1747033ca9.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Jordan Brand Swingman 2022/23 des Minnesota Timberwolves – Édition Statement – ​​Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/minnesota-timberwolves-jordan-brand-unisex-2022-23-swingman-custom-jersey-statement-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Karl-Anthony Towns Minnesota Timberwolves Jordan Brand 2022/23 Statement Edition Swingman Black Jersey",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1733070fe9.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman noir Jordan Brand Statement Edition 2022/23 de Karl-Anthony Towns, Minnesota Timberwolves",
    "supplierUrl": "https://www.vivi-jersey.com/products/karl-anthony-towns-minnesota-timberwolves-jordan-brand-2022-23-statement-edition-swingman-black-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Anthony Edwards Minnesota Timberwolves Jordan Brand 2022/23 Statement Edition Swingman Black Jersey",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-16552882ab.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Anthony Edwards Minnesota Timberwolves Jordan Brand 2022/23 Statement Edition Swingman Maillot Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/anthony-edwards-minnesota-timberwolves-jordan-brand-2022-23-statement-edition-swingman-black-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Karl-Anthony Towns Minnesota Timberwolves Jordan Brand 2020/21 Swingman Jersey – Statement Edition – Green",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-17151695b1.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand 2020/21 – Édition Statement – ​​Vert, Karl-Anthony Towns, Minnesota Timberwolves",
    "supplierUrl": "https://www.vivi-jersey.com/products/karl-anthony-towns-minnesota-timberwolves-jordan-brand-2020-21-swingman-jersey-statement-edition-green",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Naz Reid Minnesota Timberwolves Nike Unisex Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-01330344fb.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike des Minnesota Timberwolves de Naz Reid – Édition Icone – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/naz-reid-minnesota-timberwolves-nike-unisex-swingman-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Minnesota Timberwolves Nike Unisex 2024/25 Custom Swingman Jersey – City Edition – White",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0030293098.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Minnesota Timberwolves 2024/25 – Édition City – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/minnesota-timberwolves-nike-unisex-2024-25-custom-swingman-jersey-city-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Minnesota Timberwolves Nike Association Edition Swingman Jersey – White – Anthony Edwards – Unisex",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-002740eec9.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike Association Edition des Minnesota Timberwolves – Blanc – Anthony Edwards – Unisexe,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/minnesota-timberwolves-nike-association-edition-swingman-jersey-white-anthony-edwards-unisex",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Nike Anthony Edwards White Minnesota Timberwolves 2023/24 Swingman Jersey – Classic Edition",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-131829403c.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike Anthony Edwards blanc Minnesota Timberwolves 2023/24 – Édition classique,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-nike-anthony-edwards-white-minnesota-timberwolves-2023-24-swingman-jersey-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Minnesota Timberwolves Nike Unisex 2022/23 Swingman Custom Jersey – City Edition – White",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-00284597ae.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Nike Swingman 2022/23 des Minnesota Timberwolves – Édition City – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/minnesota-timberwolves-nike-unisex-2022-23-swingman-custom-jersey-city-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Anthony Edwards Minnesota Timberwolves Nike Unisex Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-1022003bed.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike Anthony Edwards Minnesota Timberwolves – Édition Icon – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/anthony-edwards-minnesota-timberwolves-nike-unisex-swingman-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Karl-Anthony Towns Minnesota Timberwolves Nike Unisex 2022/23 Swingman Jersey – City Edition – White",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0710018e71.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 – City Edition – Blanc de Karl-Anthony Towns (Minnesota Timberwolves)",
    "supplierUrl": "https://www.vivi-jersey.com/products/karl-anthony-towns-minnesota-timberwolves-nike-unisex-2022-23-swingman-jersey-city-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Anthony Edwards Minnesota Timberwolves Nike Unisex 2022/23 Swingman Jersey – City Edition – White",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-101957cb43.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 des Minnesota Timberwolves d'Anthony Edwards – Édition City – Blanc",
    "supplierUrl": "https://www.vivi-jersey.com/products/anthony-edwards-minnesota-timberwolves-nike-unisex-2022-23-swingman-jersey-city-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Anthony Edwards Minnesota Timberwolves Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-10202455ca.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 des Minnesota Timberwolves d'Anthony Edwards – Édition Icon – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/anthony-edwards-minnesota-timberwolves-nike-unisex-2022-23-swingman-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Minnesota Timberwolves Nike Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-002952747e.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Nike Swingman blanc des Minnesota Timberwolves 2022/23 – Édition Association",
    "supplierUrl": "https://www.vivi-jersey.com/products/minnesota-timberwolves-nike-unisex-2022-23-swingman-custom-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Karl-Anthony Towns Minnesota Timberwolves Nike Swingman Jersey Navy – Icon Edition",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0708383977.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman bleu marine des Minnesota Timberwolves de Karl-Anthony Towns – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/karl-anthony-towns-minnesota-timberwolves-nike-swingman-jersey-navy-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Minnesota Timberwolves Nike Unisex 2022/23 Swingman Custom Jersey Navy – Icon Edition",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0029197784.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Swingman Nike unisexe Minnesota Timberwolves 2022/23 bleu marine – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/minnesota-timberwolves-nike-unisex-2022-23-swingman-custom-jersey-navy-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Karl-Anthony Towns Minnesota Timberwolves Nike Swingman Jersey – Statement Edition – Green",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-070905a6ce.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman de Karl-Anthony Towns, Minnesota Timberwolves – Édition Statement – ​​Vert,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/karl-anthony-towns-minnesota-timberwolves-nike-swingman-jersey-statement-edition-green",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Karl-Anthony Towns Minnesota Timberwolves Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-07102848f9.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 – Édition Icon – Marine, Karl-Anthony Towns Minnesota Timberwolves",
    "supplierUrl": "https://www.vivi-jersey.com/products/karl-anthony-towns-minnesota-timberwolves-nike-unisex-2022-23-swingman-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Minnesota Timberwolves Nike Swingman Custom Jersey Navy – Icon Edition",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-002812eff4.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman des Minnesota Timberwolves, bleu marine – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/minnesota-timberwolves-nike-swingman-custom-jersey-navy-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Minnesota Timberwolves Karl-Anthony Towns #32 Jordan Green 20/21 Swingman Jersey",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-18335520f6.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman vert Jordan 20/21 de Karl-Anthony Towns #32 des Minnesota Timberwolves,",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-minnesota-timberwolves-karl-anthony-towns-32-jordan-green-20-21-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Karl-Anthony Towns Minnesota Timberwolves Nike Swingman Jersey White – Association Edition",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-070932ea72.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman blanc de Karl-Anthony Towns, Minnesota Timberwolves – Édition Association",
    "supplierUrl": "https://www.vivi-jersey.com/products/karl-anthony-towns-minnesota-timberwolves-nike-swingman-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Minnesota Timberwolves Nike 2020/21 Swingman Custom Jersey – Association Edition – White",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-002708f706.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman 2020/21 des Minnesota Timberwolves – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/minnesota-timberwolves-nike-2020-21-swingman-custom-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Minnesota Timberwolves Karl-Anthony Towns #32 Nike Green Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1834278148.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman vert pour homme Minnesota Timberwolves Karl-Anthony Towns #32 – Statement Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-minnesota-timberwolves-karl-anthony-towns-32-nike-green-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Minnesota Timberwolves Karl-Anthony Towns #32 Nike Navy Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-183457f892.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman bleu marine Karl-Anthony Towns n° 32 des Minnesota Timberwolves – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-minnesota-timberwolves-karl-anthony-towns-32-nike-navy-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Minnesota Timberwolves Karl-Anthony Towns #32 Nike White Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-183528618d.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc Nike pour homme Minnesota Timberwolves Karl-Anthony Towns #32 – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-minnesota-timberwolves-karl-anthony-towns-32-nike-white-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Minnesota Timberwolves Anthony Edwards #1 Nike Blue 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1832551d50.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike bleu 2021/22 – City Edition Anthony Edwards n°1 des Minnesota Timberwolves, pour homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-minnesota-timberwolves-anthony-edwards-1-nike-blue-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Anthony Edwards Minnesota Timberwolves Unisex Swingman Jersey – Statement Edition – Charcoal",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-1019291d83.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Anthony Edwards Minnesota Timberwolves – Édition Statement – ​​Gris anthracite,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/anthony-edwards-minnesota-timberwolves-jordan-brand-unisex-swingman-jersey-statement-edition-charcoal",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Minnesota Timberwolves D’Angelo Russell #0 Nike Blue 2021/22 Swingman NBA Jersey -City Edition",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-18332407cc.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike bleu 2021/22 - City Edition, D'Angelo Russell n° 0 des Minnesota Timberwolves (homme)",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-minnesota-timberwolves-dangelo-russell-0-nike-blue-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Minnesota Timberwolves Anthony Edwards #1 Nike Black Hardwood Classics Swingman Jersey",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-183227d0fb.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike Hardwood Classics noir pour homme, Anthony Edwards n° 1 des Minnesota Timberwolves,",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-minnesota-timberwolves-anthony-edwards-1-nike-black-hardwood-classics-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Minnesota Timberwolves Towns #32 Nike Blue 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-183558c312.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike bleu 2021/22 Towns #32 des Minnesota Timberwolves – Édition City,",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-minnesota-timberwolves-towns-32-nike-blue-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Derrick Rose Minnesota Timberwolves Nike Unisex Black Swingman Jersey – Classic Edition",
    "category": "sports",
    "group": "Minnesota Timberwolves",
    "league": "NBA",
    "team": "Minnesota Timberwolves",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-1539137c20.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe noir Nike Derrick Rose Minnesota Timberwolves – Édition classique,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/derrick-rose-minnesota-timberwolves-nike-unisex-black-swingman-jersey-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Brandon Ingram New Orleans Pelicans Jordan Brand 2022/23 Statement Edition Swingman Jersey – Red",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1657567d21.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Brand Brand Statement Edition 2022/23 de Brandon Ingram, New Orleans Pelicans – Rouge,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/brandon-ingram-new-orleans-pelicans-jordan-brand-2022-23-statement-edition-swingman-jersey-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Herbert Jones New Orleans Pelicans Jordan Brand 2022/23 Replica Swingman Jersey – Statement Edition – Red",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-17302498be.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot réplique Swingman Jordan Brand 2022/23 des New Orleans Pelicans d'Herbert Jones – Édition Statement – ​​Rouge,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/herbert-jones-new-orleans-pelicans-jordan-brand-2022-23-replica-swingman-jersey-statement-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Brandon Ingram New Orleans Pelicans Jordan Brand Swingman Player Jersey – Statement Edition – Red",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1705019a6b.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot de joueur Brandon Ingram New Orleans Pelicans Jordan Brand Swingman – Édition Statement – ​​Rouge, joueur",
    "supplierUrl": "https://www.vivi-jersey.com/products/brandon-ingram-new-orleans-pelicans-jordan-brand-swingman-player-jersey-statement-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Zion Williamson New Orleans Pelicans Jordan Brand Swingman Player Jersey – Statement Edition – Red",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1823117f24.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand de Zion Williamson (New Orleans Pelicans) – Édition Statement – ​​Rouge, Williams F1",
    "supplierUrl": "https://www.vivi-jersey.com/products/zion-williamson-new-orleans-pelicans-jordan-brand-swingman-player-jersey-statement-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "C.J. McCollum New Orleans Pelicans Nike Unisex Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-1432406b4a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike CJ McCollum New Orleans Pelicans – Édition Icone – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/c-j-mccollum-new-orleans-pelicans-nike-unisex-swingman-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jose Alvarado New Orleans Pelicans Nike Unisex Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0549265450.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Swingman Nike de José Alvarado, New Orleans Pelicans – Édition Icon – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/jose-alvarado-new-orleans-pelicans-nike-unisex-swingman-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Brandon Ingram New Orleans Pelicans Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-130559b199.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2023/24 de Brandon Ingram, New Orleans Pelicans – Noir – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/brandon-ingram-new-orleans-pelicans-nike-unisex-2023-24-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Zion Williamson New Orleans Pelicans Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1552361707.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2023/24 de Zion Williamson, New Orleans Pelicans – Noir – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/zion-williamson-new-orleans-pelicans-nike-unisex-2023-24-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "New Orleans Pelicans Nike Unisex 2023/24 Custom Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-01500025b8.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe New Orleans Pelicans 2023/24 – Noir – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/new-orleans-pelicans-nike-unisex-2023-24-custom-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "CJ McCollum New Orleans Pelicans Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-173049c52a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2023/24 de CJ McCollum, New Orleans Pelicans – Noir – Édition City",
    "supplierUrl": "https://www.vivi-jersey.com/products/cj-mccollum-new-orleans-pelicans-nike-unisex-2023-24-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "CJ McCollum New Orleans Pelicans Jordan Brand 2022/23 Statement Edition Swingman Jersey – Red",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-173019e292.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand Statement Edition 2022/23 de CJ McCollum, New Orleans Pelicans – Rouge,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/cj-mccollum-new-orleans-pelicans-jordan-brand-2022-23-statement-edition-swingman-jersey-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "New Orleans Pelicans Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Red",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/02-0146093789.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Swingman unisexe Jordan Brand New Orleans Pelicans 2022/23 – Édition Statement – ​​Rouge,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/new-orleans-pelicans-jordan-brand-unisex-2022-23-swingman-custom-jersey-statement-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Herbert Jones New Orleans Pelicans Nike Unisex 2022/23 Swingman Jersey – City Edition – Purple",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-015659c7d1.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 des New Orleans Pelicans d'Herbert Jones – Édition City – Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/herbert-jones-new-orleans-pelicans-nike-unisex-2022-23-swingman-jersey-city-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Zion Williamson New Orleans Pelicans Nike Unisex 2022/23 Swingman Jersey – City Edition – Purple",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-155128f3b8.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 de Zion Williamson, New Orleans Pelicans – Édition City – Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/zion-williamson-new-orleans-pelicans-nike-unisex-2022-23-swingman-jersey-city-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Zion Williamson New Orleans Pelicans Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-155204944e.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 de Zion Williamson, New Orleans Pelicans – Édition Icon – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/zion-williamson-new-orleans-pelicans-nike-unisex-2022-23-swingman-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Brandon Ingram New Orleans Pelicans Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-130531307e.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 de Brandon Ingram, New Orleans Pelicans – Édition Icon – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/brandon-ingram-new-orleans-pelicans-nike-unisex-2022-23-swingman-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "New Orleans Pelicans Nike Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0149283d41.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe blanc New Orleans Pelicans 2022/23 – Édition Association",
    "supplierUrl": "https://www.vivi-jersey.com/products/new-orleans-pelicans-nike-unisex-2022-23-swingman-custom-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Zion Williamson New Orleans Pelicans Nike Unisex 2022/23 Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-155055ad4c.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 de Zion Williamson, New Orleans Pelicans – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/zion-williamson-new-orleans-pelicans-nike-unisex-2022-23-swingman-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "New Orleans Pelicans Nike Unisex 2022/23 Swingman Custom Jersey Navy – Icon Edition",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0148521093.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe New Orleans Pelicans 2022/23 bleu marine – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/new-orleans-pelicans-nike-unisex-2022-23-swingman-custom-jersey-navy-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "New Orleans Pelicans Nike 2020/21 Swingman Custom Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-01471747ec.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Swingman Nike 2020/21 des New Orleans Pelicans – Édition Icon – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/new-orleans-pelicans-nike-2020-21-swingman-custom-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Zion Williamson New Orleans Pelicans Nike 2020/21 Swingman Player Jersey White – City Edition",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1549196dc6.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc de Zion Williamson, New Orleans Pelicans, Nike 2020/21 – City Edition",
    "supplierUrl": "https://www.vivi-jersey.com/products/zion-williamson-new-orleans-pelicans-nike-2020-21-swingman-player-jersey-white-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Zion Williamson New Orleans Pelicans Nike 2021/22 Diamond Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-15495134c2.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Diamant Nike 2021/22 de Zion Williamson, New Orleans Pelicans – Édition Icon – Bleu marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/zion-williamson-new-orleans-pelicans-nike-2021-22-diamond-swingman-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "New Orleans Pelicans Nike 2020/21 Swingman Custom Jersey – Association Edition – White",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0146458bc3.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Swingman Nike 2020/21 des New Orleans Pelicans – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/new-orleans-pelicans-nike-2020-21-swingman-custom-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "C.J. McCollum New Orleans Pelicans Nike 2021/22 Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-1432110af3.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2021/22 de CJ McCollum des New Orleans Pelicans – Édition Icon – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/c-j-mccollum-new-orleans-pelicans-nike-2021-22-swingman-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Zion Williamson New Orleans Pelicans Nike 2021/22 Swingman Jersey – City Edition – White",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-155023eafa.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2021/22 de Zion Williamson, New Orleans Pelicans – Édition City – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/zion-williamson-new-orleans-pelicans-nike-2021-22-swingman-jersey-city-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Zion Williamson New Orleans Pelicans Nike 2020/21 Swingman Jersey – Navy – Icon Edition",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-154800285b.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2020/21 de Zion Williamson, New Orleans Pelicans – Bleu marine – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/zion-williamson-new-orleans-pelicans-nike-2020-21-swingman-jersey-navy-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Brandon Ingram New Orleans Pelicans Nike 2020/21 Swingman Jersey – Navy – Icon Edition",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-130432a76e.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2020/21 de Brandon Ingram, New Orleans Pelicans – Bleu marine – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/brandon-ingram-new-orleans-pelicans-nike-2020-21-swingman-jersey-navy-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "New Orleans Pelicans Nike Swingman Custom Jersey Navy – Icon Edition",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-014750b975.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman des New Orleans Pelicans, bleu marine – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/new-orleans-pelicans-nike-swingman-custom-jersey-navy-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Zion Williamson New Orleans Pelicans Nike 2019/2020 Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-15462331d6.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2019/2020 de Zion Williamson, New Orleans Pelicans – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/zion-williamson-new-orleans-pelicans-nike-2019-2020-swingman-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "New Orleans Pelicans Nike Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0148219bf9.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman blanc des New Orleans Pelicans – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/new-orleans-pelicans-nike-swingman-custom-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Brandon Ingram New Orleans Pelicans Nike 2021/22 Diamond Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-130502c793.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Brandon Ingram New Orleans Pelicans Nike 2021/22 Diamond Swingman – Édition Icon – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/brandon-ingram-new-orleans-pelicans-nike-2021-22-diamond-swingman-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Zion Williamson New Orleans Pelicans Nike 2020/21 Swingman Jersey – White – Association Edition",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1548349e90.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2020/21 de Zion Williamson, New Orleans Pelicans – Blanc – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/zion-williamson-new-orleans-pelicans-nike-2020-21-swingman-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jrue Holiday New Orleans Pelicans Nike Swingman Jersey – Navy",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-061655ecc8.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike des New Orleans Pelicans de Jrue Holiday – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/jrue-holiday-new-orleans-pelicans-nike-swingman-jersey-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Zion Williamson New Orleans Pelicans Nike 2019/2020 Swingman Jersey – Statement Edition – Red",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-15465723f9.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2019/2020 de Zion Williamson, New Orleans Pelicans – Édition Statement – ​​Rouge,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/zion-williamson-new-orleans-pelicans-nike-2019-2020-swingman-jersey-statement-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Zion Williamson New Orleans Pelicans Nike 2019 NBA Draft First Round Pick Swingman Jersey Navy – Icon Edition",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-154727a01e.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman bleu marine de Zion Williamson, New Orleans Pelicans, choix de premier tour de la draft NBA 2019, Nike – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/zion-williamson-new-orleans-pelicans-nike-2019-nba-draft-first-round-pick-swingman-jersey-navy-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s New Orleans Pelicans Zion Williamson #1 Jordan Red 20/21 Jersey-Statement Edition",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-184359708a.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Jordan rouge 20/21 édition Statement de Zion Williamson n°1 des New Orleans Pelicans,",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-new-orleans-pelicans-zion-williamson-1-jordan-red-20-21-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s New Orleans Pelicans Zion Williamson #1 Nike White 2020/21 Swingman Jersey – City Edition",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-184538d2ed.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike blanc 2020/21 City Edition de Zion Williamson n°1 des New Orleans Pelicans,",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-new-orleans-pelicans-zion-williamson-1-nike-white-2020-21-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s New Orleans Pelicans Lonzo Ball #2 Nike Navy 2020/21 Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-18432826dc.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike bleu marine 2020/21 Lonzo Ball n°2 des New Orleans Pelicans – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-new-orleans-pelicans-lonzo-ball-2-nike-navy-2020-21-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "New Orleans Pelicans Nike Unisex 2025/26 Black Swingman Custom Jersey – City Edition",
    "category": "sports",
    "group": "New Orleans Pelicans",
    "league": "NBA",
    "team": "New Orleans Pelicans",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/86a4201c35.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé noir Nike unisexe New Orleans Pelicans 2025/26 – City Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/new-orleans-pelicans-nike-unisex-2025-26-black-swingman-custom-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "BRIDGES #25 New York Knicks Men’s Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-171438c55f.png?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "BRIDGES #25 Maillot Swingman pour homme des New York Knicks – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/bridges-25-new-york-knicks-swingman-nba-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "TOWNS #32 New York Knicks Men’s Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/ddb7a27c7f.png?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "TOWNS #32 New York Knicks Maillot Swingman pour homme – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/towns-32-new-york-knicks-swingman-nba-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "New York Knicks Nike White 2026 Champions Swingman Custom Jersey – Association Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-181025cbec.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike blanc des New York Knicks, édition spéciale Champions 2026",
    "supplierUrl": "https://www.vivi-jersey.com/products/new-york-knicks-nike-white-2026-champions-swingman-custom-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "New York Knicks Nike Unisex Blue 2026 Champions Swingman Custom Jersey – Icon Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-17530661dc.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe bleu New York Knicks Champions 2026 – Édition Icon, New York Knicks",
    "supplierUrl": "https://www.vivi-jersey.com/products/new-york-knicks-nike-unisex-blue-2026-champions-swingman-custom-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jalen Brunson New York Knicks Nike White 2026 Champions Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-174503963f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc Nike Champions 2026 de Jalen Brunson, New York Knicks – Édition Association",
    "supplierUrl": "https://www.vivi-jersey.com/products/jalen-brunson-new-york-knicks-nike-white-2026-champions-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jalen Brunson New York Knicks Nike Unisex Blue 2026 Champions Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-17444747a9.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe bleu Nike Champions 2026 de Jalen Brunson, New York Knicks – Édition Icon, New York Knicks",
    "supplierUrl": "https://www.vivi-jersey.com/products/jalen-brunson-new-york-knicks-nike-unisex-blue-2026-champions-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Josh Hart Towns New York Knicks Nike Blue 2026 NBA Finals Patch Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-17463113f0.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike bleu Josh Hart Towns New York Knicks, édition Icon, 2026 NBA Finals Patch",
    "supplierUrl": "https://www.vivi-jersey.com/products/josh-hart-towns-new-york-knicks-nike-blue-2026-nba-finals-patch-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Karl-Anthony Towns New York Knicks Nike Blue 2026 NBA Finals Patch Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-173342fa3d.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike bleu 2026 NBA Finals Patch de Karl-Anthony Towns, New York Knicks – Édition Icon",
    "supplierUrl": "https://www.vivi-jersey.com/products/karl-anthony-towns-new-york-knicks-nike-blue-2026-nba-finals-patch-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "OG Anunoby New York Knicks Nike White 2026 NBA Finals Patch Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-181150e578.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike blanc OG Anunoby New York Knicks 2026 NBA Finals Patch – Édition Association, New York Knicks",
    "supplierUrl": "https://www.vivi-jersey.com/products/og-anunoby-new-york-knicks-nike-white-2026-nba-finals-patch-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "OG Anunoby New York Knicks Nike Blue 2026 NBA Finals Patch Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-181117d570.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike bleu OG Anunoby New York Knicks, édition Icon, 2026 NBA Finals Patch",
    "supplierUrl": "https://www.vivi-jersey.com/products/og-anunoby-new-york-knicks-nike-blue-2026-nba-finals-patch-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jalen Brunson New York Knicks Nike White 2026 NBA Finals Patch Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-174520ba2f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike blanc Jalen Brunson New York Knicks 2026 NBA Finals Patch – Édition Association, New York Knicks",
    "supplierUrl": "https://www.vivi-jersey.com/products/jalen-brunson-new-york-knicks-nike-white-2026-nba-finals-patch-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jalen Brunson New York Knicks Nike Blue 2026 NBA Finals Patch Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1714293303.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike bleu Jalen Brunson New York Knicks, édition Icon, écusson des finales NBA 2026",
    "supplierUrl": "https://www.vivi-jersey.com/products/jalen-brunson-new-york-knicks-nike-blue-2026-nba-finals-patch-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "OG Anunoby New York Knicks Nike White 2024/25 Swingman Player Jersey – City Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-181134c059.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike blanc OG Anunoby New York Knicks 2024/25 – Édition City, New York Knicks",
    "supplierUrl": "https://www.vivi-jersey.com/products/og-anunoby-new-york-knicks-nike-white-2024-25-swingman-player-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s New York Knicks Derrick Rose #4 Nike White 2020/21 Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-18491793d6.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike blanc 2020/21 de Derrick Rose (New York Knicks) - Édition Association,Nike",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-new-york-knicks-derrick-rose-4-nike-white-2020-21-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s New York Knicks Kevin Knox #20 Nike White 2019/20 Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1853284d86.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike blanc 2019/20 de Kevin Knox (New York Knicks) - Édition Association",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-new-york-knicks-kevin-knox-20-nike-white-2019-20-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s New York Knicks Derrick Rose #4 Nike Blue 2020/21 Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-184843fbca.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike bleu 2020/21 de Derrick Rose (New York Knicks) - Édition Icon",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-new-york-knicks-derrick-rose-4-nike-blue-2020-21-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s New York Knicks RJ Barrett #9 Nike White 2019/20 Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1856033bc5.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike blanc 2019/20 de RJ Barrett n°9 des New York Knicks – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-new-york-knicks-rj-barrett-9-nike-white-2019-20-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s New York Knicks Julius Randle #30 Nike Black 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-185051a60b.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike noir 2021/22 de Julius Randle (New York Knicks) - Édition City, pour homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-new-york-knicks-julius-randle-30-nike-black-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s New York Knicks Kevin Knox II #20 Nike Navy 2019/20 Finished Swingman Jersey – City Edtion",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-185401bc87.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike bleu marine 2019/20 de Kevin Knox II (New York Knicks) – Édition City, pour homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-new-york-knicks-kevin-knox-ii-20-nike-navy-2019-20-finished-swingman-jersey-city-edtion",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s New York Knicks RJ Barrett #9 Nike Blue 2020/21 Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1855330da8.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike bleu 2020/21 de RJ Barrett n°9 des New York Knicks – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-new-york-knicks-rj-barrett-9-nike-blue-2020-21-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s New York Knicks RJ Barrett #9 Nike Black 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1855023b66.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike noir 2021/22 - Édition City - New York Knicks RJ Barrett n°9",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-new-york-knicks-rj-barrett-9-nike-black-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s New York Knicks Kemba Walker #8 Nike Black 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1852256448.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike noir 2021/22 de Kemba Walker (New York Knicks) - Édition City, pour homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-new-york-knicks-kemba-walker-8-nike-black-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s New York Knicks Derrick Rose #4 Nike Black 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-175125faf5.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike noir 2021/22 Derrick Rose n°4 des New York Knicks – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-new-york-knicks-derrick-rose-4-nike-black-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s New York Knicks Carmelo Anthony #7 Nike Black 2020/21 Swingman Jersey – City Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1847426784.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike noir 2020/21 City Edition de Carmelo Anthony n°7 des New York Knicks, pour homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-new-york-knicks-carmelo-anthony-7-nike-black-2020-21-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s New York Knicks Julius Randle #30 Nike Black 2020/21 Swingman Jersey – City Edition",
    "category": "sports",
    "group": "New York Knicks",
    "league": "NBA",
    "team": "New York Knicks",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1850227c19.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman noir Nike 2020/21 de Julius Randle (New York Knicks) - Édition City, pour homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-new-york-knicks-julius-randle-30-nike-black-2020-21-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Chet Holmgren Oklahoma City Thunder Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Black",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1726268354.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Nike Swingman 2024/25 de Chet Holmgren, Oklahoma City Thunder – Édition City – Noir",
    "supplierUrl": "https://www.vivi-jersey.com/products/chet-holmgren-oklahoma-city-thunder-nike-unisex-2024-25-swingman-player-jersey-city-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Shai Gilgeous-Alexander Oklahoma City Thunder Nike Unisex 2022/23 Swingman Jersey – City Edition – Gray",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-181817f7cc.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 – City Edition – Gris de Shai Gilgeous-Alexander, Oklahoma City Thunder",
    "supplierUrl": "https://www.vivi-jersey.com/products/shai-gilgeous-alexander-oklahoma-city-thunder-nike-unisex-2022-23-swingman-jersey-city-edition-gray",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Shai Gilgeous-Alexander Oklahoma City Thunder Nike 2021/22 Diamond Swingman Jersey – Icon Edition – Blue",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-181759bd72.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Diamond Swingman 2021/22 – Édition Icon – Bleu de Shai Gilgeous-Alexander, Oklahoma City Thunder",
    "supplierUrl": "https://www.vivi-jersey.com/products/shai-gilgeous-alexander-oklahoma-city-thunder-nike-2021-22-diamond-swingman-jersey-icon-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jalen Williams Oklahoma City Thunder Nike Unisex 2025/26 City Edition Swingman Jersey",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1745555587.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike City Edition unisexe 2025/26 de Jalen Williams, Oklahoma City Thunder",
    "supplierUrl": "https://www.vivi-jersey.com/products/jalen-williams-oklahoma-city-thunder-nike-unisex-2025-26-city-edition-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Chet Holmgren Oklahoma City Thunder Nike Unisex 2025/26 City Edition Swingman Jersey",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1713400ac7.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Chet Holmgren Oklahoma City Thunder Nike Unisexe 2025/26 City Edition Swingman Jersey,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/chet-holmgren-oklahoma-city-thunder-nike-unisex-2025-26-city-edition-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Shai Gilgeous-Alexander Oklahoma City Thunder Nike Unisex 2025/26 City Edition Swingman Jersey",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-18070584af.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike City Edition unisexe 2025/26 de Shai Gilgeous-Alexander, Oklahoma City Thunder",
    "supplierUrl": "https://www.vivi-jersey.com/products/shai-gilgeous-alexander-oklahoma-city-thunder-nike-unisex-2025-26-city-edition-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Oklahoma City Thunder Nike Unisex 2025/26 City Edition Swingman Custom Jersey",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/327a503c19.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman City Edition unisexe Oklahoma City Thunder 2025/26,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/oklahoma-city-thunder-nike-unisex-2025-26-city-edition-swingman-custom-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Aaron Wiggins Oklahoma City Thunder Nike Unisex Swingman Player Jersey – Icon Edition – Blue",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-09015471ac.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Swingman Nike d'Aaron Wiggins, Oklahoma City Thunder – Édition Icon – Bleu,",
    "supplierUrl": "https://www.vivi-jersey.com/products/aaron-wiggins-oklahoma-city-thunder-nike-unisex-swingman-player-jersey-icon-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Isaiah Hartenstein Oklahoma City Thunder Nike Unisex Swingman Player Jersey – Icon Edition – Blue",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-024639be2a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Swingman Nike d'Isaiah Hartenstein, Oklahoma City Thunder – Édition Icon – Bleu,",
    "supplierUrl": "https://www.vivi-jersey.com/products/isaiah-hartenstein-oklahoma-city-thunder-nike-unisex-swingman-player-jersey-icon-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Chet Holmgren Oklahoma City Thunder Jordan Brand Unisex Swingman Jersey – Statement Edition – Orange",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-15385294e6.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Swingman Jordan Brand de Chet Holmgren, Oklahoma City Thunder – Édition Statement – ​​Orange,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/chet-holmgren-oklahoma-city-thunder-jordan-brand-unisex-swingman-jersey-statement-edition-orange",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Luguentz Dort Oklahoma City Thunder Nike Unisex Swingman Jersey – Icon Edition – Blue",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-11251985fa.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike de Luguentz Dort, Oklahoma City Thunder – Édition Icon – Bleu,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/luguentz-dort-oklahoma-city-thunder-nike-unisex-swingman-jersey-icon-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Chet Holmgren Oklahoma City Thunder Nike Unisex 2022 NBA Draft First Round Pick Player Swingman Jersey – Icon Edition – Blue",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-153923f849.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike de Chet Holmgren, joueur sélectionné au premier tour de la draft NBA 2022 du Thunder d'Oklahoma City – Édition Icon – Bleu",
    "supplierUrl": "https://www.vivi-jersey.com/products/chet-holmgren-oklahoma-city-thunder-nike-unisex-2022-nba-draft-first-round-pick-player-swingman-jersey-icon-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Alex Caruso Oklahoma City Thunder Nike Unisex Swingman Jersey – Icon Edition – Blue",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-093649e41e.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike Alex Caruso Oklahoma City Thunder – Édition Icon – Bleu,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/alex-caruso-oklahoma-city-thunder-nike-unisex-swingman-jersey-icon-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Oklahoma City Thunder Nike Unisex 2023/24 Custom Swingman Jersey – Navy – City Edition",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-03552983f1.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Oklahoma City Thunder 2023/24 – Bleu marine – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/oklahoma-city-thunder-nike-unisex-2023-24-custom-swingman-jersey-navy-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Russell Westbrook Oklahoma City Thunder Nike Swingman Player Jersey – Icon Edition – Blue",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-075026ef5a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman de Russell Westbrook, Oklahoma City Thunder – Édition Icone – Bleu, Joueur",
    "supplierUrl": "https://www.vivi-jersey.com/products/russell-westbrook-oklahoma-city-thunder-nike-swingman-player-jersey-icon-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jalen Williams Oklahoma City Thunder Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Blue",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-034337b34e.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike Oklahoma City Thunder 2022/23 – Édition Icon – Bleu,Jalen Williams",
    "supplierUrl": "https://www.vivi-jersey.com/products/jalen-williams-oklahoma-city-thunder-nike-unisex-2022-23-swingman-jersey-icon-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Oklahoma City Thunder Nike Unisex 2024/25 Custom Swingman Jersey – City Edition – Black",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-03555645cc.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Oklahoma City Thunder 2024/25 – Édition City – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/oklahoma-city-thunder-nike-unisex-2024-25-custom-swingman-jersey-city-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Oklahoma City Thunder Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Orange",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0351462840.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Jordan Brand Swingman Oklahoma City Thunder 2022/23 – Édition Statement – ​​Orange,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/oklahoma-city-thunder-jordan-brand-unisex-2022-23-swingman-custom-jersey-statement-edition-orange",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Josh Giddey Oklahoma City Thunder Nike Unisex 2022/23 Swingman Jersey – City Edition – Gray",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-060646bf7c.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Nike Swingman 2022/23 de Josh Giddey, Oklahoma City Thunder – Édition City – Gris,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/josh-giddey-oklahoma-city-thunder-nike-unisex-2022-23-swingman-jersey-city-edition-gray",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Oklahoma City Thunder Nike Unisex 2022/23 Swingman Custom Jersey – City Edition – Black",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-035432336d.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe Oklahoma City Thunder 2022/23 – Édition City – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/oklahoma-city-thunder-nike-unisex-2022-23-swingman-custom-jersey-city-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Josh Giddey Oklahoma City Thunder Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Blue",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-060714d4ac.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Nike Swingman 2022/23 – Édition Icon – Bleu de Josh Giddey, Oklahoma City Thunder",
    "supplierUrl": "https://www.vivi-jersey.com/products/josh-giddey-oklahoma-city-thunder-nike-unisex-2022-23-swingman-jersey-icon-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Oklahoma City Thunder Nike Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0355005293.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe blanc Oklahoma City Thunder 2022/23 – Édition Association",
    "supplierUrl": "https://www.vivi-jersey.com/products/oklahoma-city-thunder-nike-unisex-2022-23-swingman-custom-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Oklahoma City Thunder Nike Unisex 2022/23 Swingman Custom Jersey Blue – Icon Edition",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0354044b4c.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe bleu Oklahoma City Thunder 2022/23 – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/oklahoma-city-thunder-nike-unisex-2022-23-swingman-custom-jersey-blue-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Oklahoma City Thunder Nike Swingman Custom Jersey Blue – Icon Edition",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-035336cad9.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman bleu du Thunder d'Oklahoma City – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/oklahoma-city-thunder-nike-swingman-custom-jersey-blue-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Oklahoma City Thunder Nike Custom Swingman Jersey – Icon Edition – Blue",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-035308be3e.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike Oklahoma City Thunder – Édition Icone – Bleu,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/oklahoma-city-thunder-nike-custom-swingman-jersey-icon-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Oklahoma City Thunder Nike 2020/21 Swingman Custom Jersey – Association Edition – White",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0352401fa4.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman Oklahoma City Thunder 2020/21 – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/oklahoma-city-thunder-nike-2020-21-swingman-custom-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Oklahoma City Thunder Steven Adams #12 Nike Blue Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-19271903da.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman bleu pour homme Oklahoma City Thunder Steven Adams n° 12 – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-oklahoma-city-thunder-steven-adams-12-nike-blue-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Oklahoma City Thunder Luguentz Dort #5 Nike White 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-192644fe1d.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike blanc 2021/22 - Édition City - Luguentz Dort n°5 du Thunder d'Oklahoma City",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-oklahoma-city-thunder-luguentz-dort-5-nike-white-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Oklahoma City Thunder Alexander #2 Nike White 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-163459e040.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike blanc 2021/22 - Alexander n°2 du Thunder d'Oklahoma City - Édition City",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-oklahoma-city-thunder-alexander-2-nike-white-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Oklahoma City Thunder Josh Giddey #3 Nike Gray 2021/22 Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-192544e7cd.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman gris Nike Oklahoma City Thunder Josh Giddey n°3 pour homme – Édition City 2021/22",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-oklahoma-city-thunder-josh-giddey-3-nike-gray-2021-22-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Oklahoma City Thunder Luguentz Dort #5 Nike Black Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1926138218.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman noir pour homme Oklahoma City Thunder Luguentz Dort n° 5 – City Edition",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-oklahoma-city-thunder-luguentz-dort-5-nike-black-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Oklahoma City Thunder Josh Giddey #3 Nike Blue 20/21 Swingman Jersey- Icon Edition",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-192512b55f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike bleu 20/21 Josh Giddey n°3 du Thunder d'Oklahoma City - Édition Icon",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-oklahoma-city-thunder-josh-giddey-3-nike-blue-20-21-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "2021-22 Oklahoma City Thunder Orange Chris Paul #3 Men’s Jersey",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/24/products/01-1947393dc6.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot pour homme Oklahoma City Thunder Orange Chris Paul #3 2021-22,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/2021-22-oklahoma-city-thunder-jordan-brand-orange-chris-paul-3-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Oklahoma City Thunder Blue Russell Westbrook #0 Men’s Jersey",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-034916fcb0.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot pour homme Oklahoma City Thunder Blue Russell Westbrook #0,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/oklahoma-city-thunder-blue-russell-westbrook-0-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Oklahoma City Thunder Blue Chris Paul #3 Men’s Jersey",
    "category": "sports",
    "group": "Oklahoma City Thunder",
    "league": "NBA",
    "team": "Oklahoma City Thunder",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-034703e6d4.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Oklahoma City Thunder Blue Chris Paul #3 pour hommes,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/oklahoma-city-thunder-blue-chris-paul-3-jersey-nba-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Orlando Magic Paolo Banchero #5 Blue Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1808441faa.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Orlando Magic Paolo Banchero n° 5 bleu Swingman – Édition Icone, Orlando City",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-orlando-magic-paolo-banchero-5-blue-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Orlando Magic Paolo Banchero #5 Black Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-180854c03d.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "description": "Maillot unisexe Orlando Magic Paolo Banchero n° 5 Noir Swingman – Édition Statement, Orlando City",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-orlando-magic-paolo-banchero-5-black-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Orlando Magic Paolo Banchero #5 White Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1821297f87.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "description": "Maillot unisexe Orlando Magic Paolo Banchero n° 5 blanc Swingman – Édition Association, Orlando City",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-orlando-magic-paolo-banchero-5-white-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Shaquille O’Neal Orlando Magic Jordan Brand Unisex Black Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1818368c64.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe noir Swingman de Shaquille O'Neal, Orlando Magic, Jordan Brand – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/shaquille-oneal-orlando-magic-jordan-brand-unisex-black-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Franz Wagner Orlando Magic Jordan Brand Unisex Black Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-173010eb59.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe noir Franz Wagner Orlando Magic Jordan Brand – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/franz-wagner-orlando-magic-jordan-brand-unisex-black-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Paolo Banchero Orlando Magic Jordan Brand Unisex Black Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-175802de59.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Paolo Banchero Orlando Magic Jordan Brand Maillot Swingman noir unisexe – Statement Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/paolo-banchero-orlando-magic-jordan-brand-unisex-black-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Penny Hardaway Orlando Magic Jordan Brand Unisex Black Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-175818fb82.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Penny Hardaway Orlando Magic Jordan Brand Maillot Swingman Unisexe Noir – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/penny-hardaway-orlando-magic-jordan-brand-unisex-black-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Shaquille O’Neal Orlando Magic Nike Unisex Blue Swingman Player Jersey – Icon Edition",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-1544174218.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe bleu Swingman Nike Shaquille O'Neal Orlando Magic – Édition Icône, Orlando City",
    "supplierUrl": "https://www.vivi-jersey.com/products/shaquille-oneal-orlando-magic-nike-unisex-blue-swingman-player-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Franz Wagner Orlando Magic Nike Unisex Blue Swingman Player Jersey – Icon Edition",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-154136a0ac.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe bleu Nike Franz Wagner Orlando Magic – Édition Icone, Orlando City",
    "supplierUrl": "https://www.vivi-jersey.com/products/franz-wagner-orlando-magic-nike-unisex-blue-swingman-player-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Penny Hardaway Orlando Magic Nike Unisex Blue Swingman Player Jersey – Icon Edition",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-154250b81b.png?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe bleu Swingman Nike Penny Hardaway Orlando Magic – Édition Icone, Orlando City",
    "supplierUrl": "https://www.vivi-jersey.com/products/penny-hardaway-orlando-magic-nike-unisex-blue-swingman-player-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Paolo Banchero Orlando Magic Nike Unisex Blue Swingman Player Jersey – Icon Edition",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-154206f50a.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe bleu Swingman Nike de Paolo Banchero, Orlando Magic – Édition Icon, Orlando City",
    "supplierUrl": "https://www.vivi-jersey.com/products/paolo-banchero-orlando-magic-nike-unisex-blue-swingman-player-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Shaquille O’Neal Orlando Magic Nike White Association Edition Swingman Jersey",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-154435de22.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike White Association Edition de Shaquille O'Neal, Orlando Magic",
    "supplierUrl": "https://www.vivi-jersey.com/products/shaquille-oneal-orlando-magic-nike-white-association-edition-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Franz Wagner Orlando Magic Nike White Association Edition Swingman Jersey",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-154150745d.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike White Association Edition de Franz Wagner, Orlando Magic",
    "supplierUrl": "https://www.vivi-jersey.com/products/franz-wagner-orlando-magic-nike-white-association-edition-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Paolo Banchero Orlando Magic Nike White Association Edition Swingman Jersey",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-154235ef33.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Paolo Banchero Orlando Magic Nike White Association Edition Swingman Jersey,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/paolo-banchero-orlando-magic-nike-white-association-edition-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Penny Hardaway Orlando Magic Nike White Association Edition Swingman Jersey",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-15430549f5.png?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike White Association Edition de Penny Hardaway, Orlando Magic",
    "supplierUrl": "https://www.vivi-jersey.com/products/penny-hardaway-orlando-magic-nike-white-association-edition-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Orlando Magic Nike White Association Edition Swingman Custom Jersey",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/9e13fca654.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Swingman Nike White Association Edition Orlando Magic,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/orlando-magic-nike-white-association-edition-swingman-custom-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Orlando Magic Nike Unisex Blue Swingman Player Custom Jersey – Icon Edition",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/fef840d21d.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman bleu unisexe Orlando Magic – Édition Icone, Orlando City",
    "supplierUrl": "https://www.vivi-jersey.com/products/orlando-magic-nike-unisex-blue-swingman-player-custom-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Orlando Magic Jordan Brand Unisex Black Swingman Custom Jersey – Statement Edition",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/069a65f204.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe noir Swingman Jordan Brand Orlando Magic – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/orlando-magic-jordan-brand-unisex-black-swingman-custom-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Paolo Banchero Orlando Magic Nike Swingman Player Jersey – Statement Edition – Royal",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-04261506c4.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman de Paolo Banchero, Orlando Magic – Édition Statement – ​​Bleu Royal, Orlando City",
    "supplierUrl": "https://www.vivi-jersey.com/products/paolo-banchero-orlando-magic-nike-swingman-player-jersey-statement-edition-royal",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Paolo Banchero Orlando Magic Jordan Brand Swingman Player Jersey – Statement Edition – Royal",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0425195939.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot de joueur Jordan Brand Swingman de Paolo Banchero, Orlando Magic – Édition Statement – ​​Bleu Royal, Orlando City",
    "supplierUrl": "https://www.vivi-jersey.com/products/paolo-banchero-orlando-magic-jordan-brand-swingman-player-jersey-statement-edition-royal-2",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Franz Wagner Orlando Magic Nike Unisex Swingman Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0005562b27.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike Franz Wagner Orlando Magic – Édition Icone – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/franz-wagner-orlando-magic-nike-unisex-swingman-jersey-icon-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Orlando Magic Nike Unisex 2023/24 Custom Swingman Jersey – Navy – City Edition",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0413583acf.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé unisexe Nike Orlando Magic 2023/24 – Bleu marine – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/orlando-magic-nike-unisex-2023-24-custom-swingman-jersey-navy-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Markelle Fultz Orlando Magic Nike Unisex 2023/24 Swingman Jersey?– Classic Edition – Blue",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-121032635c.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike unisexe 2023/24 de Markelle Fultz (Orlando Magic) – Édition classique – Bleu, Orlando City",
    "supplierUrl": "https://www.vivi-jersey.com/products/markelle-fultz-orlando-magic-nike-unisex-2023-24-swingman-jersey-classic-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Paolo Banchero Orlando Magic Nike Unisex Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0428040e8a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Paolo Banchero Orlando Magic Nike Maillot Swingman Unisexe – Association Edition – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/paolo-banchero-orlando-magic-nike-unisex-swingman-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Paolo Banchero Orlando Magic Nike Unisex 2023/24 Swingman Jersey – Navy – City Edition",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0427101b38.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Paolo Banchero Orlando Magic Nike Maillot Swingman Unisexe 2023/24 – Marine – City Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/paolo-banchero-orlando-magic-nike-unisex-2023-24-swingman-jersey-navy-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Orlando Magic Nike Unisex 2023/24 Swingman Custom Jersey?– Classic Edition – Blue",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-041426e36e.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Nike Swingman 2023/24 Orlando Magic – Édition classique – Bleu",
    "supplierUrl": "https://www.vivi-jersey.com/products/orlando-magic-nike-unisex-2023-24-swingman-custom-jersey-classic-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Franz Wagner Orlando Magic Nike Unisex 2023/24 Swingman Jersey – Navy – City Edition",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0004521d9b.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2023/24 de Franz Wagner, Orlando Magic – Bleu marine – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/franz-wagner-orlando-magic-nike-unisex-2023-24-swingman-jersey-navy-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jalen Suggs Orlando Magic Nike Unisex 2022/23 Swingman Jersey – City Edition – Black",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0342412788.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 de Jalen Suggs (Orlando Magic) – Édition City – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/jalen-suggs-orlando-magic-nike-unisex-2022-23-swingman-jersey-city-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Orlando Magic Nike Unisex 2022/23 Swingman Custom Jersey – City Edition – Black",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-04130276ce.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Nike Swingman 2022/23 Orlando Magic – City Edition – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/orlando-magic-nike-unisex-2022-23-swingman-custom-jersey-city-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jalen Suggs Orlando Magic Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "Orlando Magic",
    "league": "NBA",
    "team": "Orlando Magic",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-034309d94d.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 de Jalen Suggs (Orlando Magic) – Édition Icon – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/jalen-suggs-orlando-magic-nike-unisex-2022-23-swingman-jersey-icon-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Joel Embiid Philadelphia 76ers Nike Finished Swingman Jersey Red – Statement Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-05041918e9.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman rouge Nike Finished de Joel Embiid des Philadelphia 76ers – Statement Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/joel-embiid-philadelphia-76ers-nike-finished-swingman-jersey-red-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Joel Embiid Philadelphia 76ers Nike Swingman Jersey Royal – Icon Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-050446fc94.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman Royal des 76ers de Philadelphie de Joel Embiid – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/joel-embiid-philadelphia-76ers-nike-swingman-jersey-royal-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Tobias Harris Philadelphia 76ers Nike 2020/21 Swingman Jersey – Royal – Icon Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-113256857e.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2020/21 des Philadelphia 76ers de Tobias Harris – Bleu royal – Édition Icone,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/tobias-harris-philadelphia-76ers-nike-2020-21-swingman-jersey-royal-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Joel Embiid Philadelphia 76ers Nike 2019/2020 Swingman Jersey – Icon Edition – Royal",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-050323783f.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2019/2020 de Joel Embiid des Philadelphia 76ers – Édition Icon – Bleu Royal",
    "supplierUrl": "https://www.vivi-jersey.com/products/joel-embiid-philadelphia-76ers-nike-2019-2020-swingman-jersey-icon-edition-royal",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers James Harden #1 Nike Navy 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1944393b54.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike bleu marine 2021/22 - James Harden n°1 des Philadelphia 76ers (Édition City)",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-james-harden-1-nike-navy-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Tobias Harris #12 Nike Navy 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-19524817d4.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike bleu marine 2021/22 Tobias Harris n°12 des Philadelphia 76ers – City Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-tobias-harris-12-nike-navy-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Joel Embiid #21 Nike Navy 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-194932a527.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike bleu marine 2021/22 de Joel Embiid (Philadelphia 76ers) - Édition City, pour homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-joel-embiid-21-nike-navy-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Seth Curry #31 Nike Navy 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1951411cca.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike bleu marine 2021/22 de Seth Curry (Philadelphia 76ers) – Édition City, Seth Curry n° 31",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-seth-curry-31-nike-navy-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Joel Embiid #21 Nike Cream 2019/20 Finished Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1949017da2.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Men’s Philadelphia 76ers Joel Embiid #21 Nike Cream 2019/20 Finished Swingman Jersey – City Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-joel-embiid-21-nike-cream-2019-20-finished-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Joel Embiid #21 White Hardwood Classics Finished Swingman Jersey",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-19503727bb.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc Hardwood Classics Joel Embiid n° 21 des Philadelphia 76ers, pour homme.",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-joel-embiid-21-white-hardwood-classics-finished-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Joel Embiid #21 Nike Black 2020/21 Swingman Player Jersey – City Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1948275ddd.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman noir Nike 2020/21 de Joel Embiid (Philadelphia 76ers), numéro 21, édition City",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-joel-embiid-21-nike-black-2020-21-swingman-player-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Joel Embiid #21 Jordan Red 2021 Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1947229e1c.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan rouge 2021 de Joel Embiid n° 21 des Philadelphia 76ers – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-joel-embiid-21-jordan-red-2021-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Joel Embiid #21 Red Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-195005c721.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman rouge Joel Embiid n° 21 des Philadelphia 76ers pour homme – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-joel-embiid-21-red-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Joel Embiid #21 Bule Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1946188649.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman bleu Joel Embiid n° 21 des Philadelphia 76ers pour homme – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-joel-embiid-21-bule-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers James Harden #1 Nike Royal 2021/22 Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1945094c8a.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike Royal 2021/22 – Édition Icon – James Harden n°1 des Philadelphia 76ers (Homme)",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-james-harden-1-nike-royal-2021-22-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Joel Embiid #21 White Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-195110fa72.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc Joel Embiid n° 21 des Philadelphia 76ers – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-joel-embiid-21-white-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers James Harden #1 Jordan Red Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-194411ff33.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman rouge Jordan James Harden n°1 des Philadelphia 76ers pour homme – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-james-harden-1-jordan-red-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers James Harden #1 Nike White Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1945448282.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc Nike James Harden n°1 des Philadelphia 76ers – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-james-harden-1-nike-white-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Ben Simmons #25 White Hardwood Classics Finished Swingman Jersey",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1942289653.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc Hardwood Classics Ben Simmons n° 25 des Philadelphia 76ers, pour homme.",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-ben-simmons-25-white-hardwood-classics-finished-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Ben Simmons #25 Nike Black 2020/21 Swingman Player Jersey–City Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1940212a84.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike noir 2020/21 de Ben Simmons (n° 25) des Philadelphia 76ers – Édition City, Philadelphia 76ers",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-ben-simmons-25-nike-black-2020-21-swingman-player-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Ben Simmons #25 Jordan Red 2020/21 Swingman Jersey-Statement Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-173052ed79.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan rouge 2020/21 de Ben Simmons (Philadelphia 76ers) n° 25, édition Statement,",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-ben-simmons-25-jordan-red-2020-21-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Ben Simmons #25 Blue Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1939215626.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman bleu Philadelphia 76ers Ben Simmons n° 25 pour homme – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-ben-simmons-25-blue-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Ben Simmons #25 Red Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1940517ae1.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman rouge Philadelphia 76ers Ben Simmons n° 25 pour homme – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-ben-simmons-25-red-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Allen Iverson #3 Nike White Hardwood Classics Finished Swingman Jersey",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-193715b411.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike Hardwood Classics blanc fini Allen Iverson n°3 des Philadelphia 76ers,",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-allen-iverson-3-nike-white-hardwood-classics-finished-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Allen Iverson #3 Throwback Red Hardwood Classics Jersey",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-193848c0c8.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot rétro rouge Hardwood Classics des Philadelphia 76ers pour homme, Allen Iverson n°3",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-allen-iverson-3-throwback-red-hardwood-classics-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Ben Simmons Nike #25 White Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-194341f655.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc Nike n° 25 Ben Simmons des Philadelphia 76ers – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-ben-simmons-nike-25-white-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Allen Iverson #3 Throwback Black 1997-98 Hardwood Classics Jersey",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-193817ff9d.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot rétro noir 1997-98 Hardwood Classics des Philadelphia 76ers, Allen Iverson n°3",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-allen-iverson-3-throwback-black-1997-98-hardwood-classics-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Allen Iverson #3 Nike Royal Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-193644d835.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman Royal Icon Edition d'Allen Iverson n°3 des Philadelphia 76ers pour homme.",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-allen-iverson-3-nike-royal-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Al Horford #42 Nike Royal 2019/20 Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-193439727e.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike Royal 2019/20 d'Al Horford n°42 des Philadelphia 76ers – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-al-horford-42-nike-royal-2019-20-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Tobias Harris #12 Jordan Red 2020/21 Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-19521525e4.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan rouge 2020/21 Tobias Harris n° 12 des Philadelphia 76ers – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-tobias-harris-12-jordan-red-2020-21-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Tobias Harris Philadelphia 76ers Jordan Brand 2020/21 Swingman Jersey – Statement Edition – Red",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1132262cb4.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand 2020/21 des Philadelphia 76ers de Tobias Harris – Édition Statement – ​​Rouge,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/tobias-harris-philadelphia-76ers-jordan-brand-2020-21-swingman-jersey-statement-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Tobias Harris #12 Nike Royal 2020/21 Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-195320c748.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike Royal 2020/21 Tobias Harris n°12 des Philadelphia 76ers – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-tobias-harris-12-nike-royal-2020-21-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Philadelphia 76ers Ben Simmons #25 White Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Philadelphia 76ers",
    "league": "NBA",
    "team": "Philadelphia 76ers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-194309b9bb.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc pour homme Philadelphia 76ers Ben Simmons n° 25 – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-philadelphia-76ers-ben-simmons-25-white-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Phoenix Suns Devin Booker #1 Black Swingman Jersey 2025/26 – City Edition",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-16232272a4.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Phoenix Suns Devin Booker n° 1 Swingman noir 2025/26 – City Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-phoenix-suns-devin-booker-1-black-swingman-jersey-2025-26-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Phoenix Suns Devin Booker #1 Purple Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-163144b0db.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "description": "Maillot unisexe Phoenix Suns Devin Booker n° 1 violet Swingman – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-phoenix-suns-devin-booker-1-purple-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Phoenix Suns Devin Booker #1 Purple Swingman Jersey – Classic Edition",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1637407b30.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "description": "Maillot unisexe Phoenix Suns Devin Booker n° 1 violet Swingman – Édition classique,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-phoenix-suns-devin-booker-1-purple-swingman-jersey-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Phoenix Suns Devin Booker #1 White Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-162343016f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "description": "Maillot unisexe Phoenix Suns Devin Booker n° 1 blanc Swingman – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-phoenix-suns-devin-booker-1-white-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Phoenix Suns Devin Booker #1 Purple Swingman Jersey 2025/ – Icon Edition",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1624066eea.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "description": "Maillot unisexe Phoenix Suns Devin Booker n° 1 Swingman violet 2025/ – Édition Icône,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-phoenix-suns-devin-booker-1-purple-swingman-jersey-2025-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Phoenix Suns Devin Booker #1 Black Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1624327884.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "description": "Maillot unisexe Phoenix Suns Devin Booker n° 1 Noir Swingman – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-phoenix-suns-devin-booker-1-black-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kevin Durant Unisex Phoenix Suns Jordan Brand Black Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-164041dc3a.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Kevin Durant Phoenix Suns Jordan Brand noir Swingman – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/kevin-durant-unisex-phoenix-suns-jordan-brand-black-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Devin Booker Unisex Phoenix Suns Jordan Brand Black Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1640593e1c.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Devin Booker Phoenix Suns Jordan Brand noir Swingman – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/devin-booker-unisex-phoenix-suns-jordan-brand-black-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Unisex Phoenix Suns Jordan Brand Black Swingman Custom Jersey – Statement Edition",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/62af40d5cb.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Phoenix Suns Jordan Brand noir Swingman personnalisé – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/unisex-phoenix-suns-jordan-brand-black-swingman-custom-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Bradley Beal Phoenix Suns Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Purple",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-125419a847.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2024/25 de Bradley Beal (Phoenix Suns) – Édition City – Violet",
    "supplierUrl": "https://www.vivi-jersey.com/products/bradley-beal-phoenix-suns-nike-unisex-2024-25-swingman-player-jersey-city-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kevin Durant Phoenix Suns Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Purple",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-074958b295.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Nike Swingman 2024/25 de Kevin Durant (Phoenix Suns) – Édition City – Violet",
    "supplierUrl": "https://www.vivi-jersey.com/products/kevin-durant-phoenix-suns-nike-unisex-2024-25-swingman-player-jersey-city-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Phoenix Suns Nike Unisex Swingman Custom Jersey – Purple – Icon Edition",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-060732c264.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Nike Swingman des Phoenix Suns – Violet – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/phoenix-suns-nike-unisex-swingman-custom-jersey-purple-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Phoenix Suns Nike Unisex 2024/25 Custom Swingman Jersey – City Edition – Purple",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0607046841.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Phoenix Suns 2024/25 – Édition City – Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/phoenix-suns-nike-unisex-2024-25-custom-swingman-jersey-city-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Devin Booker Phoenix Suns Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Purple",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-21503167ef.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2024/25 de Devin Booker (Phoenix Suns) – Édition City – Violet, Phoenix Suns",
    "supplierUrl": "https://www.vivi-jersey.com/products/devin-booker-phoenix-suns-nike-unisex-2024-25-swingman-player-jersey-city-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Chris Paul Phoenix Suns Nike Unisex Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-1700219b2e.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Swingman Nike Chris Paul Phoenix Suns – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/chris-paul-phoenix-suns-nike-unisex-swingman-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Phoenix Suns Nike Unisex Swingman Custom Jersey – White – Association Edition",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-060801d54d.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Nike Swingman des Phoenix Suns – Blanc – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/phoenix-suns-nike-unisex-swingman-custom-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Devin Booker Phoenix Suns Nike Unisex Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-2151060908.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Swingman Nike Devin Booker Phoenix Suns – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/devin-booker-phoenix-suns-nike-unisex-swingman-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Devin Booker Phoenix Suns Nike Unisex Swingman Jersey – Icon Edition – Purple",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-2151403691.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Swingman Nike Devin Booker Phoenix Suns – Édition Icone – Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/devin-booker-phoenix-suns-nike-unisex-swingman-jersey-icon-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kevin Durant Phoenix Suns Nike Unisex Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-075027953f.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Swingman Nike Kevin Durant Phoenix Suns – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/kevin-durant-phoenix-suns-nike-unisex-swingman-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kevin Durant Phoenix Suns Nike Swingman Jersey – Icon Edition – Purple",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-074834a999.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman Kevin Durant Phoenix Suns – Icon Edition – Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/kevin-durant-phoenix-suns-nike-swingman-jersey-icon-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kevin Durant Phoenix Suns Nike Unisex 2023/24 Swingman Jersey – Purple – City Edition",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-074930b635.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2023/24 de Kevin Durant (Phoenix Suns) – Violet – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/kevin-durant-phoenix-suns-nike-unisex-2023-24-swingman-jersey-purple-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Chris Paul Phoenix Suns Nike Unisex Swingman Jersey – Icon Edition – Purple",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-17005289d6.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Chris Paul Phoenix Suns Nike Maillot Swingman Unisexe – Icon Edition – Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/chris-paul-phoenix-suns-nike-unisex-swingman-jersey-icon-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Phoenix Suns Nike Unisex 2023/24 Custom Swingman Jersey – Purple – City Edition",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-06063600a5.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Phoenix Suns 2023/24 – Violet – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/phoenix-suns-nike-unisex-2023-24-custom-swingman-jersey-purple-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Phoenix Suns Nike Unisex 2020/21 Custom Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-060416f1e8.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Phoenix Suns 2020/21 – Noir – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/phoenix-suns-nike-unisex-2020-21-custom-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Devin Booker Phoenix Suns Nike Unisex 2023/24 Swingman Jersey – Purple – City Edition",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-215000497f.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2023/24 de Devin Booker (Phoenix Suns) – Violet – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/devin-booker-phoenix-suns-nike-unisex-2023-24-swingman-jersey-purple-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Phoenix Suns Jordan Brand Swingman Custom Jersey – Statement Edition – Orange",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0557072e2f.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Jordan Brand Swingman des Phoenix Suns – Édition Statement – ​​Orange,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/phoenix-suns-jordan-brand-swingman-custom-jersey-statement-edition-orange",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kevin Durant Phoenix Suns Jordan Brand 2022/23 Statement Edition Swingman Jersey – Black",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-2053357c6c.png?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Édition Statement 2022/23 Jordan Brand de Kevin Durant (Phoenix Suns) – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/kevin-durant-phoenix-suns-jordan-brand-2022-23-statement-edition-swingman-jersey-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Phoenix Suns Nike Unisex 2022/23 Swingman Custom Jersey Purple – Icon Edition",
    "category": "sports",
    "group": "Phoenix Suns",
    "league": "NBA",
    "team": "Phoenix Suns",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-06054007ad.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe Phoenix Suns 2022/23 violet – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/phoenix-suns-nike-unisex-2022-23-swingman-custom-jersey-purple-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Deni Avdija Portland Trail Blazers Nike Unisex 2022/23 Swingman Jersey – City Edition – Black",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-170857f2ec.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike unisexe 2022/23 des Portland Trail Blazers – City Edition – Noir, Deni Avdija",
    "supplierUrl": "https://www.vivi-jersey.com/products/deni-avdija-portland-trail-blazers-nike-unisex-2022-23-swingman-jersey-city-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Damian Lillard Portland Trail Blazers Jordan Brand 2022/23 Statement Edition Swingman Jersey – Red",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1735270f00.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand Statement Edition 2022/23 de Damian Lillard, Portland Trail Blazers – Rouge",
    "supplierUrl": "https://www.vivi-jersey.com/products/damian-lillard-portland-trail-blazers-jordan-brand-2022-23-statement-edition-swingman-jersey-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Damian Lillard Portland Trail Blazers Jordan Brand 2020/21 Swingman Jersey – Statement Edition – Red",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1707411a6a.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand 2020/21 de Damian Lillard (Portland Trail Blazers) – Édition Statement – ​​Rouge,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/damian-lillard-portland-trail-blazers-jordan-brand-2020-21-swingman-jersey-statement-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Damian Lillard Portland Trail Blazers Nike 2020/21 Swingman Player Jersey – Association Edition – White",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-17354879e3.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot de joueur Swingman Nike 2020/21 des Portland Trail Blazers de Damian Lillard – Édition Association – Blanc",
    "supplierUrl": "https://www.vivi-jersey.com/products/damian-lillard-portland-trail-blazers-nike-2020-21-swingman-player-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Damian Lillard Portland Trail Blazers Nike 2021/22 Diamond Swingman Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-173609c57c.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Damian Lillard Portland Trail Blazers Nike 2021/22 Diamond Swingman – Édition Icon – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/damian-lillard-portland-trail-blazers-nike-2021-22-diamond-swingman-jersey-icon-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Hansen Yang Portland Trail Blazers Nike Unisex Black Swingman Player Jersey – Icon Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-174135a74f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot de joueur unisexe noir Swingman Nike Hansen Yang Portland Trail Blazers – Édition Icon,球员",
    "supplierUrl": "https://www.vivi-jersey.com/products/hansen-yang-portland-trail-blazers-nike-unisex-black-swingman-player-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Deni Avdija Portland Trail Blazers Nike Unisex Black Swingman Player Jersey – Icon Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1723481b39.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot de joueur unisexe noir Nike Swingman Deni Avdija Portland Trail Blazers – Édition Icon,球员",
    "supplierUrl": "https://www.vivi-jersey.com/products/deni-avdija-portland-trail-blazers-nike-unisex-black-swingman-player-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Damian Lillard Portland Trail Blazers Nike Unisex Black Swingman Player Jersey – Icon Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-170803fce0.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe noir Swingman de Damian Lillard, Portland Trail Blazers, Nike – Édition Icon",
    "supplierUrl": "https://www.vivi-jersey.com/products/damian-lillard-portland-trail-blazers-nike-unisex-black-swingman-player-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Hansen Yang Portland Trail Blazers Nike Unisex 2022/23 Black Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-171014c96e.png?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman noir unisexe Nike 2022/23 des Portland Trail Blazers de Hansen Yang – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/hansen-yang-portland-trail-blazers-nike-unisex-2022-23-black-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Damian Lillard Portland Trail Blazers Nike Unisex 2022/23 Black Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-17363077f3.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman noir unisexe Nike 2022/23 des Portland Trail Blazers de Damian Lillard – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/damian-lillard-portland-trail-blazers-nike-unisex-2022-23-black-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Deni Avdija Portland Trail Blazers Nike Unisex White Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1709177df9.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc unisexe Nike Deni Avdija Portland Trail Blazers – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/deni-avdija-portland-trail-blazers-nike-unisex-white-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Hansen Yang Portland Trail Blazers Nike Unisex White Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-171037b6bf.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc unisexe Nike Hansen Yang Portland Trail Blazers – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/hansen-yang-portland-trail-blazers-nike-unisex-white-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Damian Lillard Portland Trail Blazers Nike Unisex White Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-15470117b2.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc unisexe Nike Damian Lillard Portland Trail Blazers – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/damian-lillard-portland-trail-blazers-nike-unisex-white-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Portland Trail Blazers Nike Unisex White Swingman Custom Jersey – Association Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/fc11757cfa.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman blanc unisexe Portland Trail Blazers – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/portland-trail-blazers-nike-unisex-white-swingman-custom-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Portland Trail Blazers Nike Unisex 2022/23 Black Swingman Custom Jersey – City Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/70007db0cd.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman noir unisexe Portland Trail Blazers 2022/23 – City Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/portland-trail-blazers-nike-unisex-2022-23-black-swingman-custom-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Portland Trail Blazers Nike Unisex Black Swingman Player Custom Jersey – Icon Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/82b481a07b.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman noir unisexe Portland Trail Blazers – Édition Icon, joueur",
    "supplierUrl": "https://www.vivi-jersey.com/products/portland-trail-blazers-nike-unisex-black-swingman-player-custom-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Anfernee Simons Portland Trail Blazers Jordan Brand Swingman Player Jersey – Statement Edition – Red",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-1009335a29.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand d'Anfernee Simons (Portland Trail Blazers) – Édition Statement – ​​Rouge",
    "supplierUrl": "https://www.vivi-jersey.com/products/anfernee-simons-portland-trail-blazers-jordan-brand-swingman-player-jersey-statement-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Portland Trail Blazers Nike Unisex 2023/24 Custom Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-063141e7df.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Portland Trail Blazers 2023/24 – Noir – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/portland-trail-blazers-nike-unisex-2023-24-custom-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Damian Lillard Portland Trail Blazers Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-194755ae36.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2023/24 de Damian Lillard, Portland Trail Blazers – Noir – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/damian-lillard-portland-trail-blazers-nike-unisex-2023-24-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Anfernee Simons Portland Trail Blazers Nike Unisex Swingman Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-1010011b78.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike des Portland Trail Blazers – Édition Icon – Noir, Anfernee Simons",
    "supplierUrl": "https://www.vivi-jersey.com/products/anfernee-simons-portland-trail-blazers-nike-unisex-swingman-jersey-icon-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Portland Trail Blazers Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Red",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0627385651.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Jordan Brand Swingman 2022/23 des Portland Trail Blazers – Édition Statement – ​​Rouge,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/portland-trail-blazers-jordan-brand-unisex-2022-23-swingman-custom-jersey-statement-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Damian Lillard Portland Trail Blazers Nike 2020/21 Swingman Jersey Black – Icon Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-194545af3a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman noir Nike 2020/21 des Portland Trail Blazers de Damian Lillard – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/damian-lillard-portland-trail-blazers-nike-2020-21-swingman-jersey-black-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Portland Trail Blazers Nike Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-06311378c4.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe blanc Portland Trail Blazers 2022/23 – Édition Association",
    "supplierUrl": "https://www.vivi-jersey.com/products/portland-trail-blazers-nike-unisex-2022-23-swingman-custom-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Portland Trail Blazers Nike 2020/21 Swingman Custom Jersey – Association Edition – White",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-062832f300.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman 2020/21 des Portland Trail Blazers – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/portland-trail-blazers-nike-2020-21-swingman-custom-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Portland Trail Blazers Nike 2021/22 Swingman Custom Jersey – City Edition – Black",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-062954d720.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman 2021/22 des Portland Trail Blazers – Édition City – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/portland-trail-blazers-nike-2021-22-swingman-custom-jersey-city-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Portland Trail Blazers Nike 2021/22 Diamond Swingman Custom Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0629275e59.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Diamond Swingman 2021/22 des Portland Trail Blazers – Édition Icon – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/portland-trail-blazers-nike-2021-22-diamond-swingman-custom-jersey-icon-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Portland Trail Blazers Nike 2020/21 Swingman Custom Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0628593f69.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Portland Trail Blazers Nike 2020/21 Swingman Custom Jersey – Icon Edition – Black,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/portland-trail-blazers-nike-2020-21-swingman-custom-jersey-icon-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "C.J. McCollum Portland Trail Blazers Nike 2021/22 Diamond Swingman Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-143310c1ea.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot CJ McCollum Portland Trail Blazers Nike 2021/22 Diamond Swingman – Édition Icon – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/c-j-mccollum-portland-trail-blazers-nike-2021-22-diamond-swingman-jersey-icon-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Portland Trail Blazers Damian Lillard Nike Cream 2019/20 Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-202702272f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike crème 2019/20 de Damian Lillard, Portland Trail Blazers, édition City, pour homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-portland-trail-blazers-damian-lillard-nike-cream-2019-20-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Portland Trail Blazers Nike Swingman Custom Jersey Black – Icon Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-06302212fd.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman noir des Portland Trail Blazers – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/portland-trail-blazers-nike-swingman-custom-jersey-black-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Portland Trail Blazers Damian Lillard #0 Nike Red Swingman Jersey – Classic Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-2025566802.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman rouge Damian Lillard n° 0 des Portland Trail Blazers – Édition classique,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-portland-trail-blazers-damian-lillard-0-nike-red-swingman-jersey-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Portland Trail Blazers Damian Lillard #0 Nike Grey 2020/21 Swingman NBA Jersey- Earned Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-202519a1db.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike gris 2020/21 Damian Lillard n°0 des Portland Trail Blazers (édition Earned)",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-portland-trail-blazers-damian-lillard-0-nike-grey-2020-21-swingman-nba-jersey-earned-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Portland Trail Blazers Damian Lillard #0 Nike White Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-2026293447.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc Nike Damian Lillard n° 0 des Portland Trail Blazers – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-portland-trail-blazers-damian-lillard-0-nike-white-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Portland Trail Blazers Carmelo Anthony Nike Cream 19/20 Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-20231201ea.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike crème 19/20 City Edition de Carmelo Anthony, Portland Trail Blazers, pour homme",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-portland-trail-blazers-carmelo-anthony-nike-cream-19-20-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Portland Trail Blazers Damian Lillard #0 Nike Brown 20/21 Swingman Player Jersey–City Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-202448b0eb.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike marron 20/21 pour homme, Damian Lillard n° 0 des Portland Trail Blazers – Édition City, Portland Trail Blazers",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-portland-trail-blazers-damian-lillard-0-nike-brown-20-21-swingman-player-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Portland Trail Blazers Damian Lillard #0 Nike Black 2020/21 Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Portland Trail Blazers",
    "league": "NBA",
    "team": "Portland Trail Blazers",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-202345cc7f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike noir 2020/21 de Damian Lillard (Portland Trail Blazers) - Édition Icon, numéro 0",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-portland-trail-blazers-damian-lillard-0-nike-black-2020-21-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Dennis Schr?der Sacramento Kings Nike Unisex Swingman Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-204249acb8.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Swingman Nike des Sacramento Kings de Dennis Schröder – Édition Icone – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/dennis-schroder-sacramento-kings-nike-unisex-swingman-jersey-icon-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "De’Aaron Fox Sacramento Kings Nike Unisex Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-2025474c44.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike De'Aaron Fox Sacramento Kings – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/deaaron-fox-sacramento-kings-nike-unisex-swingman-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Sacramento Kings Jordan Brand Unisex Swingman Custom Jersey – Statement Edition – Purple",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0803106681.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Sacramento Kings Jordan Brand Swingman – Édition Statement – ​​Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/sacramento-kings-jordan-brand-unisex-swingman-custom-jersey-statement-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "De’Aaron Fox Sacramento Kings Nike Unisex 2024/25 Swingman Jersey – Purple – Classic Edition",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-202443687e.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2024/25 de De'Aaron Fox, Sacramento Kings – Violet – Édition classique",
    "supplierUrl": "https://www.vivi-jersey.com/products/deaaron-fox-sacramento-kings-nike-unisex-2024-25-swingman-jersey-purple-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "De’Aaron Fox Sacramento Kings Jordan Brand Unisex Swingman Jersey – Statement Edition – Purple",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-202141f654.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Swingman Jordan Brand de De'Aaron Fox pour les Sacramento Kings – Édition Statement – ​​Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/deaaron-fox-sacramento-kings-jordan-brand-unisex-swingman-jersey-statement-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Domantas Sabonis Sacramento Kings Jordan Brand Unisex Swingman Jersey – Statement Edition – Purple",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-22081361a1.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Domantas Sabonis Sacramento Kings Jordan Brand Unisex Swingman Jersey – Statement Edition – Purple,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/domantas-sabonis-sacramento-kings-jordan-brand-unisex-swingman-jersey-statement-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Sacramento Kings Nike Unisex Adult Swingman Custom Jersey – Classic Edition – Purple",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-080855899a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Swingman unisexe adulte Nike Sacramento Kings – Édition classique – Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/sacramento-kings-nike-unisex-adult-swingman-custom-jersey-classic-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Sacramento Kings Nike Unisex 2024/25 Custom Swingman Jersey – City Edition – Blue",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0808265b13.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Sacramento Kings 2024/25 – Édition City – Bleu,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/sacramento-kings-nike-unisex-2024-25-custom-swingman-jersey-city-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Keegan Murray Sacramento Kings Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Blue",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-072417abab.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Nike Swingman 2024/25 des Sacramento Kings de Keegan Murray – Édition City – Bleu",
    "supplierUrl": "https://www.vivi-jersey.com/products/keegan-murray-sacramento-kings-nike-unisex-2024-25-swingman-player-jersey-city-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "De’Aaron Fox Sacramento Kings Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Blue",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-2025133b45.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2024/25 de De'Aaron Fox, Sacramento Kings – Édition City – Bleu, Sacramento Kings",
    "supplierUrl": "https://www.vivi-jersey.com/products/deaaron-fox-sacramento-kings-nike-unisex-2024-25-swingman-player-jersey-city-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Domantas Sabonis Sacramento Kings Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Blue",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-221025371b.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Domantas Sabonis Sacramento Kings Maillot unisexe Nike Swingman 2024/25 – Édition City – Bleu,",
    "supplierUrl": "https://www.vivi-jersey.com/products/domantas-sabonis-sacramento-kings-nike-unisex-2024-25-swingman-player-jersey-city-edition-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "De’Aaron Fox Sacramento Kings Nike Unisex Swingman Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-202620b685.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike De'Aaron Fox Sacramento Kings – Édition Icone – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/deaaron-fox-sacramento-kings-nike-unisex-swingman-jersey-icon-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Domantas Sabonis Sacramento Kings Nike Unisex Swingman Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-221107389b.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Domantas Sabonis Sacramento Kings Nike Unisex Swingman Jersey – Icon Edition – Black,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/domantas-sabonis-sacramento-kings-nike-unisex-swingman-jersey-icon-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kevin Huerter Sacramento Kings Nike Unisex Swingman Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0753383709.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Kevin Huerter Sacramento Kings Nike Maillot Swingman Unisexe – Icon Edition – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/kevin-huerter-sacramento-kings-nike-unisex-swingman-jersey-icon-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Sacramento Kings Nike Unisex Swingman Custom Jersey – Association Edition – White",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0809238dbd.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Nike Swingman des Sacramento Kings – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/sacramento-kings-nike-unisex-swingman-custom-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Domantas Sabonis Sacramento Kings Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Purple",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-2209202257.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Domantas Sabonis Sacramento Kings Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/domantas-sabonis-sacramento-kings-nike-unisex-2022-23-swingman-jersey-icon-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Sacramento Kings Nike Unisex 2023/24 Custom Swingman Jersey – Blue – City Edition",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-080756bc44.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Sacramento Kings 2023/24 – Bleu – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/sacramento-kings-nike-unisex-2023-24-custom-swingman-jersey-blue-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "De’Aaron Fox Sacramento Kings Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Purple",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-2024139c6c.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 de De'Aaron Fox, Sacramento Kings – Édition Icon – Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/deaaron-fox-sacramento-kings-nike-unisex-2022-23-swingman-jersey-icon-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Sacramento Kings Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-08024346c0.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Sacramento Kings Jordan Brand Swingman 2022/23 – Édition Statement – ​​Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/sacramento-kings-jordan-brand-unisex-2022-23-swingman-custom-jersey-statement-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Domantas Sabonis Sacramento Kings Nike Unisex 2023/24 Swingman Jersey – Blue – City Edition",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-2209534588.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Domantas Sabonis Sacramento Kings Nike Maillot Swingman Unisexe 2023/24 – Bleu – City Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/domantas-sabonis-sacramento-kings-nike-unisex-2023-24-swingman-jersey-blue-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "De’Aaron Fox Sacramento Kings Nike Unisex 2022/23 Swingman Jersey – City Edition – Anthracite",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-202341f734.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 de De'Aaron Fox, Sacramento Kings – Édition City – Anthracite,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/deaaron-fox-sacramento-kings-nike-unisex-2022-23-swingman-jersey-city-edition-anthracite",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Domantas Sabonis Sacramento Kings Nike Unisex 2022/23 Swingman Jersey – City Edition – Anthracite",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-220847d5f2.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Domantas Sabonis Sacramento Kings Nike Unisexe 2022/23 Swingman Jersey – City Edition – Anthracite,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/domantas-sabonis-sacramento-kings-nike-unisex-2022-23-swingman-jersey-city-edition-anthracite",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Domantas Sabonis Sacramento Kings Jordan Brand 2022/23 Statement Edition Swingman Jersey – Black",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-220736378b.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Domantas Sabonis Sacramento Kings Jordan Brand 2022/23 Statement Edition Swingman Jersey – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/domantas-sabonis-sacramento-kings-jordan-brand-2022-23-statement-edition-swingman-jersey-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Sacramento Kings Nike Unisex 2022/23 Swingman Custom Jersey Purple – Icon Edition",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0807000893.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Nike Swingman 2022/23 des Sacramento Kings, violet – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/sacramento-kings-nike-unisex-2022-23-swingman-custom-jersey-purple-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "De’Aaron Fox Sacramento Kings Nike Unisex 2022/23 Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-202311624b.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2022/23 de De'Aaron Fox, Sacramento Kings – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/deaaron-fox-sacramento-kings-nike-unisex-2022-23-swingman-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Sacramento Kings Nike Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-080728dc4b.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Nike Swingman blanc Sacramento Kings 2022/23 – Édition Association",
    "supplierUrl": "https://www.vivi-jersey.com/products/sacramento-kings-nike-unisex-2022-23-swingman-custom-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "De’Aaron Fox Sacramento Kings Nike 2020/21 Swingman Jersey – Purple – Icon Edition",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-202212da77.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2020/21 de De'Aaron Fox des Sacramento Kings – Violet – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/deaaron-fox-sacramento-kings-nike-2020-21-swingman-jersey-purple-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "De’Aaron Fox Sacramento Kings Jordan Brand 2022/23 Statement Edition Swingman Jersey – Black",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-2020389489.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand Statement Edition 2022/23 de De'Aaron Fox, Sacramento Kings – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/deaaron-fox-sacramento-kings-jordan-brand-2022-23-statement-edition-swingman-jersey-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Sacramento Kings Nike Swingman Custom Jersey Purple – Icon Edition",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-080631ff52.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman violet des Sacramento Kings – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/sacramento-kings-nike-swingman-custom-jersey-purple-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "De’Aaron Fox Sacramento Kings Jordan Brand Logo 2020/21 Swingman Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-2021104445.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand Logo 2020/21 de De'Aaron Fox, Sacramento Kings – Édition Statement – ​​Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/deaaron-fox-sacramento-kings-jordan-brand-logo-2020-21-swingman-jersey-statement-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Sacramento Kings Nike 2020/21 Swingman Custom Jersey – Association Edition – White",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-080439271a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Sacramento Kings Nike 2020/21 Swingman – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/sacramento-kings-nike-2020-21-swingman-custom-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Sacramento Kings Nike Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-162557446d.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman blanc des Sacramento Kings – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/sacramento-kings-nike-swingman-custom-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Buddy Hield Sacramento Kings Nike Swingman Jersey Purple – Icon Edition",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-1424295d54.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman violet de Buddy Hield des Sacramento Kings – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/buddy-hield-sacramento-kings-nike-swingman-jersey-purple-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Sacramento Kings Nike 2021/22 Swingman Custom Jersey – City Edition – Black",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0805358f23.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Sacramento Kings Nike 2021/22 Swingman – Édition City – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/sacramento-kings-nike-2021-22-swingman-custom-jersey-city-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "De’Aaron Fox Sacramento Kings Nike 2021/22 Diamond Swingman Jersey – Icon Edition – Purple",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-202242b518.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Diamant Nike 2021/22 des Sacramento Kings de De'Aaron Fox – Édition Icône – Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/deaaron-fox-sacramento-kings-nike-2021-22-diamond-swingman-jersey-icon-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Zach Randolph Sacramento Kings Nike Swingman Jersey – Purple",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1537556ce0.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman de Zach Randolph des Sacramento Kings – Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/zach-randolph-sacramento-kings-nike-swingman-jersey-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Sacramento Kings Nike 2021/22 Diamond Swingman Custom Jersey – Icon Edition – Purple",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1612079dbd.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Sacramento Kings Nike 2021/22 Diamond Swingman – Édition Icon – Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/sacramento-kings-nike-2021-22-diamond-swingman-custom-jersey-icon-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Marvin Bagley III Sacramento Kings Nike 2019/2020 Swingman Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "Sacramento Kings",
    "league": "NBA",
    "team": "Sacramento Kings",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-1217542b76.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Marvin Bagley III Sacramento Kings Nike 2019/2020 Swingman Jersey – Statement Edition – Black,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/marvin-bagley-iii-sacramento-kings-nike-2019-2020-swingman-jersey-statement-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Stephon Castle San Antonio Spurs Nike Black Unisex 2026 NBA Finals Patch Swingman Player Jersey – Icon Edition",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-18071954c9.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe noir Nike 2026 NBA Finals Patch de Stephon Castle, San Antonio Spurs – Édition Icon",
    "supplierUrl": "https://www.vivi-jersey.com/products/stephon-castle-san-antonio-spurs-nike-black-unisex-2026-nba-finals-patch-swingman-player-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Dylan Harper San Antonio Spurs Nike Black Unisex 2026 NBA Finals Patch Swingman Player Jersey – Icon Edition",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-170951a659.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe noir Nike 2026 NBA Finals Patch de Dylan Harper, San Antonio Spurs – Édition Icon",
    "supplierUrl": "https://www.vivi-jersey.com/products/dylan-harper-san-antonio-spurs-nike-black-unisex-2026-nba-finals-patch-swingman-player-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Victor Wembanyama San Antonio Spurs Nike Black Unisex 2026 NBA Finals Patch Swingman Player Jersey – Icon Edition",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1811390306.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe noir Nike 2026 NBA Finals Patch, Victor Wembanyama, San Antonio Spurs – Édition Icon",
    "supplierUrl": "https://www.vivi-jersey.com/products/victor-wembanyama-san-antonio-spurs-nike-black-unisex-2026-nba-finals-patch-swingman-player-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Victor Wembanyama San Antonio Spurs Jordan Brand Silver Unisex 2026 NBA Finals Patch Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-182257e0bc.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman argenté unisexe Victor Wembanyama San Antonio Spurs Jordan Brand 2026 NBA Finals Patch – Statement Edition, San Antonio Spurs",
    "supplierUrl": "https://www.vivi-jersey.com/products/victor-wembanyama-san-antonio-spurs-jordan-brand-silver-unisex-2026-nba-finals-patch-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "San Antonio Spurs Jordan Brand Silver Unisex 2026 NBA Finals Patch Swingman Custom Jersey – Statement Edition",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1804391c6e.png?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Jordan Brand argenté unisexe San Antonio Spurs, édition Statement, écusson des finales NBA 2026",
    "supplierUrl": "https://www.vivi-jersey.com/products/san-antonio-spurs-jordan-brand-silver-unisex-2026-nba-finals-patch-swingman-custom-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Dylan Harper San Antonio Spurs Nike Unisex 2025/26 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-172953ffd5.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2025/26 des San Antonio Spurs, Dylan Harper – Noir – Édition City, San Antonio Spurs",
    "supplierUrl": "https://www.vivi-jersey.com/products/dylan-harper-san-antonio-spurs-nike-unisex-2025-26-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "De’Aaron Fox San Antonio Spurs Nike Unisex 2025/26 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1708227756.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2025/26 des San Antonio Spurs, De'Aaron Fox – Noir – Édition City, San Antonio Spurs",
    "supplierUrl": "https://www.vivi-jersey.com/products/deaaron-fox-san-antonio-spurs-nike-unisex-2025-26-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Stephon Castle San Antonio Spurs Nike Unisex 2025/26 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1818519f38.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2025/26 des San Antonio Spurs, Stephon Castle – Noir – Édition City",
    "supplierUrl": "https://www.vivi-jersey.com/products/stephon-castle-san-antonio-spurs-nike-unisex-2025-26-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Victor Wembanyama San Antonio Spurs Nike Unisex 2025/26 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-181155a3e6.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2025/26 des San Antonio Spurs, Victor Wembanyama – Noir – Édition City",
    "supplierUrl": "https://www.vivi-jersey.com/products/victor-wembanyama-san-antonio-spurs-nike-unisex-2025-26-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "San Antonio Spurs Nike Unisex Black 2025/26 City Edition Swingman Custom Jersey",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-180650db20.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman City Edition noir unisexe des San Antonio Spurs 2025/26, San Antonio Spurs",
    "supplierUrl": "https://www.vivi-jersey.com/products/san-antonio-spurs-nike-unisex-black-2025-26-city-edition-swingman-custom-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Devin Vassell San Antonio Spurs Nike Unisex Swingman Player Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-170934864a.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Swingman Nike Devin Vassell des San Antonio Spurs – Édition Icone – Noir, San Antonio Spurs",
    "supplierUrl": "https://www.vivi-jersey.com/products/devin-vassell-san-antonio-spurs-nike-unisex-swingman-player-jersey-icon-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Stephon Castle San Antonio Spurs Nike Unisex Swingman Player Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-180531d19d.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Swingman Nike de Stephon Castle, San Antonio Spurs – Édition Icon – Noir, San Antonio Spurs",
    "supplierUrl": "https://www.vivi-jersey.com/products/stephon-castle-san-antonio-spurs-nike-unisex-swingman-player-jersey-icon-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Keldon Johnson San Antonio Spurs Jordan Brand Unisex Swingman Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-174702a3fa.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Swingman Jordan Brand de Keldon Johnson, San Antonio Spurs – Édition Statement – ​​Noir, San Antonio Spurs",
    "supplierUrl": "https://www.vivi-jersey.com/products/keldon-johnson-san-antonio-spurs-jordan-brand-unisex-swingman-jersey-statement-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "De’Aaron Fox San Antonio Spurs Nike Unisex Swingman Player Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-170838f8d3.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "De’Aaron Fox San Antonio Spurs Nike Unisex Swingman Player Jersey – Icon Edition – Black,San Antonio Spurs",
    "supplierUrl": "https://www.vivi-jersey.com/products/deaaron-fox-san-antonio-spurs-nike-unisex-swingman-player-jersey-icon-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "San Antonio Spurs Jordan Brand Unisex Swingman Custom Jersey – Statement Edition – Silver",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1816501254.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Swingman Jordan Brand des San Antonio Spurs – Édition Statement – ​​Argent, San Antonio Spurs",
    "supplierUrl": "https://www.vivi-jersey.com/products/san-antonio-spurs-jordan-brand-unisex-swingman-custom-jersey-statement-edition-silver",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Dylan Harper San Antonio Spurs Nike Unisex 2025 NBA Draft First Round Pick Swingman Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-15473151c2.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike Dylan Harper, San Antonio Spurs, premier choix du repêchage NBA 2025 – Édition Icon – Noir, San Antonio Spurs",
    "supplierUrl": "https://www.vivi-jersey.com/products/dylan-harper-san-antonio-spurs-nike-unisex-2025-nba-draft-first-round-pick-swingman-jersey-icon-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Victor Wembanyama San Antonio Spurs Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Light Blue",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-1554517e66.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2024/25 des San Antonio Spurs, porté par Victor Wembanyama – Édition City – Bleu clair",
    "supplierUrl": "https://www.vivi-jersey.com/products/victor-wembanyama-san-antonio-spurs-nike-unisex-2024-25-swingman-player-jersey-city-edition-light-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jeremy Sochan San Antonio Spurs Nike 2025/26 Statement Edition Swingman Jersey",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-1548048a21.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike Statement Edition 2025/26 des San Antonio Spurs de Jeremy Sochan",
    "supplierUrl": "https://www.vivi-jersey.com/products/jeremy-sochan-san-antonio-spurs-nike-2025-26-statement-edition-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "De’Aaron Fox San Antonio Spurs Nike 2025/26 Statement Edition Swingman Jersey",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-1547162f3b.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike Statement Edition 2025/26 des San Antonio Spurs de De'Aaron Fox,",
    "supplierUrl": "https://www.vivi-jersey.com/products/deaaron-fox-san-antonio-spurs-nike-2025-26-statement-edition-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jeremy Sochan San Antonio Spurs Nike Unisex 2025/26 Black Swingman Jersey – City Edition",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-154819f873.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman noir unisexe Nike 2025/26 des San Antonio Spurs de Jeremy Sochan – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/jeremy-sochan-san-antonio-spurs-nike-unisex-2025-26-black-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "San Antonio Spurs Nike Unisex 2025/26 Black Swingman Custom Jersey – City Edition",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/f741d597da.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman noir unisexe San Antonio Spurs 2025/26 – City Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/san-antonio-spurs-nike-unisex-2025-26-black-swingman-custom-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "San Antonio Spurs Nike 2025/26 Statement Edition Swingman Custom Jersey",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/2a87b62c6b.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Swingman Statement Edition Nike 2025/26 des San Antonio Spurs,",
    "supplierUrl": "https://www.vivi-jersey.com/products/san-antonio-spurs-nike-2025-26-statement-edition-swingman-custom-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Keldon Johnson San Antonio Spurs Nike Swingman Player Jersey – Statement Edition – Silver",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-07270631da.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot de joueur Nike Swingman des San Antonio Spurs de Keldon Johnson – Édition Statement – ​​Argent, Joueur",
    "supplierUrl": "https://www.vivi-jersey.com/products/keldon-johnson-san-antonio-spurs-nike-swingman-player-jersey-statement-edition-silver",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Victor Wembanyama San Antonio Spurs Jordan Brand Unisex Swingman Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-13493446de.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Jordan Brand de Victor Wembanyama pour les San Antonio Spurs – Édition Statement – ​​Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/victor-wembanyama-san-antonio-spurs-jordan-brand-unisex-swingman-jersey-statement-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Victor Wembanyama San Antonio Spurs Nike Unisex Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1352095347.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike des San Antonio Spurs de Victor Wembanyama – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/victor-wembanyama-san-antonio-spurs-nike-unisex-swingman-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "San Antonio Spurs Nike Unisex 2024/25 Custom Swingman Jersey – City Edition – Light Blue",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-083617c9a0.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe San Antonio Spurs 2024/25 – Édition City – Bleu clair,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/san-antonio-spurs-nike-unisex-2024-25-custom-swingman-jersey-city-edition-light-blue",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Keldon Johnson San Antonio Spurs Nike Unisex Swingman Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "San Antonio Spurs",
    "league": "NBA",
    "team": "San Antonio Spurs",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-07283089ac.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Swingman Nike des Spurs de San Antonio de Keldon Johnson – Édition Icone – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/keldon-johnson-san-antonio-spurs-nike-unisex-swingman-jersey-icon-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "BARRETT #9 Toronto Raptors Men’s Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001.png?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman pour homme BARRETT #9 des Raptors de Toronto – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/barrett-9-toronto-raptors-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "INGRAM #3 Toronto Raptors Men’s Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-171359f3b8.png?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman pour homme des Raptors de Toronto INGRAM n° 3 – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/ingram-3-toronto-raptors-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Scottie Barnes Toronto Raptors Jordan Brand 2022/23 Replica Swingman Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-18045726ff.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot réplique Swingman Jordan Brand 2022/23 de Scottie Barnes, Raptors de Toronto – Édition Statement – ​​Noir, Toronto",
    "supplierUrl": "https://www.vivi-jersey.com/products/scottie-barnes-toronto-raptors-jordan-brand-2022-23-replica-swingman-jersey-statement-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Toronto Raptors Nike Swingman Custom Jersey Red – Icon Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1208038258.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman rouge des Raptors de Toronto – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/toronto-raptors-nike-swingman-custom-jersey-red-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Toronto Raptors Pascal Siakam #43 Jordan Blue 2021 Swingman NBA Jersey – Statement Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-212415af7b.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman 2021 Swingman #43 de Pascal Siakam des Raptors de Toronto pour hommes – Statement Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-toronto-raptors-pascal-siakam-43-jordan-blue-2021-swingman-nba-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Toronto Raptors Vince Carter #15 Throwback Purple 99-00 Hardwood Classics Jersey",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-2128211a51.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot rétro violet 99-00 Hardwood Classics des Raptors de Toronto pour hommes, Vince Carter n° 15",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-toronto-raptors-vince-carter-15-throwback-purple-99-00-hardwood-classics-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Toronto Raptors Scottie Barnes #4 Jordan Black Swingman NBA Jersey – Statement Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-2125571a7e.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Jordan noir Scottie Barnes n° 4 des Raptors de Toronto pour homme – Édition Statement",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-toronto-raptors-scottie-barnes-4-jordan-black-swingman-nba-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Toronto Raptors Fred VanVleet #23 Jordan Blue 2021 Swingman NBA Jersey – Statement Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-212236085f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman 2021 Fred VanVleet #23 Jordan Blue des Raptors de Toronto pour hommes – Statement Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-toronto-raptors-fred-vanvleet-23-jordan-blue-2021-swingman-nba-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Toronto Raptors OG Anunoby #3 Nike Black 2021 Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-175054afdf.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike noir 2021 des Raptors de Toronto pour homme, modèle OG Anunoby n° 3 – Édition City",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-toronto-raptors-og-anunoby-3-nike-black-2021-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Toronto Raptors Nike Black 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-12073088db.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike noir 2021/22 des Raptors de Toronto – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/toronto-raptors-nike-black-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Toronto Raptors Tracy McGrady #1 White 1998-99 Hardwood Classics Swingman Jersey",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-212747ac2f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc Tracy McGrady n° 1 des Raptors de Toronto, collection Hardwood Classics 1998-99, pour homme.",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-toronto-raptors-tracy-mcgrady-1-white-1998-99-hardwood-classics-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Toronto Raptors Pascal Siakam #43 Nike Black 2021 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-2124501b9a.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman 2021 Nike Noir Pascal Siakam #43 des Raptors de Toronto pour hommes – City Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-toronto-raptors-pascal-siakam-43-nike-black-2021-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Toronto Raptors Tracy McGrady #1 Throwback Purple 98-99 Hardwood Classics Jersey",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-2126297401.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot rétro violet 98-99 Hardwood Classics des Raptors de Toronto pour hommes, Tracy McGrady n° 1",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-toronto-raptors-tracy-mcgrady-1-throwback-purple-98-99-hardwood-classics-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Toronto Raptors Fred VanVleet #23 Nike Black&Purple 2021 Swingman Jersey – Earned Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-2123079e66.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike noir et violet 2021 Fred VanVleet n° 23 des Raptors de Toronto – Édition Earned,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-toronto-raptors-fred-vanvleet-23-nike-blackpurple-2021-swingman-jersey-earned-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Toronto Raptors OG Anunoby #3 Nike Black&Purple 2021 Swingman Jersey – Earned Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-212343a887.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike noir et violet OG Anunoby n° 3 des Raptors de Toronto pour homme – Édition Earned,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-toronto-raptors-og-anunoby-3-nike-blackpurple-2021-swingman-jersey-earned-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Toronto Raptors Tracy McGrady #1 Throwback Purple 99-00 Hardwood Classics Jersey",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-2127152bed.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot rétro violet 99-00 Hardwood Classics des Raptors de Toronto pour hommes, Tracy McGrady n° 1",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-toronto-raptors-tracy-mcgrady-1-throwback-purple-99-00-hardwood-classics-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Toronto Raptors Pascal Siakam #43 Nike Black&Purple 2021 Swingman NBA Jersey – Earned Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-212525f5e1.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman 2021 Nike Noir et Violet Pascal Siakam #43 des Raptors de Toronto pour hommes – Édition Earned,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-toronto-raptors-pascal-siakam-43-nike-blackpurple-2021-swingman-nba-jersey-earned-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Vince Carter Toronto Raptors Nike White Classic Edition Swingman Jersey",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-1557144c5e.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike Classic Edition blanc de Vince Carter, Toronto Raptors",
    "supplierUrl": "https://www.vivi-jersey.com/products/vince-carter-toronto-raptors-nike-white-classic-edition-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Tracy McGrady Toronto Raptors Nike White Classic Edition Swingman Jersey",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-155639b660.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike Classic Edition blanc de Tracy McGrady, Toronto Raptors",
    "supplierUrl": "https://www.vivi-jersey.com/products/tracy-mcgrady-toronto-raptors-nike-white-classic-edition-swingman-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Vince Carter Toronto Raptors Nike Unisex 2025/26 Black Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-1556598de1.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman noir unisexe Nike 2025/26 des Raptors de Toronto de Vince Carter – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/vince-carter-toronto-raptors-nike-unisex-2025-26-black-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "RJ Barrett Toronto Raptors Nike Unisex 2025/26 Black Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-1555238013.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman noir unisexe Nike 2025/26 des Raptors de Toronto de RJ Barrett – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/rj-barrett-toronto-raptors-nike-unisex-2025-26-black-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Scottie Barnes Toronto Raptors Nike Unisex 2025/26 Black Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-155538ee86.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman noir unisexe Nike 2025/26 des Raptors de Toronto de Scottie Barnes – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/scottie-barnes-toronto-raptors-nike-unisex-2025-26-black-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Brandon Ingram Toronto Raptors Nike Unisex 2025/26 Black Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/12/products/001-15550905ee.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman noir unisexe Nike 2025/26 des Raptors de Toronto de Brandon Ingram – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/brandon-ingram-toronto-raptors-nike-unisex-2025-26-black-swingman-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Toronto Raptors Nike Unisex 2025/26 Black Swingman Custom Jersey – City Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/4bd5436c90.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman noir unisexe des Raptors de Toronto 2025/26 – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/toronto-raptors-nike-unisex-2025-26-black-swingman-custom-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Toronto Raptors Nike White Classic Edition Swingman Custom Jersey",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/1096e6d18e.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Swingman Nike Classic Edition blanc des Raptors de Toronto,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/toronto-raptors-nike-white-classic-edition-swingman-custom-jersey",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "RJ Barrett Toronto Raptors Nike Unisex 2024/25 Swingman Jersey – Purple – Classic Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0714215ef8.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2024/25 des Raptors de Toronto de RJ Barrett – Violet – Édition classique,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/rj-barrett-toronto-raptors-nike-unisex-2024-25-swingman-jersey-purple-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Toronto Raptors Nike Unisex Adult Swingman Custom Jersey – Classic Edition – Purple",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1211556191.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Swingman unisexe adulte Nike des Raptors de Toronto – Édition classique – Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/toronto-raptors-nike-unisex-adult-swingman-custom-jersey-classic-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Scottie Barnes Toronto Raptors Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Black",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0915481ebc.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Nike Swingman 2024/25 de Scottie Barnes, Raptors de Toronto – Édition City – Noir, Toronto Raptors",
    "supplierUrl": "https://www.vivi-jersey.com/products/scottie-barnes-toronto-raptors-nike-unisex-2024-25-swingman-player-jersey-city-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Scottie Barnes Toronto Raptors Nike Unisex 2024/25 Swingman Jersey – Purple – Classic Edition",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-091518455b.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike 2024/25 de Scottie Barnes, Raptors de Toronto – Violet – Édition classique",
    "supplierUrl": "https://www.vivi-jersey.com/products/scottie-barnes-toronto-raptors-nike-unisex-2024-25-swingman-jersey-purple-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Toronto Raptors Nike Unisex 2024/25 Custom Swingman Jersey – City Edition – Black",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-121054fa62.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe 2024/25 des Raptors de Toronto – Édition City – Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/toronto-raptors-nike-unisex-2024-25-custom-swingman-jersey-city-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "OG Anunoby Toronto Raptors Nike Unisex Swingman Jersey – Icon Edition – Red",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-034426471e.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike OG Anunoby des Raptors de Toronto – Édition Icone – Rouge,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/og-anunoby-toronto-raptors-nike-unisex-swingman-jersey-icon-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Utah Jazz Karl Malone #32 Adidas Purple 1996/97 Swingman NBA Jersey",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1822264211.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Utah Jazz Karl Malone #32 Adidas Violet 1996/97 Swingman NBA Maillot,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/utah-jazz-karl-malone-32-adidas-purple-1996-97-swingman-nba-jersey-2",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Utah Jazz John Stockton #12 Adidas Purple 1996/97 Swingman NBA Jersey",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-182147c334.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Utah Jazz John Stockton #12 Adidas Violet 1996/97 Swingman NBA Maillot,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/utah-jazz-john-stockton-12-adidas-purple-1996-97-swingman-nba-jersey-2",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Ace Bailey Utah Jazz Nike Unisex Purple Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-17030037d9.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe violet Swingman Nike Ace Bailey Utah Jazz – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/ace-bailey-utah-jazz-nike-unisex-purple-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Lauri Markkanen Utah Jazz Nike Unisex White Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-172344a605.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc unisexe Nike Lauri Markkanen Utah Jazz – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/lauri-markkanen-utah-jazz-nike-unisex-white-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Ace Bailey Utah Jazz Nike Unisex White Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-171219456f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe blanc Swingman Nike Ace Bailey Utah Jazz – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/ace-bailey-utah-jazz-nike-unisex-white-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Lauri Markkanen Utah Jazz Jordan Brand Unisex 2024/25 Black Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-175811347b.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman noir unisexe Jordan Brand 2024/25 de Lauri Markkanen (Utah Jazz) – Édition Statement",
    "supplierUrl": "https://www.vivi-jersey.com/products/lauri-markkanen-utah-jazz-jordan-brand-unisex-2024-25-black-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Ace Bailey Utah Jazz Jordan Brand Unisex 2024/25 Black Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-171203f846.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman noir unisexe Ace Bailey Utah Jazz Jordan Brand 2024/25 – Statement Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/ace-bailey-utah-jazz-jordan-brand-unisex-2024-25-black-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Utah Jazz Jordan Brand Unisex 2024/25 Black Swingman Custom Jersey – Statement Edition",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/c746ff86e5.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé noir Jordan Brand unisexe Utah Jazz 2024/25 – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/utah-jazz-jordan-brand-unisex-2024-25-black-swingman-custom-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Utah Jazz Nike Unisex White Swingman Custom Jersey – Association Edition",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/e375ba7ac5.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc unisexe Nike Utah Jazz personnalisé – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/utah-jazz-nike-unisex-white-swingman-custom-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Utah Jazz Nike Unisex Purple Swingman Custom Jersey – Icon Edition",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/53ea91fe84.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman violet unisexe Utah Jazz – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/utah-jazz-nike-unisex-purple-swingman-custom-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Lauri Markkanen Utah Jazz Nike Unisex Swingman Jersey – Icon Edition – Gold",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0917023fac.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Lauri Markkanen Utah Jazz Nike Maillot Swingman Unisexe – Icon Edition – Or,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/lauri-markkanen-utah-jazz-nike-unisex-swingman-jersey-icon-edition-gold",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jordan Clarkson Utah Jazz Jordan Brand Swingman Player Jersey – Statement Edition – Yellow",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0532019efb.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot de joueur Jordan Clarkson Utah Jazz Jordan Brand Swingman – Édition Statement – ​​Jaune,球员",
    "supplierUrl": "https://www.vivi-jersey.com/products/jordan-clarkson-utah-jazz-jordan-brand-swingman-player-jersey-statement-edition-yellow",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Collin Sexton Utah Jazz Nike Unisex Swingman Jersey – Icon Edition – Gold",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-180818edcc.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot unisexe Swingman Nike Utah Jazz de Collin Sexton – Édition Icone – Or,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/collin-sexton-utah-jazz-nike-unisex-swingman-jersey-icon-edition-gold",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Utah Jazz Nike Unisex 2023/24 Custom Swingman Jersey – Purple – City Edition",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-133607bade.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Utah Jazz 2023/24 – Violet – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/utah-jazz-nike-unisex-2023-24-custom-swingman-jersey-purple-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jordan Clarkson Utah Jazz Nike Unisex Swingman Replica Jersey – Classic Edition – Purple",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-053256f9b5.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot réplique unisexe Swingman Nike Jordan Clarkson Utah Jazz – Édition classique – Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/jordan-clarkson-utah-jazz-nike-unisex-swingman-replica-jersey-classic-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Lauri Markkanen Utah Jazz Nike Unisex 2023/24 Swingman Jersey – Purple – City Edition",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-09160160dd.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Lauri Markkanen Utah Jazz Nike Maillot Swingman Unisexe 2023/24 – Violet – City Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/lauri-markkanen-utah-jazz-nike-unisex-2023-24-swingman-jersey-purple-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Lauri Markkanen Utah Jazz Nike Unisex 2023/24 Swingman Replica Jersey – Classic Edition – Purple",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0916321c86.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Lauri Markkanen Utah Jazz Nike Maillot Swingman Replica Unisexe 2023/24 – Édition Classique – Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/lauri-markkanen-utah-jazz-nike-unisex-2023-24-swingman-replica-jersey-classic-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Utah Jazz Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1329543d53.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Swingman Jordan Brand unisexe Utah Jazz 2022/23 – Édition Statement – ​​Noir,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/utah-jazz-jordan-brand-unisex-2022-23-swingman-custom-jersey-statement-edition-black",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Utah Jazz Nike Unisex 2022/23 Custom Swingman Jersey – Classic Edition – Purple",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1334343dce.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Utah Jazz 2022/23 – Édition classique – Violet,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/utah-jazz-nike-unisex-2022-23-custom-swingman-jersey-classic-edition-purple",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Jordan Clarkson Utah Jazz Nike Unisex 2023/24 Swingman Jersey – Purple – City Edition",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-053229b64f.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike Utah Jazz 2023/24 de Jordan Clarkson – Violet – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/jordan-clarkson-utah-jazz-nike-unisex-2023-24-swingman-jersey-purple-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Utah Jazz Nike Unisex 2022/23 Swingman Custom Jersey Gold – Icon Edition",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-133507b462.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Swingman Nike unisexe Utah Jazz 2022/23 Or – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/utah-jazz-nike-unisex-2022-23-swingman-custom-jersey-gold-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Utah Jazz Nike Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1335379462.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Swingman Nike unisexe Utah Jazz 2022/23 blanc – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/utah-jazz-nike-unisex-2022-23-swingman-custom-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Utah Jazz Nike 2020/21 Swingman Custom Jersey – Association Edition – White",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-133229956e.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman Utah Jazz 2020/21 – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/utah-jazz-nike-2020-21-swingman-custom-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Utah Jazz Nike Swingman Custom Jersey Navy – Icon Edition",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-133333f876.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Utah Jazz Nike Swingman Maillot Personnalisé Marine – Icon Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/utah-jazz-nike-swingman-custom-jersey-navy-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Donovan Mitchell Utah Jazz Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Gold",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-222018fb32.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike Utah Jazz 2022/23 – Édition Icon – Or, Donovan Mitchell",
    "supplierUrl": "https://www.vivi-jersey.com/products/donovan-mitchell-utah-jazz-nike-unisex-2022-23-swingman-jersey-icon-edition-gold",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Rudy Gobert Utah Jazz Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Gold",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0743220ece.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe Nike Utah Jazz 2022/23 de Rudy Gobert – Édition Icone – Or,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/rudy-gobert-utah-jazz-nike-unisex-2022-23-swingman-jersey-icon-edition-gold",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Utah Jazz Nike Swingman Custom Jersey – Association Edition – White",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-133259084a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman des Utah Jazz – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/utah-jazz-nike-swingman-custom-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Rudy Gobert Utah Jazz Nike Replica Swingman Jersey – Statement Edition – Gold",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-07425465a4.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot réplique Nike Swingman Rudy Gobert Utah Jazz – Édition Statement – ​​Or,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/rudy-gobert-utah-jazz-nike-replica-swingman-jersey-statement-edition-gold",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Donovan Mitchell Utah Jazz Nike 2020/21 Swingman Jersey – Navy – Icon Edition",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-221701c008.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Donovan Mitchell Maillot Swingman Utah Jazz Nike 2020/21 – Marine – Icon Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/donovan-mitchell-utah-jazz-nike-2020-21-swingman-jersey-navy-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Utah Jazz Nike Swingman Custom Jersey – Statement Edition – Gold",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1334047568.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman des Utah Jazz – Édition Statement – ​​Or,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/utah-jazz-nike-swingman-custom-jersey-statement-edition-gold",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Donovan Mitchell Utah Jazz Nike 2020/21 Swingman Jersey – White – Association Edition",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-2217364b8d.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2020/21 de Donovan Mitchell (Utah Jazz) – Blanc – Édition Association",
    "supplierUrl": "https://www.vivi-jersey.com/products/donovan-mitchell-utah-jazz-nike-2020-21-swingman-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Rudy Gobert Utah Jazz Nike Replica Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0742272a9f.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot réplique Nike Swingman Rudy Gobert Utah Jazz – Édition Icon – Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/rudy-gobert-utah-jazz-nike-replica-swingman-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Rudy Gobert Utah Jazz Nike 2020/21 Swingman Jersey – Navy – Icon Edition",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-0742027bef.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike Utah Jazz 2020/21 de Rudy Gobert – Bleu marine – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/rudy-gobert-utah-jazz-nike-2020-21-swingman-jersey-navy-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Donovan Mitchell Utah Jazz Jordan Brand 2020/21 Swingman Jersey – Statement Edition – Gold",
    "category": "sports",
    "group": "Utah Jazz",
    "league": "NBA",
    "team": "Utah Jazz",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-2216277ac8.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand 2020/21 de Donovan Mitchell (Utah Jazz) – Édition Statement – ​​Or,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/donovan-mitchell-utah-jazz-jordan-brand-2020-21-swingman-jersey-statement-edition-gold",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Rui Hachimura Washington Wizards Jordan Brand 2020/21 Swingman Player Jersey – Statement Edition – Navy",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/30/products/001-1816167c38.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot de joueur Rui Hachimura Washington Wizards Jordan Brand 2020/21 Swingman – Édition Statement – ​​Bleu marine,球员",
    "supplierUrl": "https://www.vivi-jersey.com/products/rui-hachimura-washington-wizards-jordan-brand-2020-21-swingman-player-jersey-statement-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Washington Wizards Caldwell-Pope #1 Royal 2021/22 Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-215052d927.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Caldwell-Pope n°1 Royal 2021/22 pour homme des Washington Wizards – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-washington-wizards-caldwell-pope-1-nike-royal-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Washington Wizards Montrezl Harrell #6 Nike Red 2021/22 Swingman NBA Jersey – Icon Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-2155133522.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike rouge 2021/22 – Édition Icon – Washington Wizards Montrezl Harrell n° 6",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-washington-wizards-montrezl-harrell-6-nike-red-2021-22-swingman-nba-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Washington Wizards Bradley Beal #3 Royal 2021/22 Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-2149460c5f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Bradley Beal n°3 Royal 2021/22 des Washington Wizards pour hommes – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-washington-wizards-bradley-beal-3-nike-royal-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Washington Wizards Spencer Dinwiddie #26 Royal 2021/22 Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-215854ab43.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman pour homme Washington Wizards Spencer Dinwiddie n° 26 Royal 2021/22 – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-washington-wizards-spencer-dinwiddie-26-nike-royal-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Washington Wizards Montrezl Harrell #6 Royal 2021/22 Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-215543a09d.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Montrezl Harrell n° 6 Royal 2021/22 pour homme des Washington Wizards – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-washington-wizards-montrezl-harrell-6-nike-royal-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Washington Wizards Kyle Kuzma #33 Royal 2021/22 Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-2154068a0a.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Kyle Kuzma n° 33 Royal 2021/22 des Washington Wizards pour homme – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-washington-wizards-kyle-kuzma-33-nike-royal-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Washington Wizards Harrell #6 Nike White 21/22 Swingman NBA Jersey – Association Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-215231ba11.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike blanc 21/22 Washington Wizards Harrell n°6 pour homme – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-washington-wizards-harrell-6-nike-white-21-22-swingman-nba-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Washington Wizards Bradley Beal #3 Nike White 21/22 Swingman NBA Jersey – Association Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-21502023de.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike blanc 21/22 Bradley Beal #3 des Washington Wizards – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-washington-wizards-bradley-beal-3-nike-white-21-22-swingman-nba-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Washington Wizards Kyle Kuzma #33 Nike White 2021/22 Swingman NBA Jersey – Association Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-2154402653.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike blanc 2021/22 Kyle Kuzma #33 des Washington Wizards – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-washington-wizards-kyle-kuzma-33-nike-white-2021-22-swingman-nba-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Washington Wizards Rui Hachimura #8 Royal 2021/22 Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-21571758f0.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Washington Wizards Rui Hachimura #8 Royal 2021/22 pour hommes – City Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-washington-wizards-rui-hachimura-8-nike-royal-2021-22-swingman-nba-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Washington Wizards Westbrook #4 Nike White 2021/22 Swingman NBA Jersey – Association Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-2159290a9c.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot NBA Swingman Nike blanc 2021/22 de Westbrook, Washington Wizards, numéro 4, pour homme – Édition Association",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-washington-wizards-westbrook-4-nike-white-2021-22-swingman-nba-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Washington Wizards Deni Avdija #9 Nike Red 2020/21 Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-215158911b.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike rouge 2020/21 de Deni Avdija (Washington Wizards) – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-washington-wizards-deni-avdija-9-nike-red-2020-21-swingman-jersey-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Washington Wizards Rui Hachimura #8 Nike Gray 2020/21 Swingman Player Jersey – City Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-215645d16d.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike gris 2020/21 de Rui Hachimura (Washington Wizards), numéro 8, édition City",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-washington-wizards-rui-hachimura-8-nike-gray-2020-21-swingman-player-jersey-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Washington Wizards Rui Hachimura #8 Nike White 2020/21 Swingman Jersey – Association Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-21574720e2.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike blanc 2020/21 de Rui Hachimura n°8 des Washington Wizards – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-washington-wizards-rui-hachimura-8-nike-white-2020-21-swingman-jersey-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Washington Wizards Rui Hachimura #8 Jordan Navy 2020/21 Jersey – Statement Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-215615a74f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Washington Wizards Rui Hachimura #8 Jordan Navy 2020/21 pour homme – Statement Edition,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-washington-wizards-rui-hachimura-8-jordan-navy-2020-21-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Washington Wizards Ish Smith #14 Nike Navy Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-2153033047.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike bleu marine Ish Smith n° 14 des Washington Wizards pour homme – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-washington-wizards-ish-smith-14-nike-navy-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Men’s Washington Wizards Davis Bertans #42 Nike Navy Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-215125e784.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike bleu marine Davis Bertans n° 42 des Washington Wizards – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/mens-washington-wizards-davis-bertans-42-nike-navy-swingman-jersey-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Washington Wizards Michael Jordan #23 Vintage Nike Blue Jersey 911 Patch",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-142545488f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot vintage Nike bleu de Michael Jordan n° 23 des Washington Wizards, avec patch 911.",
    "supplierUrl": "https://www.vivi-jersey.com/products/washington-wizards-michael-jordan-23-vintage-nike-blue-jersey-911-patch",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Rui Hachimura Washington Wizards Nike Swingman Player Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-07461478a7.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman de Rui Hachimura, Washington Wizards – Édition Icon – Bleu marine, Washington Wizards",
    "supplierUrl": "https://www.vivi-jersey.com/products/rui-hachimura-washington-wizards-nike-swingman-player-jersey-icon-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Washington Wizards Jordan Brand Unisex 2024/25 Custom Swingman Jersey – Statement Edition – Navy",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1425121f06.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman unisexe personnalisé Jordan Brand 2024/25 des Washington Wizards – Édition Statement – ​​Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/washington-wizards-jordan-brand-unisex-2024-25-custom-swingman-jersey-statement-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Bradley Beal Washington Wizards Nike 2022/23 Swingman Jersey White – Classic Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-12564226bb.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman blanc Nike 2022/23 des Washington Wizards de Bradley Beal – Édition classique",
    "supplierUrl": "https://www.vivi-jersey.com/products/bradley-beal-washington-wizards-nike-2022-23-swingman-jersey-white-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Washington Wizards Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Navy",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-142433207a.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé unisexe Jordan Brand Swingman 2022/23 des Washington Wizards – Édition Statement – ​​Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/washington-wizards-jordan-brand-unisex-2022-23-swingman-custom-jersey-statement-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kyle Kuzma Washington Wizards Nike 2022/23 Swingman Jersey White – Classic Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-082721e962.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2022/23 blanc de Kyle Kuzma, Washington Wizards – Édition classique",
    "supplierUrl": "https://www.vivi-jersey.com/products/kyle-kuzma-washington-wizards-nike-2022-23-swingman-jersey-white-classic-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Washington Wizards Nike Unisex 2023/24 Custom Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1432529ae4.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Washington Wizards 2023/24 – Noir – Édition City,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/washington-wizards-nike-unisex-2023-24-custom-swingman-jersey-black-city-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Washington Wizards Nike Unisex 2022/23 Custom Swingman Jersey – Classic Edition – White",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-14311518ed.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike unisexe Washington Wizards 2022/23 – Édition classique – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/washington-wizards-nike-unisex-2022-23-custom-swingman-jersey-classic-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Washington Wizards 2021/22 Swingman Custom Men’s Jersey – City Edition – Royal",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-142826ddde.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé pour homme Washington Wizards 2021/22 – Édition City – Bleu royal",
    "supplierUrl": "https://www.vivi-jersey.com/products/washington-wizards-nike-2021-22-swingman-custom-jersey-city-edition-royal",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Washington Wizards Nike Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-14322045b6.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe blanc Washington Wizards 2022/23 – Édition Association",
    "supplierUrl": "https://www.vivi-jersey.com/products/washington-wizards-nike-unisex-2022-23-swingman-custom-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Washington Wizards Nike 2019/20 Custom Swingman Jersey Navy – Statement Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1426170d65.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike Washington Wizards 2019/20 bleu marine – Édition Statement,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/washington-wizards-nike-2019-20-custom-swingman-jersey-navy-statement-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Washington Wizards Nike Unisex 2022/23 Swingman Custom Jersey Red – Icon Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-14314747c7.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman unisexe Washington Wizards 2022/23 rouge – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/washington-wizards-nike-unisex-2022-23-swingman-custom-jersey-red-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Kyle Kuzma Washington Wizards Jordan Brand 2022/23 Statement Edition Swingman Jersey – Navy",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/26/products/01-0826517089.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand Statement Edition 2022/23 de Kyle Kuzma, Washington Wizards – Bleu marine",
    "supplierUrl": "https://www.vivi-jersey.com/products/kyle-kuzma-washington-wizards-jordan-brand-2022-23-statement-edition-swingman-jersey-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Washington Wizards Nike Swingman Custom Jersey – Association Edition – White",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1430034620.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Swingman des Washington Wizards – Édition Association – Blanc,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/washington-wizards-nike-swingman-custom-jersey-association-edition-white",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Washington Wizards Nike Custom Swingman Jersey White – Association Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-142931c6c3.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike des Washington Wizards blanc – Édition Association,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/washington-wizards-nike-custom-swingman-jersey-white-association-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Washington Wizards Nike Custom Swingman Jersey – Icon Edition – Red",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1429008d17.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman personnalisé Nike des Washington Wizards – Édition Icone – Rouge,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/washington-wizards-nike-custom-swingman-jersey-icon-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Bradley Beal Washington Wizards Jordan Brand 2020/21 Swingman Jersey – Statement Edition – Navy",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-1254476197.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Jordan Brand 2020/21 de Bradley Beal (Washington Wizards) – Édition Statement – ​​Marine,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/bradley-beal-washington-wizards-jordan-brand-2020-21-swingman-jersey-statement-edition-navy",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Deni Avdija Washington Wizards Nike 2020/21 Swingman Jersey Red – Icon Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-2041469418.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman rouge Nike 2020/21 des Washington Wizards de Deni Avdija – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/deni-avdija-washington-wizards-nike-2020-21-swingman-jersey-red-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Bradley Beal Washington Wizards Nike 2019/2020 Swingman Jersey – Icon Edition – Red",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-1255163eb1.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Nike 2019/2020 de Bradley Beal, Washington Wizards – Édition Icone – Rouge,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/bradley-beal-washington-wizards-nike-2019-2020-swingman-jersey-icon-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Washington Wizards Nike 2021/22 Diamond Swingman Custom Jersey – Icon Edition – Red",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/27/products/01-1427530e56.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot personnalisé Nike Diamond Swingman 2021/22 des Washington Wizards – Édition Icon – Rouge,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/washington-wizards-nike-2021-22-diamond-swingman-custom-jersey-icon-edition-red",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Bradley Beal Washington Wizards 2021/22 Men’s Swingman Jersey – City Edition – Royal",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-1256138456.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Swingman Bradley Beal Washington Wizards 2021/22 pour homme – Édition City – Bleu royal,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/bradley-beal-washington-wizards-nike-2021-22-swingman-jersey-city-edition-royal",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Bradley Beal Washington Wizards Nike Swingman Jersey Red – Icon Edition",
    "category": "sports",
    "group": "Washington Wizards",
    "league": "NBA",
    "team": "Washington Wizards",
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2609/25/products/01-1257106b34.jpeg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "description": "Maillot Nike Swingman rouge de Bradley Beal des Washington Wizards – Édition Icon,球迷",
    "supplierUrl": "https://www.vivi-jersey.com/products/bradley-beal-washington-wizards-nike-swingman-jersey-red-icon-edition",
    "adultStatus": "A_VALIDER_MANUELLEMENT"
  },
  {
    "name": "Trae Young Atlanta Hawks Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0002_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0002_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0002_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0002_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Atlanta Hawks Nike Unisex 2023/24 Custom Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0003_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0003_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0003_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0003_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Dejounte Murray Atlanta Hawks Nike Unisex Swingman Jersey – Icon Edition – Red",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0004_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0004_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0004_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0004_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Trae Young Atlanta Hawks Jordan Brand 2022/23 Statement Edition Swingman Jersey – Black",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0005_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0005_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0005_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0005_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Atlanta Hawks Nike Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0006_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0006_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0006_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0006_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Trae Young Atlanta Hawks Nike Unisex 2022/23 Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0007_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0007_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0007_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0007_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Atlanta Hawks Nike Unisex 2022/23 Swingman Custom Jersey Red – Icon Edition",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0008_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0008_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0008_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0008_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Trae Young Atlanta Hawks Jordan Brand 2020/21 Swingman Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0009_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0009_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0009_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0009_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "2021/22 Atlanta Hawks City Edition Trae Young #11 Jersey | NBA Swingman Jersey",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0014_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0014_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0014_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0014_03.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0014_04.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "2022/23 Atlanta Hawks City Edition Trae Young #11 Jersey | NBA Swingman Jersey",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0015_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0015_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0015_02.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Atlanta Hawks Trae Young #11 Jersey | NBA Swingman Jersey",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0016_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0016_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0016_02.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "2021/22 Atlanta Hawks Trae Young #11 Jersey | NBA Swingman Jersey",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0017_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0017_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0017_02.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Atlanta Hawks Clint Capela #15 Jersey | NBA Swingman Jersey",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0018_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0018_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0018_02.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Atlanta Hawks Dejounte Murray #5 Jersey | NBA Swingman Jersey",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0019_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0019_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0019_02.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "2023/24 Atlanta Hawks City Edition Dejounte Murray #5 Jersey | NBA Swingman Jersey",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0020_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0020_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0020_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0020_03.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0020_04.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "2023/24 Atlanta Hawks City Edition Trae Young #11 Jersey | NBA Swingman Jersey",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0021_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0021_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0021_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0021_03.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0021_04.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "2025/26 Atlanta Hawks City Edition Trae Young #11 Jersey | NBA Swingman Jersey",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0022_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0022_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0022_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0022_03.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0022_04.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "2024/25 Atlanta Hawks City Edition Trae Young #11 Jersey | NBA Swingman Jersey",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0023_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0023_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0023_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0023_03.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0023_04.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "2024/25 Atlanta Hawks City Edition Dejounte Murray #5 Jersey | NBA Swingman Jersey",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0024_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0024_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0024_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0024_03.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0024_04.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "1985/86 Atlanta Hawks Mitchell & Ness Retro Red Dominique Wilkins #21 Jersey | NBA Swingman Jersey",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0025_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0025_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0025_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0025_03.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0025_04.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Atlanta Hawks Jordan Edition Dejounte Murray #5 Jersey | NBA Swingman Jersey",
    "category": "sports",
    "group": "Atlanta Hawks",
    "league": "NBA",
    "team": "Atlanta Hawks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0026_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0026_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0026_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0026_03.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/atlanta-hawks/NBA_0026_04.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jaylen Brown Boston Celtics Nike Unisex 2025/26 White Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Boston Celtics",
    "league": "NBA",
    "team": "Boston Celtics",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0028_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0028_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jayson Tatum Boston Celtics Nike Unisex 2025/26 White Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Boston Celtics",
    "league": "NBA",
    "team": "Boston Celtics",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0029_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0029_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Boston Celtics Nike Unisex 2024/25 Custom Swingman Jersey – City Edition – Black",
    "category": "sports",
    "group": "Boston Celtics",
    "league": "NBA",
    "team": "Boston Celtics",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0030_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0030_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0030_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0030_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Derrick White Boston Celtics Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Black",
    "category": "sports",
    "group": "Boston Celtics",
    "league": "NBA",
    "team": "Boston Celtics",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0031_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0031_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0031_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0031_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jaylen Brown Boston Celtics Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Black",
    "category": "sports",
    "group": "Boston Celtics",
    "league": "NBA",
    "team": "Boston Celtics",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0032_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0032_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0032_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0032_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jayson Tatum Boston Celtics Nike Unisex 2024/25 Swingman Player Jersey – City Edition – Black",
    "category": "sports",
    "group": "Boston Celtics",
    "league": "NBA",
    "team": "Boston Celtics",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0033_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0033_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0033_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0033_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jrue Holiday Boston Celtics Nike Unisex Swingman Jersey – Icon Edition – Kelly Green",
    "category": "sports",
    "group": "Boston Celtics",
    "league": "NBA",
    "team": "Boston Celtics",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0034_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0034_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0034_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0034_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Kristaps Porzingis Boston Celtics Nike Unisex Swingman Jersey – Icon Edition – Kelly Green",
    "category": "sports",
    "group": "Boston Celtics",
    "league": "NBA",
    "team": "Boston Celtics",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0035_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0035_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0035_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0035_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jayson Tatum Boston Celtics Nike Unisex 2023/24 Swingman Jersey – White – City Edition",
    "category": "sports",
    "group": "Boston Celtics",
    "league": "NBA",
    "team": "Boston Celtics",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0036_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0036_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0036_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0036_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jayson Tatum Boston Celtics Unisex Nike 2022/23 Swingman Jersey – City Edition – Kelly Green",
    "category": "sports",
    "group": "Boston Celtics",
    "league": "NBA",
    "team": "Boston Celtics",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0037_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0037_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0037_02.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Boston Celtics Nike Unisex 2023/24 Custom Swingman Jersey – White – City Edition",
    "category": "sports",
    "group": "Boston Celtics",
    "league": "NBA",
    "team": "Boston Celtics",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0038_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0038_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0038_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0038_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Larry Bird Boston Celtics Throwback 1985-86 Hardwood Classics Jersey – Kelly Green",
    "category": "sports",
    "group": "Boston Celtics",
    "league": "NBA",
    "team": "Boston Celtics",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0039_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0039_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0039_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0039_03.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0039_04.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Boston Celtics Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "Boston Celtics",
    "league": "NBA",
    "team": "Boston Celtics",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0040_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0040_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0040_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0040_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Boston Celtics Nike Unisex 2022/23 Swingman Custom Jersey – City Edition – Kelly Green",
    "category": "sports",
    "group": "Boston Celtics",
    "league": "NBA",
    "team": "Boston Celtics",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0041_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0041_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0041_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0041_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jaylen Brown Boston Celtics Jordan Brand 2022/23 Statement Edition Swingman Jersey – Black",
    "category": "sports",
    "group": "Boston Celtics",
    "league": "NBA",
    "team": "Boston Celtics",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0042_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0042_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0042_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0042_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jayson Tatum Boston Celtics Jordan Brand 2022/23 Statement Edition Swingman Jersey – Black",
    "category": "sports",
    "group": "Boston Celtics",
    "league": "NBA",
    "team": "Boston Celtics",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0044_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0044_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0044_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/boston-celtics/NBA_0044_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Kevin Durant Brooklyn Nets Nike Swingman Jersey – Classic Edition – White",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0045_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0045_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0045_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0045_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Brooklyn Nets Nike Unisex 2023/24 Custom Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0046_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0046_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0046_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0046_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Kevin Durant Brooklyn Nets Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0047_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0047_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0047_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0047_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Mikal Bridges Brooklyn Nets Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0048_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0048_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0048_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0048_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Ben Simmons Brooklyn Nets Nike Unisex 2022/23 Swingman Jersey – City Edition – White",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0049_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0049_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0049_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0049_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Patty Mills Brooklyn Nets Nike 2021/22 Moments Mixtape Swingman Jersey – Navy",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0050_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0050_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0050_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0050_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Ben Simmons Brooklyn Nets Nike 2022/23 Swingman Jersey White – Classic Edition",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0051_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0051_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0051_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0051_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Brooklyn Nets Nike Unisex 2022/23 Swingman Custom Jersey – City Edition – White",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0052_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0052_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0052_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0052_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Ben Simmons Brooklyn Nets Jordan Brand 2022/23 Statement Edition Swingman Jersey – Black",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0053_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0053_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0053_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0053_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Brooklyn Nets Nike Unisex 2022/23 Custom Swingman Jersey – Classic Edition – White",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0054_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0054_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0054_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0054_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Brooklyn Nets Nike Unisex 2022/23 Swingman Custom Jersey Black – Icon Edition",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0055_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0055_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0055_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0055_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Brooklyn Nets Nike 2021/22 Swingman Custom Jersey – City Edition – Navy",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0056_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0056_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0056_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0056_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Brooklyn Nets Nike Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0057_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0057_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0057_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0057_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Kevin Durant Brooklyn Nets Nike 2021/22 Swingman Jersey – City Edition – Navy",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0058_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0058_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0058_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0058_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Kyrie Irving Brooklyn Nets Nike 2021/22 Swingman Jersey – City Edition – Navy",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0059_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0059_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0059_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0059_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Kyrie Irving Brooklyn Nets Nike 2020/21 Swingman Jersey – Black – Icon Edition",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0060_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0060_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0060_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0060_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Brooklyn Nets Jordan Brand Swingman Custom Jersey – Statement Edition – Gray",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0061_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0061_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0061_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0061_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Kyrie Irving Brooklyn Nets Nike 2020/21 Swingman Jersey – White – Association Edition",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0062_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0062_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0062_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0062_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Brooklyn Nets Nike 2021/22 Diamond Swingman Custom Jersey – Icon Edition – Black",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0063_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0063_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0063_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0063_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Kevin Durant Brooklyn Nets Nike 2020/21 Swingman Jersey – Black – Icon Edition",
    "category": "sports",
    "group": "Brooklyn Nets",
    "league": "NBA",
    "team": "Brooklyn Nets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0064_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0064_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0064_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/brooklyn-nets/NBA_0064_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "LaMelo Ball Charlotte Hornets Jordan Brand Orange 2025/26 City Edition Swingman Jersey",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0066_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0066_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Charlotte Hornets Jordan Brand Orange 2025/26 City Edition Swingman Custom Jersey",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0067_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0067_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Unisex Jordan Brand LaMelo Ball Teal Charlotte Hornets 2023/24 Swingman Replica Jersey – Classic Edition",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0068_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0068_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0068_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0068_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Charlotte Hornets Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Teal",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0069_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0069_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0069_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0069_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "LaMelo Ball Charlotte Hornets Jordan Brand Unisex 2022/23 Swingman Jersey – City Edition – Black",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0070_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0070_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0070_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0070_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Charlotte Hornets Jordan Brand Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0071_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0071_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0071_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0071_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Charlotte Hornets Jordan Brand 2020/21 Swingman Custom Jersey – Icon Edition – Teal",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0072_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0072_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0072_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0072_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Charlotte Hornets Jordan Brand Unisex 2022/23 Swingman Custom Jersey Teal – Icon Edition",
    "category": "sports",
    "group": "Charlotte Hornets",
    "league": "NBA",
    "team": "Charlotte Hornets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0074_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0074_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0074_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/charlotte-hornets/NBA_0074_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Chicago Bulls Michael Jordan #23 Throwback Street Graffiti 1997-98 Hardwood Classics Jersey",
    "category": "sports",
    "group": "Chicago Bulls",
    "league": "NBA",
    "team": "Chicago Bulls",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0090_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0090_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0090_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0090_03.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0090_04.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Michael Jordan Chicago Bulls Nike Unisex 2025/26 City Edition Black Swingman Jersey",
    "category": "sports",
    "group": "Chicago Bulls",
    "league": "NBA",
    "team": "Chicago Bulls",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0091_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0091_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Matas Buzelis Chicago Bulls Nike Unisex 2025/26 City Edition Black Swingman Jersey",
    "category": "sports",
    "group": "Chicago Bulls",
    "league": "NBA",
    "team": "Chicago Bulls",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0092_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0092_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Josh Giddey Chicago Bulls Nike Unisex 2025/26 City Edition Black Swingman Jersey",
    "category": "sports",
    "group": "Chicago Bulls",
    "league": "NBA",
    "team": "Chicago Bulls",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0093_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0093_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Coby White Chicago Bulls Nike Unisex 2025/26 City Edition Black Swingman Jersey",
    "category": "sports",
    "group": "Chicago Bulls",
    "league": "NBA",
    "team": "Chicago Bulls",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0094_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0094_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Dennis Rodman Chicago Bulls Jordan Brand Unisex Black Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Chicago Bulls",
    "league": "NBA",
    "team": "Chicago Bulls",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0095_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0095_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Michael Jordan Chicago Bulls Jordan Brand Unisex Black Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Chicago Bulls",
    "league": "NBA",
    "team": "Chicago Bulls",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0096_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0096_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Scottie Pippen Chicago Bulls Jordan Brand Unisex Black Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Chicago Bulls",
    "league": "NBA",
    "team": "Chicago Bulls",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0097_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0097_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "DeMar DeRozan Chicago Bulls Jordan Brand Unisex Black Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Chicago Bulls",
    "league": "NBA",
    "team": "Chicago Bulls",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0098_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0098_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Zach LaVine Chicago Bulls Jordan Brand Unisex Black Swingman Jersey – Statement Edition",
    "category": "sports",
    "group": "Chicago Bulls",
    "league": "NBA",
    "team": "Chicago Bulls",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0099_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0099_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Chicago Bulls Nike Unisex 2025/26 City Edition Black Swingman Custom Jersey",
    "category": "sports",
    "group": "Chicago Bulls",
    "league": "NBA",
    "team": "Chicago Bulls",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0100_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0100_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Chicago Bulls Jordan Brand Unisex Black Swingman Custom Jersey – Statement Edition",
    "category": "sports",
    "group": "Chicago Bulls",
    "league": "NBA",
    "team": "Chicago Bulls",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0101_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0101_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Zach LaVine Chicago Bulls Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Chicago Bulls",
    "league": "NBA",
    "team": "Chicago Bulls",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0102_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0102_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0102_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0102_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "DeMar DeRozan Chicago Bulls Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Chicago Bulls",
    "league": "NBA",
    "team": "Chicago Bulls",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0103_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0103_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0103_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0103_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Alex Caruso Chicago Bulls Nike Unisex Swingman Jersey – Icon Edition – Red",
    "category": "sports",
    "group": "Chicago Bulls",
    "league": "NBA",
    "team": "Chicago Bulls",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0104_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0104_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0104_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0104_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Lonzo Ball Chicago Bulls Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Chicago Bulls",
    "league": "NBA",
    "team": "Chicago Bulls",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0105_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0105_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0105_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0105_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Chicago Bulls Nike Unisex 2023/24 Custom Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Chicago Bulls",
    "league": "NBA",
    "team": "Chicago Bulls",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0106_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0106_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0106_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/chicago-bulls/NBA_0106_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Donovan Mitchell Cleveland Cavaliers Nike Unisex Navy Swingman Jersey – Classic Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0109_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0109_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "LeBron James Cleveland Cavaliers Nike Unisex Navy Swingman Jersey – Classic Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0110_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0110_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Darius Garland Cleveland Cavaliers Nike Unisex Navy Swingman Jersey – Classic Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0111_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0111_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "James Harden Cleveland Cavaliers Nike Unisex Navy Swingman Jersey – Classic Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0112_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0112_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Donovan Mitchell Cleveland Cavaliers Nike 2025/26 Orange Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0113_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0113_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "LeBron James Cleveland Cavaliers Nike 2025/26 Orange Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0114_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0114_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Darius Garland Cleveland Cavaliers Nike 2025/26 Orange Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0115_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0115_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "James Harden Cleveland Cavaliers Nike 2025/26 Orange Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0116_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0116_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Cleveland Cavaliers Nike 2025/26 Orange Swingman Custom Jersey – City Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0117_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0117_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Cleveland Cavaliers Nike Unisex Navy Swingman Custom Jersey – Classic Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0118_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0118_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Donovan Mitchell Cleveland Cavaliers Nike Unisex Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0119_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0119_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0119_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0119_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Donovan Mitchell Cleveland Cavaliers Nike Unisex 2023/24 Swingman Jersey – Wine – City Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0120_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0120_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0120_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0120_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Darius Garland Cleveland Cavaliers Nike Unisex Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0121_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0121_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0121_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0121_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Evan Mobley Cleveland Cavaliers Jordan Brand 2022/23 Statement Edition Swingman Jersey – Black",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0122_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0122_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0122_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0122_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Donovan Mitchell Cleveland Cavaliers Jordan Brand Swingman Player Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0123_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0123_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0123_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0123_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Cleveland Cavaliers Nike Unisex 2023/24 Custom Swingman Jersey – Wine – City Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0124_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0124_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0124_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0124_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Darius Garland Cleveland Cavaliers Nike Unisex 2023/24 Swingman Jersey – Wine – City Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0125_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0125_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0125_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0125_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jarrett Allen Cleveland Cavaliers Nike 2022/23 Swingman Jersey Wine – Icon Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0126_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0126_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0126_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0126_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Evan Mobley Cleveland Cavaliers Nike 2022/23 Swingman Jersey Wine – Icon Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0127_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0127_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0127_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0127_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Cleveland Cavaliers Nike Unisex 2022/23 Swingman Custom Jersey Wine – Icon Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0128_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0128_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0128_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0128_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Cleveland Cavaliers Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0129_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0129_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0129_02.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Donovan Mitchell Cleveland Cavaliers Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Burgundy",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0130_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0130_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0130_02.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Darius Garland Cleveland Cavaliers Nike 2022/23 Swingman Jersey Wine – Icon Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0131_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0131_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0131_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0131_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Cleveland Cavaliers Nike Swingman Custom Jersey Black – Statement Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0132_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0132_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0132_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0132_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Cleveland Cavaliers Nike Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0133_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0133_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0133_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0133_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Evan Mobley Cleveland Cavaliers Nike Unisex 2022/23 Swingman Jersey – Association Edition – White",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0134_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0134_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0134_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0134_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Collin Sexton Cleveland Cavaliers Jordan Brand 2020/21 Swingman Jersey – Statement Edition – Black",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0135_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0135_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Collin Sexton Cleveland Cavaliers Nike 2021/22 Diamond Swingman Jersey – Icon Edition – Wine",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0136_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0136_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0136_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0136_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Kevin Love Cleveland Cavaliers Nike Swingman Jersey Maroon – Icon Edition",
    "category": "sports",
    "group": "Cleveland Cavaliers",
    "league": "NBA",
    "team": "Cleveland Cavaliers",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0138_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/cleveland-cavaliers/NBA_0138_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Unisex Dallas Mavericks Cooper Flagg #32 Green Swingman Jersey – Classic Edition",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0142_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0142_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0142_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0142_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Unisex Dallas Mavericks Kyrie Irving #11 White Swingman Jersey – City Edition",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0143_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0143_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0143_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0143_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Unisex Dallas Mavericks Kyrie Irving #11 Green Swingman Jersey – Classic Edition",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0144_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0144_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0144_02.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Unisex Dallas Mavericks Kyrie Irving #11 Blue Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0145_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0145_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0145_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0145_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Unisex Dallas Mavericks Cooper Flagg Nike Blue Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0146_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0146_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0146_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0146_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Cooper Flagg Dallas Mavericks Nike Unisex 2025 NBA Draft First Round Pick Swingman Jersey – Icon Edition – Blue",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0147_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0147_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Cooper Flagg Dallas Mavericks Jordan Brand Swingman Jersey – Statement Edition – Navy",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0148_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0148_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Luka Don?i? Dallas Mavericks Nike Unisex 2024/25 Swingman Player Jersey – City Edition – White",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0149_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0149_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0149_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0149_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Dallas Mavericks Nike Unisex 2023/24 Custom Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0150_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0150_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0150_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0150_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Kyrie Irving Dallas Mavericks Nike Unisex Swingman Jersey – Icon Edition – Blue",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0151_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0151_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0151_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0151_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Luka Don?i? Dallas Mavericks Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0152_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0152_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0152_02.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Dallas Mavericks Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Navy",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0153_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0153_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0153_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0153_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Dallas Mavericks Nike Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0154_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0154_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0154_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0154_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Luka Doncic Dallas Mavericks Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Royal",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0155_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0155_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0155_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0155_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Luka Doncic Dallas Mavericks Nike Unisex 2022/23 Swingman Jersey – City Edition – Blue",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0156_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0156_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0156_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0156_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Dallas Mavericks Nike Unisex 2022/23 Swingman Custom Jersey – City Edition – Blue",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0157_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0157_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0157_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0157_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Dallas Mavericks Nike Unisex 2022/23 Swingman Custom Jersey Royal – Icon Edition",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0158_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0158_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0158_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0158_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Luka Doncic Dallas Mavericks Nike Unisex 2022/23 Swingman Jersey – Icon Edition – White",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0159_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0159_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0159_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0159_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Luka Doncic Dallas Mavericks Nike Select Series Rookie of the Year Swingman Team Jersey – Navy",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0160_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0160_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0160_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0160_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Luka Doncic Dallas Mavericks Jordan Brand 2020/21 Swingman Jersey – Statement Edition – Navy",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0161_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0161_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0161_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0161_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Dallas Mavericks Nike 2021/22 Swingman Custom Jersey – City Edition – White",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0162_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0162_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0162_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0162_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Dallas Mavericks Nike 2020/21 Hardwood Classics Swingman Custom Jersey – Green",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0163_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0163_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0163_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0163_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Dallas Mavericks Nike Custom Swingman Jersey White – Association Edition",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0164_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0164_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0164_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0164_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Luka Doncic Dallas Mavericks Nike 2020/21 Swingman Jersey Royal – Icon Edition",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0165_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0165_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0165_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0165_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Dallas Mavericks Nike Swingman Custom Jersey Royal – Icon Edition",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0166_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0166_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0166_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0166_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Luka Doncic Dallas Mavericks Nike 2021/22 Diamond Swingman Jersey – Icon Edition – Blue",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0167_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0167_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0167_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0167_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Luka Doncic Dallas Mavericks Nike 2021/22 Swingman Jersey – City Edition – White",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0169_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0169_01.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Dallas Mavericks Nike 2019/20 Custom Swingman Jersey Navy – Statement Edition",
    "category": "sports",
    "group": "Dallas Mavericks",
    "league": "NBA",
    "team": "Dallas Mavericks",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0170_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0170_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0170_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/dallas-mavericks/NBA_0170_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jamal Murray Denver Nuggets Nike Unisex 2024/25 Swingman Player Jersey – City Edition – White",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0171_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0171_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0171_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0171_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jamal Murray Denver Nuggets Nike Unisex 2022/23 Swingman Jersey – City Edition – Silver",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0172_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0172_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0172_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0172_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Denver Nuggets Nike Unisex 2024/25 Custom Swingman Jersey – City Edition – White",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0173_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0173_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0173_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0173_03.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0173_04.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Nikola Jokic Denver Nuggets Nike Unisex 2024/25 Swingman Player Jersey – City Edition – White",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0174_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0174_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0174_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0174_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Aaron Gordon Denver Nuggets Nike Unisex 2022/23 Swingman Jersey – City Edition – Silver",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0175_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0175_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0175_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0175_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Denver Nuggets Nike Unisex 2022/23 Swingman Custom Jersey – City Edition – Gray",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0176_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0176_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0176_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0176_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Nikola Jokic Denver Nuggets Nike Unisex 2022/23 Swingman Jersey – City Edition – Silver",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0177_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0177_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0177_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0177_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jamal Murray Denver Nuggets Jordan Brand 2022/23 Statement Edition Swingman Jersey – Blue",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0178_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0178_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0178_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0178_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jamal Murray Denver Nuggets Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0179_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0179_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0179_02.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Nikola Jokic Denver Nuggets Jordan Brand 2022/23 Statement Edition Swingman Jersey – Blue",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0180_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0180_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0180_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0180_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Nikola Jokic Denver Nuggets Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0181_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0181_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0181_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0181_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Denver Nuggets Nike Unisex 2022/23 Swingman Custom Jersey Navy – Icon Edition",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0182_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0182_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0182_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0182_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Denver Nuggets Nike Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0183_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0183_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0183_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0183_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jamal Murray Denver Nuggets Nike 2020/21 Swingman Player Jersey – Association Edition – White",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0184_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0184_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0184_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0184_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Nikola Jokic Denver Nuggets Jordan Brand 2020/21 Swingman Jersey – Statement Edition – Blue",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0185_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0185_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0185_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0185_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Denver Nuggets Nike 2021/22 Swingman Custom Jersey – City Edition – Navy",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0186_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0186_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0186_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0186_03.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0186_04.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Denver Nuggets Nike 2021/22 Diamond Swingman Custom Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0187_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0187_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0187_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0187_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Nikola Jokic Denver Nuggets Nike 2020/21 Swingman Jersey Navy – Icon Edition",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0188_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0188_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0188_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0188_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jamal Murray Denver Nuggets Jordan Brand 2020/21 Swingman Jersey – Statement Edition – Blue",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0189_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0189_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0189_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0189_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jamal Murray Denver Nuggets Nike 2021/22 Swingman Jersey – City Edition – Navy",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0190_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0190_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0190_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0190_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Denver Nuggets Nike Custom Swingman Jersey Navy – Icon Edition",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0191_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0191_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0191_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0191_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jamal Murray Denver Nuggets Nike 2020/21 Swingman Jersey Navy – Icon Edition",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0192_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0192_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0192_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0192_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Nikola Jokic Denver Nuggets Nike 2021/22 Swingman Jersey – City Edition – Navy",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0193_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0193_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0193_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0193_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jamal Murray Denver Nuggets Nike 2021/22 Diamond Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0195_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0195_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0195_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0195_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Nikola Jokic Denver Nuggets Nike Replica Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0196_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0196_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0196_02.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Nikola Jokic Denver Nuggets Nike 2021/22 Diamond Swingman Jersey – Icon Edition – Navy",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0198_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0198_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0198_02.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Men’s Denver Nuggets Porter Jr #1 Nike Navy 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Denver Nuggets",
    "league": "NBA",
    "team": "Denver Nuggets",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0204_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0204_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0204_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/denver-nuggets/NBA_0204_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jaden Ivey Detroit Pistons Nike 2022/23 Swingman Jersey – City Edition – Green",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0205_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0205_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0205_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0205_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Cade Cunningham Detroit Pistons Nike Unisex 2022/23 Swingman Jersey – City Edition – Green",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0206_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0206_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0206_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0206_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Detroit Pistons Nike Unisex 2022/23 Swingman Custom Jersey White – Association Edition",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0207_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0207_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0207_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0207_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Detroit Pistons Nike Unisex 2022/23 Swingman Custom Jersey Blue – Icon Edition",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0208_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0208_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0208_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0208_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Detroit Pistons Jordan Brand Unisex 2022/23 Swingman Custom Jersey – Statement Edition – Blue",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0209_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0209_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0209_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0209_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Cade Cunningham Detroit Pistons Nike Unisex 2023/24 Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0210_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0210_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0210_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0210_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Detroit Pistons Nike Unisex 2023/24 Custom Swingman Jersey – Black – City Edition",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0211_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0211_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0211_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0211_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Detroit Pistons Nike Unisex 2022/23 Custom Swingman Jersey – Classic Edition – Teal",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0212_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0212_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0212_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0212_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Cade Cunningham Detroit Pistons Jordan Brand 2022/23 Statement Edition Swingman Jersey – Black",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0213_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0213_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0213_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0213_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Detroit Pistons Nike Unisex 2022/23 Swingman Custom Jersey – City Edition – Green",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0214_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0214_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0214_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0214_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Cade Cunningham Detroit Pistons Nike 2022/23 Swingman Jersey Teal – Classic Edition",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0215_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0215_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0215_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0215_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Jaden Ivey Detroit Pistons Nike Unisex 2022 NBA Draft First Round Pick Swingman Jersey – Icon Edition – Blue",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0216_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0216_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0216_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0216_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Detroit Pistons Nike 2021/22 Diamond Swingman Custom Jersey – Icon Edition – Blue",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0217_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0217_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0217_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0217_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Detroit Pistons 2018/19 Swingman Custom Men’s Jersey – City Edition – Black",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0218_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0218_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0218_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0218_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Reggie Jackson Detroit Pistons Nike Swingman Jersey Blue – Icon Edition",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0219_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0219_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0219_02.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Detroit Pistons Nike Swingman Custom Jersey Blue – Icon Edition",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0220_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0220_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0220_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0220_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Cade Cunningham Detroit Pistons Nike Unisex 2022/23 Swingman Jersey – Icon Edition – Blue",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0221_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0221_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0221_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0221_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Men’s Detroit Pistons Cade Cunningham #2 Nike Blue 2021 Swingman Jersey – Icon Edition",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0222_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0222_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0222_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0222_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Men’s Detroit Pistons Grant Hill #33 Throwback Blue 98-99 Hardwood Classics Swingman Jersey",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0223_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0223_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0223_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0223_03.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0223_04.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Detroit Pistons Nike 2020/21 Swingman Custom Jersey Blue – City Edition",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0224_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0224_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0224_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0224_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Men’s Detroit Pistons Cade Cunningham #2 Nike Red 2021/22 Swingman NBA Jersey – City Edition",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0225_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0225_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0225_02.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Men’s Detroit Pistons Derrick Rose #25 Nike White 2021/22 Swingman NBA Jersey – Icon Edition",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0226_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0226_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0226_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0226_03.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0226_04.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Men’s Detroit Pistons Cade Cunningham #2 Nike Blue 2021/22 Swingman NBA Jersey – Icon Edition",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0227_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0227_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0227_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0227_03.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0227_04.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Men’s Detroit Pistons Allen Iverson #1 Nike Blue 2021/22 Swingman NBA Jersey – Icon Edition",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0228_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0228_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0228_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0228_03.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0228_04.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "2023-24 Detroit Pistons City Edition Cade Cunningham #2 Men’s Jersey",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0229_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0229_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0229_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0229_03.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0229_04.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "2023-24 Detroit Pistons Cade Cunningham #2 Men’s Jersey",
    "category": "sports",
    "group": "Detroit Pistons",
    "league": "NBA",
    "team": "Detroit Pistons",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0230_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0230_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0230_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0230_03.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/detroit-pistons/NBA_0230_04.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "name": "Men’s Toronto Raptors Vince Carter #15 White 1998-99 Hardwood Classics Swingman Jersey",
    "category": "sports",
    "group": "Toronto Raptors",
    "league": "NBA",
    "team": "Toronto Raptors",
    "image": "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/toronto-raptors/NBA_0798_01.png",
    "images": [
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/toronto-raptors/NBA_0798_01.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/toronto-raptors/NBA_0798_02.png",
      "https://pub-d179500225b14dffa9e52c4dabab121a.r2.dev/NBA_IMPORT/images/toronto-raptors/NBA_0798_03.png"
    ],
    "sizes": [
      "2XL",
      "L",
      "M",
      "S",
      "XL"
    ]
  }

];

// Ajout sans doublon : les fiches déjà présentes dans le catalogue restent prioritaires.
NBA_PRODUCTS.forEach(product => {
  const normalizeName = value => String(value || "").trim().toLocaleLowerCase("fr")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  const duplicate = PRODUCTS.some(existing => existing.category === product.category && existing.group === product.group && normalizeName(existing.name) === normalizeName(product.name));
  if (!duplicate) PRODUCTS.push(product);
});

// Catalogue NBA : aucun prix ni lien fournisseur n'est publié.
