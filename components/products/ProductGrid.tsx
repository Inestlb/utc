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
    <div className="w-full">
      {/* Filters */}
      <div className="w-full mb-10">
        <ProductFilter
          categories={categories}
          selectedCategory={filterOptions.category}
          onCategoryChange={(category) => onFilterChange?.({ category, page: 1 })}
        />
      </div>

      {/* View Toggle and Results Count */}
      <div className="flex justify-between items-center mb-8 px-6 md:px-12">
        <p className="text-sm text-gray-600">
          {isLoading ? 'Chargement des produits...' : `Affichage de ${products.length} produits`}
        </p>
        <div className="flex space-x-3">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setViewMode('grid')}
            aria-label="Vue en grille"
            className="transition-all duration-300 ease-in-out hover:scale-110"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setViewMode('list')}
            aria-label="Vue en liste"
            className="transition-all duration-300 ease-in-out hover:scale-110"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center py-16 px-6 md:px-12">
          <Loader2 className="h-8 w-8 animate-spin text-custom-orange" />
        </div>
      )}

      {/* Empty State */}
      {!isLoading && products.length === 0 && (
        <div className="text-center py-16 bg-gray-50 rounded-lg mx-6 md:mx-12 animate-in fade-in-50 duration-300">
          <h3 className="text-lg font-medium text-gray-900">Aucun produit trouvé</h3>
          <p className="mt-3 text-sm text-gray-600">
            Essayez d&apos;ajuster votre recherche ou vos filtres pour trouver ce que vous cherchez.
          </p>
          <Button
            className="mt-6 transition-all duration-300 ease-in-out hover:bg-custom-orange hover:scale-105 py-5 px-6"
            onClick={() => onFilterChange?.({ category: undefined, search: undefined, page: 1 })}
          >
            Effacer les filtres
          </Button>
        </div>
      )}

      {/* Product Grid */}
      {!isLoading && products.length > 0 && (
        <div className={`px-6 md:px-12 ${
          viewMode === 'grid'
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in-50 duration-500"
            : "space-y-6 animate-in fade-in-50 duration-500"
        }`}>
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`${viewMode === 'list' ? "border rounded-lg overflow-hidden" : ""} animate-in fade-in-50 slide-in-from-bottom-3 duration-300`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 px-6 md:px-12">
          <div className="flex space-x-3">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={page === filterOptions.page ? 'default' : 'outline'}
                size="sm"
                onClick={() => handlePageChange(page)}
                className={`transition-all duration-300 ease-in-out py-5 px-6 ${
                  page === filterOptions.page 
                    ? "bg-custom-orange hover:bg-[#d47d0e] hover:scale-110"
                    : "hover:border-custom-orange hover:text-custom-orange hover:scale-110"
                }`}
              >
                {page}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
