---
author: loikein
published: "2020-03-25T19:33:00+01:00"
slug: 2020-03-25-use-neofetch-as-motd-on-mac
categories:
- 笔记
tags:
- macOS
- Terminal
title: macOS + zsh 上使用 Neofetch 作为欢迎语（MotD）
---
前两天看了这篇文章：[给你的终端加点料 —— 自定义欢迎语](https://sspai.com/post/59297)，手痒想给自己的终端也搞一个。Neofetch 我是装了，但每次要看的时候都要输入命令未免麻烦，想着有没有什么设置方法能够打开终端时自动显示。查了大概二十个网页之后终于搞好了，记录一下。  
参考： [fxthomas/dotfiles: My standard Linux/Windows configuration
files](https://github.com/fxthomas/dotfiles)  
  
首先妳得安装了 Neofetch：

```sh
$ brew install neofetch
```

在 HOME 建一个 motd.sh 文件。最简单的方式当然是：

```sh
$ cd ~
$ touch motd.sh
```

我还用 stow，所以真正的文件并不在
HOME，那里只放了个快捷方式，不过效果没差。  
这个文件里只需要两行，第一行写 `neofetch`，第二行留空，保存即可。  
  
然后打开 ~/.zshrc，添加以下内容：  

```zshrc
# display motd
# https://github.com/fxthomas/dotfiles/blob/master/.zshrc
if [[ -e $HOME/motd.sh ]]; then source $HOME/motd.sh; fi
```


注意：如果妳安装了 conda，并且使用 `CONDA_AUTO_ACTIVATE_BASE=false`
这个配置，那么刚才添加的内容（事实上，任何其他内容）应该放在它的上面，因为根据经验这个配置必须在
`.zshrc` 的最后一行才能生效。  
  
保存，`$ source ~/.zshrc`，下一次打开终端或者打开新标签页就能看到结果了：  

[![](../images/thumbnails/2020-03-25-mac-zsh-shang-shi-yong-neofetch-zuo-wei-huan-ying-yu-motd-%25E6%2588%25AA%25E5%25B1%258F2020-03-2519.26.16.png)](../images/2020-03-25-mac-zsh-shang-shi-yong-neofetch-zuo-wei-huan-ying-yu-motd-%25E6%2588%25AA%25E5%25B1%258F2020-03-2519.26.16.png)
