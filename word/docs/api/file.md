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




## 新下载Blob文件

```javascript
import { newDownBlob } from "js-fast-way"

//直接下载
newDownBlob('接口响应的原始数据(response)')

//测试下载，此方法函数采用了Promise，可以获得下载结果
const testDownload = async (headers) => {
    const {status, msg} = await newDownBlob('接口响应的原始数据(response)')
    console.log(status) // true / false
}

```

### res <Badge type="warning" text="必传参数" />

- 类型: `-`
- 说明: `接口响应的原始数据(response)，需要包含有 data 字段的文件流，以及包含 headers 字段的原始响应数据`

### type <Badge type="tip" text="非必传" />

- 类型: `String`
- 默认值: ``
- 说明: `文件类型，详情可以参阅blob文件类型，类似：application/vnd.ms-excel`

### 返回内容

- 如果成功，会直接调用浏览器的下载功能，进行下载
- 如果失败，参考`测试下载`的代码示例



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



## 效验文件格式

```javascript
import { isFileFormat } from "js-fast-way"

isFileFormat(文件数据, '.jpg')
```

### file <Badge type="warning" text="必传参数" />

- 类型: `File`
- 说明: `文件数据`

### accept <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `文件类型格式`

### 返回内容

- 类型: `Boolean`



## 获取文件类型

```javascript
import { getFileType } from "js-fast-way"

getFileType('xxxx.jpg') // image
```

### name <Badge type="warning" text="必传参数" />

- 类型: `String`
- 说明: `带后缀的文件名称`

### typeMap

- 类型: `Object`
- 说明: `文件类型格式`

```js
//默认的文件类型格式
let typeMap = {
    image: ['gif', 'jpg', 'jpeg', 'png', 'bmp', 'webp'],
    video: ['mp4', 'm3u8', 'rmvb', 'avi', 'swf', '3gp', 'mkv', 'flv'],
    music: ['mp3', 'wav', 'wma', 'ogg', 'aac', 'flac'],
    zip: ['zip', 'rar', '7z', 'tag', 'gzip'],
    word: ['doc', 'docx'],
    excel: ['xls', 'xlsx'],
    ppt: ['ppt', 'pptx'],
    pdf: ['pdf'],
    text: ['txt'],
}
```

### 返回内容

- 类型: `String`
- 返回值：`image | video | music | zip | word | excel | ppt | pdf | text | file`


## 获取文件大小的字符串类型

返回计算后的文件大小，单位为`KB`、`MB`、`GB`、`TB` 等

```javascript
import { filterSize } from "js-fast-way"

filterSize(1024) // 1KB
```

### size <Badge type="warning" text="必传参数" />

- 类型: `Number`
- 说明: `文件字节`


### 返回内容

- 类型: `Boolean`
- 返回值：`字符串`
