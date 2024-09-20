---
title: 我不要你觉得，我要我觉得!
createTime: 2024/09/10 16:09:26
permalink: /share/eslint/
icon: vscode-icons:file-type-eslint
---

::: tip 团队开发如何规范代码格式

[为什么我不使用 Prettier —— Anthony fu ](https://antfu.me/posts/why-not-prettier-zh)

:::
<img src="https://pic.rmb.bdstatic.com/074185ecee9c5cf315d4472e556c903b.jpeg@s_0,w_800,h_1000,q_80,f_auto" style="background-color:#bbb;height:200px;" />

## Eslint 扁平化

阅读 [eslint-config](https://github.com/antfu/eslint-config?tab=readme-ov-file#usage) 的 readme 入门向导

在`monorepo`的根目录运行 CLI 指令,

```bash
pnpm dlx @antfu/eslint-config@latest
```

`空格键选择，回车确定`，添加了一些依赖，生成了`eslint.config.mjs`和`.vscode/settings.json` 文件

<img src="https://cdn.jsdelivr.net/gh/w4ng3/wiki-image@main/img/yank-note-picgo-img-20240813013741.png" style="height:340px" />

- `pnpm i`

- 接着开启 VSCode 的 ESLint 插件，查看`.vscode/settings.json`文件的配置；

- 添加用于 package.json 的脚本，可以运行脚本进行文件的格式检查和修复

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

- 打开一个 js/ts/vue 文件，写一些代码，保存，测试格式化

  > 如果格式化无效，试着使用指令重启 eslint 插件，`> restart eslint server`，或者重启编辑器。

  运行 `pnpm lint` 检查代码，运行 `pnpm lint:fix` 进行代码修复

## 添加配置

默认使用的是托尼老师“固执己见的” 配置，会发现一些地方太严格了，我们也可以按照 [Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files) 自己配置，它可以让你拥有 完全的控制权 来微调每个细节。此外，你也可以随时 fork 它来制作你自己的版本。

```js
import antfu from "@antfu/eslint-config";
export default antfu({
  typescript: true,
  vue: true,
  // 在Flat配置中不再支持' .eslintignore '，请使用' ignore '代替
  ignores: ["**/test"],
  // 自定义风格规则
  // stylistic: {
  //   indent: 2, // 4, or 'tab'
  //   quotes: 'single', // or 'double'
  // },
  // 取消 Anthony喜好的一些固执己见的规则。
  // lessOpinionated: true,
});
```

### 可选配置

按需添加想集成的配置

- [UnoCSS](https://github.com/antfu/eslint-config?tab=readme-ov-file#unocss)

- [React](https://github.com/antfu/eslint-config?tab=readme-ov-file#react)

- [格式化 CSS、HTML](https://github.com/antfu/eslint-config?tab=readme-ov-file#formatters)

### 自定义规则

- [Stylistic](https://eslint.style/rules)
- [配置编辑器](https://github.com/antfu/eslint-config?tab=readme-ov-file#config-composer)
- [规则覆盖](https://github.com/antfu/eslint-config?tab=readme-ov-file#rules-overrides)
- [配置编辑器](https://github.com/antfu/eslint-config?tab=readme-ov-file#config-composer)
- [可选规则](https://github.com/antfu/eslint-config?tab=readme-ov-file#optional-rules)

### example

可以参考我的配置

```json
{
  "devDependencies": {
    "@antfu/eslint-config": "^3.5.0",
    "@eslint-react/eslint-plugin": "^1.10.1",
    "@unocss/eslint-plugin": "^0.62.3",
    "eslint": "^9.10.0",
    "eslint-plugin-format": "^0.1.2",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7"
  }
}
```

```js :collapsed-lines=8
import antfu from "@antfu/eslint-config";

export default antfu({
  unocss: true,
  typescript: true,
  vue: true,
  react: true,

  // 在Flat配置中不再支持' .eslintignore '，请使用' ignore '代替
  ignores: [
    // '**/a.ts',
  ],

  // 自定义风格规则 https://eslint.style/rules
  // stylistic: {
  //   indent: 2, // 4, or 'tab'
  //   quotes: 'single', //  or 'double'
  // },

  // 取消 Anthony 喜好的一些固执己见的规则。
  lessOpinionated: true,
  // 覆盖规则
  rules: {
    "style/no-multiple-empty-lines": ["error", { max: 2 }], // 最大空行
    "no-console": "warn",
    "unocss/blocklist": "warn", // 禁止特定的类选择器
    "unocss/enforce-class-compile": "off", // 强制类编译
    "unocss/order-attributify": "warn", // 对属性选择器强制执行特定顺序
    "unocss/order": "warn", // 对类选择器强制执行特定的顺序
    "unused-imports/no-unused-vars": "warn",
    "symbol-description": "warn",
    "no-unused-vars": "warn",
    "unused-imports/no-unused-imports": "error", // 禁止未使用的导入
  },
})
  .overrideRules({
    // 强制类型和接口中的属性名和类型注释之间保持一致的间距
    // 'style/key-spacing': ['warn', { align: 'colon', mode: 'strict' }],
    // 强制执行模板中每行的多个属性
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: { max: 5 },
        multiline: { max: 1 },
      },
    ],
  })
  .override("antfu/typescript/rules", {
    rules: {
      "ts/no-explicit-any": "error", // 禁止使用any
      "jsdoc/sort-tags": ["warn"],
      "ts/ban-ts-comment": "off", // 禁止使用 @ts-ignore
      // "ts/no-unused-expressions": "off",
    },
  });
```

- 尝试修改 `vue/max-attributes-per-line`配置 `singleline: { max: 1 }`试试
- 有关代码格式化的配置规则，可参阅[源码 😅](https://github.com/eslint-stylistic/eslint-stylistic/blob/main/packages/eslint-plugin/configs/customize.ts)

## [查看已启用的规则](https://github.com/antfu/eslint-config?tab=readme-ov-file#view-what-rules-are-enabled)

一个可视化工具来帮助您查看项目中启用了哪些规则，并将它们应用于哪些文件，`@eslint/config-inspector`

转到包含并运行的项目根目录：`eslint.config.js`

```bash
npx @eslint/config-inspector
```

## simple-git-hooks

> [一个让你轻松管理 git 钩子的工具](https://github.com/toplenboren/simple-git-hooks/tree/master)

有时候，你的同事会把编辑器的 ESLint 插件关闭或者不安装，那么我们可以添加 git hook，在 commit 时格式化

- 将 simple-git-hooks 添加到项目中:

1️⃣. 安装 simple-git-hooks 作为 dev 依赖项：

```bash
pnpm add lint-staged simple-git-hooks --save-dev
# monorepo项目要使用 -w
pnpm add lint-staged simple-git-hooks -wD
```

2️⃣. 在`package.json`里添加钩子命令

```json
{
  "simple-git-hooks": {
    "pre-commit": "npx lint-staged"
  },
  "lint-staged": {
    "*": "eslint --fix"
  }
}
```

3️⃣. 运行指令，更新 hook

```bash
# [Optional] These 2 steps can be skipped for non-husky users
git config core.hooksPath .git/hooks/
rm -rf .git/hooks

# Update ./git/hooks
npx simple-git-hooks
```

4️⃣.写一些不规范的代码,测试效果

![Img](https://cdn.jsdelivr.net/gh/w4ng3/wiki-image@main/img/yank-note-picgo-img-20240818035304.png)

检查暂存区的文件，ESLint 修复不通过则 commit 失败
