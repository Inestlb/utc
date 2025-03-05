import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail } from 'lucide-react';
import { getProductById, getProducts } from '@/data/products';
import { Metadata } from 'next';

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
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | Industrial Export Company`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = await getProductById(params.slug);

  // If product not found, show 404
  if (!product) {
    notFound();
  }

  // Fetch related products from the same category
  const relatedProducts = await getProducts({
    category: product.category,
  });

  // Filter out the current product and limit to 3 related products
  const filteredRelatedProducts = relatedProducts
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/products" className="text-gray-500 hover:text-gray-700">
              Products
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link
              href={`/products?category=${encodeURIComponent(product.category)}`}
              className="text-gray-500 hover:text-gray-700"
            >
              {product.category}
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>

        {/* Back Button */}
        <div className="mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="aspect-square relative">
              {/* Placeholder for product image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <span className="text-gray-500 text-4xl">{product.name.charAt(0)}</span>
              </div>
              {/* Uncomment when you have actual images */}
              {/* <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              /> */}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 rounded-full mr-2">
                  {product.category}
                </span>
                <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 rounded-full">
                  {product.subcategory}
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <dl className="divide-y divide-gray-200">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="py-3 grid grid-cols-3 gap-4">
                      <dt className="text-sm font-medium text-gray-500">{key}</dt>
                      <dd className="text-sm text-gray-900 col-span-2">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Contact Button */}
            <div>
              <Button asChild className="w-full sm:w-auto">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Inquire About This Product
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {filteredRelatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRelatedProducts.map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-sm border p-4">
                  <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{relatedProduct.description}</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/products/${relatedProduct.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
