import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Zap, HeadphonesIcon } from 'lucide-react';

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
      {/* Hero Section - Redesigned */}
      <section className="relative py-16 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

        {/* Content */}
        <div className="container relative mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4 text-white">
              Nos <span className="text-orange-500">Partenaires</span> de Confiance
            </h1>
            <div className="w-20 h-1 bg-orange-500 mb-5"></div>
            <p className="text-lg text-gray-200 mb-4 leading-relaxed">
              Nous collaborons avec des leaders mondiaux de l&apos;industrie pour vous offrir des solutions de haute qualité et des technologies innovantes qui répondent à vos besoins spécifiques.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
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

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits - Completely Redesigned */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Pourquoi Choisir Nos <span className="text-orange-500">Partenaires</span></h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-5"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Notre réseau de partenaires stratégiques nous permet de vous offrir des solutions industrielles complètes et de haute qualité, adaptées à vos besoins spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-3 bg-orange-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Qualité Garantie</h3>
                <p className="text-gray-600 text-center">
                  Nos partenaires sont des leaders mondiaux reconnus pour la qualité et la fiabilité de leurs produits, garantissant des solutions performantes pour vos besoins industriels.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span className="text-sm text-gray-600">Produits certifiés aux normes internationales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span className="text-sm text-gray-600">Garantie fabricant étendue</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span className="text-sm text-gray-600">Contrôle qualité rigoureux</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-3 bg-orange-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Zap className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Innovation Technologique</h3>
                <p className="text-gray-600 text-center">
                  Accédez aux dernières innovations et technologies de pointe grâce à nos partenariats stratégiques avec des entreprises à la pointe de leur secteur.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span className="text-sm text-gray-600">Solutions d&apos;automatisation avancées</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span className="text-sm text-gray-600">Technologies connectées (IoT)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span className="text-sm text-gray-600">Mises à jour régulières des produits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-3 bg-orange-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <HeadphonesIcon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Support Expert</h3>
                <p className="text-gray-600 text-center">
                  Bénéficiez d&apos;un support technique complet et d&apos;une expertise approfondie grâce à notre réseau de partenaires et à nos équipes formées directement par les fabricants.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span className="text-sm text-gray-600">Assistance technique dédiée</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span className="text-sm text-gray-600">Formation et documentation complète</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span className="text-sm text-gray-600">Service après-vente réactif</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin de Solutions Industrielles?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour découvrir comment nos partenariats stratégiques peuvent vous aider à optimiser vos processus industriels et à améliorer votre productivité.
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
