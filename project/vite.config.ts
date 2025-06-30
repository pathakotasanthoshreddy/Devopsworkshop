import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: false,
    host: '0.0.0.0',
    port: 5173,
    strictPort: true
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});