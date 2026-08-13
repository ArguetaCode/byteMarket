# ByteMarket

ByteMarket es una tienda web moderna de hardware y componentes de computadora construida con Next.js, React y TypeScript. El proyecto prioriza una experiencia clara y responsiva, una separación estricta de responsabilidades y un flujo de datos preparado para sustituir el catálogo simulado por una API real.

## Funciones principales

- Catálogo dinámico de componentes, periféricos y monitores.
- Búsqueda instantánea por nombre o especificaciones.
- Filtros por categoría.
- Ordenamiento de precios de menor a mayor y de mayor a menor.
- Carrito lateral con incremento, reducción y eliminación de productos.
- Eliminación automática cuando la cantidad llega a cero.
- Contador y total actualizados inmediatamente.
- Persistencia local del carrito.
- Interfaz completa en inglés y español.
- Diseño adaptado a teléfonos, tabletas y pantallas de escritorio.
- Estados visuales de carga, error y catálogo vacío.

## Tecnologías

- Next.js 16
- React 19
- TypeScript
- CSS
- Lucide React
- API interna mediante Route Handler de Next.js

## Requisitos

Antes de comenzar se necesita:

- Node.js 20.9 o posterior.
- npm 10 o posterior.

## Instalación

Clona el repositorio y entra en su directorio:

```bash
git clone https://github.com/ArguetaCode/byteMarket.git
cd byteMarket
```

Instala las dependencias:

```bash
npm install
```

## Ejecución en desarrollo

Inicia el servidor local:

```bash
npm run dev
```

Abre la aplicación en:

```text
http://localhost:3000
```

Para detener el servidor, presiona `Ctrl + C`.

## Compilación para producción

Genera la compilación optimizada:

```bash
npm run build
```

Inicia la aplicación compilada:

```bash
npm run start
```

## Validación

Ejecuta el análisis estático:

```bash
npm run lint
```

Comprueba los tipos sin generar archivos:

```bash
npx tsc --noEmit
```

## Arquitectura obligatoria

Toda información obtenida de una fuente externa debe respetar estrictamente el siguiente flujo:

```text
API o backend
      ↓
Service
      ↓
DTO
      ↓
Mapper
      ↓
Model
      ↓
Hook
      ↓
Component
      ↓
Page
```

El catálogo actual utiliza una base simulada, pero el navegador la consume como una API real:

```text
src/data/db.ts
      ↓
src/app/api/products/route.ts
      ↓
src/services/product.service.ts
      ↓
src/dtos/product.dto.ts
      ↓
src/mappers/product.mapper.ts
      ↓
src/models/product.model.ts
      ↓
src/hooks/useProducts.ts
      ↓
src/components/products/ProductCatalog.tsx
      ↓
src/app/page.tsx
```

### Responsabilidades por capa

#### Data

Contiene la fuente de datos simulada. Solo el Route Handler puede importar `db.ts`.

#### Route Handler

Expone los datos mediante `/api/products`. No contiene lógica visual ni estado de React.

#### Service

Realiza solicitudes HTTP, comprueba errores de respuesta y devuelve DTO. No transforma datos, no importa Models, Mappers ni `db.ts`.

#### DTO

Representa exactamente la respuesta externa. No contiene funciones, transformaciones ni dependencias de React.

#### Mapper

Valida, sanea y transforma DTO en Model. No realiza solicitudes HTTP ni maneja estado.

#### Model

Define la estructura interna estable utilizada por la aplicación. No conoce DTO, Services ni Mappers.

#### Hook

Conecta la capa de datos con React. Gestiona estado, carga y errores. Los filtros trabajan exclusivamente con Models.

#### Context

Comparte el carrito y el idioma entre componentes. El carrito utiliza `Product` y `CartItem`, nunca DTO.

#### Component

Renderiza Models y gestiona interacción visual. No importa DTO, Mappers, Services ni `db.ts`, y no ejecuta `fetch`.

#### Page

Compone la interfaz mediante componentes. No accede directamente a datos ni contiene transformaciones.

## Reglas de dependencia

Dependencias permitidas:

```text
Route Handler → Data
Service → DTO
Mapper → DTO + Model
Hook → Service + Mapper + Model
Filter Hook → Model
Cart Hook → Model
Context → Hook + Model
Component → Hook + Model
Page → Component
```

Dependencias prohibidas:

```text
Service → Mapper, Model o Data
Mapper → Service, React o Data
Model → DTO, Service o Mapper
Component → DTO, Mapper, Service, Data o fetch
Page → DTO, Mapper o Data
```

No se permiten archivos `index.ts` o `index.tsx` para exportaciones agrupadas. Cada tipo importante debe tener una única definición y los imports deben apuntar al archivo responsable.

## Estructura del proyecto

```text
src/
├── app/
│   ├── api/products/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── cart/
│   ├── home/
│   ├── layout/
│   └── products/
├── context/
├── data/
├── dtos/
├── hooks/
├── i18n/
├── mappers/
├── models/
├── services/
└── utils/
```

## Internacionalización

El idioma inicial es inglés. El botón del encabezado cambia todo el contenido visible entre inglés y español. Los textos de interfaz se encuentran en `src/i18n/translations.ts`; los componentes no deben incluir copias independientes de esos textos.

Todo el código, incluyendo nombres de variables, funciones, componentes, archivos y tipos, debe escribirse en inglés.

## Carrito

El carrito es estado interno y no necesita DTO ni Mapper mientras no exista un backend específico. Sus operaciones permanecen en `useCart` y se comparten mediante `CartContext`.

Al agregar nuevamente un producto existente se incrementa su cantidad; nunca se crean líneas duplicadas. Los totales se calculan sobre precio por cantidad y se actualizan con cada modificación.

## Diseño responsivo

La aplicación debe conservar contenido legible, controles accesibles y ausencia de desbordamiento horizontal accidental en teléfonos, tabletas, computadoras y monitores grandes. Los desplazamientos horizontales solo se permiten en controles diseñados expresamente para ello, como la lista móvil de categorías.

## Lista de verificación arquitectónica

Antes de aceptar cambios se debe confirmar que:

- Los Services únicamente realizan comunicación HTTP y devuelven DTO.
- Las transformaciones DTO → Model están exclusivamente en Mappers.
- Los Hooks conectan Service, Mapper, Model y estado de React.
- Los filtros y el carrito trabajan con Models.
- Los componentes no importan capas externas ni ejecutan solicitudes.
- Las páginas se limitan a componer componentes.
- No existen exportaciones agrupadas ni tipos importantes duplicados.
- El carrito no duplica productos y actualiza cantidades y totales.
- La traducción cubre todo el contenido visible.
- La interfaz funciona correctamente en móvil, tableta y escritorio.

## Estado actual

El proyecto incluye una demostración funcional del catálogo y del carrito. El botón para continuar al pago es visual porque todavía no existe un backend de órdenes o pagos. Las imágenes del catálogo se obtienen de Unsplash y requieren conexión a internet.
