"use client";

import { useLanguage } from "@/context/LanguageContext";
export function Footer() { const { translate } = useLanguage(); return <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">B</span><span>Byte<span>Market</span></span></a><p>{translate("copyright")}</p></footer>; }
