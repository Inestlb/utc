"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import NavbarSearch from './NavbarSearch';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '@/lib/context/TranslationContext';

// Type pour les liens de navigation
interface NavLink {
  key: string;
  href: string;
  highlight?: boolean;
}

// Liens de navigation principaux
const mainNavLinks: NavLink[] = [
  { key: 'nav.products', href: '/products' },
  { key: 'nav.about', href: '/about' },
  { key: 'nav.partners', href: '/blog' },
];

// Lien Contact séparé
const contactLink: NavLink = { key: 'nav.contact', href: '/contact', highlight: true };

// Tous les liens pour le menu mobile
const allNavLinks: NavLink[] = [...mainNavLinks, contactLink];

// Static French translations for server-side rendering
const staticTranslations: Record<string, string> = {
  'nav.home': 'Accueil',
  'nav.products': 'Produits',
  'nav.about': 'Société',
  'nav.partners': 'Partenaires',
  'nav.contact': 'Contact',
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { t, dir, isClient } = useTranslation();

  // Handle transparent navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to get text content safely during SSR
  const getTextContent = (key: string) => {
    if (isClient) {
      return t(key);
    }
    return staticTranslations[key] || key;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg border-b border-orange-100'
          : 'bg-white/95 backdrop-blur-sm shadow-md border-b border-orange-50'
      }`}
      dir={dir}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18 md:h-22">
          {/* Left section: Logo and main navigation */}
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center mr-16">
              <div className="flex items-center justify-center -mt-3">
                <Image
                  src="/images/LOGO-UTC.svg"
                  alt="UTC Logo"
                  width={200}
                  height={200}
                  priority={true}
                  className="h-[115px] w-auto"
                />
              </div>
            </Link>

            {/* Main navigation links (desktop only) */}
            <nav className="hidden md:flex items-center space-x-10">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base md:text-lg font-medium transition-colors hover:text-orange-500 ${
                    pathname === link.href
                      ? 'text-orange-500 font-bold'
                      : isScrolled
                      ? 'text-text'
                      : 'text-text'
                  }`}
                >
                  {getTextContent(link.key)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right section: Search, Language, Contact */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <NavbarSearch />

            {/* Language Selector */}
            <LanguageSelector />

            {/* Contact link */}
            <Link
              href={contactLink.href}
              className={`text-sm font-medium transition-colors border border-gray-300 rounded-lg px-4 py-2 hover:text-orange-500 hover:border-orange-500 flex items-center gap-1.5 ${
                pathname === contactLink.href
                  ? 'text-orange-500 font-bold border-orange-500'
                  : isScrolled
                  ? 'text-text'
                  : 'text-text'
              }`}
            >
              <Mail className="h-4 w-4" />
              {getTextContent(contactLink.key)}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu" className="hover:text-orange-500">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-l-orange-500">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Mobile Search Bar */}
                  <div className="mb-2">
                    <NavbarSearch />
                  </div>

                  {/* Mobile Language Selector */}
                  <div className="mb-2">
                    <LanguageSelector />
                  </div>

                  {/* Mobile navigation links */}
                  {allNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-base font-medium transition-colors ${
                        link.highlight
                          ? pathname === link.href
                            ? 'bg-orange-500 text-white border-2 border-orange-500 px-2 py-2 rounded-lg inline-flex items-center gap-1.5'
                            : 'border-2 border-orange-500 text-orange-500 px-2 py-2 rounded-lg inline-flex items-center gap-1.5 hover:bg-orange-500 hover:text-white'
                          : 'hover:text-orange-500'
                      } ${
                        pathname === link.href && !link.highlight
                          ? 'text-orange-500 font-bold'
                          : !link.highlight ? 'text-text' : ''
                      }`}
                    >
                      {link.key === 'nav.contact' && <Mail className="h-4 w-4" />}
                      {getTextContent(link.key)}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
