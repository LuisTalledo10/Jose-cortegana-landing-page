# Sección TikTok - Jose Cortegana Diseño de Interiores

## 📱 Descripción

La sección TikTok muestra un feed dinámico de los videos de la empresa en un formato de carrusel vertical similar a la experiencia nativa de TikTok. Los usuarios pueden interactuar con los videos y ser redirigidos al perfil oficial.

## ✨ Características

### Diseño Visual
- **Layout Responsivo**: Se adapta perfectamente a dispositivos móviles y desktop
- **Aspecto Ratio 9:16**: Mantiene las proporciones características de TikTok
- **Animaciones Suaves**: Efectos hover y transiciones elegantes
- **Paleta de Colores**: Integrada con el diseño de la empresa

### Funcionalidad Interactiva
- **Grid Dinámico**: Cuadrícula adaptativa que muestra múltiples videos
- **Modal de Video**: Ventana emergente para reproducir videos en grande
- **Enlaces Directos**: Botones que llevan al perfil oficial de TikTok
- **Carga Lazy**: Imágenes se cargan según sea necesario

### Elementos de UI
- **Iconos TikTok**: Identificación visual clara de la plataforma
- **Botones de Reproducción**: Overlays intuitivos al hacer hover
- **Información del Video**: Títulos y descripciones atractivas
- **CTA Principal**: Botón prominente "Ver más en TikTok"

## 🛠️ Implementación Técnica

### Archivos Modificados/Creados

#### 1. Componente HTML
```
components/tiktok.html
```
- Estructura HTML de la sección
- Modal para reproducción de videos
- Enlaces al perfil oficial

#### 2. Estilos CSS
```
css/styles.css (adición)
css/responsive.css (actualizado)
```
- Estilos principales de la sección TikTok
- Responsividad para móviles y tablets
- Animaciones y efectos visuales

#### 3. JavaScript
```
js/main.js (actualizado)
js/tiktok-api-integration.js (ejemplo)
```
- Funcionalidad interactiva
- Manejo de modales
- Simulación de datos (para desarrollo)
- Ejemplo de integración con API real

### Estructura del Código

#### Estado de la Aplicación
```javascript
AppState = {
    // ... otros estados
    isTikTokModalOpen: false,
    tiktokVideos: []
}
```

#### Funciones Principales
- `loadTikTokVideos()`: Carga y muestra los videos
- `renderTikTokVideos()`: Renderiza el HTML de los videos
- `openTikTokModal()`: Abre modal de reproducción
- `closeTikTokModal()`: Cierra modal de reproducción
- `initializeTikTok()`: Inicializa toda la funcionalidad

## 🎨 Personalización de Diseño

### Variables CSS Utilizadas
```css
--primary-color: #5C2E2E      /* Color principal de la empresa */
--secondary-color: #F5F1E6     /* Color secundario */
--accent-color: #8B4A4A        /* Color de acento */
```

### Colores TikTok
```css
background: linear-gradient(135deg, #ff0050, #ff4757)  /* Gradiente TikTok */
```

### Breakpoints Responsivos
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 📱 Integración con TikTok Real

### Para Desarrollo (Actual)
- Utiliza datos simulados
- Imágenes de placeholder del catálogo existente
- URLs que redirigen al perfil real

### Para Producción (Recomendado)
```javascript
// Ver archivo: js/tiktok-api-integration.js
const api = new TikTokAPI('ACCESS_TOKEN');
const videos = await api.getUserVideos('jc.disenointerior');
```

#### Requisitos para API Real:
1. **TikTok for Developers Account**
2. **App ID y App Secret**
3. **Access Token**
4. **Servidor Backend** (Node.js/Express recomendado)
5. **Configuración CORS**

### Configuración Backend (Ejemplo)
```bash
# Instalar dependencias
npm install express cors axios dotenv

# Variables de entorno (.env)
TIKTOK_APP_ID=your_app_id
TIKTOK_APP_SECRET=your_app_secret
TIKTOK_ACCESS_TOKEN=your_access_token
```

## 🚀 Cómo Usar

### 1. Desarrollo Local
```bash
# Iniciar servidor local
python -m http.server 8000
# o
npx serve .
```

### 2. Personalizar Contenido
Editar `js/main.js` línea ~940 para cambiar los datos simulados:

```javascript
const tiktokVideosData = [
    {
        id: 1,
        title: "Tu título aquí",
        description: "Tu descripción aquí",
        thumbnail: "ruta/a/tu/imagen.jpg",
        videoUrl: "https://www.tiktok.com/@tu_usuario/video/id"
    }
    // ... más videos
];
```

### 3. Cambiar Perfil de TikTok
Actualizar todas las referencias a:
```
https://www.tiktok.com/@jc.disenointerior
```

## 📋 Lista de Verificación

### ✅ Implementado
- [x] Diseño responsivo
- [x] Grid de videos dinámico
- [x] Modal interactivo
- [x] Animaciones y efectos
- [x] Integración con el sitio existente
- [x] Datos simulados funcionales
- [x] Enlaces al perfil real
- [x] Accesibilidad básica
- [x] SEO friendly

### 🔄 Para Futuras Mejoras
- [ ] Integración con API real de TikTok
- [ ] Cache de videos
- [ ] Lazy loading avanzado
- [ ] Analytics de interacciones
- [ ] Más opciones de filtrado
- [ ] Scroll infinito

## 🐛 Troubleshooting

### Video no se carga en modal
- Verificar que el iframe src esté configurado correctamente
- Comprobar políticas de CORS del servidor

### Imágenes no aparecen
- Verificar rutas de las imágenes thumbnail
- Confirmar que las imágenes existen en el directorio

### Estilos no se aplican
- Verificar que los archivos CSS estén enlazados
- Confirmar orden de carga de los estilos

## 📞 Soporte

Para dudas o problemas con la implementación, referirse a:
- Documentación de TikTok for Developers
- Código de ejemplo en `js/tiktok-api-integration.js`
- Comentarios en el código fuente