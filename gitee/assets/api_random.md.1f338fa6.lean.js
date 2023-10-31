import{_ as o,v as t,b as p,F as a,L as s,E as n,R as e,M as c}from"./chunks/framework.5d47e827.js";const O=JSON.parse('{"title":"生成随机字符","description":"","frontmatter":{},"headers":[],"relativePath":"api/random.md","filePath":"api/random.md","lastUpdated":1680966884000}'),i={name:"api/random.md"},r=e(`<h1 id="生成随机字符" tabindex="-1">生成随机字符 <a class="header-anchor" href="#生成随机字符" aria-label="Permalink to &quot;生成随机字符&quot;">​</a></h1><p>在各种业务场景中，可能会用到的生成随机字符操作</p><h2 id="生成uuid" tabindex="-1">生成UUID <a class="header-anchor" href="#生成uuid" aria-label="Permalink to &quot;生成UUID&quot;">​</a></h2><p>使用 <code>crypto.randomUUID()</code> 生成的uuid</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getUUID</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getUUID</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// feaabe10-ea97-4c87-82f2-e8db4f82074a</span></span></code></pre></div><h3 id="返回内容" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>String</code></li></ul><h2 id="uniqueid" tabindex="-1">UniqueID <a class="header-anchor" href="#uniqueid" aria-label="Permalink to &quot;UniqueID&quot;">​</a></h2><p>生成一个5位的随机的字符串</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">uniqueId</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">uniqueId</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// zb3ug</span></span></code></pre></div><h3 id="返回内容-1" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-1" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>String</code></li></ul><h2 id="随机字符串" tabindex="-1">随机字符串 <a class="header-anchor" href="#随机字符串" aria-label="Permalink to &quot;随机字符串&quot;">​</a></h2><p>生成含有大小写字母、数字的随机字符串</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getRandom</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getRandom</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 3a2Cb1ca</span></span></code></pre></div>`,15),d={id:"num",tabindex:"-1"},y=a("a",{class:"header-anchor",href:"#num","aria-label":'Permalink to "num <Badge type="tip" text="非必传" />"'},"​",-1),u=e(`<ul><li>类型: <code>Number</code></li><li>默认值: <code>8</code></li><li>说明: <code>生成长度</code></li></ul><h3 id="返回内容-2" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-2" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>String</code></li></ul><h2 id="生成随机数字" tabindex="-1">生成随机数字 <a class="header-anchor" href="#生成随机数字" aria-label="Permalink to &quot;生成随机数字&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getNumber</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getNumber</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 12345678</span></span></code></pre></div>`,5),h={id:"num-1",tabindex:"-1"},D=a("a",{class:"header-anchor",href:"#num-1","aria-label":'Permalink to "num <Badge type="tip" text="非必传" />"'},"​",-1),F=e(`<ul><li>类型: <code>Number</code></li><li>默认值: <code>8</code></li><li>说明: <code>生成长度</code></li></ul><h3 id="返回内容-3" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-3" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>String</code></li></ul><h2 id="随机小写字母" tabindex="-1">随机小写字母 <a class="header-anchor" href="#随机小写字母" aria-label="Permalink to &quot;随机小写字母&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getLowerCase</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getLowerCase</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// abcdefgh</span></span></code></pre></div>`,5),C={id:"num-2",tabindex:"-1"},m=a("a",{class:"header-anchor",href:"#num-2","aria-label":'Permalink to "num <Badge type="tip" text="非必传" />"'},"​",-1),A=e(`<ul><li>类型: <code>Number</code></li><li>默认值: <code>8</code></li><li>说明: <code>生成长度</code></li></ul><h3 id="返回内容-4" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-4" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>String</code></li></ul><h2 id="随机大写字母" tabindex="-1">随机大写字母 <a class="header-anchor" href="#随机大写字母" aria-label="Permalink to &quot;随机大写字母&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getUpperCase</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getUpperCase</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// ABCDEFGH</span></span></code></pre></div>`,5),b={id:"num-3",tabindex:"-1"},f=a("a",{class:"header-anchor",href:"#num-3","aria-label":'Permalink to "num <Badge type="tip" text="非必传" />"'},"​",-1),g=e(`<ul><li>类型: <code>Number</code></li><li>默认值: <code>8</code></li><li>说明: <code>生成长度</code></li></ul><h3 id="返回内容-5" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-5" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>String</code></li></ul><h2 id="数字和小写字母" tabindex="-1">数字和小写字母 <a class="header-anchor" href="#数字和小写字母" aria-label="Permalink to &quot;数字和小写字母&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getNumberLower</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getNumberLower</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 1278abcd</span></span></code></pre></div>`,5),_={id:"num-4",tabindex:"-1"},q=a("a",{class:"header-anchor",href:"#num-4","aria-label":'Permalink to "num <Badge type="tip" text="非必传" />"'},"​",-1),x=e(`<ul><li>类型: <code>Number</code></li><li>默认值: <code>8</code></li><li>说明: <code>生成长度</code></li></ul><h3 id="返回内容-6" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-6" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>String</code></li></ul><h2 id="数字和大写字母" tabindex="-1">数字和大写字母 <a class="header-anchor" href="#数字和大写字母" aria-label="Permalink to &quot;数字和大写字母&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getAlphabets</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getAlphabets</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 1278ABCD</span></span></code></pre></div>`,5),v={id:"num-5",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#num-5","aria-label":'Permalink to "num <Badge type="tip" text="非必传" />"'},"​",-1),P=e(`<ul><li>类型: <code>Number</code></li><li>默认值: <code>8</code></li><li>说明: <code>生成长度</code></li></ul><h3 id="返回内容-7" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-7" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>String</code></li></ul><h2 id="范围随机数" tabindex="-1">范围随机数 <a class="header-anchor" href="#范围随机数" aria-label="Permalink to &quot;范围随机数&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getRandomFrom</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getRandomFrom</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 23</span></span></code></pre></div>`,5),j={id:"upper",tabindex:"-1"},w=a("a",{class:"header-anchor",href:"#upper","aria-label":'Permalink to "upper <Badge type="warning" text="必传参数" />"'},"​",-1),E=a("ul",null,[a("li",null,[s("类型: "),a("code",null,"Number")]),a("li",null,[s("说明: "),a("code",null,"起始数字")])],-1),U={id:"lower",tabindex:"-1"},N=a("a",{class:"header-anchor",href:"#lower","aria-label":'Permalink to "lower <Badge type="warning" text="必传参数" />"'},"​",-1),B=a("ul",null,[a("li",null,[s("类型: "),a("code",null,"Number")]),a("li",null,[s("说明: "),a("code",null,"结束数字")])],-1),I=a("h3",{id:"返回内容-8",tabindex:"-1"},[s("返回内容 "),a("a",{class:"header-anchor",href:"#返回内容-8","aria-label":'Permalink to "返回内容"'},"​")],-1),S=a("ul",null,[a("li",null,[s("类型: "),a("code",null,"Number")])],-1);function L(R,$,M,z,G,H){const l=c("Badge");return t(),p("div",null,[r,a("h3",d,[s("num "),n(l,{type:"tip",text:"非必传"}),s(),y]),u,a("h3",h,[s("num "),n(l,{type:"tip",text:"非必传"}),s(),D]),F,a("h3",C,[s("num "),n(l,{type:"tip",text:"非必传"}),s(),m]),A,a("h3",b,[s("num "),n(l,{type:"tip",text:"非必传"}),s(),f]),g,a("h3",_,[s("num "),n(l,{type:"tip",text:"非必传"}),s(),q]),x,a("h3",v,[s("num "),n(l,{type:"tip",text:"非必传"}),s(),k]),P,a("h3",j,[s("upper "),n(l,{type:"warning",text:"必传参数"}),s(),w]),E,a("h3",U,[s("lower "),n(l,{type:"warning",text:"必传参数"}),s(),N]),B,I,S])}const T=o(i,[["render",L]]);export{O as __pageData,T as default};
