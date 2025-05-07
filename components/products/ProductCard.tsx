"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const handleViewDetails = () => {
    setIsLoading(true);
    router.push(`/products/${product.id}`);
  };

  // Gérer les erreurs de chargement d'image
  const handleImageError = () => {
    setImageError(true);
  };

  // Vérifier si c'est un produit blanc qui nécessite un contraste amélioré
  const isWhiteProduct = product.image && (
    product.image.includes('smvector') || 
    product.image.includes('8400') ||
    product.id === 'lenze-017'
  );

  return (
    <Card className="overflow-hidden h-full group transition-all duration-300">
      <div className="relative h-52 w-full overflow-hidden flex items-center justify-center cursor-pointer" onClick={handleViewDetails}>
        {(!product.image || imageError) ? (
          <div className="flex items-center justify-center w-full h-full">
          <span className="text-gray-500 text-3xl font-bold">{product.name.charAt(0)}</span>
        </div>
        ) : (
          <div className={`w-full h-full flex items-center justify-center overflow-hidden ${isWhiteProduct ? 'white-product-image' : ''}`}>
            <img 
          src={product.image}
          alt={product.name}
              className="object-contain w-auto h-full max-w-full transition-transform duration-500 group-hover:scale-105"
              onError={handleImageError}
            />
          </div>
        )}
      </div>

      <CardContent className="p-5 cursor-pointer" onClick={handleViewDetails}>
        <h3 className="text-lg font-semibold line-clamp-1 mb-2 group-hover:text-orange-500 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-gray-600 mt-3 text-sm line-clamp-2">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="p-5 pt-2 flex justify-between items-center">
          <Button 
            variant="outline" 
          className="w-full py-5 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500"
          onClick={handleViewDetails}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Chargement...
            </>
          ) : (
            <>
            Voir les détails
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
          </Button>
      </CardFooter>
    </Card>
  );
}
