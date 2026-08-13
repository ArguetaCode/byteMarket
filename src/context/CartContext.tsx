"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useCart } from "@/hooks/useCart";
import type { CartItem } from "@/models/cart-item.model";
import type { Product } from "@/models/product.model";

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  total: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
  setQuantity: (productId: number, quantity: number) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const cart = useCart();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return <CartContext.Provider value={{ ...cart, isOpen, openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false) }}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCartContext must be used within CartProvider.");
  return context;
}
