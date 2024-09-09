---
title: const 主 = 6 ？
icon: "mdi:language-typescript"
author: w4ng3
createTime: 2024/08/11 23:14:58
permalink: /share/typescript/
---

> TypeScript ? 我扫一眼，觉得没有什么值得写的“代价”

## 什么是 TypeScript ?

`TypeScript` 简称 TS，是微软公司开发的一种基于 JavaScript 的编程语言，可以说是 JavaScript 语言的超集(并不真是)，增强 JavaScript 的功能，使得更适合用在多人合作的企业级项目。TS 的发展形势非常好，至今很多 JavaScript 项目都支持 TS，比如 Vue3 和 React 前端两大框架都支持 TS。

> TypeScript 对 JavaScript 添加的最主要部分，就是一个独立的类型系统。类型系统可以帮助程序员在编译阶段发现错误。

学习 TS，推荐阅读 [阮一峰的 TypeScript 方面...哦不，是教程 ](https://typescript.p6p.net/)

## Quick Start

在 `monorepo/packages` 下创建 ts 文件夹, 安装一些我们开发时所需要的依赖

```bash
mkdir ts && cd ts
pnpm init
pnpm add typescript @types/node -D
```

只是开发环境需要的，所以安装的时候需要添加一个 `-D` 参数表示安装到开发环境。

执行

```bash
tsc -v # 检查 ts版本
pnpm tsc --init # 创建 tsconfig.json 文件
```

## [tsconfig.json](https://typescript.p6p.net/typescript-tutorial/tsconfig.json.html#tsconfig-json)

::: details 编译选项
你可以通过 compilerOptions 来定制你的编译选项：

```json
{
  "compilerOptions": {
    /* 基本选项 */
    "target": "ESNext", // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNext'
    "module": "ESNext", // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015',"ESNext"
    "lib": [], // 指定要包含在编译中的库文件
    "allowJs": true, // 允许编译 javascript 文件
    "checkJs": true, // 报告 javascript 文件中的错误
    "jsx": "preserve", // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true, // 生成相应的 '.d.ts' 文件
    "sourceMap": true, // 生成相应的 '.map' 文件
    "outFile": "./", // 将输出文件合并为一个文件
    "outDir": "./", // 指定输出目录
    "rootDir": "./", // 用来控制输出目录结构 --outDir.
    "removeComments": true, // 删除编译后的所有的注释
    "noEmit": true, // 不生成输出文件
    "importHelpers": true, // 从 tslib 导入辅助工具函数
    "isolatedModules": true, // 将每个文件作为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true, // 启用所有严格类型检查选项
    "noImplicitAny": true, // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true, // 启用严格的 null 检查
    "noImplicitThis": true, // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true, // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true, // 有未使用的变量时，抛出错误
    "noUnusedParameters": true, // 有未使用的参数时，抛出错误
    "noImplicitReturns": true, // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true, // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node", // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./", // 用于解析非相对模块名称的基目录
    "paths": {}, // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [], // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [], // 包含类型声明的文件列表
    "types": [], // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./", // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./", // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true, // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true, // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true, // 启用装饰器
    "emitDecoratorMetadata": true // 为装饰器提供元数据的支持
    // ...
  }
}
```

:::

TypeScript 项目的配置文件，通常在项目的根目录

先将文件配置如下

```json
{
  "compilerOptions": {
    "target": "es2016", // 指定编译产物的 JS 版本
    "module": "ESNext", // 指定生成什么模块代码
    "forceConsistentCasingInFileNames": true, // 确保导入时的大小写正确
    "strict": true, // 启用所有严格类型检查选项。
    "skipLibCheck": true, // 跳过库检查
    "outDir": "dist", // 指定编译产物存放的目录
    "allowJs": true, // 指定源目录的 JavaScript 文件是否原样拷贝到编译后的目录
    "baseUrl": "./",
    "paths": {
      "@/*": ["./src/*"]
    }
    // "isolatedModules": true, // 将每个文件作为单独的模块
    // "noEmit": true, // 不生成输出文件
    // "declaration": true, // 生成相应的 '.d.ts' 文件
    // "declarationDir": "./types" // 为生成的声明文件指定输出目录
  },
  // 如果不指定文件后缀名，默认包括.ts、.tsx和.d.ts文件。如果打开了allowJs，那么还包括.js和.jsx。
  "include": ["./src/**/*"]
}
```

- Demo

```js
// src/a.js
class Person {
  constructor(name) {
    this.name = name;
  }
  say = (who) => {
    // God：上帝 / god：神
    const firstChar = who.charAt(0).toLocaleUpperCase();
    console.log(`${firstChar}${who.slice(1)} bless you`);
  };
}

let DPZ = new Person("DPZ");
let 主 = 6; // 6 | 'god' | 'Trisolaran' (三体人)
DPZ.say(主);
```

运行 `node src/a.js`
控制台输出错误信息`TypeError: who.charAt is not a function`

[MDN](https://developer.mozilla.org/zh-CN/)

将`a.js`改成`a.ts`文件，根据编辑器提示加上类型推断

![Img](https://cdn.jsdelivr.net/gh/w4ng3/wiki-image@main/img/yank-note-picgo-img-20240801132605.png)

这样就能在编译阶段发现错误了。

编写 ts 文件后，执行`tsc`会在`outDir`指定目录下生成对应的`xxx.js`文件，然后可以通过`node`命令运行。

> 执行 `tsc --noEmit` 命令在检查时不会生成任何 JavaScript 文件，或者在 compilerOptions 里指定 `"noEmit": true`

但这样稍显麻烦，我们可以全局安装 `ts-node`模块

```bash
npm i -g ts-node
```

现在，可以直接执行 ts 文件了

```bash
ts-node xxx.ts
```

TypeScript 官方没有做运行环境，只提供编译器。编译时，会将类型声明和类型相关的代码全部删除，只留下能运行的 JavaScript 代码，并且不会改变 JavaScript 的运行结果。

因此，TypeScript 的类型检查只是编译时的类型检查，而不是运行时的类型检查。一旦代码编译为 JavaScript，运行时就不再检查类型了。

就算是开发阶段，依然可以设置参数类型为 `any` 或者 `@ts-ignore` 来跳过检查，因此 TS 只是开发阶段的君子协议，而且定义 string 类型也无法防止主等于六，你可以`let 主 = '6'`。

两种方式，一种是使用 js 方法在运行时抛出错误

```ts
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  say = (who: any) => {
    if (!isNaN(who)) throw new Error("主不等于" + who);
    const firstChar = who.charAt(0).toLocaleUpperCase();
    console.log(`${firstChar}${who.slice(1)} bless you`);
  };
}
```

另一种是定义 TS 类型

![Img](https://cdn.jsdelivr.net/gh/w4ng3/wiki-image@main/img/yank-note-picgo-img-20240801135956.png)
这样在赋值时编辑器还会给出提示

### 给 js 文件生成类型

由上一个例子可知，ts 充当了说明文档的作用，帮助编译器进行代码审查。

如果要在 js 文件里给一个方法写文档，正确的格式是这样写

```js
/**
 * 两数之和
 * @param {number} a - 要添加的第一个数字
 * @param {number} b - 要添加的第二个数字
 * @returns {number} 两个数字的和，或连接的字符串
 */
export function sum(a, b) {
  return a + b;
}
```

这样在 ts 里调用这个方法，也会出现类型提示(前提是在 `compilerOptions` 里开启 `"allowJs": true`)

开启下面的配置，在运行`tsc`时，就会自动生成 js 文件的类型文件了。

```json
{
  "compilerOptions": {
    // ...
    "allowJs": true, // 指定源目录的 JavaScript 文件是否原样拷贝到编译后的目录
    "declaration": true, // 生成相应的 '.d.ts' 文件
    "declarationDir": "./types" // 为生成的声明文件指定输出目录
  }
}
```

### 严格模式

<!-- [TypeScript 中的严格模式 - 掘金 (juejin.cn)](https://juejin.cn/post/6896680181000634376) -->

在 tsconfig.json 文件中，`compilerOptions`下有一个配置项叫做 `strict`，默认为 true，表示开启严格模式：

```json
{
  "strict": true
}
```

它表示是否开启下面一系列的类型检查规则：

```json
{
  "noImplicitAny": true, // 不允许出现隐式的 any 类型
  "strictNullChecks": true, // 严格空检查
  "strictFunctionTypes": true, // 严格函数类型检查
  "strictBindCallApply": true, // 严格绑定检查
  "strictPropertyInitialization": true, // 严格属性初始化检查
  "noImplicitThis": true, // 不允许出现隐式any类型的this
  "alwaysStrict": true // 是否开启严格模式,指JavaScript 中的 "use strict"
}
```

- 你如果既设置了 `strict` 又单独设置了其中的部分配置，那么以单独设置的配置为准

## TypeScript 的类型系统

- [基本类型](https://typescript.p6p.net/typescript-tutorial/types.html#基本类型)
- [值类型](https://typescript.p6p.net/typescript-tutorial/types.html#值类型)
- [联合类型](https://typescript.p6p.net/typescript-tutorial/types.html#联合类型)
- [交叉类型](https://typescript.p6p.net/typescript-tutorial/types.html#交叉类型)
- [数组类型](https://typescript.p6p.net/typescript-tutorial/array.html#typescript-的数组类型)
- [interface 接口](https://typescript.p6p.net/typescript-tutorial/interface.html#typescript-%E7%9A%84-interface-%E6%8E%A5%E5%8F%A3)
- [泛型](https://typescript.p6p.net/typescript-tutorial/generics.html)

## Vue3

### TS 在业务端的应用

- 在写业务代码时，Typescript 最常用的用处就是定义接口的传参对象和返回对象的类型

> 以知乎热榜举例

1. 在[知乎热榜](https://www.zhihu.com/hot)页面，打开控制台，找到对应[接口 hot-lists](https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=50&desktop=true)
2. 复制 JSON 到[json-to-typescript](https://transform.tools/json-to-typescript) 转换出类型代码（也可以在 VSCode 搜索相应插件）
3. 在`math-project-vue`项目中新建`src/types/type.d.ts`文件，将生成的类型代码粘贴
4. 修改下 interface 的名称，并在关键字段给上注释，如：`/** 摘录 */`
5. 创建 vue 组件，调用接口请求数据

```ts
const list = ref<ZhiHuHot[]>([]);

const getData = async () => {
  const url =
    "https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=1&desktop=true";
  let response = await fetch(url, { mode: "no-cors" });
  const res: ZhiHuHotList = await response.json();
  list.value = res.data;
};

onMounted(() => {
  getData();
});

const toggleHot = (id: number) => {
  window.open(`https://www.zhihu.com/question/${id}`);
};
```

在我们的项目里请求知乎的接口会被浏览器的 CROS 机制拦截，因此需要做两件事，
`修改请求模式`

```ts
const url = "/api/v3/feed/topstory/hot-lists/total";
let response = await fetch(url, { mode: "no-cors" });
```

[vite.config.ts](https://vitejs.cn/vite3-cn/config/server-options.html#server-proxy) `设置反向代理`

```ts
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { "@": "/src" },
  },
  server: {
    open: true,
    proxy: {
      "/api": {
        target: "https://www.zhihu.com",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
```

> 接口调试成功后，使用 `v-for`指令将数据渲染到页面上

---

Tips: `bilibili`的 api 反爬虫做的比较好，使用反向代理也会返回 403

> Bilibili 的 api 接口响应有一个统一的封装，通常都包含
> data、code、message，因此，可以用泛型写一个公共类型

```ts
export interface CommonResponse<T> {
  /** 0-正常 */
  code: number;
  message: string;
  data: T;
  [key: string]: any;
}
```

> 给接口定义类型（通常是通过 TypeScript）带来了几个好处：

- `静态类型检查`：可以在编译时捕获类型错误。这有助于避免运行时错误，并提高代码的质量和稳定性。

- `增强的代码可读性`：明确定义的接口类型使得代码对于其他开发者（包括未来的你）来说更容易理解。清晰的类型标记可以减少理解代码所需的时间，并帮助新团队成员更快地熟悉项目。

- `代码维护和重构`：当需要修改代码时，类型定义提供了一个清晰的合同，说明每个组件或函数期望什么类型的输入和返回什么类型的输出。

- `自动补全和文档`：现代编辑器可以利用类型定义提供智能的代码补全，帮助开发者更快地编写代码。类型定义也可以作为一种形式的活文档，因为它们描述了 API 的使用方式。

- `设计时的反馈`：在设计 API 或组件时，思考类型可以帮助你更好地设计接口，确保它们是一致的和易于使用的。
- `团队协作`：当团队成员都遵循类型定义的规则时，这可以减少由于误解或错误使用 API 而导致的 bug。

- `更好的调试`：当运行时错误发生时，类型定义可以帮助你更快地定位问题。

### [TypeScript 与组合式 API](https://cn.vuejs.org/guide/typescript/composition-api.html)

- [搭配 TypeScript 使用 Vue](https://cn.vuejs.org/guide/typescript/overview.html#using-vue-with-typescript)

> 重点掌握 `defineProps` 、`defineEmits`、`ref`、
> `provide / inject `、`defineModel`、`defineExpose` 的 TypeScript 用法

---

- [TypeScript Deep Dive 中文](https://jkchao.github.io/typescript-book-chinese/)
- [浅谈 TypeScript 类型系统](https://zhuanlan.zhihu.com/p/64446259)
- [doodlewind: 读懂类型体操, TypeScript 类型元编程基础入门](https://zhuanlan.zhihu.com/p/384172236)
- [fetch](https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html)
- [defineModel](https://cn.vuejs.org/api/sfc-script-setup.html#usage-with-typescript)
