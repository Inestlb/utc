import { Product, LenzeVariateurSubCategory } from "@/lib/types";

// Ajout d'un tableau pour les images additionnelles des produits
export const extraImages: Record<string, string[]> = {
  "lenze-012": ["/images/products/i550protecb.webp"],
  "lenze-013": [],
  "lenze-014": [],
  "lenze-015": ["/images/products/8400pb.webp"],
  "lenze-016": ["/images/products/8400mb.webp", "/images/products/8400mc.webp"],
  "lenze-017": [],
};

export const products: Product[] = [
  {
    id: "prod-001",
    name: "Industrial Pump XL-5000",
    category: "Pumps",
    subcategory: "High Pressure",
    description: "High-performance industrial pump designed for heavy-duty applications. Features corrosion-resistant materials and energy-efficient operation.",
    specifications: {
      "Power": "7.5 kW",
      "Max Flow Rate": "500 L/min",
      "Max Head": "50m",
      "Weight": "85 kg",
      "Material": "Stainless Steel 316",
      "Connection Size": "2 inch",
    },
    image: "/images/pump-xl5000.jpg",
    featured: true,
  },
  {
    id: "prod-002",
    name: "Conveyor Belt System CB-2000",
    category: "Conveyor Systems",
    subcategory: "Belt Conveyors",
    description: "Modular conveyor belt system for manufacturing and logistics. Customizable length and width with variable speed control.",
    specifications: {
      "Belt Width": "600mm",
      "Belt Material": "PVC",
      "Speed Range": "0.1-2.0 m/s",
      "Max Load": "200 kg/m",
      "Motor Power": "3 kW",
      "Control": "VFD with PLC interface",
    },
    image: "/images/conveyor-cb2000.jpg",
    featured: true,
  },
  {
    id: "prod-003",
    name: "Industrial Valve IV-3500",
    category: "Valves",
    subcategory: "Ball Valves",
    description: "High-pressure ball valve for industrial fluid control. Suitable for oil, gas, and chemical applications.",
    specifications: {
      "Size Range": "1/2 to 12 inch",
      "Pressure Rating": "PN16 to PN100",
      "Temperature Range": "-20°C to 200°C",
      "Body Material": "Carbon Steel / Stainless Steel",
      "Seat Material": "PTFE / RPTFE",
      "Connection": "Flanged / Threaded / Welded",
    },
    image: "/images/valve-iv3500.jpg",
    featured: false,
  },
  {
    id: "prod-004",
    name: "Hydraulic Press HP-8000",
    category: "Presses",
    subcategory: "Hydraulic",
    description: "Powerful hydraulic press for metal forming and assembly operations. Features precise pressure control and safety systems.",
    specifications: {
      "Force": "800 tons",
      "Stroke": "500mm",
      "Table Size": "1200 x 1200mm",
      "Power": "45 kW",
      "Oil Tank": "600 L",
      "Control System": "PLC with touchscreen",
    },
    image: "/images/press-hp8000.jpg",
    featured: true,
  },
  {
    id: "prod-005",
    name: "Industrial Mixer IM-1200",
    category: "Mixers",
    subcategory: "Agitators",
    description: "Versatile industrial mixer for liquid and semi-solid materials. Multiple impeller options for different mixing requirements.",
    specifications: {
      "Volume": "100 to 10,000 L",
      "Power": "1.5 to 75 kW",
      "Speed Range": "20-200 RPM",
      "Impeller Types": "Turbine / Propeller / Anchor",
      "Material": "Stainless Steel 304/316",
      "Mounting": "Top / Side / Bottom",
    },
    image: "/images/mixer-im1200.jpg",
    featured: false,
  },
  {
    id: "prod-006",
    name: "Compressor AC-7500",
    category: "Compressors",
    subcategory: "Rotary Screw",
    description: "Energy-efficient rotary screw compressor for industrial compressed air applications. Low noise and vibration design.",
    specifications: {
      "Free Air Delivery": "12.5 m³/min",
      "Working Pressure": "7.5 bar",
      "Motor Power": "75 kW",
      "Noise Level": "72 dB(A)",
      "Dimensions": "2200 x 1500 x 1800mm",
      "Weight": "1650 kg",
    },
    image: "/images/compressor-ac7500.jpg",
    featured: false,
  },
  {
    id: "prod-007",
    name: "Heat Exchanger HE-4000",
    category: "Heat Exchangers",
    subcategory: "Plate Type",
    description: "High-efficiency plate heat exchanger for industrial heating and cooling applications. Compact design with high heat transfer rates.",
    specifications: {
      "Heat Transfer Area": "40 to 400 m²",
      "Max Pressure": "25 bar",
      "Temperature Range": "-20°C to 180°C",
      "Plate Material": "Stainless Steel / Titanium",
      "Gasket Material": "NBR / EPDM / Viton",
      "Connection Size": "DN50 to DN200",
    },
    image: "/images/heat-exchanger-he4000.jpg",
    featured: true,
  },
  {
    id: "prod-008",
    name: "Industrial Filter IF-2500",
    category: "Filtration",
    subcategory: "Bag Filters",
    description: "Industrial bag filter system for liquid filtration. Multiple bag configuration for high flow rates and easy maintenance.",
    specifications: {
      "Flow Rate": "Up to 250 m³/h",
      "Filter Rating": "1 to 800 microns",
      "Housing Material": "Carbon Steel / Stainless Steel",
      "Bag Material": "Polypropylene / Polyester / Nylon",
      "Pressure Rating": "10 bar",
      "Connection Size": "DN50 to DN150",
    },
    image: "/images/filter-if2500.jpg",
    featured: false,
  },
  // Produits Lenze - Variateurs de vitesse
  {
    id: "lenze-001",
    name: "Variateur i550 protec",
    category: "Variateurs et servovariateurs",
    subcategory: "Variateurs de vitesse",
    description: "Variateur de fréquence compact pour les applications industrielles, avec un design robuste et une installation flexible.",
    specifications: {
      "Puissance": "0.25 à 132 kW",
      "Tension d'alimentation": "1/3 x 230V | 3 x 400/480V",
      "Fréquence": "50/60 Hz ±10%",
      "Interface": "RS485, CANopen, PROFIBUS",
      "Indice de protection": "IP66/NEMA 4X",
      "Certification": "CE, UL, cUL, EAC"
    },
    image: "/images/products/lenze-i550.jpg",
    featured: true,
  },
  {
    id: "lenze-009",
    name: "Variateur de vitesse i550 motec",
    category: "Variateurs et servovariateurs",
    subcategory: "Variateurs de vitesse",
    description: "Le variateur de vitesse i550 motec pour montage mural et sur le moteur, indice de protection IP66 (UL Type 4X Intérieur), est la solution d'entraînement décentralisée optimale. Pour une utilisation universelle, le variateur peut être complété par une boîte d'extension avec interrupteur de maintenance, avec ou sans protection contre les surcharges ou courts-circuits et éléments de commande.\n\nCe variateur se distingue par un montage rapide, une mise en service facile grâce à des outils conviviaux et des connecteurs enfichables classiques du marché. Les paramètres, le comportement de l'entraînement et la convivialité d'utilisation sont conformes à nos variateurs de vitesse reconnus. Complétée par une efficacité énergétique élevée, nous proposons ainsi une solution d'entraînement moderne et durable.\n\nLes exigences de la directive Écoconception, norme EN IEC 61800-9-2, sont respectées.",
    specifications: {
      "Puissance": "0.37 à 45 kW",
      "Tension d'alimentation": "3 AC 230V | 3 AC 400V | 3 AC 480V",
      "E/S Standard": "4 x entrée numérique ou 3 x entrée numérique/1 x sortie numérique",
      "E/S Application": "4 x port IO-Link ou 8 x entrée numérique ou 4 x entrée numérique/4 x sortie numérique",
      "Communication": "EtherCAT, EtherNet/IP, IO-Link, Modbus TCP, PROFINET",
      "Indice de protection": "IP66 (UL Type 4X Intérieur)",
      "Champs d'application": "Entraînements de convoyeur, mouvements de translation, systèmes d'enroulement ou de déroulement, systèmes de levage, extrudeuses, machines d'emballage, pompes, ventilateurs",
      "Points forts": "Solution compacte décentralisée, boîte d'extension possible, montage rapide (Plug & Play), 4 ports IO-Link, module de renvoi intégré pour efficacité énergétique"
    },
    image: "/images/products/i550.webp",
    featured: true,
  },
  {
    id: "lenze-002",
    name: "Variateur i550 cabinet",
    category: "Variateurs et servovariateurs",
    subcategory: "Variateurs de vitesse",
    description: "Variateur de fréquence pour montage en armoire, offrant une haute performance dans un design compact.",
    specifications: {
      "Puissance": "0.37 à 45 kW",
      "Tension d'alimentation": "1/3 x 230V | 3 x 400/480V",
      "Fréquence": "50/60 Hz ±10%",
      "Interface": "RS485, CANopen, PROFIBUS, EtherCAT",
      "Indice de protection": "IP20",
      "Certification": "CE, UL, cUL, EAC"
    },
    image: "/images/products/lenze-i550-cabinet.jpg",
    featured: false,
  },
  {
    id: "lenze-003",
    name: "Variateur i950",
    category: "Variateurs et servovariateurs",
    subcategory: "Variateurs de vitesse",
    description: "Variateur puissant pour les applications complexes, offrant des fonctionnalités avancées d'automatisation et une haute performance.",
    specifications: {
      "Puissance": "0.55 à 110 kW",
      "Tension d'alimentation": "3 x 400/480V",
      "Fréquence": "50/60 Hz ±10%",
      "Interface": "EtherCAT, PROFINET, EtherNet/IP",
      "Indice de protection": "IP20",
      "Certification": "CE, UL, cUL, EAC"
    },
    image: "/images/products/lenze-i950.jpg",
    featured: true,
  },
  
  // Produits Lenze - Servovariateurs
  {
    id: "lenze-004",
    name: "Servovariateur i700",
    category: "Variateurs et servovariateurs",
    subcategory: "Servovariateurs",
    description: "Servovariateur hautes performances pour des applications de contrôle de mouvement précises et dynamiques.",
    specifications: {
      "Puissance": "0.75 à 15 kW",
      "Tension d'alimentation": "3 x 400/480V",
      "Fréquence": "50/60 Hz ±10%",
      "Interface": "EtherCAT",
      "Indice de protection": "IP20",
      "Certification": "CE, UL, cUL, EAC"
    },
    image: "/images/products/lenze-i700.jpg",
    featured: true,
  },
  {
    id: "lenze-005",
    name: "Servovariateur i950",
    category: "Variateurs et servovariateurs",
    subcategory: "Servovariateurs",
    description: "Servovariateur multiaxes pour des applications exigeantes, offrant une haute précision et une excellente dynamique.",
    specifications: {
      "Puissance": "0.55 à 110 kW",
      "Tension d'alimentation": "3 x 400/480V",
      "Fréquence": "50/60 Hz ±10%",
      "Interface": "EtherCAT, PROFINET, EtherNet/IP",
      "Indice de protection": "IP20",
      "Certification": "CE, UL, cUL, EAC"
    },
    image: "/images/products/lenze-i950-servo.jpg",
    featured: false,
  },
  
  // Produits Lenze - Produits antèrieurs - Variateurs de vitesse
  {
    id: "lenze-006",
    name: "Variateur 8200 vector",
    category: "Variateurs et servovariateurs",
    subcategory: "Produits antèrieurs - Variateurs de vitesse",
    description: "Variateur de fréquence classique pour applications industrielles, avec une large gamme de puissances et d'options.",
    specifications: {
      "Puissance": "0.25 à 90 kW",
      "Tension d'alimentation": "1/3 x 230V | 3 x 400/480V",
      "Fréquence": "50/60 Hz ±10%",
      "Interface": "RS485, CANopen, PROFIBUS",
      "Indice de protection": "IP20",
      "Certification": "CE, UL, cUL"
    },
    image: "/images/products/lenze-8200.jpg",
    featured: false,
  },
  {
    id: "lenze-007",
    name: "Variateur 9300",
    category: "Variateurs et servovariateurs",
    subcategory: "Produits antèrieurs - Variateurs de vitesse",
    description: "Variateur modulaire de haute performance pour applications complexes, avec des fonctionnalités avancées de contrôle.",
    specifications: {
      "Puissance": "0.37 à 315 kW",
      "Tension d'alimentation": "3 x 400/480V",
      "Fréquence": "50/60 Hz ±10%",
      "Interface": "RS485, CANopen, PROFIBUS, DeviceNet",
      "Indice de protection": "IP20",
      "Certification": "CE, UL, cUL"
    },
    image: "/images/products/lenze-9300.jpg",
    featured: false,
  },
  {
    id: "lenze-008",
    name: "Variateur de vitesse i650 motec",
    category: "Variateurs et servovariateurs",
    subcategory: "Variateurs de vitesse",
    description: "Le variateur de vitesse i650 motec pour montage mural et sur le moteur, indice de protection IP66 (UL Type 4X Intérieur), est la solution d'entraînement décentralisée optimale. Pour une utilisation universelle, le variateur peut être complété par une boîte d'extension avec interrupteur de maintenance, avec ou sans protection contre les surcharges ou courts-circuits et éléments de commande.\n\nLe variateur de vitesse i650 motec se distingue du i550 motec par une gamme de fonctions étendue : Pour les tâches d'automatisation simples, un Logic PLC basé sur CODESYS et conforme à la norme CEI 61131-3 est intégré dans l'i650 motec. Un positionnement par tableau est disponible pour la réalisation d'axes et de modules de machines autonomes. L'option « Extended Safety / sécurité étendue » (système de sécurité aux fonctions diverses) complète l'ensemble.\n\nLes exigences de la directive Écoconception, norme EN IEC 61800-9-2, sont respectées.",
    specifications: {
      "Puissance": "0.37 à 45 kW",
      "Tension d'alimentation": "3 AC 230V | 3 AC 400V | 3 AC 480V",
      "E/S Application": "4 x port IO-Link ou 8 x entrée numérique ou 4 x entrée numérique/4 x sortie numérique",
      "Communication": "EtherCAT, EtherNet/IP, IO-Link, Modbus TCP, PROFINET",
      "Indice de protection": "IP66 (UL Type 4X Intérieur)",
      "Fonctionnalités": "Logic PLC (CODESYS), positionnement par tableau, Extended Safety",
      "Champs d'application": "Entraînements de convoyeur, mouvements de translation, systèmes d'enroulement ou de déroulement, systèmes de levage, extrudeuses, machines d'emballage, pompes, ventilateurs",
      "Points forts": "Solution compacte décentralisée, boîte d'extension possible, montage rapide (Plug & Play), 4 ports IO-Link, module de renvoi intégré pour efficacité énergétique"
    },
    image: "/images/products/i650.webp",
    featured: true,
  },
  {
    id: "lenze-010",
    name: "Variateur de vitesse i510 cabinet",
    category: "Variateurs et servovariateurs",
    subcategory: "Variateurs de vitesse",
    description: "Le variateur de vitesse i510 cabinet est un appareil compact d'armoire électrique avec des fonctionnalités évolutives. Il est polyvalent, fiable et facile à commander.\n\nLes exigences de la directive Écoconception, norme EN IEC 61800-9-2, sont respectées.\n\nChamps d'application : entraînements de convoyeur, mouvements de translation, pompes, ventilateurs, mélangeurs, ...",
    specifications: {
      "Puissance": "0.25 à 15 kW",
      "Raccordements": "1 AC 230V | 3 AC 230V | 3 AC 400V | 3 AC 480V",
      "E/S": "5x entrée numérique, 1x sortie numérique, 2x entrée analogique, 1x sortie analogique, 1x relais NO/NC",
      "Communication": "CANopen, Modbus RTU",
      "Points forts": "Design compact de 60 mm de largeur (jusqu'à 4 kW) et de 130 mm de profondeur (jusqu'à 11 kW) permet de gagner de la place dans l'armoire électrique, possibilités d'interaction innovantes (par exemple via WiFi) pour une mise en service rapide et un diagnostic convivial, particulièrement facile à utiliser"
    },
    image: "/images/products/i510a.webp",
    featured: true,
  },
  {
    id: "lenze-011",
    name: "Variateur de vitesse i550 cabinet",
    category: "Variateurs et servovariateurs",
    subcategory: "Variateurs de vitesse",
    description: "Le variateur de vitesse i550 cabinet est un appareil d'armoire électrique compact avec des fonctionnalités évolutives. Il est polyvalent, fiable et facile à commander.\n\nLes exigences de la directive Écoconception, norme EN IEC 61800-9-2, sont respectées.\n\nChamps d'application : entraînements de convoyeur, mouvements de translation, systèmes d'enroulement ou de déroulement, systèmes de levage, extrudeuses, machines d'emballage, pompes, ventilateurs, ...",
    specifications: {
      "Puissance": "0.25 à 132 kW",
      "Raccordements": "1 AC 120V | 1 AC 230V | 3 AC 230V | 3 AC 400V | 3 AC 480V",
      "E/S": "5x entrée numérique, 1x sortie numérique, 2x entrée analogique, 1x sortie analogique, 1x relais NO/NC, Bus courant continu, Surveillance de la température moteur",
      "Communication": "CANopen, EtherCAT, EtherNet/IP, IO-Link, Modbus RTU, Modbus TCP, POWERLINK, PROFIBUS, PROFINET",
      "Points forts": "Design compact de 60 mm de largeur (jusqu'à 4 kW) et de 130 mm de profondeur (jusqu'à 11 kW) permet de gagner de la place dans l'armoire électrique, possibilités d'interaction innovantes (via WiFi) pour une mise en service rapide et un diagnostic convivial, fonction de sécurité « Absence sûre de couple (STO) » disponible en option avec le niveau SIL 3 et le Niveau de Performance e, disponible en tant qu'appareil complet ou en composants individuels"
    },
    image: "/images/products/i550cabineta.webp",
    featured: true,
  },
  {
    id: "lenze-012",
    name: "Variateur de vitesse i550 protec",
    category: "Variateurs et servovariateurs",
    subcategory: "Variateurs de vitesse",
    description: "Le variateur de vitesse i550 protec primé est conçu sur la technologie reconnue de la version en armoire électrique, et il diffère uniquement par un indice de protection plus élevé et une conception adaptée. S'il n'y a pas assez de place dans l'armoire électrique ou si le variateur doit être monté à proximité du moteur dans différents modules machine, cet appareil polyvalent et fiable est alors la bonne solution. Grâce à la boîte d'extension , il est possible d'utiliser un interrupteur de maintenance et des éléments de commande.\n\nLes exigences de la directive Écoconception, norme EN IEC 61800-9-2, sont respectées.\n\nChamps d'application : entraînements de convoyeur, mouvements de translation, systèmes d'enroulement ou de déroulement, systèmes de levage, extrudeuses, machines d'emballage, pompes, ventilateurs, ...",
    specifications: {
      "Puissance": "0.37 à 75 kW",
      "Raccordements": "1 AC 120V | 1 AC 230V | 3 AC 230V | 3 AC 400V | 3 AC 480V | 3 AC 600V",
      "E/S": "5x entrée numérique, 1x sortie numérique, 2x entrée analogique, 1x sortie analogique, 1x relais NO/NC, Bus courant continu, Surveillance de la température moteur, Micro USB",
      "Communication": "CANopen, EtherCAT, EtherNet/IP, IO-Link, Modbus RTU, Modbus TCP, PROFINET",
      "Points forts": "Entraînement décentralisé avec interface IO-Link V1.1, interface de diagnostic intégrée (micro USB) pour des interventions de maintenance, versions avec ou sans interrupteur de réparation, avec clavier ou module WLAN pour une mise en service facile, fonction de sécurité « Absence sûre de couple (STO) » disponible en option avec le niveau SIL 3 et le Niveau de Performance e"
    },
    image: "/images/products/i550proteca.webp",
    featured: true,
  },
  {
    id: "lenze-013",
    name: "Variateur de vitesse 8400 StateLine",
    category: "Variateurs et servovariateurs",
    subcategory: "Produits antèrieurs - Variateurs de vitesse",
    description: "Le variateur de vitesse 8400 StateLine convient pour la commande en vitesse dans le cas de mouvements simples.\n\nLes exigences de la directive Écoconception, norme EN IEC 61800-9-2, sont respectées.\n\nChamps d'application : convoyeurs à renvoi d'angle, palettiseurs (intralogistique), extrudeuses (industrie des plastiques), systèmes de remplissage (industrie de l'emballage), ...",
    specifications: {
      "Puissance": "0.25 à 45 kW",
      "Raccordements": "1 AC 230V | 3 AC 400V | 3 AC 480V",
      "E/S": "5x entrée numérique, 1x sortie numérique, 1x entrée analogique, 1x sortie analogique, 1x relais NO/NC, Bus courant continu (types 400 V), Surveillance de la température moteur",
      "Communication": "CANopen, EtherCAT, EtherNet/IP, POWERLINK, PROFIBUS, PROFINET",
      "Points forts": "Pour les systèmes d'entraînement avec ou sans bouclage vitesse, gestion intégrée de la commande de frein, fonction d'économie d'énergie avec le mode « VFC eco »"
    },
    image: "/images/products/8400.webp",
    featured: false,
  },
  {
    id: "lenze-014",
    name: "Variateur de vitesse 8400 HighLine",
    category: "Variateurs et servovariateurs",
    subcategory: "Produits antèrieurs - Variateurs de vitesse",
    description: "Le variateur de vitesse 8400 HighLine convient pour la commande en vitesse dans le cas de mouvements simples et de tâches de positionnement.\n\nLes exigences de la directive Écoconception, norme EN IEC 61800-9-2, sont respectées.\n\nChamps d'application : tables tournantes, systèmes de stockage (intralogistique), ensacheuses (industrie de l'emballage), ...",
    specifications: {
      "Puissance": "0.25 à 45 kW",
      "Raccordements": "1 AC 230V | 3 AC 400V | 3 AC 480V",
      "E/S": "8x entrée numérique, 4x sortie numérique, 2x entrée analogique, 2x sortie analogique, 1x relais NO/NC, Bus courant continu (types 400 V), Surveillance de la température moteur",
      "Communication": "CANopen, EtherCAT, EtherNet/IP, POWERLINK, PROFIBUS, PROFINET",
      "Points forts": "Commande de positionnement intégrée, jusqu'à 15 positionnements cible sélectionnables avec le profil de mouvement correspondant, fonction de sécurité « Absence sûre de couple (STO) » disponible en option avec le niveau SIL 3 (EN CEI 62061/EN CEI 61508) et le Niveau de Performance e (EN ISO 13849-1)"
    },
    image: "/images/products/8400h.webp",
    featured: false,
  },
  {
    id: "lenze-015",
    name: "Variateur de vitesse 8400 protec",
    category: "Variateurs et servovariateurs",
    subcategory: "Produits antèrieurs - Variateurs de vitesse",
    description: "Le variateur de vitesse 8400 protec est adapté à un montage mural décentralisé et il dispose d'une connectique enfichable simple. La disposition décentralisée permet de réduire considérablement la longueur des câbles moteur. Vous pouvez ainsi, par exemple, concevoir de manière claire même des architectures de machines complexes.\n\nLes exigences de la directive Écoconception, norme EN IEC 61800-9-2, sont respectées.\n\nChamps d'application : tables tournantes et tables élévatrices à ciseaux (intralogistique), convoyeurs aériens (industrie automobile), ...",
    specifications: {
      "Puissance": "0.75 à 7.5 kW",
      "Raccordements": "3 AC 400V | 3 AC 480V",
      "E/S": "6x ou 4x entrée numérique, 0x ou 2x sortie numérique, 1x entrée analogique, Surveillance de la température moteur",
      "Communication": "CANopen, EtherNet/IP, PROFIBUS, PROFINET",
      "Points forts": "Mise en service facile avec une connectique enfichable (Plug and Drive), affichage par voyant LED et LED d'état, indice de protection élevé IP65"
    },
    image: "/images/products/8400pa.webp",
    featured: false,
  },
  {
    id: "lenze-016",
    name: "Variateur de vitesse 8400 motec",
    category: "Variateurs et servovariateurs",
    subcategory: "Produits antèrieurs - Variateurs de vitesse",
    description: "Le variateur de vitesse 8400 motec peut être monté de manière décentralisée sur le moteur ou sur le mur. Il est possible d'utiliser en plus un interrupteur de réparation sur le mur. La disposition décentralisée permet de réduire considérablement la longueur des câbles moteur. Vous pouvez ainsi, par exemple, concevoir de manière claire même des architectures de machines complexes.\n\nLes exigences de la directive Écoconception, norme EN IEC 61800-9-2, sont respectées.\n\nChamps d'application : entraînements de convoyeur et mouvements de translation (intralogistique), pompes, ventilateurs, ...",
    specifications: {
      "Puissance": "0.37 à 7.5 kW",
      "Raccordements": "3 AC 400V | 3 AC 480V",
      "E/S": "1x entrée numérique, 2x/5x/8x sortie numérique, 1x entrée analogique, 0x/1x/2x sortie analogique, 1x relais NO/NC, Surveillance de la température moteur",
      "Communication": "AS-Interface, CANopen, EtherCAT, EtherNet/IP, PROFIBUS, PROFINET",
      "Points forts": "Mise en service facile avec une connectique enfichable (Plug and Drive), construction compacte, indice de protection IP65 élevé avec unité interrupteur IP54, interrupteur et potentiomètre intégrés pour une adaptation rapide de la configuration et de la vitesse et de la rampe, versions avec ou sans interrupteur de réparation pour montage mural"
    },
    image: "/images/products/8400ma.webp",
    featured: false,
  },
  {
    id: "lenze-017",
    name: "Variateur de vitesse SMVector IP65",
    category: "Variateurs et servovariateurs",
    subcategory: "Produits antèrieurs - Variateurs de vitesse",
    description: "Avec son indice de protection élevé, le variateur de vitesse SMVector IP65 est idéalement adapté à un montage mural décentralisé.\n\nLes exigences de la directive Écoconception, norme EN IEC 61800-9-2, sont respectées.\n\nChamps d'application : sites de production dans l'industrie alimentaire, entraînements dans les zones extérieures, ...",
    specifications: {
      "Puissance": "0.37 à 22 kW",
      "Raccordements": "1 AC 120V | 1 AC 230V | 3 AC 230V | 3 AC 400V | 3 AC 480V | 3 AC 600V",
      "E/S": "5x entrée numérique, 1x sortie numérique, 1x entrée analogique, 1x sortie analogique, 1x relais NO/NC",
      "Communication": "CANopen, DeviceNet, EtherNet/IP, LECOM, Modbus RTU, PROFIBUS",
      "Points forts": "Différentes versions de boîtier, affichage par voyant, indice de protection élevé IP65"
    },
    image: "/images/products/smvector.webp",
    featured: false,
  },
];

