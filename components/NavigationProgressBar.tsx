'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function NavigationProgressBar() {
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;

    const startProgress = () => {
      setIsNavigating(true);
      setProgress(0);

      intervalId = setInterval(() => {
        setProgress((prev) => {
          // Progression rapide jusqu'à 80%, puis ralentissement
          if (prev < 80) {
            return prev + (Math.random() * 10);
          } else if (prev < 98) {
            return prev + (Math.random() * 2);
          }
          return prev;
        });
      }, 100);
    };

    const completeProgress = () => {
      clearInterval(intervalId);
      setProgress(100);
      
      // Masquer la barre après la fin de l'animation
      timeoutId = setTimeout(() => {
        setIsNavigating(false);
        setProgress(0);
      }, 500);
    };

    startProgress();
    completeProgress();

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [pathname, searchParams]);

  if (!isNavigating && progress === 0) {
    return null;
  }

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-1 bg-orange-500 z-50 transition-transform duration-300 ease-out"
      style={{ 
        transform: `translateX(${progress - 100}%)`,
        opacity: progress === 100 ? '0' : '1',
        transition: progress === 100 ? 'transform 300ms ease-out, opacity 500ms ease-out' : 'transform 300ms ease-out'
      }}
    />
  );
} 