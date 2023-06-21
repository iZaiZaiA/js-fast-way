import{_ as e,D as t,o as p,c,z as s,a,G as n,O as o}from"./chunks/framework.c1dc7d23.js";const Es=JSON.parse('{"title":"系统元素操作","description":"","frontmatter":{},"headers":[],"relativePath":"api/os.md","filePath":"api/os.md","lastUpdated":1682302390000}'),r={name:"api/os.md"},i=s("h1",{id:"系统元素操作",tabindex:"-1"},[a("系统元素操作 "),s("a",{class:"header-anchor",href:"#系统元素操作","aria-label":'Permalink to "系统元素操作"'},"​")],-1),D=s("p",null,"在各种业务场景中，可能会用到的系统元素操作",-1),y={id:"设置图片颜色样式",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#设置图片颜色样式","aria-label":'Permalink to "设置图片颜色样式 <Badge type="warning" text="V0.1.0" />"'},"​",-1),d=o(`<p>原图需要为黑色，底色建议透明</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">image-png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jfw.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">alt</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setImageColorStyle</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setImageColorStyle</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">image-png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#1ECC95</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//true</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,2),C={id:"id",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#id","aria-label":'Permalink to "id <Badge type="warning" text="必传参数" />"'},"​",-1),_=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"String")]),s("li",null,[a("说明: "),s("code",null,"图片元素ID")])],-1),h={id:"value",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#value","aria-label":'Permalink to "value <Badge type="warning" text="必传参数" />"'},"​",-1),g=o('<ul><li>类型: <code>String</code></li><li>说明: <code>十六进制的颜色值</code></li></ul><h3 id="返回内容" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Boolean</code></li><li>说明: <code>是否设置成功</code></li></ul>',3),m={id:"设置图片颜色",tabindex:"-1"},b=s("a",{class:"header-anchor",href:"#设置图片颜色","aria-label":'Permalink to "设置图片颜色 <Badge type="warning" text="V0.0.9" />"'},"​",-1),f=o(`<p>原图需要为黑色，底色建议透明</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setImageColor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">rgb</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setImageColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#1ECC95</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//{rgb, color, result}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">image-box</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">backgroundColor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> color</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">image</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">filter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">filter</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,2),x={id:"value-1",tabindex:"-1"},T=s("a",{class:"header-anchor",href:"#value-1","aria-label":'Permalink to "value <Badge type="warning" text="必传参数" />"'},"​",-1),E=o(`<ul><li>类型: <code>String</code></li><li>说明: <code>十六进制的颜色值</code></li></ul><h3 id="返回内容-1" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-1" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>Object</code></li><li>说明: <code>转换后的相关数据</code></li></ul><h2 id="设置剪切板文本" tabindex="-1">设置剪切板文本 <a class="header-anchor" href="#设置剪切板文本" aria-label="Permalink to &quot;设置剪切板文本&quot;">​</a></h2><p>在本地调试使用会报错，需要部署到服务器上，并且是<code>https</code>才能正常使用</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setCopyText</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setCopyText</span><span style="color:#A6ACCD;">(val)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">复制成功</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">复制失败</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,6),P={id:"text",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#text","aria-label":'Permalink to "text <Badge type="warning" text="必传参数" />"'},"​",-1),w=o(`<ul><li>类型: <code>String</code></li><li>说明: <code>文本内容</code></li></ul><h2 id="取剪切板文本" tabindex="-1">取剪切板文本 <a class="header-anchor" href="#取剪切板文本" aria-label="Permalink to &quot;取剪切板文本&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getCopyText</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getCopyText</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">获取失败</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="返回内容-2" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-2" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>-</code></li></ul><h2 id="输入框插入内容" tabindex="-1">输入框插入内容 <a class="header-anchor" href="#输入框插入内容" aria-label="Permalink to &quot;输入框插入内容&quot;">​</a></h2><p>在输入框的光标位置插入内容，取光标位置，参考文章 <a href="/js-fast-way/article/text.html#光标所在位置">光标所在位置</a></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setPosInsert</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setPosInsert</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">插入</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 插入123</span></span></code></pre></div>`,8),q={id:"startpos",tabindex:"-1"},S=s("a",{class:"header-anchor",href:"#startpos","aria-label":'Permalink to "startPos <Badge type="warning" text="必传参数" />"'},"​",-1),k=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"Number")]),s("li",null,[a("说明: "),s("code",null,"光标开始位置")])],-1),I={id:"endpos",tabindex:"-1"},j=s("a",{class:"header-anchor",href:"#endpos","aria-label":'Permalink to "endPos <Badge type="warning" text="必传参数" />"'},"​",-1),B=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"Number")]),s("li",null,[a("说明: "),s("code",null,"光标结束位置")])],-1),V={id:"value-2",tabindex:"-1"},N=s("a",{class:"header-anchor",href:"#value-2","aria-label":'Permalink to "value <Badge type="warning" text="必传参数" />"'},"​",-1),R=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"String")]),s("li",null,[a("说明: "),s("code",null,"输入框内容")])],-1),U={id:"value2",tabindex:"-1"},$=s("a",{class:"header-anchor",href:"#value2","aria-label":'Permalink to "value2 <Badge type="warning" text="必传参数" />"'},"​",-1),O=o(`<ul><li>类型: <code>String</code></li><li>说明: <code>插入内容</code></li></ul><h3 id="返回内容-3" tabindex="-1">返回内容 <a class="header-anchor" href="#返回内容-3" aria-label="Permalink to &quot;返回内容&quot;">​</a></h3><ul><li>类型: <code>String</code></li><li>说明: <code>拼接后的内容</code></li></ul><h2 id="设置光标位置" tabindex="-1">设置光标位置 <a class="header-anchor" href="#设置光标位置" aria-label="Permalink to &quot;设置光标位置&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setPosRange</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setPosRange</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">元素ID</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,5),M={id:"id-1",tabindex:"-1"},z=s("a",{class:"header-anchor",href:"#id-1","aria-label":'Permalink to "id <Badge type="warning" text="必传参数" />"'},"​",-1),G=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"String")]),s("li",null,[a("说明: "),s("code",null,"输入框ID")])],-1),J={id:"pos",tabindex:"-1"},H=s("a",{class:"header-anchor",href:"#pos","aria-label":'Permalink to "pos <Badge type="warning" text="必传参数" />"'},"​",-1),K=o(`<ul><li>类型: <code>Number</code></li><li>说明: <code>光标位置</code></li></ul><h2 id="设置元素焦点" tabindex="-1">设置元素焦点 <a class="header-anchor" href="#设置元素焦点" aria-label="Permalink to &quot;设置元素焦点&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setElementFocus</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setElementFocus</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">元素ID</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,3),L={id:"id-2",tabindex:"-1"},Q=s("a",{class:"header-anchor",href:"#id-2","aria-label":'Permalink to "id <Badge type="warning" text="必传参数" />"'},"​",-1),W=o(`<ul><li>类型: <code>String</code></li><li>说明: <code>输入框ID</code></li></ul><h2 id="饿了么ui的主色" tabindex="-1">饿了么UI的主色 <a class="header-anchor" href="#饿了么ui的主色" aria-label="Permalink to &quot;饿了么UI的主色&quot;">​</a></h2><p>设置饿了么UI的主色调</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setElementMainColor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setElementMainColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#1ECC95</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,4),X={id:"color",tabindex:"-1"},Y=s("a",{class:"header-anchor",href:"#color","aria-label":'Permalink to "color <Badge type="tip" text="非必传" />"'},"​",-1),Z=o(`<ul><li>类型: <code>String</code></li><li>默认值: <code>#1ECC95</code></li><li>说明: <code>要设置的css颜色值</code></li></ul><h2 id="控制台打印" tabindex="-1">控制台打印 <a class="header-anchor" href="#控制台打印" aria-label="Permalink to &quot;控制台打印&quot;">​</a></h2><p>有点主题的打印</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ulog</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">ulog</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,4),ss={id:"name",tabindex:"-1"},as=s("a",{class:"header-anchor",href:"#name","aria-label":'Permalink to "name <Badge type="warning" text="必传参数" />"'},"​",-1),ls=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"String")]),s("li",null,[a("说明: "),s("code",null,"名称")])],-1),ns={id:"tips",tabindex:"-1"},os=s("a",{class:"header-anchor",href:"#tips","aria-label":'Permalink to "tips <Badge type="warning" text="必传参数" />"'},"​",-1),es=o(`<ul><li>类型: <code>String</code></li><li>说明: <code>提示</code></li></ul><h2 id="控制台打印2" tabindex="-1">控制台打印2 <a class="header-anchor" href="#控制台打印2" aria-label="Permalink to &quot;控制台打印2&quot;">​</a></h2><p>带主题的控制台打印</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">clog</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js-fast-way</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">clog</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">micro</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tips</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,4),ts={id:"micro",tabindex:"-1"},ps=s("a",{class:"header-anchor",href:"#micro","aria-label":'Permalink to "micro <Badge type="warning" text="必传参数" />"'},"​",-1),cs=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"String")]),s("li",null,[a("说明: "),s("code",null,"第一个名称")])],-1),rs={id:"name-1",tabindex:"-1"},is=s("a",{class:"header-anchor",href:"#name-1","aria-label":'Permalink to "name <Badge type="warning" text="必传参数" />"'},"​",-1),Ds=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"String")]),s("li",null,[a("说明: "),s("code",null,"用于区分不同的打印")])],-1),ys={id:"tips-1",tabindex:"-1"},Fs=s("a",{class:"header-anchor",href:"#tips-1","aria-label":'Permalink to "tips <Badge type="warning" text="必传参数" />"'},"​",-1),ds=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"String")]),s("li",null,[a("说明: "),s("code",null,"打印的提示信息")])],-1),Cs={id:"data",tabindex:"-1"},As=s("a",{class:"header-anchor",href:"#data","aria-label":'Permalink to "data <Badge type="warning" text="必传参数" />"'},"​",-1),_s=s("ul",null,[s("li",null,[a("类型: "),s("code",null,"-")]),s("li",null,[a("说明: "),s("code",null,"打印的数据")])],-1);function hs(us,gs,ms,bs,fs,xs){const l=t("Badge");return p(),c("div",null,[i,D,s("h2",y,[a("设置图片颜色样式 "),n(l,{type:"warning",text:"V0.1.0"}),a(),F]),d,s("h3",C,[a("id "),n(l,{type:"warning",text:"必传参数"}),a(),A]),_,s("h3",h,[a("value "),n(l,{type:"warning",text:"必传参数"}),a(),u]),g,s("h2",m,[a("设置图片颜色 "),n(l,{type:"warning",text:"V0.0.9"}),a(),b]),f,s("h3",x,[a("value "),n(l,{type:"warning",text:"必传参数"}),a(),T]),E,s("h3",P,[a("text "),n(l,{type:"warning",text:"必传参数"}),a(),v]),w,s("h3",q,[a("startPos "),n(l,{type:"warning",text:"必传参数"}),a(),S]),k,s("h3",I,[a("endPos "),n(l,{type:"warning",text:"必传参数"}),a(),j]),B,s("h3",V,[a("value "),n(l,{type:"warning",text:"必传参数"}),a(),N]),R,s("h3",U,[a("value2 "),n(l,{type:"warning",text:"必传参数"}),a(),$]),O,s("h3",M,[a("id "),n(l,{type:"warning",text:"必传参数"}),a(),z]),G,s("h3",J,[a("pos "),n(l,{type:"warning",text:"必传参数"}),a(),H]),K,s("h3",L,[a("id "),n(l,{type:"warning",text:"必传参数"}),a(),Q]),W,s("h3",X,[a("color "),n(l,{type:"tip",text:"非必传"}),a(),Y]),Z,s("h3",ss,[a("name "),n(l,{type:"warning",text:"必传参数"}),a(),as]),ls,s("h3",ns,[a("tips "),n(l,{type:"warning",text:"必传参数"}),a(),os]),es,s("h3",ts,[a("micro "),n(l,{type:"warning",text:"必传参数"}),a(),ps]),cs,s("h3",rs,[a("name "),n(l,{type:"warning",text:"必传参数"}),a(),is]),Ds,s("h3",ys,[a("tips "),n(l,{type:"warning",text:"必传参数"}),a(),Fs]),ds,s("h3",Cs,[a("data "),n(l,{type:"warning",text:"必传参数"}),a(),As]),_s])}const Ps=e(r,[["render",hs]]);export{Es as __pageData,Ps as default};