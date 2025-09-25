# José Cortegana | Diseño de Interiores

Sitio web profesional para empresa de diseño de interiores y fabricación de mobiliarios premium.

## 🎨 Descripción del Proyecto

Este sitio web ha sido diseñado específicamente para **José Cortegana - Diseño de Interiores**, una empresa especializada en la fabricación de mobiliarios y diseño de espacios interiores. El sitio presenta una estética elegante, moderna y sofisticada, enfocada en mostrar un catálogo visual de productos y servicios premium.

## 📋 Características Principales

- **Diseño Premium**: Estética minimalista inspirada en marcas de lujo como Dior y Armani
- **Arquitectura Modular**: Componentes HTML separados cargados dinámicamente
- **Responsive Design**: Adaptación perfecta a todos los dispositivos
- **Catálogo Interactivo**: Sistema de filtrado dinámico por categorías
- **Modal de Imágenes**: Visualización ampliada de productos
- **Formulario de Contacto**: Validación avanzada en tiempo real
- **Animaciones Suaves**: Efectos CSS3 y transiciones elegantes
- **SEO Optimizado**: Meta tags y estructura semántica
- **Accesibilidad**: Cumple estándares WCAG

## 🎨 Paleta de Colores

- **Burdeos Oscuro**: `#5C2E2E` (Color protagonista)
- **Beige Claro**: `#F5F1E6` (Fondos)
- **Gris Oscuro**: `#2C2C2C` (Textos principales)
- **Gris Medio**: `#666666` (Textos secundarios)

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica moderna
- **CSS3**: Estilos avanzados con variables CSS, Grid y Flexbox
- **JavaScript ES6+**: Funcionalidades interactivas modernas
- **Font Awesome**: Iconografía profesional
- **Google Fonts**: Tipografías Montserrat y Open Sans

## 📁 Estructura del Proyecto

```
Jose-cortegana-landing-page/
├── index.html                 # Página principal
├── css/
│   ├── styles.css            # Estilos globales
│   └── responsive.css        # Estilos adicionales y responsive
├── js/
│   └── main.js               # JavaScript principal
├── components/
│   ├── header.html           # Navegación principal
│   ├── hero.html             # Sección hero
│   ├── catalog.html          # Catálogo de productos
│   ├── services.html         # Servicios de la empresa
│   ├── about.html            # Información de la empresa
│   ├── contact.html          # Formulario de contacto
│   └── footer.html           # Pie de página
├── assets/
│   ├── images/               # Imágenes del sitio
│   │   ├── cocina/           # Imágenes de cocinas
│   │   │   ├── cocina-1.jpg
│   │   │   ├── cocina-2.jpg
│   │   │   └── ... (más imágenes)
│   │   ├── sala/             # Imágenes de salas
│   │   │   ├── sala-1.jpg
│   │   │   ├── sala-2.jpg
│   │   │   └── ... (más imágenes)
│   │   ├── comedor/          # Imágenes de comedores
│   │   │   ├── comedor-1.jpg
│   │   │   ├── comedor-2.jpg
│   │   │   └── ... (más imágenes)
│   │   ├── dormitorios/      # Imágenes de dormitorios
│   │   │   ├── dormitorio-1.jpg
│   │   │   ├── dormitorio-2.jpg
│   │   │   └── ... (más imágenes)
│   │   ├── logo.png          # Logo principal
│   │   ├── logo-white.png    # Logo blanco para footer
│   │   ├── hero-bg.jpg       # Imagen de fondo hero
│   │   ├── about-image.jpg   # Imagen de la sección "Sobre nosotros"
│   │   └── favicon.ico       # Favicon del sitio
│   └── icons/                # Iconos adicionales
└── README.md                 # Documentación
```

## 🚀 Instalación y Uso

### Opción 1: Servidor Web Local

1. **Descargar/Clonar** el proyecto
2. **Instalar un servidor web local**:
   - **Python**: `python -m http.server 8000`
   - **Node.js**: `npx serve .`
   - **PHP**: `php -S localhost:8000`
   - **Live Server** (VS Code Extension)

3. **Abrir en navegador**: `http://localhost:8000`

### Opción 2: Hosting Web

1. Subir todos los archivos al servidor web
2. Asegurar que `index.html` esté en la raíz
3. Configurar el servidor para servir archivos estáticos

## 📷 Imágenes Requeridas

Para completar el sitio, necesitas agregar las siguientes imágenes a `assets/images/`:

### Imágenes Obligatorias
- `logo.png` - Logo de la empresa (200x60px, PNG transparente)
- `logo-white.png` - Logo blanco para footer (200x60px, PNG transparente)
- `hero-bg.jpg` - Imagen de fondo hero (1920x1080px, alta calidad)
- `about-image.jpg` - Foto del equipo/fundador (800x600px)

### Catálogo de Productos (Organizadas por Categoría)

El sistema está diseñado para cargar automáticamente las imágenes organizadas por carpetas:

#### **📁 Estructura de Imágenes por Categoría:**
- `assets/images/cocina/` - Todas las imágenes de cocinas
- `assets/images/sala/` - Todas las imágenes de salas  
- `assets/images/comedor/` - Todas las imágenes de comedores
- `assets/images/dormitorios/` - Todas las imágenes de dormitorios

#### **📸 Cómo Agregar Más Productos:**

1. **Agrega las imágenes** en la carpeta correspondiente:
   ```
   assets/images/cocina/
   ├── cocina-1.jpg
   ├── cocina-2.jpg
   ├── cocina-moderna.jpg      # ← Nueva imagen
   ├── cocina-clasica.jpg      # ← Nueva imagen
   └── mi-cocina-custom.jpg    # ← Nueva imagen
   ```

