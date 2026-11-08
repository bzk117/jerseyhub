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
const CLUB_PRODUCTS = [
  {
    "name": "Retro Manchester United 1983 away Football jersey retro",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "1983",
    "kitType": "away",
    "version": "retro",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/08/products/169db19b3b.jpeg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/08/products/169db19b3b.jpeg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/08/products/169db19b3b.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/08/products/73170d856f.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/08/products/66e2ceaeee.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/08/products/667756227f.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/08/products/b94824c096.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/08/products/af3d0bf528.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/08/products/d2a162a3c5.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/08/products/0a91eb5628.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-manchester-united-1983-away-retro",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-manchester-united-1983-away-retro",
    "patchSlots": 0,
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "players": []
  },
  {
    "name": "2025-26 Manchester United short-sleeved training shirt",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2025-26",
    "kitType": "training",
    "version": "fan",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/33da3d4e64.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/33da3d4e64.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/33da3d4e64.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/4376387bee.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/4d192d3f79.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/470e2cb5b2.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/0f23536b9d.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/1a5b281abf.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/e773462bdb.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/b48dff9cbc.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/6fc8546adf.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/46bcbaabc4.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/2025-26-manchester-united-short-sleeved-training-shirt",
    "sourceUrl": "https://www.vivi-jersey.com/products/2025-26-manchester-united-short-sleeved-training-shirt",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "141355689336a623",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "68e89844c0b9d35b",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "b3c4f58b44485314",
        "label": "Europa+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "6a3ddf1fe5f0c429",
        "label": "No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "4bf0a41d2c751ff3",
        "label": "UCL+ FOUNDATION 10",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "4c26fa20e6b30e6e",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "KIDS 2025-26 Manchester United Home KIDS Football jersey",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2025-26",
    "kitType": "home",
    "version": "kids",
    "sizes": [
      "S",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/products/bc716946a6.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/products/bc716946a6.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/products/bc716946a6.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/products/81fa45c290.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/products/26f495b022.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/products/4d5c5b7b19.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/products/51d6b15bdf.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/products/1c6e2728f8.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/products/81562ae1cf.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/products/b098b116ca.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/products/078b9d255c.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/17/photo/4333133213.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/kids-2025-26-manchester-united-home-kids-football-jersey",
    "sourceUrl": "https://www.vivi-jersey.com/products/kids-2025-26-manchester-united-home-kids-football-jersey",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "dfad80302a8992f9",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "561a3f65ad827c7f",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "aed9048a4dcf94ce",
        "label": "Europa+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "3c6b419e7e45c1fe",
        "label": "No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "516052db71062120",
        "label": "UCL+ FOUNDATION 10",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "3e12460553aafed6",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Player 2025-26 Manchester United Special Edition Football jersey",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2025-26",
    "kitType": "special",
    "version": "player",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/79f2c4e665.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/79f2c4e665.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/79f2c4e665.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/b2569306fd.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/37370ebd15.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/24c8824496.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/18857b017e.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/3d316b28ff.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/73ffc2bee1.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/0d735da17e.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/a5c496546e.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/e10a04ad7f.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/player-2025-26-manchester-united-special-edition-football-jersey-16",
    "sourceUrl": "https://www.vivi-jersey.com/products/player-2025-26-manchester-united-special-edition-football-jersey-16",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "61845a4e1f4a8fb8",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "032a1865a8c7ee4b",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "343ac59e6ef83b74",
        "label": "Europa+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "fc70210d498812bb",
        "label": "No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "70018e4a110f4d0b",
        "label": "UCL+ FOUNDATION 10",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "5fff52d15090e086",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro Kids 2000-01 Manchester United Away Kids Football jersey",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2000-01",
    "kitType": "away",
    "version": "kids",
    "sizes": [
      "S",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/7-202531da88.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/7-202531da88.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/7-202531da88.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/8-202531d159.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG1054JPG-202531fb89.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG1063JPG-202531999b.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG1059JPG-2025317e57.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG1058JPG-202531bf27.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG1057JPG-2025314bf6.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG1068JPG-2025312525.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG1067JPG-2025318caa.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG1065JPG-20253148d5.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-kids-2000-01-manchester-united-away-kids-football-jersey",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-kids-2000-01-manchester-united-away-kids-football-jersey",
    "patchSlots": 1,
    "patchOptions": [
      {
        "id": "bf056ff92d70e6f6",
        "label": "No Patch Premier League 00-01 champion",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "d77f2b0fe67f3166",
        "label": "UCL",
        "slot_number": 1,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro 2008-09 Manchester United Away UCL Kids Football jersey Kids UCL",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2008-09",
    "kitType": "away",
    "version": "kids",
    "sizes": [
      "S",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/3718766548.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/3718766548.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/3718766548.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/3bf6fa78d4.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/f46616762d.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/68882d5b0d.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/1535171cdc.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/01c9add393.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/596dcf8b1f.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/418d59944f.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/3136fe83b6.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/9332b16fb2.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-2008-09-manchester-united-away-ucl-kids-football-jersey-kids-ucl",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-2008-09-manchester-united-away-ucl-kids-football-jersey-kids-ucl",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "7b960ffdcd2fa311",
        "label": "No Patch Premier League 07-08 champion",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "b708a269a3eb0ca9",
        "label": "UCL",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "397508e55c57db41",
        "label": "FIFA 2008",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "2024-25 Manchester United Goalkeeper football jersey",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2024-25",
    "kitType": "goalkeeper",
    "version": "fan",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2409/05/products/30d38d5ec0.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2409/05/products/30d38d5ec0.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2409/05/products/30d38d5ec0.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2409/05/products/5069fb9dd4.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2409/05/products/ff0a0ffad3.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2409/05/products/8420896277.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2409/05/products/a2db984270.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2409/05/products/4d0273929d.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2409/05/products/37cc3a5e57.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/17/photo/4333133213.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/21/photo/b9c669105f7b61b0eca5d40b49da613e.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/03/photo/b241619407.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/2024-25-manchester-united-goalkeeper-football-jersey",
    "sourceUrl": "https://www.vivi-jersey.com/products/2024-25-manchester-united-goalkeeper-football-jersey",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "52483201efe9f465",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "ac9366000b1c44e5",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "dafffc04e97ba516",
        "label": "Europa+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "146798493f3589f1",
        "label": "Carabao Cup",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "5c69f9554e09960f",
        "label": "Carabao Cup +No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "31d8d6f8472a9e7a",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "2026-27 Manchester United Special Edition Football Jersey",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2026-27",
    "kitType": "special",
    "version": "fan",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2603/22/products/010ZT-19593199b7.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2603/22/products/010ZT-19593199b7.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2603/22/products/010ZT-19593199b7.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2603/22/products/001-195932d7ac.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2603/22/products/009-1959320232.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2603/22/products/002-195932c70c.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2603/22/products/005-1959324567.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2603/22/products/007-19593223a8.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2603/22/products/008-195932ec8c.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2603/22/products/006-1959320b0e.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2603/22/products/003-1959327130.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/17/photo/4333133213.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/2026-27-manchester-united-special-edition-football-jersey",
    "sourceUrl": "https://www.vivi-jersey.com/products/2026-27-manchester-united-special-edition-football-jersey",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "066e7b9a5a0cce85",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "5be6ae216b4c497f",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "41f65648192493b2",
        "label": "UCL+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "2340a541f2e45b81",
        "label": "No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "efa52d8396605573",
        "label": "UCL DEBUT+FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "eb52380c04381a81",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      },
      {
        "id": "3313e7d8774e5319",
        "label": "SUMUP",
        "slot_number": 2,
        "extra_price_eur": 0.9
      },
      {
        "id": "4d2a1c039a3f3008",
        "label": "Foundation",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro 2021-22 Manchester United Home Football jersey Retro long sleeves",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2021-22",
    "kitType": "home",
    "version": "retro",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/03/products/c2dbc6ec0edbc85a7f38958b46a7fa6-0005190e83.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/03/products/c2dbc6ec0edbc85a7f38958b46a7fa6-0005190e83.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/03/products/c2dbc6ec0edbc85a7f38958b46a7fa6-0005190e83.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/03/products/e721898bc859dee7334fc05f56256d9-000519f50a.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/03/products/221133a7b1c0293425551e90ad065cc-000519ee5d.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/03/products/f02a2a55b822b3c4bd25b3ee7656448-000519a111.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/03/products/8d23c16dfcbb212f38237d8fe2fa840-0005195bf3.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/17/photo/4333133213.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/03/photo/12113131.png?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/21/photo/e4e6ba05af.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-2021-22-manchester-united-home-football-jersey-retro-long-sleeves",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-2021-22-manchester-united-home-football-jersey-retro-long-sleeves",
    "patchSlots": 1,
    "patchOptions": [
      {
        "id": "4dc9e66fdece383c",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "9d6108b4cf2a4f7b",
        "label": "UCL+FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro Long Sleeve 2007-08 UCL Manchester United Champions League version home   Football jersey retro",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2007-08",
    "kitType": "home",
    "version": "retro",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/41ab59f4cd.jpeg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/41ab59f4cd.jpeg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/41ab59f4cd.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/1890b0e6fb.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/33e61c066c.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/d06b4b3f2d.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/b304646706.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/91a5292ec0.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/690c25fd5a.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/41d1a65477.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/ed0ede9583.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/af7af1fcb3.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-long-sleeve-07-08-manchester-united-champions-league-version-home-football-jersey-retro",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-long-sleeve-07-08-manchester-united-champions-league-version-home-football-jersey-retro",
    "patchSlots": 1,
    "patchOptions": [
      {
        "id": "c4d0f2885c98672a",
        "label": "No Patch UCL",
        "slot_number": 1,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro 2006-07 Manchester United Home Kids Football jersey Kids",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2006-07",
    "kitType": "home",
    "version": "kids",
    "sizes": [
      "S",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/1-211658fb29.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/1-211658fb29.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/1-211658fb29.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/2-2117063de2.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG4265JPG.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG4273JPG.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG4268JPG.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG4267JPG.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG4269JPG.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG4266JPG.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG4271JPG.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG4270JPG.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-2006-07-manchester-united-home-kids-football-jersey-kids",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-2006-07-manchester-united-home-kids-football-jersey-kids",
    "patchSlots": 1,
    "patchOptions": [
      {
        "id": "d8bdb45b56584618",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "18442d6acd50911b",
        "label": "UCL",
        "slot_number": 1,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "2025-26 Manchester United Second away game Soccer Jersey S-4XL",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2025-26",
    "kitType": "away",
    "version": "fan",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "3XL",
      "4XL",
      "XXL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/0c4817e031.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/0c4817e031.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/0c4817e031.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/4a16c08818.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/ee64133156.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/15d5ca85a4.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/5c776b7dbc.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/22ddf0c929.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/a703991892.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/48491ae9c1.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/da0be03039.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/17/photo/4333133213.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/2025-26-manchester-united-second-away-game-soccer-jersey-s-4xl",
    "sourceUrl": "https://www.vivi-jersey.com/products/2025-26-manchester-united-second-away-game-soccer-jersey-s-4xl",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "32ccec9d73a1fb52",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "5220ee17eb604097",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "1d5c8a4150a397e9",
        "label": "Europa+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "9dc199146dedcb9c",
        "label": "No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "ce9ac2bf8fd19c9d",
        "label": "UCL+ FOUNDATION 10",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "7bf159dfaf0c1420",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro 2008-09 Manchester United Away Kids Football jersey Kids",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2008-09",
    "kitType": "away",
    "version": "kids",
    "sizes": [
      "S",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/b9d75cfc98.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/b9d75cfc98.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/b9d75cfc98.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/119de641fe.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/65df82f307.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/f6d272a43e.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/e0c3493ae8.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/e5b1d1fb58.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/17/photo/4333133213.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/22/photo/07-08.png?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/02/photo/08-09.png?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/02/photo/2008.png?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-2008-09-manchester-united-away-kids-football-jersey-kids-1",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-2008-09-manchester-united-away-kids-football-jersey-kids-1",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "37756b2ebe3fa41f",
        "label": "No Patch Premier League 07-08 champion",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "de4ec48e29702fda",
        "label": "UCL",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "7209c9989c8e0a60",
        "label": "FIFA 2008",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro 1990-92 Manchester United  away   Football jersey retro",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "1990-92",
    "kitType": "away",
    "version": "retro",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/9997a63547.jpeg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/9997a63547.jpeg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/9997a63547.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/3198bc8f42.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/6adff664f4.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/268e652f2f.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/d4e103a5b2.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/829b2a7d9a.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/7c858b66ca.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/b98f8692d6.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/72fa7dfdcc.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/46041e6319.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-1990-92-manchester-united-away-football-jersey-retro",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-1990-92-manchester-united-away-football-jersey-retro",
    "patchSlots": 0,
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "players": []
  },
  {
    "name": "2023-24 Manchester United  away",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2023-24",
    "kitType": "away",
    "version": "fan",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/734926b6d1.jpeg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/734926b6d1.jpeg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/734926b6d1.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/169d0514b8.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/2cae6565aa.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/982c3b2864.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/08b7f479f3.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/1cb23ec699.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/f8abbd7021.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/9ee1cdbe04.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/88829549c4.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/3b839ca47f.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/2023-24-manchester-united-away-1",
    "sourceUrl": "https://www.vivi-jersey.com/products/2023-24-manchester-united-away-1",
    "patchSlots": 1,
    "patchOptions": [
      {
        "id": "eb65f7b5c0c93db7",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "664f4f2ff757d110",
        "label": "UCL+FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro 2007-08 Manchester United Home Euro Three Stars Football jersey",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2007-08",
    "kitType": "home",
    "version": "retro",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/63f772f7ba.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/63f772f7ba.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/63f772f7ba.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/306ed6c99c.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/b952f47ab0.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/dc30cc6ffb.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/59e5758d30.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/c82d721450.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/eeb0b0b83c.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/0e852e6621.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/06558fca15.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/a6448a83a9.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-2007-08-manchester-united-home-euro-three-stars-football-jersey",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-2007-08-manchester-united-home-euro-three-stars-football-jersey",
    "patchSlots": 1,
    "patchOptions": [
      {
        "id": "57ba0341956d2d03",
        "label": "No Patch Premier League 06-07 champion",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "a22a86cc4191baf2",
        "label": "UCL",
        "slot_number": 1,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro 1994-96 Manchester United away CANTONA HUGHES KEANE  Football jersey retro",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "1994-96",
    "kitType": "away",
    "version": "retro",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/be92a36b07.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/be92a36b07.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/be92a36b07.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/93b9973acc.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/addb2de2f0.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/7247bd6aab.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/4757660379.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/1e778126c1.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/412e972738.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/c253d39be7.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/ee9151e1eb.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/ce7f39d13c.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-1994-96-manchester-united-away-cantona-hughes-keane-football-jersey-retro",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-1994-96-manchester-united-away-cantona-hughes-keane-football-jersey-retro",
    "patchSlots": 1,
    "patchOptions": [
      {
        "id": "dd8a22a19b0b8e0d",
        "label": "No Patch Premier League champion",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "38956f710b2ca036",
        "label": "Premier League",
        "slot_number": 1,
        "extra_price_eur": 1.79
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "KIDS 2026-27 Manchester United Special Edition KIDS Football jersey",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2026-27",
    "kitType": "special",
    "version": "kids",
    "sizes": [
      "S",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/26-27ManchesterUnitedSpecialEditionSoccerAldultKitAAAAJerseySupplyYupoo-0603480fee.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/26-27ManchesterUnitedSpecialEditionSoccerAldultKitAAAAJerseySupplyYupoo-0603480fee.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/26-27ManchesterUnitedSpecialEditionSoccerAldultKitAAAAJerseySupplyYupoo-0603480fee.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/26-27ManchesterUnitedSpecialEditionSoccerAldultKitAAAAJerseySupplyYupoo-0603487f3e.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/17/photo/4333133213.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/21/photo/b9c669105f7b61b0eca5d40b49da613e.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/03/photo/b241619407.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/27/photo/1.png?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/photo/6.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/photo/6.png?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/photo/FACUP13.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/photo/FACUP13-1.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/kids-2026-27-manchester-united-special-edition-kids-football-jersey-1",
    "sourceUrl": "https://www.vivi-jersey.com/products/kids-2026-27-manchester-united-special-edition-kids-football-jersey-1",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "b24bfda40f619538",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "150146f267ec66af",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "39e6219df25776f5",
        "label": "UCL+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "33a855ee384dc997",
        "label": "No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "73c7485b5b8ef42b",
        "label": "UCL DEBUT+FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "e2aad0f84f1a522d",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      },
      {
        "id": "6f1665a67cbb3d9e",
        "label": "SUMUP",
        "slot_number": 2,
        "extra_price_eur": 0.9
      },
      {
        "id": "187a317c48594998",
        "label": "Foundation",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "2024-25 Manchester United Special Edition Football jersey",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2024-25",
    "kitType": "special",
    "version": "fan",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/94a359a876.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/94a359a876.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/94a359a876.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/343f52afdd.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/39ff9e398e.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/11d3117dc4.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/a92cc96ec2.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/d9e914c301.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/cb99a26282.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/bbc53f8195.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/17/photo/4333133213.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/21/photo/b9c669105f7b61b0eca5d40b49da613e.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/2024-25-manchester-united-special-edition-football-jersey-4",
    "sourceUrl": "https://www.vivi-jersey.com/products/2024-25-manchester-united-special-edition-football-jersey-4",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "491354db47588ba6",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "bb12f6da246d2ca2",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "33da5be1716300f4",
        "label": "Europa+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "3b69606ba407527d",
        "label": "Carabao Cup",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "72c617d56b47c20c",
        "label": "Carabao Cup +No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "5cded41306439da3",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro 2009-10 Manchester United home Football jersey retro Long sleeve",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2009-10",
    "kitType": "home",
    "version": "retro",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2505/02/products/7bc37e3e8f.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2505/02/products/7bc37e3e8f.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2505/02/products/7bc37e3e8f.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2505/02/products/575e1ad137.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2505/02/products/cdaa93277f.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2505/02/products/240bf0f719.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2505/02/products/0301dd830e.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2505/02/products/cce637f9a0.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2505/02/products/60cda75821.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2505/02/products/fbcf521488.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2505/02/products/dc0722513e.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/17/photo/4333133213.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-2009-10-manchester-united-home-football-jersey-retro-long-sleeve",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-2009-10-manchester-united-home-football-jersey-retro-long-sleeve",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "68cfd535c18608a0",
        "label": "No Patch Premier League 08-09 champion",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "fafbc4fa56b05d26",
        "label": "UCL + RESPECT",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "8759201f89536751",
        "label": "FIFA 2009",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro 2002-03 Manchester United Home Kids Football jersey Kids",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2002-03",
    "kitType": "home",
    "version": "kids",
    "sizes": [
      "S",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/3dd7debc72.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/3dd7debc72.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/3dd7debc72.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/ce53f079c4.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-2002-03-manchester-united-home-kids-football-jersey-kids",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-2002-03-manchester-united-home-kids-football-jersey-kids",
    "patchSlots": 0,
    "personalizationAllowed": false,
    "personalization": {
      "allowed": false,
      "customName": false,
      "customNumber": false
    },
    "players": []
  },
  {
    "name": "Player 2025-26 Manchester United Special Edition Football jersey",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2025-26",
    "kitType": "special",
    "version": "player",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/f8ce2896bb.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/f8ce2896bb.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/f8ce2896bb.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/6f570a5739.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/4f0312d590.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/4fc97e66a0.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/9e7e60e0da.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/0d9544be42.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/17/photo/4333133213.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/21/photo/b9c669105f7b61b0eca5d40b49da613e.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/03/photo/b241619407.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2409/11/photo/41231324.png?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/player-2025-26-manchester-united-special-edition-football-jersey-13",
    "sourceUrl": "https://www.vivi-jersey.com/products/player-2025-26-manchester-united-special-edition-football-jersey-13",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "cb6950e9c2be53ba",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "7b9d72b20d6bf8c2",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "28d5d93911c9ac4d",
        "label": "Europa+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "3cf271ac9854a7a4",
        "label": "No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "8cce15cc6c68e107",
        "label": "UCL+ FOUNDATION 10",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "557be528eea556c9",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro 1996-97 Manchester United away CANTONA BECKHAM GIGGS KEANE Football jersey retro",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "1996-97",
    "kitType": "away",
    "version": "retro",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/73c2463526.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/73c2463526.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/73c2463526.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/0b04b43355.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/608afeadd0.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/437c9dd6f1.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/4a5e4f9222.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/a98d753ed8.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/5f03a22090.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/26c3f5d9c8.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/f3120a7fca.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/9834ec8ca5.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-1996-97-manchester-united-away-cantona-beckham-giggs-keane-football-jersey-retro",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-1996-97-manchester-united-away-cantona-beckham-giggs-keane-football-jersey-retro",
    "patchSlots": 1,
    "patchOptions": [
      {
        "id": "8465f8286ba71183",
        "label": "No Patch Premier League 1995-1996 champion",
        "slot_number": 1,
        "extra_price_eur": 1.79
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "2024-25 Manchester United short-sleeved training shirt",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2024-25",
    "kitType": "training",
    "version": "fan",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/23/products/cb16b50777.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/23/products/cb16b50777.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/23/products/cb16b50777.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/23/products/d3927e8f59.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/23/products/b7a3de9723.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/23/products/c4fbb76bc0.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/23/products/f75d6f4ce7.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/23/products/3d017707fa.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/23/products/c11e9bc899.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/23/products/bfcfe9c063.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/23/products/d7494dd675.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/23/products/bf9dd42d99.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/2024-25-manchester-united-short-sleeved-training-shirt-4",
    "sourceUrl": "https://www.vivi-jersey.com/products/2024-25-manchester-united-short-sleeved-training-shirt-4",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "750d59c9d33bca6c",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "f77ba3259a53eaab",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "23445a8f17c2cdd3",
        "label": "Europa+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "a5381d7e8b5fe5bf",
        "label": "Carabao Cup",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "11322e26dd602cba",
        "label": "Carabao Cup +No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "e9c6d44448e01eca",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro 2008-09 Manchester United away retro football jersey Fan version",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2008-09",
    "kitType": "away",
    "version": "retro",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/06/products/8a9e462e7e.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/06/products/8a9e462e7e.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/06/products/8a9e462e7e.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/06/products/215435f78b.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/06/products/2161e3fcce.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/06/products/59d7c177a0.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/06/products/ca04d8249c.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/06/products/6064f24f6f.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/06/products/43ebac54e6.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/06/products/68f8a1eb47.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/06/products/337772a642.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/06/products/1026733b53.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-2008-09-manchester-united-away-retro-football-jersey-fan-version",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-2008-09-manchester-united-away-retro-football-jersey-fan-version",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "ab117a8ce79b0868",
        "label": "No Patch Premier League 07-08 champion",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "2196a760799f92c0",
        "label": "UCL",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "a234838752e907b3",
        "label": "FIFA 2008",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "2024-25 Manchester United Home Kids Kit",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2024-25",
    "kitType": "home",
    "version": "kids",
    "sizes": [
      "S",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/6c6a475eaf.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/6c6a475eaf.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/6c6a475eaf.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/05f3ba23f4.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/17/photo/4333133213.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/21/photo/b9c669105f7b61b0eca5d40b49da613e.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/03/photo/b241619407.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2409/11/photo/41231324.png?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/21/photo/33223-eb6e.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/21/photo/121313213-0e85.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/21/photo/BPL2024-25-63df.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/2024-25-manchester-united-home-kids-kit-1",
    "sourceUrl": "https://www.vivi-jersey.com/products/2024-25-manchester-united-home-kids-kit-1",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "0d5af7969e2cc108",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "77278084251b4dbb",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "026a0d32f7ab6791",
        "label": "Europa+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "60657aa167ccd64f",
        "label": "Carabao Cup",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "c4fc47fe90874e83",
        "label": "Carabao Cup +No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "41e4917305600378",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro Kids 1997-99 Manchester United Away Kids Football jersey",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "1997-99",
    "kitType": "away",
    "version": "kids",
    "sizes": [
      "S",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/5-2030273c49.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/5-2030273c49.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/5-2030273c49.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/6-2030285fbd.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG0098JPG-2030282a49.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG0108JPG-2030282721.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG0100JPG-203028283f.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG0103JPG-2030285c77.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG0099JPG-203028490d.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG0101JPG-2030286364.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG0093JPG-2030282a4f.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2604/13/products/IMG0109JPG-203028614b.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-kids-1997-99-manchester-united-away-kids-football-jersey",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-kids-1997-99-manchester-united-away-kids-football-jersey",
    "patchSlots": 1,
    "patchOptions": [
      {
        "id": "e7cd0a3274ee3c32",
        "label": "No Patch Premier League 98-99 champion",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "31a4c0fc3aa21381",
        "label": "UCL",
        "slot_number": 1,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "2025-26 Manchester United goalkeeper Football jersey S-4XL",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2025-26",
    "kitType": "goalkeeper",
    "version": "fan",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2512/14/products/2025110310183331312-061830a670.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2512/14/products/2025110310183331312-061830a670.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2512/14/products/2025110310183331312-061830a670.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2512/14/products/2025110310184231332-06183097be.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2512/14/products/2025110310184031322-061830ca5a.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2512/14/products/2025110310182831292-061830454a.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2512/14/products/2025110310182731282-06183038ec.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2512/14/products/2025110310183031302-061830dcd3.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/17/photo/4333133213.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/21/photo/b9c669105f7b61b0eca5d40b49da613e.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/03/photo/b241619407.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2409/11/photo/41231324.png?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/2025-26-manchester-united-goalkeeper-football-jersey-s-4xl",
    "sourceUrl": "https://www.vivi-jersey.com/products/2025-26-manchester-united-goalkeeper-football-jersey-s-4xl",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "7a2acddd6da96af2",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "1dc08a3725b7352c",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "da0e134f7b3a3938",
        "label": "Europa+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "55d5ae21eea957f6",
        "label": "No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "c770df7f5ffc7966",
        "label": "UCL+ FOUNDATION 10",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "2662cea2a189c53d",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro Player 2021-22 Manchester United 2 away Football jersey Retro",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2021-22",
    "kitType": "away",
    "version": "player",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/85398d4139.webp",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/85398d4139.webp",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/85398d4139.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/a93c21e9d6.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/59a245d928.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/76fff27ce8.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/06f3c1dc74.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/140215df95.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/6615c8d2fc.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/e8d909b6ed.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/e9721f7cb5.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/a20e90cbd7.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-player-2021-22-manchester-united-2-away-football-jersey-retro",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-player-2021-22-manchester-united-2-away-football-jersey-retro",
    "patchSlots": 1,
    "patchOptions": [
      {
        "id": "2699625f1c6f0aea",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "af34fca3d7fac4a4",
        "label": "UCL+FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "KIDS 2026-27 Manchester United Third KIDS Football jersey",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2026-27",
    "kitType": "third",
    "version": "kids",
    "sizes": [
      "S",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2608/22/products/2627ManchesterUnitedThirdKidsSoccerJerseySize16-281.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2608/22/products/2627ManchesterUnitedThirdKidsSoccerJerseySize16-281.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2608/22/products/2627ManchesterUnitedThirdKidsSoccerJerseySize16-281.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2608/22/products/2627ManchesterUnitedThirdKidsSoccerJerseySize16-282.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/17/photo/4333133213.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/21/photo/b9c669105f7b61b0eca5d40b49da613e.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/03/photo/b241619407.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/27/photo/1.png?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/photo/6.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/photo/6.png?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/photo/FACUP13.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/photo/FACUP13-1.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/kids-2026-27-manchester-united-third-kids-football-jersey",
    "sourceUrl": "https://www.vivi-jersey.com/products/kids-2026-27-manchester-united-third-kids-football-jersey",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "ae362d8b48c30c4a",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "2883c61bc9ff3ba4",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "2623dd6e7d0d4825",
        "label": "UCL+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "e1041ac575ba2139",
        "label": "No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "46a09f128ae76cce",
        "label": "UCL DEBUT+FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "bd7e5c672605aa8d",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      },
      {
        "id": "41e5ff94010a2c14",
        "label": "SUMUP",
        "slot_number": 2,
        "extra_price_eur": 0.9
      },
      {
        "id": "87e508b778ef82bd",
        "label": "Foundation",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro 2007-08 Manchester United Home Kids Football jersey Kids",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2007-08",
    "kitType": "home",
    "version": "kids",
    "sizes": [
      "S",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/9e9c50e9f0.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/9e9c50e9f0.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/9e9c50e9f0.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/a40e28314e.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/ed8667befe.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/fa3c53d604.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/be82a28a92.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/b3d218f650.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/1b41d43115.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/d758da7db5.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/55fa3832d0.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/216eadf1d5.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-2007-08-manchester-united-home-kids-football-jersey-kids",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-2007-08-manchester-united-home-kids-football-jersey-kids",
    "patchSlots": 1,
    "patchOptions": [
      {
        "id": "84bcf6df48c3b640",
        "label": "No Patch Premier League 06-07 champion",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "d8602e1f1a3542db",
        "label": "UCL",
        "slot_number": 1,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "2024-25 Manchester United short-sleeved training jersey shirt Adults and KIDS",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2024-25",
    "kitType": "training",
    "version": "kids",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/22/products/e739a6030c.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/22/products/e739a6030c.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/22/products/e739a6030c.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/22/products/7c8559e824.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/22/products/fe80a03ef7.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/22/products/6403ec5244.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/22/products/feda0ef1d3.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/22/products/61b11a94e5.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/22/products/50f9d8425a.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/22/products/2e1ec4de54.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/22/products/34d8daef0a.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/22/products/2c7f9e6ef5.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/2024-25-manchester-united-short-sleeved-training-jersey-shirt-adults-and-kids-3",
    "sourceUrl": "https://www.vivi-jersey.com/products/2024-25-manchester-united-short-sleeved-training-jersey-shirt-adults-and-kids-3",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "615503ee3a549bfa",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "4efc428fdf70f2c0",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "2b1be5220c1e33bb",
        "label": "Europa+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "f67c0ef1236d789a",
        "label": "Carabao Cup",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "5a45f958ee25a268",
        "label": "Carabao Cup +No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "2c482cc0c42ee959",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro 1985 Manchester United white Football jersey retro",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "1985",
    "kitType": "retro",
    "version": "retro",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/14/products/d7b091217a.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/14/products/d7b091217a.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/14/products/d7b091217a.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/14/products/b9c860c3d4.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/14/products/6063f34a61.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/14/products/bd69b8258a.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/14/products/84e62fb302.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/14/products/8c8d002d6e.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/14/products/5851743820.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-1985-manchester-united-white-football-jersey-retro",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-1985-manchester-united-white-football-jersey-retro",
    "patchSlots": 0,
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "players": []
  },
  {
    "name": "Women 2026-27 Manchester United Home Women's Football jersey",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2026-27",
    "kitType": "home",
    "version": "women",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2607/09/products/2627ManchesterUnitedHomeWomenSoccerJersey1-17195986a9.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2607/09/products/2627ManchesterUnitedHomeWomenSoccerJersey1-17195986a9.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2607/09/products/2627ManchesterUnitedHomeWomenSoccerJersey1-17195986a9.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2607/09/products/2627ManchesterUnitedHomeWomenSoccerJersey2-1719597dfb.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/17/photo/4333133213.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/21/photo/b9c669105f7b61b0eca5d40b49da613e.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/03/photo/b241619407.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/27/photo/1.png?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/photo/6.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/photo/6.png?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/photo/FACUP13.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/photo/FACUP13-1.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/women-2026-27-manchester-united-home-womens-football-jersey",
    "sourceUrl": "https://www.vivi-jersey.com/products/women-2026-27-manchester-united-home-womens-football-jersey",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "062ee69eb8386a0f",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "b4b7ca74a4101d40",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "aa5b9c4e13bb6c00",
        "label": "UCL+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "e675879d22568e50",
        "label": "No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "863df95433987c4d",
        "label": "UCL DEBUT+FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "755402ad4b3e5fc7",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      },
      {
        "id": "38b87f29471f3f90",
        "label": "SUMUP",
        "slot_number": 2,
        "extra_price_eur": 0.9
      },
      {
        "id": "f4d3df85d5aa04dd",
        "label": "Foundation",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "2025-26 Manchester United Special Edition Football jersey",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2025-26",
    "kitType": "special",
    "version": "fan",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/ea0f2827ea.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/ea0f2827ea.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/ea0f2827ea.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/9c7a4b355b.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/6d78cc77c2.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/ede840483f.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/569803ed7d.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/f42022949c.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/b51d675ebc.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/4af0fd35e6.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/80340a9def.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2508/01/products/8901be19a2.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/2025-26-manchester-united-special-edition-football-jersey-6",
    "sourceUrl": "https://www.vivi-jersey.com/products/2025-26-manchester-united-special-edition-football-jersey-6",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "f79f63712dd0bfa1",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "bbb78b0b48866f00",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "7678c6009c83ffec",
        "label": "Europa+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "49484548864959c9",
        "label": "No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "e25aad853946ec7f",
        "label": "UCL+ FOUNDATION 10",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "7cb16bd39da6f6c9",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro 2016-17 Manchester United Home Football jersey retro",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2016-17",
    "kitType": "home",
    "version": "retro",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/acdf6019ea.webp",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/acdf6019ea.webp",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/acdf6019ea.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/d11ed5d6a0.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/90698ad099.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/aac8b233bc.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/bb761bfe73.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/33c5538105.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/690ae481f1.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/d55f240df7.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-2016-17-manchester-united-home-football-jersey-retro",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-2016-17-manchester-united-home-football-jersey-retro",
    "patchSlots": 0,
    "personalizationAllowed": false,
    "personalization": {
      "allowed": false,
      "customName": false,
      "customNumber": false
    },
    "players": []
  },
  {
    "name": "Retro 1994-96 Manchester United Home CANTONA HUGHES KEANE  Football jersey retro",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "1994-96",
    "kitType": "home",
    "version": "retro",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/ffe8283c59.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/ffe8283c59.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/ffe8283c59.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/a0a88db0c3.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/2944110a6c.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/21912ca43d.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/881e580c36.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/9202121613.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/675ebe594f.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/8be1dfaa01.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/b25d2a72c0.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/988aaa93a5.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-1994-96-manchester-united-home-cantona-hughes-keane-football-jersey-retro",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-1994-96-manchester-united-home-cantona-hughes-keane-football-jersey-retro",
    "patchSlots": 1,
    "patchOptions": [
      {
        "id": "b6fb3325c7895fa2",
        "label": "No Patch Premier League champion",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "dfe54a250034e43a",
        "label": "Premier League",
        "slot_number": 1,
        "extra_price_eur": 1.79
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Player 2025-26 Manchester United Special Edition Soccer Jersey",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2025-26",
    "kitType": "special",
    "version": "player",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2504/05/products/bc3418e911.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2504/05/products/bc3418e911.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2504/05/products/bc3418e911.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2504/05/products/8b442f90c4.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2504/05/products/7d4f0df771.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2504/05/products/1763f6564e.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2504/05/products/782ddfe57f.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2504/05/products/571a2e1ec3.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2504/05/products/1319f403d7.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/17/photo/4333133213.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/21/photo/b9c669105f7b61b0eca5d40b49da613e.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/03/photo/b241619407.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/player-2025-26-manchester-united-special-edition-soccer-jersey",
    "sourceUrl": "https://www.vivi-jersey.com/products/player-2025-26-manchester-united-special-edition-soccer-jersey",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "eb577ab4e8ec0ae7",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "56067e73e8a96f4c",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "3c4ded60a75af7ea",
        "label": "Europa+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "8cffada5eaea55f7",
        "label": "No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "50013e89a52e93ad",
        "label": "UCL+ FOUNDATION 10",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "a0d8a76be82faf07",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro 1982-83 Manchester United Home Soccer Shirt Jersey",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "1982-83",
    "kitType": "home",
    "version": "retro",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/fa9809856b.webp",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/fa9809856b.webp",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/fa9809856b.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/2a81b38f63.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/7f4a97e5f9.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/c2c18f06ee.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/20ed41d84e.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/db23249ce1.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/fb1236e00d.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/0e0b9980d4.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/969183f1e2.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/e4817b7630.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/vintage-1983-manchester-united-home-soccer-shirt-jersey",
    "sourceUrl": "https://www.vivi-jersey.com/products/vintage-1983-manchester-united-home-soccer-shirt-jersey",
    "patchSlots": 0,
    "personalizationAllowed": false,
    "personalization": {
      "allowed": false,
      "customName": false,
      "customNumber": false
    },
    "players": []
  },
  {
    "name": "2026-27 Manchester United Third Football Jersey S-4XL Long sleeves",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2026-27",
    "kitType": "third",
    "version": "fan",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2608/22/products/2627ManchesterUnitedThirdLongSleeveSoccerJersey1ziqi-07485124ab.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2608/22/products/2627ManchesterUnitedThirdLongSleeveSoccerJersey1ziqi-07485124ab.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2608/22/products/2627ManchesterUnitedThirdLongSleeveSoccerJersey1ziqi-07485124ab.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2608/22/products/2627ManchesterUnitedThirdLongSleeveSoccerJersey2-0748517003.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/17/photo/4333133213.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/21/photo/b9c669105f7b61b0eca5d40b49da613e.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/03/photo/b241619407.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/27/photo/1.png?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/photo/6.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/photo/6.png?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/photo/FACUP13.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2509/07/photo/FACUP13-1.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/2026-27-manchester-united-third-football-jersey-s-4xl-long-sleeves",
    "sourceUrl": "https://www.vivi-jersey.com/products/2026-27-manchester-united-third-football-jersey-s-4xl-long-sleeves",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "dd36e47fbb78f22b",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "ecdc11e4a6444839",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "389799ee4e1dc90c",
        "label": "UCL+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "b0faf01722da4e6d",
        "label": "No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "8e9e3cb988f232d3",
        "label": "UCL DEBUT+FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "df489dc7a734ea4f",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      },
      {
        "id": "90057676f5ef4ef9",
        "label": "SUMUP",
        "slot_number": 2,
        "extra_price_eur": 0.9
      },
      {
        "id": "e13ea6827ffd8729",
        "label": "Foundation",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro 2007-08 Manchester United Home UCL Kids Football jersey Kids UCL",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2007-08",
    "kitType": "home",
    "version": "kids",
    "sizes": [
      "S",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/cc331ca7c7.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/cc331ca7c7.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/cc331ca7c7.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/0dc458d59b.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/0f6e2e3e4d.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/1e93ec2179.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/cde59586eb.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/628a608660.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/163a2c7c37.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/fa1018a741.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/10fc60d04d.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/108f462713.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-2007-08-manchester-united-home-ucl-kids-football-jersey-kids-ucl",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-2007-08-manchester-united-home-ucl-kids-football-jersey-kids-ucl",
    "patchSlots": 1,
    "patchOptions": [
      {
        "id": "e711b54952e0cfea",
        "label": "No Patch Premier League 06-07 champion",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "cb566fd067d2db33",
        "label": "UCL",
        "slot_number": 1,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "2024-25 Manchester United Home Jersey Player Version",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2024-25",
    "kitType": "home",
    "version": "player",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/9a5f46d703.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/9a5f46d703.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/9a5f46d703.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/71cd9f68c6.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/7cb624f46e.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/17/photo/4333133213.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/21/photo/b9c669105f7b61b0eca5d40b49da613e.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2408/03/photo/b241619407.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2409/11/photo/41231324.png?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/21/photo/33223-eb6e.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/21/photo/121313213-0e85.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2501/21/photo/BPL2024-25-63df.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/2024-25-manchester-united-home-jersey-player-version-1",
    "sourceUrl": "https://www.vivi-jersey.com/products/2024-25-manchester-united-home-jersey-player-version-1",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "396ccce839380d70",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "583af532f280dd6c",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "b62d1d74cfe816e0",
        "label": "Europa+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "25435a5abed06355",
        "label": "Carabao Cup",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "20c521f733399f56",
        "label": "Carabao Cup +No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "cab5b4a1cbfc0946",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "player 2025-26 Manchester United Special Edition Football jersey",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2025-26",
    "kitType": "special",
    "version": "player",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/b48a6fa895.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/b48a6fa895.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/b48a6fa895.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/dfea7555bb.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/0c42c16296.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/b7fdf9c891.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/c60c960760.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/6ba9b22296.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/bbb3122ec8.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2506/25/products/556248c32b.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/17/photo/4333133213.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/21/photo/b9c669105f7b61b0eca5d40b49da613e.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_240,w_240"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/player-2025-26-manchester-united-special-edition-football-jersey-11",
    "sourceUrl": "https://www.vivi-jersey.com/products/player-2025-26-manchester-united-special-edition-football-jersey-11",
    "patchSlots": 2,
    "patchOptions": [
      {
        "id": "bae152631ae7710c",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "f30d15f2bcdd0a75",
        "label": "Premier League +No Room For Racism' Patch",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "c20bcde426a420e4",
        "label": "Europa+ FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "8b7dc1807a3bd586",
        "label": "No Room For Racism",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "b7839f85820d872b",
        "label": "UCL+ FOUNDATION 10",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "c21a4dfd52bc64e6",
        "label": "BPL 2024-25",
        "slot_number": 2,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro 2021-22 Manchester United Home Football jersey Retro",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2021-22",
    "kitType": "home",
    "version": "retro",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/73ed2fc6ff.webp",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/73ed2fc6ff.webp",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/73ed2fc6ff.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/9f77e76041.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/c207b73631.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/967ad22968.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/937a58ce2a.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/2fd5c5d434.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/eb0224c119.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/31e95905ef.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/856790fba4.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/3b5d2d9a66.webp?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-2021-22-manchester-united-home-football-jersey-retro",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-2021-22-manchester-united-home-football-jersey-retro",
    "patchSlots": 1,
    "patchOptions": [
      {
        "id": "e580aa2e09e52eaa",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 0.9
      },
      {
        "id": "695355782632647e",
        "label": "UCL+FOUNDATION",
        "slot_number": 1,
        "extra_price_eur": 1.79
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  },
  {
    "name": "Retro 2005-06 Manchester United Home Kids Football jersey Kids",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2005-06",
    "kitType": "home",
    "version": "kids",
    "sizes": [
      "S",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/5b6d3bae61.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/5b6d3bae61.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/5b6d3bae61.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/82cd5c7b81.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/bb99fc37bb.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/ab156bd985.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/c94ad3d620.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/d5b0b3ba6b.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/2dbbbda4bb.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/9b9095b711.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/8682e30def.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2502/11/products/2d9919d5a9.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-2005-06-manchester-united-home-kids-football-jersey-kids",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-2005-06-manchester-united-home-kids-football-jersey-kids",
    "patchSlots": 0,
    "personalizationAllowed": false,
    "personalization": {
      "allowed": false,
      "customName": false,
      "customNumber": false
    },
    "players": []
  },
  {
    "name": "Retro Manchester United 2002-04 home BECKHAM v.NISTELROOY GIGGS KEANE Football jersey retro",
    "group": "Manchester United",
    "team": "Manchester United",
    "category": "clubs",
    "season": "2002-04",
    "kitType": "home",
    "version": "retro",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/947dcf4437.jpg",
    "images": [
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/947dcf4437.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/947dcf4437.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/76ca4b5a3e.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/fd569ec796.jpg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/bdf139b791.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/1265c913cf.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/41aebf6677.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/b1606a1289.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/70c422144f.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/768725f74f.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000",
      "https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2407/26/products/3193ed4b78.jpeg?x-oss-process=image/quality,q_100/resize,m_lfit,h_1000,w_1000"
    ],
    "supplier": "Vivi Jersey",
    "supplierVerified": true,
    "supplierUrl": "https://www.vivi-jersey.com/products/retro-manchester-united-2002-04-home-beckham-vnistelrooy-giggs-keane-football-jersey-retro",
    "sourceUrl": "https://www.vivi-jersey.com/products/retro-manchester-united-2002-04-home-beckham-vnistelrooy-giggs-keane-football-jersey-retro",
    "patchSlots": 1,
    "patchOptions": [
      {
        "id": "40a58f0290043afb",
        "label": "No Patch Premier League",
        "slot_number": 1,
        "extra_price_eur": 1.79
      },
      {
        "id": "c576ebd3f51facde",
        "label": "UCL",
        "slot_number": 1,
        "extra_price_eur": 0.9
      }
    ],
    "personalizationAllowed": true,
    "personalization": {
      "allowed": true,
      "customName": true,
      "customNumber": true
    },
    "playerSelectionAllowed": true,
    "players": []
  }
];

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
