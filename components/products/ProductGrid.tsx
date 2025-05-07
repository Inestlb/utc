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
  
  // Définir la sous-catégorie par défaut pour les pages Lenze avec sous-catégories
  useEffect(() => {
    const isLenzeVariateursPage = brand === 'lenze' && filterOptions.category === 'Variateurs et servovariateurs';
    const isLenzeMotoreducteursPage = brand === 'lenze' && filterOptions.category === 'Motoréducteurs';
    
    console.log("====== DIAGNOSTIC Initialisation sous-catégorie ======");
    console.log("Vérification des conditions initiales:");
    console.log("- brand:", brand);
    console.log("- filterOptions.category:", filterOptions.category);
    console.log("- selectedSubCategory:", selectedSubCategory);
    console.log("- isLenzeVariateursPage:", isLenzeVariateursPage);
    console.log("- isLenzeMotoreducteursPage:", isLenzeMotoreducteursPage);
    
    if (isLenzeVariateursPage && !selectedSubCategory) {
      const defaultSubcategory = 'Variateurs de vitesse';
      console.log(`Définition de la sous-catégorie par défaut pour variateurs: "${defaultSubcategory}"`);
      setSelectedSubCategory(defaultSubcategory);
      
      // On met à jour l'URL pour la cohérence visuelle
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set('subcategory', defaultSubcategory);
      router.push(`/products?${newParams.toString()}`);
    }
    else if (isLenzeMotoreducteursPage && !selectedSubCategory) {
      const defaultSubcategory = 'Motoréducteurs triphasés';
      console.log(`Définition de la sous-catégorie par défaut pour motoréducteurs: "${defaultSubcategory}"`);
      setSelectedSubCategory(defaultSubcategory);
      
      // On force immédiatement le filtrage côté client pour éviter l'écran vide
      console.log("Forçage immédiat du filtrage côté client");
      
      // On met à jour l'URL pour la cohérence visuelle
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set('subcategory', defaultSubcategory);
      
      // Utiliser une mise à jour d'URL sans rechargement pour une meilleure UX
      router.push(`/products?${newParams.toString()}`);
      
      // Appeler onFilterChange pour informer le parent de la sous-catégorie sélectionnée
      if (onFilterChange) {
        onFilterChange({ 
          subcategory: defaultSubcategory
        });
      }
    }
    
    console.log("====== FIN DIAGNOSTIC Initialisation sous-catégorie ======");
  }, [brand, filterOptions.category, searchParams, router, onFilterChange]);
  
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
      console.log("====== DIAGNOSTIC handleCategorySelect ======");
      console.log("Sélection de catégorie:", category);
      console.log("brand:", brand);
      
      if (category === 'Variateurs et servovariateurs' && brand === 'lenze') {
        const defaultSubcategory = 'Variateurs de vitesse';
        console.log(`Définition de la sous-catégorie par défaut: "${defaultSubcategory}"`);
        setSelectedSubCategory(defaultSubcategory);
        onFilterChange({ 
          category, 
          subcategory: defaultSubcategory, 
          page: 1 
        });
      } else if (category === 'Motoréducteurs' && brand === 'lenze') {
        const defaultSubcategory = 'Motoréducteurs triphasés';
        console.log(`Définition de la sous-catégorie par défaut pour motoréducteurs: "${defaultSubcategory}"`);
        setSelectedSubCategory(defaultSubcategory);
        onFilterChange({ 
          category, 
          subcategory: defaultSubcategory, 
          page: 1 
        });
      } else {
        console.log("Réinitialisation de la sous-catégorie (undefined)");
        setSelectedSubCategory(undefined);
        onFilterChange({ 
          category, 
          subcategory: undefined, 
          page: 1 
        });
      }
      setShowFilters(true);
      console.log("====== FIN DIAGNOSTIC handleCategorySelect ======");
    }
  };
  
  const handleSubCategoryChange = (subCategory?: string) => {
    setSelectedSubCategory(subCategory);
    if (onFilterChange) {
      console.log("handleSubCategoryChange - Changement de sous-catégorie vers:", subCategory);
      
      // Envoyer la sous-catégorie sélectionnée au serveur
      onFilterChange({ 
        subcategory: subCategory, 
        page: 1 
      });
      
      // Mettre à jour l'URL
      const newParams = new URLSearchParams(searchParams.toString());
      if (subCategory) {
        newParams.set('subcategory', subCategory);
      } else {
        newParams.delete('subcategory');
      }
      console.log("URL mise à jour:", `/products?${newParams.toString()}`);
      router.push(`/products?${newParams.toString()}`);
    }
  };

  // Déterminer si nous sommes sur une page avec des sous-catégories
  const isVariateurPage = brand === 'lenze' && filterOptions.category === 'Variateurs et servovariateurs';
  const isMotoreducteurPage = brand === 'lenze' && filterOptions.category === 'Motoréducteurs';
  const hasSubcategories = isVariateurPage || isMotoreducteurPage;

  // Trier les produits par sous-catégorie sélectionnée
  useEffect(() => {
    console.log("====== DIAGNOSTIC ProductGrid ======");
    console.log("ProductGrid reçoit", products.length, "produits");
    console.log("selectedSubCategory:", selectedSubCategory);
    
    // Vérifier s'il s'agit de la page des motoréducteurs
    const isMotoreducteursPage = filterOptions.category === 'Motoréducteurs';
    
    // Si c'est la page des motoréducteurs mais qu'aucune sous-catégorie n'est sélectionnée,
    // nous ne devrions pas arriver ici car la sous-catégorie par défaut est définie dans l'autre useEffect
    if (isMotoreducteursPage && !selectedSubCategory) {
      console.log("Page des motoréducteurs sans sous-catégorie sélectionnée - Cas anormal");
      // Nous allons quand même gérer ce cas en montrant tous les produits
      setFilteredProducts(products);
      return;
    }
    
    // Pour la page des motoréducteurs avec une sous-catégorie sélectionnée
    if (isMotoreducteursPage && selectedSubCategory) {
      console.log(`Filtrage pour la sous-catégorie : ${selectedSubCategory}`);
      const filteredBySubcategory = products.filter(p => p.subcategory === selectedSubCategory);
      console.log(`Nombre de produits après filtrage : ${filteredBySubcategory.length}`);
      
      // Trier par nom au sein de la sous-catégorie
      filteredBySubcategory.sort((a, b) => a.name.localeCompare(b.name));
      setFilteredProducts(filteredBySubcategory);
      return;
    }
    
    // Pour les autres pages, ne pas trier spécialement
    console.log("Affichage des produits sans tri spécial par sous-catégorie");
    setFilteredProducts(products);
    
    console.log("====== FIN DIAGNOSTIC ProductGrid ======");
  }, [products, filterOptions.category, selectedSubCategory]);

  return (
    <div className="w-full">
      {/* Filtres ou Cards Lenze - ne pas afficher pour la page Variateurs et servovariateurs */}
      {!hasSubcategories && (
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
                } else if (category === 'Motoréducteurs' && brand === 'lenze') {
                  setSelectedSubCategory('Motoréducteurs triphasés');
                  onFilterChange?.({ 
                    category, 
                    subcategory: 'Motoréducteurs triphasés', 
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
      
      {/* Sous-filtres pour les catégories avec sous-catégories - toujours visible quand on est sur cette page */}
      {hasSubcategories && (
        <div className="px-6 md:px-12 mb-8">
          <SubCategoryFilter
            mainCategory={filterOptions.category || ''}
            selectedSubCategory={selectedSubCategory}
            onSubCategoryChange={handleSubCategoryChange}
          />
          
          {/* ⚠️ DÉBOGAGE - Information sur les sous-catégories disponibles */}
          {filterOptions.category === 'Motoréducteurs' && (
            <div className="text-xs text-gray-400 mt-2">
              Sous-catégories: Motoréducteurs triphasés | Motoréducteurs triphasés avec variateurs de vitesse | Servo-motoréducteurs
            </div>
          )}
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
        <div className="px-6 md:px-12">
          {hasSubcategories && filterOptions.category === 'Motoréducteurs' ? (
            // Affichage des produits pour la sous-catégorie sélectionnée uniquement
            <div className="space-y-10 animate-in fade-in-50 duration-500">
              {/* Si aucune sous-catégorie n'est sélectionnée, afficher un titre global */}
              {!selectedSubCategory && (
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">Nos Motoréducteurs par catégorie</h2>
                  <p className="text-sm text-gray-600 mt-1">Sélectionnez une catégorie ci-dessus pour filtrer les produits</p>
                </div>
              )}
              
              {/* Boucle sur les sous-catégories à afficher */}
              {(selectedSubCategory ? [selectedSubCategory] : [...new Set(filteredProducts.map(p => p.subcategory))]).map(subcategory => {
                // Filtrer les produits pour cette sous-catégorie
                const subcategoryProducts = filteredProducts.filter(p => p.subcategory === subcategory);
                
                // Ne rien afficher si pas de produits dans cette sous-catégorie
                if (subcategoryProducts.length === 0) return null;
                
                return (
                  <div key={subcategory} className="mb-8">
                    <h3 className={`text-lg font-semibold mb-4 border-l-4 pl-3 ${
                      subcategory === selectedSubCategory 
                        ? 'border-orange-500 text-orange-700' 
                        : 'border-gray-300 text-gray-700'
                    }`}>
                      {subcategory}
                    </h3>
                    <div className={`${
                      viewMode === 'grid'
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        : "space-y-6"
                    }`}>
                      {subcategoryProducts.map((product, index) => (
                        <div 
                          key={product.id} 
                          className={`${viewMode === 'list' ? "border rounded-lg overflow-hidden" : ""} animate-in fade-in-50 slide-in-from-bottom-3 duration-300`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <ProductCard product={product} />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Affichage standard pour les autres catégories
            <div className={`${
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
        </div>
      )}

      {/* Pagination - Only show when showing product results */}
      {showFilters && totalPages > 1 && !hasSubcategories && (
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
