---
author: loikein
published: "2018-11-16T23:33:00+01:00"
slug: 2018-11-16-jupyter-notebook-2-binder
categories:
- 笔记
tags:
- R
title: Jupyter 自救日记（2）云端运行 Jupyter Notebook / Lab (R kernel) / RStudio： Binder & GitHub
---
继续折腾 Jupyter。  
看了[如何用 iPad 运行 Python 代码？](https://zhuanlan.zhihu.com/p/36830594)这篇文章之后，我心潮澎湃，自己也来搞一下。  
  

## 初始化本地 GitHub 环境

我其实一直觉得 GitHub
不适合我这种懒人。然而发现[一篇文章](https://www.jianshu.com/p/0a40854e54a6)讲得真的很好，行文风格完全符合我对这种类型的说明文的想象，遂从善如流。  
总结一下：  

1.  在 GitHub 上新建一个 repository，initialize with readme
2.  安装 GitHub Desktop
3.  选择 Clone A Repository，选择刚建好的
4.  在本地目录里显示克隆好的空 repository
5.  把需要的文件拖进去
6.  在 GitHub Desktop 里 Commit
7.  在 GitHub Desktop 里 Push origin

以后每次需要添加本地文件的时候，打开 GitHub Desktop，Pull / Fetch
origin，再重复步骤 5 ~ 7 就可以了。  
或者你可以 [fork 我的
repository](https://github.com/loikein/my-jupyter-notes)，然后随便改改。  
  

## Binder 可以做什么，不可以做什么

Binder 可以：  

-   在浏览器内运行 Jupyter Notebook / Lab（Python / R kernel），RStudio
    等软件（1G RAM）
-   加载 Jupyter Notebook extensions
-   加载 R 包
-   读取、编译、运行 GitHub 上的 `.ipynb` 文件
-   分享链接给任何人

Binder **不可以**：  

-   Commit to
    GitHub（[参考](https://mybinder.readthedocs.io/en/latest/faq.html#can-i-push-data-from-my-binder-session-back-to-my-repository)）
-   一直开着（连续 10 分钟不使用会自动掉线）

即是说，就算在 Binder 里新建 / 修改 /
保存了文件，关闭之后再次打开是会消失的。  
解决方法是在 Binder 里修改了文件之后，点 File &gt; Download as &gt;
Notebook，把下载的文件放到 GitHub 的本地文件夹里，再 Commit + Push
就可以了。  
然而由于 Binder 的 launch 机制是在 Docker 上创建 repository
的快照，所以所有更改都只有到下一次 launch Binder 的时候才会生效。  
  

## 一些重要文件

这些文件（保留文件名）需要事先放在 GitHub 的 repository
里才能起作用。（[参考](https://mybinder.readthedocs.io/en/latest/using.html)）  
  
`runtime.txt`：初始化 R
kernel（必要，第一次用修改成当天日期，以后除非出问题就不要改了）  

  
`requirements.txt`：加载额外文件、extension（[参考1](https://mybinder.readthedocs.io/en/latest/using.html?highlight=requirements.txt)，[参考2](https://mybinder.readthedocs.io/en/latest/config_files.html)）  

  
`postBuild`：加载 extension  

  
`install.R`：加载 R 包，这里是我最近在学的包  

  

## 运行 Binder

1.  打开 [mybinder.org](https://mybinder.org/) 
2.  URL 填刚才放好了文件的 GitHub repository 的网址
3.  branch 可以不填，默认 master
4.  复制生成好的链接，可以重复使用
5.  把徽章复制到 GitHub repository 的 `README.md` 里
6.  点 launch
7.  等

等的时长看人品，如果放了太多 R 包很容易出错。一旦 launch
成功一次，下次就会很快了。  
  

## 运行 Jupyter Lab / RStudio

Binder launch 成功后应该出现 Jupyter Notebook 的 Home 页面。网址最后有个
`/tree`，改成 `/lab` 回车进入 Jupyter Lab，改成 `/rstudio` 回车进入
RStudio。（[参考](https://mybinder.readthedocs.io/en/latest/howto/user_interface.html)）
