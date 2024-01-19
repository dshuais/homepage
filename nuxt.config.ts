export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxtjs/tailwindcss'],
  css: ["aos/dist/aos.css", "/assets/styles/index.css"],
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
  },
  // 在content/navigation/fields下配置自定义字段 _dir.yml内才可使用
  content: {
    navigation: {
      // fields: ['icon', 'titleTemplate', 'header', 'main', 'aside', 'footer']
      fields: ['collapse']
    }
  }
})
