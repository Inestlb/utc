import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Droplet, Beaker, Apple, Bot } from "lucide-react";
import { getPartners } from "@/data/partners";

export default async function Home() {
  // Fetch partners
  const partners = await getPartners();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Solutions Industrielles pour les Marchés <span className="text-orange-500">Mondiaux</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Équipements et composants industriels de haute qualité pour la fabrication,
              le traitement et les projets d'infrastructure dans le monde entier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/products">
                  Explorer les Produits
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">
                  Nous Contacter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs d'Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Secteurs d'<span className="text-orange-500">Expertise</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous proposons des solutions spécialisées pour répondre aux besoins spécifiques
              de différents secteurs industriels.
            </p>
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

      {/* Value Proposition Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pourquoi Nous <span className="text-orange-500">Choisir</span></h2>
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

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos <span className="text-orange-500">Partenaires</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous collaborons avec des fabricants et distributeurs de premier plan pour fournir
              les meilleures solutions industrielles dans le monde entier.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
              {partners.map(partner => (
                <div key={partner.id} className="bg-white p-10 rounded-lg shadow-md flex flex-col items-center justify-center h-52 transition-transform hover:scale-105 hover:shadow-lg border border-gray-100 hover:border-orange-500">
                  {partner.name === "IFM" ? (
                    <Image
                      src="/images/logo-ifm.svg"
                      alt="IFM"
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  ) : partner.name === "Lenze" ? (
                    <Image
                      src="/images/logo-Lenze.svg"
                      alt="Lenze"
                      width={180}
                      height={55}
                      className="object-contain"
                    />
                  ) : partner.name === "Wago" ? (
                    <Image
                      src="/images/logo-WAGO.svg"
                      alt="Wago"
                      width={180}
                      height={65}
                      className="object-contain"
                    />
                  ) : (
                    <div className="font-bold text-4xl text-gray-800 hover:text-orange-500 transition-colors">{partner.name}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="hover:border-orange-500 hover:text-orange-500">
              <Link href="/blog">
                En Savoir Plus
                <ArrowRight className="ml-1 h-4 w-4"/>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à Commencer?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez notre équipe dès aujourd'hui pour discuter de vos besoins en équipement industriel et découvrir
            comment nous pouvons aider votre entreprise à réussir.
          </p>
          <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
            <Link href="/contact">
              Contactez-Nous Maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
