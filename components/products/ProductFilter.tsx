"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Filter, X } from 'lucide-react';

interface ProductFilterProps {
  categories: string[];
  selectedCategory?: string;
  onCategoryChange: (category?: string) => void;
}

export default function ProductFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: ProductFilterProps) {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleCategoryChange = (category: string) => {
    if (category === selectedCategory) {
      onCategoryChange(undefined); // Clear filter if already selected
    } else {
      onCategoryChange(category);
    }
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-4">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center"
          onClick={() => setIsFilterVisible(!isFilterVisible)}
        >
          <Filter className="mr-2 h-4 w-4" />
          {isFilterVisible ? 'Masquer les filtres' : 'Afficher les filtres'}
        </Button>
      </div>

      {/* Filter Card */}
      <Card className={`${isFilterVisible ? 'block' : 'hidden'} md:block`}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Filtres</CardTitle>
            {selectedCategory && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onCategoryChange(undefined)}
                className="h-8 px-2 text-xs"
              >
                Tout effacer
                <X className="ml-1 h-3 w-3" />
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-3">Catégories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={category === selectedCategory}
                      onCheckedChange={() => handleCategoryChange(category)}
                    />
                    <Label
                      htmlFor={`category-${category}`}
                      className="text-sm cursor-pointer"
                    >
                      {category}
                    </Label>
                  </div>
                ))}

                {categories.length === 0 && (
                  <p className="text-sm text-gray-500">Aucune catégorie disponible</p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