2. **El sistema detectará automáticamente** las nuevas imágenes y las mostrará en el catálogo

3. **Formatos admitidos:** JPG, JPEG, PNG, WEBP

4. **Dimensiones recomendadas:** 600x400px para mejor rendimiento

#### **⚡ Funcionalidad Inteligente:**
- **Detección automática** de nuevas imágenes
- **Títulos dinámicos** generados según el tipo de ambiente
- **Descripciones inteligentes** para cada categoría
- **Sin necesidad de editar código** para agregar productos

### Catálogo de Productos (Manual - Solo para Referencia)
Si prefieres control manual, las siguientes son las imágenes básicas:
- `cocina-1.jpg` - Cocina moderna premium (600x400px)
- `cocina-2.jpg` - Cocina integral minimalista (600x400px)
- `sala-1.jpg` - Sala de estar elegante (600x400px)
- `sala-2.jpg` - Sala familiar confortable (600x400px)
- `comedor-1.jpg` - Comedor ejecutivo (600x400px)
- `comedor-2.jpg` - Comedor contemporáneo (600x400px)
- `dormitorio-1.jpg` - Dormitorio principal suite (600x400px)
- `dormitorio-2.jpg` - Dormitorio juvenil moderno (600x400px)

### Imágenes de Respaldo
- `placeholder.jpg` - Imagen por defecto para productos
- `placeholder-about.jpg` - Imagen por defecto para sección "Sobre Nosotros"
- `favicon.ico` - Favicon del sitio

## ⚙️ Funcionalidades Técnicas

### Carga Dinámica de Componentes
```javascript
// Cada sección se carga dinámicamente desde components/
await loadAllComponents();
```

### Filtrado Interactivo del Catálogo
- Filtros por categoría: Todos, Cocina, Sala, Comedor, Dormitorios
- Animaciones suaves al filtrar
- Modal con información detallada

### Formulario de Contacto
- Validación en tiempo real
- Campos obligatorios marcados
- Mensajes de error específicos
- Integración con WhatsApp

### Efectos de Scroll
- Header que cambia al hacer scroll
- Navegación activa según sección visible
- Animaciones al aparecer elementos

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

### Características Móviles
- Menú hamburguesa
- Botones táctiles optimizados
- Imágenes adaptativas
- Layout de una columna

## 🎯 SEO y Rendimiento

### Optimizaciones SEO
- Meta tags completos
- Estructura HTML semántica
- Alt text en imágenes
- URLs amigables
- Schema markup recomendado

### Rendimiento
- CSS y JS minificados en producción
- Imágenes optimizadas
- Carga diferida de componentes
- Transiciones hardware-accelerated

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `css/styles.css`:
```css
:root {
    --primary-color: #5C2E2E;
    --secondary-color: #F5F1E6;
    --accent-color: #8B4A4A;
    /* ... más colores */
}
```

### Agregar Productos al Catálogo
Modifica el array `catalogData` en `js/main.js`:
```javascript
const catalogData = [
    {
        id: 9,
        title: "Nuevo Producto",
        category: "categoria",
        image: "assets/images/nuevo-producto.jpg",
        description: "Descripción del producto..."
    }
];
```

### Configurar Información de Contacto
1. **Teléfono**: Busca y reemplaza `+51999999999`
2. **Email**: Busca y reemplaza `contacto@josecortegana.com`
3. **Dirección**: Edita en `components/contact.html` y `components/footer.html`
4. **Redes Sociales**: Actualiza los enlaces en los componentes

## 📧 Configuración del Formulario

Para que el formulario funcione completamente, necesitas:

1. **Backend para procesar envíos** (PHP, Node.js, Python, etc.)
2. **Servicio de email** (SendGrid, Mailgun, etc.)
3. **Actualizar la función `handleContactSubmit`** en `js/main.js`

### Ejemplo de Integración con FormSubmit
```html
<form action="https://formsubmit.co/tu-email@ejemplo.com" method="POST">
    <!-- Campos del formulario -->
</form>
```

## 🌐 Despliegue

### Hosting Recomendado
- **Netlify** (recomendado para sitios estáticos)
- **Vercel**
- **GitHub Pages**
- **Cualquier hosting con soporte HTML/CSS/JS**

### Pasos para Despliegue
1. Comprimir el proyecto en ZIP
2. Subir al hosting elegido
3. Configurar dominio personalizado
4. Configurar SSL/HTTPS
5. Configurar redirects si es necesario

## 🔒 Consideraciones de Seguridad

- Validar datos del formulario en el servidor
- Implementar CAPTCHA si hay spam
- Configurar HTTPS
- Sanitizar inputs del usuario
- Implementar rate limiting

## 🛠️ Mantenimiento

### Actualizaciones Regulares
- Revisar enlaces rotos
- Actualizar información de contacto
- Agregar nuevos productos al catálogo
- Optimizar imágenes periódicamente
- Monitorear velocidad de carga

### Respaldos
- Respaldar archivos regularmente
- Usar control de versiones (Git)
- Documentar cambios importantes

## 📞 Soporte

Para soporte técnico o consultas sobre personalización:
- Documentación completa incluida en el código
- Código comentado para fácil comprensión
- Estructura modular para fácil mantenimiento

## 📄 Licencia

Este proyecto es de uso privado para José Cortegana - Diseño de Interiores.

---

**Desarrollado con ❤️ para José Cortegana - Diseño de Interiores**

*Sitio web premium que refleja la calidad y elegancia de sus servicios de diseño de interiores.*