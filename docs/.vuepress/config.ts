import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  // 设置默认语言
  lang: 'zh-CN',
  title: '前台端菜指南',
  // description: '这是我的第一个 VuePress 站点',
  alias: {
    // 给组件路径创建别名
    "@MyComponent": path.resolve(__dirname, "components"),
    "@Hooks": path.resolve(__dirname, "hooks"),
  },
  theme: plumeTheme({
    plugins: {
      search: {
      },
      markdownEnhance: {
        revealJs: true
      }
    },
    // more...
    notes: {
      dir: 'notes',
      link: '/',
      notes: [
        {
          dir: 'share',
          link: '/share/',
          sidebar: [
            {
              text: '主题分享',
              // collapsed: false,
              icon: 'mdi:webpack', // 侧边栏图标, https://icon-sets.iconify.design/mdi/
              items: 'auto'
            }
          ]
        },
        {
          dir: 'draft',
          link: '/draft/',
          sidebar: [
            {
              text: '草稿',
              icon: 'mdi:webpack',
              items: 'auto'
            }
          ]
        }
      ]
    },


    // footer: {
    //   message: '...',
    //   copyright: ''
    // }
  }),
  bundler: viteBundler(),
})
