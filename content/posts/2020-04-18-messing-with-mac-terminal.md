---
author: loikein
published: "2020-04-18T16:19:00+02:00"
lastmod: "2021-05-12T00:25:05+0200"
slug: 2020-04-18-messing-with-mac-terminal
categories:
    - 折腾
tags:
    - macOS
    - Terminal
title: 折腾 Mac：「我想要一个跟 RStudio 一样的 terminal」
---
2021-05-12 更新：后来我换了 Alacritty \+ tmux 来替代 iTerm，用 Antigen 来替代 OMZ，但是因为懒还没写总结。（靠

---

昨天我发了这么一条嘟嘟。其实这是个很小白的需求，因为真实的程序员必然不是这么用
Terminal
的，发出来之后马上就有人评论说这个目前几乎不可能。然而我是小白嘛，小白的红利就是初生牛犊不怕虎，
于是我就开始了。  
  
折腾前的样子在这里有截图：[mac + zsh 上使用 Neofetch
作为欢迎语（MotD）](/posts/2020-03-25-use-neofetch-as-motd-on-mac/)  
  
折腾后：鼠标点击切换面板；左边是正常的
shell；右上是可以模糊搜索的历史；右下是文件浏览器，用鼠标或者键盘控制，右键复制文件路径。  

{{< figure name="2020-04-18-messing-with-mac-terminal.png" class="no-border">}}

看起来还不错，可以假装用上 RStudio 了。  

（目前的）配置是这样的：  

-   shell：Zsh（macOS 默认 shell）
-   主题：[romkatv/powerlevel10k: A Zsh
    theme](https://github.com/romkatv/powerlevel10k)
-   配色：Google Light，来源：[Gogh - Color
    Scheme](https://mayccoll.github.io/Gogh/)
-   terminal：[iTerm2](https://www.iterm2.com/)
-   字体：[Hack Nerd
    Font](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Hack)（任何
    Nerd 字体应该都没问题）
-   历史：[dvorka/hstr: bash and zsh shell history suggest
    box](https://github.com/dvorka/hstr)
-   文件浏览： [ranger/ranger: A VIM-inspired filemanager for the
    console](https://github.com/ranger/ranger)
    -   图标：[alexanderjeurissen/ranger\_devicons: Ranger plugin that
        adds file glyphs / icon support to
        Ranger](https://github.com/alexanderjeurissen/ranger_devicons)

在装主题的时候，如果妳也用 oh-my-zsh 的话，需要注意设置 submodule，这个就先不讲了……  
其余不需要什么特别设置，在 iTerm2 里 vertical split（左右分割）一次，然后 horizontal split（上下分割）一次，再在各个窗格里打上命令就好了。历史似乎是合并的，也即是说，在左边打过什么命令之后，在右上或者右下按「↑」键会弹出来刚才在左边打的命令。
