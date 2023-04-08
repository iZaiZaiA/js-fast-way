import{_ as n,o as t,c as p,y as s,a,E as l,N as o,C as c}from"./chunks/framework.d6d2c45c.js";const Q=JSON.parse('{"title":"数据缓存","description":"","frontmatter":{},"headers":[],"relativePath":"api/store.md","lastUpdated":null}'),i={name:"api/store.md"},r=o(`<h1 id="数据缓存" tabindex="-1">数据缓存 <a class="header-anchor" href="#数据缓存" aria-label="Permalink to &quot;数据缓存&quot;">​</a></h1><p>在各种业务场景中，可能会用到的数据缓存操作，默认使用 <code>localStorage</code> 缓存，如果需要使用 <code>sessionStorage</code> 缓存，可以通过 <code>session</code> 参数进行设置。</p><h2 id="保存缓存" tabindex="-1">保存缓存 <a class="header-anchor" href="#保存缓存" aria-label="Permalink to &quot;保存缓存&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setStoreData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setStoreData</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,4),d={id:"key",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#key","aria-label":'Permalink to "key <Badge type="warning" text="必传参数" />"'},"​",-1),D=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"String")]),s("li",null,[a("说明: "),s("code",null,"缓存的key名称")])],-1),_={id:"value",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#value","aria-label":'Permalink to "value <Badge type="warning" text="必传参数" />"'},"​",-1),F=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"-")]),s("li",null,[a("说明: "),s("code",null,"缓存内容")])],-1),u={id:"session",tabindex:"-1"},C=s("a",{class:"header-anchor",href:"#session","aria-label":'Permalink to "session <Badge type="tip" text="非必传" />"'},"​",-1),A=o(`<ul><li>类型: <code>Boolean</code></li><li>默认值: <code>false</code></li><li>说明: <code>session模式</code></li></ul><h2 id="获取缓存" tabindex="-1">获取缓存 <a class="header-anchor" href="#获取缓存" aria-label="Permalink to &quot;获取缓存&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getStoreData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getStoreData</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// value</span></span>
<span class="line"></span></code></pre></div>`,3),g={id:"key-1",tabindex:"-1"},f=s("a",{class:"header-anchor",href:"#key-1","aria-label":'Permalink to "key <Badge type="warning" text="必传参数" />"'},"​",-1),b=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"String")]),s("li",null,[a("说明: "),s("code",null,"缓存的key名称")])],-1),m={id:"debug",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#debug","aria-label":'Permalink to "debug <Badge type="tip" text="非必传" />"'},"​",-1),x=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"Boolean")]),s("li",null,[a("默认值: "),s("code",null,"false")]),s("li",null,[a("说明: "),s("code",null,"是否开启调试模式")])],-1),S={id:"session-1",tabindex:"-1"},T=s("a",{class:"header-anchor",href:"#session-1","aria-label":'Permalink to "session <Badge type="tip" text="非必传" />"'},"​",-1),v=o(`<ul><li>类型: <code>Boolean</code></li><li>默认值: <code>false</code></li><li>说明: <code>session模式</code></li></ul><h3 id="返回内容" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>-</code></li><li>返回值：<code>缓存的数据内容</code></li></ul><h2 id="删除缓存" tabindex="-1">删除缓存 <a class="header-anchor" href="#删除缓存" aria-label="Permalink to &quot;删除缓存&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">delStoreData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">delStoreData</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,5),P={id:"key-2",tabindex:"-1"},q=s("a",{class:"header-anchor",href:"#key-2","aria-label":'Permalink to "key <Badge type="warning" text="必传参数" />"'},"​",-1),B=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"String")]),s("li",null,[a("说明: "),s("code",null,"缓存的key名称")])],-1),E={id:"session-2",tabindex:"-1"},j=s("a",{class:"header-anchor",href:"#session-2","aria-label":'Permalink to "session <Badge type="tip" text="非必传" />"'},"​",-1),V=o(`<ul><li>类型: <code>Boolean</code></li><li>默认值: <code>false</code></li><li>说明: <code>session模式</code></li></ul><h2 id="获取全部缓存" tabindex="-1">获取全部缓存 <a class="header-anchor" href="#获取全部缓存" aria-label="Permalink to &quot;获取全部缓存&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getAllStore</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getAllStore</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div>`,3),w={id:"session-3",tabindex:"-1"},I=s("a",{class:"header-anchor",href:"#session-3","aria-label":'Permalink to "session <Badge type="tip" text="非必传" />"'},"​",-1),N=o(`<ul><li>类型: <code>Boolean</code></li><li>默认值: <code>false</code></li><li>说明: <code>session模式</code></li></ul><h3 id="返回内容-1" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-1" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Array</code></li><li>返回值：<code>所有的缓存数据列表</code></li></ul><h2 id="清空缓存" tabindex="-1">清空缓存 <a class="header-anchor" href="#清空缓存" aria-label="Permalink to &quot;清空缓存&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">clearStore</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">clearStore</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div>`,5),R={id:"session-4",tabindex:"-1"},$=s("a",{class:"header-anchor",href:"#session-4","aria-label":'Permalink to "session <Badge type="tip" text="非必传" />"'},"​",-1),J=o(`<ul><li>类型: <code>Boolean</code></li><li>默认值: <code>false</code></li><li>说明: <code>session模式</code></li></ul><h2 id="清空全部缓存" tabindex="-1">清空全部缓存 <a class="header-anchor" href="#清空全部缓存" aria-label="Permalink to &quot;清空全部缓存&quot;">​</a></h2><p>会清空所有的缓存，包括 <code>sessionStorage</code> 和 <code>localStorage</code></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">clearStoreAll</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">clearStoreAll</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div>`,4);function O(U,z,G,H,K,L){const e=c("Badge");return t(),p("div",null,[r,s("h3",d,[a("key "),l(e,{type:"warning",text:"必传参数"}),a(),y]),D,s("h3",_,[a("value "),l(e,{type:"warning",text:"必传参数"}),a(),h]),F,s("h3",u,[a("session "),l(e,{type:"tip",text:"非必传"}),a(),C]),A,s("h3",g,[a("key "),l(e,{type:"warning",text:"必传参数"}),a(),f]),b,s("h3",m,[a("debug "),l(e,{type:"tip",text:"非必传"}),a(),k]),x,s("h3",S,[a("session "),l(e,{type:"tip",text:"非必传"}),a(),T]),v,s("h3",P,[a("key "),l(e,{type:"warning",text:"必传参数"}),a(),q]),B,s("h3",E,[a("session "),l(e,{type:"tip",text:"非必传"}),a(),j]),V,s("h3",w,[a("session "),l(e,{type:"tip",text:"非必传"}),a(),I]),N,s("h3",R,[a("session "),l(e,{type:"tip",text:"非必传"}),a(),$]),J])}const W=n(i,[["render",O]]);export{Q as __pageData,W as default};
