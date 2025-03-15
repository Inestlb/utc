"use client";

import { useTranslation } from "@/lib/context/TranslationContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Cpu, Cog, Wrench } from "lucide-react";

export default function SolutionsSection() {
  const { t, dir } = useTranslation();

  return (
    <section className="py-20 bg-gray-50" dir={dir}>
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[1600px]">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t('home.solutions.title')}
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-orange-500 mx-auto mb-6"
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
              className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Cpu className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Automatismes</h3>
                <p className="text-gray-600 text-center">
                  Solutions d&apos;automatisation industrielle complètes pour optimiser vos processus de production et améliorer l&apos;efficacité opérationnelle.
                </p>
              </div>
            </motion.div>

            {/* Solution 2: Drive Parts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Cog className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Entraînements</h3>
                <p className="text-gray-600 text-center">
                  Composants et pièces d&apos;entraînement de haute qualité pour assurer la performance et la fiabilité de vos équipements industriels.
                </p>
              </div>
            </motion.div>

            {/* Solution 3: Custom Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Wrench className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Sur Mesure</h3>
                <p className="text-gray-600 text-center">
                  Solutions sur mesure adaptées à vos besoins spécifiques, conçues pour répondre aux défis uniques de votre industrie.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
