export const translations = {
  en: {
    brandTagline: "Performance, built right.", shop: "Shop", support: "Support", search: "Search products...",
    heroEyebrow: "BUILD WITHOUT LIMITS", heroTitle: "Power your next", heroAccent: "big idea.",
    heroDescription: "Curated hardware for creators, gamers, and builders. Tested components, honest pricing, and fast delivery.",
    shopComponents: "Shop components", exploreMonitors: "Explore monitors", freeShipping: "Free shipping", freeShippingDetail: "On orders over $100",
    easyReturns: "Easy returns", easyReturnsDetail: "30-day return window", expertSupport: "Expert support", expertSupportDetail: "Real people, real answers",
    catalogEyebrow: "CURATED HARDWARE", catalogTitle: "Find your next upgrade", catalogDescription: "Reliable gear, selected for performance.", all: "All products",
    components: "Components", peripherals: "Peripherals", monitors: "Monitors", sortBy: "Sort by", featured: "Featured",
    priceAscending: "Price: low to high", priceDescending: "Price: high to low", addToCart: "Add to cart", added: "Added to cart",
    products: "products", noResults: "No products match your search.", clearFilters: "Clear filters", loading: "Loading hardware...",
    loadError: "We could not load the catalog.", retry: "Try again", cart: "Your cart", cartDescription: "Review your build before checkout.",
    emptyCart: "Your cart is ready for something great.", emptyCartDescription: "Add a product and it will appear here.", subtotal: "Subtotal",
    shipping: "Shipping", free: "Free", total: "Total", checkout: "Continue to checkout", remove: "Remove", close: "Close", language: "Español", switchLanguage: "Switch to Spanish",
    quantity: "Quantity", copyright: "© 2026 ByteMarket. Built for better builds.", menu: "Open menu", decrease: "Decrease quantity", increase: "Increase quantity",
  },
  es: {
    brandTagline: "Rendimiento bien construido.", shop: "Tienda", support: "Soporte", search: "Buscar productos...",
    heroEyebrow: "CONSTRUYE SIN LÍMITES", heroTitle: "Impulsa tu próxima", heroAccent: "gran idea.",
    heroDescription: "Hardware seleccionado para creadores, jugadores y entusiastas. Componentes probados, precios honestos y entrega rápida.",
    shopComponents: "Ver componentes", exploreMonitors: "Explorar monitores", freeShipping: "Envío gratuito", freeShippingDetail: "En compras mayores a $100",
    easyReturns: "Devoluciones fáciles", easyReturnsDetail: "Plazo de devolución de 30 días", expertSupport: "Soporte experto", expertSupportDetail: "Personas reales, respuestas claras",
    catalogEyebrow: "HARDWARE SELECCIONADO", catalogTitle: "Encuentra tu próxima mejora", catalogDescription: "Equipo confiable, elegido por su rendimiento.", all: "Todos",
    components: "Componentes", peripherals: "Periféricos", monitors: "Monitores", sortBy: "Ordenar por", featured: "Destacados",
    priceAscending: "Precio: menor a mayor", priceDescending: "Precio: mayor a menor", addToCart: "Agregar al carrito", added: "Agregado al carrito",
    products: "productos", noResults: "Ningún producto coincide con tu búsqueda.", clearFilters: "Limpiar filtros", loading: "Cargando productos...",
    loadError: "No pudimos cargar el catálogo.", retry: "Intentar de nuevo", cart: "Tu carrito", cartDescription: "Revisa tu equipo antes de continuar.",
    emptyCart: "Tu carrito espera algo increíble.", emptyCartDescription: "Agrega un producto y aparecerá aquí.", subtotal: "Subtotal",
    shipping: "Envío", free: "Gratis", total: "Total", checkout: "Continuar al pago", remove: "Eliminar", close: "Cerrar", language: "English", switchLanguage: "Cambiar a inglés",
    quantity: "Cantidad", copyright: "© 2026 ByteMarket. Creado para construir mejor.", menu: "Abrir menú", decrease: "Disminuir cantidad", increase: "Aumentar cantidad",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
