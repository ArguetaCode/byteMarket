"use client";

import { Check, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useCartContext } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import type { Product } from "@/models/product.model";
import { formatCurrency } from "@/utils/formatCurrency";

export function ProductCard({ product }: { product: Product }) {
  const { addProduct } = useCartContext();
  const { language, translate } = useLanguage();
  const [wasAdded, setWasAdded] = useState(false);
  const handleAdd = () => {
    addProduct(product);
    setWasAdded(true);
    window.setTimeout(() => setWasAdded(false), 1200);
  };
  return <article className="product-card">
    <div className="product-image"><Image src={product.imageUrl} alt={product.name} fill sizes="(max-width: 420px) 100vw, (max-width: 760px) 50vw, (max-width: 1050px) 33vw, 25vw" unoptimized/>{product.badge && <span className="product-badge">{product.badge[language]}</span>}</div>
    <div className="product-content"><span className="product-category">{translate(product.category)}</span><h3>{product.name}</h3><p>{product.description[language]}</p><div className="product-footer"><strong>{formatCurrency(product.price, language)}</strong><button className={wasAdded ? "add-button added" : "add-button"} onClick={handleAdd} aria-label={`${translate("addToCart")}: ${product.name}`}>{wasAdded ? <Check size={18}/> : <Plus size={18}/>}<span>{wasAdded ? translate("added") : translate("addToCart")}</span></button></div></div>
  </article>;
}
