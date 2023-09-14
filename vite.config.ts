import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Gymsite",
        short_name: "Gymsite",
        start_url: ".",
        display: "standalone",
        theme_color: "#000",
        background_color: "#fff",
        description: "A gym management app.",
        icons: [
          {
            src: "images/logos/gym-512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "images/logos/gym-64.png",
            sizes: "64x64",
            type: "image/png"
          }
        ]
      }
    })
  ],
});
