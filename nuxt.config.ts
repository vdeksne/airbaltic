// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2025-03-10",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/css/main.css", // Your custom CSS file
  ],
  plugins: [
    { src: "~/plugins/bootstrap.js", mode: "client" },
    "~/plugins/pinia.js",
  ],
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
});
