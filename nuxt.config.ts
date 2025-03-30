// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: ['@nuxt/ui-pro'],

  css: ['~/assets/css/main.css'],

  ui: {
    colorMode: false
  },

  fonts: {
    families: [
      {
        name: 'Lato',
        weights:[300, 400],
        styles: ['normal'],
        provider: 'google'
      },
    ],
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      title: 'Mathys Woningbouw',
      meta: [
        { name: 'description', content: 'Mathys Woningbouw' },
        { property: 'og:type', content: 'website' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    },
  },
});