"use client";

import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';
import { Button } from '@/components/ui/button';
import { Grid, List, Loader2 } from 'lucide-react';
import { Product, ProductFilterOptions } from '@/lib/types';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  categories?: string[];
  filterOptions?: ProductFilterOptions;
  onFilterChange?: (filters: Partial<ProductFilterOptions>) => void;
  totalPages?: number;
}

export default function ProductGrid({
  products,
  isLoading = false,
  categories = [],
  filterOptions = {},
  onFilterChange,
  totalPages = 1,
}: ProductGridProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handlePageChange = (page: number) => {
    if (onFilterChange) {
      onFilterChange({ page });
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-[1600px]">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <ProductFilter
              categories={categories}
              selectedCategory={filterOptions.category}
              onCategoryChange={(category) => onFilterChange?.({ category, page: 1 })}
            />
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* View Toggle and Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-600">
                {isLoading ? 'Chargement des produits...' : `Affichage de ${products.length} produits`}
              </p>
              <div className="flex space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  aria-label="Vue en grille"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                  aria-label="Vue en liste"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}

            {/* Empty State */}
            {!isLoading && products.length === 0 && (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Aucun produit trouvé</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Essayez d&apos;ajuster votre recherche ou vos filtres pour trouver ce que vous cherchez.
                </p>
                <Button
                  className="mt-4"
                  onClick={() => onFilterChange?.({ category: undefined, search: undefined, page: 1 })}
                >
                  Effacer les filtres
                </Button>
              </div>
            )}

            {/* Product Grid */}
            {!isLoading && products.length > 0 && (
              <div className={
                viewMode === 'grid'
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }>
                {products.map((product) => (
                  <div key={product.id} className={viewMode === 'list' ? "border rounded-lg overflow-hidden" : ""}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={page === filterOptions.page ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
