"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';
import LenzeCategoryCards from './LenzeCategoryCards';
import SubCategoryFilter from './SubCategoryFilter';
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
  const searchParams = useSearchParams();
  const router = useRouter();
  const brand = searchParams.get('brand');
  const [showFilters, setShowFilters] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | undefined>(
    filterOptions.subcategory || (filterOptions.category === 'Variateurs et servovariateurs' ? 'Variateurs de vitesse' : undefined)
  );
  
  // Définir la sous-catégorie par défaut pour la page des variateurs Lenze
  useEffect(() => {
    const isLenzeVariateursPage = brand === 'lenze' && filterOptions.category === 'Variateurs et servovariateurs';
    
    if (isLenzeVariateursPage && !selectedSubCategory) {
      const defaultSubcategory = 'Variateurs de vitesse';
      setSelectedSubCategory(defaultSubcategory);
      
      // On met à jour l'URL pour la cohérence visuelle, mais les filtres réels
      // sont gérés au niveau de getProducts dans data/products.ts
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set('subcategory', defaultSubcategory);
      router.push(`/products?${newParams.toString()}`);
    }
  }, [brand, filterOptions.category, selectedSubCategory, searchParams, router]);
  
  // Pour la page Lenze, on affiche les cards catégories au lieu des filtres par défaut
  useEffect(() => {
    if (brand === 'lenze' && !filterOptions.category) {
      setShowFilters(false);
    } else {
      setShowFilters(true);
    }
  }, [brand, filterOptions.category]);

  const handlePageChange = (page: number) => {
    if (onFilterChange) {
      onFilterChange({ page });
    }
  };
  
  const handleCategorySelect = (category: string) => {
    if (onFilterChange) {
      if (category === 'Variateurs et servovariateurs' && brand === 'lenze') {
        setSelectedSubCategory('Variateurs de vitesse');
        onFilterChange({ 
          category, 
          subcategory: 'Variateurs de vitesse', 
          page: 1 
        });
      } else {
        setSelectedSubCategory(undefined);
        onFilterChange({ 
          category, 
          subcategory: undefined, 
          page: 1 
        });
      }
      setShowFilters(true);
    }
  };
  
  const handleSubCategoryChange = (subCategory?: string) => {
    setSelectedSubCategory(subCategory);
    if (onFilterChange) {
      onFilterChange({ subcategory: subCategory, page: 1 });
    }
  };

  // Déterminer si nous sommes sur la page variateurs et servovariateurs
  const isVariateurPage = brand === 'lenze' && filterOptions.category === 'Variateurs et servovariateurs';

  // Filtrer les produits par sous-catégorie seulement si ce n'est pas la page variateurs
  useEffect(() => {
    // Important: Afficher tous les produits sans filtre pour la page des variateurs
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="w-full">
      {/* Filtres ou Cards Lenze - ne pas afficher pour la page Variateurs et servovariateurs */}
      {!isVariateurPage && (
        <div className="w-full mb-10">
          {brand === 'lenze' && !showFilters ? (
            <LenzeCategoryCards
              categories={categories}
              selectedCategory={filterOptions.category}
              onCategorySelect={handleCategorySelect}
            />
          ) : (
            <ProductFilter
              categories={categories}
              selectedCategory={filterOptions.category}
              onCategoryChange={(category) => {
                if (category === 'Variateurs et servovariateurs' && brand === 'lenze') {
                  setSelectedSubCategory('Variateurs de vitesse');
                  onFilterChange?.({ 
                    category, 
                    subcategory: 'Variateurs de vitesse', 
                    page: 1 
                  });
                } else {
                  setSelectedSubCategory(undefined);
                  onFilterChange?.({ 
                    category, 
                    subcategory: undefined, 
                    page: 1 
                  });
                }
              }}
            />
          )}
        </div>
      )}
      
      {/* Sous-filtres pour Variateurs et servovariateurs - toujours visible quand on est sur cette page */}
      {isVariateurPage && (
        <div className="px-6 md:px-12 mb-8">
          <SubCategoryFilter
            mainCategory={filterOptions.category || ''}
            selectedSubCategory={selectedSubCategory}
            onSubCategoryChange={handleSubCategoryChange}
          />
        </div>
      )}
      
      {/* View Toggle and Results Count - Only show when showing product results */}
      {showFilters && (
        <div className="flex justify-between items-center mb-8 px-6 md:px-12">
          <p className="text-sm text-gray-600">
            {isLoading ? 'Chargement des produits...' : `Affichage de ${filteredProducts.length} produits`}
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
      )}

      {/* Loading State */}
      {showFilters && isLoading && (
        <div className="flex flex-col justify-center items-center py-16 px-6 md:px-12">
          <div className="relative w-20 h-20">
            <div className="absolute top-0 w-full h-full rounded-full border-4 border-gray-200"></div>
            <div className="absolute top-0 w-full h-full rounded-full border-4 border-t-orange-500 animate-spin"></div>
          </div>
          <p className="mt-4 text-gray-600 animate-pulse">Chargement des produits...</p>
        </div>
      )}

      {/* Empty State */}
      {showFilters && !isLoading && filteredProducts.length === 0 && (
        <div className="text-center py-16 bg-gray-50 rounded-lg mx-6 md:mx-12 animate-in fade-in-50 duration-300">
          <h3 className="text-lg font-medium text-gray-900">Aucun produit trouvé</h3>
          <p className="mt-3 text-sm text-gray-600">
            Essayez d&apos;ajuster votre recherche ou vos filtres pour trouver ce que vous cherchez.
          </p>
          <Button
            className="mt-6 transition-all duration-300 ease-in-out hover:bg-custom-orange hover:scale-105 py-5 px-6"
            onClick={() => {
              onFilterChange?.({ 
                category: undefined, 
                subcategory: undefined, 
                search: undefined, 
                page: 1 
              });
              if (brand === 'lenze') setShowFilters(false);
              setSelectedSubCategory(undefined);
            }}
          >
            Effacer les filtres
          </Button>
        </div>
      )}

      {/* Product Grid - Only show when showing product results */}
      {showFilters && !isLoading && filteredProducts.length > 0 && (
        <div className={`px-6 md:px-12 ${
          viewMode === 'grid'
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in-50 duration-500"
            : "space-y-6 animate-in fade-in-50 duration-500"
        }`}>
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`${viewMode === 'list' ? "border rounded-lg overflow-hidden" : ""} animate-in fade-in-50 slide-in-from-bottom-3 duration-300`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}

      {/* Pagination - Only show when showing product results */}
      {showFilters && totalPages > 1 && (
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
