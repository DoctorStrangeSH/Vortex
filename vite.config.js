import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
    plugins: [preact()],
    // GitHub Pages serves this repository under /Vortex/, not the domain root.
    base: process.env.GITHUB_PAGES === 'true' ? '/Vortex/' : '/',
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'firebase': ['firebase/app', 'firebase/auth', 'firebase/firestore'],
                    'vendor': ['preact', 'preact/hooks'],
                    'ai': ['./src/services/aiService.js'],
                    'crypto': ['./src/services/encryptionService.js']
                }
            }
        },
        target: 'es2020',
        minify: 'terser',
        cssMinify: true,
        sourcemap: false
    },
    server: {
        port: 3000
    }
});
