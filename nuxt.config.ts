// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/vite"],
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
});
