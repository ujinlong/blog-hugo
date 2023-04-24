---
title: "深入探究 Hugo 代码高亮"
date: "2023-01-10T16:45:05Z"
# published: ""
# lastmod: ""
categories: ["编程笔记"]
tags: ["Hugo", "CSS"]
series:
  - "Deep dive into Hugo"
# description: ""
css:
  file: "dracula.css"
---
[曾经](/posts/2022-08-11-hugo-copy-code-button/)我写道「我还没搞清楚怎么在切换浅色／深色模式时自动切换代码高亮配色」，这个状态从 2021 年搬到 Hugo 持续至今。昨天在网上逛一些有主题切换功能的独立博客的时候又想起来有这么个待办事项，终于认真看了一下人家的 HTML 和 CSS 的结构，以及复习了一下（从没认真读完过的） [Hugo Syntax Highlighting 文档](https://gohugo.io/content-management/syntax-highlighting/) ——五雷轰顶，幡然醒悟，发现我就是个彻头彻尾的蠢货。

无所谓，我会自己鄙视我自己。

在这样的背景下，决定撰文一篇，记录一下我的领悟，顺便为与前天之前的我一样困惑的朋友们指条明路。您现在查看本博客中除了本文之外的任意一篇含有代码块的文章，然后切换颜色模式，就能看到实机效果了。

本文基于 `hugo v0.109.0+extended`，代码高亮工具为 Hugo 出厂自带的 [Chroma](https://github.com/alecthomas/chroma)（好处：无需引入额外 JavaScript；坏处：不太聪明）。

以下为大概步骤：

- [x] 修改配置文件
- [x] 确认渲染外观没有产生变化
- [x] 修改代码高亮 CSS 使之贴近 [Dracula Syntax Specification](https://spec.draculatheme.com/)
- [x] 添加亮色模式配色


## 关于 Chroma 的笔记和抱怨

Chroma 的源代码位于 GitHub 上的 [alecthomas/chroma](https://github.com/alecthomas/chroma)，各编程语言的高亮代码在 [./lexers](https://github.com/alecthomas/chroma/tree/master/lexers) 文件夹中。其[文档](https://pkg.go.dev/github.com/alecthomas/chroma/v2#readme-lexers)中居然没有记录详细实现方式，而是直接重定向用户去查看 [Pygments 的文档](https://pygments.org/docs/lexerdevelopment/)，简直离天下之大谱。

目前暂时没有精力和时间去学习怎么写 lexer，等有空了，如果到那时它还没有更新到令人满意的程度，那么我就要重写一些 lexer（至少是 CSS 的 lexer）。

Chroma 自带的配色方案一览在这里： [https://xyproto.github.io/splash/docs/longer/all.html](https://xyproto.github.io/splash/docs/longer/all.html)  
不过如果使用本文中的高亮方法的话，颜色全都可以自定义，看个参考就行；我的浅色模式配色就是从别的地方抄来的。  
Pygments 有[在线 Demo](https://pygments.org/demo/)，与 Chroma 渲染出来的 HTML 结构差不多，不过颜色似乎有一定差异，我也不知道为什么。


## 修改配置文件

文档：

- [Syntax Highlighting | Hugo](https://gohugo.io/content-management/syntax-highlighting/)
- [Configure Markup | Hugo](https://gohugo.io/getting-started/configuration-markup/#highlight)

想要自定义颜色，无论是修改一两个颜色还是自动切换配色，都必须使用 `noClasses: false`。区别在于，当这个值为 `true` 的时候，渲染出来的 HTML 代码中不含 class，而是直接使用 inline CSS，因此没有办法微调配色。反之就可以随便调，也能很容易地实现切换配色等功能，但需要添加额外的 CSS。

以下是修改流程， 以本文使用的配色 Dracula 为例：

1. 在不启动 huso serve 的情况下，修改 `config.yaml`
2. 运行 `hugo gen chromastyles --style=dracula > dracula.css`
3. 以生成的 CSS 文件为蓝本，修改精简，在不影响阅读的前提下最小化，然后统合到自己的 CSS 里
4. 删除 `dracula.css`
5. 运行 `hugo serve --buildDrafts --disableFastRender`，观察效果

{{< fold  "统合后的 CSS 使用实例" >}}
{{< md >}}定义颜色变量：{{< /md >}}

{{< highlight css >}}
:root {
  /* dracula theme */
  --chroma-bg:     #282a36; /* background */
  --chroma-fg:     #F8F8F2; /* foreground */
  --chroma-sl:     #44475a; /* selection */
  --chroma-c:      #6272a4; /* comment */
  --chroma-lnt:    #7f7f7f; /* line numbers table; not from dracula */
  --chroma-red:    #ff5555;
  --chroma-orange: #ffb86c;
  --chroma-yellow: #f1fa8c;
  --chroma-green:  #50fa7b;
  --chroma-purple: #bd93f9;
  --chroma-cyan:   #8be9fd;
  --chroma-pink:   #ff79c6;
}
{{< /highlight >}}

{{< md >}}实际使用：{{< /md >}}

{{< highlight css >}}
/* KeywordConstant, KeywordNamespace, KeywordPseudo, KeywordReserved,
NameTag, Operator, OperatorWord,
CommentPreproc, CommentPreprocFile */
.chroma .kc, .chroma .kn, .chroma .kp, .chroma .kr, .chroma .nt, .chroma .o, .chroma .ow, .chroma .cp, .chroma .cpf { color: var(--chroma-pink) }
{{< /highlight >}}

{{< /fold >}}

本网站更新后的实际配置：（可配置的选项一览和默认值可在 [配置的文档](https://gohugo.io/getting-started/configuration-markup/#highlight)和 [highlight 方程的文档](https://gohugo.io/functions/highlight/)里查看。）

````yaml {hl_lines=[4,8]}
markup:
  highlight:
    codeFences: true
    guessSyntax: true
    lineNoStart: 1
    lineNos: false
    lineNumbersInTable: true
    noClasses: false
    tabWidth: 4
````

以下是几个我认为比较难懂的选项：

`guessSyntax: true`
: 如果设为 `false`，那么在代码块未指定语言时，可能会使用一个很奇怪的配色主题（无论 CSS 和 class 如何！）。

`lineNumbersInTable: true`
: 如果设为 `false`，那么生成带有行数的代码块时，行数会和代码混合在一起，不方便复制。

`noHl`
: 可以当作这个选项[不存在](https://github.com/gohugoio/hugo/issues/9885)。

`style`
: 使用 `noClasses: false` 时就无需指定了。

`tabWidth`
: 不会影响使用空格缩进的代码片段。

注意这些选项除了 `noClasses` 和 `style` 以外，都可以在文中通过添加参数的方式随时微调，例如这样：

{{< fold  "我全都要" >}}
{{< md >}}代码框：{{< /md >}}

{{< highlight text >}}
{{</* highlight go "linenos=table,hl_lines=8 15-17,linenostart=199" */>}}
// ... code
{{</* /highlight */>}}
{{< /highlight >}}

{{< md >}}也可以使用（效果一模一样）：{{< /md >}}

{{< highlight text >}}
```go {linenos=table,hl_lines=[8,"15-17"],linenostart=199}
// ... code
```
{{< /highlight >}}

{{< md >}}实际效果：{{< /md >}}

{{< highlight go "linenos=table,hl_lines=8 15-17,linenostart=199" >}}
// GetTitleFunc returns a func that can be used to transform a string to
// title case.
//
// The supported styles are
//
// - "Go" (strings.Title)
// - "AP" (see https://www.apstylebook.com/)
// - "Chicago" (see https://www.chicagomanualofstyle.org/home.html)
//
// If an unknown or empty style is provided, AP style is what you get.
func GetTitleFunc(style string) func(s string) string {
  switch strings.ToLower(style) {
  case "go":
    return strings.Title
  case "chicago":
    return transform.NewTitleConverter(transform.ChicagoStyle)
  default:
    return transform.NewTitleConverter(transform.APStyle)
  }
}
{{< /highlight >}}

{{< md >}}~~（虽然我没有调整过带行数的代码框的 CSS 所以有一点丑）（而且复制按钮不适配）~~{{< /md >}}
{{< /fold >}}


## 高亮有问题的关键词及修改

<!-- （Dracula Light 或 Poppins） -->

当不同编程语言之间产生冲突时，优先选择更高对比度（颜色较浅）以及影响范围更小的修改方案。当然，我暂时只关心我会写且近期可能用到的编程语言，毕竟这个 lexer 最好还是重写。

`.chroma .bp` （Python：`self`）
: 改为 purple

`.chroma .nn` （CSS：id 选择器）
: 改为 green

`.chroma .k` （CSS：属性名）
: 改为 cyan italic

`.chroma .n` （CSS：`var()` 中的变量名）
: 改为 cyan italic


## 高亮结果对比

期望结果图来自：[dracula/sublime: 🧛🏻‍♂️ Dark theme for Sublime Text](https://github.com/dracula/sublime)


### HTML

{{< fold  "HTML" >}}
{{< md >}}Chroma 渲染效果：{{< /md >}}

{{< highlight html >}}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dracula</title>
</head>
<body>
  <!-- Once upon a time... -->
  <h1>Vampires</h1>

  <form>
    <label for="location">Location</label>
    <input type="text" name="location" value="Transylvania">
    <label for="birthDate">Birth Date:</label>
    <input type="number" name="birthDae" value="1428">
    <label for="deathDate">Death Date:</label>
    <input type="number" name="deathate" value="1476">
    <label for="weaknesses">Weaknesss:</label>
    <input type="checkbox" name="weaknesses" value="Sunlight" checked>
    <input type="checkbox" name="weaknesses" value="Garlic" checked>

    <button type="submit">Submit</button>
  </form>

  <script>
    // ...there was a guy named Vlad
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      const { birthDate, deathDate } = e.target;
      const age = deathDate.value - birthDate.value;
    });
  </script>
</body>
</html>
{{< /highlight >}}

{{< md >}}期待效果：{{< /md >}}

{{< figure 
src="https://raw.githubusercontent.com/dracula/sublime/master/images/html.png"
alt="Dracula theme HTML demo for Sublime Text"
link="https://github.com/dracula/sublime/blob/master/README.md"
>}}
{{< /fold >}}


### CSS

{{< fold  "CSS" >}}
{{< md >}}Chroma 渲染效果：{{< /md >}}

{{< highlight css >}}
/*
 * Once upon a time...
 */
:root {
  --birthDate: 1428px;
  --deathDate: 1476px;
}

body {
  background: #000;
}

/* ...there was a guy named Vlad */

#dracula {
  opacity: 0;
  display: none;
  visibility: hidden;
  font-family: "Transylvania";
  height: calc(var(--deathDate) - var( --birthDate));
}
.cape {
  background: #ff0000 !important;
}

@font-face {
  font-family: 'Transylvania';
  src: url('/location/Transylvania.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}
{{< /highlight >}}

{{< md >}}
为什么明明属性的 class 一直是 `.k`，结果到了 `@font-face` 那里就变成了 `.nt`？？

期待效果：
{{< /md >}}

{{< figure 
src="https://raw.githubusercontent.com/dracula/sublime/master/images/css.png"
alt="Dracula theme CSS demo for Sublime Text"
link="https://github.com/dracula/sublime/blob/master/README.md"
>}}

{{< /fold >}}


### JavaScript

{{< fold  "JavaScript" >}}
{{< md >}}Chroma 渲染效果：{{< /md >}}

{{< highlight javascript >}}
/*
Once upon a time...
*/

class Vampire {
  construction(props) {
    this.location = props.location;
    this.birthDate = props.birthDate;
    this.deathDate = props.deathDate;
    this.weaknesses = props.weaknesses;
  }

  get age() {
    return this.calcAge();
  }

  calcAge() {
    return this.deathDate - this.birthDate
  }
}

// ...there was a guy named Vlad

const Dracula = new Vampire({
  location: 'Transylvania',
  birthDate: 1428,
  deathDate: 1476,
  weaknesses: ['Sunlight', 'Garlic']
}); 
{{< /highlight >}}

{{< md >}}期待效果：{{< /md >}}

{{< figure 
src="https://raw.githubusercontent.com/dracula/sublime/master/images/javascript.png"
alt="Dracula theme JavaScript demo for Sublime Text"
link="https://github.com/dracula/sublime/blob/master/README.md"
>}}
{{< /fold >}}


### Python


{{< fold  "Python" >}}
<p>Chroma 渲染效果：</p>

{{< highlight python >}}
'''
Once upon a time...
'''

class Vampire:
  def __init__(self, traits):
  self.location = traits['location']
  self.birth_date = traits['birth_date']
  self.death_date = traits['death_date']
  self.weaknesses = traits[ 'weaknesses']
  def get_age(self):
    return self.calc_age()
  def calc_age(self):
    return self.death_date - self.birth_date

# ...there was a guy named Vlad

Dracula = Vampire({
  "location': 'Transylvania',
  'birth_date': 1428,
  'death_date': 1476,
  'weaknesses': ['Sunlight', 'Garlic']
})
{{< /highlight >}}

{{< md >}}期待效果：{{< /md >}}

{{< figure 
src="https://raw.githubusercontent.com/dracula/sublime/master/images/python.png"
alt="Dracula theme Python demo for Sublime Text"
link="https://github.com/dracula/sublime/blob/master/README.md"
>}}
{{< /fold >}}


## 备忘链接

- Dracula 默认的 lexer 似乎遵循的是 [TextMate naming convention](https://macromates.com/manual/en/language_grammars#naming_conventions)
- 给代码块添加标题： [Syntax Highlighting with Chroma in Hugo | dongheenam](https://dongheenam.info/posts/syntax-highlighting-with-chroma-in-hugo/#additional-features)
