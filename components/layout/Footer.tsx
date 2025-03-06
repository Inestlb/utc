import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Entreprise d'<span className="text-orange-500">Exportation</span> Industrielle</h3>
            <p className="text-gray-400 mb-4">
              Fournisseur de produits industriels de haute qualité pour l'exportation mondiale depuis 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens <span className="text-orange-500">Rapides</span></h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Produits
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Société
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Partenaires
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Catégories de <span className="text-orange-500">Produits</span></h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=Pumps" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Pompes
                </Link>
              </li>
              <li>
                <Link href="/products?category=Valves" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Vannes
                </Link>
              </li>
              <li>
                <Link href="/products?category=Compressors" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Compresseurs
                </Link>
              </li>
              <li>
                <Link href="/products?category=Heat Exchangers" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Échangeurs de Chaleur
                </Link>
              </li>
              <li>
                <Link href="/products?category=Filtration" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Systèmes de Filtration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4"><span className="text-orange-500">Contactez</span>-Nous</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-orange-500" />
                <span className="text-gray-400">
                  123 Avenue Industrielle, Quartier des Affaires, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-orange-500" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-orange-500 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-orange-500" />
                <a href="mailto:info@industrialexport.com" className="text-gray-400 hover:text-orange-500 transition-colors">
                  info@industrialexport.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Entreprise d'Exportation Industrielle. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Politique de Confidentialité
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Conditions d'Utilisation
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Plan du Site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
