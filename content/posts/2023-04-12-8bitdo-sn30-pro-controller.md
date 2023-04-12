---
title: "8BitDo SN30 Pro 使用报告"
date: "2023-04-12T20:30:40+01:00"
# published: ""
# lastmod: ""
categories: ["用户笔记"]
tags: []
# description: ""
---
一年前[买了这个手柄](/posts/2022-04-13-apr-gains-and-losses-online-shopping/)，一年后买了第二个，期间也发生了一些搞笑／无语的事情，在这里汇总记录一下。

以下是原本写的前置：

> 在手机上玩游戏的人是二等公民，在 iPad 上玩游戏的人是二等公民中的二等公民。以前用过 Xbox 手柄，但是实在是太大了，总感觉不跟手，DualShock 估计也是同样问题，懒得试了。市面上也确实有些稍微小一点的 MFi 手柄，但我也并不真的想要一个只能连接 iOS 设备的外设，万一以后买 Windows 了岂不是又整个过程重来一次？

事实证明，我以后确实[买了 Windows](/posts/2023-01-07-untypical-windows-experience/)。

当时 8BitDo 的手柄并没有官方 iOS 支持，所以我使用的是以下视频中的配对方式。一旦配对完成之后，下次开机开始跟普通正常的蓝牙设备就没有区别了。

{{< youtube id="P5gYInHiRMk" title="iPad Pro 11 Accessory Review: RunSnail 8Bitdo Sn30 Pro... - YouTube" >}}

最近发了个公告，[正式支持了 iOS / iPadOS 16.3 +](https://www.8bitdo.com/apple/)。然而由于我玩游戏的 iPad 还停留在 iPadOS 15，而且最近都是在 Windows 上玩的，并不清楚实际体验如何。

官网上的 FAQ 页面： [SN30 Pro faq | 8BitDo](https://support.8bitdo.com/faq/sn30-pro.html)


## 开机模式

根据配对时的开机方法存在不同手柄模式，在这里记录一下。（按键名是手柄上写着的按键，不是对应模拟键位的按键。）我一直都用的 XInput（Xbox 键位）。

| 配对开机键            | 模拟模式   | 指示灯 | 蓝牙设备名         | 运作情况（iPadOS 15）   |
|---------------------|-----------|-------|------------------|-----------------|
| {{< kbd X start >}} | XInput    | 2     | 8Bitdo SN 30 Pro | 所有按键均正常运作 |
| {{< kbd Y start >}} | Switch    | 滚动   | Pro Controller   | 无法连接 |
| {{< kbd B start >}} | DInput    | 1     | 8Bitdo SN 30 Pro | 无法连接 | 
| {{< kbd A start >}} | DualShock | 3     | DUALSHOCK 4 Wireless Controller | 没有触摸屏键，其它按键均正常运作 | 

注意，指定模式开机时，必须**长按**开机键组合，看到对应的指示灯亮起，才算成功切换了模式，否则默认启动为上一次启动时的模式，或者如果第一次启动，DInput。

直接按 {{< kbd start >}} 开机时启动为上次启动的模式。重启时清空连发键设置。iPadOS 15 的小组件有时能显示电量，有时又没有，很随缘。在 Windows 11 上如果启动为 XInput 模式，可以通过 Xbox Game Bar（游戏栏）查看电量，快捷键是 {{< kbd Win G >}}。

通过 Type-C 充电口可以有线链接至有 Type-C 插口的设备（包括 Windows，Mac，iPad），不过我没试过。


## 固件更新

下载地址： [Upgrade tool - Support - 8BitDo](https://support.8bitdo.com/firmware-updater.html)（注意这个不是 8BitDo Ultimate Software。）

如果在 Mac 上更新固件，上次启动为 XInput 模式，会提示需要手动进入更新模式，照着说明做就可以了。在 Windows 上没有这个步骤。


## 修理

最近旧手柄电池电量下降得很厉害，我想换个电池，在网上找了一些教程。

根据 [iFixit 上的拆机指南](https://www.ifixit.com/Guide/8BitDo+SN30+Pro+Gamepad+Analog+Stick+Cap+Replacement/124090)，我拆开外壳看了一眼（并且发现了电池鼓包）。外壳有五颗 T6 梅花螺丝（不需要撕掉贴纸），摇杆电路板有四颗 PH0 十字螺丝；电池的双面胶很牢固，可能需要一个拨片或者公交卡，除此之外不需要什么特殊工具。

新电池我打算照着这个视频里讲的买，现在在等春假结束，回学校学习一下锡焊。

<!-- 由于以后可能还要再换，同时在考虑 crimping，不知道有没有这样链接电池的先例…… -->

{{< youtube id="zXJ1l8M9nAI" title="8BitDo Battery Replacement - SN30/SF30 Pro - YouTube" >}}

（待续……）
