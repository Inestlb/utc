"use client";

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Utiliser la clé API depuis les variables d'environnement
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';

interface MapboxMapProps {
  longitude?: number;
  latitude?: number;
  zoom?: number;
  markerTitle?: string;
}

export default function MapboxMap({
  longitude = 3.8767, // Coordonnées par défaut pour Montpellier
  latitude = 43.6108,
  zoom = 14,
  markerTitle = 'UTC Industrie'
}: MapboxMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !mapboxgl.accessToken) return;

    // Initialiser la carte
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [longitude, latitude],
      zoom: zoom
    });
    // Ajouter les contrôles de navigation
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Ajouter un marqueur à l'emplacement spécifié
    const marker = new mapboxgl.Marker({ color: '#f97316' }) // Couleur orange
      .setLngLat([longitude, latitude])
      .setPopup(new mapboxgl.Popup().setHTML(`<h3>${markerTitle}</h3>`))
      .addTo(map.current);

    // Marquer la carte comme chargée
    map.current.on('load', () => {
      setMapLoaded(true);
    });

    // Nettoyer la carte lors du démontage du composant
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [longitude, latitude, zoom, markerTitle]);

  // Afficher un message si la clé API n'est pas définie
  if (!mapboxgl.accessToken) {
    return (
      <div className="bg-gray-200 rounded-lg overflow-hidden h-full flex items-center justify-center">
        <p className="text-gray-500 p-4 text-center">
          Veuillez configurer votre clé API Mapbox dans le fichier .env.local
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-gray-500">Chargement de la carte...</div>
        </div>
      )}
    </div>
  );
}
