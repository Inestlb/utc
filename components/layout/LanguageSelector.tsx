"use client";

import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useTranslation, Language } from '@/lib/context/TranslationContext';

export default function LanguageSelector() {
  const { language, setLanguage, isClient } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Mark component as mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Static button for server-side rendering
  const staticButton = (
    <Button
      variant="ghost"
      size="sm"
      className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100"
    >
      <Globe className="h-4 w-4 text-orange-500" />
      <span className="text-sm font-medium">FR</span>
    </Button>
  );

  // Don't render dynamic content until client-side hydration is complete
  if (!isClient || !mounted) {
    return staticButton;
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100"
        >
          <Globe className="h-4 w-4 text-orange-500" />
          <span className="text-sm font-medium">{language.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        <DropdownMenuItem
          className={`${language === 'fr' ? 'text-orange-500 font-medium bg-orange-50' : ''}`}
          onClick={() => handleLanguageChange('fr')}
        >
          Français
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`${language === 'ar' ? 'text-orange-500 font-medium bg-orange-50' : ''}`}
          onClick={() => handleLanguageChange('ar')}
        >
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
