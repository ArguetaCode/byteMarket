import type { ProductDTO } from "@/dtos/product.dto";
import type { Product, ProductCategory } from "@/models/product.model";

const supportedCategories: ProductCategory[] = ["components", "peripherals", "monitors"];

function mapCategory(category: string): ProductCategory {
  return supportedCategories.includes(category as ProductCategory)
    ? (category as ProductCategory)
    : "components";
}

export function mapProductDTOToProduct(dto: ProductDTO): Product {
  if (!Number.isFinite(dto.id) || !Number.isFinite(dto.price) || typeof dto.name !== "string") {
    throw new Error("The product response contains invalid data.");
  }

  return {
    id: dto.id,
    name: dto.name.trim(),
    description: {
      en: dto.description?.en?.trim() || "Specifications unavailable",
      es: dto.description?.es?.trim() || "Especificaciones no disponibles",
    },
    imageUrl: dto.image.trim(),
    price: Math.max(0, dto.price),
    category: mapCategory(dto.category),
    badge: dto.badge ? { en: dto.badge.en.trim(), es: dto.badge.es.trim() } : undefined,
  };
}

export function mapProductDTOsToProducts(dtos: ProductDTO[]): Product[] {
  return dtos.map(mapProductDTOToProduct);
}
