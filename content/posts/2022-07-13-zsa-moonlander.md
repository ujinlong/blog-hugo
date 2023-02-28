---
title: "ZSA Moonlander 使用感想，和一些舒适地使用普通键盘的技巧"
date: "2022-07-13T15:09:00+01:00"
# published: ""
# lastmod: ""
categories: ["用户笔记"]
tags: []
description: "No more! 电视购物受害者"
---

我不认为人体工学产品是智商税，之前也[买了轨迹球](/posts/2021-09-22-aug-gains-and-losses-online-shopping/#logitech-mx-ergo)并且爱用至今，但是这款键盘，或者说这一类键盘……实在有点太挑人了。在进行了下文这么多设置和试错之后，我仍然进行了一个脱手。敬请注意，**这不是购买建议**。

<!-- 它有很多功能，但是至少现在的我并不需要这些功能；它想尊重「正确」的指法，但我自己的指法本来就是「错误」的，被纠正一番反而手不舒服脑子也不舒服。因此 -->

ZSA 的键盘主要通过两个特征达到人体工学的效果，一是左右手分离，一是 ortholinear （横平竖直）配列。我不否认左右手分离是个很好的思路，但是我很早就不喜欢所谓「正确」的打字方法，并且已经形成了自己的人体工学改编。

无论是 qwerty 还是 dvorak，现行的「正确」打字指法全都是倾向于让双手腕平行，手腕和手臂挤压形成一个角度，这样打字久了不出问题才怪。但我的指法是，各手指负责区域形成三角形，这样打字的时候就会自然地放松双手，张开双臂，是一个很舒服的姿势。数字键和功能键有些组合打多了会产生特殊的肌肉记忆，不按照这个来，但是大幅度移动手臂本身也是一种放松。

除非需要让小臂完全与身体垂直、或把键盘固定在椅子两侧扶手上，那么类似这样的指法我个人觉得已经足够模拟许多人体工学键盘了。至于手腕的旋转角度方面，如果不能使键盘倾斜 60 度左右（参见人体工学鼠标），都是不够舒服的，目前我还没有见过主流成熟的解决方案。

画个粗糙的示意图，差不多就这个意思。

{{< figure name="2022-07-13-keyboard-qwerty.png" alt="my typing method" title="我的打字指法。图片来源：[File:Physical keyboard layouts comparison ANSI ISO KS ABNT JIS.png - Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Physical_keyboard_layouts_comparison_ANSI_ISO_KS_ABNT_JIS.png)，遵循 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 许可使用。有更改。" >}}

如果您是 ortholinear keyboard 的爱用者，或者是「正确」指法的受害者，那么请了解，我能看出这是一种基于「正确」指法进行的人体工学改造，它想尊重「正确」的指法。

但我自己的指法本来就是「错误」的，并且完全没有想要纠正的打算，于是这种非常接近传统但又不完全一样的配列，简直比换一个全新配列都让我感到困惑。假设为了这副键盘而改掉我的指法的话，那么我以后每次使用移动设备，或外出时使用任何其它电脑，都必须再经历一次这种困惑。

因此，如果您想向朋友推荐这样的键盘，特别是常打字或编程的朋友，那么让她们先借用您的键盘尝试几天再做决定，才是皆大欢喜的方案。

<!-- 作为幸运或不幸地从甚至没记事开始就能常常摸到电脑的人，我的肌肉记忆被非常牢固地锁在 staggered ANSI qwerty 上。任何 ANSI 之外的功能键配列都能让我迷路上好一阵子，更不要说非传统的字母配列了。 -->

最后还有一个问题，就是现在这种类似的键盘几乎全都是有线的，而且是连左右一条线，连电脑又一条线。我是说……应该不会有人体验过蓝牙键鼠之后还想回到有线键鼠的年代吧。

<!-- （目前惟一能找到的无线分离键盘是[Sirius Uni660](https://geekhack.org/index.php?topic=98905.0) -->

---

抱怨完了，接下来为依然在考虑购买的朋友们介绍一下开箱和设置体验。

打开盒子，盖子内面写着入门指南的网址（[Getting Started \| zsa\.io \| Store](https://www.zsa.io/101/)）。总结来说就是先检查盒子里的内容完整，然后插上电脑，推荐初学者先平放使用，完之后开始介绍键位等设置，然后结束。

<u>关于键位：</u>

需要注意的是，这个键盘的默认键位对初见非常可怕，不自己设置一下是真的会头痛。每个键可以设置点按、长按、双击、点按然后长按，还可以同时设置很多整个键盘层，来回切换，加倍复杂。这里放一下默认键位和我根据 [Toby's Moonlander macOS mastery](https://configure.zsa.io/moonlander/layouts/5yOoq/latest/0) 改编的模拟传统键位（右键新标签打开看大图）。

{{< figure name="2022-07-13-keyboard-default.png" alt="my typing method" title="默认键位：[Moonlander Default Layout](https://configure.zsa.io/moonlander/layouts/default/latest/0)" >}}

{{< figure name="2022-07-13-keyboard-my.png" alt="my typing method" title="我的键位：[Moonlander macOS mastery \[fork\]](https://configure.zsa.io/moonlander/layouts/eBvll/latest/0)" >}}

键位以固件形式直接刷入键盘内置的芯片里，换电脑时不需要重新设置。Mac 直接在 Chromium 浏览器里打开 [Oryx: The ZSA Keyboard Configurator](https://configure.zsa.io/) 就可以开始设置了，Win 和 Linux 需要配合下载 [Wally \| zsa.io \| Store](https://www.zsa.io/wally/)。或者也可以只使用这个工具或 [QMK](https://github.com/qmk/qmk_firmware) 完全离线设置，但如果不通过浏览器，似乎就无法使用 [Live Training](https://configure.zsa.io/train) 了，这是主要卖点之一， 而且真的非常有必要。

<u>关于背光：</u>大部分[社区分享的键位设置](https://configure.zsa.io/moonlander/search)都自带每个层每个按键不同的背光设置（键位图周围的光圈），不需要在背光教程那里纠结太久。需要注意的是，关掉键位设置的单独背光需要使用 `Toggle layer colors` 键，关掉全体背光使用 `Toggle lighting` 键。这两个设置是互相独立的，也就是关掉一个就会显示另一个（单独背光优先），需要两个都关掉才能完全熄灭整个键盘。

<u>关于键帽：</u>热插拔。官网的图不是特别清晰，但是除了方向键和少数几个符号键之外，其它所有键都是没有刻印的，数字键上也没有符号。另售含有 15 个功能键帽和一些意义不明的盖子的 [The Zip Kit](https://www.zsa.io/moonlander/zip-kit/)，但是在我看来，这么贵的一个键盘，几个功能键帽理应是随盒赠品才对。

<u>关于键轴：</u>似乎也是热插拔，但是我并没有多余的键轴，没有尝试。

<u>整体感想：</u>

- 白色真的很好看，我这个科技产品几乎全黑的人也欣赏了
- 拇指那几个功能键挺实用的，但是可能需要添加凸点指示，不然很容易按错
- 需要功能键刻印
- 需要无线版本，即使是只减掉连电脑那一条线也会极大提高方便程度

没有了。
