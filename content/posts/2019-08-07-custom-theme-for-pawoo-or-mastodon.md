---
author: loikein
published: "2019-08-07T15:56:00+02:00"
lastmod: "2020-05-25T10:34:25.905+02:00"
slug: 2019-08-07-custom-theme-for-pawoo-or-mastodon
categories:
- 笔记
tags:
- 网页制作
- Mastodon
title: Pawoo（Mastodon）浅色主题
---
更新：  
更换到这个拓展，更轻量一点：[User JavaScript and
CSS](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld)  

***

由于里瓣开始支持 LaTeX
数学公式，我想在自己的时间线上也能正常查看数学公式，于是发现了这个：[MathJax
bookmark](https://www.math.ucla.edu/~robjohn/math/mathjax.html)  
测试：发送 `测试：$$\sum_{i=1}^{\infty} \phi^i$$`  
发送后点击 bookmark（start MathJax），效果：  

![](/post-img/2019-08-07-custom-theme-pawoo-3.png)

***

地址：[loikein/pawoo-light-theme](https://gist.github.com/loikein/776bc65e6b10b011aa68989311c815c0)  
效果：  

![](/post-img/2019-08-07-custom-theme-pawoo-1.png)

  
我从来不喜欢暗色主题，晚上玩手机也只是把浅色主题的亮度调得很低，深色背景让我有一种，厄，看不清楚字的感觉。  
下了个 [Stylish](https://chrome.google.com/webstore/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe)，发现有人发了 [Mastodon - Light Deck Style](https://userstyles.org/styles/141745/mastodon-light-deck-style)，以这个为蓝本修改的。  
原来是下图这样，可以看出，并没有彻底浅色化，然后有些审美（……）跟我自己不太和。  

![](/post-img/2019-08-07-custom-theme-pawoo-2.png)

改动如下：  

1.  隐藏 Pawoo 的左边栏话题推荐
2.  使用 CSS variant，可以一键更换全局颜色
3.  删除了一些不必要的 `!important`
4.  调整代码结构
5.  其余细节
