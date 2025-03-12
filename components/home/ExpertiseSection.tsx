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
            Secteurs d'Expertise
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
            Nous proposons des solutions spécialisées pour répondre aux besoins spécifiques
            de différents secteurs industriels.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Secteur 1: Hygiène */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow group hover:border-orange-500">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-orange-100">
              <Droplet className="h-8 w-8 text-blue-600 group-hover:text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-orange-500">Hygiène</h3>
            <p className="text-gray-600 text-center">
              Équipements et solutions pour les industries nécessitant des normes d'hygiène strictes,
              avec des matériaux conformes aux réglementations sanitaires.
            </p>
          </div>

          {/* Secteur 2: Pharmaceutique */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow group hover:border-orange-500">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-orange-100">
              <Beaker className="h-8 w-8 text-green-600 group-hover:text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-orange-500">Pharmaceutique</h3>
            <p className="text-gray-600 text-center">
              Solutions de précision pour l'industrie pharmaceutique, respectant les normes GMP
              et assurant la fiabilité des processus de production.
            </p>
          </div>

          {/* Secteur 3: Agroalimentaire */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow group hover:border-orange-500">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-orange-100">
              <Apple className="h-8 w-8 text-yellow-600 group-hover:text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-orange-500">Agroalimentaire</h3>
            <p className="text-gray-600 text-center">
              Équipements spécialisés pour la transformation, le conditionnement et la conservation
              des produits alimentaires, conformes aux normes HACCP.
            </p>
          </div>

          {/* Secteur 4: Robotique */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow group hover:border-orange-500">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-orange-100">
              <Bot className="h-8 w-8 text-purple-600 group-hover:text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-orange-500">Robotique</h3>
            <p className="text-gray-600 text-center">
              Solutions d'automatisation et de robotique industrielle pour optimiser les processus
              de production et améliorer l'efficacité opérationnelle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
