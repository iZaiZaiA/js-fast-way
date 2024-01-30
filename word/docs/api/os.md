# 系统元素操作

在各种业务场景中，可能会用到的系统元素操作

## 设置图片颜色样式 <Badge type="warning" text="V0.1.0" />

原图需要为黑色，底色建议透明

```vue
<template>
    <img id="image-png" src="jfw.png" alt="">
</template>

<script setup>
import { setImageColorStyle } from "js-fast-way"

setImageColorStyle('image-png', '#1ECC95') //true
</script>
```

### id <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `图片元素ID`

### value <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `十六进制的颜色值`

### 返回内容

- 类型: `Boolean`
- 说明: `是否设置成功`



## 设置图片颜色 <Badge type="warning" text="V0.0.9" />

原图需要为黑色，底色建议透明

```javascript
import { setImageColor } from "js-fast-way"

const {rgb, color, result} = setImageColor('#1ECC95') //{rgb, color, result}

document.getElementById('image-box').style.backgroundColor = color.toString();
document.getElementById('image').style.filter = result.filter;

```

### value <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `十六进制的颜色值`

### 返回内容

- 类型: `Object`
- 说明: `转换后的相关数据`



## 设置剪切板文本

在本地调试使用会报错，需要部署到服务器上，并且是`https`才能正常使用

```javascript
import { setCopyText } from "js-fast-way"

setCopyText(val).then(() => {
    console.log('复制成功')
}).catch(() => {
    console.log('复制失败')
})
```

### text <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `文本内容`



## 取剪切板文本

```javascript
import { getCopyText } from "js-fast-way"

getCopyText().then((res) => {
    console.log(res)
}).catch(() => {
    console.log('获取失败')
})
```

### 返回内容

- 类型: `-`



## 输入框插入内容

在输入框的光标位置插入内容，取光标位置，参考文章 [光标所在位置](/article/text#光标所在位置)

```javascript
import { setPosInsert } from "js-fast-way"

setPosInsert(0, 0, '123','插入') // 插入123
```

### startPos <Badge type="warning" text="必传参数" />

- 类型: `Number`
- 说明: `光标开始位置`

### endPos <Badge type="warning" text="必传参数" />

- 类型: `Number`
- 说明: `光标结束位置`

### value <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `输入框内容`

### value2 <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `插入内容`

### 返回内容

- 类型: `String`
- 说明: `拼接后的内容`



## 设置光标位置

```javascript
import { setPosRange } from "js-fast-way"

setPosRange('元素ID')
```

### id <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `输入框ID`

### pos <Badge type="warning" text="必传参数" />

- 类型: `Number`
- 说明: `光标位置`



## 设置元素焦点

```javascript
import { setElementFocus } from "js-fast-way"

setElementFocus('元素ID')
```

### id <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `输入框ID`



## 饿了么UI的主色

设置饿了么UI的主色调

```javascript
import { setElementMainColor } from "js-fast-way"

setElementMainColor('#1ECC95')
```

### color <Badge type="tip" text="非必传" />

- 类型: `String`
- 默认值: `#1ECC95`
- 说明: `要设置的css颜色值`



## 控制台打印

有点主题的打印

```javascript
import { ulog } from "js-fast-way"

ulog('name', 'hello world')
```

### name <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `名称`

### tips <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `提示`



## 控制台打印2

带主题的控制台打印

```javascript
import { clog } from "js-fast-way"

clog('micro', 'name', 'tips', 'data')
```

### micro <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `第一个名称`

### name <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `用于区分不同的打印`

### tips <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `打印的提示信息`

### data <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `打印的数据`



## 获取年份列表

生成一个年份数组列表，通常用于单独的年份选择器

```javascript
import { getYearList } from "js-fast-way"

getYearList(2023)
```

### end

- 类型: `String`
- 说明: `结束年份, 默认为当前年份`

### start

- 类型: `String`
- 说明: `开始年份, 默认为2000年`

### 返回内容

- 类型: `-`
- 说明: `返回年份列表`



## 获取月份列表

生成一个月份数组列表，通常用于单独的月份选择器

```javascript
import { getMonthList } from "js-fast-way"

getMonthList()
```

### end

- 类型: `String`
- 说明: `结束年份, 默认为当前年份`

### start

- 类型: `String`
- 说明: `开始年份, 默认为2000年`

### 返回内容

- 类型: `-`
- 说明: `返回年份列表`



## 依赖注入

提供依赖注入的方法，跟vue3的不一样，虽然名字一样，但这个可以在任何地方用，不限制在 setup

```javascript
import { provide } from "js-fast-way"

provide('js-fast-way', '您好')
```

### key <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `注入名`

### value <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `要注入的值`



## 获取依赖注入

获取 `provide` 注入的值

```javascript
import { inject } from "js-fast-way"

inject('js-fast-way') // 您好
```

### key <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `注入名`

### defaultValue

- 类型: `String`
- 说明: `默认值，当未取到数据时，返回的内容`

### 返回内容

- 类型: `-`
- 说明: `注入的内容`



## 防抖函数

使用这个防抖函数时，你只需要将要执行的函数和延迟时间作为参数传递给 debounce 函数即可

```javascript
import { debounce } from "js-fast-way"

function myFunction() {
    // 在这里编写你希望只执行一次的代码
    console.log('执行一次');
}
const debouncedFunction = debounce(myFunction, 2000);

document.getElementById('myButton').addEventListener('click', debouncedFunction);
```

### func <Badge type="warning" text="必传参数" />

- 类型: `Function`
- 说明: `要执行的函数名`

### delay

- 类型: `Number`
- 说明: `延迟时间`, 默认为`500` 毫秒


## 加载线上js文件 <Badge type="warning" text="V0.4.0" />

动态加载线上js文件

```javascript
import { addOnJs } from "js-fast-way"

addOnJs('js文件地址').then(() => {
    console.log('加载成功')
}).catch(() => {
    console.log('加载失败')
})
```

### src <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `线上js文件地址`

### type

- 类型: `String`
- 说明: `js文件类型，默认为 text/javascript`



## 新窗口打开链接 <Badge type="warning" text="V0.4.1" />

创建A标签的方式来打开新标签页，可以避免浏览器拦截

```javascript
import { newWindow } from "js-fast-way"

newWindow('https://www.baidu.com')
```

### url <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `要打开的链接`
-


## 页面全屏 <Badge type="warning" text="V0.4.3" />

是否让web页面全屏显示，或者，退出全屏

```javascript
import { fullScreen } from "js-fast-way"

fullScreen(true)
```

### type

- 类型: `String`
- 默认：`true`
- 说明: `true为全屏，false为退出全屏`

