---
author: loikein
published: "2020-04-15T19:52:00+02:00"
lastmod: "2020-04-15T22:35:53.566+02:00"
slug: 2020-04-15-custom-domain-pitfalls-blogger-github
categories:
- 编程笔记
tags:
- Blogger
- 建站
title: 自定义域名踩的坑（Blogger & GitHub Page）
---
如果运气不错的话，在各位看到这篇博文的时候，地址栏里依然写的是我的自定义域名：loikein.one。  
这个域名我想了好一阵子，自我感觉良好。目前它链接了两个子域名：[blog.loikein.one](https://blog.loikein.one/)（本博客）和 [notes.loikein.one](https://notes.loikein.one/post/)（笔记博客），以后还计划再多加些，然后争取把
www 域用上（还没想好用来干嘛）。  
  
更新：归档页下线了……！（尖叫）先睡一觉再说吧。  
更新：不知道怎么回事，改域名居然把我几个方程的大小写改了，已经修好了。  
  

## 首先，妳得有个域名

这个域名我买了两次，第一次在 Hover，其实当时没配置成功，然后我就睡了，结果一觉醒来收到 Hover
的邮件：对不起，无法购买该域名！  
无法妳大爷。  
于是我跑到瓜总推荐的 [Namecheap](https://www.namecheap.com/) 又买了一次，第二天醒来没有收到莫名其妙的邮件，成了。  
注意：买了域名之后需要马上检查一下邮箱，会来一封确认邮件。  
  

## Blogger

其实 Blogger 有一个输入自定义域名的地方，设置看起来也很方便，但是有一点很致命：它给的信息是错的。  
步骤：  

1.  在 `设置 > 基本 > 发布 > 博客地址` 点 `添加自定义域名`
2.  输入妳的域名
3.  点保存
4.  点修改，看一下 CNAME 设置
5.   如果妳把这里的设置直接抄到域名 DNS
    管理后台里的话，是无论如何都不能跳转成功的。  
    正确的设置是，第二行照着它给的填，但是第一行的目标字段改成
    `ghs.googlehosted.com`（参考：[为我的自定义域名创建 CNAME 记录 -
    Blogger
    帮助](https://support.google.com/blogger/answer/58317?hl=zh-Hans&authuser=0)）
6.  如果选择使用子域名而不是 www，那么重定向那里不要打勾
7.  下面的 `HTTPS 可用性` 和
    `HTTPS 重定向`（不在截图范围里）都点是（需要过几分钟才会起效） 
8.  结束

![](/post-img/2020-04-15-custom-domain-pitfalls-1.png)


## GitHub Page

这个就还好，但是需要等的地方时间比较久一点。  
步骤：  

1.  在 repo 的 `Settings > GitHub Pages > Custom domain` 输入域名
2.  此时 `Enforce HTTPS` 的格子还是灰的，先不管它
3.  在域名 DNS 管理后台里添加五（5）条记录，如下图。  
    这些地址可能会变，因此我就不打出来了，直接参考这里的 create an A
    record：[Managing a custom domain for your GitHub Pages site -
    GitHub
    Help](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)  
    （照理说子域名是不需要写这个的，但是我写了也没报错，写都写了。）
4.  回去 repo 设置，看看 `Enforce HTTPS`
    的格子能勾了没有，能了就勾上，不能就再等一阵子
5.  结束

GitHub repo 设置成功页面：  

![](/post-img/2020-04-15-custom-domain-pitfalls-2.png)

示例 DNS：  

![](/post-img/2020-04-15-custom-domain-pitfalls-3.png)
