"use client";

import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface LenzeCategoryCardsProps {
  categories?: string[];
  selectedCategory?: string;
  onCategorySelect?: (category: string) => void;
}

export default function LenzeCategoryCards({
  categories = [],
  selectedCategory,
  onCategorySelect,
}: LenzeCategoryCardsProps) {
  const searchParams = useSearchParams();
  const brand = searchParams.get('brand');
  
  // Si c'est pas la page Lenze, on n'affiche rien
  if (brand !== 'lenze') return null;
  
  // Les catégories pour Lenze (exactement comme dans ProductFilter)
  const lenzeCategories = [
    'Variateurs et servovariateurs',
    'Moteurs',
    'Motoréducteurs',
    'Réducteurs',
    'Solutions et passerelles llot',
    'Accessoires',
    'Software'
  ];
  
  // Images associées à chaque catégorie (à remplacer par les vraies images)
  const categoryImages: Record<string, string> = {
    'Variateurs et servovariateurs': '/images/products/lenze-drive.jpg',
    'Moteurs': '/images/products/lenze-motor.jpg',
    'Motoréducteurs': '/images/products/lenze-geared-motor.jpg',
    'Réducteurs': '/images/products/lenze-gear.jpg',
    'Solutions et passerelles llot': '/images/products/lenze-iot.jpg',
    'Accessoires': '/images/products/lenze-accessories.jpg',
    'Software': '/images/products/lenze-software.jpg'
  };
  
  // Descriptions courtes pour chaque catégorie
  const categoryDescriptions: Record<string, string> = {
    'Variateurs et servovariateurs': 'Solutions de contrôle de vitesse et de position haute performance pour applications industrielles.',
    'Moteurs': 'Moteurs électriques fiables et efficaces pour diverses applications industrielles.',
    'Motoréducteurs': 'Combinaisons intégrées de moteurs et réducteurs pour un contrôle précis du mouvement.',
    'Réducteurs': 'Systèmes de transmission de puissance pour ajuster vitesse et couple dans les applications industrielles.',
    'Solutions et passerelles llot': 'Connexion et intégration intelligente des systèmes d\'entraînement au monde numérique.',
    'Accessoires': 'Composants complémentaires pour optimiser les performances de vos systèmes d\'entraînement.',
    'Software': 'Logiciels de configuration, optimisation et diagnostic pour systèmes d\'entraînement.'
  };

  return (
    <div className="w-full px-6 md:px-12">
      <h2 className="text-2xl font-bold mb-6">Catégories de produits Lenze</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {lenzeCategories.map((category) => (
          <Link 
            key={category} 
            href={`/products?brand=lenze&category=${encodeURIComponent(category)}`}
            className="block hover:no-underline"
          >
            <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg group cursor-pointer h-full">
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out">
                  <span className="text-gray-500 text-3xl font-bold">{category.charAt(0)}</span>
                </div>
                {/* Image de catégorie - à décommenter quand les images réelles seront disponibles */}
                {/* {categoryImages[category] && (
                  <Image
                    src={categoryImages[category]}
                    alt={category}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out"
                  />
                )} */}
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold line-clamp-1 transition-colors duration-300 group-hover:text-custom-orange mb-2">{category}</h3>
                <p className="text-gray-600 mt-3 text-sm line-clamp-2">
                  {categoryDescriptions[category]}
                </p>
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    className="w-full transition-all duration-300 ease-in-out group-hover:bg-custom-orange group-hover:text-gray-900 group-hover:border-custom-orange py-5"
                  >
                    Voir les produits
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
} 