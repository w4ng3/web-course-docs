---
title: UnoCSS动态主题切换
icon: vscode-icons:file-type-unocss
createTime: 2024/09/22 15:00:00
permalink: /article/unocss-preset-theme/
---

有时候甲方会要求给网站准备多套皮肤，这时可以使用 [unocss-preset-theme 动态主题切换](https://github.com/unpreset/unocss-preset-theme) 来实现。

<!-- - [参考](https://blog.csdn.net/qq_36995773/article/details/140908500) -->

![主题切换](https://cdn.jsdelivr.net/gh/w4ng3/wiki-image@main/img/unocss-theme-preset.gif)

## Quick Start

> 前提，已配置 unocss

1. 安装

   ```bash
   pnpm -D unocss-preset-theme
   ```

2. 新建 theme 文件

   ```ts
   export const myTheme = {
     default: {
       colors: {
         primary: "#1fa1fb",
         warning: "#eba049",
         danger: "#fb696e",
         info: "#909399",
       },
     },
     peaple: {
       colors: {
         primary: "#987D9A",
         warning: "#BB9AB1",
         danger: "#EECEB9",
         info: "#FEFBD8",
       },
     },
     spring: {
       colors: {
         primary: "#D8EFD3",
         warning: "#95D2B3",
         danger: "#55AD9B",
         info: "#F1F8E8",
       },
     },
   };
   ```

3. `uno.config.ts` 引入 `presetTheme`

   presetTheme 会自动生成对应主题的变量

   ```ts
   import presetTheme from "unocss-preset-theme";
   import { myTheme } from "./uno.theme";
   import type { Theme } from "unocss/preset-uno";

   export default defineConfig({
     presets: [
       // ...
       presetTheme<Theme>({
         theme: myTheme,
       }),
     ],
   });
   ```

4. 设置默认主题

   在 vue 项目的 index.html 里，给 body 标签添加 `class="default"`

   ```html
   <body class="default">
     <div id="app"></div>
     <script type="module" src="/src/main.ts"></script>
   </body>
   ```

5. 测试主题

   ```vue
   <script lang="ts" setup>
   const onThemeChange = (e: string) => {
     document.body.className = e;
   };
   </script>

   <template>
     <header flex items-center justify-center gap-2>
       <h2>主题切换</h2>
       <button @click="onThemeChange('default')">default</button>
       <button @click="onThemeChange('peaple')">peaple</button>
       <button @click="onThemeChange('spring')">spring</button>
     </header>

     <div mb-3 flex justify-center gap-2>
       <button bg-primary text-white>primary</button>
       <button bg-warning text-white>warning</button>
       <button bg-danger text-white>danger</button>
       <button bg-info text-white>info</button>
     </div>
   </template>
   ```
