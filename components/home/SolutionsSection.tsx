"use client";

import { useTranslation } from "@/lib/context/TranslationContext";

export default function SolutionsSection() {
  const { t, dir } = useTranslation();

  return (
    <section className="py-20" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('home.solutions.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('home.solutions.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Solution 1: Automation */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all hover:border-orange-500 group">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 mx-auto group-hover:bg-orange-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 group-hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-orange-500">Automatismes</h3>
            <p className="text-gray-600 text-center">
              Solutions d&apos;automatisation industrielle complètes pour optimiser vos processus de production et améliorer l&apos;efficacité opérationnelle.
            </p>
          </div>

          {/* Solution 2: Drive Parts */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all hover:border-orange-500 group">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 mx-auto group-hover:bg-orange-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 group-hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-orange-500">Entraînements</h3>
            <p className="text-gray-600 text-center">
              Composants et pièces d&apos;entraînement de haute qualité pour assurer la performance et la fiabilité de vos équipements industriels.
            </p>
          </div>

          {/* Solution 3: Custom Solutions */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all hover:border-orange-500 group">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 mx-auto group-hover:bg-orange-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 group-hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-orange-500">Sur Mesure</h3>
            <p className="text-gray-600 text-center">
              Solutions sur mesure adaptées à vos besoins spécifiques, conçues pour répondre aux défis uniques de votre industrie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
