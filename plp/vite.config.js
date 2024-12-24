import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
// https://vite.dev/config/
export default defineConfig({
 plugins: [
     react(),
     federation({
       name: 'plp', 
       filename: 'remoteEntry.js', 
       exposes: {
         "./PlpContainer":'./src/PlpContainer.jsx'
       },
       remotes: {
        home: 'home@http://localhost:5001/assets/remoteEntry.js',  
      },
       shared: ['react', 'react-dom'],
     }),
   ],
   build: {
     target: 'es2022', // Ensure the target environment is ES2022 or later
   },
})