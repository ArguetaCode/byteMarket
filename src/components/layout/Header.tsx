"use client";

import { Globe2, Menu, Search, ShoppingBag } from "lucide-react";
import { useCartContext } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

interface HeaderProps { searchQuery: string; onSearchChange: (value: string) => void; }

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const { itemCount, openCart } = useCartContext();
  const { translate, toggleLanguage } = useLanguage();

  return <header className="site-header">
    <div className="header-inner">
      <a className="brand" href="#top" aria-label="ByteMarket home"><span className="brand-mark">B</span><span>Byte<span>Market</span></span></a>
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#catalog">{translate("shop")}</a><a href="#support">{translate("support")}</a></nav>
      <label className="header-search"><Search size={18}/><input value={searchQuery} onChange={(event) => onSearchChange(event.target.value)} placeholder={translate("search")} /></label>
      <div className="header-actions">
        <button className="language-button" onClick={toggleLanguage} aria-label={translate("switchLanguage")}><Globe2 size={17}/><span>{translate("language")}</span></button>
        <button className="cart-button" onClick={openCart} aria-label={translate("cart")}><ShoppingBag size={20}/>{itemCount > 0 && <span>{itemCount}</span>}</button>
        <button className="menu-button" aria-label={translate("menu")}><Menu size={22}/></button>
      </div>
    </div>
  </header>;
}
