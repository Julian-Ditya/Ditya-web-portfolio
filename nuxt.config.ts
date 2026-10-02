import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  modules: ["@nuxt/icon"],

  icon: {
    serverBundle: {
      remote: "jsdelivr",
      collections: ["mdi", "simple-icons", "vscode-icons"],
    },
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
  },
});