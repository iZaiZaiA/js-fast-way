# 类型判断

在各种业务场景中，可能会用到的一些类型判断方法

## 是否为某个类型

用于判断数据内容是否为某个类型

```javascript
import { isType } from "js-fast-way"

isType({}, 'Object') // true
```

### value <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `数据内容，如 {}`

### type <Badge type="warning" text="必传参数" />

- 类型: `string`
- 说明：`要对比的类型`
- 可选值：`boolean | number | string | function | array | date | regExp | undefined | null | object | 等`

### 返回内容

- 类型: `Boolean`
- 说明：`是否和传递的类型一致`
- 返回值：`true | false`



## 对象数据类型

获取对象数据类型， 根据 `[object *]` 获取该对象的数据类型， 如 `[object Boolean]` 返回 `boolean`

```javascript
import { getObjType } from "js-fast-way"

getObjType({}) // object
```

### obj <Badge type="warning" text="必传参数" />

- 类型: `object`
- 说明：`对象数据内容`

### 返回内容

- 类型: `String`
- 说明：`返回所属的类型名称`
- 返回值：`boolean | number | string | function | array | date | regExp | undefined | null | object | element`


## 是否为字符串

```javascript
import { isString } from "js-fast-way"

isString('vue-utils-plus') // true
```

### value <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 说明：`是否为字符串类型`
- 返回值：`true | false`


## 是否为数值

```javascript
import { isNumber } from "js-fast-way"

isNumber(2022) // true
```

### value <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 说明：`是否为数值类型`
- 返回值：`true | false`


## 是否为布尔

```javascript
import { isBoolean } from "js-fast-way"

isBoolean(true) // true
```

### value <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 说明：`是否为布尔类型`
- 返回值：`true | false`


## 是否为数组

```javascript
import { isArray } from "js-fast-way"

isArray([]) // true
```

### value <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 说明：`是否为数组类型`
- 返回值：`true | false`



## 是否为对象

```javascript
import { isObject } from "js-fast-way"

isObject({}) // true
```

### value <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 说明：`是否为对象类型`
- 返回值：`true | false`


## 是否为时间

```javascript
import { isDate } from "js-fast-way"

isDate('2022-07-29')
```

### value <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 说明：`是否为时间类型`
- 返回值：`true | false`


## 是否为 function

```javascript
import { isFunction } from "js-fast-way"

function objFun() {

}
isFunction(objFun) // true
```

### func <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 说明：`是否为 function 类型`
- 返回值：`true | false`



## 是否为 async

```javascript
import { isAsyncFunction } from "js-fast-way"

async function AsyncFunction() {
    return true
}

isAsyncFunction(AsyncFunction) // true
```

### func <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 说明：`是否为async类型`
- 返回值：`true | false`


## 是否为 Promise

```javascript
import { isPromise } from "js-fast-way"

let promiseDate = new Promise( (resolve, reject) => {
    resolve(true);
});

isPromise(promiseDate) // true
```

### value <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 说明：`是否为Promise类型`
- 返回值：`true | false`


## 是否为元素

```vue
<template>
    <div ref="idRef">元素</div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import { isElement } from "js-fast-way"

const idRef = ref(null)

onMounted(() => {
    isElement(idRef.value) // true
})
</script>
```

### value <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 说明：`是否为Element类型`
- 返回值：`true | false`
