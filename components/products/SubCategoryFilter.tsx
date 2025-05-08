"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  LENZE_VARIATEUR_SUBCATEGORIES, 
  LenzeVariateurSubCategory,
  LENZE_MOTOREDUCTEUR_SUBCATEGORIES,
  LenzeMotoreducteurSubCategory,
  LENZE_MOTEUR_SUBCATEGORIES,
  LenzeMoteurSubCategory,
  LENZE_REDUCTEUR_SUBCATEGORIES,
  LenzeReducteurSubCategory
} from '@/lib/types';

interface SubCategoryFilterProps {
  mainCategory: string;
  selectedSubCategory?: string;
  onSubCategoryChange: (subCategory?: string) => void;
}

export default function SubCategoryFilter({
  mainCategory,
  selectedSubCategory,
  onSubCategoryChange
}: SubCategoryFilterProps) {
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);
  
  useEffect(() => {
    // Déterminer les sous-catégories en fonction de la catégorie principale
    if (mainCategory === 'Variateurs et servovariateurs') {
      setSubCategories(Object.keys(LENZE_VARIATEUR_SUBCATEGORIES));
    } else if (mainCategory === 'Motoréducteurs') {
      setSubCategories(Object.keys(LENZE_MOTOREDUCTEUR_SUBCATEGORIES));
    } else if (mainCategory === 'Moteurs') {
      setSubCategories(Object.keys(LENZE_MOTEUR_SUBCATEGORIES));
    } else if (mainCategory === 'Réducteurs') {
      setSubCategories(Object.keys(LENZE_REDUCTEUR_SUBCATEGORIES));
    } else {
      setSubCategories([]);
    }
  }, [mainCategory]);

  // Réinitialiser showAll quand on change de catégorie ou de sous-catégorie
  useEffect(() => {
    setShowAll(false);
  }, [mainCategory, selectedSubCategory]);

  // Gérer le clic sur "Tout afficher"
  const handleShowAll = () => {
    setShowAll(true);
    onSubCategoryChange(undefined);
  };
  
  // S'il n'y a pas de sous-catégories, ne rien afficher
  if (subCategories.length === 0) {
    return null;
  }

  // Personnalisation de l'apparence en fonction du type de sous-catégorie
  let title = '';
  let buttons = null;
  
  if (mainCategory === 'Variateurs et servovariateurs') {
    title = 'Types de variateurs';
    buttons = (
      <div className="flex flex-wrap gap-3 mt-4">
        {/* Bouton "Tout afficher" */}
        <Button
          variant="outline"
          size="sm"
          onClick={handleShowAll}
          className={showAll || !selectedSubCategory 
            ? "bg-orange-500 text-white hover:bg-orange-600"
            : "bg-gray-100 hover:bg-gray-200 hover:shadow-sm hover:text-orange-500 text-gray-700"
          }
        >
          Tous les produits
        </Button>
        
        {/* Boutons pour chaque sous-catégorie */}
        {subCategories.map((subCategory) => (
          <Button
            key={subCategory}
            variant="outline"
            size="sm"
            onClick={() => {
              setShowAll(false);
              onSubCategoryChange(subCategory);
            }}
            className={selectedSubCategory === subCategory 
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-gray-100 hover:bg-gray-200 hover:shadow-sm hover:text-orange-500 text-gray-700"
            }
          >
            {(LENZE_VARIATEUR_SUBCATEGORIES as Record<string, string>)[subCategory]}
          </Button>
        ))}
      </div>
    );
  } else if (mainCategory === 'Motoréducteurs') {
    title = 'Types de motoréducteurs';
    buttons = (
      <div className="flex flex-wrap gap-3 mt-4">
        {/* Bouton "Tout afficher" */}
        <Button
          variant="outline"
          size="sm"
          onClick={handleShowAll}
          className={showAll || !selectedSubCategory 
            ? "bg-orange-500 text-white hover:bg-orange-600"
            : "bg-gray-100 hover:bg-gray-200 hover:shadow-sm hover:text-orange-500 text-gray-700"
          }
        >
          Tous les produits
        </Button>
        
        {/* Boutons pour chaque sous-catégorie */}
        {subCategories.map((subCategory) => (
          <Button
            key={subCategory}
            variant="outline"
            size="sm"
            onClick={() => {
              setShowAll(false);
              onSubCategoryChange(subCategory);
            }}
            className={selectedSubCategory === subCategory 
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-gray-100 hover:bg-gray-200 hover:shadow-sm hover:text-orange-500 text-gray-700"
            }
          >
            {(LENZE_MOTOREDUCTEUR_SUBCATEGORIES as Record<string, string>)[subCategory]}
          </Button>
        ))}
      </div>
    );
  } else if (mainCategory === 'Moteurs') {
    title = 'Types de moteurs';
    buttons = (
      <div className="flex flex-wrap gap-3 mt-4">
        {/* Bouton "Tout afficher" */}
        <Button
          variant="outline"
          size="sm"
          onClick={handleShowAll}
          className={showAll || !selectedSubCategory 
            ? "bg-orange-500 text-white hover:bg-orange-600"
            : "bg-gray-100 hover:bg-gray-200 hover:shadow-sm hover:text-orange-500 text-gray-700"
          }
        >
          Tous les produits
        </Button>
        
        {/* Boutons pour chaque sous-catégorie */}
        {subCategories.map((subCategory) => (
          <Button
            key={subCategory}
            variant="outline"
            size="sm"
            onClick={() => {
              setShowAll(false);
              onSubCategoryChange(subCategory);
            }}
            className={selectedSubCategory === subCategory 
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-gray-100 hover:bg-gray-200 hover:shadow-sm hover:text-orange-500 text-gray-700"
            }
          >
            {(LENZE_MOTEUR_SUBCATEGORIES as Record<string, string>)[subCategory]}
          </Button>
        ))}
      </div>
    );
  } else if (mainCategory === 'Réducteurs') {
    title = 'Types de réducteurs';
    buttons = (
      <div className="flex flex-wrap gap-3 mt-4">
        {/* Bouton "Tout afficher" */}
        <Button
          variant="outline"
          size="sm"
          onClick={handleShowAll}
          className={showAll || !selectedSubCategory 
            ? "bg-orange-500 text-white hover:bg-orange-600"
            : "bg-gray-100 hover:bg-gray-200 hover:shadow-sm hover:text-orange-500 text-gray-700"
          }
        >
          Tous les produits
        </Button>
        
        {/* Boutons pour chaque sous-catégorie */}
        {subCategories.map((subCategory) => (
          <Button
            key={subCategory}
            variant="outline"
            size="sm"
            onClick={() => {
              setShowAll(false);
              onSubCategoryChange(subCategory);
            }}
            className={selectedSubCategory === subCategory 
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-gray-100 hover:bg-gray-200 hover:shadow-sm hover:text-orange-500 text-gray-700"
            }
          >
            {(LENZE_REDUCTEUR_SUBCATEGORIES as Record<string, string>)[subCategory]}
          </Button>
        ))}
      </div>
    );
  }
  
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-1">Sélectionnez une catégorie pour filtrer les produits</p>
      {buttons}
    </div>
  );
} 