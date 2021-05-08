---
author: loikein
# published: "2021-04-15 18:07:02.530 +0200"
# lastmod: "2021-04-15 20:24:48.363 +0200"
slug: playground
description: "有些例子还挺魔性的，为了心理健康建议别看本文。"
featured_image: "./post-img/background-sky.jpg"
enableMathJax: true
tags:
- pages
categories: []
title: 实验田
_build:
  list: never
---
## Custom Shortcodes

### Two-column layout

{{< row >}}
{{< col >}}
你好世界
{{< /col >}}
{{< col >}}
Hello world

Hello world [test](#)
{{< /col >}}
{{< /row >}}

### Video

{{< video name="scream" folder="sticker" >}}

### Emoji sticker

Not looping vs. looping:

{{< sticker name="scream" h=200 loop="false" >}}
{{< sticker name="scream" h=200 >}}

### Link card

{{< preview "https://blog.ypertex.com/articles/useful-hugo-templating/" >}}

### Fediverse status

{{< mstdn mastodon.social 106070125652504343 >}}

### Tweet refined (not yet)

Currently waiting for [gohugoio/hugo Issue #5617](https://github.com/gohugoio/hugo/issues/5617) to be implemented.

{{< twitter 877500564405444608 >}}

### Bilibili

{{< bilibili 52046593 >}}

### YouTube-nocookie

{{< youtube id=kF8I_r9XT7A title="How to Become Pope" >}}

***

## Regular Markdown Stuff

Begin [test file](https://gist.github.com/loikein/27ef6913386b206d1b3c18b8e93c5768)…

### Formatting

**Bold**, __bold__, **加粗**

*Italic*, _italic_, *斜体*

<u>Underline</u>

<del>Strike</del>, ~~strike~~

<mark>Highlight</mark>, ==highlight==

<!-- Comments-->

Footnote[^1], footnote[^2]

---

- [ ] Unfinished task list item
- [x] Finished task list item

### Code

Inline `code` and <kbd>keystroke</kbd>

```html
<h1>hello world</h1>
```

```js
console.log("hello world");
alert("hello world");
```

### Font

> 我能体に傷つけないで吞下 259 ml glass。

> Four score and seven years ago our fathers brought forth upon this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.

0 Oo Ii Ll 1 | 2 Z 5 s 8 Bb 6 #*^~\(\){}\[\] . , : ; “ ‘ ’ `

```
0 Oo Ii Ll 1 | 2 Z 5 s 8 Bb 6 #*^~(){}[] . , : ; “ ‘ ’ `
```

### Inline HTML

ref: https://burk.io/2020/let-there-be-dark

<div title="#282a36" style="height: 50px; width: 100px; background-color: #282a36; display: inline-block; border-style: solid; border-color: black; color:white; padding:10px;">#282a36</div>

<div title="#f8f8f2" style="height: 50px; width: 100px; background-color: #f8f8f2; margin-right: 5px; display: inline-block; border-style: solid; border-color: black; color:black; padding:10px;">#f8f8f2</div>

### LaTeX & Table

$\LaTeX{}$

$$\LaTeX{}$$

| Message to agent 1 | $M_1$          |
| ------------------ | -------------- |
| Agent 1's action   | $a_1$          |
| New finding        | $R_1 \begin{cases} >\mu_{2} \\ \leq \mu_{2} \end{cases}$ |

[^1]: The linked footnote appears at the end of the document.

[^2]: New lines
