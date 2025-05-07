"use client";

import { useState, useEffect } from 'react';

interface ProductGalleryProps {
  mainImage: string;
  additionalImages: string[];
  productName: string;
}

export default function ProductGallery({ 
  mainImage, 
  additionalImages, 
  productName
}: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState<string>(mainImage);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  
  // Mise à jour de l'image courante si l'image principale change
  useEffect(() => {
    setCurrentImage(mainImage);
  }, [mainImage]);
  
  // Gérer les erreurs de chargement d'image
  const handleImageError = (imgSrc: string) => {
    setImageErrors(prev => ({
      ...prev,
      [imgSrc]: true
    }));
    
    // Si c'est l'image courante qui a échoué, utiliser une image alternative ou afficher la première lettre
    if (imgSrc === currentImage) {
      // Chercher une autre image valide dans le tableau
      const validImage = additionalImages.find(img => !imageErrors[img]);
      if (validImage) {
        setCurrentImage(validImage);
      }
    }
  };
  
  // Vérifier si c'est un produit blanc qui nécessite un contraste amélioré
  const isWhiteProduct = 
    mainImage.includes('smvector') || 
    mainImage.includes('8400') ||
    additionalImages.some(img => img.includes('smvector') || img.includes('8400'));
  
  // Filtrer les images pour n'inclure que celles qui n'ont pas échoué
  const validAdditionalImages = additionalImages.filter(img => !imageErrors[img]);
  
  // Combine main image with additional images for the gallery thumbnails
  const allImages = imageErrors[mainImage] 
    ? [...validAdditionalImages] 
    : [mainImage, ...validAdditionalImages];
  
  // Si l'image principale n'est pas affichable et qu'il n'y a pas d'images alternatives
  const hasNoValidImages = allImages.length === 0 || allImages.every(img => imageErrors[img]);
  
  return (
    <div>
      {/* Image principale */}
      <div className="mb-6 max-w-[500px] mx-auto">
        <div className="aspect-square relative">
          {hasNoValidImages ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500 text-6xl font-bold">{productName.charAt(0)}</span>
            </div>
          ) : (
            <div className={`absolute inset-0 flex items-center justify-center p-6 ${isWhiteProduct ? 'white-product-image' : ''}`}>
              <img 
                src={currentImage} 
                alt={productName} 
                className="object-contain max-w-full max-h-full"
                onError={() => handleImageError(currentImage)}
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Galerie de miniatures */}
      {allImages.length > 1 && (
        <>
          <h3 className="text-lg font-medium text-gray-700 mb-3 text-center">Vues du produit</h3>
          <div className="grid grid-cols-4 gap-3 max-w-[500px] mx-auto">
            {allImages.map((imgSrc, index) => (
              <div 
                key={index} 
                className={`
                  cursor-pointer
                  ${imgSrc === currentImage ? 'ring-2 ring-orange-500 scale-[1.03]' : ''}
                `}
                onClick={() => setCurrentImage(imgSrc)}
              >
                <div className="aspect-square relative">
                  <div className={`absolute inset-0 flex items-center justify-center p-3 ${isWhiteProduct ? 'white-product-image' : ''}`}>
                    <img 
                      src={imgSrc} 
                      alt={`${productName} - Vue ${index + 1}`} 
                      className="object-contain max-w-full max-h-full"
                      onError={() => handleImageError(imgSrc)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
} 