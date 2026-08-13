"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { translations, type TranslationKey } from "@/i18n/translations";
import type { Language } from "@/models/language.model";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  translate: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const restoreLanguage = window.setTimeout(() => {
      const savedLanguage = localStorage.getItem("bytemarket-language");
      if (savedLanguage === "en" || savedLanguage === "es") setLanguage(savedLanguage);
    }, 0);
    return () => window.clearTimeout(restoreLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("bytemarket-language", language);
  }, [language]);

  const value = useMemo(() => ({
    language,
    toggleLanguage: () => setLanguage((currentLanguage) => currentLanguage === "en" ? "es" : "en"),
    translate: (key: TranslationKey) => translations[language][key],
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider.");
  return context;
}
