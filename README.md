# Brand Governance AI - Frontend

Plataforma moderna de gobernanza de marca impulsada por Inteligencia Artificial, desarrollada con **Next.js** y **React**. Este repositorio contiene la aplicación frontend que se comunica con una API backend para gestionar marcas, generar assets creativos y auditar imágenes.

---

## 🚀 Características

- ✨ Crear y gestionar marcas con generación IA de manuales.
- 🎨 Generar assets creativos automáticos.
- ✅ Auditar imágenes para cumplimiento de marca.
- 📊 Dashboard intuitivo con estadísticas.
- 🔄 Actualización de datos en tiempo real con React Query.

## 📋 Requisitos

- Node.js 18 o superior.
- npm o yarn.
- Backend API ejecutándose en `http://localhost:8000` (o la URL configurada).

## ⚙️ Instalación

```bash
# 1. Clonar el repositorio (si aún no lo has hecho)
git clone <repo-url>
cd service-brand-front

# 2. Instalar dependencias
npm install
# o yarn install

# 3. Configurar variables de entorno
cat << 'EOF' > .env.local
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1.0
EOF

# 4. Iniciar el servidor de desarrollo
npm run dev

# 5. Abrir el navegador
open http://localhost:3000
```

> **Nota:** Ajusta `NEXT_PUBLIC_API_URL` si tu backend está en otra dirección.

## 🏗️ Estructura del proyecto

```
app/
├── layout.tsx         # Layout raíz del routing de Next.js
├── page.tsx           # Página de dashboard principal
├── brands/            # Rutas relacionadas con marcas
├── assets/            # Rutas relacionadas con assets
├── audit/             # Rutas para la auditoría de imágenes
├── globals.css        # Estilos globales
└── providers.tsx      # Proveedores (React Query, Theme, etc.)

components/
├── layout/            # Componentes de diseño (Header, Sidebar...)
├── brands/            # Formularios y listas de marcas
├── assets/            # UI para assets (formularios, lista)
├── audit/             # Componentes de auditoría (resultados, carga)
└── ui/                # Componentes base reutilizables (Button, Input...)

hooks/                 # Hooks personalizados
├── useBrands.ts       # Lógica para llamadas a marcas
├── useAssets.ts       # Lógica para llamados de assets
├── useAudit.ts        # Lógica de auditoría de imágenes
└── usePagination.ts   # Hook de paginación genérico

services/              # Cliente HTTP y servicios
└── api.ts             # Configuración de Axios con interceptores

stores/                # Estado global (Zustand)
└── store.ts           # Store principal y helpers

types/                 # Definiciones de tipos TypeScript
└── index.ts           # Tipos compartidos

lib/                   # Utilidades generales
└── utils.ts           # Funciones helper
```

## 🔌 API Endpoints

Base URL: `http://localhost:8000/api/v1.0`

### Marcas
- `POST /brand/brands` – Crear marca.
- `GET /brand/` – Listar marcas (paginado).

### Assets
- `POST /asset/creative` – Generar asset creativo vía IA.
- `GET /asset/` – Listar assets (paginado, filtrable).

### Auditoría
- `POST /audit-image/audit-image` – Auditar imagen.

> Consulta la documentación del backend para detalles adicionales o parámetros avanzados.

## 💻 Desarrollo

### Agregar nuevas páginas
Crea un archivo under `app/nombre/page.tsx`.

### Crear componentes
Añade componentes en `components/<seccion>/NombreComponente.tsx`.

### Hooks personalizados
Coloca hooks en `hooks/useNombre.ts` y exporta tipos si es necesario.

### Estilo y linting
- Formatea con Prettier: `npm run format`.
- Ejecuta ESLint: `npm run lint`.

## 🛠️ Scripts disponibles

```bash
npm run dev         # Inicializar servidor de desarrollo
npm run build       # Generar build de producción
npm start           # Ejecutar build en modo producción
npm run lint        # Linting con ESLint
npm run format      # Formatear con Prettier
```

## 📦 Dependencias principales

- **Next.js** – Framework React.
- **React Query** – Gestión de datos asincrónicos.
- **Zustand** – Manejo de estado global ligero.
- **React Hook Form** – Formularios y validación.
- **Zod** – Esquemas de validación de datos.
- **Tailwind CSS** – Utilidades de CSS.
- **Axios** – Cliente HTTP.
- **React Hot Toast** – Notificaciones.

## 🚀 Deployment

### Vercel (recomendado)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t brand-ai .
docker run -p 3000:3000 brand-ai
```

## 📝 Variables de entorno

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1.0
```
