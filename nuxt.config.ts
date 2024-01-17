export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxtjs/tailwindcss'], // '@nuxtjs/plausible'
  runtimeConfig: {
    public: {
      // plausible: {
      //   domain: 'create-keep-design.dshuais.com',
      // },
      // algolia: {
      //   applicationId: '',
      //   apiKey: '',
      //   langAttribute: 'lang',
      //   docSearch: {
      //     indexName: ''
      //   }
      // }
    },
  },
})
