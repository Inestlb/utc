"use client";

import { useState, useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClientContactButtonWrapper from "@/components/ClientContactButtonWrapper";
import { TranslationProvider } from "@/lib/context/TranslationContext";
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    
    // Simule un chargement initial rapide
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Animations pour les transitions de page
  const pageVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }
    },
    exit: { 
      opacity: 0, 
      transition: { 
        duration: 0.2, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }
    }
  };

  // Pendant le chargement initial, afficher un écran de chargement élégant
  if (isLoading) {
    return (
      <TranslationProvider>
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 rounded-full border-4 border-t-orange-500 border-r-orange-300 border-b-orange-200 border-l-orange-100 animate-spin"></div>
          </div>
        </div>
      </TranslationProvider>
    );
  }

  // Si non monté (SSR), afficher une version simplifiée
  if (!isMounted) {
    return (
      <TranslationProvider>
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-orange-50 h-18 md:h-22"></div>
        <main className="flex-grow pt-16 md:pt-20">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-10"></footer>
      </TranslationProvider>
    );
  }

  // Version complète avec animations
  return (
    <TranslationProvider>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main 
          key={pathname}
          className="flex-grow pt-16 md:pt-20"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={pageVariants}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ClientContactButtonWrapper />
    </TranslationProvider>
  );
}
