"use client";

import { useState } from 'react';

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
  
  // Vérifier si c'est un produit blanc qui nécessite un contraste amélioré
  const isWhiteProduct = 
    mainImage.includes('smvector') || 
    mainImage.includes('8400') ||
    additionalImages.some(img => img.includes('smvector') || img.includes('8400'));
  
  // Combine main image with additional images for the gallery thumbnails
  const allImages = [mainImage, ...additionalImages];
  
  return (
    <div>
      {/* Image principale */}
      <div className="product-image-container rounded-lg overflow-hidden mb-6 max-w-[500px] mx-auto shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="aspect-square relative">
          <div className={`absolute inset-0 flex items-center justify-center p-6 ${isWhiteProduct ? 'white-product-image' : ''}`}>
            <img 
              src={currentImage} 
              alt={productName} 
              className="object-contain max-w-full max-h-full"
            />
          </div>
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
                  product-image-container rounded-lg overflow-hidden shadow-sm 
                  hover:shadow-md transition-all duration-300 cursor-pointer
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