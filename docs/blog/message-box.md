---
title: 封装弹窗组件
createTime: 2024/11/06 14:34:07
permalink: /article/message-box/
# draft: true
tags:
  - vue
---

弹窗是一个很常见的组件，像是 Element 的 [message-box](https://element-plus.org/zh-CN/component/message-box.html) 组件就和 `alert()` 的使用一样方便，但是三方库的组件的样式往往不符合 UI 需求，覆盖起来太麻烦，不如自己写一个。

:::code-tabs

@tab MessageBox.vue

```vue :collapsed-lines=10
<script lang="ts" setup>
import type { MessageBoxProps } from "./index";

const {
  closeable = true,
  showCancle = true,
  showConfirm = true,
  showIcon = true,
} = defineProps<MessageBoxProps>();

const emit = defineEmits(["cancel", "confirm"]);

function handleCancle() {
  emit("cancel");
}

function handleConfirm() {
  emit("confirm");
}
</script>

<template>
  <div
    class="absolute left-0 top-0 z999 h-full w-full flex content-center items-center bg-#3e36487a"
  >
    <div class="relative ma w-100 overflow-hidden rounded-xl bg-#e1e1e1 p-10">
      <div
        v-if="closeable"
        class="i-carbon-close-large absolute right-5 top-5 size-10 cursor-pointer"
        @click="handleCancle"
      />
      <!-- 弹窗内容 -->
      <div flex items-center gap-3 text-xl>
        <div v-if="showIcon" class="i-carbon-warning-filled mb-a size-20" />
        <div flex-1>
          <p v-if="title">
            {{ title }}
          </p>
          <div w-full break-words>
            {{ content }}
          </div>
        </div>
      </div>
      <!-- 操作按钮 -->
      <div mt-4 flex justify-center gap-10>
        <button
          v-if="showCancle"
          class="cursor-pointer rounded-sm bg-red px-12 text-white"
          @click="handleCancle"
        >
          取消
        </button>
        <button
          v-if="showConfirm"
          class="cursor-pointer rounded-sm border-none bg-primary px-12 text-white"
          @click="handleConfirm"
        >
          确定
        </button>
      </div>
    </div>
  </div>
</template>
```

@tab index.ts

```ts :collapsed-lines=10
import { createApp } from "vue";
import MessageBox from "./MessageBox.vue";

export interface MessageBoxProps {
  /** 标题 */
  title?: string;
  /** 内容 */
  content: string;
  /** 可关闭 */
  closeable?: boolean;
  /** 显示取消按钮 */
  showCancle?: boolean;
  /** 显示确定按钮 */
  showConfirm?: boolean;
  /** 显示Icon图标 */
  showIcon?: boolean;
}

interface MessageBoxOptions extends MessageBoxProps {
  onCancel?: Function;
  onConfirm?: Function;
}

export function showMsg(options: MessageBoxOptions) {
  const div = document.createElement("div");
  document.body.appendChild(div);

  // 渲染组件到界面上
  const app = createApp(MessageBox, {
    ...options,
    onCancel: () => {
      options.onCancel ? options.onCancel() : null;
      app.unmount();
      div.remove();
    },
    onConfirm: () => {
      options.onConfirm ? options.onConfirm() : null;
      app.unmount();
      div.remove();
    },
  });
  app.mount(div);
}
```

:::

导出一个`showMsg`方法，创建一个 div，将 `MessageBox`组件挂载上去，点击后卸载。

调用方式如下：

```vue
<template>
  <button @click="open">Click to open the Message Box</button>
</template>

<script setup lang="ts">
import { showMsg } from "@/components/MessageBox";

const open = () => {
  showMsg({
    title: "标题",
    content: "1234567",
    closeable: true,
    showCancle: true,
    onCancel: () => {
      console.log("Cancle :>>");
    },
    onConfirm: () => {
      console.log("Confirm :>>");
    },
  });
};
</script>
```

---

参考：

@[bilibili width="80%" height="320px"](BV1gnWVe3EBu)
