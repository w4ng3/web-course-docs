import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  // 设置默认语言
  lang: 'zh-CN',
  title: 'VuePress',
  // description: '这是我的第一个 VuePress 站点',
  alias: {
    // 给组件路径创建别名
    "@MyComponent": path.resolve(__dirname, "components"),
    "@Hooks": path.resolve(__dirname, "hooks"),
    // 替换组件：将别名定向到自己的组件
    // '@theme/VPFooter.vue': path.resolve(
    //   __dirname,
    //   './components/MyFooter.vue',
    // ),
  },
  theme: plumeTheme({
    plugins: {
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
          dir: 'typescript',
          link: '/typescript',
          sidebar: [ // 配置侧边栏
            {
              text: 'typescript',
              icon: 'mdi:language-typescript', // 侧边栏图标
              items: "auto" // 简化写法，主题会自动补全为 `foo.md`
            }
          ]
        }
      ]
    }
  }),
  bundler: viteBundler(),
})
