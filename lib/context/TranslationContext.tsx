"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the available languages
export type Language = 'fr' | 'ar';

// Define the translation data structure
interface Translations {
  [key: string]: {
    fr: string;
    ar: string;
  };
}

// Sample translations for demonstration
const translations: Translations = {
  // Navigation
  'nav.home': {
    fr: 'Accueil',
    ar: 'الرئيسية'
  },
  'nav.products': {
    fr: 'Produits',
    ar: 'المنتجات'
  },
  'nav.about': {
    fr: 'Société',
    ar: 'الشركة'
  },
  'nav.partners': {
    fr: 'Partenaires',
    ar: 'الشركاء'
  },
  'nav.contact': {
    fr: 'Contact',
    ar: 'اتصل بنا'
  },

  // Search
  'search.placeholder': {
    fr: 'Rechercher...',
    ar: 'بحث...'
  },

  // Home Page
  'home.hero.title': {
    fr: 'Solutions Industrielles de Qualité Supérieure',
    ar: 'حلول صناعية عالية الجودة'
  },
  'home.hero.subtitle': {
    fr: 'Votre partenaire de confiance pour l\'exportation industrielle',
    ar: 'شريكك الموثوق للتصدير الصناعي'
  },
  'home.hero.cta': {
    fr: 'Découvrir nos produits',
    ar: 'اكتشف منتجاتنا'
  },
  'home.features.title': {
    fr: 'Pourquoi nous choisir',
    ar: 'لماذا تختارنا'
  },
  'home.solutions.title': {
    fr: 'Nos Solutions',
    ar: 'حلولنا'
  },
  'home.solutions.subtitle': {
    fr: 'Des solutions adaptées à vos besoins industriels',
    ar: 'حلول مخصصة لاحتياجاتك الصناعية'
  },

  // Products Page
  'products.title': {
    fr: 'Nos Produits',
    ar: 'منتجاتنا'
  },
  'products.subtitle': {
    fr: 'Découvrez notre gamme complète de produits industriels',
    ar: 'اكتشف مجموعتنا الكاملة من المنتجات الصناعية'
  },
  'products.filter.all': {
    fr: 'Tous',
    ar: 'الكل'
  },
  'products.filter.category': {
    fr: 'Catégorie',
    ar: 'الفئة'
  },
  'products.filter.price': {
    fr: 'Prix',
    ar: 'السعر'
  },
  'products.noResults': {
    fr: 'Aucun produit trouvé',
    ar: 'لم يتم العثور على منتجات'
  },
  'products.viewDetails': {
    fr: 'Voir les détails',
    ar: 'عرض التفاصيل'
  },

  // About Page
  'about.title': {
    fr: 'Notre Société',
    ar: 'شركتنا'
  },
  'about.subtitle': {
    fr: 'Découvrez notre histoire et nos valeurs',
    ar: 'اكتشف قصتنا وقيمنا'
  },
  'about.mission.title': {
    fr: 'Notre Mission',
    ar: 'مهمتنا'
  },
  'about.vision.title': {
    fr: 'Notre Vision',
    ar: 'رؤيتنا'
  },
  'about.values.title': {
    fr: 'Nos Valeurs',
    ar: 'قيمنا'
  },

  // Partners Page
  'partners.title': {
    fr: 'Nos Partenaires',
    ar: 'شركاؤنا'
  },
  'partners.subtitle': {
    fr: 'Collaborations stratégiques pour des solutions optimales',
    ar: 'تعاون استراتيجي لحلول مثالية'
  },
  'partners.discover': {
    fr: 'Découvrir nos Partenaires',
    ar: 'اكتشف شركاءنا'
  },

  // Contact Page
  'contact.title': {
    fr: 'Contactez-nous',
    ar: 'اتصل بنا'
  },
  'contact.subtitle': {
    fr: 'Nous sommes à votre écoute',
    ar: 'نحن هنا للاستماع إليك'
  },
  'contact.form.name': {
    fr: 'Nom',
    ar: 'الاسم'
  },
  'contact.form.email': {
    fr: 'Email',
    ar: 'البريد الإلكتروني'
  },
  'contact.form.message': {
    fr: 'Message',
    ar: 'الرسالة'
  },
  'contact.form.submit': {
    fr: 'Envoyer',
    ar: 'إرسال'
  },

  // Common
  'button.discover': {
    fr: 'Découvrir',
    ar: 'اكتشف'
  },
  'button.contact': {
    fr: 'Nous Contacter',
    ar: 'اتصل بنا'
  },
  'button.quote': {
    fr: 'Demander un Devis',
    ar: 'طلب عرض سعر'
  },
  'button.readMore': {
    fr: 'Lire plus',
    ar: 'قراءة المزيد'
  },
  'button.viewAll': {
    fr: 'Voir tout',
    ar: 'عرض الكل'
  },
  'footer.rights': {
    fr: 'Tous droits réservés',
    ar: 'جميع الحقوق محفوظة'
  },
};

// Define the context type
interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: string;
  isClient: boolean;
}

// Create the context
const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Provider component
export function TranslationProvider({ children }: { children: ReactNode }) {
  // Default language state
  const [language, setLanguage] = useState<Language>('fr');
  const [dir, setDir] = useState<string>('ltr');
  const [isClient, setIsClient] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true);
    setMounted(true);
  }, []);

  // Update document direction when language changes
  useEffect(() => {
    if (typeof document !== 'undefined' && mounted) {
      setDir(language === 'ar' ? 'rtl' : 'ltr');
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, dir, isClient }}>
      {children}
    </TranslationContext.Provider>
  );
}

// Custom hook to use the translation context
export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
