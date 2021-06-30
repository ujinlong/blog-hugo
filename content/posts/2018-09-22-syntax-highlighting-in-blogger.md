---
author: loikein
published: "2018-09-22T17:03:00+02:00"
lastmod: "2021-04-24 22:53:27.317 +0200"
slug: 2018-09-22-syntax-highlighting-in-blogger
categories:
- 用户笔记
tags:
- Blogger
title: 博文代码高亮及针对 Blogger 的显示优化
---
Update 2021.04.24

搬到 Hugo 以后就不需要用这个了。

***

Update 2018.11.16
  
行内高亮已于 2018.11.13 加入默认 CSS，用 `<code></code>` tag
围起来就可以了。

一劳永逸的多行高亮解决法：[GitHub Gist](https://gist.github.com/)  
本文到这里就停止更新了（大概）  

***

写了[跟 Ulysses 死磕表格的懒人](../2018-09-18-me-vs-tables-in-ulysses/)后的继续死磕……

~~多行代码高亮工具：[hilite.me](http://hilite.me/)~~（已经失效）

注意：贴了代码后就不可以再转回 WYSIWYG 编辑器了，必须留在 HTML 编辑器。

优化规则：  

1.  超过 10 行的，在行号 1 前面插入 `&nbsp;`
2.  表格第一行 `<td>`中的 `<pre style>` 的 margin 改成 `0 1em 0 0`，不足
    10 行的改成 `0 1em 0 0.5em`
3.  代码缩进：`&emsp;`

Inline code beautifier（2018.11.13 已加入默认 CSS）：[GitHub Gist](https://gist.github.com/loikein/8aa4c838a5f7053a9ecbf66f65b3aa8d)

```css
.post-body code {
  color: var(--code);
  background: var(--grey);
  padding: 0.2em;
}
```
