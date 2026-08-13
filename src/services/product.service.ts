import type { ProductDTO } from "@/dtos/product.dto";

export async function getProducts(): Promise<ProductDTO[]> {
  const response = await fetch("/api/products");

  if (!response.ok) {
    throw new Error("Unable to retrieve products.");
  }

  return response.json() as Promise<ProductDTO[]>;
}
