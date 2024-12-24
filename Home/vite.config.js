import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "home",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/Header.jsx",
        "./Footer": "./src/Footer.jsx",
        "./products": "./src/products.js",
        "./MicrofrontendA": "./src/components/MicrofrontendA.jsx",
      },
      remotes: {
        container: "container@http://localhost:5003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "es2022", // Ensure the target environment is ES2022 or later
  },
});
