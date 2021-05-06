---
author: loikein
published: "2019-01-06T12:19:00+01:00"
slug: 2019-01-06-blogdown-from-beginner-to-give-up-but-not-yet
categories:
- 笔记
tags:
- 网页制作
- Rmarkdown
title: Blogdown 日记：从入门到（还没）放弃
---
先放链接：[loikein@Github](https://loikein.github.io/)  
  

## 用 blogdown 做什么

设想：research 笔记  
现实：期末复习笔记。\_。  
  

## 初步搭建

从 `.Rhistory` 里挖出了源码：

  

## 修改 CSS

虽然也怪我经验不足吧，请看：  

[![](../images/thumbnails/2019-01-06-blogdown-ri-ji-cong-ru-men-dao-huan-mei-fang-qi-%25E5%25B1%258F%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7%2B2019-01-06%2B12.17.33.png)](../images/2019-01-06-blogdown-ri-ji-cong-ru-men-dao-huan-mei-fang-qi-%25E5%25B1%258F%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7%2B2019-01-06%2B12.17.33.png)

就，@\#$%^&\*。  
  

## 添加 Disqus

参考：[如何使用hugo搭建个人博客（四）：添加评论系统disqus](https://studygolang.com/articles/11085)  
  

## 添加文章目录

参考：[show toc in a rmarkdown file? · Issue \#58 ·
rstudio/blogdown](https://github.com/rstudio/blogdown/issues/58)  
  
但是目录默认放在每篇文章的标题下方，长文不方便看。  
我想要 [Smart TOC](https://chrome.google.com/webstore/detail/smart-toc/lifgeihcfpkmmlfjbailfpfhbahhibba)
那样的效果，还好它[开源](https://github.com/FallenMax/smart-toc)，于是复制了一份
CSS 回来研究。（不想加 JS 还是挺不方便的）  
  
预览：  

[![](../images/2019-01-06-blogdown-ri-ji-cong-ru-men-dao-huan-mei-fang-qi-%25E5%25B1%258F%25E5%25B9%2595%25E5%25BF%25AB%25E7%2585%25A7%2B2019-01-03%2B10.13.37.png)](https://loikein.github.io/2018/12/29/notes-math-proof/)

不知道为啥不能滚动，所以标题太多的另外一篇 C 笔记就 overflow 了，待我再研究研究。  
  

## [Rmd 注意事项](https://loikein.github.io/2018/01/01/rmd-template/)
