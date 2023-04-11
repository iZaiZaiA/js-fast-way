# js-fast-way 是什么？

现目前市场上有很多方法函数库可以用，但我自己在实际项目开发中，发现这些库，或多或少都有一些不方便的地方，比如：我需要的某种方法函数没有、所提供的方法函数库不满足业务需求、产生的bug反馈后解决慢等原因，所以，我就自己封装了一个自用的方法函数库。

<div class="tip custom-block" style="padding-top: 8px">
对于使用TypeScript开发的项目，我表示遗憾，因为 js-fast-way 并不是采用 TypeScript 开发。
</div>

## API文档

- **[文档地址](https://js-fast-way.vercel.app/)** 部署在 Vercel 上的
- **[国内文档地址](http://izaizaiaa.gitee.io/js-fast-way)** 部署在 gitee 上的

为了方便自己查询和使用相关方法函数，我为此搞了这么一个文档，文档挂在 [Vercel](https://vercel.com/) 上，理论上会存在很久的时间，方便自己使用，也方便大家使用。

## 开源

js-fast-way 是开源的，可以拿去二开，也可以用于商业项目中，不收取任何费用。

- **[GitHub 仓库](https://github.com/iZaiZaiA/js-fast-way)** (主要仓库)，欢迎 Star 和 Fork

- **[Gitee 仓库](https://gitee.com/izaizaiaa/js-fast-way)**，欢迎 Star 和 Fork

## vue-utils-plus ？

vue-utils-plus 是 js-fast-way 的前身，是基于vue 和 vite 开发，但后来发现，实际上没用vue的东西，并且，在调用方法函数时，没有参数提示，所以，就重写了 js-fast-way，基于原生js开发，rollup 打包编译。

后续 vue-utils-plus 不再更新维护
