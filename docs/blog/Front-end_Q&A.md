---
title: Front-end Q&A
createTime: 2024/12/03 16:37:07
permalink: /article/Q&A/
---

## 单选

#### 1. 以下关于 vue-i18n 的回退语言配置 (fallbackLocale) 的描述，错误的是？

A. fallbackLocale 提供了当前语言缺失翻译时的备用语言。

B. 可以为不同的语言分别配置独立的回退语言。

C. 如果设置 fallbackLocale，页面始终会优先显示回退语言内容。

D. 当 fallbackLocale 也缺失翻译时，返回词条的键名或空字符串。


#### 2. 在 TypeScript 中，如何声明一个变量 age 为只读类型，并且类型为 number？

A. let age: readonly number;

B. const age: number;

C. readonly age: number;

D. let age = readonly number; 

#### 3. Monorepo开发模式的主要目标是什么？

A. 增加代码库的数量

B. 提高代码的共享和重用性

C. 减少团队成员之间的协作

D. 增加项目的构建时间

 

#### 4. 在 TypeScript 中，以下哪个选项用于启用所有严格类型检查选项？

A.`"noImplicitAny": true`

B. `"strictNullChecks": true`

C. `"strict": true`

D. `"alwaysStrict": true`

 

#### 5. 以下哪段代码能正确推断出联合类型？

A. `const colors = ["red", "blue", "green"] as const; type Colors = (typeof colors)[number]`;

B. `const colors = ["red", "blue", "green"] as const; type Colors = typeof colors;`

C. `const colors = ["red", "blue", "green"]; type Colors = typeof colors;`

D. `const colors = ["red", "blue", "green"]; type Colors = (typeof colors)[number];`

 

#### 6. 在 UnoCSS 中实现暗黑模式的正确方式是？

A. 只需要在样式中使用 dark: 前缀

B. 只需要在 HTML 标签添加 dark 类

C. 需要在 HTML 标签添加 dark 类，并在样式中使用 dark: 前缀

D. 使用 CSS 媒体查询 @media (prefers-color-scheme: dark)

 

#### 7. 在 monorepo 项目中，如果某个子项目需要单独配置 UnoCSS，需要怎么做？？

A. 只需在子项目中创建 uno.config.ts

B. 只需在子项目的 vite.config.ts 中指定配置文件位置

C. 需要在子项目创建 uno.config.ts，并在 vite.config.ts 中指定配置文件位置

D. 无法为子项目单独配置，只能使用根目录的配置

 

#### 8. 哪种开源许可证允许修改后闭源？

A. GPL

B. MIT

C. Affero GPL (AGPL)

D. Mozilla（MPL）

 

#### 9. 语义化版本的格式是什么？

A. 主版本号.次版本号.修订号 (MAJOR.MINOR.PATCH)

B. 年.月.日 (YEAR.MONTH.DAY)

C. 版本号.修订号.次版本号 (VERSION.PATCH.MINOR)

D. 主版本号.修订号.次版本号 (MAJOR.PATCH.MINOR)

 

#### 10. CLI 工具的主要作用是什么？

A 提供图形用户界面以便用户操作

B. 提供命令行界面以便用户通过命令行执行程序

C. 用于编写前端组件

D. 用于优化数据库查询



#### 11. 在 Vue 3 中，以下哪个是获取模板引用的正确方式？

A. `const inputRef = ref<HTMLInputElement | null>(null)`

B. `const inputRef = reactive<HTMLInputElement>()`

C. `const inputRef = ref(document.querySelector('input'))`

D. `const inputRef = document.getElementById('input')`

 

#### 12. 在 Vite 中配置开发环境的反向代理，以下哪个配置是正确的？

A. `server: { proxy: { '/api': { target: 'http://localhost:3000' } } }`

B. `devServer: { proxy: { '/api': { target: 'http://localhost:3000' } } }`

C. `proxy: { '/api': { target: 'http://localhost:3000' } }`

D. `server: { proxy: '/api': 'http://localhost:3000' }`

 

#### 13. 在 TypeScript 中，以下哪个是正确的泛型函数声明？

A. `function getData<T>(data: T): Promise<T> { }`

B. `function getData(T)(data: T): Promise<T> { }`

C. `function getData<T>(): T { data: T }`

D. `function getData(data): Promise<T> { }`


#### 14. Vue 3 中 `<script setup>` 的特点是什么？

A. 需要手动 return 组件数据

B. 组件选项需要显式声明

C. 顶层的导入和变量声明会自动暴露给模板

D. 必须配合 defineComponent 使用


#### 15. 以下哪个工具用于管理 Node.js 的版本？

A. npm

B. nrm

C. nvm

D. pnpm


#### 16. 在前端项目中，ESLint 的主要作用是什么？

A. 打包代码

B. 代码格式化

C. 代码质量检查

D. 性能优化

#### 17. 在 Pinia 中使用 storeToRefs 的主要目的是什么？

A. 创建 store 的实例

B. 保持 store 中的响应式属性解构后仍然具有响应性

C. 访问 store 中的方法

