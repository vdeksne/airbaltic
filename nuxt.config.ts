import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2025-03-10",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxt/test-utils/module"],
  css: ["@/assets/scss/main.scss"],
  plugins: [
    { src: "~/plugins/bootstrap.js", mode: "client" },
    "~/plugins/pinia.js",
  ],
  build: {
    transpile: ["@headlessui/vue", "@heroicons/vue"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      "postcss-import": {},
    },
  },
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/variables" as *;
            @use "@/assets/scss/mixins" as *;
            @use "@/assets/scss/fonts" as *;
          `,
        },
      },
    },
  },
});
