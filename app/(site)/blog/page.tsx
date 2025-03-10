import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Partenaires | Entreprise d\'Exportation Industrielle',
  description: 'Découvrez nos partenaires stratégiques : Lenze, Wago et IFM',
};

// Informations sur les partenaires
const partners = [
  {
    id: 1,
    name: 'Lenze',
    logo: '/images/logo-lenze.svg', // Placeholder, remplacer par le vrai logo
    description: 'Lenze est un leader mondial dans le domaine des solutions d\'entraînement et d\'automatisation. Avec plus de 70 ans d\'expérience, Lenze fournit des produits, des solutions d\'entraînement, des systèmes d\'automatisation et des services pour l\'industrie.',
    specialties: ['Automatisation', 'Entraînements', 'Moteurs', 'Contrôle de mouvement'],
    headquarters: 'Hamelin, Allemagne',
    foundedYear: 1947,
  },
  {
    id: 2,
    name: 'Wago',
    logo: '/images/logo-wago.svg', // Placeholder, remplacer par le vrai logo
    description: 'WAGO est un leader innovant dans les technologies de connexion électrique et d\'automatisation industrielle. Leurs solutions sont utilisées dans de nombreux secteurs, de la construction à l\'industrie manufacturière.',
    specialties: ['Bornes de connexion', 'Automatisation', 'Interfaces électroniques', 'Systèmes de contrôle'],
    headquarters: 'Minden, Allemagne',
    foundedYear: 1951,
  },
  {
    id: 3,
    name: 'IFM',
    logo: '/images/logo-ifm.svg',
    description: 'IFM Electronic est un fabricant mondial de capteurs, systèmes de contrôle et composants pour l\'automatisation industrielle. Avec une gamme de plus de 7 000 produits, IFM garantit des processus fiables et une efficacité accrue dans diverses applications industrielles.',
    specialties: ['Capteurs', 'Systèmes de contrôle', 'Vision industrielle', 'Systèmes d\'identification'],
    headquarters: 'Essen, Allemagne',
    foundedYear: 1969,
  }
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Nos Partenaires Stratégiques</h1>
            <p className="text-xl text-gray-300 mb-8">
              Nous collaborons avec des leaders mondiaux de l'industrie pour vous offrir des solutions de haute qualité et des technologies innovantes.
            </p>
            <div className="flex gap-4">
              <Button asChild className="bg-orange-500 hover:bg-orange-600">
                <Link href="#partners">
                  Découvrir nos Partenaires
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-orange-500">Partenaires</h2>

          <div className="grid grid-cols-1 gap-16 mt-8">
            {partners.map((partner, index) => (
              <div key={partner.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="bg-gray-50 rounded-lg p-12 flex items-center justify-center h-80">
                  {partner.name === "IFM" ? (
                    <Image
                      src="/images/logo-ifm.svg"
                      alt="IFM"
                      width={250}
                      height={250}
                      className="object-contain"
                    />
                  ) : partner.name === "Lenze" ? (
                    <Image
                      src="/images/logo-Lenze.svg"
                      alt="Lenze"
                      width={250}
                      height={76}
                      className="object-contain"
                    />
                  ) : partner.name === "Wago" ? (
                    <Image
                      src="/images/logo-WAGO.svg"
                      alt="Wago"
                      width={250}
                      height={90}
                      className="object-contain"
                    />
                  ) : (
                    <div className="font-bold text-5xl text-gray-800">{partner.name}</div>
                  )}
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">{partner.name}</h3>
                  <p className="text-gray-600 mb-6">
                    {partner.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-2">Spécialités:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.specialties.map((specialty, i) => (
                        <span key={i} className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                      <span>{partner.headquarters}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Avantages de nos <span className="text-orange-500">Partenariats</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Qualité Garantie</h3>
              <p className="text-gray-600 text-center">
                Nos partenaires sont des leaders mondiaux reconnus pour la qualité et la fiabilité de leurs produits, garantissant des solutions performantes pour vos besoins industriels.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Innovation Technologique</h3>
              <p className="text-gray-600 text-center">
                Accédez aux dernières innovations et technologies de pointe grâce à nos partenariats stratégiques avec des entreprises à la pointe de leur secteur.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Support Expert</h3>
              <p className="text-gray-600 text-center">
                Bénéficiez d'un support technique complet et d'une expertise approfondie grâce à notre réseau de partenaires et à nos équipes formées directement par les fabricants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin de Solutions Industrielles?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour découvrir comment nos partenariats stratégiques peuvent vous aider à optimiser vos processus industriels et à améliorer votre productivité.
          </p>
          <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
            <Link href="/contact">
              Demander un Devis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