D. 重置 store 的状态

#### 18. 以下哪个不是 Vue 3 的生命周期钩子？

A. onMounted

B. onCreated

C. onUnmounted

D. onBeforeMount

#### 19. 在使用 Git 时，以下哪个命令用于创建新分支并切换到该分支？

A. git branch new-branch

B. git checkout -b new-branch

C. git switch new-branch

D. git create new-branch

#### 20. 以下哪个不是有效的 CSS-in-JS 解决方案？

A. styled-components

B. emotion

C. tailwind

D. CSS Modules


## 填空

1. 在 Git 中，将某次提交回退但保留工作目录修改的命令是 `git reset --soft`，而将回退的提交彻底删除并无法恢复的命令是 `git reset --hard`。

2. 使用 git rebase 时，如果遇到冲突，需要在解决冲突后执行命令 `git rebase --continue` 来继续变基操作；如果想放弃变基并恢复到变基之前的状态，可以执行命令 `git rebase --abort`。

3. 不同于使用动态类型的 JavaScript，像 TypeScript 这样的现代静态类型语言，一般都具备两个放置语言实体的「空间」，即 `类型空间` 和  `值空间`  。TS关键字 `class` 和 `enum`可以横跨两个空间。

4. monorepo项目可以使用 `workspace` 进行项目依赖的管理。

5. 在项目中配置 ESLint，可以使用命令  `eslint --fix` 修复错误。

6. 在 UnoCSS 中，可以通过配置文件的  `rules`  字段定义自定义规则，用于支持项目中不常见的样式，还可以配置` theme` 字段定义共享配置的主题对象。

7. 在前端测试中，使用` jest.mock() `方法可以对某个函数的依赖进行模拟，避免直接调用外部模块或函数的真实实现。

8. 在 Mock.js 中，生成一个包含 1-10 个元素的数组，正确的语法是：` list|1-10`  ，使用 Random 生成随机中文姓名时，正确的方法是 `Random.cname() ` 。

9. 在 Vue 项目中使用 vue-i18n 插件时，createI18n 配置对象中的 `locale`属性用于配置默认语言，  `fallbackLocale `属性用于指定找不到翻译时要回退到的语言。

10. 目前JavaScript最常用的三类模块规范是` ESM` 、 `CJS `和` IIFE  `。

11. 在 Git 中，查看某个提交的详细信息的命令是，而查看提交历史的命令是 `git show`  、和 `git log` 。

12. 当需要将多个 commit 合并为一个 commit 时，可以使用命令 `git rebase -i HEAD~n` ；如果要修改最近一次的 commit 信息，可以使用命令`git commit --amend`  。

13. 在 TypeScript 中，interface 和 type 的主要区别在于：interface 支持 `声明合并  `，而 type 支持 `联合类型` 。关键字` type `和` interface `只能用于类型空间，编译后会被删除。

14. 在 Mock.js 中，生成一个100-200之间的随机数，正确的语法是： `@integer(100,200)`  ，生成一个随机的手机号码，正确的方法是 `@phone `。

15. 在 Vite 项目中，通过`vite build`命令可以进行生产环境构建，通过`vite preview`命令可以预览构建后的产物。 

16. 在Vitest中，使用 expect(value).toBe() 用于比较 `原始`类型的值，而使用 expect(value).toEqual() 用于比较 `引用` 类型的值。

17. 在发布 npm 包时，package.json 中的` main` 字段用于指定包的入口文件， `types` 字段用于指定 TypeScript 类型声明文件，而 `files` 字段用于指定哪些文件需要发布。

18. 在发布 npm 包之前，可以使用` npm link ` 命令进行本地测试。

19. 在 Vite 项目中，所有模式都会加载的环境变量文件名为 `.env ` 。

20. 在 Vue 的 JSX 语法中，列表渲染使用` array.map ` 。



## 简答题

1. pnpm 相比于npm与yarn包管理工具有哪些优势?

::: tip answer
①　速度快：多数场景下，安装速度是 npm / yarn 的 2 - 3 倍。

②　基于内容寻址：硬链接节约磁盘空间，不会重复安装同一个包，对于同一个包的不同版本采取增量写入新文件的策略。

③　依赖访问安全性强：优化了 node_modules 的扁平结构，提供了限制依赖的非法访问(幽灵依赖) 的手段。

④　支持 monorepo：自身能力就对 monorepo 工程模式提供了有力的支持。在轻量场景下，无需集成 lerna、Turborepo 等工具。
:::


2. 什么是Monorep开发模式？简要描述其特点。
::: tip answer
Monorepo 是一种试图回归单体管理优势的方法，但保留了多仓库开发的某些优点。它允许在一个代码库中管理多个项目、组件或服务，提供更好的代码共享和重用性。

它保留了多仓多模块的主要优势：代码复用、代码耦合度降低，模块独立管理、分工明确，业务场景独立，可以统一项目的构建和部署流程，降低了配置和维护多个项目所需的工作量。
:::
 

3. 前端使用TypeScript给接口定义类型，有哪些好处？

