import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full bg-gray-100">
        {/* Placeholder for product image */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span className="text-gray-500">{product.name.charAt(0)}</span>
        </div>
        {/* Uncomment when you have actual images */}
        {/* <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        /> */}
      </div>

      <CardContent className="p-4">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 rounded-full">
            {product.category}
          </span>
          <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 rounded-full ml-2">
            {product.subcategory}
          </span>
        </div>
        <h3 className="text-lg font-semibold line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 mt-2 text-sm line-clamp-2">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <Link href={`/products/${product.id}`} passHref>
          <Button variant="outline" className="w-full">
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
