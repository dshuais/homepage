/*
 * @Author: dushuai
 * @Date: 2024-01-22 11:26:44
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-22 15:33:08
 * @description: app.config
 */
import { aside } from './config'

export default defineAppConfig({
  docus: {
    // title: "dshuais' blog",
    description: 'A Vite+TypeScript based scaffolding for quickly building a Vue 3 component library development environment.',
    image: '/logo.png',
    url: 'https://www.dshuais.com/',
    socials: {
      // twitter: 'nuxtstudio',
      github: 'dshuais'
    },

    github: {
      dir: 'main/content',
      branch: 'main',
      repo: 'homepage',
      owner: 'dshuais',
      edit: true,
    },

    aside,

    main: {
      padded: false,
      fluid: false,
    },

    header: {
      logo: true,
      showLinkIcon: true,
      navigation: true,
      fluid: false,
      exclude: []
    },
    
    footer: {
      fluid: false,
      credits: {
        icon: 'IconDocus',
        text: 'Powered by Docus',
        href: 'https://docus.dev'
      },
      textLinks: [
        // {
        //   text: 'Made with ❤️ by dshuais',
        //   href: 'https://github.com/dshuais/',
        // },
        {
          text: 'Copyright© 2022-PRESENT DuShuai',
          href: 'https://www.dshuais.com/'
        },
        {
          text: '鄂ICP备2022011303号-1',
          href: 'https://beian.miit.gov.cn/',
          target: '_blank'
        }
      ],
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'simple-icons:nuxtdotjs',
        },
        // {
        //   icon: 'mdi:npm-variant',
        //   href: 'https://www.npmjs.com/package/create-keepdesign',
        // },
      ],
    },
  }
})
