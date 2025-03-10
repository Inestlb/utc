"use client";

import { useState, useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClientContactButtonWrapper from "@/components/ClientContactButtonWrapper";
import { TranslationProvider } from "@/lib/context/TranslationContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // During SSR and initial client render, show a simplified version
  if (!isMounted) {
    return (
      <>
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-orange-50 h-18 md:h-22"></div>
        <main className="flex-grow pt-16 md:pt-20">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-10"></footer>
      </>
    );
  }

  // Once mounted on the client, show the full version with all interactive elements
  return (
    <TranslationProvider>
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
      <ClientContactButtonWrapper />
    </TranslationProvider>
  );
}
