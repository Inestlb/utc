"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/context/TranslationContext";

export default function HeroSection() {
  const { t, dir } = useTranslation();

  return (
    <section
      className="relative h-[80vh] flex items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white"
      dir={dir}
    >
      <div className="absolute inset-0 opacity-20 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="/products">
                {t('home.hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">
                {t('button.contact')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
