import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/elektroinstallation-standt/',
  server: {
    port: 3015,
    host: true
  },
  preview: {
    port: 3015,
    host: true
  }
});
