export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      algolia: {
        applicationId: '', // 替换为你的Algolia应用ID
        apiKey: '', // 替换为你的Algolia搜索API密钥
        langAttribute: 'lang',
        docSearch: {
          indexName: '', // 替换为你的Algolia索引名称
        }
      }
    }
  }
})
