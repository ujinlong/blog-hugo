---
title: "时隔多年买了 Windows 电脑"
date: "2023-01-07T15:43:39Z"
# published: ""
# lastmod: ""
categories: ["用户笔记"]
tags: ["Windows"]
# description: ""
---
型号 ASUS ROG Flow X13 \(2022\)，芯片 Ryzen 9 6900HS + RTX 3050 Ti，RAM 32 GB，比我现在的主力机 MacBook 高一大截，用起来却没那么顺畅，好吧，我到底都在期待些什么呢。  
操作系统是 Windows 11 Home。我听说了很多关于 Win 11 的坏话，但是装机自带，先用着，如果没太大问题就不折腾了。其实现在装机自带 Win 10 的 2021 款也有货，但是作为一个科技产品爱好者，我还是对为一个系统版本购买两年前的硬件的想法有些许抵抗。反正也不是不能重装。

这算一个比较突发的购物。自从切换到 Mac 之后，长久以来我一直想要一台游戏本（我知道自己在说什么），而且是 13 寸的游戏本（我真的知道自己在说什么）。这两个要求一出来就已经没有多少选择了。谢谢 ASUS，我以前不该对您有偏见的。至于为什么 2021 年没买……2021 年根本没时间玩游戏。  
我知道正在举办的 CES 2023 上刚刚发布了新款 X13，但是不知道该等到猴年马月才能买到手，而且旧款在打折，于是思考了一天之后还是下单了。

上一次拥有自己的 PC 已经是四年前，而那次买的不甚满意，没用多久就又卖掉了，至于再上一次重度使用 PC 已经是九年前了。在这期间偶尔用工位上的 PC，因此也不会完全忘记了该怎么使用，但毕竟是自己的电脑（虽说目前几乎只用来打游戏），还是稍微设置一番，记录下来。  
您很快就会发现这篇文章的主题是——如何让 Windows 11 用起来更像 macOS。（笑）


## 键盘

<!-- AltGr (also Alt Graph) -->

从史前我第一次摸到电脑（Windows）起，一直都是用的 ASCII（美国英语）键盘，无论任何地方买的 Mac 也都能定制成 ASCII 键盘，结果就是近些年用 Windows 时最大的阻碍之一变成了不适应地区键盘。

