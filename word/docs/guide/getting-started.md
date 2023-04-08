# 开始

简单说说，怎么用这个东西

## 安装

在项目中，任选一种命令行安装方式进行安装，推荐 `yarn` 或 `pnpm`

:::tip
[Node.js](https://nodejs.org/)  版本 >= 16
:::

::: code-group

```sh [npm]
$ npm install -D js-fast-way
```

```sh [pnpm]
$ pnpm add -D js-fast-way
```

```sh [yarn]
$ yarn add -D js-fast-way
```

:::


## 使用

在需要的地方，引入所需的方法函数名即可。

```js
import { isObjNull } from "js-fast-way"

let obj = {}
console.log(isObjNull(obj))
```
