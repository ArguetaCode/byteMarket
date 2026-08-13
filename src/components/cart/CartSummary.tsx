"use client";

import { ArrowRight } from "lucide-react";
import { useCartContext } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { formatCurrency } from "@/utils/formatCurrency";

export function CartSummary() {
  const { total } = useCartContext();
  const { language, translate } = useLanguage();
  return <div className="cart-summary"><div><span>{translate("subtotal")}</span><strong>{formatCurrency(total, language)}</strong></div><div><span>{translate("shipping")}</span><strong className="free-shipping">{translate("free")}</strong></div><div className="cart-total"><span>{translate("total")}</span><strong>{formatCurrency(total, language)}</strong></div><button className="checkout-button">{translate("checkout")}<ArrowRight size={18}/></button></div>;
}
