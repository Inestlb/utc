"use client";

import { useState, useEffect } from 'react';
import { Product, ProductFilterOptions } from '@/lib/types';
import { getProducts, getProductCategories } from '@/data/products';

export function useProducts(initialOptions?: ProductFilterOptions) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterOptions, setFilterOptions] = useState<ProductFilterOptions>(initialOptions || {});
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setError(null);

      try {
        const [productsData, categoriesData] = await Promise.all([
          getProducts(filterOptions),
          getProductCategories(),
        ]);

        setProducts(productsData);
        setCategories(categoriesData);

        // Calculate total pages (assuming 4 items per page)
        const totalItems = productsData.length;
        setTotalPages(Math.ceil(totalItems / 4));
      } catch (err) {
        setError('Failed to fetch products');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [filterOptions]);

  const updateFilters = (newFilters: Partial<ProductFilterOptions>) => {
    setFilterOptions(prev => ({
      ...prev,
      ...newFilters,
      // Reset to page 1 when filters change
      page: newFilters.page || 1,
    }));
  };

  return {
    products,
    categories,
    isLoading,
    error,
    filterOptions,
    updateFilters,
    totalPages,
  };
}
