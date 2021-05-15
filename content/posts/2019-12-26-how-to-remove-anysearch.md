---
author: loikein
published: "2019-12-26T16:09:00+01:00"
lastmod: "2020-01-03T13:24:57.793+01:00"
slug: 2019-12-26-how-to-remove-anysearch
categories:
- 笔记
tags:
- macOS
- 浏览器
title: 血书：移除 anysearch
---
重要的事说在前面：  

> 不要轻易打开任何来源不明的网站  
> 不要轻易下载或打开任何来源不明的文件  
> 不要点击不认识的人发给你的邮件里的任何链接和附件


李总的电脑苦 anysearch 已久，而且她安装的任何浏览器，无论重置还是重装，都会在系统重启后被
anysearch 接手。是时候整理一下网路上的信息，彻底解决一下这个问题了。  
  
参考： [How to get rid of Any Search Manager on your Mac](https://macpaw.com/how-to/remove-anysearch-malware-from-mac)  
系统：macOS 10.15 (19A583)

在系统偏好设置里：  

1.  打开 `系统偏好设置 > 描述文件`，删除任何标题包含 `AtlantaResults`
    的描述文件
2.  打开 `系统偏好设置 > 用户与群组`，在当前用户的 `登录项`
    标签页里，移除任何不认识的程序（李总的电脑上没有）

在访达里：  

1.  打开 `/Library/LaunchAgents/`，删除任何名称包含 `AtlantaResults` 的
    `.plist` 文件
2.  打开 `/Library/LaunchDaemons/`，重复上一步
3.  打开 `~/Library/LaunchAgents/`，重复上一步
4.  打开 `/Library/Application Support/`，删除任何名称包含
    `AtlantaResults`
    的文件夹，可能有两个或以上，例子：`com.AtlantaResults`，`com.AtlantaResultsDaemons`，等等
5.  打开 `~/Library/Application Support/`，重复上一步
6.  打开 `~/Library/Application Support/Google/Chrome/Default/`，删除
    `Preference`（没有扩展名的文本文件）
7.  打开 `废纸篓`，立即删除刚才放进来的几个文件和文件夹

2020-01-03 更新：  

1.  根据 [参考](https://discussions.apple.com/thread/8394251)，还有两个需要检查的路径：`/System/Library/LaunchAgents/` 和 `/System/Library/LaunchDaemons/`

重启。  

在 Chrome 里：  

1.  打开 `⋮ > 设置 > 搜索引擎`，停用控制地址栏的扩展程序
2.  打开 `⋮ > 更多工具 > 扩展程序`，删除任何带有 `AtlantaResults`
    的扩展程序 
3.  在地址栏里输入 `chrome://policy` 并打开，检查没有托管机构

重启。  

到这里为止，李总的电脑就没事儿了。如果以后还有问题我会更新……（希望没有）
