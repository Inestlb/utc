"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import { useTranslation } from '@/lib/context/TranslationContext';

export default function NavbarSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const { t, isClient } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  // Don't render dynamic content until client-side hydration is complete
  if (!isClient) {
    return (
      <form className="relative w-full max-w-[200px] lg:max-w-[250px]">
        <Input
          type="text"
          placeholder="Rechercher..."
          className="pr-16 h-10 text-[15px] bg-gray-100 hover:bg-gray-50 border-gray-200 focus:border-orange-500 focus:ring-orange-500/20 rounded-lg transition-colors placeholder:text-gray-400"
          value=""
          readOnly
        />
        <div className="absolute right-0 top-0 h-full flex items-center pr-3">
          <Button type="button" variant="ghost" size="icon" className="h-8 w-8 hover:bg-orange-50 rounded-md">
            <Search className="h-[18px] w-[18px] text-orange-500" />
          </Button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-[200px] lg:max-w-[250px]">
      <Input
        type="text"
        placeholder={t('search.placeholder')}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pr-16 h-10 text-[15px] bg-gray-100 hover:bg-gray-50 border-gray-200 focus:border-orange-500 focus:ring-orange-500/20 rounded-lg transition-colors placeholder:text-gray-400"
      />
      <div className="absolute right-0 top-0 h-full flex items-center pr-3">
        {searchTerm && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-gray-100/80 rounded-md"
            onClick={clearSearch}
          >
            <X className="h-[18px] w-[18px] text-gray-400 hover:text-gray-600" />
          </Button>
        )}
        <Button type="submit" variant="ghost" size="icon" className="h-8 w-8 hover:bg-orange-50 rounded-md">
          <Search className="h-[18px] w-[18px] text-orange-500 hover:text-orange-600" />
        </Button>
      </div>
    </form>
  );
}
