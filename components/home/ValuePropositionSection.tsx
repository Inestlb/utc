"use client";

import { CheckCircle, Shield, Globe, Headphones } from "lucide-react";
import { useTranslation } from "@/lib/context/TranslationContext";
import { motion } from "framer-motion";

export default function ValuePropositionSection() {
  const { t, dir } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('home.features.title').split(' ').map((word, i, arr) =>
              i === arr.length - 1
                ? <span key={i} className="text-orange-500">{word}</span>
                : <span key={i}>{word} </span>
            )}
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
            Nous fournissons des solutions industrielles complètes avec un accent sur la qualité,
            la fiabilité et la satisfaction du client.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Value Prop 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="h-2 bg-orange-500"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Assurance Qualité</h3>
              <p className="text-gray-600 text-center">
                Tous nos produits subissent des tests rigoureux et un contrôle de qualité pour garantir
                qu'ils répondent aux normes et spécifications internationales.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-sm text-gray-600">Certifications internationales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-sm text-gray-600">Tests de performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-sm text-gray-600">Garantie fabricant</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Value Prop 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="h-2 bg-orange-500"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Globe className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Expédition Mondiale</h3>
              <p className="text-gray-600 text-center">
                Nous offrons une expédition mondiale avec des solutions logistiques efficaces, garantissant
                que vos commandes arrivent à temps et en parfait état.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-sm text-gray-600">Livraison rapide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-sm text-gray-600">Suivi en temps réel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-sm text-gray-600">Emballage sécurisé</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Value Prop 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="h-2 bg-orange-500"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Headphones className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Support Technique</h3>
              <p className="text-gray-600 text-center">
                Notre équipe d'experts fournit un support technique complet et
                des consultations pour tous nos produits et solutions.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-sm text-gray-600">Assistance 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-sm text-gray-600">Experts qualifiés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-sm text-gray-600">Documentation complète</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
