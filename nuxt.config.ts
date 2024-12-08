// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  components: [
    {
      path: '~/components',
    },
  ],

  css: ['assets/style.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],
      link: [{ rel: 'icon', href: '/icon.png' }],
    },
  },

  // modules: ['@nuxtjs/tailwindcss'],
})
