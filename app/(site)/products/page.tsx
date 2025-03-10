import { Suspense } from 'react';
import { getProducts, getProductCategories } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';
import SearchBar from '@/components/products/SearchBar';
import { Loader2 } from 'lucide-react';

interface ProductsPageProps {
  searchParams: {
    category?: string;
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
  const search = searchParams.q;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  // Fetch products and categories
  const productsPromise = getProducts({
    category,
    search,
    page,
  });

  const categoriesPromise = getProductCategories();

  // Wait for both promises to resolve
  const [products, categories] = await Promise.all([
    productsPromise,
    categoriesPromise,
  ]);

  // Calculate total pages (in a real app, this would come from the API)
  const totalPages = Math.ceil(products.length / 4);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Nos Produits</h1>
          <p className="text-gray-600 max-w-3xl">
            Parcourez notre catalogue complet de produits industriels conçus pour la <span className="font-medium">fiabilité</span>,
            l&apos;<span className="font-medium">efficacité</span> et la <span className="font-medium">performance</span>. Utilisez les filtres pour trouver exactement ce dont vous avez besoin.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar
            products={products}
            initialQuery={search || ''}
          />
        </div>

        {/* Product Grid with Filters */}
        <Suspense fallback={
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
          </div>
        }>
          <ProductGrid
            products={products}
            categories={categories}
            filterOptions={{
              category,
              search,
              page,
            }}
            totalPages={totalPages}
          />
        </Suspense>
      </div>
    </div>
  );
}
