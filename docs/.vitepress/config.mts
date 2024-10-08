import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/kai-vitepress/",
  title: "The Kai Project",
  description: "A free and open source past question website.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    locales: {
      root: {
        label: '简体中文',
        lang: 'zh_cn'
      },
      en: {
        label: 'English',
        lang: 'en',         
      },
      jp: {
        label: '日本語',
        lang: 'jp',         
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
