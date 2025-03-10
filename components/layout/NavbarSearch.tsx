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
          className="pr-16 h-9 text-sm"
          value=""
          readOnly
        />
        <div className="absolute right-0 top-0 h-full flex items-center pr-2">
          <Button type="button" variant="ghost" size="icon" className="h-7 w-7">
            <Search className="h-3 w-3 text-orange-500" />
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
        className="pr-16 h-9 text-sm"
      />
      <div className="absolute right-0 top-0 h-full flex items-center pr-2">
        {searchTerm && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={clearSearch}
          >
            <X className="h-3 w-3" />
          </Button>
        )}
        <Button type="submit" variant="ghost" size="icon" className="h-7 w-7">
          <Search className="h-3 w-3 text-orange-500" />
        </Button>
      </div>
    </form>
  );
}
