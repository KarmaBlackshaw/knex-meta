import{_ as s,c as a,o as n,a as l}from"./app.60d33538.js";const A=JSON.parse('{"title":"meta","description":"","frontmatter":{},"headers":[{"level":3,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Date meta functions correctly","slug":"date-meta-functions-correctly","link":"#date-meta-functions-correctly","children":[]},{"level":2,"title":"Page meta functions correctly","slug":"page-meta-functions-correctly","link":"#page-meta-functions-correctly","children":[]},{"level":2,"title":"Sort meta functions correctly","slug":"sort-meta-functions-correctly","link":"#sort-meta-functions-correctly","children":[]},{"level":2,"title":"Filter meta functions correctly","slug":"filter-meta-functions-correctly","link":"#filter-meta-functions-correctly","children":[]},{"level":2,"title":"All meta functions correctly","slug":"all-meta-functions-correctly","link":"#all-meta-functions-correctly","children":[]}],"relativePath":"utility/meta.md","lastUpdated":1679592557000}'),p={name:"utility/meta.md"},o=l(`<h1 id="meta" tabindex="-1">meta <a class="header-anchor" href="#meta" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This will no longer receive updates in favor of <a href="/utility/metaQuery.html"><code>metaQuery</code></a></p></div><hr><h3 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h3><h2 id="date-meta-functions-correctly" tabindex="-1">Date meta functions correctly <a class="header-anchor" href="#date-meta-functions-correctly" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-2Id9K" id="tab-B3gv-3i" checked="checked"><label for="tab-B3gv-3i">Syntax</label><input type="radio" name="group-2Id9K" id="tab-s8EbPGb"><label for="tab-s8EbPGb">Output</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dictionary </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">birthdate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">users.birthdate</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">knex</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">meta</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">dateBy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">birthdate</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">dateFrom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1998-07-29</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">dateTo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1998-07-29</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">dateDictionary</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> dictionary</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">birthdate</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1998-07-29 00:00:00</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">birthdate</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1998-07-29 23:59:59</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div></div></div><h2 id="page-meta-functions-correctly" tabindex="-1">Page meta functions correctly <a class="header-anchor" href="#page-meta-functions-correctly" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-43rgc" id="tab-xyvn7d8" checked="checked"><label for="tab-xyvn7d8">Syntax</label><input type="radio" name="group-43rgc" id="tab-ugXZcM-"><label for="tab-ugXZcM-">Output</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">knex</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">meta</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">page</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rows</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const expected </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">select * from \`users\` limit 50 offset 100</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div></div></div><h2 id="sort-meta-functions-correctly" tabindex="-1">Sort meta functions correctly <a class="header-anchor" href="#sort-meta-functions-correctly" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-KVIaV" id="tab-JIYWerN" checked="checked"><label for="tab-JIYWerN">Syntax</label><input type="radio" name="group-KVIaV" id="tab--CKJrHM"><label for="tab--CKJrHM">Output</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dictionary </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">birthdate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">users.birthdate</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">knex</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">meta</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sort</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">asc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sortBy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">birthdate</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sortDictionary</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> dictionary</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const expected </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">select * from \`users\` order by \`users\`.\`birthdate\` asc</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div></div></div><h2 id="filter-meta-functions-correctly" tabindex="-1">Filter meta functions correctly <a class="header-anchor" href="#filter-meta-functions-correctly" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-UvjSS" id="tab-NTWtj9_" checked="checked"><label for="tab-NTWtj9_">Syntax</label><input type="radio" name="group-UvjSS" id="tab-KY7391p"><label for="tab-KY7391p">Output</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dictionary </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">birthdate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">users.birthdate</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">knex</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">meta</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">filterBy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">birthdate</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">q</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">july</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">filterDictionary</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> dictionary</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">birthdate</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">LIKE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%july%</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div></div></div><h2 id="all-meta-functions-correctly" tabindex="-1">All meta functions correctly <a class="header-anchor" href="#all-meta-functions-correctly" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-T40jA" id="tab-gax4bFR" checked="checked"><label for="tab-gax4bFR">Syntax</label><input type="radio" name="group-T40jA" id="tab-3vJWiJc"><label for="tab-3vJWiJc">Output</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dictionary </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">birthdate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">users.birthdate</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">knex</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">meta</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">dateBy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">birthdate</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">dateFrom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1998-07-29</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">dateTo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1998-07-29</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">dateDictionary</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> dictionary</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">page</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rows</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">isCount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sort</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">asc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sortBy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">birthdate</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sortDictionary</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> dictionary</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">filterBy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">birthdate</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">q</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">july</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">filterDictionary</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> dictionary</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">birthdate</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1998-07-29 00:00:00</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">birthdate</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1998-07-29 23:59:59</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">birthdate</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">LIKE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%july%</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">users</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">birthdate</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">asc</span></span>
<span class="line"><span style="color:#F78C6C;">LIMIT</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">50</span></span>
<span class="line"><span style="color:#A6ACCD;">OFFSET</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">100</span></span>
<span class="line"></span></code></pre></div></div></div>`,14),e=[o];function t(c,r,D,y,F,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
