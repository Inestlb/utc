import { Suspense } from 'react';
import { getProducts, getProductCategories } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';
import SearchBar from '@/components/products/SearchBar';
import { Loader2 } from 'lucide-react';

interface ProductsPageProps {
  searchParams: {
    category?: string;
    subcategory?: string;
    brand?: string;
    q?: string;
    page?: string;
  };
}

export const metadata = {
  title: 'Produits | Entreprise d\'Exportation Industrielle',
  description: 'Parcourez notre catalogue de produits industriels de haute qualité pour l\'exportation mondiale',
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  // Parse search parameters
  const category = searchParams.category;
  const subcategory = searchParams.subcategory;
  const brand = searchParams.brand;
  const search = searchParams.q;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  console.log("Page produits - Paramètres de recherche:", { category, subcategory, brand, search, page });

  // Récupérer TOUS les produits sans filtre de sous-catégorie si nous sommes sur la page des variateurs Lenze
  let productsOptions: {
    category?: string;
    subcategory?: string;
    brand?: string;
    search?: string;
    page: number;
  } = {
    category,
    brand,
    search,
    page,
  };
  
  // Ne pas filtrer par sous-catégorie sur le serveur, nous le ferons côté client
  if (!(brand === 'lenze' && category === 'Variateurs et servovariateurs')) {
    productsOptions.subcategory = subcategory;
  }

  console.log("Options de requête produits:", productsOptions);

  // Fetch products and categories
  const productsPromise = getProducts(productsOptions);

  const categoriesPromise = getProductCategories();

  // Wait for both promises to resolve
  const [products, categories] = await Promise.all([
    productsPromise,
    categoriesPromise,
  ]);

  console.log(`Produits récupérés: ${products.length}`);
  
  // Si nous sommes sur la page des variateurs Lenze, affichons la répartition des sous-catégories
  if (brand === 'lenze' && category === 'Variateurs et servovariateurs') {
    const subcatCounts = {
      'Variateurs de vitesse': products.filter(p => p.subcategory === 'Variateurs de vitesse').length,
      'Servovariateurs': products.filter(p => p.subcategory === 'Servovariateurs').length,
      'Produits antérieurs - Variateurs de vitesse': products.filter(p => p.subcategory === 'Produits antérieurs - Variateurs de vitesse').length
    };
    console.log("Nombre de produits par sous-catégorie (page.tsx):", subcatCounts);
  }

  // Calculate total pages (in a real app, this would come from the API)
  const totalPages = Math.ceil(products.length / 4);

  // Dynamically update page title based on brand/category
  let pageTitle = 'Nos Produits';
  if (brand === 'lenze') {
    pageTitle = 'Nos Produits Lenze';
    if (category === 'Variateurs et servovariateurs') {
      pageTitle = 'Variateurs et servovariateurs Lenze';
      if (subcategory) {
        pageTitle = `${subcategory} Lenze`;
      }
    }
  } else if (brand === 'ifm') {
    pageTitle = 'Nos Produits IFM';
  } else if (brand === 'wago') {
    pageTitle = 'Nos Produits WAGO';
  }

  return (
    <div className="py-16">
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[1600px]">
          <div className="mb-10 px-6 md:px-12">
            <h1 className="text-4xl font-bold mb-5">{pageTitle}</h1>
            <p className="text-gray-600 max-w-3xl text-lg">
              Parcourez notre catalogue complet de produits industriels conçus pour la <span className="font-medium">fiabilité</span>,
              l&apos;<span className="font-medium">efficacité</span> et la <span className="font-medium">performance</span>. Utilisez les filtres pour trouver exactement ce dont vous avez besoin.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12 px-6 md:px-12">
            <SearchBar
              products={products}
              initialQuery={search || ''}
            />
          </div>

          {/* Product Grid with Filters */}
          <Suspense fallback={
            <div className="flex justify-center items-center py-16">
              <Loader2 className="h-10 w-10 animate-spin text-custom-orange" />
            </div>
          }>
            <ProductGrid
              products={products}
              categories={categories}
              filterOptions={{
                category,
                subcategory,
                brand,
                search,
                page,
              }}
              totalPages={totalPages}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
