---
title: "一些 LaTeX Beamer 主题推荐"
date: "2023-01-31T15:34:14Z"
# published: ""
# lastmod: ""
categories: ["编程笔记"]
tags: ["LaTeX", "Beamer"]
description: "看这一篇就……算了。"
---
为了做幻灯片，把 Overleaf 上所有（……）的 Beamer 主题都看了一遍。两个原则，开源和好看，但 LaTeX 的主题使用方式本身就决定了它不可能不开源，所以好看就行[^1]。加分项是使用开源字体。

[^1]: 标准是我的审美，不过如果您在看我的博客，那大概也不会太反对我的审美（希望）。

依赖是文档里写的，没写也不代表没有依赖。我只负责看，不负责试（喂），试了之后如果有问题再编辑备注。

按首字母排序。

<time>2022-02-02</time> 编辑：

1. 定制字体都需要使用 LuaTeX 或 XeTeX（而不是 pdfLaTeX）编译。
1. Minted 需要在编译时使用 `--shell-escape` 选项。


## Auriga

地址：[anishathalye/auriga: Auriga is a minimalist LaTeX beamer presentation theme 📽](https://github.com/anishathalye/auriga)

预览：

{{< figure
src="https://raw.githubusercontent.com/anishathalye/assets/master/auriga/auriga.png"
alt="Auriga Beamer theme demo image"
>}}

依赖：LuaTeX

字体：[Raleway](https://www.fontsquirrel.com/fonts/raleway)，[Lato](https://www.fontsquirrel.com/fonts/lato)，[Hack](https://www.fontsquirrel.com/fonts/hack)


## Beamerports

地址：[marczellm / beamerports — Bitbucket](https://bitbucket.org/marczellm/beamerports/src/master/)

[复刻](https://tex.stackexchange.com/a/147533) MS PowerPoint 和 Powerdot （除了 Beamer 之外另一个 LaTeX 幻灯片包，没怎么见过有人用）主题的项目。没有预览图。


## DarkConsole/LightConsole

地址：[kmaed/kmbeamer: My themes for Beamer.](https://github.com/kmaed/kmbeamer)

预览：  
深色主题：[（PDF）](https://github.com/kmaed/kmbeamer/blob/master/examples/example_DarkConsole.pdf)  
亮色主题：[（PDF）](https://github.com/kmaed/kmbeamer/blob/master/examples/example_LightConsole.pdf)

字体：[中ゴシックBBB](https://www.morisawa.co.jp/fonts/specimen/1504)（专有字体）


## Focus

地址：[elauksap/focus-beamertheme: Focus: a minimalist presentation theme for LaTeX Beamer.](https://github.com/elauksap/focus-beamertheme)

预览：

{{< figure src="https://github.com/elauksap/focustheme/raw/master/focus-demo/demo-titlepage.jpg" alt="Focus Beamer theme demo image - title page" h="220px" >}}

{{< figure src="https://github.com/elauksap/focustheme/raw/master/focus-demo/demo-typeset.jpg" alt="Focus Beamer theme demo image - main page" h="220px" >}}

字体：[Fira Sans](https://github.com/bBoxType/FiraSans)


## Metropolis

地址：[matze/mtheme: A modern LaTeX Beamer theme](https://github.com/matze/mtheme)

预览：

{{< figure
src="https://camo.githubusercontent.com/2bfbd675f061f4fe42f3f2290ca78d33dabe3c3ff0ce92a4eeca379d43910e25/687474703a2f2f692e696d6775722e636f6d2f4278753532667a2e706e67"
alt="Metropolis Beamer theme demo image"
>}}

字体：[Fira Sans](https://github.com/bBoxType/FiraSans)


## Nord

地址：[junwei-wang/beamerthemeNord: Nord beamer theme](https://github.com/junwei-wang/beamerthemeNord)

预览：

{{< figure src="https://github.com/junwei-wang/beamerthemeNord/raw/master/screenshots/light-titlepage.png" alt="Nord Beamer theme demo image - light - title page" h="220px" >}}

{{< figure src="https://github.com/junwei-wang/beamerthemeNord/raw/master/screenshots/light-usage.png" alt="Nord Beamer theme demo image - light - main page" h="220px" >}}

{{< figure src="https://github.com/junwei-wang/beamerthemeNord/raw/master/screenshots/dark-titlepage.png" alt="Nord Beamer theme demo image - dark - title page" h="220px" >}}

{{< figure src="https://github.com/junwei-wang/beamerthemeNord/raw/master/screenshots/dark-usage.png" alt="Nord Beamer theme demo image - dark - main page" h="220px" >}}

字体：[Yanone Kaffeesatz](https://www.fontsquirrel.com/fonts/yanone-kaffeesatz)，[Andika New Basic](https://www.fontsquirrel.com/fonts/andika-basic)，[DejaVu Sans Mono ](https://www.fontsquirrel.com/fonts/dejavu-sans-mono)


## Presento

地址：[RatulSaha/presento: A clean, simple and extensible template for presentations. Supports XeTeX and Beamer.](https://github.com/RatulSaha/presento)

预览：[（PDF）](https://github.com/RatulSaha/presento/blob/master/demo/presento.pdf)

依赖：XeTeX，xcolor，fontspec，setspace，tikz，enumitem

字体：[Montserrat](https://www.fontsquirrel.com/fonts/montserrat)，[Lato](https://www.fontsquirrel.com/fonts/lato)，[Noto Sans](https://www.fontsquirrel.com/fonts/noto-sans)，[Alegreya Sans SC](https://www.fontsquirrel.com/fonts/alegreya-sans)，[Inconsolata](https://www.fontsquirrel.com/fonts/Inconsolata)


## Pure Minimalistic

地址：[kai-tub/latex-beamer-pure-minimalistic: A true minimalistic LaTeX beamer template](https://github.com/kai-tub/latex-beamer-pure-minimalistic)

预览：（另有浅色主题）

{{< figure
src="https://github.com/kai-tub/latex-beamer-pure-minimalistic/wiki/beamertheme-pure-minimalistic-demo.png"
alt="Pure Minimalistic Beamer theme demo image"
>}}

字体：[Fira Sans](https://github.com/bBoxType/FiraSans) 或 [Noto Sans](https://www.fontsquirrel.com/fonts/noto-sans)


## sthlmNord

地址：[mholson/sthlmNordBeamerTheme](https://github.com/mholson/sthlmNordBeamerTheme)

预览：

{{< figure src="https://github.com/mholson/sthlmNordBeamerTheme/raw/main/images/dark/Page%2001.png" alt="sthlmNord Beamer theme demo image - dark - title page" h="170px" >}}

{{< figure src="https://github.com/mholson/sthlmNordBeamerTheme/raw/main/images/dark/Page%2006.png" alt="sthlmNord Beamer theme demo image - dark - main page" h="170px" >}}

{{< figure src="https://github.com/mholson/sthlmNordBeamerTheme/raw/main/images/light/Page%2001.png" alt="sthlmNord Beamer theme demo image - light - title page" h="170px" >}}

{{< figure src="https://github.com/mholson/sthlmNordBeamerTheme/raw/main/images/light/Page%2006.png" alt="sthlmNord Beamer theme demo image - light - main page" h="170px" >}}

字体：[Libertinus](https://github.com/alerque/libertinus)


## 备忘扩展阅读

- [A Tutorial for Beginners (Part 1)—Getting Started - Overleaf, Online LaTeX Editor](https://www.overleaf.com/learn/latex/Beamer_Presentations%3A_A_Tutorial_for_Beginners_(Part_1)%E2%80%94Getting_Started)
- [Principles Around Writing Beamer Themes – Jérôme Belleman](https://jeromebelleman.gitlab.io/posts/publishing/beamerthemes/)
- [Animation on beamer - TeX - LaTeX Stack Exchange](https://tex.stackexchange.com/questions/177057/)

