import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173 // Change this to your desired port number
  },
  define: {
    'process.env': process.env
  },
  build: {
    rollupOptions: {
      external: ['react-toastify'] // Externalize react-toastify
    }
  }
})

