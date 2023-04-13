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


## 参数

### 常规参数

我最喜欢看的 Hugo 自带 shortcodes 代码之一是 [figure.html](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/shortcodes/figure.html)，对照着它修改自己的 [figure.html](https://github.com/loikein/hugo-theme-diary/blob/main/layouts/shortcodes/figure.html) 是我学习自定义 Hugo 的起点。

容易忘记的东西主要是参数可以这么定义：（flexible / positional or named parameters）

```go
{{ $var := .Get "var" | default (.Get 0) }}
{{ $var := .Get "var" | default "something" }}
```

也可以这么定义：（positional parameters）

```go
{{ $var := .Get 0 }}
{{ $var := index .Params 0 }}
```

也可以在不需要设置默认值的时候跳过定义直接使用：（named parameters）

```go
{{ .Get "var" }}... {{ end }}        // 必须参数
{{ with .Get "var" }}...{{ end }}    // 可选参数
{{ if .Get "var" }}... {{ end }} 
```

但是不能在同一个 shortcode 的定义部分中混用 positional 和 named 参数。

自闭合标签中的一切用户输入内容都算作 `.Params`，没有 `.Inner`。

以及，可以通过写 ``` `` ``` 来[输入包含换行的参数](https://gohugo.io/content-management/shortcodes/#shortcodes-with-raw-string-parameters)或者一些难以转义的参数（比如 `\`）。


### 使用列表作为单个参数

在更新我的[分栏 shortcode](/playground/#two-column-layout) 时遇到了这个问题。

[这个讨论串](https://discourse.gohugo.io/t/multiple-markdown-text-sections/4238/9)里有一个（在写博文时）非常简洁的分栏 shortcode，我最近有需求，因此仔细研究了一下。

原文中的代码是这样的：

```go
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

```go {hl_lines=[2,5,6]}
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

```html
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

```go {hl_lines=[2,3]}
{{ $cols := split .Inner "||" }}
{{ $lang := .Get "lang" | default ( .Get 0 ) }}
{{ $lang := split $lang "," }}

<div class="row">
{{ range $indCol,$col := $cols }}
   <div class="column" {{ with $lang }} lang="{{ index $lang $indCol }}"{{ end }}>
   {{ . | $.Page.RenderString (dict "display" "block") }}
   </div>
{{ end }}
</div>
```

使用：（都不能有空格）

```html
{{</* cols "zh-Hans,en,ja" */>}} <!-- 或者 -->
{{</* cols lang="zh-Hans,en,ja" */>}}
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

```go
{{ slice "zh" "en" }}
// [zh en]

{{ index ( slice "zh" "en" ) 0 }}
// zh

{{ printf "%T" ( slice "zh" "en" ) }}
// []string <-- 列表
```


## 编写

<!-- ok -->

问题：该用 `{{- .Inner -}}` 还是 `{{- .Inner }}` 还是 `{{ .Inner -}}` 还是 `{{ .Inner }}`？

参考： [Introduction to Hugo Templating | Hugo](https://gohugo.io/templates/introduction/#whitespace)

简而言之，在左边添加 `-` 就是删除 `.Inner` 以左的空白字符，以此类推。（但似乎不会影响括号内的空白字符，比如 [`{{- if ... -}}` 后的换行](https://github.com/loikein/hugo-book/commit/dc180e04588a3aa2ec5574a04f36613aecc7212d)。）在 Partial 里也是一样的。


## 两种调用方式

<!-- ok -->

问题：该用 `{{</* shortcode */>}}…{{</* /shortcode */>}}` 还是 `{{%/* shortcode */%}}…{{%/* /shortcode */%}}` ？

参考： [.Inner in paired shortcodes should be (markdown) rendered · Issue #185 · gohugoio/hugo](https://github.com/gohugoio/hugo/issues/185#issuecomment-340534318)

前者标签中的内容（`.Inner`）会直接显示，完全不经过 Markdown 渲染器（目前默认为 [Goldmark](https://github.com/yuin/goldmark)），而后者的内容会被 Markdown 渲染。  
这种功能区分虽然很有趣，但有时候可能会产生预料之外的问题。

试对比嵌套使用时，两种不同调用方式的渲染结果：

其一：

````html
{{</* fold */>}}
```lang
code
```
{{</* figure … */>}}
{{</* /fold */>}}
````

{{< fold "外层使用 `{{</* fold */>}}`，内层混合使用 Markdown 代码框及 `{{</* figure */>}}`（代码框渲染错误，图片渲染正确）" >}}
````plaintext
Hello world
````

{{< figure folder="sticker" name="shocked.png" alt="I did not understand but I was shocked" h="200px" >}}
{{< /fold >}}

其二：

````html
{{%/* fold */%}}
```lang
code
```
{{</* figure … */>}}
{{%/* /fold */%}}
````

{{% fold "外层使用 `{{%/* fold */%}}`，内层混合使用 Markdown 代码框及 `{{</* figure */>}}`（代码框渲染正确，图片渲染错误）" %}}
````plaintext
I'm fine thank you
````

{{< figure folder="sticker" name="shocked.png" alt="I did not understand but I was shocked" h="200px" >}}
{{% /fold %}}

这个问题正是促使我想要写这篇文章，以及先前[某次技术性更新](/changelog/#2023-01-11-)改了又改的原因。

目前为止我发现的最好的解决方案是：外层一律使用 `{{</* code */>}}`，内层一律使用 shortcodes。

其三：

````html
{{</* fold */>}}
{{</* highlight lang */>}}
code
{{</* /highlight */>}}
{{</* figure … */>}}
{{</* /fold */>}}
````

{{< fold "外层使用 `{{</* fold */>}}`，内层使用 `{{</* highlight */>}}` 及 `{{</* figure */>}}`（代码框及图片均渲染正确）" >}}
{{< highlight plaintext >}}
And you?
{{< /highlight >}}

{{< figure folder="sticker" name="shocked.png" alt="I did not understand but I was shocked" h="200px" >}}
{{< /fold >}}

那么您可能会想问了，外层用了 `{{</* shortcode */>}}`，但是又想在内层写普通的 Markdown 内容的时候怎么办呢？问得好，这又是一个全新的兔子洞。


## 在任何地方正确渲染 Markdown 内容（几乎）

<!-- ok -->

文档：

- [markdownify | Hugo](https://gohugo.io/functions/markdownify/)
- [.RenderString | Hugo](https://gohugo.io/functions/renderstring/)

您可能会想这不就是一个 `markdownify` 的事儿吗？直到您看到了这两段话：

> To keep the wrapping `p` tags for a single paragraph, use the [`.Page.RenderString`](https://gohugo.io/functions/renderstring/) method, setting the `display` option to `block`.
> 
> If the resulting HTML is two or more paragraphs, Hugo leaves the wrapping `p` tags in place.
> 
> <footer>— <cite>{{< md block="false" >}}[markdownify | Hugo](https://gohugo.io/functions/markdownify/){{< /md >}}</cite></footer>

所以如果只给 `markdownify` 一行字，它是不会加上 `<p>` tag 的，除非写一些[疯狂的丑陋的我很不喜欢的补丁](https://github.com/gohugoio/hugo/issues/7372#issuecomment-643115084)（而且我测试过了，链接中的代码也不能解决下面提到的脚注问题），或者依赖[不知道什么时候才能解决的 Issue](https://github.com/gohugoio/hugo/issues/5975)。但是

> `.RenderString` is a method on `Page`
> 
> <footer>— <cite>{{< md block="false" >}}[.RenderString | Hugo](https://gohugo.io/functions/renderstring/){{< /md >}}</cite></footer>

所以直接写 `{{ .Inner.RenderString }}` 也是不可以的，甚至这个页面上的实例代码也根本无法单独成立（minimal reproducible example，MRE）。于是您在 Hugo Discourse 里查阅了半天，终于发现了：

> If you add options to the mix, I think it’s easier to reason about if you use the pipe syntax, e.g.
> 
> `{{ .Text | $.Page.RenderString $options }}`
> 
> <footer>— <cite>{{< md block="false" >}}[bep](https://discourse.gohugo.io/u/bep) on [Questions about .RenderString - support - HUGO](https://discourse.gohugo.io/t/questions-about-renderstring/22448/5){{< /md >}}</cite></footer>

虽然它依旧不是一个 MRE，但至少能提供一些头绪。

所以，最简单的实现方式就是编写 `md.html` 为：

```go
{{ .Inner | $.Page.RenderString (dict "display" "block") }}
```

然后在任何（任何，包括 raw HTML tag 里面）需要渲染 Markdown 的地方使用：

```text
{{</* md */>}}...{{</* /md */>}}
```

那么问题来了，虽然大部分时候这么设置没问题，但是偶尔（比如在 raw HTML tag 里）想渲染一小段话但是不加 `<p>`，可以吗？  
在另外一些[补课](https://kodify.net/hugo/functions/hugo-cond-function/)之后，发现只需要添加一个条件即可。修改 `md.html` 为：

```go
{{ $block := .Get "block" | default "true" }}
{{ $optBlock := cond (ne $block "true") (dict "display" "inline") (dict "display" "block") }}
{{ .Inner | $.Page.RenderString $optBlock }}
```

（其实只定义 `$block` 应该也足够了，但那样最后一行就会要写一个很长的条件式，不方便读，所以我把条件额外拆成了一个变量。）  
然后在需要渲染 inline Markdown 的地方使用：

```text
{{</* md block="false" */>}}...{{</* /md */>}}
```

比如：

````html
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

```text
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

```text
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

```text
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

```text
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

但其实使用我的代码并没有这个问题。

这句话真的很好笑：

> It’s crucial to have 1-3 space before the first `{{`. zero or four spaces won’t work. But I’m not sure why!
> 
> <footer>— <cite>{{< md block="false" >}}[lar](https://discourse.gohugo.io/u/lar) on [Shortcode - markdown vs html vs table of content - support - HUGO](https://discourse.gohugo.io/t/shortcode-markdown-vs-html-vs-table-of-content/18282/5){{< /md >}}</cite></footer>


<!-- 在 [Hugo shortcodes with markdown, gotchas | Nelis Oostens](https://oostens.me/posts/hugo-shortcodes-with-markdown-gotchas/) 一文中有详细的总结， -->

代码 1：

```text
{{</* md */>}}
#### Heading1

Some text...

#### Heading2

More text...
{{</* /md */>}}
```

效果 1：

{{< md >}}
#### Heading1

Some text...

#### Heading2

More text...
{{< /md >}}

代码 2：

```text
{{</* fold "Is this real life?" */>}}
{{</* md */>}}
#### Heading3

Some text...

#### Heading4

More text...
{{</* /md */>}}
{{</* /fold */>}}
```

效果 2：

{{< fold "Is this real life?" >}}
{{< md >}}
#### Heading3

Some text...

#### Heading4

More text...
{{< /md >}}
{{< /fold >}}


<!-- ## 结语

虽然我也不是每天都要用到这些堪称钻牛角尖的边界情况，但是它们确实存在，并且没法简单地绕过去，就像 [LaTeX](/posts/2023-02-28-hugo-latex-shenanigans/) 一样。路还远着呢。まだまだだね。
 -->

<!-- [ii.com: Hugo’s Markup Languages: AsciiDoc, HTML, Markdown, Org-mode, Pandoc, and reStructuredText](https://www.ii.com/hugo-markup-languages/) -->
