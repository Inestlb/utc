"use client";

import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import ContactForm from '@/components/forms/ContactForm';
import { motion } from 'framer-motion';

export default function MailButtonFixed() {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [moveY, setMoveY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);

  // Only run on client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Déterminer la direction du scroll
      const direction = currentScrollY > lastScrollY ? 1 : -1;
      setScrollDirection(direction);

      // Mettre à jour la position du bouton en fonction de la direction
      setMoveY(prev => {
        if (direction === 1) { // Scroll vers le bas
          return Math.min(prev + 5, 20); // Plus doux vers le bas
        } else { // Scroll vers le haut
          return Math.max(prev - 15, -220); // Plus haut vers le haut
        }
      });
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted, lastScrollY]);

  // Effet pour réinitialiser progressivement la position du bouton
  useEffect(() => {
    if (!scrollDirection) return;

    const timer = setTimeout(() => {
      setMoveY(prev => {
        if (Math.abs(prev) < 1) return 0;
        return prev * 0.94; // Retour plus progressif
      });
    }, 100); // Délai plus long pour plus de fluidité

    return () => clearTimeout(timer);
  }, [moveY, scrollDirection]);

  // Don't render anything on server or on contact page
  if (!isMounted || pathname === '/contact') {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          className="fixed bottom-16 right-10 bg-orange-500 text-white p-6 rounded-full shadow-lg hover:bg-orange-600 hover:scale-110 hover:shadow-xl active:scale-95 transition-all duration-300 ease-in-out z-50 group"
          animate={{
            y: moveY
          }}
          transition={{
            type: "spring",
            stiffness: 300, // Plus doux
            damping: 35,    // Plus de stabilité
            mass: 0.9,      // Un peu plus lourd pour plus de fluidité
            velocity: 1.5   // Vitesse initiale modérée
          }}
          aria-label="Ouvrir le formulaire de contact"
        >
          <Mail className="h-8 w-8 group-hover:animate-bounce" />
        </motion.button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            <span className="text-orange-500">Contactez</span>-Nous
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <ContactForm isCompact={true} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
