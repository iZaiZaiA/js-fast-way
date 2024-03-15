# 其它函数

一些其他的方法函数

## 并发点击 <Badge type="warning" text="V0.4.7" />

阻止两次操作在 `200毫秒内` 的快速操作事件，只执行最后一次的事件。

```vue
<template>
    <button @click="onTestClick">点击测试</button>
</template>

<script setup>
import { useClick } from "js-fast-way"
const onTestClick = async () => {
    await useClick() //这里要使用 await 来等待
    console.log('被点击了')
}
</script>
```


## 按帧渲染 <Badge type="warning" text="V0.4.7" />

其实主要的思路就是让这些组件一部分一部分的渲染，一起渲染压力太大要分摊一下，先渲染其中一部分，让用户能够看到，然后再持续的渲染剩下的部分

```vue
<template>
    <div class="container">
        <div v-for="n in 100">
            <!-- 在渲染组件的时候，我们可以利用 defer 函数来进行 if 判断 -->
            <div v-if="defer(n)">1111</div>
        </div>
    </div>
</template>

<script setup>
import { useDefer } from "js-fast-way"
const defer = useDefer();
</script>
```

### value

- 类型: `Number`
- 说明: `渲染帧`
