"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import NavbarSearch from './NavbarSearch';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '@/lib/context/TranslationContext';

// Type pour les liens de navigation
interface NavLink {
  key: string;
  href: string;
  highlight?: boolean;
  hasSubmenu?: boolean;
  submenu?: SubMenuItem[];
}

interface SubMenuItem {
  name: string;
  href: string;
  logo?: string;
}

// Liens de navigation principaux
const mainNavLinks: NavLink[] = [
  {
    key: 'nav.products',
    href: '/products',
    hasSubmenu: true,
    submenu: [
      {
        name: 'Lenze',
        href: '/products?brand=lenze',
        logo: '/images/logo-Lenze.svg'
      },
      {
        name: 'IFM',
        href: '/products?brand=ifm',
        logo: '/images/logo-ifm.svg'
      },
      {
        name: 'Wago',
        href: '/products?brand=wago',
        logo: '/images/logo-WAGO.svg'
      }
    ]
  },
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
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isProductsHovered, setIsProductsHovered] = useState(false);

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
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[1600px] flex items-center justify-between h-20 md:h-24 px-4">
          {/* Left section: Logo and main navigation */}
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center mr-12">
              <div className="flex items-center justify-center -mt-2">
                <Image
                  src="/images/LOGO-UTC.svg"
                  alt="UTC Logo"
                  width={200}
                  height={200}
                  priority={true}
                  className="h-[95px] w-auto"
                />
              </div>
            </Link>

            {/* Main navigation links (desktop only) */}
            <nav className="hidden md:flex items-center space-x-8">
              {mainNavLinks.map((link) => (
                link.hasSubmenu ? (
                  <div
                    key={link.href}
                    className="relative group"
                    onMouseEnter={() => setIsProductsHovered(true)}
                    onMouseLeave={() => setIsProductsHovered(false)}
                  >
                    <button
                      className={`text-sm md:text-base font-medium transition-colors hover:text-orange-500 flex items-center gap-1 ${
                        pathname.startsWith(link.href)
                          ? 'text-orange-500 font-bold'
                          : isScrolled
                          ? 'text-text'
                          : 'text-text'
                      }`}
                    >
                      {getTextContent(link.key)}
                      <ChevronDown className={`h-3.5 w-3.5 opacity-70 transition-transform duration-300 ${isProductsHovered ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Menu déroulant au survol */}
                    <div
                      className={`absolute left-0 mt-2 w-[280px] p-3 bg-white rounded-md shadow-lg border border-gray-100 transition-all duration-300 ${
                        isProductsHovered
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="grid gap-2">
                        {link.submenu?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center p-3 rounded-md hover:bg-orange-50 transition-colors duration-200"
                          >
                            <div className="flex-shrink-0 h-10 w-10 mr-3 flex items-center justify-center">
                              {item.logo && (
                                <Image
                                  src={item.logo}
                                  alt={item.name}
                                  width={30}
                                  height={30}
                                  className="object-contain"
                                />
                              )}
                            </div>
                            <div className="font-medium">{item.name}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm md:text-base font-medium transition-colors hover:text-orange-500 relative group ${
                      pathname === link.href
                        ? 'text-orange-500 font-bold'
                        : isScrolled
                        ? 'text-text'
                        : 'text-text'
                    }`}
                  >
                    {getTextContent(link.key)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )
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
              className={`text-sm font-medium transition-all duration-300 rounded-lg px-4 py-2 flex items-center gap-1.5 ${
                pathname === contactLink.href
                  ? 'bg-orange-500 text-white'
                  : 'bg-orange-500 text-white hover:bg-orange-600'
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
                <Button variant="ghost" size="icon" aria-label="Menu" className="hover:text-orange-500 transition-colors duration-300">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-l-orange-500 w-[85vw] max-w-[350px]">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Search Bar */}
                  <div className="mb-2">
                    <NavbarSearch />
                  </div>

                  {/* Mobile Language Selector */}
                  <div className="mb-2">
                    <LanguageSelector />
                  </div>

                  {/* Mobile navigation links */}
                  <div className="space-y-4">
                    {allNavLinks.map((link) => (
                      <div key={link.href} className="border-b border-gray-100 pb-3">
                        {link.hasSubmenu ? (
                          <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center justify-between w-full text-left">
                              <span className={`text-lg font-medium ${pathname.startsWith(link.href) ? 'text-orange-500' : ''}`}>
                                {getTextContent(link.key)}
                              </span>
                              <ChevronDown className="h-4 w-4 opacity-70" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-full">
                              {link.submenu?.map((item) => (
                                <DropdownMenuItem key={item.href} asChild>
                                  <Link href={item.href} className="flex items-center w-full p-2">
                                    {item.logo && (
                                      <div className="mr-2 h-6 w-6 flex-shrink-0">
                                        <Image
                                          src={item.logo}
                                          alt={item.name}
                                          width={24}
                                          height={24}
                                          className="object-contain"
                                        />
                                      </div>
                                    )}
                                    <span>{item.name}</span>
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ) : (
                          <Link
                            href={link.href}
                            className={`block text-lg font-medium transition-colors hover:text-orange-500 ${
                              pathname === link.href ? 'text-orange-500' : ''
                            } ${link.highlight ? 'mt-6 bg-orange-500 text-white hover:text-white px-4 py-2 rounded-lg text-center' : ''}`}
                          >
                            {getTextContent(link.key)}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
