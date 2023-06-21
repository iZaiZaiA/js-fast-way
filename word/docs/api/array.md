# 数组操作

在各种业务场景中，可能会用到的一些数组操作

## 创建初始数组

```javascript
import { createArr } from "js-fast-way"

createArr('默认内容') // ['默认内容']
```

### value <Badge type="tip" text="非必传" />

- 类型: `-`
- 默认: `''`
- 说明: `数组中的默认值, 默认为空字符串`

### len <Badge type="tip" text="非必传" />

- 类型: `Number`
- 默认：`1`
- 说明: `数组长度`

### 返回内容

- 类型: `any[]`
- 说明：`返回创建后的数组`


## 数组随机打乱

```javascript
import { arrShuffle } from "js-fast-way"

arrShuffle([1,2,3,4,5]) // [2, 4, 1, 5, 3]
```

### arr <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明：`数组数据`

### 返回内容

- 类型: `Array`
- 说明：`返回打乱的数组`



## 数组中是否存在

有两种，一种是一位数组，一种是二维数组的判断

```javascript
import { isArrItem, isArrIndex } from "js-fast-way"

//一维数组中是否存在
isArrItem([1,2,3,4,5], 1) // true

//二维数组中是否存在
let variable;
isArrIndex([{id:1},{id:2}], 'id', 2, variable) // true
console.log(variable) // 1
```

### arr <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明: `一位数组 或 二维数组`

### field <Badge type="warning" text="二维数组可用" />

- 类型: `String`
- 说明: `字段名`

### key <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `内容 或 字段值`

### variable <Badge type="info" text="非必传" />

- 类型: `-`
- 说明: `用于接收数组中的索引值`

### 返回内容

- 类型: `Boolean`
- 返回值：`true | false`


## 二维数组索引

一维数组使用 js 自带的 `indexOf` 即可，二维数组使用 `arrIndex` 方法

```javascript
import { arrIndex } from "js-fast-way"

arrIndex([{id:1},{id:2}], 'id', 2) // 1
```

### arr <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明: `一位数组 或 二维数组`

### field <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `字段名`

### key <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `内容 或 字段值`

### 返回内容

- 类型: `Number`
- 返回值：`所在位置的索引，不存在就返回 -1`



## 删除指定元素

把数组中指定的元素移除掉

```javascript
import { arrDel, arrDelKey } from "js-fast-way"

//一维数组
arrDel([1,2,3,4,5], 1) // [2, 3, 4, 5]

//二维数组
arrDelKey([{id:1},{id:2}], 'id', 2) // [{id:1}]
```

### arr <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明: `一位数组 或 二维数组`

### field <Badge type="warning" text="二维数组可用" />

- 类型: `String`
- 说明: `字段名`

### key <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `内容 或 字段值`

### 返回内容

- 类型: `Array`
- 返回值：`返回移除后的数组`



## 删除其它元素

除了所传的元素外，其它的元素都会被移除掉

```javascript
import { arrDelOther, arrDelKeyOther } from "js-fast-way"

//一维数组
arrDelOther([1,2,3,4,5], 1) // [1]

//二维数组
arrDelKeyOther([{id:1},{id:2}], 'id', 2) // [{id:2}]
```

### arr <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明: `一位数组 或 二维数组`

### field <Badge type="warning" text="二维数组可用" />

- 类型: `String`
- 说明: `字段名`

### key <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `内容 或 字段值`

### 返回内容

- 类型: `Array`
- 返回值：`返回移除后的数组`




## 删除左边的元素

移除数组中，所传参数的左边所有元素

```javascript
import { arrDelLeft, arrDelKeyLeft } from "js-fast-way"

//一维数组
arrDelLeft([1,2,3,4,5], 3) // [3, 4, 5]

//二维数组
arrDelKeyLeft([{id:1},{id:2},{id:3}], 'id', 2) // [{id:2},{id:3}]
```

### arr <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明: `一位数组 或 二维数组`

### field <Badge type="warning" text="二维数组可用" />

- 类型: `String`
- 说明: `字段名`

### key <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `内容 或 字段值`

### 返回内容

- 类型: `Array`
- 返回值：`返回移除后的数组`




## 删除右边的元素

移除数组中，所传参数的右边所有元素

```javascript
import { arrDelRight, arrDelKeyRight } from "js-fast-way"

//一维数组
arrDelRight([1,2,3,4,5], 3) // [1, 2, 3]

//二维数组
arrDelKeyRight([{id:1},{id:2},{id:3}], 'id', 2) // [{id:1},{id:2}]
```

