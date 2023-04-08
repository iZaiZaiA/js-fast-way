# 文件数据处理

在各种业务场景中，可能会用到的文件数据处理


## 判断文件大小

用于判断文件大小是否在指定的范围内

```javascript
import { isFileSize } from "js-fast-way"

isFileSize(1024, 1) // true
```

### byte <Badge type="warning" text="必传参数" />

- 类型: `Number`
- 说明: `文件字节`

### size <Badge type="warning" text="必传参数" />

- 类型: `Number`
- 说明: `文件兆数，单位M`

### 返回内容

- 类型: `Boolean`
- 返回值：`true | false`



## base64转成文件

```javascript
import { base64ToFile } from "js-fast-way"

const fileBase64 = '文件base64数据'

const blob = base64ToFile(fileBase64)

//封装为formData进行请求
let formData = new FormData();
formData.append("file", blob);

console.log(formData)
```

### base64 <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `base64内容`

### type <Badge type="tip" text="非必传" />

- 类型: `String`
- 默认值: `image/jpeg`
- 说明: `文件类型`

### name <Badge type="tip" text="非必传" />

- 类型: `String`
- 默认值: `当前时间戳`
- 说明: `文件名称`

### suffix <Badge type="tip" text="非必传" />

- 类型: `String`
- 默认值: `jpg`
- 说明: `文件后缀`

### 返回内容

- 类型: `File`
- 返回值：`文件对象`



## 下载Blob文件

```javascript
import { downloadBlob } from "js-fast-way"

//此headers只是模拟，实际使用时，需要从接口响应的headers中获取
const headers = {
  'content-disposition': 'attachment;filename=文件名称.xlsx'
}

downloadBlob('文件数据', headers['content-disposition'])
```

### data <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `文件内容`

### disposition <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `接口响应的headers头，headers['content-disposition']`

### type <Badge type="tip" text="非必传" />

- 类型: `String`
- 默认值: `application/vnd.ms-excel`
- 说明: `文件类型，详情可以参阅blob文件类型`

### 返回内容

- 如果成功，会直接调用浏览器的下载功能，进行下载



## 获取文件名

```javascript
import { getFileName } from "js-fast-way"

getFileName('xxxx/aaa.jpg') // aaa
```

### name <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `文件路径`

### 返回内容

- 类型: `String`



## 获取后缀名

```javascript
import { getFileSuffix } from "js-fast-way"

getFileSuffix('xxxx/aaa.jpg') // jpg
```

### name <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `文件路径`

### 返回内容

- 类型: `String`