::: tip answer
①　静态类型检查：可以在编译时捕获类型错误。这有助于避免运行时错误，并提高代码的质量和稳定性。

②　增强的代码可读性：明确定义的接口类型使得代码对于其他开发者（包括未来的你）来说更容易理解。

③　代码维护和重构：说明每个组件或函数期望什么类型的输入和返回什么类型的输出。

④　自动补全和文档：现代编辑器可以利用类型定义提供智能的代码补全，帮助开发者更快地编写代码。

⑤　设计时的反馈：在设计 API 或组件时，思考类型可以帮助你更好地设计接口，确保它们是一致的和易于使用的。

⑥　团队协作：当团队成员都遵循类型定义的规则时，这可以减少由于误解或错误使用 API 而导致的 bug。

⑦　更好的调试：当运行时错误发生时，类型定义可以帮助你更快地定位问题。
:::


4. Uniapp开发应用有哪些优点和缺点？
::: tip answer
- 优点：

①　**多端兼容**：支持编译到小程序（如微信、支付宝、百度等）、H5、App（iOS/Android）等多个平台。

②　**跨平台统一**：使用 Vue 语法进行开发，通过封装的 API 调用底层功能，避免了多平台间的差异。

​- 缺点：

①　性能限制：对于复杂的交互和高性：能要求的场景，Uniapp的性能不如原生开发。

②　平台差异问题：部分插件或组件可能无法完全兼容所有平台，导致需要单独处理。
:::
 

5. 什么是前端工程化？
::: tip answer
以一种偏向自动化、脚本化的方式，结合一些工具的能力，解决一些纯人工处理的低效、非标准的问题，来有效的提升效率、质量和性能。
:::


6. 简述 Vite 在开发环境下的工作原理，为什么它比传统构建工具启动更快？

::: tip answer
-  Vite 在开发环境下采用 ES modules 的方式提供服务
- 首次启动时无需打包，只需启动开发服务器
- 按需加载，只编译当前页面用到的文件
- 热更新时仅需让浏览器重新请求改动的模块
:::
 

7. 前端项目中的单元测试有什么作用？如何保证测试的有效性？

::: tip answer
- 作用：

  - 验证代码的正确性

  - 防止代码重构引入新的 bug

  - 提供代码文档的作用

  - 提高代码质量

- 保证有效性：

  - 保持测试的独立性

  - 合理的测试覆盖率

  - 测试用例要具有代表性

  - 及时维护测试用例
:::


8. 请解释什么是 Tree-shaking？它的实现原理是什么？

::: tip answer

- Tree-shaking 是一种通过清除未使用的代码来优化打包体积的技术

- 实现原理：

  - 基于 ES Module 的静态分析能力

  - 构建工具通过 AST 分析出模块的依赖关系

  - 标记模块导出值的使用情况

  - 在压缩阶段删除未使用的代码
:::
 

9. 前端工程中，可以使用哪些工具来规范团队的代码质量？

::: tip answer
- 代码格式化工具：Prettier
- 代码检查工具: ESLint
-  Git 提交规范: commitlint
- 自动化工具: husky
:::

## 编程题

1. 实现 MyPick 类型

实现一个类型 MyPick<T, K>，它可以从类型 T 中选择属性 K，并返回一个新的类型。K 是一个联合类型，表示要选择的属性的键。

例如：

```ts
interface Todo {
 title: string;
 description: string;
 completed: boolean;
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;
const todo: TodoPreview = {
title: 'Clean room',
 completed: false,
};
// 结果应该是：
// {
//  title: string;
//  completed: boolean;
// }
```

【参考答案】
```ts
type MyPick<T, K extends keyof T> = {
	[key in K]: T[key]
}
```

2. 实现 MyOmit 类型

实现一个类型 MyOmit<T, K>，它可以从类型 T 中剔除属性 K，并返回一个新的类型。K 是一个联合类型，表示要剔除的属性的键。
例如：
```ts
interface Todo {
 title: string;
 description: string;
 completed: boolean;
}
type TodoPreview = MyOmit<Todo, "description">;
// 结果应该是：
// {
//  title: string;
//  completed: boolean;
// }
```

【参考答案】
```ts
type MyOmit<T, K extends keyof T> = {
	[P in keyof T as P extends K ? never : P]: T[P];
};
```

3. 给Vue组合式函数编写单元测试，组合式函数useCounter代码如下，需编写一个一个单元测试文件测试它的 count、inc、dec方法。

```ts
// counter.ts
import { ref } from "vue";
export function useCounter(initial: number = 0) {
 const count = ref(initial);
 const inc = () => count.value++;
 const dec = () => count.value--;
 return {
  count,
  inc,
  dec,
 };
}
```

【参考答案】
```ts
// counter.test.ts
import { expect, test } from "vitest";
import { useCounter } from "counter";

test("useCounter", () => {
 const { count, inc, dec } = useCounter();
 expect(count.value).toBe(0);
 inc();
 expect(count.value).toBe(1);
 dec();
 expect(count.value).toBe(0);
});

```