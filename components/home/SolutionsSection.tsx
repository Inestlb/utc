"use client";

import { useTranslation } from "@/lib/context/TranslationContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SolutionsSection() {
  const { t, dir } = useTranslation();

  return (
    <section className="py-20 bg-gray-50" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('home.solutions.title')}
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-primary mx-auto mb-6"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t('home.solutions.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Solution 1: Automation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl border-t-4 border-primary">
              <div className="p-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center group-hover:text-primary transition-colors duration-300">Automatismes</h3>
                <p className="text-gray-700 text-center">
                  Solutions d&apos;automatisation industrielle complètes pour optimiser vos processus de production et améliorer l&apos;efficacité opérationnelle.
                </p>
              </div>
              <div className="mt-auto px-6 pb-6 text-center">
                <Link href="/solutions/automation" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors duration-300">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Solution 2: Drive Parts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl border-t-4 border-accent">
              <div className="p-8">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center group-hover:text-accent transition-colors duration-300">Entraînements</h3>
                <p className="text-gray-700 text-center">
                  Composants et pièces d&apos;entraînement de haute qualité pour assurer la performance et la fiabilité de vos équipements industriels.
                </p>
              </div>
              <div className="mt-auto px-6 pb-6 text-center">
                <Link href="/solutions/drives" className="inline-flex items-center text-accent font-medium hover:text-accent-dark transition-colors duration-300">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Solution 3: Custom Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl border-t-4 border-accent-secondary">
              <div className="p-8">
                <div className="w-16 h-16 bg-accent-secondary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center group-hover:text-accent-secondary transition-colors duration-300">Sur Mesure</h3>
                <p className="text-gray-700 text-center">
                  Solutions sur mesure adaptées à vos besoins spécifiques, conçues pour répondre aux défis uniques de votre industrie.
                </p>
              </div>
              <div className="mt-auto px-6 pb-6 text-center">
                <Link href="/solutions/custom" className="inline-flex items-center text-accent-secondary font-medium hover:text-accent-secondary/80 transition-colors duration-300">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
