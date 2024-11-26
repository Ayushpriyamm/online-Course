import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  console.log(`current mode is : ${mode}`);
  
  return {
    plugins: [react()],
    server: {
      proxy: {
        // Proxy API requests in local development
        '/api': {
          target: mode === 'development' 
            ? 'http://localhost:8000' // Local backend during development
            : 'https://online-course-0032.onrender.com', // Render backend in production
          changeOrigin: true,
          // Optional: Strip "/api" prefix
        },
      },
    },
  };
});
