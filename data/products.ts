import { Product, LenzeVariateurSubCategory } from "@/lib/types";
import fs from 'fs';
import path from 'path';

// Ajout d'un tableau pour les images additionnelles des produits
export const extraImages: Record<string, string[]> = {
  "lenze-012": ["/images/products/i550protecb.webp"],
  "lenze-013": [],
  "lenze-014": [],
  "lenze-015": ["/images/products/8400pb.webp"],
  "lenze-016": ["/images/products/8400mb.webp", "/images/products/8400mc.webp"],
  "lenze-017": [],
};

// Ajout d'un mapping pour les images locales à utiliser comme fallback pour les produits antérieurs
export const productImageMapping: Record<string, string> = {
  // Variateurs de vitesse
  "8400 BaseLine": "/images/products/8400.webp",
  "8400 StateLine": "/images/products/8400.webp",
  "8400 HighLine": "/images/products/8400h.webp",
  "8400 TopLine": "/images/products/8400.webp",
  "8400 motec": "/images/products/8400ma.webp",
  "8400 protec": "/images/products/8400pa.webp",
  "SMVector": "/images/products/SMVector.webp",
  "i550": "/images/products/i550.webp",
  "i650": "/images/products/i650.webp",
  "i510": "/images/products/i510a.webp",
  
  // Servovariateurs
  "i750 cabinet": "/images/products/i550.webp", // Image par défaut pour servovariateurs
  "i700 cabinet": "/images/products/i550.webp", // Image par défaut pour servovariateurs
  "i950 cabinet": "/images/products/i550.webp", // Image par défaut pour servovariateurs
  "9400 HighLine": "/images/products/8400h.webp", // Utilise l'image highline
  "Variateur De Vitesse 8400 TopLine": "/images/products/8400.webp",
  
  // Produits antérieurs
  "ECS": "/images/products/lenze-default.jpg",
  "9300": "/images/products/lenze-default.jpg",
}

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
];

// Fonction pour obtenir les produits statiques (qui ne sont pas chargés dynamiquement depuis des fichiers JSON)
export async function getStaticProducts(): Promise<Product[]> {
  return products;
}

