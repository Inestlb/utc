import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Société | Entreprise d\'Exportation Industrielle',
  description: 'Découvrez l\'histoire de notre entreprise, notre mission et nos valeurs',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Redesigned */}
      <section className="relative py-16 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

        {/* Content */}
        <div className="container relative mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4 text-white">
              Notre <span className="text-orange-500">Société</span>
            </h1>
            <div className="w-20 h-1 bg-orange-500 mb-5"></div>
            <p className="text-lg text-gray-200 mb-4 leading-relaxed">
              Depuis 2006, UTC Industrie est le premier fournisseur national d'équipements
              et de composants industriels de haute qualité, répondant aux exigences
              des marchés mondiaux.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-4">
              Fondée en 2006, UTC Industrie est une entreprise familiale qui s'est imposée comme le premier exportateur national d'équipements industriels en Algérie. Spécialisée dans l'importation et la distribution de solutions en automatisme, motorisation et process industriel, elle collabore avec des partenaires de renom comme IFM Electronic, Lenze et Wago pour fournir aux industriels des équipements performants et adaptés à leurs besoins.
              </p>
              <p className="text-gray-600 mb-4">
              Notre fondateur a perçu la nécessité de proposer des solutions industrielles fiables et accessibles sur le marché algérien. Fort d'une expertise en commerce international et d'une connaissance approfondie du secteur, il a construit une entreprise qui facilite l'accès aux technologies industrielles les plus avancées en accompagnant ses clients dans l'optimisation de leurs processus.
              </p>
              <p className="text-gray-600">
              Aujourd'hui, UTC Industrie continue d'évoluer en offrant un accompagnement technique sur mesure et des équipements adaptés aux exigences industrielles. Son expertise en motorisation, détection et connectique lui permet d'apporter des solutions fiables et performantes à ses clients.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-80 flex items-center justify-center">
              <p className="text-gray-500">Image de l'entreprise</p>
              {/* In a real application, you would use an actual image */}
              {/* <Image
                src="/images/company-history.jpg"
                alt="Histoire de l'entreprise"
                fill
                className="object-cover"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Mission & Nos Valeurs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous sommes guidés par un engagement envers l'excellence, l'intégrité et la satisfaction du client
              dans tout ce que nous faisons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence de Qualité</h3>
              <p className="text-gray-600">
                Nous nous engageons à fournir des produits qui répondent aux normes les plus élevées de
                qualité et de fiabilité. Chaque article que nous proposons subit des tests rigoureux
                et un contrôle de qualité.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Orientation Client</h3>
              <p className="text-gray-600">
                Le succès de nos clients est notre succès. Nous travaillons en étroite collaboration avec les clients pour
                comprendre leurs besoins et fournir des solutions qui les aident à atteindre leurs
                objectifs commerciaux.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Perspective Mondiale</h3>
              <p className="text-gray-600">
                Avec des clients dans plus de 50 pays, nous comprenons les complexités du
                commerce international. Nous tirons parti de cette perspective mondiale pour fournir
                des solutions qui fonctionnent sur différents marchés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Rejoignez Notre Réseau</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
            Que vous recherchiez des équipements industriels ou des opportunités de partenariat,
            nous sommes là pour vous aider à réussir sur le marché mondial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
              <Link href="/contact">
                Contactez-Nous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300">
              <Link href="/products">
                Parcourir les Produits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
