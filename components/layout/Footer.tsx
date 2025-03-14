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
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap -mx-3">
          {/* Company Info */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
            <h3 className="text-xl font-bold mb-3 text-orange-500">
              {getTextContent('footer.company')}
            </h3>
            <p className="text-gray-400">
              {getTextContent('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
            <h3 className="text-lg font-semibold mb-3">
              {getTextContent('footer.quickLinks')}
            </h3>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {getTextContent('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {getTextContent('nav.products')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {getTextContent('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {getTextContent('nav.partners')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {getTextContent('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
            <h3 className="text-lg font-semibold mb-3">
              {getTextContent('footer.productCategories')}
            </h3>
            <ul className="space-y-1">
              <li>
                <Link href="/products?category=Pumps" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {getTextContent('products.categories.pumps')}
                </Link>
              </li>
              <li>
                <Link href="/products?category=Valves" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {getTextContent('products.categories.valves')}
                </Link>
              </li>
              <li>
                <Link href="/products?category=Compressors" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {getTextContent('products.categories.compressors')}
                </Link>
              </li>
              <li>
                <Link href="/products?category=Heat Exchangers" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {getTextContent('products.categories.exchangers')}
                </Link>
              </li>
              <li>
                <Link href="/products?category=Filtration" className="text-gray-400 hover:text-orange-500 transition-colors">
                  {getTextContent('products.categories.filtration')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
            <h3 className="text-lg font-semibold mb-3">
              {getTextContent('nav.contact')}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className={`mr-2 h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5 ${dir === 'rtl' ? 'ml-2 mr-0' : ''}`} />
                <span className="text-gray-400">
                  450 Rue Baden Powell, Espace Optimum, Montpellier, 34000
                </span>
              </li>
              <li className="flex items-center">
                <Phone className={`mr-2 h-5 w-5 text-orange-500 flex-shrink-0 ${dir === 'rtl' ? 'ml-2 mr-0' : ''}`} />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-orange-500 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className={`mr-2 h-5 w-5 text-orange-500 flex-shrink-0 ${dir === 'rtl' ? 'ml-2 mr-0' : ''}`} />
                <a href="mailto:info@industrialexport.com" className="text-gray-400 hover:text-orange-500 transition-colors">
                  info@industrialexport.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-4 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {getTextContent('footer.company')}. {getTextContent('footer.rights')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
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
