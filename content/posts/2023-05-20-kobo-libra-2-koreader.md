---
title: "Kobo Libra 2 + KOReader 装机与使用"
date: "2023-05-20T23:57:08+01:00"
# published: ""
# lastmod: ""
categories: ["用户笔记"]
tags: []
# description: ""
---

我一直很喜欢墨水屏这个概念，但是不喜欢 Kindle 这个实体。我不喜欢它不能看 ePub，不喜欢它不能通过 USB 传输文件，不喜欢它万年 Micro USB，不喜欢它绑定一个亚马逊帐号，如此种种。但是墨水屏，我是喜欢的。（我甚至依然保留着早已无法使用的 Pebble Time Round，并且经常希望有公司能继承它的遗志。话扯远了。）

当然，我也早就听说了 KOReader，但当时并没有折腾这个的自信（即使到了现在，在文档指南如此散乱的情况下，折腾这个东西的过程依然令人头痛，下详），不过后来 Kindle 没法安装 KOReader 了，我也有些淡忘了对墨水屏的需求，然后就不了了之。直到最近，坐车时看手机晕车的毛病又严重了起来，不得不再次把墨水屏提上日程。

购买 Kobo Libra 2 的原因很简单，我需要借一个墨水屏设备来测试坐车看它晕不晕车，朋友非常豪迈地掏出了 Kindle Oasis。我喜欢它的尺寸和按钮，于是目标成为了长得跟 Kindle Oasis 一模一样、但能解决我对 Kindle 的抱怨的设备。事情就这么成了。

以下随时更新。


## 开机

开机后先选 UI 语言，没有简体中文，我不会打注音或仓颉，日语作为 UI 语言又真的不是很友好（片假名警告），所以选了英语。但这不是问题，因为 KOReader 是有简体中文 UI 可选的，装了之后就几乎不用看 Kobo 原生的 UI 了。

