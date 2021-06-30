---
author: loikein
published: "2020-01-05T15:30:00+01:00"
lastmod: "2020-03-25T19:34:06.435+01:00"
slug: 2020-01-05-mac-restore-list
categories:
- 用户笔记
tags:
- macOS
title: Mac 重装清单
---

## 墙纸

-   [Wallpaper Archive |
    grafiksyndikat](https://grafiksyndikat.com/wallpaper/)
-   [BLACK series by Jean-Marc Denis](http://jmd.im/black)



## 无法通过 homebrew 安装的

-   [Text2Image](https://www.yige.app/page/doc/download.md) - 文字转长图
-   [ScanSnap Home : Fujitsu
    Global](https://www.fujitsu.com/global/products/computing/peripheral/scanners/scansnap/software/sshome/index.html) -
    扫描仪套件
-   [SCU](https://github.com/neolee/SCU) - 图形化鼠须管配置工具
-   [OpenAudible - Audio Book Manager](https://openaudible.org/)



## Homebrew 备份法

### 参考

-   [Easy macOS Loads By Way of Homebrew Bundle — Liss is
    More](https://www.caseyliss.com/2019/10/8/brew-bundle)
-   [Homebrew/homebrew-bundle](https://github.com/Homebrew/homebrew-bundle)
-   [macOS 使用 homebrew-bundle 优雅地备份和恢复软件列表 |
    HelloDog](https://wsgzao.github.io/post/homebrew-bundle/)

### 备份

（在终端里）：  

1.  安装 homebrew：  
    `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
2.  安装 mas：  
    `brew install mas`
3.  安装 bundle 并在当前目录创建 Brewfile：  
    `brew bundle dump --describe`

### 恢复

（根目录）：  
`brew bundle --file="~/Brewfile"`  
  

## 我的 Brewfile

[GitHub Gist](https://gist.github.com/loikein/57bbda0722a5b2aee5d5f2f616fc6194)
