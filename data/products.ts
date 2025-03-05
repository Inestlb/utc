import { Product } from "@/lib/types";

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

export async function getProducts(options?: {
  category?: string;
  search?: string;
  featured?: boolean;
  page?: number;
}): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  let filteredProducts = [...products];

  // Apply filters
  if (options?.category) {
    filteredProducts = filteredProducts.filter(
      product => product.category.toLowerCase() === options.category?.toLowerCase()
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
