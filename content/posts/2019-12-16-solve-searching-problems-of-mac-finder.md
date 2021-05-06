---
author: loikein
published: "2019-12-16T12:08:00+01:00"
slug: 2019-12-16-solve-searching-problems-of-mac-finder
categories:
- 笔记
tags:
- macOS
title: 血书：Mac Finder 搜索不出东西的解决方法（Spotlight，Alfred，…的问题都可能相关）
---
自从升级到 Mojave 还是哪次开始，我的 Finder 搜索就不好用了。本人是个搜索狂人，一夜之间所有 `.savedSearch` 全部报销，重建索引（系统偏好 \> Spotlight 或者 Onyx）都不管用，哇……  
然而直到昨天 Alfred 还是好用的，我就忍了，然后下载了 Alfred 4，结果所有非系统自带 app（包括 MAS 下载的）都搜索不到了，本人像瞎了一样实在受不了了，总而言之找到了这个网站：  
[What to Do When Mac Finder is Slow or Not
Responding?](https://www.anysoftwaretools.com/mac-finder-slow-not-working/#3_Problematic_Finder_Preference_Files)  

当 Spotlight 还能搜到文件的时候：  

1.  在 Spotlight 里搜索 `~/Library/Preferences/`，双击打开
2.  在打开的文件夹里发现（目测）`com.apple.finder.plist`，删除
3.  重新启动
4.  打开 Finder，这时候所有之前的设置都消失了，会打开一个最近项目文件夹，耐心等待载入完毕
5.  试试搜几个东西，耐心等待载入完毕

万一 Spotlight 已经不动了：  

1.  打开 Terminal
2.  输入 `rm ~/Library/Preferences/com.apple.finder.plist`，回车
3.  可能需要输入密码
4.  继续上一项 3~6 步

搞定，原先保存的 `.savedSearch` 都能用了。以上。
