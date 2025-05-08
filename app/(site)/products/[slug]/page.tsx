import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail } from 'lucide-react';
import { getProductById, getProducts, extraImages } from '@/data/products';
import { Metadata } from 'next';
import ProductGallery from '@/components/products/ProductGallery';

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for the page
export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const product = await getProductById(params.slug);

  if (!product) {
    return {
      title: 'Produit Non Trouvé',
    };
  }

  // Utiliser header_title s'il est disponible, sinon utiliser name
  const displayTitle = (product as any).header_title || product.name;

  return {
    title: `${displayTitle} | Entreprise d'Exportation Industrielle`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = await getProductById(params.slug);

  // If product not found, show 404
  if (!product) {
    notFound();
  }

  // Utiliser header_title s'il est disponible, sinon utiliser name
  const displayTitle = (product as any).header_title || product.name;

  // Fetch related products from the same category
  const relatedProducts = await getProducts({
    category: product.category,
  });

  // Filter out the current product and limit to 3 related products
  const filteredRelatedProducts = relatedProducts
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  // Vérifier si nous avons des images supplémentaires pour ce produit
  const hasExtraImages = extraImages[product.id] && extraImages[product.id].length > 0;

  return (
    <div className="py-12 animate-in fade-in-50 duration-700">
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[1600px] px-12">
          {/* Breadcrumb */}
          <div className="mb-6 animate-in slide-in-from-left-5 duration-700 delay-150">
            <nav className="flex text-sm">
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Accueil
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link href="/products" className="text-gray-500 hover:text-gray-700">
                Produits
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link
                href={`/products?category=${encodeURIComponent(product.category)}`}
                className="text-gray-500 hover:text-gray-700"
              >
                {product.category}
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-900 font-medium">{displayTitle}</span>
            </nav>
          </div>

          {/* Back Button */}
          <div className="mb-8 animate-in slide-in-from-left-5 duration-700 delay-300">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/products?category=${encodeURIComponent(product.category)}&brand=lenze`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Link>
            </Button>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="animate-in slide-in-from-bottom-5 duration-700 delay-500">
              {!product.image ? (
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center max-w-[400px] mx-auto">
                  <span className="text-gray-500 text-4xl">{displayTitle.charAt(0)}</span>
                </div>
              ) : (
                <ProductGallery 
                  mainImage={product.image}
                  additionalImages={hasExtraImages ? extraImages[product.id] : []}
                  productName={displayTitle}
                />
              )}
            </div>

            {/* Product Info */}
            <div className="animate-in slide-in-from-bottom-5 duration-700 delay-700">
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-4">{displayTitle}</h1>
                <div className="text-gray-600 mb-6 leading-relaxed">
                  {product.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-8 animate-in slide-in-from-right-5 duration-700 delay-900">
                <h2 className="text-xl font-semibold mb-4">Spécifications</h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <dl className="divide-y divide-gray-200">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <div key={key} className="py-3 grid grid-cols-3 gap-4 animate-in fade-in-50 duration-700" style={{ animationDelay: `${900 + index * 100}ms` }}>
                        <dt className="text-sm font-medium text-gray-500">{key}</dt>
                        <dd className="text-sm text-gray-900 col-span-2">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Contact Button */}
              <div className="animate-in slide-in-from-bottom-5 duration-700 delay-1000">
                <Button asChild className="w-full sm:w-auto transition-all duration-300 hover:bg-orange-600 hover:scale-105">
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Demander des Informations
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {filteredRelatedProducts.length > 0 && (
            <div className="mt-16 animate-in fade-in-50 duration-700 delay-1000">
              <h2 className="text-2xl font-bold mb-6">Produits Associés</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRelatedProducts.map((relatedProduct, index) => {
                  // Utiliser header_title pour les produits associés également
                  const relatedDisplayTitle = (relatedProduct as any).header_title || relatedProduct.name;
                  
                  return (
                    <div key={relatedProduct.id} className="bg-white rounded-lg shadow-sm border p-4 animate-in slide-in-from-bottom-5 duration-500" style={{ animationDelay: `${1000 + index * 200}ms` }}>
                      <h3 className="font-semibold mb-2">{relatedDisplayTitle}</h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{relatedProduct.description}</p>
                      <Button asChild variant="outline" size="sm" className="transition-all duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-500">
                        <Link href={`/products/${relatedProduct.id}`}>
                          Voir les Détails
                        </Link>
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
