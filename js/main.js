/**
 * JOSE CORTEGANA - DISEÑO DE INTERIORES
 * JavaScript principal para funcionalidades del sitio web
 */

// Estado de la aplicación
const AppState = {
    currentFilter: 'todos',
    isModalOpen: false,
    isMenuOpen: false,
    components: {
        header: null,
        hero: null,
        catalog: null,
        services: null,
        about: null,
        tiktok: null,
        contact: null,
        banner: null,
        footer: null
    }
};

/**
 * Cargar imágenes dinámicamente desde las carpetas de categorías
 */
async function loadCategoryImages(category) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const categoryImages = [];
    
    // Lista de imágenes conocidas por categoría
    const knownImages = {
        'cocina': [
            'cocina-1.jpg', 'cocina-2.jpg', 'cocina-3.jpg', 'cocina-4.jpg',
            'cocina-moderna.jpg', 'cocina-clasica.jpg', 'cocina-industrial.jpg',
            'cocina1.png', 'cocina2.png', 'cocina3.png', 'cocina4.png', 'cocina5.png',
            'cocina6.png', 'cocina7.png', 'cocina8.png', 'cocina9.png', 'cocina10.png', 'cocina11.png'
        ],
        'sala': [
            'sala-1.jpg', 'sala-2.jpg', 'sala-3.jpg', 'sala-4.jpg',
            'sala-moderna.jpg', 'sala-clasica.jpg', 'sala-minimalista.jpg'
        ],
        'comedor': [
            'comedor-1.jpg', 'comedor-2.jpg', 'comedor-3.jpg', 'comedor-4.jpg',
            'comedor-formal.jpg', 'comedor-familiar.jpg', 'comedor-ejecutivo.jpg'
        ],
        'dormitorios': [
            'dormitorio-1.jpg', 'dormitorio-2.jpg', 'dormitorio-3.jpg', 'dormitorio-4.jpg',
            'dormitorio-principal.jpg', 'dormitorio-juvenil.jpg', 'dormitorio-infantil.jpg'
        ]
    };
    
    // Verificar qué imágenes existen realmente
    for (const imageName of knownImages[category] || []) {
        const imagePath = `assets/images/${category}/${imageName}`;
        try {
            const response = await fetch(imagePath, { method: 'HEAD' });
            if (response.ok) {
                categoryImages.push(imagePath);
            }
        } catch (error) {
            // Imagen no encontrada, continuar con la siguiente
            console.log(`Imagen no encontrada: ${imagePath}`);
        }
    }
    
    return categoryImages;
}

/**
 * Generar datos de catálogo dinámicamente basado en imágenes disponibles
 */
