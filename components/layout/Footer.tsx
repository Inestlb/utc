"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/lib/context/TranslationContext';
import { ArrowRight } from 'lucide-react';

// Static French translations for server-side rendering
const staticTranslations: Record<string, string> = {
  'nav.home': 'Accueil',
  'nav.products': 'Produits',
  'nav.about': 'Société',
  'nav.partners': 'Partenaires',
  'nav.contact': 'Contactez-nous',
  'footer.rights': 'Tous droits réservés',
  'footer.quickLinks': 'Liens Rapides',
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
      {/* Top border line */}
      <div className="w-full border-t border-white/20"></div>
      
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[1600px] py-12 px-12">
          {/* Top section with logo and contact */}
          <div className="flex justify-between items-center mb-6">
            {/* Logo and tagline */}
            <div className="flex items-center -ml-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/LOGO-UTC.svg"
                  alt="UTC Logo"
                  width={220}
                  height={220}
                  className="h-[110px] w-auto"
                  quality={100}
                />
              </Link>
            </div>

            {/* Contact button */}
            <Link 
              href="/contact" 
              className="group inline-flex items-center text-white hover:text-orange-500 transition-colors duration-200 text-base font-medium underline decoration-1 underline-offset-8"
            >
              Contactez-nous
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-12 gap-8">
            {/* Quick Links Section */}
            <div className="col-span-3">
              <ul className="space-y-6">
                <li>
                  <Link href="/" className="text-white hover:text-orange-500 transition-colors duration-200 underline decoration-1 underline-offset-4">
                    {getTextContent('nav.home')}
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-white hover:text-orange-500 transition-colors duration-200 underline decoration-1 underline-offset-4">
                    {getTextContent('nav.products')}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white hover:text-orange-500 transition-colors duration-200 underline decoration-1 underline-offset-4">
                    {getTextContent('nav.about')}
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-white hover:text-orange-500 transition-colors duration-200 underline decoration-1 underline-offset-4">
                    {getTextContent('nav.partners')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section with legal links and copyright */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-white">
                <Link href="/legal" className="hover:text-orange-500 transition-colors duration-200">
                  Mentions légales
                </Link>
                <span className="text-white/60">|</span>
                <Link href="/privacy-policy" className="hover:text-orange-500 transition-colors duration-200">
                  Politique de confidentialité
                </Link>
                <span className="text-white/60">|</span>
                <Link href="/terms-of-service" className="hover:text-orange-500 transition-colors duration-200">
                  Conditions d'utilisation
                </Link>
                <span className="text-white/60">|</span>
                <Link href="/general" className="hover:text-orange-500 transition-colors duration-200">
                  Conditions générales
                </Link>
                <span className="text-white/60">|</span>
                <Link href="/cookies" className="hover:text-orange-500 transition-colors duration-200">
                  Gestion des cookies
                </Link>
              </div>
              <div className="text-sm text-white">
                © {new Date().getFullYear()} UTC Industrie
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
