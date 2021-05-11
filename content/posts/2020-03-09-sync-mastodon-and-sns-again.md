---
author: loikein
published: "2020-03-09T18:51:00+01:00"
lastmod: "2021-04-25 23:03:08.981 +0200"
slug: 2020-03-09-sync-mastodon-and-sns-again
categories:
- 应用程序
tags:
- Mastodon
- RSS
- IFTTT
- Zapier
title: 再谈同步社交网站至 Mastodon（微博，RSS，原生图片）
---
2020-03-10 更新：发现链接贴错了，已经更正……  
2020-03-11 更新：获取微博图片网址的方式从 Extract URL 改成了
Extract Pattern（正则表达式），应该会准确很多  
2021-04-25 更新：我已经很久没用过微博了，不保证微博那部分还能用。

--------

  
去年七月我总结了 [如何用 IFTTT cross-post 到 Mastodon](../2019-07-13-sync-mastodon-and-sns-with-ifttt/)，然后就没怎么管那些规则，几天前有一位[网友评论](http://disq.us/p/27rp895)说微博同步不了了。其实在
IFTTT 上用微博 API
一直有可观的延时，我自己目前还是能同步的，只不过最近变得更慢了，而且感觉被过滤了一些内容。  
痛定思痛，刚好有两天空档，决定搞一下。  
先说结论：如果不用微博 API，一定会有一些问题，简而言之取舍就是三选一：  

1.  要先转发到其他地方（没有原生图片）
2.  格式丑陋（没有原生图片）：
    -   内含 HTML tag，比如 `<br />`、`<img>` 这种
    -   没有换行
3.  收费，很贵

我是选择了收费，因为我发微博还是挺多的，不想转发到推特，而且也有点在乎
Mastodon
作为微博备份（包括备份图片）的功能，不过到底选哪个就各位各自决定吧。  
  

## 先决条件：输出微博至 RSS

搜了一下才发现，GitHub 上关于这个的 repo 真不少。以前我只知道
[RSSHub](https://github.com/DIYgod/RSSHub) 可以干这个事情， 但是 demo
路由（太多人用？）被微博封了，没有 Unix
基础的话自建还是挺麻烦的。于是试用了一下
[weibo-rss](https://github.com/zgq354/weibo-rss) 这个
repo，没想到一次成功，讲讲具体要怎么搞。  

1.  需要注册一个 [Heroku](https://www.heroku.com/) 的免费帐号，然后登录
2.  在 [weibo-rss](https://github.com/zgq354/weibo-rss)
    的描述中，点击紫色的 `Deploy to Heroku` 按钮。
3.  在弹出的「Create New App」窗口中：
    -   `App name` 填写一个独特的英文名字，这会是妳的 RSS 网址
    -   `Choose a region` 随便选一个
    -   `Example` 留空
    -   点紫色的 `Deploy app` 按钮
    -   稍微等几分钟，出现「Successfully deployed」就可以了。
4.  点击屏幕右上角，妳的头像旁边的九个小点点，选择 `Dashboard`
5.  点击妳刚才创建的 app
6.  点击屏幕右上角的 `Open app` 按钮
7.  在弹出的「新浪微博 RSS 订阅」窗口中，
    填写妳自己的微博主页的地址，点击订阅，复制出现的链接
8.  好了，这个链接就是妳的微博的 RSS
    链接。最好粘贴到备忘录或者之类的地方，方便等下使用。

这个 Heroku app 占用的资源不是很多，我目前看来是可以一直用免费帐号的。  
  
如果妳连 Heroku 都不想注册，可以试试
[这个网址](https://rssfeed.today/weibo/)，是有好心网友把她自己的 app
公开了出来。但是别人的 app
不知道什么时候会消失，最好还是自己做保险一点。  
  

## 免费方案：IFTTT

好了，现在妳有 RSS 链接了， 按照
[上一篇博文](../2019-07-13-sync-mastodon-and-sns-with-ifttt/)
里的 If this（刚才的 RSS 网址），Then：  

-   URL：`https://所在实例网址/api/v1/statuses`
-   Method：POST
-   Content type：`application/x-www-form-urlencoded`
-   Body：`access_token=访问令牌&status={{EntryContent}}%0A{{EntryUrl}}`

结果是比较丑的，例子：  

![](/post-img/2020-03-09-sync-mastodon-again-1.png)

没办法啦（摊手）  
  

## 收费方案：Zapier

如果不差钱，或者跟我一样喜欢折腾的人，可以试试
[Zapier](https://zapier.com/)。由于需要用到 Webhook，而且 feed
内容需多步处理，必须有 Zapier premium 才行。  
步骤：  

创建一个新 Zap

在「When this happens…」窗口选择 `RSS by Zapier`

-   Choose Trigger Event 选择 `New item in feed`
-   Customize Item：
    -   Feed URL 填写刚才获得的 RSS 链接
    -   其余不用改，点击 `CONTINUE`
-   点击 `Test and review`，选一条字数比较多的微博
-   点击 `Done Editing`

在「Do this…」窗口选择 `Formatter by Zapier`

-   Choose Action Event 选择 `Text`
-   Customize Text：
    -   Transform 选择 `Replace`
    -   Values &gt; Input 点击选择 `1. Description`
    -   Find 填写：`[:newline:][:newline:]`
    -   Replace 填写：`[:newline:]`
    -   点击 `CONTINUE`

点击加号，选择 `Formatter by Zapier`

-   Choose Action Event 选择 `Text`
-   Customize Text：
    -   Transform 选择 `Truncate`
    -   Values &gt; Input 点击选择刚生成的文字： `2. Description`
    -   Max lenth 填写：`400`
    -   Append Ellipsis? 选 `Yes`
    -   点击 `CONTINUE`

点击加号，选择 `Paths`。

Path A（带有图片的微博）：

Rules，三个空格分别填写 `1. Raw Description`，`(Text) Contains`，
`<img src=`

在「Do this…」窗口选择 `Formatter by Zapier` &gt; `Text`

-   Transform 选择 `Extract Pattern`
-   Values &gt; Input 点击选择 `1. Raw Description`
-   Pattern 填写： `https://wx\d\.sinaimg\.cn/large/[a-zA-Z0-9]+.jpg`

点击加号，选择 Webhooks by Zapier，Choose Action Event 选择 POST（第一次
POST）。

Customize Post：

-   URL：`https://所在实例网址/api/v1/media`
-   Payload Type：点击 Use a Custom Value，然后输入
    `multipart/form-data`
-   Data 留空
-   File：点选 Path A 中刚才筛选出来的图片链接
-   Headers：两个空，分别填写 `Authorization` 和
    `Bearer 访问令牌`（注意中间有空格）
-   其他不动就可以了， 点击 `CONTINUE`

点击加号，选择 Webhooks by Zapier，Choose Action Event 选择 POST（第二次
POST）。

-   URL：`https://所在实例网址/api/v1/statuses?access_token=访问令牌`
-   Payload Type：点击 Use a Custom Value，然后输入
    `application/x-www-form-urlencoded`
-   Data：（先后顺序随便）  
    `media_ids[]` 和第一次 POST 后得到的 ID；  
    `status` 和整个 Zap 第三步缩短之后的
    `3. Description`，回车，`1. Link`  
    `visibility` 和公开选项，选项有： `public`、`unlisted`、`private`
-   其他不动就可以了

Path B（不带图片的微博）：

-   Rules，三个空格分别填写
    `1. Raw Description`，`(Text) Does not contain`， `<img src=`
-   然后做 Path A 的第二次 POST，除了不用写 `media_ids[]` 那行

好了！发完微博后十分钟左右就可以看到自己发了一条带原生图片的嘟嘟啦。例子（我偷懒用了原来的
token，所以客户端还是写着 IFTTT）：  

![](/post-img/2020-03-09-sync-mastodon-again-2.png)

是不是很复杂 :P 佩服一下自己。
