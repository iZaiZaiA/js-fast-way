# 数据缓存

在各种业务场景中，可能会用到的数据缓存操作，默认使用 `localStorage` 缓存，如果需要使用 `sessionStorage` 缓存，可以通过 `session` 参数进行设置。

## 保存缓存

```javascript
import { setStoreData } from "js-fast-way"

setStoreData('key', 'value')
```

### key <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `缓存的key名称`

### value <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `缓存内容`

### session <Badge type="tip" text="非必传" />

- 类型: `Boolean`
- 默认值: `false`
- 说明: `session模式`


## 获取缓存

```javascript
import { getStoreData } from "js-fast-way"

getStoreData('key') // value
```

### key <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `缓存的key名称`

### debug <Badge type="tip" text="非必传" />

- 类型: `Boolean`
- 默认值: `false`
- 说明: `是否开启调试模式`

### session <Badge type="tip" text="非必传" />

- 类型: `Boolean`
- 默认值: `false`
- 说明: `session模式`

### 返回内容

- 类型: `-`
- 返回值：`缓存的数据内容`


## 删除缓存

```javascript
import { delStoreData } from "js-fast-way"

delStoreData('key')
```

### key <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `缓存的key名称`

### session <Badge type="tip" text="非必传" />

- 类型: `Boolean`
- 默认值: `false`
- 说明: `session模式`



## 获取全部缓存

```javascript
import { getAllStore } from "js-fast-way"

getAllStore()
```

### session <Badge type="tip" text="非必传" />

- 类型: `Boolean`
- 默认值: `false`
- 说明: `session模式`

### 返回内容

- 类型: `Array`
- 返回值：`所有的缓存数据列表`


## 清空缓存

```javascript
import { clearStore } from "js-fast-way"

clearStore()
```

### session <Badge type="tip" text="非必传" />

- 类型: `Boolean`
- 默认值: `false`
- 说明: `session模式`


## 清空全部缓存

会清空所有的缓存，包括 `sessionStorage` 和 `localStorage`

```javascript
import { clearStoreAll } from "js-fast-way"

clearStoreAll()
```


## 缓存是否过期 <Badge type="warning" text="V0.4.9" />

```javascript
import { getStoreTime } from "js-fast-way"

getStoreTime('token')
```

### key <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `缓存名称`


### time

- 类型: `Number`
- 默认: 2000
- 说明: `过期时间，毫秒`


### 返回内容

- 类型: `Boolean`
- 返回值：`已过期为true，否则为false`
