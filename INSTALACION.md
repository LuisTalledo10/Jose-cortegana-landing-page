# 🚀 Guía de Instalación Rápida
## José Cortegana - Diseño de Interiores

### ⚡ Inicio Rápido (5 minutos)

1. **Descargar los archivos del proyecto**
2. **Abrir una terminal en la carpeta del proyecto**
3. **Ejecutar un servidor local:**

#### Opción A: Python (Recomendado)
```bash
python -m http.server 8000
```
Luego ir a: http://localhost:8000

#### Opción B: Node.js
```bash
npx serve .
```

#### Opción C: PHP
```bash
php -S localhost:8000
```

#### Opción D: VS Code Live Server
1. Instalar extensión "Live Server"
2. Click derecho en `index.html`
3. Seleccionar "Open with Live Server"

---

### 📷 IMPORTANTE: Agregar Imágenes Reales

El sitio tiene placeholders para las imágenes. Para completarlo:

1. **Reemplazar estos archivos en `assets/images/`:**
   - `logo.png` - Logo de la empresa
   - `hero-bg.jpg` - Imagen de fondo principal
   - `cocina-1.jpg`, `cocina-2.jpg` - Fotos de cocinas
   - `sala-1.jpg`, `sala-2.jpg` - Fotos de salas
   - `comedor-1.jpg`, `comedor-2.jpg` - Fotos de comedores
   - `dormitorio-1.jpg`, `dormitorio-2.jpg` - Fotos de dormitorios
   - `about-image.jpg` - Foto del equipo/fundador

2. **Dimensiones recomendadas:**
   - Logo: 200x60px (PNG transparente)
   - Hero: 1920x1080px (JPG alta calidad)
   - Catálogo: 600x400px (JPG optimizadas)
   - About: 800x600px (JPG)

---

### 🔧 Personalización Básica

#### Cambiar información de contacto:
1. Buscar y reemplazar `+51999999999` por tu teléfono
2. Buscar y reemplazar `contacto@josecortegana.com` por tu email
3. Actualizar dirección en `components/contact.html`

#### Cambiar colores:
Editar variables en `css/styles.css`:
```css
:root {
    --primary-color: #5C2E2E;  /* Tu color principal */
    --secondary-color: #F5F1E6; /* Tu color secundario */
}
```

---

### 🌐 Subir a Internet

#### Hosting Gratuito (Netlify):
1. Comprimir toda la carpeta en ZIP
2. Ir a [netlify.com](https://netlify.com)
3. Arrastrar el ZIP a Netlify
4. ¡Listo! Tendrás una URL como: `https://amazing-site-123.netlify.app`

#### Hosting con Dominio Propio:
1. Subir archivos vía FTP a tu hosting
2. Asegurar que `index.html` esté en la raíz
3. Configurar SSL/HTTPS

---

### 📞 ¿Necesitas Ayuda?

- **El sitio no carga**: Verificar que estés ejecutando un servidor local
- **Imágenes no aparecen**: Verificar rutas y nombres de archivos
- **Formulario no funciona**: Necesitas configurar un backend (ver README.md)
- **Personalización**: Revisar comentarios en el código

---

### ✅ Checklist de Lanzamiento

- [ ] Todas las imágenes reemplazadas
- [ ] Información de contacto actualizada
- [ ] Enlaces de redes sociales configurados
- [ ] Formulario de contacto configurado
- [ ] Sitio probado en móviles
- [ ] SSL/HTTPS activado
- [ ] Dominio configurado

**¡Tu sitio web premium está listo!** 🎉