"use client";

import { useState, useEffect } from 'react';
import { useTranslation, Language } from '@/lib/context/TranslationContext';
import { motion } from 'framer-motion';

export default function LanguageSelector() {
  const { language, setLanguage, isClient } = useTranslation();
  const [mounted, setMounted] = useState(false);

  // Mark component as mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr');
  };

  // Static button for server-side rendering
  const staticSwitch = (
    <div className="relative w-[120px] h-[34px] rounded-lg cursor-pointer overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-orange-500">FR</span>
          <span className="text-sm font-medium text-orange-500 opacity-50">|</span>
          <span className="text-sm font-medium text-orange-500 opacity-50">AR</span>
        </div>
      </div>
    </div>
  );

  // Don't render dynamic content until client-side hydration is complete
  if (!isClient || !mounted) {
    return staticSwitch;
  }

  const handleFrClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLanguage('fr');
  };

  const handleArClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLanguage('ar');
  };

  return (
    <div className="relative w-[120px] h-[34px] rounded-lg cursor-pointer select-none hover:bg-gray-50/50 transition-colors duration-200 overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <span 
            onClick={handleFrClick}
            className={`text-sm font-medium text-orange-500 transition-opacity duration-200 hover:opacity-80 ${language !== 'fr' ? 'opacity-50' : ''}`}
          >
            FR
          </span>
          <span className="text-sm font-medium text-orange-500 opacity-50">|</span>
          <span 
            onClick={handleArClick}
            className={`text-sm font-medium text-orange-500 transition-opacity duration-200 hover:opacity-80 ${language !== 'ar' ? 'opacity-50' : ''}`}
          >
            AR
          </span>
        </div>
      </div>
    </div>
  );
}
