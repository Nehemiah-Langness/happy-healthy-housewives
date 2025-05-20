import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { baseUrl } from './src/base-url';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3500,
    },
    base: '/' + baseUrl,
});
