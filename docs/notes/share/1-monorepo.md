---
title: Project A or B
icon: devicon:pnpm-wordmark
author: w4ng3
tags:
  - share
createTime: 2024/08/26 14:43:32
permalink: /share/monorepo/
---

![monorepo](https://cdn.jsdelivr.net/gh/w4ng3/wiki-image@main/img/202408270935494.png)

`Monorepo` 是一种项目开发与管理的策略模式，它代表"单一代码仓库"（Monolithic Repository）。在 Monorepo 模式中，所有相关的项目和组件都被存储在一个统一的代码仓库中，而不是分散在多个独立的代码仓库中，这些项目之间还可能会有依赖关系。

- 当下前端组件库 / 工具库的最佳实践方案基本都是 `pnpm + monorepo` 的开发模式，如 [Vue](https://github.com/vuejs/core)、React、Vite、Element UI、[Vant UI](https://github.com/youzan/vant) 等。这种开发模式非常适合组件库这种涉及不同模块且不同模块还存在相互依赖的项目

<!-- 可以看到有 pnpm-workspace.yaml -->

- pnpm 是一种前端的包管理工具，它自身支持的某些特性可以很好的与 monorepo 模式相结合。

## 项目管理模式

项目管理模式发展到现在，先后有三种项目管理模式的历史进程：

![Img](https://cdn.jsdelivr.net/gh/w4ng3/wiki-image@main/img/yank-note-picgo-img-20240727154311.png)

### Monolithic（单体应用）开发模式

在软件开发的早期阶段，通常采用单体应用的开发模式。整个应用程序由一个单一的代码库、构建和部署流程组成。这种模式简单易懂，适合小型项目。

- 优点：
  - `易于集成和部署`: 所有的代码在一个仓库里面，不需要特别的集中管理和协调，也可以直接在本地部署调试。
  - `易于重用`: 所有的代码都在一个仓库中，开发人员开发的时候比较容易发现和重用已有的代码。
  - `易于规范代码`: 所有的代码在一个仓库当中就可以标准化依赖管理，规范化代码的风格。
- 缺点：
  - `代码维护性变差`: 随着功能以及代码量的大幅增加，代码功能耦合性增强。
  - `构建时间过长`: 任何小修改必须重新构建整个项目，这个过程往往很长。
  - `稳定性差`: 任意一个功能出现问题，可能导致整个应用挂掉。

### Multirepo（多仓多模块）开发模式

为了解决单体应用的扩展性问题，团队开始将项目拆分为多个独立的仓库，每个仓库独立维护自己的代码和构建流程。这种模式更适合大型和复杂的项目，因为它提供了更好的隔离性和独立性，同时可以更灵活地管理多个团队的工作。

- 优点：
  - `职责单一`: 每一个项目都有一个独立的仓库，。
  - `代码量和复杂性受控`: 项目由不同的团队独立维护、边界清晰。单个项目也易于自治开发测试部署和扩展，不需要集中管理集中协调。
  - `利于进行权限控制`: 可以针对单个仓库来分配权限，权限分配粒度比较细。
- 缺点：
  - `代码和配置很难共享`：每个仓库都需要做一些重复的工程化能力配置（如 eslint/test/ci 等）且无法统一维护，且不利于代码复用。
  - `依赖的治理复杂`：模块越来越多，涉及多模块同时改动的场景增加。
  - `开发人员缺乏对整个项目的整体认知`：开发人员一般只关心自己的服务代码，看不到项目整体，造成缺乏对项目整体架构和业务目标整体性的理解。
  - `存储和构建消耗增加`：假如多个工程依赖 pkg-a，那么每个工程下 node_modules 都会重复安装 pkg-a

### Monorepo （单仓多模块）开发模式

- <strong>回归单体管理</strong>: Monorepo 是一种试图回归单体管理优势的方法，但保留了多仓库开发的某些优点。它允许在一个代码库中管理多个项目、组件或服务，提供更好的代码共享和重用性。

- 优点：
  - 保留 multirepo 的主要优势
    - `代码复用、代码耦合度降低`：Monorepo 中的子模块可以代码共享，可以最大程度复用依赖、复用工作流、复用基础配置。
    - `模块独立管理`
    - `分工明确，业务场景独立`
  - 可以统一项目的构建和部署流程，降低了配置和维护多个项目所需的工作量。
- 缺点：
  - Monorepo 可能随着时间推移变得庞大和复杂，导致构建时间增长和管理困难。
  - 权限管理问题：项目粒度的权限管理较为困难，容易产生非 owner 管理者的改动风险。

## PNPM

### pnpm 相比于 npm 与 yarn 包管理工具有以下优势：

- `速度快`：多数场景下，安装速度是 npm / yarn 的 2 - 3 倍。
- `基于内容寻址`：硬链接节约磁盘空间，不会重复安装同一个包，对于同一个包的不同版本采取增量写入新文件的策略。
- `依赖访问安全性强`：优化了 node_modules 的扁平结构，提供了限制依赖的非法访问(幽灵依赖) 的手段。
- `支持 monorepo`：自身能力就对 monorepo 工程模式提供了有力的支持。在轻量场景下，无需集成 lerna、Turborepo 等工具。

### PNPM 安装

[使用 npm 安装 pnpm](https://www.pnpm.cn/installation#%E4%BD%BF%E7%94%A8-npm-%E5%AE%89%E8%A3%85)

安装之前，先确保已安装 `Node.js（至少 v18.12）`

[推荐使用 nvm 安装 nodejs: (先卸载本地 node)](https://nodejs.cn/en/download/package-manager)

[使用 nrm 切换镜像源](https://www.npmjs.com/package/nrm)

`pnpm -v`
如果显示版本，说明安装成功

## 基于 pnpm 包管理器的 monorepo 基本使用

[workspace(工作空间)](https://www.pnpm.cn/workspaces)

假设项目的目录结构如下: 项目中有一个 `main 应用`，在 packages 文件夹下还有一个 `react应用` 和 `vue应用`，我们可以用 pnpm 对依赖进行统一管理

<!-- 虽然项目根目录通常不会作为一个子模块，而是*主要作为一个管理中枢* -->

```
- web-course-project
  - main-project
  - packages
    - math-project-vue
    - clothing-project-react
```

```bash
# 创建文件夹
mkdir web-course-project
cd web-course-project/
mkdir main-project
mkdir packages
ppnpm init # 在根目录pnpm初始化生成package.json
# code . # 在vscode打开
cd packages # 进入 packages
# 创建项目 B
pnpm create vite math-project-vue --template vue-ts
# 创建项目 A
pnpm create vite clothing-project-react --template react-ts
```

> 1️⃣ 根目录创建 pnpm-workspace.yaml 文件

```bash
cd ../
touch pnpm-workspace.yaml
```

> 2️⃣ 配置 pnpm-workspace.yaml 文件

- https://www.pnpm.cn/pnpm-workspace_yaml

```yaml
packages:
  # 主项目
  - "main-project"
  # 子目录下所有项目
  - "packages/*"
```

在根目录运行如下命令，一键为所有项目安装依赖

```bash
pnpm i
```

安装成功后会在根目录和两个子项目下都出现`node_modules`文件夹

接下来分别进入两个项目目录下，pnpm dev 启动
默认会使用 5173 和 5174 端口

### 初始化仓库 git

```bash
git init
touch .gitignore
```

```git
<!-- .gitignore -->
node_modules/
dist
.DS_Store
pnpm-lock.yaml
```

- 后续的代码大多会使用这个仓库，我们把它上传 github 进行管理

  - 在 github 新建仓库 web-course-project
  - git add .
  - git commit -m "monorepo init"
  - git remote add origin git@github.com:[君の名は]/web-course-project.git
  - git branch -M main
  - git push -u origin main

可以先给项目加个 README.md 再 push，main 文件夹为空，可以加个 .gitkeep 文件占位

### 维护唯一版本 [catalogs](https://pnpm.io/zh/catalogs)

在工作区（即 monorepo 或多包存储库）中，许多包使用相同的依赖项是很常见的，我们可以对一些包的版本号进行统一管理 _pnpm version >= v9.5.0_

比如`math-project` 和 `clothing-project`的 `typescript`和`vite`版本放在 `pnpm-workspace.yaml` 管理

```yaml
catalog:
  vite: "^5.3.4",
  typescript: "^5.2.2",
```

然后修改子项目的 package.json

```json
"devDependencies": {
  "typescript": "catalog:",
  "vite": "catalog:",
}
```

### 安装项目公共依赖 Day.js

```bash
pnpm add dayjs -w
```

会发现子项目的 package.json 里没有出现 dayjs，却可以在项目里直接使用

```vue
<!-- App.vue -->
<script setup lang="ts">
import dayjs from "dayjs";
</script>
<template>
  <div>{{ dayjs().format("YYYY年MM月DD日 HH:mm:ss") }}</div>
</template>
```

### 创建工具子包

在 `packages` 下新建 `tools` 文件夹

```bash
mkdir tools
cd tools
touch index.js # 新建 index.js
pnpm init # 新建 package.json
```

修改一下新生成的 package.json 里的 name 和 module

```json
{
  "name": "@w4ng3/tools",  # 在包名前用 @ + [君の名は]作为唯一标识
  "version": "1.0.0",
  "description": "公共工具库",
  "main": "index.js",
  "module": "index.js",  # 声明es导出模块
  ...
}
```

在 `index.js` 文件写一些代码并导出

```js
export class Person {
  constructor(name, plan) {
    this.name = name;
    this.plan = plan;
  }
  get slogan() {
    return `${this.plan} is just my plan B`;
  }
}
```

然后运行

```bash
pnpm add @w4ng3/tools -F math-project-vue --workspace
```

可以在 math 项目里看到该模块已被导入，版本号为 `"workspace:^"`

```ts
import { Person } from "@w4ng3/tools";
const p = new Person("Junmping", "math");
// <div> {{ p.name + ':' + p.slogan }}</div>
```

ts 文件无法识别 js 文件类型，需在 vite-env.d.ts 里声明

```ts
declare module "@w4ng3/tools";
```

![Img](https://cdn.jsdelivr.net/gh/w4ng3/wiki-image@main/img/yank-note-picgo-img-20240728174948.png)

> 拓展：添加公共组件 components ，vue 跨项目共享

---

参考：

- [十分钟搭建一个 Monorepo Vue3 组件库](https://juejin.cn/post/7198159223204675643?searchId=202407271653101001C683BBD8DA0E26EB)
- [使用 npm 7 工作区简化你的 monorepo](https://dev.to/limal/simplify-your-monorepo-with-npm-7-workspaces-5gmj)
