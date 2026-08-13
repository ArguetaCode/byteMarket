"use client";

import { useMemo, useState } from "react";
import type { CategoryFilter, ProductSortOrder } from "@/models/product-filter.model";
import type { Product } from "@/models/product.model";

export function useProductFilters(products: Product[], searchQuery: string, setSearchQuery: (value: string) => void) {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [sortOrder, setSortOrder] = useState<ProductSortOrder>("featured");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const matchingProducts = products.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const matchesSearch = !normalizedQuery || product.name.toLowerCase().includes(normalizedQuery)
        || product.description.en.toLowerCase().includes(normalizedQuery)
        || product.description.es.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesSearch;
    });

    if (sortOrder === "price-ascending") return [...matchingProducts].sort((a, b) => a.price - b.price);
    if (sortOrder === "price-descending") return [...matchingProducts].sort((a, b) => b.price - a.price);
    return matchingProducts;
  }, [category, products, searchQuery, sortOrder]);

  const clearFilters = () => {
    setCategory("all");
    setSortOrder("featured");
    setSearchQuery("");
  };

  return { category, setCategory, sortOrder, setSortOrder, searchQuery, setSearchQuery, filteredProducts, clearFilters };
}
