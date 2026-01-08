import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  // Esto soluciona el error de rutas en GitHub Pages
  base: "/mar-y-carne-gourmet/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
