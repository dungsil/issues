export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  compatibilityDate: '2024-04-03',

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    typedPages: true,
    buildCache: true,
  },
})
