---
author: loikein
published: "2019-07-13T10:48:00+02:00"
lastmod: "2021-04-25 19:32:52.610 +0200"
slug: 2019-07-13-sync-mastodon-and-sns-with-ifttt
categories:
- 编程笔记
tags:
- Mastodon
- IFTTT
- RSS
title: 用 IFTTT 同步各类社交网站至 Mastodon（阶段性总结）
---
现在 IFTTT 免费版只能创造三个自定义 applet，本文仅供存档。目前的解决方案参见[再谈同步社交网站至 Mastodon（微博，RSS，原生图片）](../2020-03-09-sync-mastodon-and-sns-again/)。

***

![](/post-img/2019-07-13-sync-mastodon.png)


-   Twitter（API）
-   微博（API）
-   饭否（RSS）
-   豆瓣广播（RSSHub + RSS）

注意：Twitter 锁推可用，饭否锁饭不可用。  


## 创建 Mastodon 应用

讲的人很多了，略过。  
权限范围可以只选 write。  
小窍门：搜 `Pawoo + IFTTT` 出来的结果比搜 `Mastodon + IFTTT` 更多、更详细。  
  

## if this then：Webhook

-   URL：`https://[所在实例网址]/api/v1/statuses`
-   Method：POST
-   Content type：`application/x-www-form-urlencoded`
-   Body：`access_token=[你的访问令牌]&status=[想同步的内容]`

想同步的内容，即
ingredient，都是我自己测试过几次之后选出的还可以的配方，当然也可以随便改。  
RSS 同步方式有一点比较头痛，就是如果加了
`EntryImageUrl`（图片链接），然后又没发图的话，会自动贴一张「这里没有图片」的链接，所以我都没加。可以自己加。  
  

## Twitter

同步时间：5 分钟左右  
会自动把图片转成链接，不用另外加  

-   then：Body：`access_token=[你的访问令牌]&status={{Text}}`

  

## 微博

同步时间：5 分钟左右  
多图只同步第一张，没有图片时会自动略过  

-   then：Body：`access_token=[你的访问令牌]&status={{Text}}%0A{{PhotoURL}}`

  

## 饭否

同步时间：10 分钟左右  

-   if：Feed
    URL：`http://api.fanfou.com/statuses/user_timeline/[饭否个人首页网址最后一部分，是数字的话飘号也要].rss`
-   then：Body：`access_token=[你的访问令牌]&status={{EntryTitle}}`

  

## 豆瓣广播

同步时间：30 分钟左右  

-   if：Feed
    URL：`https://rsshub.app/douban/people/[豆瓣用户 ID，纯数字]/status`
-   then：Body：`access_token=[你的访问令牌]&status={{EntryTitle}}%0A{{EntryContent}}%0A{{EntryUrl}}`
