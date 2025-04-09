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
    <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] group">
      <div className="relative h-52 w-full bg-gray-100 overflow-hidden">
        {/* Placeholder for product image */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 transition-transform duration-500 ease-in-out group-hover:scale-[1.05]">
          <span className="text-gray-500 text-3xl font-bold">{product.name.charAt(0)}</span>
        </div>
        {/* Uncomment when you have actual images */}
        {/* <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.05]"
        /> */}
      </div>

      <CardContent className="p-5">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 rounded-full transition-colors duration-300 hover:bg-[#fef2e1] hover:text-custom-orange">
            {product.category}
          </span>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 rounded-full ml-2 transition-colors duration-300 hover:bg-[#fef2e1] hover:text-custom-orange">
            {product.subcategory}
          </span>
        </div>
        <h3 className="text-lg font-semibold line-clamp-1 transition-colors duration-300 group-hover:text-custom-orange mb-2">{product.name}</h3>
        <p className="text-gray-600 mt-3 text-sm line-clamp-2">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="p-5 pt-2 flex justify-between items-center">
        <Link href={`/products/${product.id}`} passHref className="w-full">
          <Button 
            variant="outline" 
            className="w-full transition-all duration-300 ease-in-out group-hover:bg-custom-orange group-hover:text-white group-hover:border-custom-orange py-5"
          >
            Voir les détails
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
