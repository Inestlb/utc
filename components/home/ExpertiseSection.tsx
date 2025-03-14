"use client";

import { Droplet, Beaker, Apple, Bot } from "lucide-react";
import { useTranslation } from "@/lib/context/TranslationContext";
import { motion } from "framer-motion";

export default function ExpertiseSection() {
  const { t, dir } = useTranslation();

  return (
    <section className="py-20 bg-gray-50" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('expertise.title')}
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-orange-500 mx-auto mb-6"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t('expertise.description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Secteur 1: Hygiène */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow group hover:border-orange-500">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-orange-100">
              <Droplet className="h-8 w-8 text-blue-600 group-hover:text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-orange-500">
              {t('expertise.hygiene.title')}
            </h3>
            <p className="text-gray-600 text-center">
              {t('expertise.hygiene.description')}
            </p>
          </div>

          {/* Secteur 2: Pharmaceutique */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow group hover:border-orange-500">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-orange-100">
              <Beaker className="h-8 w-8 text-green-600 group-hover:text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-orange-500">
              {t('expertise.pharmaceutical.title')}
            </h3>
            <p className="text-gray-600 text-center">
              {t('expertise.pharmaceutical.description')}
            </p>
          </div>

          {/* Secteur 3: Agroalimentaire */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow group hover:border-orange-500">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-orange-100">
              <Apple className="h-8 w-8 text-yellow-600 group-hover:text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-orange-500">
              {t('expertise.food.title')}
            </h3>
            <p className="text-gray-600 text-center">
              {t('expertise.food.description')}
            </p>
          </div>

          {/* Secteur 4: Robotique */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow group hover:border-orange-500">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-orange-100">
              <Bot className="h-8 w-8 text-purple-600 group-hover:text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-orange-500">
              {t('expertise.robotics.title')}
            </h3>
            <p className="text-gray-600 text-center">
              {t('expertise.robotics.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
