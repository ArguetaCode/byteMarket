Desarrollar el frontend de una tienda de hardware y componentes de computadora llamada "ByteMarket". El objetivo es construir una aplicación web moderna, escalable y altamente interactiva utilizando React y Next.js.

Podrán consumir una API pública de productos (como Fake Store API o similares) o simular la base de datos creando su propio archivo db.ts / db.js con un catálogo inicial (tarjetas de video, procesadores, monitores, etc.). El enfoque principal de esta evaluación será la separación de componentes, el manejo del estado y la implementación de una Arquitectura en Capas limpia en el Frontend.

🛠️ Requerimientos Técnicos Obligatorios
Deberán implementar la solución cumpliendo estrictamente con las siguientes directrices:

1. Arquitectura en Capas y Next.js 

El proyecto debe ser Next.js 

Deben aplicar una Arquitectura de Capas correcta

2. Catálogo Dinámico y Sistema de Filtros

Las tarjetas de producto deben mostrar obligatoriamente como minimo: Imagen, Nombre del producto, Descripción breve (o especificaciones) y Precio.

Filtros Dinámicos: Deben implementar una barra de filtros funcional. Como mínimo, debe permitir filtrar los productos por Categoría (ej. Periféricos, Componentes, Monitores) y ordenarlos por Precio (Mayor a menor / Menor a mayor). El catálogo debe actualizarse en tiempo real al aplicar los filtros.

3. Gestión Avanzada del Carrito de Compras

Cada tarjeta debe incluir un botón para agregar al carrito.

Al agregar un producto existente, no se debe duplicar, sino que se debe incrementar su propiedad cantidad.

El carrito de compras (ya sea en una ruta aparte, un drawer lateral o un modal) debe permitir editar las cantidades (+ / -) y eliminar productos (automáticamente si la cantidad llega a cero o mediante un botón de basurero).

El Total a Pagar debe ser dinámico, recalculándose instantáneamente con cualquier mutación en el carrito.

4. Maquetación y Diseño Responsivo 

Toda la aplicación debe ser responsiva.

El diseño debe adaptarse correctamente a pantallas móviles, tablets y monitores de escritorio sin desbordamientos de contenido.

