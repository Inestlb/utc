"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Import dynamique du composant MapboxMap pour éviter les erreurs de rendu côté serveur
const MapboxMap = dynamic(() => import('@/components/maps/MapboxMap'), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-200 rounded-lg overflow-hidden h-full flex items-center justify-center border border-orange-200">
      <p className="text-gray-500">Chargement de la carte...</p>
    </div>
  )
});

interface MapContainerProps {
  longitude?: number;
  latitude?: number;
  zoom?: number;
  markerTitle?: string;
}

export default function MapContainer({
  longitude = 3.8767,
  latitude = 43.6108,
  zoom = 14,
  markerTitle = 'UTC Industrie'
}: MapContainerProps) {
  return (
    <div className="rounded-lg overflow-hidden h-80 border border-orange-200">
      <Suspense fallback={
        <div className="bg-gray-200 h-full flex items-center justify-center">
          <p className="text-gray-500">Chargement de la carte...</p>
        </div>
      }>
        <MapboxMap
          longitude={longitude}
          latitude={latitude}
          zoom={zoom}
          markerTitle={markerTitle}
        />
      </Suspense>
    </div>
  );
}
