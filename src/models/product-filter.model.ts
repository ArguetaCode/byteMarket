import type { ProductCategory } from "@/models/product.model";

export type CategoryFilter = ProductCategory | "all";
export type ProductSortOrder = "featured" | "price-ascending" | "price-descending";