激活机子有两个选项，连 Wi-Fi 或者插到电脑上（似乎要下载一个桌面程序）。我懒得下载那个程序，就选了 Wi-Fi。然后从一堆可选的服务中选一个（记得有 Kobo，乐天国际，乐天日本，等等），登录账户，就激活了。  
如果没有账户建议在电脑上注册一个，在墨水屏上打字真的不太容易。我尝试注册了一下 Kobo，然后发现自己已经有账号了，可能是在写以前那篇[电子书商城对比](/posts/2019-06-20-globalise-your-digital-reading-life/)的时候注册的……记性不好是这样的。  
网上也有[跳过登录账户的教程](https://www.reddit.com/r/kobo/comments/mt2f30/how_to_bypass_account_setup/)，但是我也懒得去搞，如果有人尝试成功了可以评论一下。

进到图书一览界面，就算开机完成了。


## 安装 KOReader

关于这一步我有很多槽可以吐，该从哪里开始呢……

首先，KOReader 的代码在[这里](https://github.com/koreader/koreader)。它有一个 wiki 页面，里面有[英文版](https://github.com/koreader/koreader/wiki/Installation-on-Kobo-devices)和[中文版](https://github.com/koreader/koreader/wiki/%E5%A6%82%E4%BD%95%E5%9C%A8Kobo%E4%B8%8A%E5%AE%89%E8%A3%85KOReader)的 Kobo 安装教程，看起来都是最近才更新过的。但是千万不要被骗了，这个中文版的教程不知道是多少年前的，您无法从它包含的任何链接中找到任何有用的信息。请看英文版。

其次，您应该看的是那个 Semi-Automated Installation Method，但是点进去[链接的 mobileread 帖子](https://www.mobileread.com/forums/showthread.php?t=314220)里提供的 macOS 自动安装脚本至少在我的电脑上只是打开了终端，然后什么事都没做，所以我只好手动安装了一下。步骤如下：

**1\.** 下载 [mobileread 帖子](https://www.mobileread.com/forums/showthread.php?t=314220) 一楼中的 One-Click Kobo Packages 压缩包，KOReader 和 KOReader AND Plato 二选一。我没有感觉很需要 Plato，所以只下载了 KOReader。

**2\.** 解压 `OCP-KOReader-v2023.04.zip`（例），观察文件夹结构如下：

```text
.
├── .adds
│   ├── kfmon
│   ├── koreader
│   └── nm
├── .kobo
│   └── KoboRoot.tgz
├── kfmon.png
└── koreader.png
```

**3\.** Kobo 插上电线连到电脑，在屏幕上点确定链接。在电脑上打开（Mac：`cd /Volumes/KOBOeReader/`），观察文件夹结构如下（大概是这样，我不记得了，当时忘记截图，安装完成后略有变化）：

```text
.
├── .adobe-digital-editions
├── .kobo
└── .kobo-images
```

**4\.** 把 `OCP-KOReader-v2023.04` 文件夹中的 `.adds` 文件夹和两个 `.png` 文件直接整个复制到 Kobo 的根目录，然后把 `OCP-KOReader-v2023.04/.kobo/KoboRoot.tgz` 复制到 Kobo 的 `.kobo` 文件夹中。

**5\.** 用文本编辑器打开 `.kobo/Kobo/Kobo eReader.conf` 文件，在最末尾添加：

```toml
[FeatureSettings]
ExcludeSyncFolders=(\\.(?!kobo|adobe).+|([^.][^/]*/)+\\..+)
```

**6\.** 弹出 U 盘，拔掉电线，等待 Kobo 重启（期间会白屏，以及点点点，不要惊慌，这是正常的），大概需要五分钟左右。

**7\.** 重启后依然是普通的 Kobo 图书一览界面，Kobo 的一切功能依然可用，但是右下角多了一个汉堡菜单（`☰`，NickelMenu），点一下，弹出菜单中点 KOReader，就进到 KOReader 界面了。完成。


## 一些 KOReader 使用技巧

**[User guide](http://koreader.rocks/koreader-user-guide.pdf) 看文档！看文档！看文档！**

用户制作的手册：[KOReader compendium](https://dmpop.github.io/koreader-compendium/)

设置屏幕四角点击功能
: top menu > 齿轮 > 手势管理 > 点击角落
: 默认：左上：切换页面翻转；右上：书签；左下：开关背光；右下：无
: 我的设置：左上：一般 > 显示菜单（top menu），右下：阅读器 > 目录

不容易误触的打开 top menu 和 bottom menu 的方式
: 从屏幕顶端／底端往中心滑动（像手机通知中心那样）

截屏
: 从屏幕左上角滑动到右下角，或者从屏幕右上角滑动到左下角

设置锁屏画面
: top menu > 齿轮 > 屏幕设置 > 屏幕保护

在文件管理器里打开 top menu 的方式
: 点击屏幕顶上最中间的 KOReader 字样

反转翻页按钮
: top menu > 齿轮 > 点击与手势 > 翻页 > 反转翻页按钮。这个是全盘设置，包括文件管理器和设置中的翻页都会随之更改。


## 自定义 KOReader

### 词典

管理词典入口：top menu > 放大镜 > 词典设置。

内置的可下载词典一览：[koreader/dictionaries.lua ](https://github.com/koreader/koreader/blob/master/frontend/ui/data/dictionaries.lua)

我尝试了的内置词典：（括号里是语种入口和页码。两个语言都能查到的，选列表短的。）

- 英文：
    + GNU Collaborative International Dictionary of English （English 1）
        * 这是惟一一个有注音的，但它用的不是 IPA，我也不知道它用的什么。
    + English Idioms（English 4）
    + WordNet（English 17）
        * 大部分词都有。
    + English-English Wiktionary（English 34）
        * 有时候会给出一些令人摸不着头脑的释义，比如 [dungeon - Wiktionary](https://en.wiktionary.org/wiki/dungeon) 的最后一条。是我太孤陋寡闻了吗？
    + Old English-English（English 56）
- 中文：（语言列表第 9 页）
    + Mandarin-English Wiktionary（English 50，普通话 1）
    + Chinese-English dictionary（中文 1）
    + Chinese-English Wiktionary（中文 1）

<!-- - 日文：（语言列表第 15 页）
    + JMdict Japanese-English dictionary（日文 1）
    + Japanese-English Wiktionary（日文 1） -->

外置词典：按照 [Wiki](https://github.com/koreader/koreader/wiki/Dictionary-support) 的说法，可以自行下载 StarDict 文件放在 `.adds/koreader/data/dict/` 里。暂时懒得搞这件事。这个网页上有很多可下载的词典文件：[Resources for Stardict](https://kdr2.com/resource/stardict.html)。

注意：

1. 虽然内置中英以及日英词典，但是它们是没法反查的。想查英语单词只能使用英英或（自己加一个）英汉词典。
2. 在管理词典里勾掉不想要的词典之后，要点击画面右下角很小的 ✓，而不是右上角的 ×，不然不起作用。勾掉的词典不会删除，只会禁用。我还没发现在哪里删除内置词典的下载文件……

技巧：

1. 在查询窗口里，如果查到的形式不是想要的（比如 *adv.* 的说明一般是 do sth *adj.*-ly，所以 *adj.* 到底什么意思！？）可以点击右上角的笔按钮，修改形式，然后回车。


### 字体

如果有添加额外字体的需求（一般都会有，自带英文字体其实没有很好看），理论上可以在安装 KOReader 的第四步后直接添加，也可以之后随时添加。步骤如下：（以 [KOReader Wiki](https://github.com/koreader/koreader/wiki/Fonts) 中推荐的 Fanwood 为例）

**1\.** 下载字体。[Fanwood](https://www.theleagueofmoveabletype.com/fanwood) 网站上有个 Download 按钮，本质上就是把整个 Git repo 全下载下来，但需要的其实只有里面的四个 `.otf` 字体文件和两个 `.markdown` 许可证文件。

**2\.** Kobo 插电脑，屏幕上点击确定链接，打开 `/Volumes/KOBOeReader/.adds/koreader/fonts` 文件夹。

**3\.** 新建文件夹 `fanwood`，把字体和许可证文件放进去。

**4\.** 弹出 U 盘，拔掉电线，等待 KOReader 重新载入。完成。

另外我还下载了 [Charter](https://practicaltypography.com/charter.html)，不过 Fanwood Text 已经很好看了。

中日韩字体方面，我下载了一个 [NotoSerifCJKsc-Regular](https://github.com/notofonts/noto-cjk/blob/main/Serif/OTF/SimplifiedChinese/NotoSerifCJKsc-Regular.otf) 和 [NotoSerifCJKjp-Regular](https://github.com/notofonts/noto-cjk/blob/main/Serif/OTF/Japanese/NotoSerifCJKjp-Regular.otf)，直接放在自带的 `noto` 文件夹里了。由于实在太大，就没有下载别的字重。（看了实际效果之后觉得应该直接下 Medium 或者 Bold 的……算了。）

技巧：

1. 修改书本字体的方式是 top menu > 左起第二个图标（写了字的纸） > 字体。
1. 如果觉得设置满意，可以点击 top menu > 左起第二个图标 > 文档设置 > 保存文档设置为默认。不能分语言保存默认，只能设一种。
1. Fanwood Text 设置：行间距 130%，字号 24。
2. Noto Serif SC 设置：行间距 140%，字号 19，字重 +1。


<!-- 
### 反转翻页按钮

[koreader/page_turns.lua at 919d67656d35b7ac8cab2f581a47b74fd4ffb297 · koreader/koreader](https://github.com/koreader/koreader/blob/919d67656d35b7ac8cab2f581a47b74fd4ffb297/frontend/ui/elements/page_turns.lua#L122)

`G_reader_settings` -> `inverse_reading_order`

或者

[Keymapping · koreader/koreader Wiki](https://github.com/koreader/koreader/wiki/Keymapping)

Make file `koreader/settings/event_map.lua` with:

```lua
return {
            [194] = "RPgBack",
            [193] = "RPgFwd",
 }
```
 -->
