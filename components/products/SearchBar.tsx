"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X, Loader2 } from 'lucide-react';
import { useDebounce } from '@/lib/hooks/useDebounce';
import { Product } from '@/lib/types';
import Link from 'next/link';

interface SearchBarProps {
  products: Product[];
  initialQuery?: string;
  onSearch?: (query: string) => void;
}

export default function SearchBar({
  products,
  initialQuery = '',
  onSearch
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle search
  useEffect(() => {
    if (!debouncedSearchTerm) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    // Simple search implementation (in a real app, use Fuse.js here)
    const results = products.filter(product =>
      product.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    ).slice(0, 5); // Limit to 5 results

    setSearchResults(results);
    setIsSearching(false);
    setIsDropdownOpen(true);
  }, [debouncedSearchTerm, products]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      if (onSearch) {
        onSearch(searchTerm);
      } else {
        router.push(`/products?q=${encodeURIComponent(searchTerm.trim())}`);
      }
      setIsDropdownOpen(false);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setIsDropdownOpen(false);
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <div className="relative w-full" ref={searchRef}>
      <form onSubmit={handleSubmit} className="relative">
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pr-16"
          onFocus={() => setIsDropdownOpen(!!searchTerm)}
        />
        <div className="absolute right-0 top-0 h-full flex items-center pr-2">
          {searchTerm && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={clearSearch}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          <Button type="submit" variant="ghost" size="icon" className="h-8 w-8">
            {isSearching ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Search className="h-4 w-4" />
            )}
          </Button>
        </div>
      </form>

      {/* Search Results Dropdown */}
      {isDropdownOpen && searchResults.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border">
          <ul className="py-1">
            {searchResults.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/products/${product.id}`}
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div className="font-medium">{product.name}</div>
                  <div className="text-xs text-gray-500">{product.category}</div>
                </Link>
              </li>
            ))}
            <li className="border-t">
              <Button
                variant="ghost"
                className="w-full justify-start px-4 py-2 text-sm text-primary"
                onClick={handleSubmit}
              >
                See all results for "{searchTerm}"
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
