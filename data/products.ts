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
        description: item.main_content || item.specs?.Description || "",
        specifications,
        image,
        featured: index < 3, // Les 3 premiers produits sont mis en avant
        // Utiliser toutes les images additionnelles filtrées
        additionalImages: productImages.slice(1)
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

// Fonction pour fusionner les produits Lenze avec les autres produits
export async function getAllProducts(): Promise<Product[]> {
  const lenzeVariateurs = await getLenzeVariateurs();
  console.log("Nombre de produits Lenze chargés:", lenzeVariateurs.length);

  // Si aucun produit Lenze n'a été chargé, on tente de créer des produits par défaut
  if (lenzeVariateurs.length === 0) {
    // Créer au moins un produit Lenze par défaut si le chargement a échoué
    const defaultLenzeProduct: Product = {
      id: "lenze-default-1",
      name: "Variateur de vitesse Lenze i650",
      category: "Variateurs et servovariateurs",
      subcategory: "Variateurs de vitesse",
      description: "Variateur de vitesse pour applications industrielles avancées.",
      specifications: {
        "Puissance": "0.37 à 45 kW",
        "Communication": "EtherCAT, EtherNet/IP, IO-Link, Modbus TCP, PROFINET"
      },
      image: "https://www.lenze.com/fileadmin/_processed_/6/7/csm_C16_LAN_i650_motec_7cbab8e151.webp",
      featured: true,
      additionalImages: []
    };
    console.log("Création d'un produit Lenze par défaut");
    return [...products, defaultLenzeProduct];
  }
  
  return [...products, ...lenzeVariateurs];
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
  
  // Vérifiez si nous sommes sur la page Lenze Variateurs
  const isLenzeVariateursPage = options?.brand === 'lenze' && 
                             options?.category === 'Variateurs et servovariateurs';
  
  if (isLenzeVariateursPage) {
    console.log(`=== DIAGNOSTIC LENZE VARIATEURS ===`);
    
    // Trouver tous les produits Lenze Variateurs
    const lenzeProducts = allProducts.filter(p => 
      p.category === 'Variateurs et servovariateurs'
    );
    
    console.log(`Nombre total de produits Lenze Variateurs: ${lenzeProducts.length}`);
    
    // Analyser les sous-catégories disponibles
    const subcategories = [...new Set(lenzeProducts.map(p => p.subcategory))];
    console.log(`Sous-catégories disponibles: ${subcategories.join(', ')}`);
    
    // Comptage des produits par sous-catégorie
    const subcategoryCounts = subcategories.reduce((acc, subcat) => {
      acc[subcat] = lenzeProducts.filter(p => p.subcategory === subcat).length;
      return acc;
    }, {} as Record<string, number>);
    console.log(`Comptage par sous-catégorie:`, subcategoryCounts);
    
    // Analyser si le filtre de sous-catégorie est appliqué
    if (options?.subcategory) {
      console.log(`Filtre sous-catégorie demandé: ${options.subcategory}`);
      
      // Vérifier combien de produits correspondent à cette sous-catégorie
      const matchingProducts = lenzeProducts.filter(p => p.subcategory === options.subcategory);
      console.log(`Nombre de produits correspondant à la sous-catégorie ${options.subcategory}: ${matchingProducts.length}`);
      
      // Afficher les noms de ces produits
      console.log(`Produits correspondants:`, matchingProducts.map(p => p.name));
    }
  }
  
  let filteredProducts = allProducts;

  if (options?.category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === options.category
    );
    console.log(`Après filtre par catégorie (${options.category}): ${filteredProducts.length} produits`);
  }

  // IMPORTANT: Sur la page Lenze Variateurs, ne pas appliquer le filtre de sous-catégorie
  // pour que tous les produits soient disponibles au composant client
  if (options?.subcategory && !isLenzeVariateursPage) {
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

  // Gérer spécifiquement le filtre de marque pour Lenze
  if (options?.brand) {
    if (options.brand.toLowerCase() === 'lenze') {
      // Pour Lenze, on filtre les produits qui sont dans la catégorie Variateurs et servovariateurs
      // ou dont le nom contient "Lenze"
      filteredProducts = filteredProducts.filter(
        (product) => 
          product.category === "Variateurs et servovariateurs" || 
          product.name.toLowerCase().includes('lenze')
      );
      console.log(`Après filtre par marque (${options.brand}): ${filteredProducts.length} produits`);
    } else {
      // Pour les autres marques, comportement habituel
      filteredProducts = filteredProducts.filter((product) => {
        const productNameLower = product.name.toLowerCase();
        return productNameLower.includes(options.brand!.toLowerCase());
      });
    }
  }

  // Vérification finale du nombre de produits par sous-catégorie
  if (isLenzeVariateursPage) {
    const finalSubcategoryCounts = {
      'Variateurs de vitesse': filteredProducts.filter(p => p.subcategory === 'Variateurs de vitesse').length,
      'Servovariateurs': filteredProducts.filter(p => p.subcategory === 'Servovariateurs').length,
      'Produits antérieurs - Variateurs de vitesse': filteredProducts.filter(p => p.subcategory === 'Produits antérieurs - Variateurs de vitesse').length
    };
    console.log(`FINAL - Nombre par sous-catégorie:`, finalSubcategoryCounts);
  }
  
  console.log(`Nombre de produits filtrés: ${filteredProducts.length}`);
  console.log(`===== FIN DIAGNOSTIC getProducts =====`);

  // Ordre personnalisé pour les variateurs Lenze
  if (isLenzeVariateursPage && options?.subcategory === 'Variateurs de vitesse') {
    console.log("Application de l'ordre personnalisé pour les variateurs de vitesse Lenze");
    
    // Tableau d'ordre pour les variateurs (du plus prioritaire au moins prioritaire)
    const variateurOrder = [
      "i650 motec",
      "i550 motec",
      "i510 cabinet",
      "i550 protec",
      "8400 stateline",
      "8400 highline",
      "8400 protec",
      "8400 motec",
      "smvector ip65"
    ];
    
    // Trier les produits selon l'ordre personnalisé
    filteredProducts.sort((a, b) => {
      const aNameLower = a.name.toLowerCase();
      const bNameLower = b.name.toLowerCase();
      
      // Trouver l'index du premier variateur qui correspond au nom du produit a
      const aIndex = variateurOrder.findIndex(variateur => 
        aNameLower.includes(variateur.toLowerCase())
      );
      
      // Trouver l'index du premier variateur qui correspond au nom du produit b
      const bIndex = variateurOrder.findIndex(variateur => 
        bNameLower.includes(variateur.toLowerCase())
      );
      
      // Si les deux produits sont dans la liste d'ordre, on les trie selon cet ordre
      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex;
      }
      
      // Si a est dans la liste mais pas b, a est prioritaire
      if (aIndex !== -1) return -1;
      
      // Si b est dans la liste mais pas a, b est prioritaire
      if (bIndex !== -1) return 1;
      
      // Si aucun n'est dans la liste, on garde le tri alphabétique
      return aNameLower.localeCompare(bNameLower);
    });
    
    console.log("Ordre des produits après tri personnalisé:", filteredProducts.map(p => p.name));
  } 
  // Tri par défaut pour les autres cas
  else {
    // Default sorting - by name
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Pagination
  if (options?.page !== undefined) {
    // Pour les produits Lenze, on montre tous les produits sur une seule page
    const ITEMS_PER_PAGE = isLenzeVariateursPage ? 50 : 8;
    const start = (options.page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const paginatedProducts = filteredProducts.slice(start, end);
    console.log(`Après pagination (page ${options.page}, ${ITEMS_PER_PAGE} produits par page): ${paginatedProducts.length} produits renvoyés`);
    return paginatedProducts;
  }

  return filteredProducts;
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
