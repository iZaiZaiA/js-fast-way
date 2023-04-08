import{_ as s,o as a,c as n,N as l}from"./chunks/framework.d6d2c45c.js";const A=JSON.parse('{"title":"文本记录","description":"","frontmatter":{},"headers":[],"relativePath":"article/text.md","lastUpdated":null}'),o={name:"article/text.md"},p=l(`<h1 id="文本记录" tabindex="-1">文本记录 <a class="header-anchor" href="#文本记录" aria-label="Permalink to &quot;文本记录&quot;">​</a></h1><p>一些js内置的文本操作的方法函数记录文章。</p><h2 id="是否包含" tabindex="-1">是否包含 <a class="header-anchor" href="#是否包含" aria-label="Permalink to &quot;是否包含&quot;">​</a></h2><p><code>includes() </code> 返回布尔值，表示是否找到了参数字符串。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello world!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">o</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div><h2 id="是否在头部" tabindex="-1">是否在头部 <a class="header-anchor" href="#是否在头部" aria-label="Permalink to &quot;是否在头部&quot;">​</a></h2><p><code>startsWith()</code> 返回布尔值，表示参数字符串是否在原字符串的头部。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello world!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startsWith</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div><h2 id="是否在尾部" tabindex="-1">是否在尾部 <a class="header-anchor" href="#是否在尾部" aria-label="Permalink to &quot;是否在尾部&quot;">​</a></h2><p><code>endsWith()</code> 返回布尔值，表示参数字符串是否在原字符串的尾部。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello world!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">endsWith</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div><h2 id="字符串重复" tabindex="-1">字符串重复 <a class="header-anchor" href="#字符串重复" aria-label="Permalink to &quot;字符串重复&quot;">​</a></h2><p><code>repeat()</code> 返回一个新字符串，表示将原字符串重复 <code>n</code> 次。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str  </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">repeat</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &quot;hellohello&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="头部补全" tabindex="-1">头部补全 <a class="header-anchor" href="#头部补全" aria-label="Permalink to &quot;头部补全&quot;">​</a></h2><p><code>padStart() </code> 字符串不够指定长度，将头部补全</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str  </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">padStart</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &#39;vue-hello&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//处理日期时间格式时，比较好用</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str  </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">padStart</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &#39;02&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="尾部补全" tabindex="-1">尾部补全 <a class="header-anchor" href="#尾部补全" aria-label="Permalink to &quot;尾部补全&quot;">​</a></h2><p><code>padEnd()</code> 字符串不够指定长度，将尾部补全。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str  </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">padEnd</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &#39;20&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="消除头部空格" tabindex="-1">消除头部空格 <a class="header-anchor" href="#消除头部空格" aria-label="Permalink to &quot;消除头部空格&quot;">​</a></h2><p><code>trimStart()</code> 消除字符串头部的空格(返回的都是新字符串，不会修改原始字符串)</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">  hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">trimStart</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &quot;hello&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="消除尾部空格" tabindex="-1">消除尾部空格 <a class="header-anchor" href="#消除尾部空格" aria-label="Permalink to &quot;消除尾部空格&quot;">​</a></h2><p><code>trimEnd()</code> 消除尾部的空格 (返回的都是新字符串，不会修改原始字符串)</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">trimEnd</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &quot;hello&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="替换所有匹配" tabindex="-1">替换所有匹配 <a class="header-anchor" href="#替换所有匹配" aria-label="Permalink to &quot;替换所有匹配&quot;">​</a></h2><p><code>matchAll()</code> 返回一个正则表达式在当前字符串的所有匹配 <code>replaceAll()</code> 可以一次性替换所有匹配。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aabbcc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replaceAll</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">_</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &#39;aa__cc&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="索引" tabindex="-1">索引 <a class="header-anchor" href="#索引" aria-label="Permalink to &quot;索引&quot;">​</a></h2><p><code>at()</code> 接受一个整数作为参数，返回参数指定位置的字符，支持负索引</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">at</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &quot;e&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="光标所在位置" tabindex="-1">光标所在位置 <a class="header-anchor" href="#光标所在位置" aria-label="Permalink to &quot;光标所在位置&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> specialDom </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">输入框ID</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> startPos </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> specialDom</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">selectionStart </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> endPos </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> specialDom</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">selectionEnd </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span></code></pre></div><p>vue方式</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@blur</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">specialInputBlur</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//失去焦点事件，当然也可以用鼠标右键事件等获取</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> specialInputBlur </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">startPos</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">selectionStart</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">endPos</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">selectionEnd</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,36),e=[p];function t(c,r,D,y,F,C){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
