"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/context/TranslationContext";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { t, dir } = useTranslation();

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-30"></div>
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[1600px] px-12 flex flex-col justify-center min-h-screen text-white">
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
      </div>
    </section>
  );
}
