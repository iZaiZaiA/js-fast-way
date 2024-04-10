# 数据转换

在各种业务场景中，可能会用到的一些数据转换

## Json转Form

```javascript
import { toFormData } from "js-fast-way"

let obj = {id: 11, name: 22}
toFormData(obj)
```

### obj <Badge type="warning" text="必传参数" />

- 类型: `Object`
- 说明: `需要转换的对象`

### 返回内容

- 类型: `Object`
- 说明：`返回 FormData 对象`


## 表单序列化

其实就是把json对象转换成url参数格式的字符串

```javascript
import { toSerialize } from "js-fast-way"

toSerialize({id: 1, name: 'vue'}, 'id') // id=1&name=vue
```

### form <Badge type="warning" text="必传参数" />

- 类型: `Object`
- 说明：`对象数据`

### 返回内容

- 类型: `String`
- 返回值：`转换后的数据`



## 颜色混合

把两个css的颜色值混合成一个颜色值

```javascript
import { toColor } from "js-fast-way"

toColor('#FFFFFF', '#FE0000', 0.5) // #FF7F7F
```

### c1 <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明：`底色颜色值`

### c2 <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明：`主颜色值`

### ratio <Badge type="tip" text="非必传" />

- 类型: `String | Number`
- 默认值：`0.5`
- 说明：`混合度，0.1 - 0.9`

### 返回内容

- 类型: `String`
- 返回值：`新的css颜色值`


## 颜色透明度

把一个css颜色值设置成带透明度的颜色值

```javascript
import { toLighten } from "js-fast-way"

toLighten('#FE0000') // rgba(254, 0, 0, 0.5)
```

### color <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明：`要改变的颜色`

### amount <Badge type="tip" text="非必传" />

- 类型: `Number`
- 默认值：`0.5`
- 说明：`透明度，0.1 - 0.9`

### 返回内容

- 类型: `String`
- 返回值：`新的css颜色值`


## 反转字体颜色

根据深浅色背景颜色，返回黑白文字颜色。

```javascript
import { toTextColor } from "js-fast-way"

toTextColor('#FFFFFF') // #000000
```

### color <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明：`背景颜色值`

### config <Badge type="warning" text="V0.4.0" />

- 类型: `Object`
- 说明：`颜色配置如：{black: '#000000', white: '#ffffff'}`

### 返回内容

- 类型: `String`
- 返回值：如果`config`有传值，就返回`config`配置的颜色，否则就是 `#000000` 或 `#ffffff`


## 16进制转换为RGB

```javascript
import { set16ToRgb } from "js-fast-way"

set16ToRgb('#FFFFFF')
```

### str <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明：`颜色值`

### 返回内容

- 类型: `String`


## 转数组或JSON

其实就是 `JSON.parse`，只是外面包了一层 `try`，防止不规范的内容转换失败报错，导致后续线程终止。

```javascript
import { toParse } from "js-fast-way"

const val = "[abx1-2, abcsd-35]"
const res = toParse(val) //false
```

### value <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明：`待转换的数据`

### 返回内容

- 类型: `Object | Array | Boolean`
- 返回值：`转换后的数据，或者 false`



## 处理栅格间隔

```javascript
import { setRowSpace } from "js-fast-way"

setRowSpace(20, 'm')   // margin: -10px
setRowSpace(20, 'p')  // padding: 10px
```

### spacing <Badge type="warning" text="必传参数" />

- 类型: `Number`
- 说明：`间隔值`

### type <Badge type="tip" text="非必传" />

- 类型: `String`
- 默认值：`m`
- 可选值：`m | p`
- 说明：`间距类型，m: margin, p: padding`

### 返回内容

- 类型: `String`
- 返回值：`转换后的数据`


## 数组转对象

我通常用来转换动态路由权限菜单的数据，用此方法函数转换后，会得到路由的数据和菜单的数据。

```javascript
import { ArrToOneObj } from "js-fast-way"

let testData = [
    {id: 1 , code: 'aa', children: [{id: 3, code: 'cc'}]},
    {id: 2, code: 'bb'}
]

const getTestData = async () => {
    let aaa = {}, bbb = []
    await ArrToOneObj(testData, 'code', aaa, bbb)
    console.log(aaa)  // 见下文的 aaa 变量
    console.log(bbb) // ['aa','bb','cc']
}

getTestData()

// aaa 拿到的示例，意思就是不管多少个子级，都会转为一个对象集
// 但要注意，keyName 的值要是唯一的，否则就会被覆盖掉
let aaa = {
    aa: {id: 1, code: 'aa'},
    bb: {id: 2, code: 'bb'},
    cc: {id: 3, code: 'cc'},
}
```

