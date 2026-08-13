"use client";

import { ArrowRight, Headphones, RotateCcw, Truck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { translate } = useLanguage();
  const benefits = [
    { icon: Truck, title: translate("freeShipping"), detail: translate("freeShippingDetail") },
    { icon: RotateCcw, title: translate("easyReturns"), detail: translate("easyReturnsDetail") },
    { icon: Headphones, title: translate("expertSupport"), detail: translate("expertSupportDetail") },
  ];
  return <>
    <section className="hero" id="top"><div className="hero-glow"/><div className="hero-content"><p className="eyebrow">{translate("heroEyebrow")}</p><h1>{translate("heroTitle")} <em>{translate("heroAccent")}</em></h1><p className="hero-description">{translate("heroDescription")}</p><div className="hero-actions"><a className="primary-button" href="#catalog">{translate("shopComponents")}<ArrowRight size={18}/></a><a className="secondary-button" href="#catalog">{translate("exploreMonitors")}</a></div></div><div className="hero-visual" aria-hidden="true"><div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/><div className="chip"><span>BM</span><small>CORE</small></div></div></section>
    <section className="benefits" id="support">{benefits.map(({ icon: Icon, title, detail }) => <div className="benefit" key={title}><span><Icon size={21}/></span><div><strong>{title}</strong><small>{detail}</small></div></div>)}</section>
  </>;
}
