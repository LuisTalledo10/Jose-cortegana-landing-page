#!/usr/bin/env python3
"""
Servidor HTTP simple con soporte mejorado para videos
"""
import http.server
import socketserver
import mimetypes
import os

class VideoHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        # Agregar tipos MIME para videos con codecs específicos
        mimetypes.add_type('video/webm', '.webm')
        mimetypes.add_type('video/mp4', '.mp4')
        mimetypes.add_type('video/ogg', '.ogg')
        mimetypes.add_type('audio/mpeg', '.mp3')
        mimetypes.add_type('audio/ogg', '.oga')
        super().__init__(*args, **kwargs)
    
    def end_headers(self):
        # Agregar headers CORS
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        # Headers para videos
        if self.path.endswith(('.mp4', '.webm', '.ogg')):
            self.send_header('Accept-Ranges', 'bytes')
            self.send_header('Content-Disposition', 'inline')
            if self.path.endswith('.webm'):
                self.send_header('Content-Type', 'video/webm; codecs="vp8, vorbis"')
            elif self.path.endswith('.mp4'):
                self.send_header('Content-Type', 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"')
        super().end_headers()

if __name__ == "__main__":
    PORT = 8000
    
    with socketserver.TCPServer(("", PORT), VideoHTTPRequestHandler) as httpd:
        print(f"Servidor corriendo en http://localhost:{PORT}")
        print("Presiona Ctrl+C para detener el servidor")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor detenido")