---
author: loikein
published: "2018-09-18T18:03:00+02:00"
slug: 2018-09-18-me-vs-tables-in-ulysses
categories:
- 用户笔记
tags:
- iOS
- macOS
title: 跟 Ulysses 死磕表格的懒人
---
首先在文档顶部粘贴一个定义表格边框的 CSS style。我自己写了一个，随便用不需要授权。

展开版：[GitHub Gist](https://gist.github.com/loikein/b4236d258e3f24fa1647dbb5ed49878e)   
最小版：[GitHub Gist](https://gist.github.com/loikein/82a47ae3f7ab31b7e45e1332a6c5ecf8)

```html
<style type="text/css">
table {border-collapse: collapse; border-style: solid; border-width: 1px;}
th {border-style:solid; border-width:1px; text-align:center; padding: 2px;}
tr td {border-style:solid; border-width: 1px;}
td {padding: 5px;}
</style>
```

然后用 [HTML Tables
Generator](https://www.tablesgenerator.com/html_tables) 生成表格，勾选
Do not generate CSS 和 Compact mode，复制结果。  

在 Ulyesses 里打 `~~`（插入源码块），粘贴刚才生成的表格源码，预览。  

最近在学德语，做了一个冠词对照表。  
表格源码：  

```html
<table>
<tr><th>the - a</th><th colspan="2">　masculine　</th><th colspan="2">　feminine　</th><th colspan="2">neuter</th></tr>
<tr><td>1 が</td><td>der</td><td>ein</td><td>die</td><td>eine</td><td>das</td><td>ein</td></tr>
<tr><td>2 の</td><td>des</td><td>eines</td><td>der</td><td>einer</td><td>des</td><td>eines</td>
</tr><tr><td>3 に</td><td>dem</td><td>einem</td><td>der</td><td>einer</td><td>dem</td><td>einem</td></tr>
<tr><td>4 を</td><td>den</td><td>einen</td><td>die</td><td>eine</td><td>das</td><td>ein</td></tr></table>
```

Ulysses 预览截图：

![](/post-img/2018-09-18-me-vs-tables-in-ulysses.png)
