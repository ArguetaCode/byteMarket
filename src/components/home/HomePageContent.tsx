"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Footer } from "@/components/layout/Footer";

export function HomePageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  return <><Header searchQuery={searchQuery} onSearchChange={setSearchQuery}/><main><HeroSection/><ProductCatalog searchQuery={searchQuery} onSearchChange={setSearchQuery}/></main><Footer/><CartDrawer/></>;
}
