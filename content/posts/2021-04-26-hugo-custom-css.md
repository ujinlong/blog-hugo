---
author: loikein
published: "2021-04-26 22:25:05.631 +0200"
lastmod: "2021-05-03 15:22:55.905 +0200"
slug: 2021-04-26-hugo-custom-css-the-right-way
categories:
- 笔记
tags:
- Hugo
title: 如何在 Hugo 中添加自定义 CSS
description: 又名：浪费生命的一百种方法
---
基本都是 rant，太长不想看的朋友可以直接拉到文章末尾看代码。

***

发现了这个，改天研究一下……：[Best way to include JavaScript libraries in Hugo sites - support - HUGO](https://discourse.gohugo.io/t/best-way-to-include-javascript-libraries-in-hugo-sites/13614/2)

***

这并不是我用 Hugo 做的第一个网站，但[之前那个网站](https://notes.loikein.one/)内容非常之单一，主题也是我随便挑了一个，几乎只改了颜色就直接用了。

那个主题是 Yihui 改过的，可以添加自定义 CSS 代码，`head.html` 里面的 [layout 是这样的](https://github.com/yihui/hugo-lithium/blob/master/layouts/partials/head.html#L35-L37)：

```html
{{ range .Site.Params.customCSS }}
<link rel="stylesheet" href="{{ . | relURL }}">
{{ end }}
```

示例 config：

```yaml
params:
  customCSS: 
    - "/css/1.css"
    - "/css/2.css"
```

示例 file tree：

```
static/
└── css
    ├── 1.css
    └── 2.css
```


这个方法代码简洁，逻辑清晰，可以说是什么都好，但是有一点不好：它跟 Hugo 的文件结构背道而驰，导致 Hugo 内置的很多方便的方程（比如 CSS minifier）无法使用。

***

我一直没怎么在意过这个事情，直到昨天查了一下怎么给单独页面添加 CSS（[Using an additional specific css style for a page - HUGO](https://discourse.gohugo.io/t/using-an-additional-specific-css-style-for-a-page/26547)），突然发现诶，别人添加自定义 CSS 的代码跟我的好像不太一样……

这位名为 Polarhardboiled 的网友是这么写的：

```html
{{ with $.Resources.GetMatch "**.css*" }}
{{ $style := . | minify | fingerprint }}
<link type=text/css rel="stylesheet" href="{{ $style.Permalink }}">
{{ end }}
```

我第一反应是，哦，Hugo 好像是有内置 CSS minifier 方程的，那我也像她那样加上 `| minify | fingerprint` 不就行了？对不起，无论怎么写都是 Hugo server error。

首先点醒我的是这个 issue：
[Minification example not working · Issue #6646 · gohugoio/hugo](https://github.com/gohugoio/hugo/issues/6646)。其中提到，Hugo 的 CSS 和 JS 文档（resources，哈）应该放在 `assets/` 而不是 `static/` 下面。

{{< sticker name="question.jpg" h=120 animated="false" >}}

<!-- 
```html
{{ range resources.GetMatch "css/**.css" }}
{{ $style := . | minify | fingerprint }}
<link rel="stylesheet" href="{{ $style.Permalink }}">
{{ end }}
```
 -->

好，那我把 `css/` 挪到 `assets/` 下面总行了吧？
对不起，`GetMatch` 只能 get 到一个文件。我甚至不知道为什么这么重要的事情没有在 Hugo 文档的任何一页写到，而是藏在八百年前的一个 issue 里：[The big assets handling / resource transformation funcs naming thread · Issue #4854 · gohugoio/hugo · GitHub](https://github.com/gohugoio/hugo/issues/4854)

{{< sticker name="scream" h=200 >}}

为表达我的愤慨，在此全文抄写该表格。事实上，最重要的前三个方程完全没有详细文档。人干事？恩？（注意大小写有意义，比如 `Resources.GetMatch` 和 `resources.GetMatch` 是两个不同的方程，大写的 `Resources` 是给 [Page Bundle](https://gohugo.io/content-management/page-resources/) 用的。）

| Current Name     | What is it       |
|------------|--------------|
| resources.Get                | Creates a new `Resource` object given a path to a file in `/assets` (configurable). This also works for images that you can then scale. Anything with a MIME type recognized by Hugo (and you can define your own if you want).    |
| resources.GetMatch            | Same as `resources.Get`, but uses pattern matching to find the first match.   |
| resources.Match               | Create a slice of `Resource` objects matching the given pattern. See `resources.Concat` for a function that could use this.     |
| resources.ToCSS              | Transform a `Resource` to CSS based on the source MIME type. In the first version, we will support SCSS. An implementation note here is that we will persist the result of this transformation, so if you later run this from a non-SASS-enabled Hugo, it will still work.  When we finally get some proper plugin support in Hugo, these resource transformations will be candidates to queue up and send to external processors. |
| resources.PostCSS            | See [#4858](https://github.com/gohugoio/hugo/issues/4858)          |
| resources.Minify             | Minifies the given `Resource` based on the source MIME type. Currently supports `css`, `js`, `json`, `html`, `svg`, `xml`.  It will get a new `RelPermalink` and `Permalink`, e.g. `/css/main.min.css`.    |
| resources.Fingerprint        | Creates a fingerprinted version of the given `Resource`; it will get a new `RelPermalink` and `Permalink`, e.g. `/css/main.eae6b4ebececc2bbd7490966a5e01bcc.css`. It defaults to `sha256`, but you can pass either `md5`, `sha256` or `sha512` as an argument.   |
| Integrity                    | Available as `.Data.Integrity` on fingerprinted resources. See [Subresource Integrity - Web security \| MDN](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity). Note that if you want the `Integrity`, but don't care about the fingerprinting (aka cache-busting part), you can just apply the fingerprint function, and just use `.Data.Integrity` (i.e. not use `RelPermalink` etc.)  |
| resources.Concat             | Concatenates a list of `Resource` objects. Think of this as a poor man's bundler.   |
| resources.ExecuteAsTemplate  | Parses and executes the given `Resource` and data context (e.g. `.Site`) as a Go template. Use your imagination for use cases for this one.      |
| resources.FromString         | Create a `Resource` from a string.   |

***

总之，浪费了一些生命，[再学了一点 `resources.Concat`](https://discourse.gohugo.io/t/combining-css-files-into-one-file/20380/4) 之后，以下是最终版本：

```html
{{ if .Site.Params.customCSS }}
{{ $style := resources.Match "css/**.css" | resources.Concat "custom.css" | minify | fingerprint }}
<link rel="stylesheet" href="{{ $style.Permalink }}" integrity="{{ $style.Data.Integrity }}" media="screen">
{{ end }}
```

当然理论上也可以直接用 SCSS 啊，改一下 match，再在 `minify` 前加上 `toCSS | ` 就可以了。

示例 config：

```yaml
params:
  customCSS: true
```

示例 file tree：

```
assets/
└── css
    ├── 1.css
    └── 2.css
```

以上。教练我一天之内都不想写代码了。
