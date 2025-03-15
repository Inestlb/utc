"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from '@/lib/context/TranslationContext';

// Static French translations for server-side rendering
const staticTranslations: Record<string, string> = {
  'nav.home': 'Accueil',
  'nav.products': 'Produits',
  'nav.about': 'Société',
  'nav.partners': 'Partenaires',
  'nav.contact': 'Contact',
  'footer.rights': 'Tous droits réservés',
  'footer.company': 'UTC Industrie',
  'footer.quickLinks': 'Liens Rapides',
  'footer.productCategories': 'Catégories de Produits',
  'footer.description': 'Fournisseur de produits industriels de haute qualité pour l\'exportation mondiale depuis 1985.',
  'footer.privacy': 'Politique de Confidentialité',
  'footer.terms': 'Conditions d\'Utilisation',
  'footer.sitemap': 'Plan du Site',
  'products.categories.pumps': 'Pompes',
  'products.categories.valves': 'Vannes',
  'products.categories.compressors': 'Compresseurs',
  'products.categories.exchangers': 'Échangeurs de Chaleur',
  'products.categories.filtration': 'Systèmes de Filtration',
};

export default function Footer() {
  const { t, dir, isClient } = useTranslation();

  // Helper function to get text content safely during SSR
  const getTextContent = (key: string) => {
    if (isClient) {
      return t(key);
    }
    return staticTranslations[key] || key;
  };

  return (
    <footer className="bg-gray-900 text-white" dir={dir}>
      <div className="container mx-auto px-2 sm:px-3 lg:px-4 max-w-[1400px] py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">
              {getTextContent('footer.company')}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {getTextContent('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {getTextContent('footer.quickLinks')}
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  {getTextContent('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  {getTextContent('nav.products')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  {getTextContent('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  {getTextContent('nav.partners')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  {getTextContent('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {getTextContent('nav.contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  450 Rue Baden Powell, Espace Optimum, Montpellier, 34000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:info@industrialexport.com" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  info@industrialexport.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {getTextContent('footer.company')}. {getTextContent('footer.rights')}
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                {getTextContent('footer.privacy')}
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                {getTextContent('footer.terms')}
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                {getTextContent('footer.sitemap')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
