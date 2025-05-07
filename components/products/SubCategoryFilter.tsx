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
  
  // Si ce n'est pas la page Lenze ou pas la catégorie Variateurs et servovariateurs, on n'affiche pas les sous-filtres
  if (brand !== 'lenze' || mainCategory !== 'Variateurs et servovariateurs') {
    return null;
  }
  
  // Sous-catégories pour Variateurs et servovariateurs
  const subCategories = Object.keys(LENZE_VARIATEUR_SUBCATEGORIES) as LenzeVariateurSubCategory[];

  return (
    <div className="w-full mb-8">
      <div className="flex flex-wrap gap-3">
        {subCategories.map((subCategory) => {
          const isSelected = subCategory === selectedSubCategory;
          
          return (
            <button
              key={subCategory}
              onClick={() => onSubCategoryChange(subCategory)}
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