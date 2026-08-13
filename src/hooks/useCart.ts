"use client";

import { useEffect, useMemo, useState } from "react";
import type { CartItem } from "@/models/cart-item.model";
import type { Product } from "@/models/product.model";

const storageKey = "bytemarket-cart";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const restoreCart = window.setTimeout(() => {
      const savedItems = localStorage.getItem(storageKey);
      if (savedItems) {
        try { setItems(JSON.parse(savedItems) as CartItem[]); } catch { localStorage.removeItem(storageKey); }
      }
      setIsHydrated(true);
    }, 0);
    return () => window.clearTimeout(restoreCart);
  }, []);

  useEffect(() => {
    if (isHydrated) localStorage.setItem(storageKey, JSON.stringify(items));
  }, [isHydrated, items]);

  const addProduct = (product: Product) => setItems((currentItems) => {
    const existingItem = currentItems.find((item) => item.product.id === product.id);
    return existingItem
      ? currentItems.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      : [...currentItems, { product, quantity: 1 }];
  });

  const removeProduct = (productId: number) => setItems((currentItems) => currentItems.filter((item) => item.product.id !== productId));
  const setQuantity = (productId: number, quantity: number) => setItems((currentItems) => quantity <= 0
    ? currentItems.filter((item) => item.product.id !== productId)
    : currentItems.map((item) => item.product.id === productId ? { ...item, quantity } : item));

  const itemCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);
  const total = useMemo(() => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0), [items]);

  return { items, addProduct, removeProduct, setQuantity, itemCount, total };
}
