---
author: loikein
published: "2018-10-01T16:49:00+02:00"
slug: 2018-10-01-new-tab-notepad
categories:
- 编程笔记
tags:
- 网页制作
title: 浏览器中的新标签页笔记本
---
以前一直在用这个，今天被更新的 Opera 覆盖掉了，自己研究一个看看。  
`text/html,<html contenteditable>`  
  
参考网址[点我](https://coderwall.com/p/lhsrcq/one-line-browser-notepad)  
最终版代码：（全选复制，贴进浏览器地址栏即可用）[GitHub Gist](https://gist.github.com/loikein/24692da5ef45242a469dbf316b016c48#file-browser-tab-notepad-html)

```html
data:text/html,
<html contenteditable
    style="font-size:1.5rem; 
        line-height:1.4; 
        max-width:60rem; 
        margin:0 auto; 
        padding:4rem;" 
    spellcheck="false">
<script>
    document.documentElement.focus();
</script>
<title>Text Editor</title>
```
