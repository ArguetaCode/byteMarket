export type ProductCategory = "components" | "peripherals" | "monitors";

export interface Product {
  id: number;
  name: string;
  description: {
    en: string;
    es: string;
  };
  imageUrl: string;
  price: number;
  category: ProductCategory;
  badge?: {
    en: string;
    es: string;
  };
}
