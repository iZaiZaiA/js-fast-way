import{_ as e,D as t,o as p,c,z as s,a,G as n,O as o}from"./chunks/framework.c1dc7d23.js";const os=JSON.parse('{"title":"类型判断","description":"","frontmatter":{},"headers":[],"relativePath":"api/isType.md","filePath":"api/isType.md","lastUpdated":1680949778000}'),r={name:"api/isType.md"},i=o(`<h1 id="类型判断" tabindex="-1">类型判断 <a class="header-anchor" href="#类型判断" aria-label="Permalink to &quot;类型判断&quot;">​</a></h1><p>在各种业务场景中，可能会用到的一些类型判断方法</p><h2 id="是否为某个类型" tabindex="-1">是否为某个类型 <a class="header-anchor" href="#是否为某个类型" aria-label="Permalink to &quot;是否为某个类型&quot;">​</a></h2><p>用于判断数据内容是否为某个类型</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isType</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isType</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Object</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div>`,5),y={id:"value",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#value","aria-label":'Permalink to "value <Badge type="warning" text="必传参数" />"'},"​",-1),D=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"-")]),s("li",null,[a("说明: "),s("code",null,"数据内容，如 {}")])],-1),F={id:"type",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#type","aria-label":'Permalink to "type <Badge type="warning" text="必传参数" />"'},"​",-1),C=o(`<ul><li>类型: <code>string</code></li><li>说明：<code>要对比的类型</code></li><li>可选值：<code>boolean | number | string | function | array | date | regExp | undefined | null | object | 等</code></li></ul><h3 id="返回内容" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Boolean</code></li><li>说明：<code>是否和传递的类型一致</code></li><li>返回值：<code>true | false</code></li></ul><h2 id="对象数据类型" tabindex="-1">对象数据类型 <a class="header-anchor" href="#对象数据类型" aria-label="Permalink to &quot;对象数据类型&quot;">​</a></h2><p>获取对象数据类型， 根据 <code>[object *]</code> 获取该对象的数据类型， 如 <code>[object Boolean]</code> 返回 <code>boolean</code></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getObjType</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getObjType</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// object</span></span></code></pre></div>`,6),u={id:"obj",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#obj","aria-label":'Permalink to "obj <Badge type="warning" text="必传参数" />"'},"​",-1),_=o(`<ul><li>类型: <code>object</code></li><li>说明：<code>对象数据内容</code></li></ul><h3 id="返回内容-1" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-1" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>String</code></li><li>说明：<code>返回所属的类型名称</code></li><li>返回值：<code>boolean | number | string | function | array | date | regExp | undefined | null | object | element</code></li></ul><h2 id="是否为字符串" tabindex="-1">是否为字符串 <a class="header-anchor" href="#是否为字符串" aria-label="Permalink to &quot;是否为字符串&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isString</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isString</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-utils-plus</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div>`,5),f={id:"value-1",tabindex:"-1"},b=s("a",{class:"header-anchor",href:"#value-1","aria-label":'Permalink to "value <Badge type="warning" text="必传参数" />"'},"​",-1),m=o(`<ul><li>类型: <code>-</code></li><li>说明: <code>数据内容</code></li></ul><h3 id="返回内容-2" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-2" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Boolean</code></li><li>说明：<code>是否为字符串类型</code></li><li>返回值：<code>true | false</code></li></ul><h2 id="是否为数值" tabindex="-1">是否为数值 <a class="header-anchor" href="#是否为数值" aria-label="Permalink to &quot;是否为数值&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isNumber</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2022</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div>`,5),g={id:"value-2",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#value-2","aria-label":'Permalink to "value <Badge type="warning" text="必传参数" />"'},"​",-1),T=o(`<ul><li>类型: <code>-</code></li><li>说明: <code>数据内容</code></li></ul><h3 id="返回内容-3" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-3" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Boolean</code></li><li>说明：<code>是否为数值类型</code></li><li>返回值：<code>true | false</code></li></ul><h2 id="是否为布尔" tabindex="-1">是否为布尔 <a class="header-anchor" href="#是否为布尔" aria-label="Permalink to &quot;是否为布尔&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isBoolean</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isBoolean</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div>`,5),q={id:"value-3",tabindex:"-1"},P=s("a",{class:"header-anchor",href:"#value-3","aria-label":'Permalink to "value <Badge type="warning" text="必传参数" />"'},"​",-1),x=o(`<ul><li>类型: <code>-</code></li><li>说明: <code>数据内容</code></li></ul><h3 id="返回内容-4" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-4" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Boolean</code></li><li>说明：<code>是否为布尔类型</code></li><li>返回值：<code>true | false</code></li></ul><h2 id="是否为数组" tabindex="-1">是否为数组 <a class="header-anchor" href="#是否为数组" aria-label="Permalink to &quot;是否为数组&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isArray</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isArray</span><span style="color:#A6ACCD;">([]) </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div>`,5),E={id:"value-4",tabindex:"-1"},j=s("a",{class:"header-anchor",href:"#value-4","aria-label":'Permalink to "value <Badge type="warning" text="必传参数" />"'},"​",-1),k=o(`<ul><li>类型: <code>-</code></li><li>说明: <code>数据内容</code></li></ul><h3 id="返回内容-5" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-5" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Boolean</code></li><li>说明：<code>是否为数组类型</code></li><li>返回值：<code>true | false</code></li></ul><h2 id="是否为对象" tabindex="-1">是否为对象 <a class="header-anchor" href="#是否为对象" aria-label="Permalink to &quot;是否为对象&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isObject</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isObject</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div>`,5),S={id:"value-5",tabindex:"-1"},w=s("a",{class:"header-anchor",href:"#value-5","aria-label":'Permalink to "value <Badge type="warning" text="必传参数" />"'},"​",-1),B=o(`<ul><li>类型: <code>-</code></li><li>说明: <code>数据内容</code></li></ul><h3 id="返回内容-6" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-6" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Boolean</code></li><li>说明：<code>是否为对象类型</code></li><li>返回值：<code>true | false</code></li></ul><h2 id="是否为时间" tabindex="-1">是否为时间 <a class="header-anchor" href="#是否为时间" aria-label="Permalink to &quot;是否为时间&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isDate</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isDate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-07-29</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,5),V={id:"value-6",tabindex:"-1"},I=s("a",{class:"header-anchor",href:"#value-6","aria-label":'Permalink to "value <Badge type="warning" text="必传参数" />"'},"​",-1),N=o(`<ul><li>类型: <code>-</code></li><li>说明: <code>数据内容</code></li></ul><h3 id="返回内容-7" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-7" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Boolean</code></li><li>说明：<code>是否为时间类型</code></li><li>返回值：<code>true | false</code></li></ul><h2 id="是否为-function" tabindex="-1">是否为 function <a class="header-anchor" href="#是否为-function" aria-label="Permalink to &quot;是否为 function&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isFunction</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">objFun</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">isFunction</span><span style="color:#A6ACCD;">(objFun) </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div>`,5),R={id:"func",tabindex:"-1"},O=s("a",{class:"header-anchor",href:"#func","aria-label":'Permalink to "func <Badge type="warning" text="必传参数" />"'},"​",-1),$=o(`<ul><li>类型: <code>-</code></li><li>说明: <code>数据内容</code></li></ul><h3 id="返回内容-8" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-8" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Boolean</code></li><li>说明：<code>是否为 function 类型</code></li><li>返回值：<code>true | false</code></li></ul><h2 id="是否为-async" tabindex="-1">是否为 async <a class="header-anchor" href="#是否为-async" aria-label="Permalink to &quot;是否为 async&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isAsyncFunction</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">AsyncFunction</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isAsyncFunction</span><span style="color:#A6ACCD;">(AsyncFunction) </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div>`,5),M={id:"func-1",tabindex:"-1"},z=s("a",{class:"header-anchor",href:"#func-1","aria-label":'Permalink to "func <Badge type="warning" text="必传参数" />"'},"​",-1),G=o(`<ul><li>类型: <code>-</code></li><li>说明: <code>数据内容</code></li></ul><h3 id="返回内容-9" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-9" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Boolean</code></li><li>说明：<code>是否为async类型</code></li><li>返回值：<code>true | false</code></li></ul><h2 id="是否为-promise" tabindex="-1">是否为 Promise <a class="header-anchor" href="#是否为-promise" aria-label="Permalink to &quot;是否为 Promise&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isPromise</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> promiseDate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">( </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isPromise</span><span style="color:#A6ACCD;">(promiseDate) </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div>`,5),J={id:"value-7",tabindex:"-1"},U=s("a",{class:"header-anchor",href:"#value-7","aria-label":'Permalink to "value <Badge type="warning" text="必传参数" />"'},"​",-1),H=o(`<ul><li>类型: <code>-</code></li><li>说明: <code>数据内容</code></li></ul><h3 id="返回内容-10" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-10" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Boolean</code></li><li>说明：<code>是否为Promise类型</code></li><li>返回值：<code>true | false</code></li></ul><h2 id="是否为元素" tabindex="-1">是否为元素 <a class="header-anchor" href="#是否为元素" aria-label="Permalink to &quot;是否为元素&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">idRef</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">元素</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onMounted</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isElement</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> idRef </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onMounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">isElement</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">idRef</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,5),K={id:"value-8",tabindex:"-1"},L=s("a",{class:"header-anchor",href:"#value-8","aria-label":'Permalink to "value <Badge type="warning" text="必传参数" />"'},"​",-1),Q=o('<ul><li>类型: <code>-</code></li><li>说明: <code>数据内容</code></li></ul><h3 id="返回内容-11" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-11" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Boolean</code></li><li>说明：<code>是否为Element类型</code></li><li>返回值：<code>true | false</code></li></ul>',3);function W(X,Y,Z,ss,as,ls){const l=t("Badge");return p(),c("div",null,[i,s("h3",y,[a("value "),n(l,{type:"warning",text:"必传参数"}),a(),d]),D,s("h3",F,[a("type "),n(l,{type:"warning",text:"必传参数"}),a(),A]),C,s("h3",u,[a("obj "),n(l,{type:"warning",text:"必传参数"}),a(),h]),_,s("h3",f,[a("value "),n(l,{type:"warning",text:"必传参数"}),a(),b]),m,s("h3",g,[a("value "),n(l,{type:"warning",text:"必传参数"}),a(),v]),T,s("h3",q,[a("value "),n(l,{type:"warning",text:"必传参数"}),a(),P]),x,s("h3",E,[a("value "),n(l,{type:"warning",text:"必传参数"}),a(),j]),k,s("h3",S,[a("value "),n(l,{type:"warning",text:"必传参数"}),a(),w]),B,s("h3",V,[a("value "),n(l,{type:"warning",text:"必传参数"}),a(),I]),N,s("h3",R,[a("func "),n(l,{type:"warning",text:"必传参数"}),a(),O]),$,s("h3",M,[a("func "),n(l,{type:"warning",text:"必传参数"}),a(),z]),G,s("h3",J,[a("value "),n(l,{type:"warning",text:"必传参数"}),a(),U]),H,s("h3",K,[a("value "),n(l,{type:"warning",text:"必传参数"}),a(),L]),Q])}const es=e(r,[["render",W]]);export{os as __pageData,es as default};
