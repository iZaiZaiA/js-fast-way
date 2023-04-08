# 生成随机字符

在各种业务场景中，可能会用到的生成随机字符操作

## 生成UUID

使用 `crypto.randomUUID()` 生成的uuid

```javascript
import { getUUID } from "js-fast-way"

getUUID() // feaabe10-ea97-4c87-82f2-e8db4f82074a
```

### 返回内容

- 类型: `String`



## UniqueID

生成一个5位的随机的字符串

```javascript
import { uniqueId } from "js-fast-way"

uniqueId() // zb3ug
```

### 返回内容

- 类型: `String`



## 随机字符串

生成含有大小写字母、数字的随机字符串

```javascript
import { getRandom } from "js-fast-way"

getRandom() // 3a2Cb1ca
```

### num <Badge type="tip" text="非必传" />

- 类型: `Number`
- 默认值: `8`
- 说明: `生成长度`

### 返回内容

- 类型: `String`



## 生成随机数字

```javascript
import { getNumber } from "js-fast-way"

getNumber() // 12345678
```

### num <Badge type="tip" text="非必传" />

- 类型: `Number`
- 默认值: `8`
- 说明: `生成长度`

### 返回内容

- 类型: `String`



## 随机小写字母

```javascript
import { getLowerCase } from "js-fast-way"

getLowerCase() // abcdefgh
```

### num <Badge type="tip" text="非必传" />

- 类型: `Number`
- 默认值: `8`
- 说明: `生成长度`

### 返回内容

- 类型: `String`



## 随机大写字母

```javascript
import { getUpperCase } from "js-fast-way"

getUpperCase() // ABCDEFGH
```

### num <Badge type="tip" text="非必传" />

- 类型: `Number`
- 默认值: `8`
- 说明: `生成长度`

### 返回内容

- 类型: `String`



## 数字和小写字母

```javascript
import { getNumberLower } from "js-fast-way"

getNumberLower() // 1278abcd
```

### num <Badge type="tip" text="非必传" />

- 类型: `Number`
- 默认值: `8`
- 说明: `生成长度`

### 返回内容

- 类型: `String`



## 数字和大写字母

```javascript
import { getAlphabets } from "js-fast-way"

getAlphabets() // 1278ABCD
```

### num <Badge type="tip" text="非必传" />

- 类型: `Number`
- 默认值: `8`
- 说明: `生成长度`

### 返回内容

- 类型: `String`



## 范围随机数

```javascript
import { getRandomFrom } from "js-fast-way"

getRandomFrom(1, 50) // 23
```

### upper <Badge type="warning" text="必传参数" />

- 类型: `Number`
- 说明: `起始数字`

### lower <Badge type="warning" text="必传参数" />

- 类型: `Number`
- 说明: `结束数字`

### 返回内容

- 类型: `Number`

