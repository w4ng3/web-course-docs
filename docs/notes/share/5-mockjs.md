---
title: 以赝顶真
createTime: 2024/09/23 22:33:38
permalink: /share/mockjs/
icon: logos:faker
---

> 写前端却没有 api 提供数据，犹如抽悦刻没有烟油!!!

## 假数据是 mom 生的

### [Mock.js Getting Started](https://github.com/nuysoft/Mock/wiki/Getting-Started)

```bash
# 安装
pnpm add mockjs
pnpm add -D @types/mockjs
```

新建一个`useMock.ts`文件测试一下

```ts
import Mock, { Random } from "mockjs";

export const useMock = () => {
  function getSongs() {
    const data = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      "list|5-10": [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          "id|+1": 1,
          songName: `I got ${Random.word(5)}`,
          singer: function () {
            return `珍珠·${Random.cname()}`;
          },
          date: '@date("yyyy-MM-dd")',
          img: Random.image("200x100", "#50B347", "#FFF", "YYDZ"),
        },
      ],
    });
    return data.list;
  }
  return {
    getSongs,
  };
};
```

在 vue 组件里渲染

```vue
<script setup lang="ts">
import { useMock } from "@/composables/useMock";
import { onMounted, ref } from "vue";

const mock = useMock();

const list = ref();
onMounted(() => {
  list.value = mock.getSongs();
  // console.log('list :>> ', list.value)
});
</script>

<template>
  <h2>礼堂金曲</h2>
  <div
    v-for="item in list"
    :key="item.id"
    class="mx-auto mb-2 w-160 flex items-center gap-4"
  >
    <div size-10 content-center rounded-full bg-red-3>
      {{ item.id }}
    </div>
    <img :src="item.img" alt="" />
    <div>{{ item.singer }}</div>
    <div class="flex-1 text-xl font-bold">《{{ item.songName }}》</div>
    <div text-right>
      {{ item.date }}
    </div>
  </div>
</template>
```

![](https://cdn.jsdelivr.net/gh/w4ng3/wiki-image@main/img/202409250941865.png)

### 文档

Mock.js 可以生的假数据生成规则很多，熟悉`语法规范`后照着`示例模版`自己写点。

- [语法规范](https://github.com/nuysoft/Mock/wiki/Syntax-Specification)
- [示例模版](http://mockjs.com/examples.html)

## [Apifox](https://apifox.com/)

API 设计、开发、测试一体化协作平台

> Apifox = Postman + Swagger + Mock + JMeter

- api 定义
- 类型定义
- mock data
- 文档生成
- ...
