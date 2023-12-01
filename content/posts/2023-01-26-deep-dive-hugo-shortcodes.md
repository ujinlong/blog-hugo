---
title: "深入探究 Hugo 短代码"
date: "2023-01-26T15:00:16Z"
# published: ""
# lastmod: ""
categories: ["编程笔记"]
tags: ["Hugo", "HTML"]
series:
    - "Deep dive into Hugo"
description: "总结一些使用和编写短代码的时候碰到的坑。"
---
本文基于 `hugo v0.109.0+extended`，Markdown 渲染引擎为 `Goldmark`。


文档： 

- [Shortcodes | Hugo](https://gohugo.io/content-management/shortcodes/)
- [Create Your Own Shortcodes | Hugo](https://gohugo.io/templates/shortcode-templates/)
- [Shortcode Variables | Hugo](https://gohugo.io/variables/shortcodes/)
- （虽然主题不是 shortcodes 但有用：）[Template Debugging | Hugo](https://gohugo.io/templates/template-debugging/)


## 参数

### 常规参数

我最喜欢看的 Hugo 自带 shortcodes 代码之一是 [figure.html](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/shortcodes/figure.html)，对照着它修改自己的 [figure.html](https://github.com/loikein/hugo-theme-diary/blob/main/layouts/shortcodes/figure.html) 是我学习自定义 Hugo 的起点。

容易忘记的东西主要是参数可以这么定义：（flexible / positional or named parameters）

```go-html-template
{{ $var := .Get "var" | default (.Get 0) }}
{{ $var := .Get "var" | default "something" }}
```

也可以这么定义：（positional parameters）

```go-html-template
{{ $var := .Get 0 }}
{{ $var := index .Params 0 }}
```

也可以在不需要设置默认值的时候跳过定义直接使用：（named parameters）

```go-html-template
{{ .Get "var" }}... {{ end }}        {{/* 必须参数 */}}
{{ with .Get "var" }}...{{ end }}    {{/* 可选参数 */}}
{{ if .Get "var" }}... {{ end }} 
```

但是不能在同一个 shortcode 的定义部分中混用 positional 和 named 参数。

自闭合标签中的一切用户输入内容都算作 `.Params`，没有 `.Inner`。

以及，可以通过写 ``` `` ``` 来[输入包含换行的参数](https://gohugo.io/content-management/shortcodes/#shortcodes-with-raw-string-parameters)或者一些难以转义的参数（比如 `\`）。


### 使用列表作为单个参数

在更新我的[分栏 shortcode](/playground/#two-column-layout) 时遇到了这个问题。

[这个讨论串](https://discourse.gohugo.io/t/multiple-markdown-text-sections/4238/9)里有一个（在写博文时）非常简洁的分栏 shortcode，我最近有需求，因此仔细研究了一下。

原文中的代码是这样的：

```go-html-template
{{ $cols := split .RawContent "||" }}

{{ range $cols }}
   <div class="content-column">
   {{ . | markdownify }}
   </div>
{{ end }}
```

但是我写分栏几乎都是用来多语言对照的，所以还需要指定每栏的[语言代码](https://www.w3schools.com/tags/ref_language_codes.asp)。那么问题来了，我原本的分栏代码是 [外层（行）](https://github.com/loikein/hugo-theme-diary/blob/main/layouts/shortcodes/row.html)和[内层（列）](https://github.com/loikein/hugo-theme-diary/blob/main/layouts/shortcodes/col.html)分开写，指定语言的时候在列那一级里设置一个普通的参数就可以了。然而在这个新的代码中，列是一个用来循环的列表，长度是不确定的，所以指定语言代码的参数也必须是能够跟它一起循环的列表，不然就没法一一对应了。

那么问题来了，怎么写呢？

经过了一整天的尝试，我得出了以下两个解决方案。准确地说，是我很快地就得到了第一个方案，然后经过了一整天的尝试，终于得到了第二个（我更喜欢的）方案。

#### 方案一

这个方案就是简单粗暴地把所有参数都看作语言代码参数，不允许其它参数的存在，这样产生的参数就会自然地形成一个列表。当然，如果多写了一两个，由于循环时参照的是列的索引，也不会有任何问题。

Shortcode 代码：

```go-html-template {hl_lines=[2,5,6]}
{{ $cols := split .Inner "||" }}
{{ $lang := .Params }}

<div class="row">
{{ range $indCol,$col := $cols }}
   <div class="column" {{ with $lang }} lang="{{ index $lang $indCol }}"{{ end }}>
   {{ . | $.Page.RenderString (dict "display" "block") }}
   </div>
{{ end }}
</div>
```

使用：

```go-html-template
{{</* colx zh-Hans en ja */>}}
你好世界
||
Hello world
||
こんにちは
{{</* /colx */>}}
```

结果：

{{< colx zh-Hans en ja >}}
你好世界
||
Hello world
||
こんにちは
{{< /colx >}}

#### 方案二

这个方案的原理是用户输入一串由某种分隔符组合在一起的文本，再在定义参数时分开使之成为列表。这么看来似乎是非常明显的解决方案，但我一开始并没有意识到，如果直接在使用 shortcode 时用户输入一个列表，Hugo 是认不出来的。下详。

Shortcode 代码：

```go-html-template {hl_lines=[2,3]}
{{ $cols := split .Inner "||" }}
{{ $lang := .Get "lang" | default ( .Get 0 ) }}
{{ $lang  = split $lang "," }}

<div class="row">
{{ range $indCol,$col := $cols }}
   <div class="column" {{ with $lang }} lang="{{ index $lang $indCol }}"{{ end }}>
   {{ . | $.Page.RenderString (dict "display" "block") }}
   </div>
{{ end }}
</div>
```

使用：（都不能有空格）

```go-html-template
{{</* cols lang="zh-Hans,en,ja" */>}}  {{/* lang= 可省略 */}}
你好世界
||
Hello world
||
こんにちは
{{</* /cols */>}}
```

结果：

{{< cols "zh-Hans,en,ja" >}}
你好世界
||
Hello world
||
こんにちは
{{< /cols >}}

#### 用户输入列表的问题

首先，不能输入含有空格的没有被引号括起来的东西，比如 `lang=[zh en]`，因为，第一，不能输入没有被引号括起来的 `[`（就这点而言，`lang=[zh,en]`也一样），第二，参数默认以空格分隔，即使能输入，这也会变成好几个（数量不确定的）参数。（其实似乎也可以用 `$cols` 的长度去……但是这实在太麻烦了。）

其次，一切用引号括起来的参数都会被认为是纯文本，因此如果输入 `lang="[zh en]"`（或 `lang="[zh,en]"`），那么它在 shortcode 里看起来跟正常的列表长得一模一样，直到您去 `{{ index "[zh en]" 0 }}`，得到 `91`。`91` 是什么呢？没错，`[` 的 [ASCII 代码](https://en.wikipedia.org/wiki/ASCII)。也就是说，您得到了一个长度为 7 的纯文本，它的第一项是 `91`，第二项是 `122`（！）。（同样地，`lang="zh,en"` 在经过 `split` 处理之前，第一项是 `122`。）  
在 shortcode 代码中，可以通过写 Golang 方程的方式确认这一点，但在写博文的时候是没用的：`{{ printf "%T" "[zh en]" }}`，得到 `string`。谁能想到呢？

如果输入 `lang="zh en"`，然后 `{{ $lang := .Get "lang" }} {{ $lang := slice $lang }}`，就会得到一个看起来又长得没错的列表：`[zh en]`，但它的长度为 1，第一项是 `zh en`。

总结就是，任何情况下，都不能直接输入列表作为单独一个参数。

作为参考，在 shortcode 里一个正常的列表长这样：（注释是渲染出来的网页内容）

```go-html-template
{{ slice "zh" "en" }}
{{/* [zh en] */}}

{{ index ( slice "zh" "en" ) 0 }}
{{/* zh */}}

{{ printf "%T" ( slice "zh" "en" ) }}
{{/* []string <-- 列表 */}}
```


## 编写

<time>2023-12-01</time> 编辑：本节原本的内容作废，[点这里回顾](https://github.com/loikein/blog-hugo/blob/41fa507acea95c099bf15d572b1bcb20c3902543/content/posts/2023-01-26-deep-dive-hugo-shortcodes.md?plain=1#L190)。我为此新写了（半篇）博文，链接：[续・深入探究 Hugo 短代码：我今天还就非得把这个脚注写出来不可#空格太多](/posts/2023-11-22-deep-dive-hugo-shortcodes-revisit/#%e5%9b%be%e7%89%87%e7%a9%ba%e6%a0%bc%e5%a4%aa%e5%a4%9a)


## 两种调用方式

<time>2023-12-01</time> 编辑：本节原本的内容作废，[点这里回顾](https://github.com/loikein/blog-hugo/blob/41fa507acea95c099bf15d572b1bcb20c3902543/content/posts/2023-01-26-deep-dive-hugo-shortcodes.md?plain=1#L201)。我为此新写了（另外半篇）博文，链接：[续・深入探究 Hugo 短代码：我今天还就非得把这个脚注写出来不可#短代码分隔符](/posts/2023-11-22-deep-dive-hugo-shortcodes-revisit/#%e8%84%9a%e6%b3%a8%e7%9f%ad%e4%bb%a3%e7%a0%81%e5%88%86%e9%9a%94%e7%ac%a6)


## 在任何地方正确渲染 Markdown 内容（几乎）

<!-- update (?): [markdown footnotes don't work within columns shortcode · Issue #10203 · gohugoio/hugo](https://github.com/gohugoio/hugo/issues/10203) -->

<!-- ok -->

文档：

- [markdownify | Hugo](https://gohugo.io/functions/markdownify/)
- [.RenderString | Hugo](https://gohugo.io/functions/renderstring/)

您可能会想这不就是一个 `markdownify` 的事儿吗？直到您看到了这两段话：

{{< quote
cite=`[markdownify | Hugo](https://gohugo.io/functions/markdownify/)` >}}
To keep the wrapping `p` tags for a single paragraph, use the [`.Page.RenderString`](https://gohugo.io/functions/renderstring/) method, setting the `display` option to `block`.

If the resulting HTML is two or more paragraphs, Hugo leaves the wrapping `p` tags in place.
{{< /quote >}}

所以如果只给 `markdownify` 一行字，它是不会加上 `<p>` tag 的，除非写一些[疯狂的丑陋的我很不喜欢的补丁](https://github.com/gohugoio/hugo/issues/7372#issuecomment-643115084)（而且我测试过了，链接中的代码也不能解决下面提到的脚注问题），或者依赖[不知道什么时候才能解决的 Issue](https://github.com/gohugoio/hugo/issues/5975)。但是

{{< quote
cite=`[.RenderString | Hugo](https://gohugo.io/functions/renderstring/)` >}}
`.RenderString` is a method on `Page`
{{< /quote >}}

所以直接写 `{{ .Inner.RenderString }}` 也是不可以的，甚至这个页面上的实例代码也根本无法单独成立（minimal reproducible example，MRE）。于是您在 Hugo Discourse 里查阅了半天，终于发现了：

{{< quote
author="[bep](https://discourse.gohugo.io/u/bep)"
cite=`[Questions about .RenderString - support - HUGO](https://discourse.gohugo.io/t/questions-about-renderstring/22448/5)` >}}
If you add options to the mix, I think it’s easier to reason about if you use the pipe syntax, e.g.

`{{ .Text | $.Page.RenderString $options }}`
{{< /quote >}}

虽然它依旧不是一个 MRE，但至少能提供一些头绪。

所以，最简单的实现方式就是编写 `md.html` 为：

```go-html-template
{{ .Inner | $.Page.RenderString (dict "display" "block") }}
```

然后在任何（任何，包括 raw HTML tag 里面）需要渲染 Markdown 的地方使用：

```go-html-template
{{</* md */>}}...{{</* /md */>}}
```

那么问题来了，虽然大部分时候这么设置没问题，但是偶尔（比如在 raw HTML tag 里）想渲染一小段话但是不加 `<p>`，可以吗？  
在另外一些[补课](https://kodify.net/hugo/functions/hugo-cond-function/)之后，发现只需要添加一个条件即可。修改 `md.html` 为：

```go-html-template
{{ $block := .Get "block" | default "true" }}
{{ $optBlock := cond (ne $block "true") (dict "display" "inline") (dict "display" "block") }}
{{ .Inner | $.Page.RenderString $optBlock }}
```

（其实只定义 `$block` 应该也足够了，但那样最后一行就会要写一个很长的条件式，不方便读，所以我把条件额外拆成了一个变量。）  
然后在需要渲染 inline Markdown 的地方使用：

```go-html-template
{{</* md block="false" */>}}...{{</* /md */>}}
```

比如：

````go-html-template
{{</* fold */>}}
{{</* highlight */>}}
code
{{</* /highlight */>}}
{{</* md */>}}
markdown
{{</* /md */>}}
{{</* figure … */>}}
{{</* /fold */>}}
````

{{< fold "什么，" >}}
{{< highlight plaintext >}}
I'm free!
{{< /highlight >}}

{{< md >}}
**我~~免费~~自由了！** [^1]

[^1]: 下次一定。
{{< /md >}}

{{< figure folder="sticker" name="shocked.png" alt="I did not understand but I was shocked" h="200px" >}}
{{< /fold >}}

两年过去了，现在您终于（！）可以自由自在地写 Markdown 了。除了，您已经看见了，没法写与整篇文章保持一致的脚注[^10]，单层也不行，换成 `%` 括号也不行。

[^10]: 就像这样。


### 例外可能之一：脚注

以下几个例子中，要不完全无法生成脚注，要不生成的脚注排序范围仅为当前 shortcode，因此一篇文章里会出现多个 ID 为 1 的脚注，导致链接全部失效。

代码 1：

```go-html-template
{{</* md */>}}
**我~~免费~~自由了！** [^2]

[^2]: 再下次一定。
{{</* /md */>}}
```

效果 1：

{{< md >}}
**我~~免费~~自由了！** [^2]

[^2]: 再下次一定。
{{< /md >}}

代码 2：

```go-html-template
{{</* md */>}}
**我~~免费~~自由了！** [^3]
{{</* /md */>}}

[^3]: 再再下次一定。
```


效果 2：

{{< md >}}
**我~~免费~~自由了！** [^3]
{{< /md >}}

[^3]: 再再下次一定。

代码 3：

```go-html-template
{{%/* md */%}}
**我~~免费~~自由了！** [^4]

[^4]: 再再再下次一定。
{{%/* /md */%}}
```

效果 3：

{{% md %}}
**我~~免费~~自由了！** [^4]

[^4]: 再再再下次一定。
{{% /md %}}


代码 4：

```go-html-template
{{%/* md */%}}
**我~~免费~~自由了！** [^4]
{{%/* /md */%}}

[^5]: 算了，没救了。
```

效果 4：

{{% md %}}
**我~~免费~~自由了！** [^5]
{{% /md %}}

[^5]: 算了，没救了。

### 例外可能之二：小标题

<time>2023-12-01</time> 编辑：重写本小节。[点这里回顾初始版本](https://github.com/loikein/blog-hugo/blob/41fa507acea95c099bf15d572b1bcb20c3902543/content/posts/2023-01-26-deep-dive-hugo-shortcodes.md?plain=1#L453)。

一个我才意识到的事实是，下面的例子在这个博客里没有问题，是因为 Diary 主题用的页面目录并不是 Hugo 自带的目录（`{{ .TableOfContents }}`），而是原作者自己重新写了一个[目录布局文件](https://github.com/loikein/hugo-theme-diary/blob/main/layouts/partials/toc.html)。而如果一个主题确实使用了 Hugo 自带的目录，那么就会出现各种各样的问题。最近我在摆弄另外一个 Hugo 网站（wiki）的时候就碰到了。

由于在本网站上无法展示失败例子，我找了一篇别人写的博客，详细地解说了各种失败例和唯一能够成功的方法，链接如下：
[A hack way to use shortcode headings in the Hugo TOC](https://wellshapedwords.com/posts/shortcode-headings-in-toc/)（[存档](https://web.archive.org/web/20231125172218/https://wellshapedwords.com/posts/shortcode-headings-in-toc/)）。

唯一能够成功的方法即是，在使用 `%%` 调用的短代码里，用 Markdown 语法写标题，那么标题就能成功加入 `{{ .TableOfContents }}`。

这包含了两种情况，首先，如果想在短代码的布局文件中添加每次调用时都自动产生的标题，必须用 Markdown 语法写（`## ...`），并始终以 `%%` 方式调用（例外情况：跟脚注一样，作为嵌套内层时，需要以 `<>` 方式调用；而嵌套最外层需要以 `%%` 调用，并且不包含 `markdownify` 或 `RenderString` 方程）。  
其次，如果想在使用短代码时，在 Markdown 内包含标题，只能使用以 `%%` 方式调用的短代码。

我据此修改的代码在这里：[loikein/hugo-book/layouts/shortcodes/section2.html](https://github.com/loikein/hugo-book/blob/master/layouts/shortcodes/section2.html#L8)。至于更具体的解释和成功失败对比例子，请看本系列的下一篇文章（很明显，使用的例子是脚注而不是目录）：[续・深入探究 Hugo 短代码：我今天还就非得把这个脚注写出来不可](/posts/2023-11-22-deep-dive-hugo-shortcodes-revisit/#%e8%84%9a%e6%b3%a8%e7%9f%ad%e4%bb%a3%e7%a0%81%e5%88%86%e9%9a%94%e7%ac%a6)

<!-- 在 [Hugo shortcodes with markdown, gotchas | Nelis Oostens](https://oostens.me/posts/hugo-shortcodes-with-markdown-gotchas/) 一文中有详细的总结， -->

#### 原本的成功例子

代码 1：

```go-html-template
{{</* md */>}}
#### Heading1

Some text...
{{</* /md */>}}
```

效果 1：

{{< md >}}
#### Heading1

Some text...
{{< /md >}}

代码 2：

```go-html-template
{{</* fold "Is this real life?" */>}}
{{</* md */>}}
#### Heading2

Some text...
{{</* /md */>}}
{{</* /fold */>}}
```

效果 2：

{{< fold "Is this real life?" >}}
{{< md >}}
#### Heading2

Some text...
{{< /md >}}
{{< /fold >}}

代码 3：（新增）

```go-html-template
{{</* fold "Is this real life?" */>}}
{{</* md */>}}
### Heading3

Some text...
{{</* /md */>}}
{{</* /fold */>}}
```

效果 3：

{{< fold "Is this real life?" >}}
{{< md >}}
### Heading3

Some text...
{{< /md >}}
{{< /fold >}}


<!-- ## 结语

虽然我也不是每天都要用到这些堪称钻牛角尖的边界情况，但是它们确实存在，并且没法简单地绕过去，就像 [LaTeX](/posts/2023-02-28-hugo-latex-shenanigans/) 一样。路还远着呢。まだまだだね。
 -->

<!-- [ii.com: Hugo’s Markup Languages: AsciiDoc, HTML, Markdown, Org-mode, Pandoc, and reStructuredText](https://www.ii.com/hugo-markup-languages/) -->
