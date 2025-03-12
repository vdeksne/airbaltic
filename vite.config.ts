// filepath: /Users/viktorijadeksne/Documents/Viktorija_2025/March/Nuxt_Test_V7/vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [vue(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    fs: {
      allow: [".."], // Allow access to the parent directory
    },
  },
});
