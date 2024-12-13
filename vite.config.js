import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: "/results-summary-component/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
