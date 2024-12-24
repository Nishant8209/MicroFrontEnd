import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'container', 
      filename: 'remoteEntry.js', 
      exposes: {
       
        "./axiosInstance":"./src/axiosInstance.js"
      },
      shared: ['react', 'react-dom'],
      remotes: {
        home: 'home@http://localhost:5001/assets/remoteEntry.js',  
        pdp: 'pdp@http://localhost:5002/assets/remoteEntry.js',  
        plp: 'plp@http://localhost:5004/assets/remoteEntry.js', 
      },
    }),
  ],
  build: {
    target: 'es2022', 
  },
})
