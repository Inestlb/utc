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
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/about-hero.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Notre Société</h1>
            <p className="text-xl text-gray-300">
              Depuis 1985, l'Entreprise d'Exportation Industrielle est un fournisseur leader d'équipements
              et de composants industriels de haute qualité pour les marchés mondiaux.
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
                L'Entreprise d'Exportation Industrielle a été fondée en 1985 avec une mission simple : fournir
                des équipements industriels de haute qualité aux marchés mondiaux. Ce qui a commencé comme une petite
                entreprise d'exportation s'est transformé en un fournisseur complet de solutions industrielles
                avec des clients dans plus de 50 pays.
              </p>
              <p className="text-gray-600 mb-4">
                Notre fondateur, John Smith, a reconnu le besoin d'équipements industriels fiables
                dans les marchés émergents. Avec sa formation en ingénierie et son expérience en commerce international,
                il a établi une entreprise qui fait le pont entre les fabricants et les clients mondiaux.
              </p>
              <p className="text-gray-600">
                Aujourd'hui, nous continuons à bâtir sur cette fondation, combinant expertise technique
                et portée mondiale pour offrir des solutions qui aident nos clients à réussir dans leurs
                industries.
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

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Équipe de Direction</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Rencontrez les professionnels expérimentés qui guident la stratégie et les opérations de notre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-40 h-40 mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
                {/* In a real application, you would use an actual image */}
                {/* <Image
                  src="/images/team/ceo.jpg"
                  alt="PDG"
                  width={160}
                  height={160}
                  className="rounded-full object-cover"
                /> */}
              </div>
              <h3 className="text-xl font-semibold">Karim Talbi</h3>
              <p className="text-gray-600 mb-2">Président Directeur Général</p>
              <p className="text-sm text-gray-500">
                Avec plus de 25 ans d'expérience dans la fabrication industrielle et le commerce international.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-40 h-40 mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
              </div>
              <h3 className="text-xl font-semibold">Robert Johnson</h3>
              <p className="text-gray-600 mb-2">Directrice des Opérations</p>
              <p className="text-sm text-gray-500">
                Experte en gestion de la chaîne d'approvisionnement et en efficacité opérationnelle avec une expérience mondiale.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-40 h-40 mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
              </div>
              <h3 className="text-xl font-semibold">Michael Rodriguez</h3>
              <p className="text-gray-600 mb-2">Directeur Technique</p>
              <p className="text-sm text-gray-500">
                Leader en ingénierie avec une expertise dans la conception et l'innovation d'équipements industriels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Rejoignez Notre Réseau Mondial</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Que vous recherchiez des équipements industriels ou des opportunités de partenariat,
            nous sommes là pour vous aider à réussir sur le marché mondial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">
                Contactez-Nous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/products">
                Parcourir les Produits
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
