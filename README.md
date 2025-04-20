### Enlace CMS: https://cms-cacto-uniminuto.vercel.app/
### Enlace UI : https://ui-cacto.vercel.app/


# 🎨 Proyecto UNIMINUTO-CACTO

Bienvenido al **Proyecto UNIMINUTO-CACTO**, una aplicación web para el **Centro de Cultura, Arte y Tradiciones de Oriente (CACTO)** de UNIMINUTO. Esta plataforma promueve el arte, la cultura y las tradiciones mediante un **Sistema de Gestión de Contenidos (CMS)** y una **Interfaz de Usuario (UI)** interactiva.

📌 **Repositorios**:

- CMS-Centro-de-Arte-Cultura-Y-Tradicion-de-Oriente
- UI_Project

---

## Tabla de Contenidos

- Descripción General
- Características
- Tecnologías Utilizadas
- Estructura del Proyecto
- Instalación
- Uso
- Contribuir
- Licencia
- Contacto

---

## Descripción General

El proyecto **UNIMINUTO-CACTO** digitaliza y difunde las actividades culturales del Centro de Cultura, Arte y Tradiciones de Oriente. Está compuesto por dos módulos:

- **CMS**: Sistema para administrar eventos, artículos y recursos culturales.
- **UI**: Interfaz interactiva para que los usuarios exploren contenido cultural.

---

## Características

### 🖥️ CMS

- **Gestión de Contenidos**: Administra eventos, artículos y medios culturales.
- **Autenticación de Usuarios**: Inicio de sesión seguro para administradores.
- **Integración con Base de Datos**: Almacena contenido de forma estructurada.
- **APIs RESTful**: Endpoints para interactuar con la UI.

### 📱 UI

- **Diseño Responsivo**: Interfaz adaptable a dispositivos móviles y de escritorio.
- **Exhibición Cultural**: Muestra eventos, galerías, noticias y testimonios.
- **Elementos Interactivos**: Incluye carruseles, galerías de imágenes y secciones dinámicas.
- **Integración con CMS**: Obtiene contenido mediante APIs.

---

## Tecnologías Utilizadas

- **CMS**:
  - **Framework**: Next.js
  - **Lenguaje**: TypeScript
  - **Estilos**: Tailwind CSS
  - **Autenticación**: NextAuth (o similar, por confirmar)
  - **APIs**: RESTful API (integrada con Next.js)
- **UI**:
  - **Framework**: Next.js
  - **Lenguaje**: TypeScript
  - **Estilos**: Tailwind CSS
  - **Componentes**: Carruseles, galerías, secciones dinámicas
- **Otras Herramientas**:
  - **Control de Versiones**: Git, GitHub
  - **Gestor de Paquetes**: npm

---

## Estructura del Proyecto

```plaintext
UNIMINUTO-CACTO/
├── CMS-Centro-de-Arte-Cultura-Y-Tradicion-de-Oriente/
│   ├── actions/              # Acciones del servidor (Next.js)
│   ├── app/                  # Rutas y páginas principales
│   ├── components/           # Componentes reutilizables
│   ├── constants/            # Constantes y datos estáticos
│   ├── hooks/                # Hooks personalizados
│   ├── lib/                  # Utilidades y bibliotecas
│   ├── public/               # Recursos estáticos (imágenes, fuentes)
│   ├── schemas/              # Esquemas de validación
│   ├── stores/               # Gestión de estado
│   ├── utils/                # Funciones de utilidad
│   ├── auth.config.ts        # Configuración de autenticación
│   ├── middleware.ts         # Middleware de Next.js
│   ├── next.config.mjs       # Configuración de Next.js
│   ├── package.json          # Dependencias del proyecto
│   ├── routes.ts             # Definición de rutas
│   ├── tailwind.config.ts    # Configuración de Tailwind CSS
│   ├── tsconfig.json         # Configuración de TypeScript
│   └── README.md             # Documentación del CMS
├── UI_Project/
│   ├── app/                  # Rutas y páginas principales
│   ├── components/           # Componentes reutilizables (e.g., Carousel, HeaderCard)
│   ├── components/dinamic/   # Componentes dinámicos (e.g., AboutUs, Events)
│   ├── constants/            # Constantes (e.g., headersInfo)
│   ├── public/               # Recursos estáticos
│   ├── middleware.ts         # Middleware de Next.js
│   ├── next.config.mjs       # Configuración de Next.js
│   ├── package.json          # Dependencias del proyecto
│   ├── tailwind.config.ts    # Configuración de Tailwind CSS
│   ├── tsconfig.json         # Configuración de TypeScript
│   └── README.md             # Documentación de la UI
└── README.md                 # Documentación principal
```

---

## Instalación

### Prerrequisitos

- **Node.js** (versión 16 o superior recomendada)
- **Git**
- **Base de Datos** (especifica si usas una, e.g., MongoDB, MySQL)

### Configuración del CMS

1. Clona el repositorio:

   ```bash
   git clone https://github.com/sasamile/UNIMINUTO-CACTO.git
   cd UNIMINUTO-CACTO/CMS-Centro-de-Arte-Cultura-Y-Tradicion-de-Oriente
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno:

   - Copia `.env.example` a `.env` y actualiza con las credenciales necesarias (e.g., base de datos, claves de API).

   ```bash
   cp .env.example .env
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

### Configuración de la UI

1. Navega al directorio de la UI:

   ```bash
   cd UNIMINUTO-CACTO/UI_Project
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura los endpoints de la API:

   - Actualiza las URLs de la API en los archivos de configuración o constantes para apuntar al servidor CMS.

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

---

## Uso

### CMS

- Accede al panel de administración en `http://localhost:3000` (o el puerto configurado).
- Inicia sesión con las credenciales de administrador.
- Gestiona contenido como eventos, artículos y medios.

### UI

- Abre la UI en `http://localhost:3000` (o el puerto configurado).
- Explora secciones como eventos, galerías, noticias y testimonios.
- Asegúrate de que el servidor CMS esté activo para cargar contenido dinámico.

---

## Contribuir

¡Tus contribuciones son bienvenidas! Sigue estos pasos:

1. Haz un fork del repositorio.

2. Crea una nueva rama:

   ```bash
   git checkout -b feature/tu-funcionalidad
   ```

3. Realiza los cambios y haz commit:

   ```bash
   git commit -m "Añade tu funcionalidad"
   ```

4. Sube los cambios:

   ```bash
   git push origin feature/tu-funcionalidad
   ```

5. Abre un Pull Request en GitHub.

Sigue el código de conducta y asegura que tu código cumpla con los estándares del proyecto.

---

## Licencia

Este proyecto está licenciado bajo la **Licencia MIT**. Consulta el archivo LICENSE para más detalles.

---

## Contacto

Para consultas, contacta a:

- **Mantenedor**: \[Tu Nombre, e.g., sasamile\]
- **Correo**: \[Tu Correo, e.g., sasamile@example.com\]
- **Issues en GitHub**: https://github.com/sasamile/UNIMINUTO-CACTO/issues

---

*Desarrollado como parte de la iniciativa del Centro de Cultura, Arte y Tradiciones de Oriente de UNIMINUTO.* 🖌️
