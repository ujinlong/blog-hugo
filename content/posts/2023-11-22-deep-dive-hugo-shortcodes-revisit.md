---
title: "续・深入探究 Hugo 短代码：我今天还就非得把这个脚注写出来不可"
date: "2023-11-22T17:09:55Z"
# published: ""
# lastmod: ""
categories: ["编程笔记"]
tags: ["Hugo", "HTML", "Markdown"]
series:
    - "Deep dive into Hugo"
---
本文基于 `hugo v0.115.2+extended`，Markdown 渲染引擎为 `Goldmark`。

## 上回书说到……

Hugo 短代码嵌套不好使。

我一直很疑惑，明明有问题的一件事，为什么这个世界仿佛表现得好像没有这事儿一样呢？今天我终于发现了原因，很简单，没有多少人会像我这样大面积地（很可能是过度地）使用短代码，在里面放很长很长的内容，然后还要套一个特别复杂的 HTML，即使有也是自己默默写了默默用，根本不告诉别人。以至于上回书的时候，我犯了很多错，但根本不知道、也无从知道自己到底错在哪里，原理是什么。

我的意思是，噢我的朋友，从[这个博客的第一个 commit](https://github.com/loikein/blog-hugo/commit/a366ee17bcb383c1968443b81cf031be13116a32) 算起，我已经用了三年半的 Hugo 了，期间写过许多短代码，还改了好几个主题，却依然会出现这样的情况，这实在不能归结于我太懒没看文档。

在此我需要援引这篇文章作为借口：[Hugo's documen&shy;tation is bad - Sagar Behere](https://sagar.se/blog/hugo-documentation/)，我相信，如果文中提到的问题得到解决，那么本系列博文（已经发出的三篇，以及除了本文之外，还有两篇草稿）其实根本没有存在的必要。

偏题了。经过漫长的再次积累经验之后，我终于意识到，当时的失败，包含了两个完全不同的因素。


## 脚注：短代码分隔符

问题（再来一次）：该用 `{{</* shortcode */>}}…{{</* /shortcode */>}}` 还是 `{{%/* shortcode */%}}…{{%/* /shortcode */%}}` ？

最近我在做[摘抄](https://wiki.loikein.one/meta-life/quotes/einstein-the-world/)，您可以看到，在整个页面都被短代码塞满的夹缝里，我想写一个脚注。这曾经似乎是不可能的事情，我当时也放弃了，但是最近这个问答的出现，又给我带来了全新的希望：[Shortcode and footnotes - support - HUGO](https://discourse.gohugo.io/t/shortcode-and-footnotes/43832)。

简单来说，用 `<>` 调用的短代码，生成的结果会被直接原样（literal）复制到最终的网页上，如果包含 Markdown 代码的话需要手动添加 `markdownify` 或 `RenderString` 方程；而使用 `%%` 调用的结果则会被放回 Markdown 文档，然后跟文档里的其余内容一起过一遍 Markdown 引擎，再变成网页。

而有一些特殊 Markdown 元素，（目前为止只发现了脚注和标题，应该是因为影响到了整个页面的结构），如果放在短代码里，会引发一些奇怪的问题。关于标题，上一篇我的判断有误，现在已经重写了。


### 慎用 `markdownify`

如果用了，就会出现这样一种情况：如果脚注内容放在了短代码内，那么脚注就会紧跟着原文出现，而不是整个页面的最底下，导致排序和链接关系错乱。

如图，脚注 1 直接显示在了原文下方，而脚注 2 虽然正确显示在了页面底端（截图之外），但编号错误，并且一定会跳转到脚注 1。而且，即使从底端正确的脚注 2 向原文跳转，也会跳到原文 1。

{{< figure
name="2023-11-22-shortcodes-2-markdownify.png"
alt="Large amount of space in view page source"
h="500px" >}}

### 新的暂行解决方案

直到 Hugo 能判断到底用的是 `<>` 还是 `%%`（相关讨论：[1](https://discourse.gohugo.io/t/determine-which-shortcode-notation-was-used/36603)，[2](https://discourse.gohugo.io/t/any-way-to-determine-if-a-shortcode-delimiter-is-or/47182)），所有短代码我都会按照名字区分。名字后面没数字的使用 `<>`，名字后面带 2 的使用 `%%`。

愚蠢又高效，挺好。

您可能会问，那为什么还要设计专门为了如何调用的短代码，全部都做成通用的不好吗？很遗憾，我碰到了一些会失败的例子。比如说，

这样能成功渲染：

```html
{{</* md */>}} layout:

<span lang="en">{{ .Inner | $.Page.RenderString }}</span>
```

而这样就会整段变成纯代码：

```html
{{%/* md2 */%}} layout:

<span lang="en">{{ .Inner }}</span>
```

总之，因为我懒得每次用 `lang` 都得重新打一遍，所以分情况使用是必要的。

### 成功示例

本节展示：在不使用 `markdownify` 的前提下，脚注内容可以放在任何地方。

- 1 ~ 2：在使用单层短代码时，需要使用 `%%`；
- 3 ~ 6：<mark>在使用多层短代码时，中间的每一层都需要是为了使用 `%%` 调用而设计的短代码，并且使用 `<>` 调用；最外层需要以 `%%` 调用，并且不包含 `markdownify` 或 `RenderString` 方程。</mark>（参考答案：[Footnotes are not rendered as expected in nested shortcodes - support - HUGO](https://discourse.gohugo.io/t/footnotes-are-not-rendered-as-expected-in-nested-shortcodes/35165/3)为什么上次我没看到这个？我根本没意识到脚注是个特殊的东西。）

本节例子很多，如果您懒得全部观看，可以[按这里直接跳到下一节](#失败示例)。

代码 1：

```go-html-template
{{%/* md2 */%}}
**我~~免费~~自由了！** [^1]

[^1]: 人生真美好。
{{%/* /md2 */%}}
```

效果 1：

{{% md2 %}}
**我~~免费~~自由了！** [^1]

[^1]: 人生真美好。
{{% /md2 %}}

（备注：此处脚注无法跳转，是下一节里的几个失败示例导致的。把下一节删掉就可以正常跳转了。）

代码 2：

```go-html-template
{{%/* md2 */%}}
**我~~免费~~自由了！** [^2]
{{%/* /md2 */%}}

[^2]: 人生真美好。
```

效果 2：

{{% md2 %}}
**我~~免费~~自由了！** [^2]
{{% /md2 %}}

[^2]: 人生真美好。


代码 3：

````go-html-template
{{%/* fold */%}}
{{</* md2 */>}}
**我~~免费~~自由了！** [^3]
{{</* /md2 */>}}
{{%/* /fold */%}}

[^3]: 人生真美好。
````

效果 3：

{{% fold %}}
{{< md2 >}}
**我~~免费~~自由了！** [^3]
{{< /md2 >}}
{{% /fold %}}

[^3]: 人生真美好。

代码 4：

````go-html-template
{{%/* fold */%}}
{{</* md2 */>}}
**我~~免费~~自由了！** [^4]
{{</* /md2 */>}}

[^4]: 人生真美好。
{{%/* /fold */%}}
````

效果 4：

{{% fold %}}
{{< md2 >}}
**我~~免费~~自由了！** [^4]
{{< /md2 >}}

[^4]: 人生真美好。
{{% /fold %}}


代码 5：

````go-html-template
{{%/* fold */%}}
{{</* md2 */>}}
**我~~免费~~自由了！** [^5]

[^5]: 人生真美好。
{{</* /md2 */>}}
{{%/* /fold */%}}
````

效果 5：

{{% fold %}}
{{< md2 >}}
**我~~免费~~自由了！** [^6]

[^6]: 人生真美好。
{{< /md2 >}}
{{% /fold %}}


代码 6：

````go-html-template
{{%/* fold */%}}
{{</* cols2 */>}}
{{</* md2 */>}}
**我~~免费~~自由了！** [^5]

[^5]: 人生真美好。
{{</* /md2 */>}}
||
test
{{</* /cols2 */>}}
{{%/* /fold */%}}
````

效果 6：

{{% fold %}}
{{< cols2 >}}
{{< md2 >}}
**我~~免费~~自由了！** [^7]

[^7]: 人生真美好。
{{< /md2 >}}
||
test
{{< /cols2 >}}
{{% /fold %}}

### 失败示例

本节用于展示：

- 1 ~ 2：使用了 `.Page.RenderString` 的短代码，无论使用任何分隔符，都不支持脚注。同上回书。
- 3：本示例连文本格式都没有了，因为使用 `<>` 调用的短代码，除非使用 `markdownify` 或 `RenderString` 方程，是不会拿去给 Markdown 引擎渲染的。然而，即使在 `md2` 里添加 `markdownify`，使用 `<>` 调用时也只会得到跟上面 1 或 2 同样的效果，还会引发前面提到过的链接错乱问题。
- 4 ~ 7：嵌套短代码时，内层使用 `%%` 调用会导致脚注渲染失败。
    - 脚注文本放在内层时，脚注紧跟原文出现，使链接错乱；
    - 脚注文本放在外层（以及整个短代码之外，省略），脚注根本不会被渲染。

本节例子很多，如果您懒得全部观看，可以[按这里直接跳到下一节](#图片空格太多)。

代码 1：

````go-html-template
{{</* md */>}}
markdown
{{</* /md */>}}
````

效果 1:

{{< md >}}
**我~~免费~~自由了！** [^8]
{{< /md >}}

[^8]: 下次一定。

代码 2：

````go-html-template
{{%/* md */%}}
markdown
{{%/* /md */%}}
````

效果 2:

{{% md %}}
**我~~免费~~自由了！** [^9]
{{% /md %}}

[^9]: 下次一定。


代码 3：

````go-html-template
{{</* md2 */>}}
markdown
{{</* /md2 */>}}
````

效果 3:

{{< md2 >}}
**我~~免费~~自由了！** [^10]
{{< /md2 >}}

[^10]: 下次一定。

代码 4：

````go-html-template
{{</* fold */>}}
{{%/* md2 */%}}
**我~~免费~~自由了！** [^11]
{{%/* /md2 */%}}

[^11]: 下次一定。
{{</* /fold */>}}
````

效果 4：

{{< fold >}}
{{% md2 %}}
**我~~免费~~自由了！** [^11]
{{% /md2 %}}

[^11]: 下次一定。
{{< /fold >}}

代码 5：

````go-html-template
{{</* fold */>}}
{{%/* md2 */%}}
**我~~免费~~自由了！** [^13]

[^13]: 下次一定。
{{%/* /md2 */%}}
{{</* /fold */>}}
````

效果 5：

{{< fold >}}
{{% md2 %}}
**我~~免费~~自由了！** [^13]

[^13]: 下次一定。
{{% /md2 %}}
{{< /fold >}}

代码 6：

````go-html-template
{{%/* fold */%}}
{{%/* md2 */%}}
**我~~免费~~自由了！** [^12]
{{%/* /md2 */%}}

[^12]: 下次一定。
{{%/* /fold */%}}
````

效果 6：

{{% fold %}}
{{% md2 %}}
**我~~免费~~自由了！** [^12]
{{% /md2 %}}

[^12]: 下次一定。
{{% /fold %}}

代码 7：

````go-html-template
{{%/* fold */%}}
{{%/* md2 */%}}
**我~~免费~~自由了！** [^14]

[^14]: 下次一定。
{{%/* /md2 */%}}
{{%/* /fold */%}}
````

效果 7：

{{% fold %}}
{{% md2 %}}
**我~~免费~~自由了！** [^14]

[^14]: 下次一定。
{{% /md2 %}}
{{% /fold %}}


## 图片：空格太多

还是从这个问答开始：[Shortcode and footnotes - support - HUGO](https://discourse.gohugo.io/t/shortcode-and-footnotes/43832)

这次要看代码了，代码在这里：[jmooring/hugo-testing/layouts/shortcodes/quotebox.html at hugo-forum-topic-43832](https://github.com/jmooring/hugo-testing/blob/hugo-forum-topic-43832/layouts/shortcodes/quotebox.html)，为了解释方便起见，我引用一下关键的几行。

```go-html-template {linenos=table,hl_lines="1-3 6",linenostart=19}
{{- $pubtitle     := or (.Get "pubtitle") (.Get "attribto")   -}}
{{- $publink      := or (.Get "publink")  (.Get "attriblink") -}}
{{- $pubrel       := or (.Get "pubrel")   (.Get "attribrel")  -}}
<figure class="quote_box {{ with $boxstyle }}{{ . }}{{ end }} {{ with $boxcolour }}{{ . }}{{ end }}">
  <blockquote class="{{ with $qmarkstyle }}{{ . }}{{ end }}"{{ with $citelink }} cite="{{ . }}"{{ end }}>
    {{ .Inner -}}
  </blockquote>
```

首先，注意所有变量定义（和注释，在引用外）都使用了 `{{- ... -}}`，也就是删去前后的所有空格。

其次，注意高亮的第 24 行，`{{ .Inner -}}` 后面加了一个 `-`，在它之后起新行，这行的内容是一个前面带了两个空格的 `</blockquote>`。

在 [CommonMark Spec](https://spec.commonmark.org/0.30/) 里，对于隐式代码块（没有用 ` ``` ` 隔开）是[这样定义](https://spec.commonmark.org/0.30/#indented-code-blocks)的：（下划线是我加的）

{{< md lang=en >}}
> An [indented code block](https://spec.commonmark.org/0.30/#indented-code-block) is composed of one or more [indented chunks](https://spec.commonmark.org/0.30/#indented-chunk) separated by blank lines. An [indented chunk](https://spec.commonmark.org/0.30/#indented-chunk) is <u>a sequence of non-blank lines, each preceded by four or more spaces of indentation</u>. The contents of the code block are the literal contents of the lines, including trailing [line endings](https://spec.commonmark.org/0.30/#line-ending), minus four spaces of indentation. An indented code block has no [info string](https://spec.commonmark.org/0.30/#info-string).
{{< /md >}}

这段话的意思是，在 Markdown 里写：

```md
  这行字前面有两个空格

   这行字前面有三个空格

    这行字前面有四个空格
```

会得到：

  这行字前面有两个空格

   这行字前面有三个空格

    这行字前面有四个空格

而对于能直接当作 HTML 的代码是[这样定义](https://spec.commonmark.org/0.30/#html-blocks)的：

{{< md lang=en >}}
> 6. **Start condition:** <u>line begins the string `<` or `</`</u> followed by one of the strings (case-insensitive) `address`, `article`, `aside`, `base`, `basefont`, `blockquote`, `body`, `caption`, `center`, `col`, `colgroup`, `dd`, `details`, `dialog`, `dir`, `div`, `dl`, `dt`, `fieldset`, `figcaption`, `figure`, `footer`, `form`, `frame`, `frameset`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `head`, `header`, `hr`, `html`, `iframe`, `legend`, `li`, `link`, `main`, `menu`, `menuitem`, `nav`, `noframes`, `ol`, `optgroup`, `option`, `p`, `param`, `section`, `source`, `summary`, `table`, `tbody`, `td`, `tfoot`, `th`, `thead`, `title`, `tr`, `track`, `ul`, followed by a space, a tab, the end of the line, the string `>`, or the string `/>`.  
**End condition:** line is followed by a [blank line](https://spec.commonmark.org/0.30/#blank-line).
> 7. **Start condition:** line begins with a complete [open tag](https://spec.commonmark.org/0.30/#open-tag) (with any [tag name](https://spec.commonmark.org/0.30/#tag-name) other than `pre`, `script`, `style`, or `textarea`) or a complete [closing tag](https://spec.commonmark.org/0.30/#closing-tag), followed by zero or more spaces and tabs, followed by the end of the line.  
**End condition:** line is followed by a [blank line](https://spec.commonmark.org/0.30/#blank-line).
{{< /md >}}

大概地讲，这段话的意思是，在 Markdown 里写：

```md
<p><div style="border: 5px maroon solid; display: inline-block;">test</div></p>
```

会得到：（需要打开 unsafe 选项，详见[文档](https://gohugo.io/getting-started/configuration-markup/)）

<p><div style="border: 5px maroon solid; display: inline-block;">test</div></p>

也就是说，**理论上**，只有段前超过四个空格才会被当作隐式代码块，而顶格就是 HTML 的会被原封不动地复制到网页上。然而，这个定义只针对纯 Markdown，而一旦加入短代码，事情就会起变化。

需要先描述一下背景。如果您像我一样常常有查看网页源代码的癖好的话（又来了），就会知道，使用浏览器开发者工具看代码（inspect）和直接查看源代码（view page source）的体验是完全不一样的。在开发者工具的代码框里，所有代码都是排版好的，查看和搜索都非常方便，但这不是真正的网页源代码。真正的网页源代码，有时候会有各种奇怪的空格和空行，本来可以连在一起的分开写，本来可以分开写的连在一起，这一切开发者工具都不会展示给您看，它会以易读性为目的，对整个网页源代码重新排版一次。

以前我就在这里栽过跟头，现在又栽一次。我没有这么深入地用过别的 SSG，不清楚情况，但至少在 Hugo 里，事情是这样的，在写短代码等布局文件（layout）时，只要一个不小心，就可能会引入*大量*多余的空格，如图所示：

{{< figure
name="2023-11-22-shortcodes-2-whitespace.png"
alt="Large amount of space in view page source" >}}

很多时候，您甚至根本不知道有些空格是从哪里来的，所以才需要时不时写一个减号手动控制；然而减号不能多写，如果用在了本来不应该用的地方也会出问题，比如把 Markdown 里本来有的空格给删掉了。

我得到了这么一个结论：有些本来能用的短代码，放进嵌套里就用不了了，正是因为在嵌套的过程中引入了多余的空格。

就是在这样的前提下，再来看一遍我[原本的 `figure.html`](https://github.com/loikein/hugo-theme-diary/blob/7151027e21/layouts/shortcodes/figure.html)，就会发现问题：没有经过控制的空格太多了。为什么有些可以写减号的地方没有写？为什么有些可以两边减号的地方只有一边？原因很简单：没出毛病就别乱折腾（if it ain't broke, don't fix it）。

好嘛，那出毛病了就折腾吧。多写了一些减号，现在能用了。


## 最终成功示例

代码：

````go-html-template
{{%/* fold */%}}
{{</* highlight */>}}
code
{{</* /highlight */>}}

{{</* md2 */>}}
markdown
{{</* /md2 */>}}

{{</* figure … */>}}
{{%/* /fold */%}}
````

效果:

{{% fold "什么，" %}}
{{< highlight plaintext >}}
I'm free!
{{< /highlight >}}

{{< md2 >}}
**我~~免费~~自由了！** [^5]
{{< /md2 >}}

{{< figure folder="sticker" name="shocked.png" alt="I did not understand but I was shocked" h="200px" >}}
{{% /fold %}}

[^5]: 人生真美好。


## 一些（不太）相关的 Hugo 方程

### markdownify

文档：[transform.Markdownify | Hugo](https://gohugo.io/functions/transform/markdownify/)

罪魁祸首之一。

### RenderString

文档：[RenderString | Hugo](https://gohugo.io/methods/page/renderstring/)

罪魁祸首之二。文档最近[更新](https://github.com/gohugoio/hugo/issues/5975#issuecomment-1826205278)了，加入了我上次之后在 Issue 里建议的例子，可读性有所提高。

### htmlEscape

文档：[transform.HTMLEscape | Hugo](https://gohugo.io/functions/transform/htmlescape/)

转义。

> - `&` → `&amp;`
> - `<` → `&lt;`
> - `>` → `&gt;`
> - `'` → `&#39;`
> - `"` → `&#34;`

### htmlUnescape

文档：[transform.HTMLUnescape | Hugo](https://gohugo.io/functions/transform/htmlunescape/)

把转义过的字符转回去。

### safeHTML

文档：[safe.HTML | Hugo](https://gohugo.io/functions/safe/html/?search-input=htmlEscape)

> Declares the given string as a safeHTML string.

也就是说，这个方程只做一件事情，就是把一段代码标记为 `safe`。所以如果您已经打开了 `unsafe` 选项（您都在看本文了，您肯定打开了），那么这个方程就没有什么实际意义。我目前唯一发现的用途是在获取和展示远程文件的时候，跟 `htmlUnescape` 合并使用：（[完整代码点这里](https://github.com/loikein/hugo-book/blob/master/layouts/shortcodes/gist.html#L27)）

```go-html-template
{{ printf "%s" $getJSONfile.content | htmlUnescape | safeHTML }}
```
