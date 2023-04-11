import{_ as o,o as t,c as p,y as s,a,E as n,N as e,C as c}from"./chunks/framework.9e8f62cc.js";const ss=JSON.parse('{"title":"文件数据处理","description":"","frontmatter":{},"headers":[],"relativePath":"api/file.md","lastUpdated":1680966884000}'),i={name:"api/file.md"},r=e(`<h1 id="文件数据处理" tabindex="-1">文件数据处理 <a class="header-anchor" href="#文件数据处理" aria-label="Permalink to &quot;文件数据处理&quot;">​</a></h1><p>在各种业务场景中，可能会用到的文件数据处理</p><h2 id="判断文件大小" tabindex="-1">判断文件大小 <a class="header-anchor" href="#判断文件大小" aria-label="Permalink to &quot;判断文件大小&quot;">​</a></h2><p>用于判断文件大小是否在指定的范围内</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isFileSize</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isFileSize</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div>`,5),d={id:"byte",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#byte","aria-label":'Permalink to "byte <Badge type="warning" text="必传参数" />"'},"​",-1),D=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"Number")]),s("li",null,[a("说明: "),s("code",null,"文件字节")])],-1),F={id:"size",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#size","aria-label":'Permalink to "size <Badge type="warning" text="必传参数" />"'},"​",-1),_=e(`<ul><li>类型: <code>Number</code></li><li>说明: <code>文件兆数，单位M</code></li></ul><h3 id="返回内容" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Boolean</code></li><li>返回值：<code>true | false</code></li></ul><h2 id="base64转成文件" tabindex="-1">base64转成文件 <a class="header-anchor" href="#base64转成文件" aria-label="Permalink to &quot;base64转成文件&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">base64ToFile</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fileBase64 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">文件base64数据</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> blob </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">base64ToFile</span><span style="color:#A6ACCD;">(fileBase64)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//封装为formData进行请求</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> formData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">FormData</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">formData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> blob)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(formData)</span></span>
<span class="line"></span></code></pre></div>`,5),C={id:"base64",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#base64","aria-label":'Permalink to "base64 <Badge type="warning" text="必传参数" />"'},"​",-1),u=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"String")]),s("li",null,[a("说明: "),s("code",null,"base64内容")])],-1),b={id:"type",tabindex:"-1"},f=s("a",{class:"header-anchor",href:"#type","aria-label":'Permalink to "type <Badge type="tip" text="非必传" />"'},"​",-1),m=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"String")]),s("li",null,[a("默认值: "),s("code",null,"image/jpeg")]),s("li",null,[a("说明: "),s("code",null,"文件类型")])],-1),g={id:"name",tabindex:"-1"},x=s("a",{class:"header-anchor",href:"#name","aria-label":'Permalink to "name <Badge type="tip" text="非必传" />"'},"​",-1),P=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"String")]),s("li",null,[a("默认值: "),s("code",null,"当前时间戳")]),s("li",null,[a("说明: "),s("code",null,"文件名称")])],-1),T={id:"suffix",tabindex:"-1"},q=s("a",{class:"header-anchor",href:"#suffix","aria-label":'Permalink to "suffix <Badge type="tip" text="非必传" />"'},"​",-1),S=e(`<ul><li>类型: <code>String</code></li><li>默认值: <code>jpg</code></li><li>说明: <code>文件后缀</code></li></ul><h3 id="返回内容-1" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-1" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>File</code></li><li>返回值：<code>文件对象</code></li></ul><h2 id="下载blob文件" tabindex="-1">下载Blob文件 <a class="header-anchor" href="#下载blob文件" aria-label="Permalink to &quot;下载Blob文件&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">downloadBlob</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//此headers只是模拟，实际使用时，需要从接口响应的headers中获取</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> headers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">content-disposition</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">attachment;filename=文件名称.xlsx</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">downloadBlob</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">文件数据</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> headers[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">content-disposition</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"></span></code></pre></div>`,5),k={id:"data",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#data","aria-label":'Permalink to "data <Badge type="warning" text="必传参数" />"'},"​",-1),v=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"-")]),s("li",null,[a("说明: "),s("code",null,"文件内容")])],-1),B={id:"disposition",tabindex:"-1"},w=s("a",{class:"header-anchor",href:"#disposition","aria-label":'Permalink to "disposition <Badge type="warning" text="必传参数" />"'},"​",-1),j=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"String")]),s("li",null,[a("说明: "),s("code",null,"接口响应的headers头，headers['content-disposition']")])],-1),N={id:"type-1",tabindex:"-1"},V=s("a",{class:"header-anchor",href:"#type-1","aria-label":'Permalink to "type <Badge type="tip" text="非必传" />"'},"​",-1),I=e(`<ul><li>类型: <code>String</code></li><li>默认值: <code>application/vnd.ms-excel</code></li><li>说明: <code>文件类型，详情可以参阅blob文件类型</code></li></ul><h3 id="返回内容-2" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-2" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>如果成功，会直接调用浏览器的下载功能，进行下载</li></ul><h2 id="获取文件名" tabindex="-1">获取文件名 <a class="header-anchor" href="#获取文件名" aria-label="Permalink to &quot;获取文件名&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getFileName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getFileName</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxx/aaa.jpg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// aaa</span></span>
<span class="line"></span></code></pre></div>`,5),z={id:"name-1",tabindex:"-1"},R=s("a",{class:"header-anchor",href:"#name-1","aria-label":'Permalink to "name <Badge type="warning" text="必传参数" />"'},"​",-1),$=e(`<ul><li>类型: <code>String</code></li><li>说明: <code>文件路径</code></li></ul><h3 id="返回内容-3" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-3" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>String</code></li></ul><h2 id="获取后缀名" tabindex="-1">获取后缀名 <a class="header-anchor" href="#获取后缀名" aria-label="Permalink to &quot;获取后缀名&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getFileSuffix</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getFileSuffix</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxx/aaa.jpg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// jpg</span></span>
<span class="line"></span></code></pre></div>`,5),J={id:"name-2",tabindex:"-1"},M=s("a",{class:"header-anchor",href:"#name-2","aria-label":'Permalink to "name <Badge type="warning" text="必传参数" />"'},"​",-1),O=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"String")]),s("li",null,[a("说明: "),s("code",null,"文件路径")])],-1),U=s("h3",{id:"返回内容-4",tabindex:"-1"},[a("返回内容 "),s("a",{class:"header-anchor",href:"#返回内容-4","aria-label":'Permalink to "返回内容"'},"​")],-1),G=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"String")])],-1);function H(K,L,Q,W,X,Y){const l=c("Badge");return t(),p("div",null,[r,s("h3",d,[a("byte "),n(l,{type:"warning",text:"必传参数"}),a(),y]),D,s("h3",F,[a("size "),n(l,{type:"warning",text:"必传参数"}),a(),h]),_,s("h3",C,[a("base64 "),n(l,{type:"warning",text:"必传参数"}),a(),A]),u,s("h3",b,[a("type "),n(l,{type:"tip",text:"非必传"}),a(),f]),m,s("h3",g,[a("name "),n(l,{type:"tip",text:"非必传"}),a(),x]),P,s("h3",T,[a("suffix "),n(l,{type:"tip",text:"非必传"}),a(),q]),S,s("h3",k,[a("data "),n(l,{type:"warning",text:"必传参数"}),a(),E]),v,s("h3",B,[a("disposition "),n(l,{type:"warning",text:"必传参数"}),a(),w]),j,s("h3",N,[a("type "),n(l,{type:"tip",text:"非必传"}),a(),V]),I,s("h3",z,[a("name "),n(l,{type:"warning",text:"必传参数"}),a(),R]),$,s("h3",J,[a("name "),n(l,{type:"warning",text:"必传参数"}),a(),M]),O,U,G])}const as=o(i,[["render",H]]);export{ss as __pageData,as as default};
