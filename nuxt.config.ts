import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // CSS Global
  css: ["~/assets/css/main.css"],

  // Vite Plugins
  vite: {
    plugins: [tailwindcss()],
  },

  // Page Transitions
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  // Nuxt Icon
  modules: ["@nuxt/icon"],
});