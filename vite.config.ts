import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/https://www.belgrandpharma.com/', // Use '/' for the root of belgrandpharma.com
  build: {
    outDir: 'dist',
  },
});
