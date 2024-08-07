// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: ['splitpanes/dist/splitpanes.css', '~/assets/css/main.css', '~/assets/css/email.css'],

  modules: ['@nuxt/eslint', '@nuxtjs/i18n'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
