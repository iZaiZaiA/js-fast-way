# 系统元素操作

在各种业务场景中，可能会用到的系统元素操作


## 设置图片颜色

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
