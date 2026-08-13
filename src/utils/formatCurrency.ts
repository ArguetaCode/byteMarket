import type { Language } from "@/models/language.model";

export function formatCurrency(amount: number, language: Language): string {
  return new Intl.NumberFormat(language === "es" ? "es-GT" : "en-US", { style: "currency", currency: "USD" }).format(amount);
}
