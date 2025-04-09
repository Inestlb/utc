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
  const [isFocused, setIsFocused] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setIsFocused(false);
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
          placeholder="Rechercher des produits..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`pr-16 text-base py-6 transition-all duration-300 ${isFocused ? 'shadow-md border-custom-orange ring-2 ring-[#fef2e1]' : 'hover:border-custom-orange'}`}
          onFocus={() => {
            setIsFocused(true);
            setIsDropdownOpen(!!searchTerm);
          }}
        />
        <div className="absolute right-0 top-0 h-full flex items-center pr-3">
          {searchTerm && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-9 w-9 mr-1 transition-transform duration-200 hover:scale-110 hover:text-custom-orange"
              onClick={clearSearch}
            >
              <X className="h-5 w-5" />
            </Button>
          )}
          <Button 
            type="submit" 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9 transition-all duration-200 hover:scale-110 hover:text-custom-orange"
          >
            {isSearching ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Search className="h-5 w-5" />
            )}
          </Button>
        </div>
      </form>

      {/* Search Results Dropdown */}
      {isDropdownOpen && searchResults.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg border border-[#fef2e1] animate-in fade-in-0 zoom-in-95 duration-200">
          <ul className="py-2">
            {searchResults.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/products/${product.id}`}
                  className="block px-5 py-3 hover:bg-[#fef2e1] transition-colors duration-150 text-sm"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div className="font-medium text-base">{product.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{product.category}</div>
                </Link>
              </li>
            ))}
            <li className="border-t border-[#fef2e1] pt-1">
              <Button
                variant="ghost"
                className="w-full justify-start px-5 py-3 text-sm text-custom-orange hover:bg-[#fef2e1] hover:text-[#d47d0e] transition-colors duration-150"
                onClick={handleSubmit}
              >
                Voir tous les résultats pour "{searchTerm}"
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
