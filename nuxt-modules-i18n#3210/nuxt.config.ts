// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/i18n'],

  future: {
    compatibilityVersion: 4,
  },

  i18n: {
    restructureDir: './shared/i18n/',

    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        name: 'English',
        code: 'ja',
        iso: 'ja-JP',
        file: 'ja.json',
      },
      {
        name: 'English',
        code: 'nl',
        iso: 'nl',
        file: 'nl.json',
      },
    ],
  },
});
