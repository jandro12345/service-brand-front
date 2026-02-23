# Brand Governance AI - Frontend

Plataforma moderna de gobernanza de marca impulsada por IA, construida con **Next.js 14+** y **React**.

## 🚀 Características

- ✨ Crear y gestionar marcas con generación IA de manuales
- 🎨 Generar assets creativos automáticos
- ✅ Auditar imágenes para cumplimiento de marca
- 📊 Dashboard intuitivo con estadísticas
- 🎯 Interfaz responsiva y moderna
- 🔄 Real-time data updates con React Query

## 📋 Requisitos

- Node.js 18+
- npm o yarn
- Backend API corriendo en `http://localhost:8000`

## ⚙️ Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
echo 'NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1.0' > .env.local

# 3. Iniciar en desarrollo
npm run dev

# 4. Abrir el navegador
open http://localhost:3000
```

## 🏗️ Estructura del Proyecto

```
app/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Dashboard
│   ├── brands/            # Sección de marcas
│   ├── assets/            # Sección de assets
│   ├── audit/             # Auditor de imágenes
│   ├── globals.css        # Estilos globales
│   └── providers.tsx      # Configuración de proveedores
├── components/            # Componentes React
│   ├── layout/           # Componentes de layout
│   ├── brands/           # Componentes de marcas
│   ├── assets/           # Componentes de assets
│   ├── audit/            # Componentes de auditoría
│   └── ui/               # Componentes base UI
├── hooks/                 # Custom hooks
│   ├── useBrands.ts      # Hook para marcas
│   ├── useAssets.ts      # Hook para assets
│   ├── useAudit.ts       # Hook para auditoría
│   └── usePagination.ts  # Hook para paginación
├── services/             # Servicios de API
│   └── api.ts            # Cliente Axios
├── stores/               # Estado global (Zustand)
│   └── store.ts          # Store principal
├── types/                # TypeScript types
│   └── index.ts          # Definiciones de tipos
└── lib/                  # Utilidades
    └── utils.ts          # Funciones helper
```

## 🔌 API Endpoints

Base URL: `http://localhost:8000/api/v1.0`

### Marcas
- `POST /brand/brands` - Crear marca
- `GET /brand/` - Listar marcas (paginado)

### Assets
- `POST /asset/creative` - Generar asset
- `GET /asset/` - Listar assets (paginado, filtrable)

### Auditoría
- `POST /audit-image/audit-image` - Auditar imagen

## 💻 Desarrollo

### Crear una nueva página
```bash
# Crear página en app/nueva-pagina/page.tsx
```

### Agregar un nuevo componente
```bash
# Crear en components/nueva-seccion/NuevoComponente.tsx
```

### Agregar un nuevo hook
```bash
# Crear en hooks/useNuevo.ts
```

## 🛠️ Comandos

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Ejecutar build en producción
npm start

# Linting
npm run lint

# Formato con Prettier
npm run format
```

## 📦 Dependencias Principales

- **Next.js** - Framework React
- **React Query** - Gestión de datos
- **Zustand** - Estado global
- **React Hook Form** - Gestión de formularios
- **Zod** - Validación de esquemas
- **Tailwind CSS** - Estilos
- **Axios** - Cliente HTTP
- **React Hot Toast** - Notificaciones

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t brand-ai .
docker run -p 3000:3000 brand-ai
```

## 📝 Variables de Entorno

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1.0
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazingfeature`)
3. Commit tus cambios (`git commit -m 'Add amazingfeature'`)
4. Push a la rama (`git push origin feature/amazingfeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## 📞 Soporte

Para soporte, abre un issue en el repositorio.

---

**Hecho con ❤️ por el equipo de Brand AI**
