"use client";

import { SlidersHorizontal } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { CategoryFilter, ProductSortOrder } from "@/models/product-filter.model";

interface ProductFiltersProps {
  category: CategoryFilter;
  sortOrder: ProductSortOrder;
  productCount: number;
  onCategoryChange: (category: CategoryFilter) => void;
  onSortOrderChange: (sortOrder: ProductSortOrder) => void;
}

export function ProductFilters({ category, sortOrder, productCount, onCategoryChange, onSortOrderChange }: ProductFiltersProps) {
  const { translate } = useLanguage();
  const categories: CategoryFilter[] = ["all", "components", "peripherals", "monitors"];
  return <div className="filter-bar">
    <div className="category-tabs" role="group" aria-label={translate("components")}>
      {categories.map((item) => <button className={category === item ? "active" : ""} onClick={() => onCategoryChange(item)} key={item}>{translate(item)}</button>)}
    </div>
    <div className="filter-meta"><span className="product-count">{productCount} {translate("products")}</span><label className="sort-select"><SlidersHorizontal size={16}/><span>{translate("sortBy")}</span><select value={sortOrder} onChange={(event) => onSortOrderChange(event.target.value as ProductSortOrder)}><option value="featured">{translate("featured")}</option><option value="price-ascending">{translate("priceAscending")}</option><option value="price-descending">{translate("priceDescending")}</option></select></label></div>
  </div>;
}