// Fonction pour charger les produits Lenze depuis le fichier JSON
export async function getLenzeVariateurs(): Promise<Product[]> {
  try {
    const filePath = path.join(process.cwd(), 'app', '(site)', 'products', 'json lenze', 'lenze_variateurs.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileContents);
    
    console.log("Chargement des produits Lenze, données JSON:", jsonData.length);
    
    // Vérifier les catégories dans le JSON
    const categoriesInJson = [...new Set(jsonData.map((item: any) => item.category))];
    console.log("Catégories présentes dans le JSON:", categoriesInJson);
    
    // Produits chargés depuis le JSON
    const products = jsonData.map((item: any, index: number) => {
      // Générer un ID unique basé sur le nom du produit
      const id = `lenze-variateur-${index + 1}`;
      
      // Utiliser directement la catégorie du JSON comme identifiant de sous-catégorie
      // IMPORTANT: Ce champ sera utilisé pour le filtrage
      const subcategory = item.category;
      
      // Vérifier que la sous-catégorie est valide
      if (!['Variateurs de vitesse', 'Servovariateurs', 'Produits antérieurs - Variateurs de vitesse'].includes(subcategory)) {
        console.warn(`Attention: Catégorie JSON inconnue: ${subcategory} pour le produit: ${item.name}`);
      }
      
      // Tableau pour stocker toutes les images
      let productImages: string[] = [];
      
      // Récupérer toutes les images du JSON
      if (item.images && item.images.length > 0) {
        // Filtrer les images pour exclure les SVG et les icônes non compatibles
        productImages = item.images
          .filter((img: any) => {
            // Exclure les icônes et les SVG
            return !img.url.includes('external-link.svg') && 
                   !img.url.includes('/Icons/') &&
                   img.url.includes('webp'); // Privilégier les images webp
          })
          .map((img: any) => img.url);
      }
      
      // Si aucune image valide n'a été trouvée pour certains produits, chercher spécifiquement dans les autres indices
      if (productImages.length === 0 && item.images && item.images.length > 0) {
        // Utiliser d'autres images disponibles, même si elles ne sont pas des webp
        productImages = item.images
          .filter((img: any) => {
            // Exclure uniquement les icônes et les SVG
            return !img.url.includes('external-link.svg') && 
                   !img.url.includes('/Icons/');
          })
          .map((img: any) => img.url);
      }
      
      // Utiliser l'image principale
      const image = productImages.length > 0 ? productImages[0] : "";
      
      // Préparer les spécifications en format plat
      const specifications: Record<string, any> = {};
      
      // Ajouter les points forts
      if (item.specs?.["Points forts"]) {
        specifications["Points forts"] = Array.isArray(item.specs["Points forts"]) 
          ? item.specs["Points forts"].join("\n") 
          : item.specs["Points forts"];
      }
      
      // Ajouter les caractéristiques techniques
      if (item.specs?.["Caractéristiques techniques"]?.["Caractéristiques et données techniques"]) {
        const techSpecs = item.specs["Caractéristiques techniques"]["Caractéristiques et données techniques"];
        for (const [key, value] of Object.entries(techSpecs)) {
          specifications[key] = value;
        }
      }
      
      // Ajouter la description
      if (item.specs?.Description) {
        specifications["Description"] = item.specs.Description;
      }
      
      // Construire l'objet Product
      return {
        id,
        name: item.name,
        category: "Variateurs et servovariateurs",
        subcategory, // Utiliser directement category du JSON comme subcategory
        jsonCategory: item.category, // Conserver la catégorie d'origine pour référence
        description: item.main_content || item.specs?.Description || "",
        specifications,
        image,
        featured: index < 3, // Les 3 premiers produits sont mis en avant
        // Utiliser toutes les images additionnelles filtrées
        additionalImages: productImages.slice(1),
        header_title: item.header_title, // Ajouter header_title depuis le JSON
        header_content: item.header_content // Ajouter header_content depuis le JSON
      };
    });
    
    // DÉBOGAGE: Compter les produits par catégorie
    const categoryCounts = {
      'Variateurs de vitesse': products.filter((p: Product) => p.subcategory === 'Variateurs de vitesse').length,
      'Servovariateurs': products.filter((p: Product) => p.subcategory === 'Servovariateurs').length,
      'Produits antérieurs - Variateurs de vitesse': products.filter((p: Product) => p.subcategory === 'Produits antérieurs - Variateurs de vitesse').length
    };
    console.log("Nombre de produits par sous-catégorie:", categoryCounts);
    
    return products;
  } catch (error) {
    console.error("Erreur lors du chargement des produits Lenze:", error);
    return [];
  }
}

// Fonction pour charger les motoréducteurs Lenze depuis le fichier JSON
export async function getLenzeMotoreducteurs(): Promise<Product[]> {
  try {
    const filePath = path.join(process.cwd(), 'app', '(site)', 'products', 'json lenze', 'lenze_motoreducteurs.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileContents);
    
    console.log("==== DÉBOGAGE getLenzeMotoreducteurs ====");
    console.log("Chargement des motoréducteurs Lenze, données JSON:", jsonData.length);
    
    // Vérifier les catégories dans le JSON
    const categoriesInJson = [...new Set(jsonData.map((item: any) => item.category))];
    console.log("Catégories exactes présentes dans le JSON motoréducteurs:", JSON.stringify(categoriesInJson));
    
    // ⚠️ DÉBOGAGE: Comptage par catégorie dans le JSON brut
    const categoryCounts: Record<string, number> = {};
    for (const item of jsonData) {
      const category = item.category;
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    }
    console.log("Distribution des catégories dans le JSON brut:", categoryCounts);
    
    // Produits chargés depuis le JSON
    const products = jsonData.map((item: any, index: number) => {
      // Générer un ID unique basé sur le nom du produit
      const id = `lenze-motoreducteur-${index + 1}`;
      
      // Map direct de la catégorie du JSON vers notre sous-catégorie
      const subcategory = item.category;
      
      console.log(`Traitement du produit ${item.name}, catégorie JSON exacte: "${item.category}"`);
      
      // Tableau pour stocker toutes les images
      let productImages: string[] = [];
      
      // Récupérer toutes les images du JSON
      if (item.images && item.images.length > 0) {
        // Filtrer les images pour exclure les SVG et les icônes non compatibles
        productImages = item.images
          .filter((img: any) => {
            // Exclure les icônes et les SVG
            return !img.url.includes('external-link.svg') && 
                   !img.url.includes('/Icons/') &&
                   img.url.includes('webp'); // Privilégier les images webp
          })
          .map((img: any) => img.url);
      }
      
      // Si aucune image valide n'a été trouvée, chercher d'autres formats
      if (productImages.length === 0 && item.images && item.images.length > 0) {
        // Utiliser d'autres images disponibles
        productImages = item.images
          .filter((img: any) => {
            return !img.url.includes('external-link.svg') && 
                   !img.url.includes('/Icons/');
          })
          .map((img: any) => img.url);
      }
      
      // Utiliser l'image principale
      const image = productImages.length > 0 ? productImages[0] : "";
      
      // Préparer les spécifications en format plat
      const specifications: Record<string, any> = {};
      
      // Ajouter les points forts
      if (item.specs?.["Points forts"]) {
        specifications["Points forts"] = Array.isArray(item.specs["Points forts"]) 
          ? item.specs["Points forts"].join("\n") 
          : item.specs["Points forts"];
      }
      
      // Ajouter les caractéristiques techniques
      if (item.specs?.["Caractéristiques techniques"]?.["Caractéristiques et données techniques"]) {
        const techSpecs = item.specs["Caractéristiques techniques"]["Caractéristiques et données techniques"];
        for (const [key, value] of Object.entries(techSpecs)) {
          specifications[key] = value;
        }
      }
      
      // Ajouter la description
      if (item.specs?.Description) {
        specifications["Description"] = item.specs.Description;
      }
      
      // ⚠️ DÉBOGAGE: Vérification de sous-catégorie exacte
      console.log(`Création produit ${id} - catégorie: 'Motoréducteurs', sous-catégorie: '${subcategory}'`);
      
      // Construire l'objet Product
      return {
        id,
        name: item.name,
        category: "Motoréducteurs", // Catégorie principale
        subcategory, // Sous-catégorie spécifique depuis le JSON
        jsonCategory: item.category, // Conserver la catégorie d'origine pour référence
        description: item.main_content || item.specs?.Description || "",
        specifications,
        image,
        featured: index < 3, // Les 3 premiers produits sont mis en avant
        // Utiliser toutes les images additionnelles filtrées
        additionalImages: productImages.slice(1),
        header_title: item.header_title, // Ajouter header_title depuis le JSON
        header_content: item.header_content // Ajouter header_content depuis le JSON
      };
    });
    
    // DÉBOGAGE: Compter les produits par sous-catégorie après transformation
    const subcategoryCounts: Record<string, number> = {};
    for (const product of products) {
      subcategoryCounts[product.subcategory] = (subcategoryCounts[product.subcategory] || 0) + 1;
    }
    console.log("Distribution des produits après transformation:", subcategoryCounts);
    
    // Vérifier les valeurs exactes des sous-catégories créées
    const createdSubcategories = [...new Set(products.map((p: Product) => p.subcategory))];
    console.log("Sous-catégories exactes créées:", JSON.stringify(createdSubcategories));
    
    // Vérification spécifique avec les types définis
    console.log("Sous-catégories attendues:", JSON.stringify([
      'Motoréducteurs triphasés',
      'Motoréducteurs triphasés avec variateurs de vitesse',
      'Servo-motoréducteurs'
    ]));
    
    console.log("==== FIN DÉBOGAGE getLenzeMotoreducteurs ====");
    
    return products;
  } catch (error) {
    console.error("Erreur lors du chargement des motoréducteurs Lenze:", error);
    return [];
  }
}

// Fonction pour charger les moteurs Lenze depuis le fichier JSON
export async function getLenzeMoteurs(): Promise<Product[]> {
  try {
    const filePath = path.join(process.cwd(), 'app', '(site)', 'products', 'json lenze', 'lenze_moteurs.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileContents);
    
    console.log("==== DÉBOGAGE getLenzeMoteurs ====");
    console.log("Chargement des moteurs Lenze, données JSON:", jsonData.length);
    
    // Vérifier les catégories dans le JSON
    const categoriesInJson = [...new Set(jsonData.map((item: any) => item.category))];
    console.log("Catégories exactes présentes dans le JSON moteurs:", JSON.stringify(categoriesInJson));
    
    // ⚠️ DÉBOGAGE: Comptage par catégorie dans le JSON brut
    const categoryCounts: Record<string, number> = {};
    for (const item of jsonData) {
      const category = item.category;
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    }
    console.log("Distribution des catégories dans le JSON brut:", categoryCounts);
    
    // Produits chargés depuis le JSON
    const products = jsonData.map((item: any, index: number) => {
      // Générer un ID unique basé sur le nom du produit
      const id = `lenze-moteur-${index + 1}`;
      
      // Normaliser les sous-catégories pour s'assurer qu'elles correspondent aux trois sous-catégories demandées
      // Utiliser exactement les mêmes sous-catégories que dans types.ts
      let subcategory: string;
      
      // Faire une correspondance précise avec les valeurs du type LenzeMoteurSubCategory
      if (item.category === 'Moteurs triphasés') {
        subcategory = 'Moteurs triphasés';
      } else if (item.category === 'Servomoteurs') {
        subcategory = 'Servomoteurs';
      } else if (item.category === 'Produits antérieurs – Moteurs') {
        subcategory = 'Produits antérieurs – Moteurs'; // Utiliser exactement le même tiret (demi-cadratin)
      } else {
        // Si la catégorie ne correspond pas exactement, faire une correspondance moins stricte
        console.log(`Catégorie non reconnue précisément: "${item.category}" pour le produit ${item.name}`);
        
        if (item.category.includes('triphasé') || item.category.toLowerCase().includes('triphase')) {
          subcategory = 'Moteurs triphasés';
        } else if (item.category.includes('servo') || item.category.toLowerCase().includes('servo')) {
          subcategory = 'Servomoteurs';
        } else if (item.category.includes('antérieur') || item.category.includes('ancien')) {
          subcategory = 'Produits antérieurs – Moteurs';
        } else {
          console.log(`Classification par défaut: "${item.category}" classé comme "Moteurs triphasés"`);
          subcategory = 'Moteurs triphasés';
        }
      }
      
      console.log(`Traitement du produit ${item.name}, catégorie JSON: "${item.category}" -> sous-catégorie: "${subcategory}"`);
      
      // Tableau pour stocker toutes les images
      let productImages: string[] = [];
      
      // Récupérer toutes les images du JSON
      if (item.images && item.images.length > 0) {
        // Filtrer les images pour exclure les SVG et les icônes non compatibles
        productImages = item.images
          .filter((img: any) => {
            // Exclure les icônes et les SVG
            return !img.url.includes('external-link.svg') && 
                   !img.url.includes('/Icons/') &&
                   img.url.includes('webp'); // Privilégier les images webp
          })
          .map((img: any) => img.url);
      }
      
      // Si aucune image valide n'a été trouvée, chercher d'autres formats
      if (productImages.length === 0 && item.images && item.images.length > 0) {
        // Utiliser d'autres images disponibles
        productImages = item.images
          .filter((img: any) => {
            return !img.url.includes('external-link.svg') && 
                  !img.url.includes('/Icons/');
          })
          .map((img: any) => img.url);
      }
      
      // Utiliser l'image principale
      const image = productImages.length > 0 ? productImages[0] : "";
      
      // Préparer les spécifications en format plat
      const specifications: Record<string, any> = {};
      
      // Ajouter les points forts
      if (item.specs?.["Points forts"]) {
        specifications["Points forts"] = Array.isArray(item.specs["Points forts"]) 
          ? item.specs["Points forts"].join("\n") 
          : item.specs["Points forts"];
      }
      
      // Ajouter les caractéristiques techniques
      if (item.specs?.["Caractéristiques techniques"]?.["Caractéristiques et données techniques"]) {
        const techSpecs = item.specs["Caractéristiques techniques"]["Caractéristiques et données techniques"];
        for (const [key, value] of Object.entries(techSpecs)) {
          specifications[key] = value;
        }
      }
      
      // Ajouter la description
      if (item.specs?.Description) {
        specifications["Description"] = item.specs.Description;
      }
      
      // ⚠️ DÉBOGAGE: Vérification de sous-catégorie exacte
      console.log(`Création produit ${id} - catégorie: 'Moteurs', sous-catégorie: '${subcategory}'`);
      
      // Construire l'objet Product
      return {
        id,
        name: item.name,
        category: "Moteurs", // Catégorie principale
        subcategory, // Sous-catégorie normalisée
        jsonCategory: item.category, // Conserver la catégorie d'origine pour référence
        description: item.main_content || item.specs?.Description || "",
        specifications,
        image,
        featured: index < 3, // Les 3 premiers produits sont mis en avant
        additionalImages: productImages.slice(1),
        header_title: item.header_title, // Ajouter header_title depuis le JSON
        header_content: item.header_content // Ajouter header_content depuis le JSON
      };
    });
    
    // DÉBOGAGE: Compter les produits par sous-catégorie après transformation
    const subcategoryCounts: Record<string, number> = {};
    for (const product of products) {
      subcategoryCounts[product.subcategory] = (subcategoryCounts[product.subcategory] || 0) + 1;
    }
    console.log("Distribution des produits après transformation:", subcategoryCounts);
    
    // Vérifier les valeurs exactes des sous-catégories créées
    const createdSubcategories = [...new Set(products.map((p: Product) => p.subcategory))];
    console.log("Sous-catégories exactes créées:", JSON.stringify(createdSubcategories));
    
    // Vérification spécifique avec les types définis
    console.log("Sous-catégories attendues:", JSON.stringify([
      'Moteurs triphasés',
      'Servomoteurs',
      'Produits antérieurs – Moteurs'
    ]));
    
    console.log("==== FIN DÉBOGAGE getLenzeMoteurs ====");
    
    return products;
  } catch (error) {
    console.error("Erreur lors du chargement des moteurs Lenze:", error);
    return [];
  }
}

// Fonction pour charger les réducteurs Lenze depuis le fichier JSON
export async function getLenzeReducteurs(): Promise<Product[]> {
  try {
    const filePath = path.join(process.cwd(), 'app', '(site)', 'products', 'json lenze', 'lenze_reducteurs.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileContents);
    
    console.log("==== DÉBOGAGE getLenzeReducteurs ====");
    console.log("Chargement des réducteurs Lenze, données JSON:", jsonData.length);
    
    // Vérifier les catégories dans le JSON
    const categoriesInJson = [...new Set(jsonData.map((item: any) => item.category))];
    console.log("Catégories exactes présentes dans le JSON réducteurs:", JSON.stringify(categoriesInJson));
    
    // ⚠️ DÉBOGAGE: Comptage par catégorie dans le JSON brut
    const categoryCounts: Record<string, number> = {};
    for (const item of jsonData) {
      const category = item.category;
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    }
    console.log("Distribution des catégories dans le JSON brut:", categoryCounts);
    
    // Produits chargés depuis le JSON
    const products = jsonData.map((item: any, index: number) => {
      // Générer un ID unique basé sur le nom du produit
      const id = `lenze-reducteur-${index + 1}`;
      
      // Normaliser les sous-catégories pour s'assurer qu'elles correspondent aux deux sous-catégories demandées
      // Utiliser exactement les mêmes sous-catégories que dans types.ts
      let subcategory: string;
      
      // Faire une correspondance précise avec les valeurs du type LenzeReducteurSubCategory
      if (item.category === 'Réducteurs') {
        subcategory = 'Réducteurs';
      } else if (item.category === 'Produits antérieurs – Réducteurs') {
        subcategory = 'Produits antérieurs – Réducteurs'; // Utiliser exactement le même tiret (demi-cadratin)
      } else {
        // Si la catégorie ne correspond pas exactement, faire une correspondance moins stricte
        console.log(`Catégorie non reconnue précisément: "${item.category}" pour le produit ${item.name}`);
        
        if (item.category.includes('antérieur') || item.category.includes('ancien')) {
          subcategory = 'Produits antérieurs – Réducteurs';
        } else {
          subcategory = 'Réducteurs';
        }
      }
      
      console.log(`Traitement du produit ${item.name}, catégorie JSON: "${item.category}" -> sous-catégorie: "${subcategory}"`);
      
      // Tableau pour stocker toutes les images
      let productImages: string[] = [];
      
      // Récupérer toutes les images du JSON
      if (item.images && item.images.length > 0) {
        // Filtrer les images pour exclure les SVG et les icônes non compatibles
        productImages = item.images
          .filter((img: any) => {
            // Exclure les icônes et les SVG
            return !img.url.includes('external-link.svg') && 
                   !img.url.includes('/Icons/') &&
                   img.url.includes('webp'); // Privilégier les images webp
          })
          .map((img: any) => img.url);
      }
      
      // Si aucune image valide n'a été trouvée, chercher d'autres formats
      if (productImages.length === 0 && item.images && item.images.length > 0) {
        // Utiliser d'autres images disponibles
        productImages = item.images
          .filter((img: any) => {
            return !img.url.includes('external-link.svg') && 
                  !img.url.includes('/Icons/');
          })
          .map((img: any) => img.url);
      }
      
      // Utiliser l'image principale
      const image = productImages.length > 0 ? productImages[0] : "";
      
      // Préparer les spécifications en format plat
      const specifications: Record<string, any> = {};
      
      // Ajouter les points forts
      if (item.specs?.["Points forts"]) {
        specifications["Points forts"] = Array.isArray(item.specs["Points forts"]) 
          ? item.specs["Points forts"].join("\n") 
          : item.specs["Points forts"];
      }
      
      // Ajouter les caractéristiques techniques
      if (item.specs?.["Caractéristiques techniques"]?.["Caractéristiques et données techniques"]) {
        const techSpecs = item.specs["Caractéristiques techniques"]["Caractéristiques et données techniques"];
        for (const [key, value] of Object.entries(techSpecs)) {
          specifications[key] = value;
        }
      }
      
      // Ajouter la description
      if (item.specs?.Description) {
        specifications["Description"] = item.specs.Description;
      }
      
      // ⚠️ DÉBOGAGE: Vérification de sous-catégorie exacte
      console.log(`Création produit ${id} - catégorie: 'Réducteurs', sous-catégorie: '${subcategory}'`);
      
      // Traduire le titre et le contenu d'en-tête si c'est un produit antérieur (en anglais)
      const headerTitle = subcategory === 'Produits antérieurs – Réducteurs' && item.header_title && !item.header_title.includes('é') 
        ? `Réducteurs ${item.header_title.split(' ')[0]}` 
        : item.header_title;
      
      // Construire l'objet Product
      return {
        id,
        name: item.name,
        category: "Réducteurs", // Catégorie principale
        subcategory, // Sous-catégorie normalisée
        jsonCategory: item.category, // Conserver la catégorie d'origine pour référence
        description: item.main_content || item.specs?.Description || "",
        specifications,
        image,
        featured: index < 3, // Les 3 premiers produits sont mis en avant
        additionalImages: productImages.slice(1),
        header_title: headerTitle, // Ajouter header_title depuis le JSON, traduit si nécessaire
        header_content: item.header_content // Ajouter header_content depuis le JSON
      };
    });
    
    // DÉBOGAGE: Compter les produits par sous-catégorie après transformation
    const subcategoryCounts: Record<string, number> = {};
    for (const product of products) {
      subcategoryCounts[product.subcategory] = (subcategoryCounts[product.subcategory] || 0) + 1;
    }
    console.log("Distribution des produits après transformation:", subcategoryCounts);
    
    // Vérifier les valeurs exactes des sous-catégories créées
    const createdSubcategories = [...new Set(products.map((p: Product) => p.subcategory))];
    console.log("Sous-catégories exactes créées:", JSON.stringify(createdSubcategories));
    
    // Vérification spécifique avec les types définis
    console.log("Sous-catégories attendues:", JSON.stringify([
      'Réducteurs',
      'Produits antérieurs – Réducteurs'
    ]));
    
    console.log("==== FIN DÉBOGAGE getLenzeReducteurs ====");
    
    return products;
  } catch (error) {
    console.error("Erreur lors du chargement des réducteurs Lenze:", error);
    return [];
  }
}

// Fonction pour fusionner les produits Lenze avec les autres produits
export async function getAllProducts(): Promise<Product[]> {
  try {
    const [staticProducts, lenzeVariateurs, lenzeMotoreducteurs, lenzeMoteurs, lenzeReducteurs] = await Promise.all([
      getStaticProducts(),
      getLenzeVariateurs(),
      getLenzeMotoreducteurs(),
      getLenzeMoteurs(),
      getLenzeReducteurs()
    ]);
    
    console.log("Nombre de produits statiques:", staticProducts.length);
    console.log("Nombre de variateurs Lenze:", lenzeVariateurs.length);
    console.log("Nombre de motoréducteurs Lenze:", lenzeMotoreducteurs.length);
    console.log("Nombre de moteurs Lenze:", lenzeMoteurs.length);
    console.log("Nombre de réducteurs Lenze:", lenzeReducteurs.length);
    console.log("Nombre total de produits:", 
      staticProducts.length + 
      lenzeVariateurs.length + 
      lenzeMotoreducteurs.length + 
      lenzeMoteurs.length + 
      lenzeReducteurs.length
    );
    
    return [
      ...staticProducts, 
      ...lenzeVariateurs, 
      ...lenzeMotoreducteurs, 
      ...lenzeMoteurs,
      ...lenzeReducteurs
    ];
  } catch (error) {
    console.error("Erreur lors du chargement des produits:", error);
    return getStaticProducts();
  }
}

export async function getProducts(options?: {
  category?: string;
  subcategory?: string;
  search?: string;
  featured?: boolean;
  page?: number;
  brand?: string;
}): Promise<Product[]> {
  const allProducts = await getAllProducts();
  
  console.log(`===== DÉBUT DIAGNOSTIC getProducts =====`);
  console.log(`Nombre total de produits: ${allProducts.length}`);
  console.log(`Options de recherche:`, options);
  
  // Vérifiez si nous sommes sur des pages spéciales Lenze
  const isLenzeVariateursPage = options?.brand === 'lenze' && 
                             options?.category === 'Variateurs et servovariateurs';
  const isLenzeMotoreducteursPage = options?.brand === 'lenze' && 
                             options?.category === 'Motoréducteurs';
  const isLenzeMoteursPage = options?.brand === 'lenze' && 
                             options?.category === 'Moteurs';
  const isLenzeReducteursPage = options?.brand === 'lenze' && 
                             options?.category === 'Réducteurs';
                             
  // Est-ce qu'on est sur une page avec des sous-catégories Lenze
  const isLenzeSpecialPage = isLenzeVariateursPage || isLenzeMotoreducteursPage || isLenzeMoteursPage || isLenzeReducteursPage;
  
  if (isLenzeSpecialPage) {
    console.log(`=== DIAGNOSTIC LENZE PAGE SPÉCIALE ===`);
    console.log(`Page: ${options?.category}`);
    
    // Étape 1: D'abord appliquer le filtre de marque (lenze)
    let filteredProducts = allProducts.filter(product => 
      ['Variateurs et servovariateurs', 'Motoréducteurs', 'Moteurs', 'Réducteurs'].includes(product.category) || 
      product.name.toLowerCase().includes('lenze')
    );
    console.log(`Après filtre par marque (${options?.brand}): ${filteredProducts.length} produits`);
    
    // Étape 2: Ensuite, filtrer par catégorie principale
  if (options?.category) {
      filteredProducts = filteredProducts.filter(product => product.category === options.category);
      console.log(`Après filtre par catégorie (${options.category}): ${filteredProducts.length} produits`);
    }
    
    // Trouver toutes les sous-catégories disponibles à ce stade
    const subcategories = [...new Set(filteredProducts.map(p => p.subcategory))];
    console.log(`Sous-catégories disponibles: ${subcategories.join(', ')}`);
    
    // Comptage des produits par sous-catégorie
    const subcategoryCounts = subcategories.reduce((acc, subcat) => {
      acc[subcat] = filteredProducts.filter(p => p.subcategory === subcat).length;
      return acc;
    }, {} as Record<string, number>);
    console.log(`Comptage par sous-catégorie:`, subcategoryCounts);
    
    // Étape 3: Appliquer le filtre de sous-catégorie si fourni
    if (options?.subcategory && (options?.category === 'Motoréducteurs' || options?.category === 'Moteurs' || options?.category === 'Réducteurs')) {
      console.log(`Filtre sous-catégorie demandé: ${options.subcategory}`);
      
      // Pour les motoréducteurs, moteurs et réducteurs, on continue à renvoyer TOUS les produits de la catégorie
      // mais on note la sous-catégorie demandée pour que l'interface puisse la mettre en surbrillance
      console.log(`Pour les ${options.category}, on renvoie tous les produits de la catégorie principale`);
      
      // Vérifier combien de produits correspondent à chaque sous-catégorie pour les motoréducteurs
      if (options?.category === 'Motoréducteurs') {
        const subCategoryCounts = {
          'Motoréducteurs triphasés': filteredProducts.filter(p => p.subcategory === 'Motoréducteurs triphasés').length,
          'Motoréducteurs triphasés avec variateurs de vitesse': filteredProducts.filter(p => p.subcategory === 'Motoréducteurs triphasés avec variateurs de vitesse').length,
          'Servo-motoréducteurs': filteredProducts.filter(p => p.subcategory === 'Servo-motoréducteurs').length
        };
        
        console.log("Répartition des produits par sous-catégorie:", subCategoryCounts);
      }
      
      // Vérifier combien de produits correspondent à chaque sous-catégorie pour les moteurs
      if (options?.category === 'Moteurs') {
        const subCategoryCounts = {
          'Moteurs triphasés': filteredProducts.filter(p => p.subcategory === 'Moteurs triphasés').length,
          'Servomoteurs': filteredProducts.filter(p => p.subcategory === 'Servomoteurs').length,
          'Produits antérieurs – Moteurs': filteredProducts.filter(p => p.subcategory === 'Produits antérieurs – Moteurs').length
        };
        
        console.log("Répartition des produits par sous-catégorie:", subCategoryCounts);
      }
      
      // Vérifier combien de produits correspondent à chaque sous-catégorie pour les réducteurs
      if (options?.category === 'Réducteurs') {
        const subCategoryCounts = {
          'Réducteurs': filteredProducts.filter(p => p.subcategory === 'Réducteurs').length,
          'Produits antérieurs – Réducteurs': filteredProducts.filter(p => p.subcategory === 'Produits antérieurs – Réducteurs').length
        };
        
        console.log("Répartition des produits par sous-catégorie des réducteurs:", subCategoryCounts);
      }
      
      // Pour les motoréducteurs et les moteurs, ne pas filtrer par sous-catégorie
      // filteredProducts reste inchangé
    } 
    else if (options?.subcategory) {
      console.log(`Filtre sous-catégorie demandé: ${options.subcategory}`);
      
      // Vérifier combien de produits correspondent à cette sous-catégorie
      const matchingProducts = filteredProducts.filter(p => p.subcategory === options.subcategory);
      console.log(`Nombre de produits correspondant à la sous-catégorie ${options.subcategory}: ${matchingProducts.length}`);
      
      // Afficher les noms de ces produits
      console.log(`Produits correspondants:`, matchingProducts.map(p => p.name));
      
      // Appliquer le filtre de sous-catégorie pour les autres catégories
      filteredProducts = matchingProducts;
    }
    
    // Étape 4: Appliquer les autres filtres (recherche, featured)
    if (options?.search) {
      const searchLower = options.search.toLowerCase();
    filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
    );
  }

  if (options?.featured !== undefined) {
    filteredProducts = filteredProducts.filter(
          (product) => product.featured === options.featured
        );
      }
      
    // Vérification finale du nombre de produits par sous-catégorie
    if (isLenzeVariateursPage) {
      const finalSubcategoryCounts = {
        'Variateurs de vitesse': filteredProducts.filter(p => p.subcategory === 'Variateurs de vitesse').length,
        'Servovariateurs': filteredProducts.filter(p => p.subcategory === 'Servovariateurs').length,
        'Produits antérieurs - Variateurs de vitesse': filteredProducts.filter(p => p.subcategory === 'Produits antérieurs - Variateurs de vitesse').length
      };
      console.log(`FINAL - Nombre de variateurs par sous-catégorie:`, finalSubcategoryCounts);
    } else if (isLenzeMotoreducteursPage) {
      const finalSubcategoryCounts = {
        'Motoréducteurs triphasés': filteredProducts.filter(p => p.subcategory === 'Motoréducteurs triphasés').length,
        'Motoréducteurs triphasés avec variateurs de vitesse': filteredProducts.filter(p => p.subcategory === 'Motoréducteurs triphasés avec variateurs de vitesse').length,
        'Servo-motoréducteurs': filteredProducts.filter(p => p.subcategory === 'Servo-motoréducteurs').length
      };
      console.log(`FINAL - Nombre de motoréducteurs par sous-catégorie:`, finalSubcategoryCounts);
      
      // Vérification supplémentaire pour les motoréducteurs
      console.log(`Vérification finale - Nombre total de motoréducteurs: ${filteredProducts.length}`);
      console.log(`Dont : ${finalSubcategoryCounts['Motoréducteurs triphasés']} triphasés, ${finalSubcategoryCounts['Motoréducteurs triphasés avec variateurs de vitesse']} avec variateurs, ${finalSubcategoryCounts['Servo-motoréducteurs']} servo`);
      
      if (options?.subcategory) {
        console.log(`Pour info: sous-catégorie sélectionnée "${options.subcategory}", mais tous les produits sont renvoyés`);
      }
    } else if (isLenzeMoteursPage) {
      const finalSubcategoryCounts = {
        'Moteurs triphasés': filteredProducts.filter(p => p.subcategory === 'Moteurs triphasés').length,
        'Servomoteurs': filteredProducts.filter(p => p.subcategory === 'Servomoteurs').length,
        'Produits antérieurs – Moteurs': filteredProducts.filter(p => p.subcategory === 'Produits antérieurs – Moteurs').length
      };
      console.log(`FINAL - Nombre de moteurs par sous-catégorie:`, finalSubcategoryCounts);
      
      // Vérification supplémentaire pour les moteurs
      console.log(`Vérification finale - Nombre total de moteurs: ${filteredProducts.length}`);
      console.log(`Dont : ${finalSubcategoryCounts['Moteurs triphasés']} triphasés, ${finalSubcategoryCounts['Servomoteurs']} servomoteurs, ${finalSubcategoryCounts['Produits antérieurs – Moteurs']} produits antérieurs`);
      
      if (options?.subcategory) {
        console.log(`Pour info: sous-catégorie sélectionnée "${options.subcategory}", mais tous les produits sont renvoyés`);
      }
    } else if (isLenzeReducteursPage) {
      const finalSubcategoryCounts = {
        'Réducteurs': filteredProducts.filter(p => p.subcategory === 'Réducteurs').length,
        'Produits antérieurs – Réducteurs': filteredProducts.filter(p => p.subcategory === 'Produits antérieurs – Réducteurs').length
      };
      console.log(`FINAL - Nombre de réducteurs par sous-catégorie:`, finalSubcategoryCounts);
      
      // Vérification supplémentaire pour les réducteurs
      console.log(`Vérification finale - Nombre total de réducteurs: ${filteredProducts.length}`);
      console.log(`Dont : ${finalSubcategoryCounts['Réducteurs']} réducteurs, ${finalSubcategoryCounts['Produits antérieurs – Réducteurs']} produits antérieurs`);
      
      if (options?.subcategory) {
        console.log(`Pour info: sous-catégorie sélectionnée "${options.subcategory}", mais tous les produits sont renvoyés`);
      }
    }
    
    // Débogage supplémentaire
    const allSubcategories = [...new Set(filteredProducts.map(p => p.subcategory))];
    console.log("Valeurs exactes des sous-catégories trouvées:", allSubcategories);
    
    // Exemple de produits par sous-catégorie
    for (const subcategory of allSubcategories) {
      const examples = filteredProducts.filter(p => p.subcategory === subcategory).slice(0, 2);
      console.log(`Exemples de produits dans "${subcategory}":`, examples.map(p => p.name));
    }
    
    // Vérifier la correspondance avec nos valeurs attendues
    for (const expectedSubcategory of ['Motoréducteurs triphasés', 'Motoréducteurs triphasés avec variateurs de vitesse', 'Servo-motoréducteurs', 'Moteurs triphasés', 'Servomoteurs', 'Produits antérieurs – Moteurs']) {
      const count = filteredProducts.filter(p => p.subcategory === expectedSubcategory).length;
      console.log(`Sous-catégorie "${expectedSubcategory}" - nombre de produits: ${count}`);
    }
    
    console.log(`Nombre de produits filtrés: ${filteredProducts.length}`);
    console.log(`===== FIN DIAGNOSTIC getProducts =====`);
    
    // Trier les produits par sous-catégorie d'abord pour les variateurs et servovariateurs
    if (isLenzeVariateursPage) {
      // Définir l'ordre des sous-catégories (l'ordre dans lequel elles devraient apparaître)
      const subcategoryOrder = [
        'Variateurs de vitesse',
        'Servovariateurs',
        'Produits antérieurs - Variateurs de vitesse'
      ];
      
      // Trier les produits d'abord par sous-catégorie
      filteredProducts.sort((a, b) => {
        // D'abord, trier par sous-catégorie
        const aSubcategoryIndex = subcategoryOrder.indexOf(a.subcategory);
        const bSubcategoryIndex = subcategoryOrder.indexOf(b.subcategory);
        
        if (aSubcategoryIndex !== bSubcategoryIndex) {
          return aSubcategoryIndex - bSubcategoryIndex;
        }
        
        // Si même sous-catégorie, trier par nom
        return a.name.localeCompare(b.name);
      });
    }
    // Trier les produits par sous-catégorie pour les motoréducteurs
    else if (isLenzeMotoreducteursPage) {
      // Définir l'ordre des sous-catégories (l'ordre dans lequel elles devraient apparaître)
      const subcategoryOrder = [
        'Motoréducteurs triphasés',
        'Motoréducteurs triphasés avec variateurs de vitesse',
        'Servo-motoréducteurs'
      ];
      
      // Trier les produits d'abord par sous-catégorie
      filteredProducts.sort((a, b) => {
        // D'abord, trier par sous-catégorie
        const aSubcategoryIndex = subcategoryOrder.indexOf(a.subcategory);
        const bSubcategoryIndex = subcategoryOrder.indexOf(b.subcategory);
        
        if (aSubcategoryIndex !== bSubcategoryIndex) {
          return aSubcategoryIndex - bSubcategoryIndex;
        }
        
        // Si même sous-catégorie, trier par nom
        return a.name.localeCompare(b.name);
      });
    }
    // Trier les produits par sous-catégorie pour les moteurs
    else if (isLenzeMoteursPage) {
      // Définir l'ordre des sous-catégories (l'ordre dans lequel elles devraient apparaître)
      const subcategoryOrder = [
        'Moteurs triphasés',
        'Servomoteurs',
        'Produits antérieurs – Moteurs'
      ];
      
      // Trier les produits d'abord par sous-catégorie
      filteredProducts.sort((a, b) => {
        // D'abord, trier par sous-catégorie
        const aSubcategoryIndex = subcategoryOrder.indexOf(a.subcategory);
        const bSubcategoryIndex = subcategoryOrder.indexOf(b.subcategory);
        
        if (aSubcategoryIndex !== bSubcategoryIndex) {
          return aSubcategoryIndex - bSubcategoryIndex;
        }
        
        // Si même sous-catégorie, trier par nom
        return a.name.localeCompare(b.name);
      });
    }
    // Trier les produits par sous-catégorie pour les réducteurs
    else if (isLenzeReducteursPage) {
      // Définir l'ordre des sous-catégories (l'ordre dans lequel elles devraient apparaître)
      const subcategoryOrder = [
        'Réducteurs',
        'Produits antérieurs – Réducteurs'
      ];
      
      // Trier les produits d'abord par sous-catégorie
      filteredProducts.sort((a, b) => {
        // D'abord, trier par sous-catégorie
        const aSubcategoryIndex = subcategoryOrder.indexOf(a.subcategory);
        const bSubcategoryIndex = subcategoryOrder.indexOf(b.subcategory);
        
        if (aSubcategoryIndex !== bSubcategoryIndex) {
          return aSubcategoryIndex - bSubcategoryIndex;
        }
        
        // Si même sous-catégorie, trier par nom
        return a.name.localeCompare(b.name);
      });
    }
    // Tri par défaut pour les autres cas
    else {
      // Tri par défaut - par nom
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Pagination
    if (options?.page !== undefined) {
      // Pour les pages spéciales Lenze, on montre tous les produits sur une seule page
      const ITEMS_PER_PAGE = isLenzeSpecialPage ? 50 : 8;
      
      // ⚠️ DÉBOGAGE: Vérifier si on est sur la page des motoréducteurs
      if (isLenzeMotoreducteursPage) {
        console.log("Page motoréducteurs - Produits disponibles avant pagination:", filteredProducts.length);
        console.log("Produits par sous-catégorie avant pagination:");
        console.log("- Motoréducteurs triphasés:", filteredProducts.filter(p => p.subcategory === 'Motoréducteurs triphasés').length);
        console.log("- Motoréducteurs triphasés avec variateurs de vitesse:", filteredProducts.filter(p => p.subcategory === 'Motoréducteurs triphasés avec variateurs de vitesse').length);
        console.log("- Servo-motoréducteurs:", filteredProducts.filter(p => p.subcategory === 'Servo-motoréducteurs').length);
      }
      
      const start = (options.page - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      const paginatedProducts = filteredProducts.slice(start, end);
      console.log(`Après pagination (page ${options.page}, ${ITEMS_PER_PAGE} produits par page): ${paginatedProducts.length} produits renvoyés`);
      return paginatedProducts;
    }

    return filteredProducts;
  }
  else {
    // Pour toutes les autres pages, appliquer le processus standard de filtrage
    let filteredProducts = allProducts;

    if (options?.category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === options.category
      );
      console.log(`Après filtre par catégorie (${options.category}): ${filteredProducts.length} produits`);
    }

    // Appliquer le filtre de sous-catégorie si fourni
    if (options?.subcategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.subcategory === options.subcategory
      );
      console.log(`Après filtre par sous-catégorie (${options.subcategory}): ${filteredProducts.length} produits`);
  }

  if (options?.search) {
      const searchLower = options.search.toLowerCase();
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
      );
    }

    if (options?.featured !== undefined) {
    filteredProducts = filteredProducts.filter(
        (product) => product.featured === options.featured
      );
    }

    // Gérer spécifiquement le filtre de marque pour les autres marques
    if (options?.brand) {
      filteredProducts = filteredProducts.filter((product) => {
        const productNameLower = product.name.toLowerCase();
        return productNameLower.includes(options.brand!.toLowerCase());
      });
      console.log(`Après filtre par marque (${options.brand}): ${filteredProducts.length} produits`);
    }

    // Default sorting - by name
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));

  // Pagination
    if (options?.page !== undefined) {
      const ITEMS_PER_PAGE = 8;
      const start = (options.page - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      const paginatedProducts = filteredProducts.slice(start, end);
      console.log(`Après pagination (page ${options.page}, ${ITEMS_PER_PAGE} produits par page): ${paginatedProducts.length} produits renvoyés`);
      return paginatedProducts;
  }

  return filteredProducts;
  }
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const allProducts = await getAllProducts();
  return allProducts.find((product) => product.id === id);
}

export async function getProductCategories(): Promise<string[]> {
  const allProducts = await getAllProducts();
  const categories = new Set(allProducts.map((product) => product.category));
  return Array.from(categories);
}

export async function getProductSubcategories(
  category: string
): Promise<string[]> {
  const allProducts = await getAllProducts();
  const subcategories = new Set(
    allProducts
      .filter((product) => product.category === category)
      .map((product) => product.subcategory)
  );
  return Array.from(subcategories);
}
