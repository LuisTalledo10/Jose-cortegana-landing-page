/**
 * API Integration Example for TikTok
 * 
 * NOTA IMPORTANTE: 
 * Para usar la API real de TikTok necesitas:
 * 1. Registro en TikTok for Developers
 * 2. App ID y App Secret
 * 3. Access Token
 * 4. Configuración CORS en el servidor
 * 
 * Este es un ejemplo de cómo se vería la integración real.
 */

class TikTokAPI {
    constructor(accessToken) {
        this.accessToken = accessToken;
        this.baseURL = 'https://open-api.tiktok.com';
    }
    
    /**
     * Obtener videos del perfil de usuario
     */
    async getUserVideos(username = 'jc.disenointerior', limit = 12) {
        try {
            // En un entorno real, esto sería una llamada al backend que maneja la API de TikTok
            const response = await fetch(`/api/tiktok/user/${username}/videos?limit=${limit}`, {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`,
                    'Content-Type': 'application/json'
                }
            });
            
            if (!response.ok) {
                throw new Error('Error al obtener videos de TikTok');
            }
            
            const data = await response.json();
            return this.formatVideosData(data.data.videos);
            
        } catch (error) {
            console.error('Error en TikTok API:', error);
            return this.getFallbackVideos();
        }
    }
    
    /**
     * Formatear datos de videos para la interfaz
     */
    formatVideosData(videos) {
        return videos.map(video => ({
            id: video.id,
            title: video.title || 'Video sin título',
            description: video.desc || '',
            thumbnail: video.video.cover || video.video.dynamic_cover,
            videoUrl: `https://www.tiktok.com/@jc.disenointerior/video/${video.id}`,
            embedUrl: `https://www.tiktok.com/embed/v2/${video.id}`,
            duration: video.video.duration,
            playCount: video.statistics.play_count,
            likeCount: video.statistics.digg_count,
            shareCount: video.statistics.share_count,
            createTime: new Date(video.create_time * 1000).toLocaleDateString()
        }));
    }
    
    /**
     * Videos de respaldo en caso de error
     */
    getFallbackVideos() {
        return [
            {
                id: 'fallback1',
                title: "Cocina Moderna Premium",
                description: "Diseño de cocina con acabados de lujo y funcionalidad excepcional",
                thumbnail: "assets/images/cocina/cocina1.png",
                videoUrl: "https://www.tiktok.com/@jc.disenointerior",
                embedUrl: "",
                playCount: 0,
                likeCount: 0,
                shareCount: 0,
                createTime: new Date().toLocaleDateString()
            },
            {
                id: 'fallback2',
                title: "Sala Contemporánea",
                description: "Espacios que combinan comfort y estilo moderno",
                thumbnail: "assets/images/cocina/cocina2.png",
                videoUrl: "https://www.tiktok.com/@jc.disenointerior",
                embedUrl: "",
                playCount: 0,
                likeCount: 0,
                shareCount: 0,
                createTime: new Date().toLocaleDateString()
            }
        ];
    }
}

/**
 * Función mejorada para cargar videos reales de TikTok
 */
async function loadRealTikTokVideos() {
    const tiktokGrid = document.getElementById('tiktok-grid');
    if (!tiktokGrid) return;
    
    try {
        // En producción, esto vendría de variables de entorno o configuración segura
        const api = new TikTokAPI('YOUR_ACCESS_TOKEN_HERE');
        const videos = await api.getUserVideos();
        
        AppState.tiktokVideos = videos;
        renderTikTokVideos();
        
    } catch (error) {
        console.error('Error cargando videos de TikTok:', error);
        // Usar datos simulados como respaldo
        loadTikTokVideos();
    }
}

/**
 * Configuración del servidor Express para manejar las llamadas a TikTok API
 * (Esto va en un archivo separado del backend - server.js)
 */
const serverExample = `
const express = require('express');
const axios = require('axios');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Endpoint para obtener videos de TikTok
app.get('/api/tiktok/user/:username/videos', async (req, res) => {
    try {
        const { username } = req.params;
        const { limit = 12 } = req.query;
        
        const response = await axios.get(\`https://open-api.tiktok.com/video/list/\`, {
            headers: {
                'Authorization': \`Bearer \${process.env.TIKTOK_ACCESS_TOKEN}\`,
                'Content-Type': 'application/json'
            },
            params: {
                username,
                max_count: limit
            }
        });
        
        res.json(response.data);
        
    } catch (error) {
        console.error('Error en API TikTok:', error);
        res.status(500).json({ error: 'Error al obtener videos de TikTok' });
    }
});

app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});
`;

// Para usar esta funcionalidad real, descomenta la siguiente línea:
// loadRealTikTokVideos();