### arr <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明: `一位数组 或 二维数组`

### field <Badge type="warning" text="二维数组可用" />

- 类型: `String`
- 说明: `字段名`

### key <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `内容 或 字段值`

### 返回内容

- 类型: `Array`
- 返回值：`返回移除后的数组`




## 替换元素位置

替换数组中两个元素的位置

```javascript
import { arrReplace } from "js-fast-way"

arrReplace([1,2,3], 1, 3) // [3, 2, 1]
```

### arr <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明: `原始数组`

### item1 <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `元素1`

### item2 <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `元素1`

### 返回内容

- 类型: `Array`
- 返回值：`返回替换后的数组`



## 数组的交集

两个数组的交集, 两个数组的元素为数值或字符串

```javascript
import { arrIntersection } from "js-fast-way"

arrIntersection([1,2,3], [3,4,5]) // [3]
```

### arr1 <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明: `数组1`

### arr2 <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明: `数组2`

### 返回内容

- 类型: `Array`
- 返回值：`返回新的数组数据`




## 数组的并集

两个数组的并集, 两个数组的元素为数值或字符串

```javascript
import { arrUnion } from "js-fast-way"

arrUnion([1,2,3], [3,4,5]) // [1, 2, 3, 4, 5]
```

### arr1 <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明: `数组1`

### arr2 <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明: `数组2`

### 返回内容

- 类型: `Array`
- 返回值：`返回新的数组数据`



## 包含某个元素

要查询的数组是否至少有一个元素包含在目标数组中

```javascript
import { arrSomeOf } from "js-fast-way"

arrSomeOf([1,2,3], [6,4,5]) // false
```

### arr1 <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明: `数组1`

### arr2 <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明: `数组2`

### 返回内容

- 类型: `Boolean`
- 返回值：`true | false`



## 拼接二维数组中的ID

拼接二维数组中的ID字段为字符串

```javascript
import { arrToId } from "js-fast-way"

arrToId([{id: 1},{id: 2},{id: 3}]) // '1,2,3'
```

### arr <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明: `二维数组`

### 返回内容

- 类型: `String`
- 返回值：`返回拼接后的字符串`




## 拼接二维数组中的字段

拼接二维数组中的自定义字段内容为字符串，`arrToId()` 就是基于此方法封装的

```javascript
import { arrToKey } from "js-fast-way"

arrToKey([{id: 1},{id: 2},{id: 3}], 'id', '-') // '1-2-3'
```

### arr <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明: `二维数组`

### field <Badge type="tip" text="非必传" />

- 类型: `String`
- 默认: `id`
- 说明: `字段名`

### join <Badge type="tip" text="非必传" />

- 类型: `String`
- 默认: `,`
- 说明: `分隔符`

### 返回内容

- 类型: `String`
- 返回值：`返回拼接后的字符串`



## 取数组数据

取数组数据, 如果数据存在，就返回原始数据。如果不存在 或者非数组类型，就返回 `[]`

```javascript
import { getArrValue } from "js-fast-way"

getArrValue('1111') // []
```

### value <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `数据内容`

### 返回内容

- 类型: `Array`
- 返回值：`返回数组数据`



## 取数组中的值

```javascript
import { arrKeyValue } from "js-fast-way"

const arr = [
    {id: 1, name: '张三'},
    {id: 2, name: '李四'},
    {id: 3, name: '王五'}
]
arrKeyValue(arr, 'id', 'name', 2) // '李四'
```

### arr <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明: `二维数组`

### field <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `字段名`

### key <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `内容 或 字段值`

### value <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `字段值`

### 返回内容

- 类型: `-`



## 数组对象排序

```javascript
import { arrKeySort } from "js-fast-way"

const arr = [
    {id: 1, name: '张三'},
    {id: 3, name: '王五'},
    {id: 2, name: '李四'},
]
arrKeySort(arr, 'id', 'asc') // [{id: 1, name: '张三'}, {id: 2, name: '李四'}, {id: 3, name: '王五'}]
```

### arr <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明: `二维数组`

### field

- 类型: `String`
- 说明: `字段名`
- 默认: `id`

### order

- 类型: `String`
- 说明: `排序方式`, 正序 `asc` 或  倒序 `desc`
- 默认: `asc`


### 返回内容

- 类型: `Array`
