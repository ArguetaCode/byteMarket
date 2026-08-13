export interface ProductDTO {
  id: number;
  name: string;
  description: {
    en: string;
    es: string;
  };
  image: string;
  price: number;
  category: string;
  badge?: {
    en: string;
    es: string;
  };
}
