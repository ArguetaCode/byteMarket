"use client";

import { useCallback, useEffect, useState } from "react";
import { mapProductDTOsToProducts } from "@/mappers/product.mapper";
import type { Product } from "@/models/product.model";
import { getProducts } from "@/services/product.service";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const productDTOs = await getProducts();
      setProducts(mapProductDTOsToProducts(productDTOs));
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Unable to retrieve products.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const initialRequest = window.setTimeout(() => { void loadProducts(); }, 0);
    return () => window.clearTimeout(initialRequest);
  }, [loadProducts]);

  return { products, isLoading, error, reloadProducts: loadProducts };
}
