---
author: loikein
published: "2020-10-27T00:32:00+01:00"
lastmod: "2021-05-24T05:22:24+0200"
slug: 2020-10-27-tried-to-work-with-ipados-14
categories:
- 应用程序
tags:
- iOS
title: iPadOS 14 办公记录，以及一点关于 what's a real computer 的感想
---
没有电脑的十四天，啊，真是度日如年。

之前在 [用 iPad Pro 办公的一天 @AppleNut](https://t.me/AppleNuts/703)
看到另外一位仁兄的记录，当时还窃笑说搞不好我有一天也会用到，没想到这就用到了。原因一样，MacBook Pro (2018) 的蝶式键盘坏了送修。其实这已经是第二回了，上次坏了一个键，拿到苹果授权维修店里撬掉键帽重新装了一个完事儿，但是这次坏了四五个键，实在得拿去真的店里看看了。蝶式键盘 50% 故障率诚不我欺。  

然而真的店很远要坐火车才能去，刚好赶上新冠疫情 lockdown，这一拖就是半年多，我也忍受了 delete
键（！）双击半年多。最近实在忍不住拿去看看，看看了就送修了，本来说好的五天，啊，结果这一修就是半个月。这半个月里我的伙伴就只剩下 iPad mini (5th gen) 和手机，期间做了一些挺正常的 iPad
上能干的事情，也做了一些我本来没想过 iPad 能干的事情，勉勉强强总结一下。（好长的前置啊终于写完了。）

## 论键鼠之必要性

想在 iPad 上好好干事情，就得配键盘，已经是常识了。别的不说，虚拟键盘一打开能把屏幕遮掉一半去。然而呢，我觉得鼠标之于 iPad 的重要性还没有被重复强调（我在写论文吗？），甚至超过 Apple Pencil 或者 Logi Crayon。（iPad 无印／mini 5 适配 Apple Pencil 1／Logi Crayon，新款 iPad Air 适配 Apple Pencil 2／Logi Crayon，我之前跟朋友谈起的时候对方居然没听说过，那么在这里也记一下。）

我的 Logi Crayon 是买 iPad 的时候一起买的，用久了呢感觉比鸡肋好那么一丁点，在编辑照片的时候感觉最好用，因为不会被手指遮住正在编辑的地方。这次本来想用 Crayon 顶替鼠标的作用的，发现不行，原因有二：

1.  用键盘的时候手臂搁在桌面上，用笔的时候要抬起来，换来换去很麻烦。
2.  我习惯把鼠标的跟踪速度设置得比较快，实际和屏幕上的移动比率比较大，但是笔要移动多远手就要移动多远，不习惯。

因此还是得用真的鼠标，real mouse（这梗还玩上瘾了是不是）。

试图使用键盘和鼠标的时候发现了一些坑。比如我有一个适配器为 USB Type-C 的 2.5G 无线鼠标，还有一个 Type-C to Lightning 的转换口，能够数据同步的那种，但是连在一起插上 iPad 愣是没发现鼠标。最后鼠标我还是用了之前随便买的二手 Apple Mighty Mouse（有线款），本来是因为可爱买着玩的，没想到用上了。

但是有线鼠标想要连上 iPad 需要一个 Type A to Lightning 的转换口，这里坑多多，归根结底一句话：苹果的 Camera Adapter 才是惟一持久稳定的解决方案，其他转换口都是第一天好使第二天死的废物。但是 Camera Adapter 有两款，带额外充电口的和只有一个 USB-A 接口的，这里又有个坑，不带充电口那款的 USB 协议 是 USB 2（Lightning to USB Camera Adapter），带充电口那款才是 USB 3（Lightning to USB 3 Camera Adapter），所以如果日后还想用来连 U 盘的话，或者其实 iPad 用来办公很费电的，不想干一会儿停下充会儿电的话，只好破财保平安了。

再比如我的键盘明明是苹果自家出的 Apple Wireless Keyboard，连上却弹出如下提示，然后**连接任何其他除了 Crayon 之外的蓝牙设备都会导致字母键失灵**：

![](/post-img/2020-10-27-work-with-ipados-14-1.png)

这问题仅在 iPadOS 14 后出现，然而，好吧，苹果不在乎自家产品的 compatibility。

鼠标的好处在于，再废的鼠标总有三个键，左键右键滚轮，而滚轮这个键在 iPad
上是不需要拿来点按的，因此可以自定义点按时的功能。（详见：[我在这其间某日发的嘟文](https://mastodon.social/@loikein/104988627560126670)）  
如下图（查看大图的方法：保存图片，或者在新标签页中打开），找到设置入口（1），找到正连接着的设备（2），点击自定义（3），摁下鼠标上需要自定义的按钮（4，我这里按了一下滚轮，这一步会卡一下需要等等），然后选一个就可以了。如果鼠标上还有其他按钮的话可以重复步骤 3 ~ 5。

设置一个鼠标按键为「主屏幕」的好处是，此处的「主屏幕」意思为 home button。比如说双击自定义按键就可以唤出 App Switcher，在通知中心单击自定义按键可以回到刚才用的 app，等等。  

![](/post-img/2020-10-27-work-with-ipados-14-2.jpg)

## 一些不容易发现的功能／app 

### 解压缩

从 Safari 下载的压缩文档使用默认的文件.app
打开，点选就会解压到当前文件夹，不需要其他操作。

### In-App Browser

在键盘上按 command + W 可以直接回到 app，相当于点「完成」按钮。  

### Jupyter Notebook

[Carnets - Jupyter on the App Store](https://apps.apple.com/us/app/carnets-jupyter/id1450994949)
这是我目前发现的惟一一个不需要任何电脑／服务器独立运行的 Jupyter Notebook iOS 客户端。具体使用方法是，这个 app 点开是默认文件管理器的样子，然后点选一个 .ipynb 文件直接打开，就能开始编辑了。

### Zotero

虽然我是 [PaperShip](https://apps.apple.com/app/papership/id631980748) 的付费用户，但是它的添加功能完全是鸡肋。就在我绝望的时候，なんと！在 Zotero 网页版登录之后只需要用鼠标在屏幕上点击几下，就会自动变成真的桌面版，然后点「Add By Identifier」（魔棒图标），再粘贴论文或者图书的链接，就会自动检测并添加了。

![](/post-img/2020-10-27-work-with-ipados-14-3.png)

## 没有 Mac 做不了的事情 & 总结 

虽然是我太高看 Safari for iOS 了，但是 Blogger 的预览画面是看不了的。无论按屏幕上哪个按钮都没反应，这造成了我不拿回电脑就不能发这篇博客。这件事令我十分愤怒，因为我抵抗了好久的 Blogger 改版就是以「移动易用性」为卖点的，而且现时点已经不能切换回旧版界面了，但是，呵。

还有就是，这是我经常有的需求，有一文件夹的论文 PDF 需要导入 Zotero 并创建条目。这件事如果在桌面版上就是直接拖进窗口，等它慢慢处理就好了，但是在 iPad 上并没有一个合适的 app 来处理这件事情。  

以及，虽然这是废话，但是除了在 repo 里直接编辑也没问题的 repo（比如 GitBook repo，这里特指在 Safari 里编辑，GitHub for iOS 是改不了代码的）之外，写代码是基本不可能的，所以我除了写 Markdown 和在谷歌文档里写点文件之外，几乎什么工作都做不了。当然需要在本地 build 和测试的代码就更不可能了（除非妳有远程服务器然后 SSH 过去然后……但是我并没有。）

嘛，当然，如果有这些需求的话基本不会只有一个 iPad；但是电脑总是会坏的，常常有一个 Windows／Mac 备机也不太现实……但由我这段经历可见 iPad 就算是备机也不太合格啊。

我对 iOS 最大的牢骚就是，每件事情都必须有专用的 app 才能完成，即使是现在有了 Split View 依然很麻烦。用电脑的话，基本上浏览器 \+ 文本编辑器 \+ 终端三件套就可以解决 90% 的问题了，然而在 iOS 上简直是天方夜谭。要写文件？下载 iWork + Google suite，运气不好还得在 Google Drive 和 Google Docs 之间左右横跳。要聊天？在 Mac 上一个 [Rambox](https://github.com/ramboxapp/community-edition) 就能解决的事情，在 iPad 上要下载一整个文件夹的 app（yes, I am aware of IM\+）。要管理剪贴板？网上有不少步骤几百个我都懒得仔细研究的 Shortcuts，还得搭配 iCloud 使用。

就这，还敢说「什么是电脑」？

路还远着呢。まだまだだね。

---

2021-05-24 更新：  
Rambox 几乎可以确定已经死了，我的最新推荐是 [Ferdi](https://github.com/getferdi/ferdi)。
