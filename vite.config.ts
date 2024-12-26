import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import compression from 'vite-plugin-compression';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br'
    }),
    ViteImageOptimizer({
      jpg: { quality: 80 },
      png: { quality: 80 },
      webp: { lossless: true }
    })
  ],
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'ui-vendor': ['lucide-react', 'typed.js']
        }
      }
    },
    // Enable caching for faster builds
    cache: true,
    // Configure browser caching
    assetsDir: 'assets',
    manifest: true,
  },
  // Enable caching for dev server
  server: {
    port: 5173,
    open: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    }
  }
});