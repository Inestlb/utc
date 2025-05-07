"use client";

import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LENZE_VARIATEUR_SUBCATEGORIES, LenzeVariateurSubCategory } from '@/lib/types';

interface SubCategoryFilterProps {
  mainCategory: string;
  selectedSubCategory?: string;
  onSubCategoryChange: (subCategory?: string) => void;
}

export default function SubCategoryFilter({
  mainCategory,
  selectedSubCategory,
  onSubCategoryChange,
}: SubCategoryFilterProps) {
  const searchParams = useSearchParams();
  const brand = searchParams.get('brand');
  
  console.log("==== DIAGNOSTIC SubCategoryFilter ====");
  console.log("SubCategoryFilter - selectedSubCategory:", selectedSubCategory);
  console.log("mainCategory:", mainCategory);
  console.log("brand:", brand);
  
  // Si ce n'est pas la page Lenze ou pas la catégorie Variateurs et servovariateurs, on n'affiche pas les sous-filtres
  if (brand !== 'lenze' || mainCategory !== 'Variateurs et servovariateurs') {
    console.log("Conditions non respectées, sous-filtres non affichés");
    return null;
  }
  
  // Sous-catégories pour Variateurs et servovariateurs
  const subCategories = Object.keys(LENZE_VARIATEUR_SUBCATEGORIES) as LenzeVariateurSubCategory[];
  console.log("SubCategories disponibles:", subCategories);
  console.log("==== FIN DIAGNOSTIC SubCategoryFilter ====");

  // Ajouter un bouton "Tous" pour afficher tous les produits
  return (
    <div className="w-full mb-8">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => {
            console.log("Sélection de tous les produits");
            onSubCategoryChange(undefined);
          }}
          className={cn(
            "px-5 py-3 text-center rounded-md text-sm font-medium transition-all duration-300 ease-in-out",
            !selectedSubCategory 
              ? "bg-orange-500 text-white shadow-md" 
              : "bg-gray-100 hover:bg-gray-200 hover:shadow-sm hover:text-orange-500 text-gray-700"
          )}
        >
          Tous
        </button>
        
        {subCategories.map((subCategory) => {
          const isSelected = subCategory === selectedSubCategory;
          
          return (
            <button
              key={subCategory}
              onClick={() => {
                console.log("SubCategoryFilter - Sous-catégorie sélectionnée:", subCategory);
                onSubCategoryChange(subCategory);
              }}
              className={cn(
                "px-5 py-3 text-center rounded-md text-sm font-medium transition-all duration-300 ease-in-out",
                isSelected 
                  ? "bg-orange-500 text-white shadow-md" 
                  : "bg-gray-100 hover:bg-gray-200 hover:shadow-sm hover:text-orange-500 text-gray-700"
              )}
            >
              {subCategory}
            </button>
          );
        })}
      </div>
    </div>
  );
} 