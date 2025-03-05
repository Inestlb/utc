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
  title: 'Products | Industrial Export Company',
  description: 'Browse our catalog of high-quality industrial products for global export',
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
          <h1 className="text-3xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-3xl">
            Browse our comprehensive catalog of industrial products designed for reliability,
            efficiency, and performance. Use the filters to find exactly what you need.
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
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
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
