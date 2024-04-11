# 内容验证

在各种业务场景中，可能会用到的一些数据内容验证是否正确方法

## 验证网站地址

```javascript
import { isUrl } from "js-fast-way"

isUrl('网址') // false
```

### value <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `网址，如：http://xx.xxx.com`

### 返回内容

- 类型: `Boolean`
- 返回值：`true | false`



## 验证邮箱地址

```javascript
import { isEmail } from "js-fast-way"

isEmail('806606688@qq.com') // true
```

### value <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明：`邮箱地址`

### 返回内容

- 类型: `Boolean`
- 返回值：`true | false`


## 验证手机号码

简单的验证手机号码格式是否正确

```javascript
import { isPhone } from "js-fast-way"

isPhone('手机号码') // false
```

### value <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `手机号码`

### 返回内容

- 类型: `Boolean`
- 返回值：`true | false`


## 是否为小写字母

```javascript
import { isLowerCase } from "js-fast-way"

isLowerCase('aaaa') // true
```

### value <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 返回值：`true | false`


## 是否为大写字母

```javascript
import { isUpperCase } from "js-fast-way"

isUpperCase('BBBBAAA') // true
```

### value <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 返回值：`true | false`


## 是否为大小写字母

```javascript
import { isAlphabets } from "js-fast-way"

isAlphabets('BBBBaaa') // true
```

### value <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 返回值：`true | false`



## 验证身份证号码

```javascript
import { isIdCard } from "js-fast-way"

isIdCard('身份证号码') // false
```

### value <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `身份证号码`

### 返回内容

- 类型: `Boolean`
- 返回值：`true | false`


## 验证用户名

```javascript
import { isName } from "js-fast-way"

isName('iZaiZaiA') // true
```

### value <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 返回值：`true | false`


## 是否为整数

```javascript
import { isNum } from "js-fast-way"

isNum(11122) // true
```

### value <Badge type="warning" text="必传参数" />

- 类型: `String | Number | Float`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 返回值：`true | false`



## 是否为小数

```javascript
import { isNumord } from "js-fast-way"

isNumord(1.2) // true
```

### func <Badge type="warning" text="必传参数" />

- 类型: `String | Number | Float`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 返回值：`true | false`


## 是否为空内容

```javascript
import { isValueNull, isNullES } from "js-fast-way"

let obj = {}

isValueNull(obj.key) // true

//是否为空，采用ES6，最终效果和 isNullAll 一致
isNullES(obj.key) // true
```

### value <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 说明：`是否为 undefined | null | ''`
- 返回值：`true | false`



## 是否为空数据

会判断是否为 null、undefined、空字符串、空数组、空对象

```javascript
import { isAllNull } from "js-fast-way"

isAllNull([]) // true
```

### value <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 说明：`是否为空数据`
- 返回值：`true | false`


## 是否为空对象

```javascript
import { isObjNull } from "js-fast-way"

isObjNull({}) // true
```

### value <Badge type="warning" text="必传参数" />

- 类型: `Object`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 说明：`是否为空对象`
- 返回值：`true | false`



## 是否为空数组

```javascript
import { isArrNull } from "js-fast-way"

isArrNull([]) // true
```

### value <Badge type="warning" text="必传参数" />

- 类型: `Array`
- 说明: `数据内容`

### 返回内容

- 类型: `Boolean`
- 说明：`是否为空数组`
- 返回值：`true | false`


## 是否为小数或数字 <Badge type="warning" text="V0.4.0" />

效验是否为数字或小数的数字

```javascript
import { isNumberReg } from "js-fast-way"

isNumberReg('1.2') // true
```

### text <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `字符串内容`

### lose

- 类型: `Boolean`
- 说明: `是否允许负数，默认允许`

### 返回内容

- 类型: `Boolean`
- 返回值：`true | false`


## form表单验证

饿了么UI的表单验证

```javascript
import { formValidate } from "js-fast-way"

const formRef = ref(null) //饿了么UI的表单ref

const onSubmit = async () => {
    //注意，此方法是异步的，可用 await 转为同步
    const res = await formValidate(formRef.value)
    console.log(res) // true or false
}
```

### formRef <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `饿了么UI的表单ref`

### 返回内容

- 类型: `Boolean`
- 返回值：`true | false`
