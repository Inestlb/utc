"use client";

import { CheckCircle } from "lucide-react";
import { useTranslation } from "@/lib/context/TranslationContext";

export default function ValuePropositionSection() {
  const { t, dir } = useTranslation();

  return (
    <section className="py-20" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('home.features.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous fournissons des solutions industrielles complètes avec un accent sur la qualité,
            la fiabilité et la satisfaction du client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Value Prop 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-orange-500">
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Assurance Qualité</h3>
            <p className="text-gray-600">
              Tous nos produits subissent des tests rigoureux et un contrôle de qualité pour garantir
              qu'ils répondent aux normes et spécifications internationales.
            </p>
          </div>

          {/* Value Prop 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-orange-500">
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expédition Mondiale</h3>
            <p className="text-gray-600">
              Nous offrons une expédition mondiale avec des solutions logistiques efficaces, garantissant
              que vos commandes arrivent à temps et en parfait état.
            </p>
          </div>

          {/* Value Prop 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-orange-500">
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Support Technique</h3>
            <p className="text-gray-600">
              Notre équipe d'experts fournit un support technique complet et
              des consultations pour tous nos produits et solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