async function generateCatalogData() {
    const categories = ['cocina', 'sala', 'comedor', 'dormitorios'];
    const generatedData = [];
    let itemId = 1;
    
    const categoryTitles = {
        'cocina': [
            'Cocina Moderna Premium', 'Cocina Integral Minimalista', 'Cocina Clásica Elegante',
            'Cocina Industrial Contemporánea', 'Cocina de Lujo Europea', 'Cocina Funcional Familiar',
            'Cocina Gourmet Profesional', 'Cocina Rústica Moderna', 'Cocina Minimalista Blanca',
            'Cocina con Isla Central', 'Cocina Ejecutiva Premium', 'Cocina Mediterránea',
            'Cocina de Diseño Italiano', 'Cocina Contemporánea', 'Cocina Americana Moderna'
        ],
        'sala': [
            'Sala de Estar Elegante', 'Sala Familiar Confortable', 'Sala Moderna Minimalista',
            'Sala Clásica Sofisticada', 'Sala de Entretenimiento', 'Sala Ejecutiva'
        ],
        'comedor': [
            'Comedor Ejecutivo', 'Comedor Contemporáneo', 'Comedor Familiar',
            'Comedor Formal', 'Comedor Moderno', 'Comedor Clásico'
        ],
        'dormitorios': [
            'Dormitorio Principal Suite', 'Dormitorio Juvenil Moderno', 'Dormitorio Infantil',
            'Dormitorio de Invitados', 'Dormitorio Matrimonial', 'Dormitorio Minimalista'
        ]
    };
    
    const categoryDescriptions = {
        'cocina': [
            'Diseño contemporáneo con acabados premium y funcionalidad máxima.',
            'Líneas limpias y espacios optimizados para la familia moderna.',
            'Elegancia clásica con materiales de primera calidad.',
            'Estilo industrial con detalles contemporáneos únicos.',
            'Cocina de lujo con acabados excepcionales y diseño europeo.',
            'Diseño funcional que maximiza cada centímetro disponible.',
            'Espacio gourmet equipado para chefs exigentes.',
            'Combinación perfecta entre rusticidad y modernidad.',
            'Pureza minimalista con acabados en blanco inmaculado.',
            'Isla central funcional para cocinar y socializar.',
            'Diseño ejecutivo con materiales premium y tecnología integrada.',
            'Calidez mediterránea con detalles artesanales.',
            'Elegancia italiana con líneas sofisticadas.',
            'Vanguardia contemporánea en cada detalle.',
            'Estilo americano moderno con espacios amplios.'
        ],
        'sala': [
            'Espacio elegante para relajación y entretenimiento familiar.',
            'Diseño acogedor que combina confort y estilo moderno.',
            'Minimalismo sofisticado con líneas puras y espacios abiertos.',
            'Sofisticación clásica con muebles de diseño atemporal.',
            'Centro de entretenimiento con tecnología integrada.',
            'Ambiente ejecutivo para reuniones y descanso profesional.'
        ],
        'comedor': [
            'Mesa y sillas de alta gama para cenas formales y reuniones.',
            'Diseño contemporáneo perfecto para comidas familiares.',
            'Espacio familiar cálido y acogedor para el día a día.',
            'Elegancia formal para ocasiones especiales.',
            'Líneas modernas y materiales de vanguardia.',
            'Diseño clásico con detalles refinados y atemporales.'
        ],
        'dormitorios': [
            'Suite principal con closet integrado y acabados de lujo.',
            'Diseño funcional y moderno ideal para jóvenes.',
            'Espacio seguro y creativo para los más pequeños.',
            'Dormitorio acogedor y elegante para visitas.',
            'Ambiente relajante con storage inteligente.',
            'Simplicidad elegante con elementos esenciales.'
        ]
    };
    
    for (const category of categories) {
        const images = await loadCategoryImages(category);
        const titles = categoryTitles[category];
        const descriptions = categoryDescriptions[category];
        
        images.forEach((imagePath, index) => {
            if (index < titles.length) {
                generatedData.push({
                    id: itemId++,
                    title: titles[index],
                    category: category,
                    image: imagePath,
                    description: descriptions[index] || `Hermoso diseño de ${category} con acabados premium y atención al detalle.`
                });
            }
        });
    }
    
    return generatedData;
}
const catalogData = [
    {
        id: 1,
        title: "Cocina Moderna Premium",
        category: "cocina",
        image: "assets/images/cocina/cocina-1.jpg",
        description: "Diseño contemporáneo con acabados en melamina blanca y detalles en madera natural. Incluye isla central con desayunador."
    },
    {
        id: 2,
        title: "Cocina Integral Minimalista",
        category: "cocina",
        image: "assets/images/cocina/cocina-2.jpg",
        description: "Líneas limpias y funcionalidad máxima. Electrodomésticos empotrados y sistema de almacenamiento optimizado."
    },
    {
        id: 3,
        title: "Sala de Estar Elegante",
        category: "sala",
        image: "assets/images/sala/sala-1.jpg",
        description: "Conjunto de sofás tapizados en cuero premium con mesa de centro en madera maciza y detalles metálicos."
    },
    {
        id: 4,
        title: "Sala Familiar Confortable",
        category: "sala",
        image: "assets/images/sala/sala-2.jpg",
        description: "Diseño acogedor con sofás modulares, sistema de entretenimiento integrado y iluminación ambiental."
    },
    {
        id: 5,
        title: "Comedor Ejecutivo",
        category: "comedor",
        image: "assets/images/comedor/comedor-1.jpg",
        description: "Mesa extensible para 8 personas en madera noble con sillas tapizadas en cuero y buffet a juego."
    },
    {
        id: 6,
        title: "Comedor Contemporáneo",
        category: "comedor",
        image: "assets/images/comedor/comedor-2.jpg",
        description: "Diseño moderno con mesa de vidrio templado, base metálica y sillas de diseño italiano."
    },
    {
        id: 7,
        title: "Dormitorio Principal Suite",
        category: "dormitorios",
        image: "assets/images/dormitorios/dormitorio-1.jpg",
        description: "Closet walk-in, cama king size con cabecera tapizada y muebles complementarios en melamina premium."
    },
    {
        id: 8,
        title: "Dormitorio Juvenil Moderno",
        category: "dormitorios",
        image: "assets/images/dormitorios/dormitorio-2.jpg",
        description: "Diseño funcional con escritorio integrado, cama con cajones de almacenaje y decoración personalizada."
    }
];

/**
 * Inicialización de la aplicación
 */