### arr <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明：`数组数据`

### field <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明：`对象键值名`

### objName <Badge type="warning" text="必传参数" />

- 类型: `变量`
- 说明：`对象变量，用于储存转换后的对象`

### arrName <Badge type="warning" text="必传参数" />

- 类型: `变量`
- 说明：`数组变量，用于存储只有 field 的一维数组`

### children <Badge type="tip" text="非必传" />

- 类型: `String`
- 默认值：`children`
- 说明：`子级字段名`



## 金额处理

保留几位小数，不四舍五入(关于金额数值的处理用这个方法,以防金额计算出错)

```javascript
import { priceFormat } from "js-fast-way"

priceFormat(20)   // 20.00
```

### price <Badge type="warning" text="必传参数" />

- 类型: `Number`
- 说明：`金额`

### decimal <Badge type="tip" text="非必传" />

- 类型: `String`
- 默认值：`2`
- 说明：`小数点位数`

### 返回内容

- 类型: `String`
- 返回值：`转换后的数据`



## 数字格式化

转化为 K 或 W

```javascript
import { numberFormat } from "js-fast-way"

numberFormat(20000)   // 2W
```

### num <Badge type="warning" text="必传参数" />

- 类型: `Number`
- 说明：`数字内容`

### 返回内容

- 类型: `String`
- 返回值：`转换后的数据`



## 计算日期时间

计算两个日期之间的差距

```javascript
import { calcDate } from "js-fast-way"

calcDate('日期1', '日期2')
```

### date1 <Badge type="warning" text="必传参数" />

- 类型: `Number`
- 说明：`时间戳格式`

### date2 <Badge type="warning" text="必传参数" />

- 类型: `Number`
- 说明：`时间戳格式`

### 返回内容

- 类型: `Object`

| 参数名     | 说明           |
|---------|--------------|
| leave1  | 计算天数后剩余的毫秒数  |
| leave2  | 计算小时数后剩余的毫秒数 |
| leave3  | 计算分钟数后剩余的毫秒数 |
| days    | 剩余天数         |
| hours   | 剩余小时         |
| minutes | 剩余分钟         |
| seconds | 剩余秒          |


## http转https <Badge type="warning" text="V0.4.7" />

```javascript
import { setUrlHttps } from "js-fast-way"

setUrlHttps('http://123.com') //https://123.com
```

### str <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明：`网址`

### 返回内容

- 类型: `String`
- 返回值：`转换后的数据`


## http转为https <Badge type="warning" text="V0.4.7" />

替换文本中所有的http为https

```javascript
import { setAllUrlHttps } from "js-fast-way"

setUrlHttps('http://123.com,http://456.com') //https://123.com,https://456.com
```

### str <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明：`网址`

### 返回内容

- 类型: `String`
- 返回值：`转换后的数据`


## https转http <Badge type="warning" text="V0.4.7" />

```javascript
import { setUrlHttp } from "js-fast-way"

setUrlHttp('https://123.com') //http://123.com
```

### str <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明：`网址`

### 返回内容

- 类型: `String`
- 返回值：`转换后的数据`


## https转为http <Badge type="warning" text="V0.4.7" />

替换文本中所有的https为http

```javascript
import { setAllUrlHttp } from "js-fast-way"

setAllUrlHttp('https://123.com,https://456.com') //http://123.com,http://456.com
```

### str <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明：`网址`

### 返回内容

- 类型: `String`
- 返回值：`转换后的数据`


## jfwNum <Badge type="warning" text="V0.4.8" />

简单的数学计算，使用了 `bignumber.js` 插件，有导出 `BigNumber`，可直接使用官方API，[官方文档](https://mikemcl.github.io/bignumber.js)

```javascript
import { jfwNum } from "js-fast-way"

// 计算
jfwNum(1, '+', '1') //2
jfwNum(1, '-', '1').toString() //'0'
jfwNum(1, '*', '1').toNumber() //1
jfwNum(1, '/', '1').toFixed(2) //1.00

// 是否相等
jfwNum(5, '=', '5') //true
```

### num1 <Badge type="warning" text="必传参数" />

- 类型: `String/Number`
- 说明：`数字1`

### type <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明：`类型 + - * / =`

### num2 <Badge type="warning" text="必传参数" />

- 类型: `String/Number`
- 说明：`数字2`

### 返回内容

- 类型: `-`
- 返回值：`计算后的内容`
