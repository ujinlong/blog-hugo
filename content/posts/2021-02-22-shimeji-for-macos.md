---
author: loikein
published: "2021-02-22T12:59:00+01:00"
lastmod: "2021-05-01 01:52:03.316 +0200"
slug: 2021-02-22-shimeji-for-macos
categories:
- 用户笔记
tags:
- macOS
title: Shimeji（桌宠） for macOS
---
English version: [Shimeji for Mac - wiki](https://wiki.loikein.one/computer/other-software/shimeji-for-mac)  

***

事情是这样的。2014 年以前我只有一台服役十多年的 ThinkPad，一旦开了 Shimeji 就不能开其他程序了（靠）；而 2014 年以后我甚至不再拥有自己的 Windows 机了。同人界一直以来的通识是，Mac 不能用 Shimeji，为什么不能呢，不知道，有没有人试过呢，不知道，从古至今有没有成功过呢，也不知道。

但是昨晚偶尔刷推刷到了一个……十分可爱的 Shimeji。真的太可爱了。我马上决定在面试前夜抽出亿点点时间研究一下，务必让它出现在我的桌面上。

先说结果。我的电脑是 Intel Mac，但是有人提到过 10.16 也能用，这就不知道是 Intel 还是 ARM 了。

-   硬件：MacBook Pro (13-inch, 2018, Four Thunderbolt 3 Ports)
-   系统：macOS 10.15.7
-   CPU 使用：10% 左右
-   内存占用：300 MB 左右

怎么说呢……虽然也就是一个 Chrome tab 的事儿（。）这没个好点的电脑还真不敢整天开着桌宠。另外这个占用量跟屏幕上的小人数量无关，无论有多少个在场都是差不多的。

更新：毛象网友要求了效果图，我简单录了一个。视频里是接下来会用到的来自 [-Mac- 2PUS and 2PUK -Mac- Shimeji by lalala00000007 on DeviantArt](https://www.deviantart.com/lalala00000007/art/Mac-2PUS-and-2PUK-Mac-Shimeji-360524267) 的阿尔。

{{< video name="2021-02-22-shimeji-for-macos" >}}

***

目前网上惟一还有用的教程是[这条推特](https://twitter.com/zkdlsoo/status/986176637946359808?s=20)，但是坑也不是没有的。我整理了一下，以下是全过程。

1.  下载妳想要的 Shimeji，解压出来，放在（假设说） `folder1` 里面。
2.  下载安装 [Java 6](https://support.apple.com/kb/DL1572?locale=en_US)，有 Homebrew 的朋友可以使用 `$ brew install java6`。安装完无需重启。
3.  前往 [-Mac- 2PUS and 2PUK -Mac- Shimeji by lalala00000007 on DeviantArt](https://www.deviantart.com/lalala00000007/art/Mac-2PUS-and-2PUK-Mac-Shimeji-360524267)，下载 2P!England (single) 或者 2P!America (single) 中的任意一个，注意密码是不一样的（黑塔利亚，我的黑塔利亚）
4.  解压出来，放在 `folder2` 里面。
5.  先运行一下试试看。右键 `Shimeji.app` 点选`显示包内容`，走到 `Shimeji.app/Contents/Resources/Java/`，双击运行 `Shimeji.jar`。黑塔小人出现了吗？反正在我的电脑上是出现了的。
6.  建议此时右键 `Shimeji.jar`，点选`制作替身`，然后把替身剪切粘贴（`cmd-C`，`option-cmd-V`）到 `folder2` 的顶层，这样就不用每次都走来走去了。
7.  把 `folder2` 里的 `img` 文件夹重命名一下，比如说改成 `img_2`。
8.  复制 `folder1` 里的 `img` 文件夹，粘贴到 `folder2` 里。从这往后 `folder1` 就用不上了，可以删掉了。
    1.  观察 `img_2` 的文件结构，它包含了一个 `icon.png` 和数量不等的 `shimeXX.png`。
    2.  观察 `img` 的文件结构，如果跟 `img_2` 不一样的话（比如 `shimeXX.png` 放在一个单独的文件夹里之类的）照着改好，务必保持一致。
9.  此时再运行 `Shimeji.jar` 试试，应该能看到妳希望的小人出现在桌面上了。如果没有就是 `img` 结构不对，啊，打回重做。

是不是很简单呢（河鳝的微笑）

***

为不会日语的朋友翻译一下 Shimeji 的菜单，从上到下分别是：

-   增加一只
-   所有小人聚到一起
-   清屏到只剩一只
-   恢复窗口（至今没发现有什么用，它会动我的窗口吗？）(还真会！但是恢复不了，爱了)
-   退出

此外，Shimeji 运行的时候会在 Dock 里显示为名为 java 的图标。对这个图标右键`选项 > 分配给所有桌面`就可以实现切换 Space 的时候保留当前屏幕上的小人，不选的话就每个 Space
都单独计算）。如果小人刚好趴在一个不是最大化的窗口上面，关闭窗口或者切换
Space 的时候就会掉下来，超可爱的啦。

終わり！