document.addEventListener('DOMContentLoaded', async function() {
    showLoadingSpinner();
    
    try {
        // Cargar todos los componentes
        await loadAllComponents();
        
        // Generar datos de catálogo dinámicamente
        const dynamicCatalogData = await generateCatalogData();
        
        // Si hay datos dinámicos, usarlos; sino usar los estáticos
        if (dynamicCatalogData.length > 0) {
            // Reemplazar catalogData global con datos dinámicos
            window.catalogData = dynamicCatalogData;
        } else {
            // Usar datos estáticos como fallback
            window.catalogData = catalogData;
        }
        
        // Inicializar funcionalidades
        initializeNavigation();
        initializeCatalog();
        initializeModal();
        initializeScrollEffects();
        initializeContactForm();
        initializeTikTok();
        
        hideLoadingSpinner();
        
        // Animación de entrada
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
        
    } catch (error) {
        console.error('Error al inicializar la aplicación:', error);
        // En caso de error, usar datos estáticos
        window.catalogData = catalogData;
        initializeNavigation();
        initializeCatalog();
        initializeModal();
        initializeScrollEffects();
        initializeContactForm();
        initializeTikTok();
        hideLoadingSpinner();
    }
});

/**
 * Carga todos los componentes HTML
 */
async function loadAllComponents() {
    const components = [
        { name: 'header', container: 'header-container' },
        { name: 'hero', container: 'hero-container' },
        { name: 'catalog', container: 'catalog-container' },
        { name: 'services', container: 'services-container' },
        { name: 'about', container: 'about-container' },
        { name: 'tiktok', container: 'tiktok-container' },
        { name: 'contact', container: 'contact-container' },
        { name: 'banner', container: 'banner-container' },
        { name: 'footer', container: 'footer-container' }
    ];
    
    const loadPromises = components.map(async (component) => {
        try {
            const response = await fetch(`components/${component.name}.html`);
            if (!response.ok) throw new Error(`Error cargando ${component.name}: ${response.status}`);
            
            const html = await response.text();
            const container = document.getElementById(component.container);
            
            if (container) {
                container.innerHTML = html;
                AppState.components[component.name] = html;
            }
        } catch (error) {
            console.error(`Error cargando componente ${component.name}:`, error);
            // Cargar contenido de respaldo si existe
            loadFallbackContent(component.name, component.container);
        }
    });
    
    await Promise.all(loadPromises);
}

/**
 * Contenido de respaldo en caso de error al cargar componentes
 */
function loadFallbackContent(componentName, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const fallbackContent = {
        header: `
            <header class="header">
                <div class="container">
                    <nav class="navbar">
                        <img src="assets/images/SUB LOGO 1.jpg" alt="Jose Cortegana" class="logo">
                        <ul class="nav-menu">
                            <li><a href="#home" class="nav-link active">Inicio</a></li>
                            <li><a href="#catalog" class="nav-link">Catálogo</a></li>
                            <li><a href="#services" class="nav-link">Servicios</a></li>
                            <li><a href="#about" class="nav-link">Sobre Nosotros</a></li>
                            <li><a href="#contact" class="nav-link">Contacto</a></li>
                        </ul>
                        <button class="menu-toggle">
                            <i class="fas fa-bars"></i>
                        </button>
                    </nav>
                </div>
            </header>
        `,
        hero: `
            <section class="hero" id="home">
                <div class="hero-content">
                    <h1 class="hero-title">Diseño de Interiores que refleja tu estilo</h1>
                    <p class="hero-subtitle">Fabricación de mobiliarios: Cocina, Sala, Comedor y Dormitorios</p>
                    <a href="#contact" class="cta-button">Solicita tu cotización</a>
                </div>
            </section>
        `,
        tiktok: `
            <section id="tiktok" class="tiktok-section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Mira nuestro trabajo en TikTok</h2>
                        <p class="section-subtitle">Descubre nuestras creaciones y tendencias de diseño interior</p>
                    </div>
                    <div class="tiktok-embed-container">
                        <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@jc.disenointerior" data-unique-id="jc.disenointerior" data-embed-from="embed_page" data-embed-type="creator" style="max-width:780px; min-width:288px;"> <section> <a target="_blank" href="https://www.tiktok.com/@jc.disenointerior?refer=creator_embed">@jc.disenointerior</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
                    </div>
                </div>
            </section>
        `
    };
    
    if (fallbackContent[componentName]) {
        container.innerHTML = fallbackContent[componentName];
    }
}

/**
 * Inicializar navegación
 */
function initializeNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    
    // Toggle menú móvil
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            AppState.isMenuOpen = !AppState.isMenuOpen;
            navMenu.classList.toggle('active', AppState.isMenuOpen);
            
            // Cambiar icono
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.className = AppState.isMenuOpen ? 'fas fa-times' : 'fas fa-bars';
            }
        });
    }
    
    // Navegación suave y actualización de enlaces activos
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Cerrar menú móvil si está abierto
                if (AppState.isMenuOpen && navMenu) {
                    navMenu.classList.remove('active');
                    AppState.isMenuOpen = false;
                    const icon = menuToggle?.querySelector('i');
                    if (icon) icon.className = 'fas fa-bars';
                }
                
                // Scroll suave al elemento
                const headerHeight = header ? header.offsetHeight : 70;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Actualizar enlace activo
                updateActiveNavLink(link);
            }
        });
    });
    
    // Efectos de scroll en header
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (header) {
            if (scrollTop > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        // Actualizar navegación activa basada en scroll
        updateActiveNavOnScroll();
        
        lastScrollTop = scrollTop;
    });
}

/**
 * Actualizar enlace de navegación activo
 */
function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

/**
 * Actualizar navegación activa basada en scroll
 */
function updateActiveNavOnScroll() {
    const sections = ['home', 'catalog', 'services', 'about', 'contact'];
    const scrollPos = window.scrollY + 200;
    
    sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);
        
        if (element && navLink) {
            const sectionTop = element.offsetTop;
            const sectionHeight = element.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                updateActiveNavLink(navLink);
            }
        }
    });
}

/**
 * Inicializar catálogo
 */
function initializeCatalog() {
    renderCatalog();
    initializeFilters();
}

/**
 * Renderizar elementos del catálogo
 */