export async function getProducts(options?: {
  category?: string;
  subcategory?: string;
  search?: string;
  featured?: boolean;
  page?: number;
  brand?: string;
}): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Pour Lenze, on affiche uniquement les variateurs spécifiés
  if (options?.brand === 'lenze' && options?.category === 'Variateurs et servovariateurs') {
    const lenzeVariateursSpecifiques = products.filter(
      product => product.id === 'lenze-009' || product.id === 'lenze-008' || product.id === 'lenze-010' || product.id === 'lenze-011' || product.id === 'lenze-012' || product.id === 'lenze-013' || product.id === 'lenze-014' || product.id === 'lenze-015' || product.id === 'lenze-016' || product.id === 'lenze-017'
    );
    return lenzeVariateursSpecifiques;
  }
  
  let filteredProducts = [...products];

  // Apply brand filter
  if (options?.brand === 'lenze') {
    // Pour Lenze, filtre basé sur les catégories spécifiques à Lenze
    const lenzeCategories = [
      'Variateurs et servovariateurs',
      'Moteurs',
      'Motoréducteurs',
      'Réducteurs',
      'Solutions et passerelles llot',
      'Accessoires',
      'Software'
    ];
    filteredProducts = filteredProducts.filter(
      product => lenzeCategories.includes(product.category)
    );
  } else if (options?.brand === 'ifm') {
    // Implémentation similaire pour ifm
    const ifmCategories = [
      'Capteurs',
      'Traitement d\'images',
      'Technologies de sécurité',
      'IO-Link',
      'Interface de câblage capteurs/actionneurs',
      'Technologies de connexion',
      'Alimentation en tension',
      'Accessoires'
    ];
    filteredProducts = filteredProducts.filter(
      product => ifmCategories.includes(product.category)
    );
  } else if (options?.brand === 'wago') {
    // Implémentation similaire pour wago
    const wagoCategories = [
      'Technologies de raccordement électriques',
      'Interfaces électroniques',
      'Techniques d\'automatisation'
    ];
    filteredProducts = filteredProducts.filter(
      product => wagoCategories.includes(product.category)
    );
  }

  // Apply category filter
  if (options?.category) {
    filteredProducts = filteredProducts.filter(
      product => product.category.toLowerCase() === options.category?.toLowerCase()
    );
  }
  
  // Apply subcategory filter
  if (options?.subcategory) {
    filteredProducts = filteredProducts.filter(
      product => product.subcategory.toLowerCase() === options.subcategory?.toLowerCase()
    );
  }

  if (options?.featured !== undefined) {
    filteredProducts = filteredProducts.filter(
      product => product.featured === options.featured
    );
  }

  if (options?.search) {
    const searchTerm = options.search.toLowerCase();
    filteredProducts = filteredProducts.filter(
      product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.subcategory.toLowerCase().includes(searchTerm)
    );
  }

  // Pagination
  if (options?.page) {
    const pageSize = 4;
    const startIndex = (options.page - 1) * pageSize;
    filteredProducts = filteredProducts.slice(startIndex, startIndex + pageSize);
  }

  return filteredProducts;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  return products.find(product => product.id === id);
}

export async function getProductCategories(): Promise<string[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));

  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
}
