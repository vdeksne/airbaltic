import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/css/main.css", // Your custom CSS file
  ],
  plugins: [{ src: "~/plugins/bootstrap.js", mode: "client" }],
  build: {
    transpile: ["@headlessui/vue", "@heroicons/vue"],
  },

  vite: {
    server: {
      fs: {
        allow: [".."], // Allow access to the parent directory
      },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2025-03-10",
});
