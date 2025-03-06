"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

// Type pour les liens de navigation
interface NavLink {
  name: string;
  href: string;
  highlight?: boolean;
}

// Liens de navigation principaux (sans Contact)
const mainNavLinks: NavLink[] = [
  { name: 'Accueil', href: '/' },
  { name: 'Produits', href: '/products' },
  { name: 'Société', href: '/about' },
  { name: 'Partenaires', href: '/blog' },
];

// Lien Contact séparé
const contactLink: NavLink = { name: 'Contact', href: '/contact', highlight: true };

// Tous les liens pour le menu mobile
const allNavLinks: NavLink[] = [...mainNavLinks, contactLink];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle transparent navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo (à gauche) */}
          <Link href="/" className="flex items-center">
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

          {/* Menu principal centré (visible uniquement sur desktop) */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <nav className="flex items-center space-x-8">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                    pathname === link.href
                      ? 'text-orange-500 font-bold'
                      : isScrolled
                      ? 'text-text'
                      : 'text-text'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact link (à droite) */}
          <div className="hidden md:flex items-center">
            <Link
              href={contactLink.href}
              className={`text-sm font-medium transition-colors border border-gray-300 rounded-lg px-3 py-1.5 hover:text-orange-500 hover:border-orange-500 flex items-center gap-1.5 ${
                pathname === contactLink.href
                  ? 'text-orange-500 font-bold border-orange-500'
                  : isScrolled
                  ? 'text-text'
                  : 'text-text'
              }`}
            >
              <Mail className="h-4 w-4" />
              {contactLink.name}
            </Link>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu" className="hover:text-orange-500">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-l-orange-500">
                <div className="flex flex-col space-y-4 mt-8">
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
                      {link.name === 'Contact' && <Mail className="h-4 w-4" />}
                      {link.name}
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
