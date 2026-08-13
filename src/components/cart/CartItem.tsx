"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useCartContext } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import type { CartItem as CartItemModel } from "@/models/cart-item.model";
import { formatCurrency } from "@/utils/formatCurrency";

export function CartItem({ item }: { item: CartItemModel }) {
  const { setQuantity, removeProduct } = useCartContext();
  const { language, translate } = useLanguage();
  return <article className="cart-item"><Image src={item.product.imageUrl} alt={item.product.name} width={80} height={80} unoptimized/><div className="cart-item-info"><div><span>{translate(item.product.category)}</span><h3>{item.product.name}</h3></div><div className="cart-item-controls"><div className="quantity-control"><button onClick={() => setQuantity(item.product.id, item.quantity - 1)} aria-label={translate("decrease")}><Minus size={14}/></button><span aria-label={translate("quantity")}>{item.quantity}</span><button onClick={() => setQuantity(item.product.id, item.quantity + 1)} aria-label={translate("increase")}><Plus size={14}/></button></div><strong>{formatCurrency(item.product.price * item.quantity, language)}</strong><button className="remove-button" onClick={() => removeProduct(item.product.id)} aria-label={`${translate("remove")}: ${item.product.name}`}><Trash2 size={17}/></button></div></div></article>;
}
