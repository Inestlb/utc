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
    <div className="relative w-[90px] h-[40px] bg-gray-100 rounded-full cursor-pointer">
      <div className="absolute left-1 top-1 w-[34px] h-[34px] bg-white rounded-full shadow-md flex items-center justify-center">
        <span className="text-sm font-medium text-gray-600">FR</span>
      </div>
    </div>
  );

  // Don't render dynamic content until client-side hydration is complete
  if (!isClient || !mounted) {
    return staticSwitch;
  }

  return (
    <div
      onClick={handleLanguageChange}
      className="relative w-[90px] h-[40px] bg-gray-100 rounded-full cursor-pointer select-none hover:bg-gray-200 transition-colors duration-200"
    >
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-between px-3 font-medium">
        <span className={`text-sm transition-colors duration-200 ${
          language === 'fr' 
            ? 'opacity-0' 
            : 'text-gray-600'
        }`}>FR</span>
        <span className={`text-sm transition-colors duration-200 ${
          language === 'ar' 
            ? 'opacity-0' 
            : 'text-gray-600'
        }`} dir="rtl">ع</span>
      </div>
      
      {/* Animated circle */}
      <motion.div
        className="absolute top-1 w-[34px] h-[34px] bg-white rounded-full shadow-md flex items-center justify-center"
        animate={{
          left: language === 'fr' ? '4px' : 'calc(100% - 38px)',
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <span className="text-sm font-medium text-gray-600">
          {language === 'fr' ? 'FR' : 'ع'}
        </span>
      </motion.div>
    </div>
  );
}
