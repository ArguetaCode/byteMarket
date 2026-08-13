"use client";

import { PackageSearch, RotateCw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useProductFilters } from "@/hooks/useProductFilters";
import { useProducts } from "@/hooks/useProducts";
import { ProductFilters } from "@/components/products/ProductFilters";
import { ProductGrid } from "@/components/products/ProductGrid";

interface ProductCatalogProps { searchQuery: string; onSearchChange: (value: string) => void; }

export function ProductCatalog({ searchQuery, onSearchChange }: ProductCatalogProps) {
  const { products, isLoading, error, reloadProducts } = useProducts();
  const filters = useProductFilters(products, searchQuery, onSearchChange);
  const { translate } = useLanguage();

  return <section className="catalog-section" id="catalog"><div className="section-heading"><div><p className="eyebrow dark">{translate("catalogEyebrow")}</p><h2>{translate("catalogTitle")}</h2><p>{translate("catalogDescription")}</p></div></div>
    <ProductFilters category={filters.category} sortOrder={filters.sortOrder} productCount={filters.filteredProducts.length} onCategoryChange={filters.setCategory} onSortOrderChange={filters.setSortOrder}/>
    {isLoading && <div className="catalog-state"><span className="loader"/><p>{translate("loading")}</p></div>}
    {error && <div className="catalog-state"><PackageSearch size={40}/><h3>{translate("loadError")}</h3><button className="secondary-button dark-button" onClick={() => void reloadProducts()}><RotateCw size={16}/>{translate("retry")}</button></div>}
    {!isLoading && !error && filters.filteredProducts.length > 0 && <ProductGrid products={filters.filteredProducts}/>} 
    {!isLoading && !error && filters.filteredProducts.length === 0 && <div className="catalog-state"><PackageSearch size={42}/><h3>{translate("noResults")}</h3><button className="secondary-button dark-button" onClick={filters.clearFilters}>{translate("clearFilters")}</button></div>}
  </section>;
}
