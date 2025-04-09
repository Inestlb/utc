"use client";

import { IFM_CATEGORIES, LENZE_CATEGORIES, WAGO_CATEGORIES } from '@/lib/types';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

interface ProductFilterProps {
  categories: string[];
  selectedCategory?: string;
  onCategoryChange: (category?: string) => void;
}

export default function ProductFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: ProductFilterProps) {
  const searchParams = useSearchParams();
  const brand = searchParams.get('brand');

  // Détermine les catégories à afficher en fonction de la marque
  let displayCategories: string[] = [];
  
  if (brand === 'ifm') {
    // Ordre exact comme sur l'image pour IFM
    const orderedCategories = [
      'Capteurs',
      'IO-Link',
      'Traitement d\'images',
      'Accessoires',
      'Technologies de sécurité',
      'Alimentation en tension',
      'Technologies de connexion',
      'Interface de câblage capteurs/actionneurs'
    ];
    displayCategories = orderedCategories;
  } else if (brand === 'lenze') {
    // Catégories pour Lenze
    displayCategories = [
      'Variateurs et servovariateurs',
      'Moteurs',
      'Motoréducteurs',
      'Réducteurs',
      'Solutions et passerelles llot',
      'Accessoires',
      'Software'
    ];
  } else if (brand === 'wago') {
    // Catégories pour WAGO
    displayCategories = [
      'Technologies de raccordement électriques',
      'Interfaces électroniques',
      'Techniques d\'automatisation'
    ];
  } else {
    displayCategories = categories;
  }

  // Ajouter "All" comme première option
  const allCategories = ["All", ...displayCategories];

  return (
    <div className="w-full">
      <div className="px-6 md:px-12">
        <div className="flex flex-wrap gap-3">
          {allCategories.map((category) => {
            const isSelected = 
              (category === "All" && !selectedCategory) || 
              category === selectedCategory;
            
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category === "All" ? undefined : category)}
                className={cn(
                  "px-5 py-3.5 text-center rounded-md text-sm font-medium transition-all duration-300 ease-in-out",
                  isSelected 
                    ? "bg-orange-500 text-white shadow-md" 
                    : "bg-gray-100 hover:bg-gray-200 hover:shadow-sm hover:text-orange-500 text-gray-700"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
