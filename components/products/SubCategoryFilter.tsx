"use client";

import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LENZE_VARIATEUR_SUBCATEGORIES, 
  LenzeVariateurSubCategory,
  LENZE_MOTOREDUCTEUR_SUBCATEGORIES,
  LenzeMotoreducteurSubCategory
} from '@/lib/types';

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
  
  // Si ce n'est pas la page Lenze, on n'affiche pas les sous-filtres
  if (brand !== 'lenze') {
    console.log("Pas la marque Lenze, sous-filtres non affichés");
    return null;
  }
  
  // Déterminer quelles sous-catégories afficher
  let allSubCategories: string[] = [];
  
  if (mainCategory === 'Variateurs et servovariateurs') {
    // Pour les variateurs, utiliser les sous-catégories définies dans les types
    allSubCategories = [
      'Variateurs de vitesse',
      'Servovariateurs', 
      'Produits antérieurs - Variateurs de vitesse'
    ];
  } 
  else if (mainCategory === 'Motoréducteurs') {
    // Pour les motoréducteurs, utiliser exactement les mêmes valeurs que dans le JSON
    allSubCategories = [
      "Motoréducteurs triphasés",
      "Motoréducteurs triphasés avec variateurs de vitesse",
      "Servo-motoréducteurs"
    ];
    console.log("Utilisation des sous-catégories exactes depuis le JSON");
  }
  else {
    console.log("Catégorie sans sous-filtres définis:", mainCategory);
    return null;
  }
  
  console.log("Sous-catégories disponibles:", allSubCategories);
  console.log("==== FIN DIAGNOSTIC SubCategoryFilter ====");

  // Si aucune sous-catégorie n'est définie, ne pas afficher le filtre
  if (allSubCategories.length === 0) {
    return null;
  }

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
        
        {allSubCategories.map((subCategory) => {
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