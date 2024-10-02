---
title: TS当然不是JS的超集
createTime: 2024/09/05 21:35:26
permalink: /article/TSisnotSuperJS/
---

<!-- https://zhuanlan.zhihu.com/p/714759783 -->

微软自称 TypeScript 是 JavaScript 超集只是一个噱头；
TypeScript 的很多细节都会导致与 JS 的“不兼容”, 即一段代码在“TypeScript 运行时”和“JavaScript 运行时”下都不会报错且产生不同的输出。

- Example

```ts
let as = () => 0,
  m = [].map<0> as () => [];
console.log(`I'm ${!m ? "Java" : "Type"}Script`);
```

在 TS 中，这个例子被编译为：

```js
let as = () => 0,
  m = [].map;
console.log(`I'm ${!m ? "Java" : "Type"}Script`);
```

m 当然是一个 truthy value;

而在 JS 中，这个例子被解释为：

```js
let as = () => 0,
  m = [].map < 0 > as(() => []);
console.log(`I'm ${!m ? "Java" : "Type"}Script`);
```

具体而言：

- [].map 是一个非基础值， 0 是一个基础值，前者比较前隐式转换为 NaN ，NaN 和任何数比较都得到 false；
- 随后，false 与 as(...) 函数调用的结果作比较。as 被定义为总是返回 0，false 隐式转换到 0，0 > 0 是 false
- 所以 m 是一个 falsy value。

所以在 JS 中得到了和 TS 不一样的解释，就导致了不同的运行结果
