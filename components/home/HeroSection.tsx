"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/context/TranslationContext";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { t, dir } = useTranslation();

  return (
    <section
      className="relative h-[80vh] flex items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
      dir={dir}
    >
      <div className="absolute inset-0 opacity-20 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span dangerouslySetInnerHTML={{
              __html: t('home.hero.title').replace(
                /([A-Za-zÀ-ÖØ-öø-ÿ]+)(\s+[A-Za-zÀ-ÖØ-öø-ÿ]+)?$/i,
                '<span class="text-orange-500">$&</span>'
              )
            }} />
          </motion.h1>

          <motion.div
            className="w-20 h-1 bg-orange-500 mb-6"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>

          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t('home.hero.subtitle')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300">
              <Link href="/products" className="flex items-center">
                {t('home.hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
