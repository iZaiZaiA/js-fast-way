import{_ as n,o as t,c as p,y as a,a as s,E as o,N as e,C as c}from"./chunks/framework.d6d2c45c.js";const Q=JSON.parse('{"title":"对象操作","description":"","frontmatter":{},"headers":[],"relativePath":"api/object.md","lastUpdated":1680949778000}'),r={name:"api/object.md"},i=e(`<h1 id="对象操作" tabindex="-1">对象操作 <a class="header-anchor" href="#对象操作" aria-label="Permalink to &quot;对象操作&quot;">​</a></h1><p>在各种业务场景中，可能会用到的一些对象操作</p><h2 id="对象深拷贝" tabindex="-1">对象深拷贝 <a class="header-anchor" href="#对象深拷贝" aria-label="Permalink to &quot;对象深拷贝&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">deepClone</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">deepClone</span><span style="color:#A6ACCD;">(obj) </span><span style="color:#676E95;font-style:italic;">// {id: 11, name: 22}</span></span>
<span class="line"></span></code></pre></div>`,4),y={id:"obj",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#obj","aria-label":'Permalink to "obj <Badge type="warning" text="必传参数" />"'},"​",-1),D=e(`<ul><li>类型: <code>Object</code></li><li>说明: <code>需要深拷贝的对象</code></li></ul><h3 id="返回内容" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Object</code></li><li>说明：<code>返回新的对象</code></li></ul><h2 id="对象中是否存在" tabindex="-1">对象中是否存在 <a class="header-anchor" href="#对象中是否存在" aria-label="Permalink to &quot;对象中是否存在&quot;">​</a></h2><p>如果传入第二个参数<code>key</code>，则是判断这个obj对象是否存在<code>key</code>这个属性，如果没有传入<code>key</code>这个参数，则判断obj对象是否有键值对</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">objHasKey</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">objHasKey</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div>`,6),F={id:"obj-1",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#obj-1","aria-label":'Permalink to "obj <Badge type="warning" text="必传参数" />"'},"​",-1),C=a("ul",null,[a("li",null,[s("类型: "),a("code",null,"Object")]),a("li",null,[s("说明："),a("code",null,"对象数据")])],-1),_={id:"key",tabindex:"-1"},A=a("a",{class:"header-anchor",href:"#key","aria-label":'Permalink to "key <Badge type="tip" text="非必传" />"'},"​",-1),u=e(`<ul><li>类型: <code>String | Number</code></li><li>说明：<code>字段名</code></li></ul><h3 id="返回内容-1" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-1" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Boolean</code></li><li>返回值：<code>true | false</code></li></ul><h2 id="对象是否相等" tabindex="-1">对象是否相等 <a class="header-anchor" href="#对象是否相等" aria-label="Permalink to &quot;对象是否相等&quot;">​</a></h2><p>判断两个对象是否相等，这两个对象的值只能是数字或字符串</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">objEqual</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">objEqual</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div>`,6),b={id:"obj1",tabindex:"-1"},f=a("a",{class:"header-anchor",href:"#obj1","aria-label":'Permalink to "obj1 <Badge type="warning" text="必传参数" />"'},"​",-1),j=a("ul",null,[a("li",null,[s("类型: "),a("code",null,"Object")]),a("li",null,[s("说明："),a("code",null,"对象数据")])],-1),m={id:"obj2",tabindex:"-1"},g=a("a",{class:"header-anchor",href:"#obj2","aria-label":'Permalink to "obj2 <Badge type="warning" text="必传参数" />"'},"​",-1),x=e(`<ul><li>类型: <code>Object</code></li><li>说明：<code>对象数据</code></li></ul><h3 id="返回内容-2" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-2" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Boolean</code></li><li>返回值：<code>true | false</code></li></ul><h2 id="取对象数据" tabindex="-1">取对象数据 <a class="header-anchor" href="#取对象数据" aria-label="Permalink to &quot;取对象数据&quot;">​</a></h2><p>取对象数据, 如果数据存在，就返回原始数据。如果不存在，就返回空对象</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getObjValue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getObjValue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">111</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// {}</span></span>
<span class="line"></span></code></pre></div>`,6),T={id:"value",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#value","aria-label":'Permalink to "value <Badge type="warning" text="必传参数" />"'},"​",-1),q=e(`<ul><li>类型: <code>-</code></li><li>说明：<code>数据内容</code></li></ul><h3 id="返回内容-3" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-3" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Object</code></li><li>返回值：<code>返回对象数据</code></li></ul><h2 id="取对象数据2" tabindex="-1">取对象数据2 <a class="header-anchor" href="#取对象数据2" aria-label="Permalink to &quot;取对象数据2&quot;">​</a></h2><p>取对象数据2, 如果数据存在，返回原始数据。如果不存在，或为空对象时, 返回false</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getObjVal</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getObjVal</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">111</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span></code></pre></div>`,6),P={id:"value-1",tabindex:"-1"},v=a("a",{class:"header-anchor",href:"#value-1","aria-label":'Permalink to "value <Badge type="warning" text="必传参数" />"'},"​",-1),E=e(`<ul><li>类型: <code>-</code></li><li>说明：<code>数据内容</code></li></ul><h3 id="返回内容-4" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-4" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Object | Boolean</code></li><li>返回值：<code>返回对象数据，或者 false</code></li></ul><h2 id="取转换后的对象值" tabindex="-1">取转换后的对象值 <a class="header-anchor" href="#取转换后的对象值" aria-label="Permalink to &quot;取转换后的对象值&quot;">​</a></h2><p>取 <a href="/api/to.html#数组转对象">数据转换</a> 中的 <code>ArrToOneObj()</code> 转换后的对象值， 如果传入第三个参数，返回结果跟 <code>getObjVal()</code> 相同</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getToObjVal</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getToObjVal</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">111</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span></code></pre></div>`,6),S={id:"obj-2",tabindex:"-1"},V=a("a",{class:"header-anchor",href:"#obj-2","aria-label":'Permalink to "obj <Badge type="warning" text="必传参数" />"'},"​",-1),w=a("ul",null,[a("li",null,[s("类型: "),a("code",null,"Object")]),a("li",null,[s("说明："),a("code",null,"对象数据")])],-1),B={id:"field",tabindex:"-1"},O=a("a",{class:"header-anchor",href:"#field","aria-label":'Permalink to "field <Badge type="warning" text="必传参数" />"'},"​",-1),I=a("ul",null,[a("li",null,[s("类型: "),a("code",null,"String")]),a("li",null,[s("说明："),a("code",null,"对象键值名")])],-1),N={id:"key-1",tabindex:"-1"},R=a("a",{class:"header-anchor",href:"#key-1","aria-label":'Permalink to "key <Badge type="tip" text="非必传" />"'},"​",-1),$=e('<ul><li>类型: <code>String</code></li><li>说明：<code>字段名</code></li></ul><h3 id="返回内容-5" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-5" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Object | Boolean</code></li><li>返回值：<code>返回对象数据，或者 false</code></li></ul>',3);function H(K,J,U,z,G,L){const l=c("Badge");return t(),p("div",null,[i,a("h3",y,[s("obj "),o(l,{type:"warning",text:"必传参数"}),s(),d]),D,a("h3",F,[s("obj "),o(l,{type:"warning",text:"必传参数"}),s(),h]),C,a("h3",_,[s("key "),o(l,{type:"tip",text:"非必传"}),s(),A]),u,a("h3",b,[s("obj1 "),o(l,{type:"warning",text:"必传参数"}),s(),f]),j,a("h3",m,[s("obj2 "),o(l,{type:"warning",text:"必传参数"}),s(),g]),x,a("h3",T,[s("value "),o(l,{type:"warning",text:"必传参数"}),s(),k]),q,a("h3",P,[s("value "),o(l,{type:"warning",text:"必传参数"}),s(),v]),E,a("h3",S,[s("obj "),o(l,{type:"warning",text:"必传参数"}),s(),V]),w,a("h3",B,[s("field "),o(l,{type:"warning",text:"必传参数"}),s(),O]),I,a("h3",N,[s("key "),o(l,{type:"tip",text:"非必传"}),s(),R]),$])}const W=n(r,[["render",H]]);export{Q as __pageData,W as default};