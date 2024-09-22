---
title: 原子人用原子类
icon: vscode-icons:file-type-unocss
author: w4ng3
createTime: 2024/08/26 23:56:30
permalink: /share/unocss/
---

::: tip URL
<img src="https://cdn.jsdelivr.net/gh/w4ng3/wiki-image@main/img/yank-note-picgo-unocss.png" style="height:90px;float:right;" />

[UnoCSS 即时按需的原子化 CSS 引擎](https://unocss.nodejs.cn/)

[重新构想原子化 CSS —— Anthony fu ](https://antfu.me/posts/reimagine-atomic-css-zh)

> _你甚至可以不写 style，拒绝 \_类的再生产_

:::

## Quick Start

1、创建项目，添加 unocss（这里直接在 monorepo 的根目录配置）

```bash
pnpm add unocss -wD
cd packages && pnpm create vite use-unocss --template vue-ts
```

2、在 monorepo 根目录下创建`uno.config.ts`文件

```ts :collapsed-lines=8
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetAttributify({
      /* preset options */
    }),
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerAttributifyJsx(),
    transformerVariantGroup(),
  ],
  shortcuts: [
    [
      "btn",
      "px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50",
    ],
    [
      "icon-btn",
      "text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none",
    ],
  ],
});
```

3、进入子项目的根目录, [在 Vite 里集成](https://unocss.nodejs.cn/integrations/vite)

- 安装插件：

  ```ts
  // vite.config.ts
  import UnoCSS from "unocss/vite";
  import { defineConfig } from "vite";
  export default defineConfig({
    plugins: [UnoCSS()],
  });
  ```

- 将 `virtual:uno.css` 添加到你的主入口中：

```ts
// main.ts
import "virtual:uno.css";
```

4、安装 vscode 插件 [UnoCSS 扩展](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)

5、编辑器设置里设置模糊匹配

```json
// settings.json
{
  "unocss.autocomplete.matchType": "fuzzy"
}
```

> 现在在标签里按下空格就会出现原子类提示，若没有，重启 VSCode 试试。

接着就可以在 vue 里使用原子类 css 了，在 class 里按下空格键唤起提示，现在写一些样式

```html
<section
  class="bg-yellow rounded-md w-800px grid grid-cols-3 items-center gap-2"
>
  <div class="bg-pink h-10 place-content-center">1</div>
  <div bg-sky>2</div>
  <div>3</div>
  <div>4</div>
</section>
```

如果不熟悉原子类，可以在 `https://unocss.dev/interactive/` 键入任何内容以搜索原子类、CSS 属性

## 丰富 unocss 的功能

[属性化预设](https://unocss.nodejs.cn/presets/attributify)、[指令转换器](https://unocss.nodejs.cn/transformers/directives#directives-transformer)、[变体组转换器](https://unocss.nodejs.cn/transformers/variant-group)、属性 JSX 转换器...

```ts
import {
  defineConfig,
  transformerDirectives,
  presetAttributify,
  presetUno,
} from "unocss";

export default defineConfig({
  // ...UnoCSS options
  presets: [presetAttributify(), presetUno()],
  transformers: [
    transformerDirectives(),
    transformerAttributifyJsx(),
    transformerVariantGroup(),
  ],
});
```

按照文档尝试使用，如果你早就习惯了 tailwind 的写法 ，可以加入 [Wind 预设](https://unocss.nodejs.cn/presets/wind)

## [自定义配置](https://unocss.nodejs.cn/config/)

规则、快捷方式、主题...

[主题配置](https://unocss.nodejs.cn/config/theme)可以修改 uno 的默认值

```js
export default defineConfig({
  theme: {
    fontSize: {
      micro: ["0.625rem", "1rem"],
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.125rem"],
      base: ["1rem", "1.5rem"],
      md: ["1.125rem", "1.5rem"],
      lg: ["1.25rem", "1.5rem"],
      xl: ["1.375rem", "2rem"],
    },
  },
});
```

> UnoCSS 还支持你可能在 Tailwind CSS / Windi CSS 中熟悉的主题系统。在用户级别，你可以在配置中指定 theme 属性，它将深度合并到默认主题。

推荐文档：[Tailwind Theme](https://tailwind.nodejs.cn/docs/theme)

## [CSS 图标](https://unocss.nodejs.cn/presets/icons)

> [Icons in Pure CSS](https://antfu.me/posts/icons-in-pure-css)

unocss 可以加入图标插件，
例如安装 [carbon 图标](https://icones.js.org/collection/carbon)

```bash
pnpm add @unocss/preset-icons @iconify-json/carbon -D
# 如果是monorepo项目
pnpm add @unocss/preset-icons @iconify-json/carbon -wD
```

```ts
// uno.config.ts
import { defineConfig } from "unocss";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
  presets: [
    presetIcons({
      /* options */
      scale: 1.2,
      warn: true,
    }),
    // ...other presets
  ],
});
```

在模版里使用图标类，安装`Iconify IntelliSense`插件可直接预览

```html
<button btn>
  <div i-carbon-logo-github text-xl hover:bg-red />
</button>
```

::: tip
试着在 vue 里用 unocss 写知乎热榜列表，尽量不在`<style>`里写样式。

请遵循以下约定来使用图标 （unocss 里默认图标 prefix 是`i-`）

- `<prefix><collection>-<icon>`
- `<prefix><collection>:<icon>`

![切换图标名称](https://cdn.jsdelivr.net/gh/w4ng3/wiki-image@main/img/202409201458076.png#pic_center =300x300)
:::

## px2rem

不管是 unocss 还是 tailwindcss 和 windicss，默认的单位都是 rem，这有一定的设计理念，它在网页响应式上有更好的表现。

但如果你确实不喜欢使用 rem，可以使用[Rem 转 px 预设](https://unocss.nodejs.cn/presets/rem-to-px),设置`baseFontSize: 4`就行了。

- [px em rem 的区别？em 和 rem 的出现解决了什么问题](https://juejin.cn/post/7013363284401192991)

开发小程序使用的单位是 rpx，可以引入这个配置

- [unocss-preset-weapp](https://github.com/MellowCo/unocss-preset-weapp)

## 单独配置

如果要在 monorepo 的某个子项目里单独配置 unocss 规则和主题，那么在项目里新建 `uno.config.ts`文件，并在`vite.config.ts`里声明配置文件的位置

```ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      // 默认在根目录，也可手动指定配置文件
      configFile: "./uno.config.ts",
    }),
  ],
});
```

拓展：
关于在 react 项目集成 unocss，[点击查看官方文档](https://unocss.nodejs.cn/integrations/vite#react)

## 响应式

使用`md:`、`sm:`、`lg:`、`xl:`前缀，可以根据屏幕尺寸（媒体查询）匹配原子样式

```html
<div class="bg-#a992d5 md:bg-amber-4 sm:bg-blue-3"></div>
```

这些断点可以自定义大小

```ts
export default defineConfig({
  // ...UnoCSS options
  theme: {
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
});
```

## 暗黑模式

Uno 的暗黑模式方案和 Tailwind 一样，[Tailwind CSS 推荐的暗模式](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually)

简而言之，只需要在 `html` 标签里新增 `dark`类，就可以匹配`dark:`前缀的原子样式

- `<html class="dark">`

- `<div class="bg-#a992d5 dark:bg-pink">`

当然，我们应该动态的给 html 标签添加 dark，且给全局设置默认黑色背景色和白色字符

1. 在全局样式文件里添加 dark 类

   ```css
   /* 深色模式样式 */
   .dark {
     background-color: black;
     color: white;
   }
   ```

2. 写一个 vue 的组合函数 useDark

   ```ts :collapsed-lines=8
   export function useDark() {
     /** 开启暗黑模式 */
     function enableDarkMode() {
       document.documentElement.classList.toggle("dark", true);
       localStorage.setItem("color-scheme", "dark");
     }

     /** 关闭暗黑模式 */
     function disableDarkMode() {
       document.documentElement.classList.toggle("dark", false);
       localStorage.setItem("color-scheme", "light");
     }

     /**
      * 应用保存的主题
      * 通常在页面加载时调用
      */
     function applySavedTheme() {
       const savedTheme = localStorage.getItem("color-scheme");
       if (savedTheme === "dark") {
         enableDarkMode();
       } else if (savedTheme === "light") {
         disableDarkMode();
       }
     }

     // 检测系统是否偏好深色模式
     const prefersDarkScheme = () => {
       return window.matchMedia("(prefers-color-scheme: dark)").matches;
     };

     return {
       enableDarkMode,
       disableDarkMode,
       applySavedTheme,
     };
   }
   ```

   ::: tip
   Vue3 的组合式函数，名称必须是 use 开头
   :::

3. 测试效果

   用两个按钮，点击切换模式

   ```vue
   <!-- APP.vue -->
   <script setup lang="ts">
   import { onMounted } from "vue";
   import { useDark } from "./composables/useDark";
   const { enableDarkMode, disableDarkMode, applySavedTheme } = useDark();

   onMounted(() => {
     applySavedTheme();
   });
   </script>
   <template>
     <div class="dark:bg-red">
       <div class="flex justify-center gap-5">
         <button @click="disableDarkMode">Light</button>
         <button @click="enableDarkMode">Dark</button>
       </div>
     </div>
   </template>
   ```

## 主题切换

[Link](/blog/UnoCSS动态主题切换.md)