为了能够正常打字，尤其是符号，我在自己的个人维基中维护了一个很小的[地区键盘特殊字符互查表](https://wiki.loikein.one/computer/keyboards)。


## 字体渲染

没想到啊没想到，Windows 11 的字体渲染居然依旧如此糟糕。以下是我的实机截图，我想问问哪位用户受得了这种委屈？

{{< figure name="2023-01-07-onedrive-windows.png" alt="OneDrive setup on Windows" >}}

作为对比证据，我安装了 OneDrive for Mac，只为了截一张一模一样的图。系统语言都是简体中文。

{{< figure name="2023-01-07-onedrive-mac.png" alt="OneDrive setup on macOS" >}}

一个（不完全有用的）改善方法是在系统设置里搜索 `ClearType`，点击使用`调整 ClearType 字体`功能，不过我依稀记得上述截图似乎是在调整后截的，嗯……  
另外，Firefox 似乎有自己的一套字体渲染调整方案。如果系统中调得粗细刚好合适的话，在 Firefox 里就会变得太粗。嗯……

另外一个据说有用的东西是 [MacType](https://github.com/snowie2000/mactype)，不过暂时还没有正式支持 Windows 11，而且我也没有重度使用到那个地步（有些游戏不知道是否内置了字体渲染引擎，显示效果堪比 Mac，笑死），还在观望。


## 运行 Winget

用惯了 Homebrew，就连 Mac App Store 都几乎全部从 Homebrew 里操作，换到 Windows 上必然是第一时间试图寻找替代品。  
Windows 11 自带了 Winget，但是不知出于什么原因，我第一次试图使用的时候反馈找不到命令，必须以管理员身份打开 PowerShell 才能运行。第二次往后，就可以直接打开 PowerShell 使用了。  
[子命令](https://learn.microsoft.com/en-us/windows/package-manager/winget/#commands)跟 Homebrew 差不多，学习成本几乎为零。试列举几例最常用的：

- `winget search` = `brew search` 搜索程序名
- `winget show` = `brew info` 显示程序详情
- `winget install` = `brew install` 安装程序
- `winget uninstall` = `brew uninstall` 卸载程序

注意除了 `winget search` 之外，其余命令接的软件名都最好（必须？）是搜索出来的 ID。有个网站 [winget.run](https://winget.run/) 可以图形化地查询，类似 [Homebrew Formulae](https://formulae.brew.sh/)。


## 功能／软件

<!-- 除非特别注明，以下软件均为通过 Winget 安装。 -->


### Bitdefender

````bash
winget install Bitdefender.Bitdefender
````

曾经的 Windows 经验告诉我杀毒软件是必要的（并不知道是否现在依然如此）。我不清楚是 ASUS 还是 Windows 11 自带了 McAfee，并且开机就有一个月的试用期。但是一个月转瞬即逝，鉴于这个电脑几乎惟一的目的就是玩游戏，我不想增加太多订阅服务，所以还是安装了有免费选项的 Bitdefender。  

观察：

- 在安装过程中会引导用户卸载其它所有杀毒软件。
- 大概每三四天就会自动关闭一次，然后弹窗说您的（免费）许可已过期，只需要点开重新激活一次就行了，但是感觉十分垃圾软件。


### Firefox

````bash
winget install Mozilla.Firefox
````

谁要用 Edge 啊……

使用的主题是自己做的 [boring theme](https://addons.mozilla.org/en-US/firefox/addon/boring-theme/)。如果您也想试试一个清爽又能帮助集中注意力的亮色主题，请允许我王婆卖瓜一下。

顺便看一眼 [Firefox 快捷键列表](https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly#firefox:win11:fx109)。


### Microsoft PowerToys

````bash
winget install Microsoft.PowerToys
````

主要用来重映射键盘按键和快捷键，以及 Quick Launch （类似 Alfred / Spotlight）。也自带让屏幕临时常亮的功能。

目前设置的重映射：（交换按键需要来回设置两次；在部分全屏程序中会失灵）

- {{< kbd "Caps Lock" >}} ↔︎ {{< kbd Esc >}}
- {{< kbd "Ctrl(L)" >}} ↔︎ {{< kbd "Alt(L)" >}}


<!-- ### f.lux

````bash
winget install flux.flux
````

模拟苹果的夜览（当然，我知道苹果的夜览大概是模仿的它），平时感觉不强烈，没有了才发现这么重要。可以搜索城市名后全自动运行。全屏程序自动关闭功能有点问题，所以我已经关掉了关机启动。
 -->

### QL-Win

````bash
winget install QL-Win.QuickLook
````

模拟苹果的空格查看文件。还有很多[插件](https://github.com/QL-Win/QuickLook/wiki/Available-Plugins)，不过目前为止自带功能已经很够我用了。


### 小狼毫

````bash
winget install Rime.Weasel
````

为什么微软拼音不能把候选框调成竖向？

另外，顺序切换输入法的快捷键是 {{< kbd Win Space >}}。

<!-- 记一下配置，配色改为与 Mac 统一，参考了以下链接：

- [CustomizationGuide · rime/home Wiki](https://github.com/rime/home/wiki/CustomizationGuide#%E4%B8%80%E4%BE%8B%E5%AE%9A%E8%A3%BD%E5%B0%8F%E7%8B%BC%E6%AF%AB%E9%85%8D%E8%89%B2%E6%96%B9%E6%A1%88)
- [Rime 西米 for Squirrel](https://gjrobert.github.io/Rime-See-Me-squirrel/)
 -->

简单配置了一下，颜色有点丑，不过我改了一下改不动，不知道怎么回事（连内置的都选不了），算了。  
用户文件夹位置：`C:\Users\user\AppData\Roaming\Rime`

{{% fold  "`weasel.custom.yaml`" %}}
{{< highlight yaml >}}
patch:
  style:
    horizontal: false
    inline_preedit: true
    corner_radius: 5
    border_height: 0
    border_width: 1
    line_spacing: 5
    font_point: 22
    label_font_point: 18
{{< /highlight >}}
{{% /fold %}}

<!-- 
patch:
  "preset_color_schemes/macos_native":
    name: macos_native
    author: macos_native
    back_color: '0xEBECEC'
    text_color: '0x000000'
    hilited_text_color: '0x000000'
    hilited_back_color: '0xEBECEC'
    hilited_candidate_text_color: '0x26211C'
    hilited_candidate_back_color: '0xFCD6B9'
    hilited_candidate_label_color: '0x7E6C5C'
    hilited_comment_text_color: '0x7E6C5C'
    candidate_text_color: '0x242424'
    label_color: '0x767676'
    comment_text_color: '0x767676'
  style:
    color_scheme: macos_native
    horizontal: false
    inline_preedit: true
    corner_radius: 5
    border_height: 0
    border_width: 1
    line_spacing: 5
    font_face: Lantinghei
    font_point: 22
    label_font_face: Monaco
    label_font_point: 18
 -->

### 剪贴板历史

根据[微软的帮助文档](https://support.microsoft.com/en-us/windows/clipboard-in-windows-c436501e-985d-1c8d-97ea-fe46ddf338c6)，Windows 10 及 11 自带剪贴板历史工具，启动方式是 {{< kbd Win V >}}。第一次使用时需要激活一下。


### 截图

我只想一键截全屏，不要多余步骤，并自动保存在硬盘里的某个地方（相当于 macOS 上的 {{< kbd command shift 3 >}}），怎么就这么难呢。

试了各种各样的方法（仅限免费的），最后发现最简单的方法还是 Windows 11 自带的 Xbox Game Bar（中文好像也叫游戏栏） 的[截图功能](https://support.xbox.com/en-US/help/friends-social-activity/share-socialize/record-game-clips-game-bar-windows-10)。

注意点：

- 打开 Xbox Game Bar 的快捷键：{{< kbd Win G >}}
- 在`设置`（齿轮图标） > `快捷方式`中可以设置`截取屏幕截图`的快捷键，我设成了 {{< kbd Ctrl F12 >}}，用右手可以很方便地单手键入。
- 还可以设置截图成功时播放提示音或弹出临时提示，我选的后者。
- 截图保存位置：`我的文档 > 视频 > 摄像` （根据[微软帮助文档](https://support.xbox.com/en-US/help/games-apps/game-setup-and-play/adjust-capture-settings-windows-10#ExpanderHeader21)，这个文件夹可以拖到任意地方，但是我懒得想象和处理可能发生的问题了。）

注意它[只能截取当前活跃窗口](https://answers.microsoft.com/en-us/windows/forum/all/how-to-make-xbox-game-bar-record-the-whole-screen/d6d1a50b-dada-4236-bdd3-41953d70141b)，所以要么全屏打开需要截图的程序，或者截取的时候注意光标焦点。  
想要在全屏程序之外截取全屏，就只能用愚蠢的 Windows 截图工具（快捷键：{{< kbd Win Shift S >}}，保存位置：`我的文档 > 图片 > 屏幕截图`）并忍耐必须多点一次的繁琐了。


## 已经卸载

### Bluetooth Battery Monitor

地址： [Bluetooth Battery Monitor](https://www.bluetoothgoodies.com/)

原因：安装过程中损坏蓝牙驱动，导致 XInput 游戏手柄（8BitDo）无法连接。

修复方法：`设置` > `系统` > `疑难解答` > `其他疑难解答` > `蓝牙` > `运行`，完成后重启电脑即可。


### Caffeine

地址： [Caffeine](https://www.zhornsoftware.co.uk/caffeine/)

原因：不管用。

<!-- 跟 Mac 上的 [tomasf/caffeine](https://github.com/tomasf/caffeine) 一样的功能，不过我已经换到 [Hammerspoon](https://www.hammerspoon.org/) 了。
 -->


### Wox

地址： [Wox-launcher/Wox](https://github.com/Wox-launcher/Wox)

原因：不知道是不是没安装 Everything 的原因，有好多程序都发现不了，但我真的不需要搜索文件。现用 PowerToys 的 Quick Launch。

<!-- 作为离开了 Alfred 就不会用电脑的人，我是不可能强迫自己去忍受 Windows 开始目录的。 -->
