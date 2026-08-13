import type { Product } from "@/models/product.model";
import { ProductCard } from "@/components/products/ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  return <div className="product-grid">{products.map((product) => <ProductCard product={product} key={product.id}/>)}</div>;
}
