---
author: loikein
published: "2023-01-09T10:51:15+0000"
slug: changelog
categories:
- 独立页面
title: 更新履历
_build:
  list: never
css:
  file: "extra-style.css"
---

仅包括网站（技术）层面的（较大）更新。

本页遵循 [gitmoji](https://gitmoji.dev/) 标准。已经使用过的表情如下：

| 表情 | 名称             | 含义        |
|:---:|------------------|------------|
| ✨ | Sparkles          | 新功能      |
| 💄 | Lipstick          | 更新用户界面或样式文件 |
| ⚡ | zap / high_voltage | 优化性能    |
| 🔧 | wrench            | 更新配置文件 |
| 📝 | memo / pencil     | 更新说明文档 |
| 🚸 | children_crossing | 优化用户体验 |
| ♿ |  wheelchair / wheelchair_symbol | 优化可访问性 |
| 💥 | boom / collision   | 破坏性改动 |
| 🧱 | brick / bricks   | 更改基础架构 |
| ♻️ | recycle / recycling_symbol | 重构代码 |
| 🎉 | tada / party_popper | 新建项目 |

<!-- 
| 🏷️ | label             | 更改类型    |
 -->


## TODO

按照优先度：

- [ ] 制作 CW partial
- [ ] 在归档页面增加显示博文分类及标签
- [x] 修复 Fediverse CW code
- [x] 制作 `<dl>` shortcodes（发现 Goldmark 直接支持，不需要了）

## 2023-05-17 🔧

修改博客题目：此生未命名／Untitled Life → 浣心／Heart of Sleeve


## 2023-04-06 💄

代码框在浅色模式和深色模式下有不同的颜色了。浅色主题：Atom One light（稍有更改），深色主题：Dracula。  
博文：[深入探究 Hugo 代码高亮](/posts/2023-01-10-deep-dive-into-hugo-syntax-highlight/)


## 2023-04-03 ✨

添加 [shortcodes/md](https://github.com/loikein/hugo-theme-diary/blob/main/layouts/shortcodes/md.html)，现在支持在任何地方输入 Markdown （！）了。  
博文：[深入探究 Hugo 短代码](https://blog.loikein.one/posts/2023-01-26-deep-dive-hugo-shortcodes/)


## 2023-01-26 💄♻️

为 `<dl>` 添加 CSS；精简双栏排版时的 CSS，现在不同屏幕尺寸之间统一使用 grid 了。

灵感来源： [List encounters of the third kind](https://davidyat.es/2017/10/18/description-list/#postscript-2021-01-27)（Postscript (2021-01-27) 一节）


## 2023-01-16 🚸

更新 [shortcodes/col](https://github.com/loikein/hugo-theme-diary/blob/main/layouts/shortcodes/col.html)，现在支持同时键入 `lang` 属性了。此次更新为非破坏性，不急着改以前的博文……（翻译：懒）

已经改好的示例：[中文翻译：神様なんていらない僕らの by PolyphonicBranch](/posts/2022-10-27-kami-sama-nante-iranai-bokura-no-by-polyphonicbranch/)

{{< fold  "使用方式示例" >}}
{{< highlight html >}}
{{</* row */>}}
{{</* col lang="ja" */>}}
(lang=ja)
{{</* /col */>}}
{{</* col */>}}
(lang default=zh-Hans)
{{</* /col */>}}
{{</* /row */>}}
{{< /highlight >}}

{{< md >}}或{{< /md >}}

{{< highlight html >}}
{{</* row */>}}
{{</* col "ja" */>}}
(lang=ja)
{{</* /col */>}}
{{</* col */>}}
(lang default=zh-Hans)
{{</* /col */>}}
{{</* /row */>}}
{{< /highlight >}}
{{< /fold >}}


## 2023-01-11 ⚡

更新 [shortcodes/fold](https://github.com/loikein/hugo-theme-diary/blob/main/layouts/shortcodes/fold.html) 以更好地支持嵌套 shortcodes。  
发现了早先几乎所有使用该 shortcodes 折叠代码框的博文均无法正确渲染（非由此次更新造成），已手动修复，如果有遗漏请通知我。  
示例：[实验田#Summary & Nested shortcodes](/playground/#summary--nested-shortcodes)

新的标准使用方式为：

```html
{{</* fold  "summary" */>}}
{{</* md */>}}words{{</* /md */>}}
{{</* highlight language */>}}
# code
{{</* /highlight */>}}
{{</* /fold */>}}
```

## 2023-01-10 ♻️🔧

整理博文标签：完成了对「编程笔记」分类下所有博文的标签整理。

修改代码高亮方式为 `WithClasses`。  
博文：[深入探究 Hugo 代码高亮](/posts/2023-01-10-deep-dive-into-hugo-syntax-highlight/)


## 2023-01-09 📝

添加更新履历页面（本页）。虽然但是，我居然从来没想过要写这个东西。大意了。


## 2022-08-11 🚸♿

添加了复制代码按钮，添加了跳到主要内容按钮。  
博文：[如何在 Hugo 中添加复制代码按钮（键盘友好型）](/posts/2022-08-11-hugo-copy-code-button/)


## ？？（待添加）


## 2021-05-17 🧱♻️💥

从 Blogspot 搬到自建（GitHub \+ Netlify），并将所有博文统一为 Markdown 格式。包含了大部分页面的 301 重定向，所以其实也没有很破坏性，但其实直到现在都还没完成所有老文章的配图的链接／格式更新工作。  
博文：[从 Blogger 迁移到 Hugo。It's happening.](https://loikein.blogspot.com/2021/05/blogger-hugoits-happening.html) （此文仅存在于旧网站上）


## 2017-02-07 🎉

新建文件夹。  
博文：[虽说每次都开新博客是个新起点](/posts/2017-02-07-new-blog-new-start-again/)
