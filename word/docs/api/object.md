# 对象操作

在各种业务场景中，可能会用到的一些对象操作

## 对象深拷贝

```javascript
import { deepClone } from "js-fast-way"

let obj = {id: 11, name: 22}
deepClone(obj) // {id: 11, name: 22}
```

### obj <Badge type="warning" text="必传参数" />

- 类型: `Object`
- 说明: `需要深拷贝的对象`

### 返回内容

- 类型: `Object`
- 说明：`返回新的对象`


## 对象中是否存在

如果传入第二个参数`key`，则是判断这个obj对象是否存在`key`这个属性，如果没有传入`key`这个参数，则判断obj对象是否有键值对

```javascript
import { objHasKey } from "js-fast-way"

objHasKey({id: 11, name: 22}, 'id') // true
```

### obj <Badge type="warning" text="必传参数" />

- 类型: `Object`
- 说明：`对象数据`

### key <Badge type="tip" text="非必传" />

- 类型: `String | Number`
- 说明：`字段名`

### 返回内容

- 类型: `Boolean`
- 返回值：`true | false`



## 对象是否相等

判断两个对象是否相等，这两个对象的值只能是数字或字符串

```javascript
import { objEqual } from "js-fast-way"

objEqual({id: 11, name: 22}, {id: 11, name: 22}) // true
```

### obj1 <Badge type="warning" text="必传参数" />

- 类型: `Object`
- 说明：`对象数据`

### obj2 <Badge type="warning" text="必传参数" />

- 类型: `Object`
- 说明：`对象数据`

### 返回内容

- 类型: `Boolean`
- 返回值：`true | false`



## 取对象数据

取对象数据, 如果数据存在，就返回原始数据。如果不存在，就返回空对象

```javascript
import { getObjValue } from "js-fast-way"

getObjValue('111') // {}
```

### value <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明：`数据内容`

### 返回内容

- 类型: `Object`
- 返回值：`返回对象数据`



## 取对象数据2

取对象数据2, 如果数据存在，返回原始数据。如果不存在，或为空对象时, 返回false

```javascript
import { getObjVal } from "js-fast-way"

getObjVal('111') // false
```

### value <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明：`数据内容`

### 返回内容

- 类型: `Object | Boolean`
- 返回值：`返回对象数据，或者 false`



## 取转换后的对象值

取 [数据转换](/api/to#数组转对象) 中的 `ArrToOneObj()` 转换后的对象值， 如果传入第三个参数，返回结果跟 `getObjVal()` 相同

```javascript
import { getToObjVal } from "js-fast-way"

getToObjVal('111') // false
```

### obj <Badge type="warning" text="必传参数" />

- 类型: `Object`
- 说明：`对象数据`

### field <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明：`对象键值名`

### key <Badge type="tip" text="非必传" />

- 类型: `String`
- 说明：`字段名`

### 返回内容

- 类型: `Object | Boolean`
- 返回值：`返回对象数据，或者 false`