function renderCatalog(filter = 'todos') {
    const catalogGrid = document.querySelector('.catalog-grid');
    if (!catalogGrid) return;
    
    // Usar catalogData global (puede ser dinámico o estático)
    const currentCatalogData = window.catalogData || catalogData;
    
    const filteredData = filter === 'todos' 
        ? currentCatalogData 
        : currentCatalogData.filter(item => item.category === filter);
    
    catalogGrid.innerHTML = '';
    
    if (filteredData.length === 0) {
        // Mostrar mensaje de no resultados
        const noResultsDiv = document.querySelector('.no-results');
        if (noResultsDiv) {
            noResultsDiv.style.display = 'block';
        }
        return;
    } else {
        // Ocultar mensaje de no resultados
        const noResultsDiv = document.querySelector('.no-results');
        if (noResultsDiv) {
            noResultsDiv.style.display = 'none';
        }
    }
    
    filteredData.forEach(item => {
        const catalogItem = createCatalogItem(item);
        catalogGrid.appendChild(catalogItem);
    });
    
    // Animación de entrada
    const items = catalogGrid.querySelectorAll('.catalog-item');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

/**
 * Crear elemento del catálogo
 */
function createCatalogItem(item) {
    const div = document.createElement('div');
    div.className = 'catalog-item';
    div.setAttribute('data-category', item.category);
    
    div.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="catalog-image" 
             onerror="this.src='assets/images/placeholder.jpg'">
    `;
    
    div.addEventListener('click', () => openModal(item));
    
    return div;
}

/**
 * Inicializar filtros del catálogo
 */
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Actualizar botón activo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filtrar catálogo
            AppState.currentFilter = filter;
            renderCatalog(filter);
        });
    });
}

/**
 * Inicializar modal
 */
function initializeModal() {
    const modal = document.getElementById('image-modal');
    const closeBtn = modal?.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Cerrar modal con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && AppState.isModalOpen) {
            closeModal();
        }
    });
}

/**
 * Abrir modal con información del producto
 */
function openModal(item) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    
    if (modal && modalImage && modalTitle && modalDescription) {
        modalImage.src = item.image;
        modalImage.alt = item.title;
        modalTitle.textContent = item.title;
        modalDescription.textContent = item.description;
        
        modal.style.display = 'block';
        AppState.isModalOpen = true;
        
        // Prevenir scroll del body
        document.body.style.overflow = 'hidden';
        
        // Animación de entrada
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }
}

/**
 * Cerrar modal
 */
function closeModal() {
    const modal = document.getElementById('image-modal');
    
    if (modal && AppState.isModalOpen) {
        modal.style.display = 'none';
        AppState.isModalOpen = false;
        
        // Restaurar scroll del body
        document.body.style.overflow = 'auto';
    }
}

/**
 * Inicializar efectos de scroll
 */
function initializeScrollEffects() {
    // Intersection Observer para animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos que deben animarse
    const animateElements = document.querySelectorAll('.service-card, .catalog-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

/**
 * Inicializar formulario de contacto
 */
function initializeContactForm() {
    const form = document.querySelector('.contact-form form');
    
    if (form) {
        form.addEventListener('submit', handleContactSubmit);
        
        // Validación en tiempo real
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }
}

/**
 * Manejar envío del formulario de contacto
 */
async function handleContactSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validar formulario
    if (!validateContactForm(data)) {
        return;
    }
    
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    try {
        // Mostrar estado de carga
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        submitBtn.style.opacity = '0.7';
        
        // Simular envío (aquí integrarías con tu backend)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Mostrar mensaje de éxito
        showNotification('¡Mensaje enviado correctamente! Nos contactaremos contigo pronto.', 'success');
        
        // Limpiar formulario
        form.reset();
        
    } catch (error) {
        console.error('Error al enviar formulario:', error);
        showNotification('Error al enviar el mensaje. Por favor, intenta nuevamente.', 'error');
        
    } finally {
        // Restaurar botón
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.style.opacity = '1';
    }
}

/**
 * Validar formulario de contacto
 */
function validateContactForm(data) {
    let isValid = true;
    
    // Validar nombre
    if (!data.name || data.name.trim().length < 2) {
        showFieldError('name', 'El nombre debe tener al menos 2 caracteres');
        isValid = false;
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        showFieldError('email', 'Ingresa un email válido');
        isValid = false;
    }
    
    // Validar teléfono
    const phoneRegex = /^[0-9+\-\s()]{9,}$/;
    if (!data.phone || !phoneRegex.test(data.phone)) {
        showFieldError('phone', 'Ingresa un teléfono válido');
        isValid = false;
    }
    
    // Validar mensaje
    if (!data.message || data.message.trim().length < 10) {
        showFieldError('message', 'El mensaje debe tener al menos 10 caracteres');
        isValid = false;
    }
    
    return isValid;
}

/**
 * Validar campo individual
 */
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const name = field.name;
    
    clearFieldError(e);
    
    switch (name) {
        case 'name':
            if (!value || value.length < 2) {
                showFieldError(name, 'El nombre debe tener al menos 2 caracteres');
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value || !emailRegex.test(value)) {
                showFieldError(name, 'Ingresa un email válido');
            }
            break;
        case 'phone':
            const phoneRegex = /^[0-9+\-\s()]{9,}$/;
            if (!value || !phoneRegex.test(value)) {
                showFieldError(name, 'Ingresa un teléfono válido');
            }
            break;
        case 'message':
            if (!value || value.length < 10) {
                showFieldError(name, 'El mensaje debe tener al menos 10 caracteres');
            }
            break;
    }
}

/**
 * Mostrar error en campo
 */
function showFieldError(fieldName, message) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    if (!field) return;
    
    field.style.borderColor = '#e74c3c';
    
    // Remover error anterior si existe
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Agregar nuevo mensaje de error
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.8rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

/**
 * Limpiar error de campo
 */
function clearFieldError(e) {
    const field = e.target;
    field.style.borderColor = '';
    
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

/**
 * Mostrar notificación
 */
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-family: var(--font-secondary);
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animación de entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remover después de 5 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

/**
 * Mostrar spinner de carga
 */
function showLoadingSpinner() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        spinner.style.display = 'flex';
    }
}

/**
 * Ocultar spinner de carga
 */
function hideLoadingSpinner() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        spinner.style.display = 'none';
    }
}

/**
 * Utilidades generales
 */
const Utils = {
    // Debounce para optimizar eventos de scroll/resize
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Detectar si un elemento está visible en viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Scroll suave a elemento
    scrollToElement: (element, offset = 0) => {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
};

// Exportar para uso global si es necesario
window.JoseCorteganaApp = {
    AppState,
    catalogData,
    openModal,
    closeModal,
    Utils
};

/**
 * Inicializar funcionalidad TikTok (simplificada para widget oficial)
 */
function initializeTikTok() {
    console.log('🎵 Inicializando sección TikTok con API...');
    
    // Verificar que el componente esté cargado
    const tiktokSection = document.getElementById('tiktok');
    if (!tiktokSection) {
        console.log('⚠️ Sección TikTok no encontrada');
        return;
    }
    
    console.log('✅ Sección TikTok inicializada - La lógica está en el componente HTML');
    
    // Track cuando se carga la sección TikTok
    trackTikTokSectionLoad();
}

/**
 * Track cuando se carga la sección TikTok
 */
function trackTikTokSectionLoad() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'section_load', {
            event_category: 'Social Media',
            event_label: 'TikTok API Section Loaded'
        });
    }
}