import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist', // Ensure the output directory is correctly set
    },
    server: {
        port: 3000, // Optional: Set the local development port
    },
    base: './', // Ensure relative paths for assets
});

