"use client";

import { ShoppingBag, X } from "lucide-react";
import { useCartContext } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";

export function CartDrawer() {
  const { items, itemCount, isOpen, closeCart } = useCartContext();
  const { translate } = useLanguage();
  return <div className={isOpen ? "cart-layer open" : "cart-layer"} aria-hidden={!isOpen}><button className="cart-backdrop" onClick={closeCart} tabIndex={isOpen ? 0 : -1} aria-label={translate("close")}/><aside className="cart-drawer" role="dialog" aria-modal="true" aria-label={translate("cart")}><header><div><p>{itemCount} {translate("products")}</p><h2>{translate("cart")}</h2><span>{translate("cartDescription")}</span></div><button onClick={closeCart} aria-label={translate("close")}><X size={22}/></button></header>{items.length === 0 ? <div className="empty-cart"><span><ShoppingBag size={34}/></span><h3>{translate("emptyCart")}</h3><p>{translate("emptyCartDescription")}</p></div> : <><div className="cart-items">{items.map((item) => <CartItem item={item} key={item.product.id}/>)}</div><CartSummary/></>}</aside></div>;
}
