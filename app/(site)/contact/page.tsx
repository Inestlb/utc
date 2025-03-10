import ContactForm from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import MapContainer from '@/components/maps/MapContainer';

export const metadata = {
  title: 'Contactez-Nous | Entreprise d\'Exportation Industrielle',
  description: 'Prenez contact avec notre équipe pour toute demande concernant nos produits industriels',
};

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4"><span className="text-orange-500">Contactez</span>-Nous</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vous avez des questions sur nos produits ou services ? Notre équipe est là pour vous aider.
            Remplissez le formulaire ci-dessous ou utilisez nos coordonnées pour nous contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Company Information */}
          <div>
            <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-orange-500">
              <h2 className="text-xl font-semibold mb-6">Informations de l&apos;<span className="text-orange-500">Entreprise</span></h2>

              <div className="space-y-6">
                <div className="flex">
                  <MapPin className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      450 Rue Baden Powell<br />
                      Espace Optimum<br />
                      Montpellier, 34000<br />
                      France
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Téléphone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+1234567890" className="hover:text-orange-500">
                        +1 (234) 567-890
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@industrialexport.com" className="hover:text-orange-500">
                        info@industrialexport.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <MapContainer
              longitude={3.8767}
              latitude={43.6108}
              zoom={14}
              markerTitle="UTC Industrie - Montpellier"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
