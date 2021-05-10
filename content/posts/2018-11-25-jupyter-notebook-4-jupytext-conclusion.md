---
author: loikein
published: "2018-11-25T20:02:00+01:00"
slug: 2018-11-25-jupyter-notebook-4-jupytext-conclusion
categories:
- 笔记
tags:
- R
- Rmarkdown
title: Jupyter 自救日记（4）jupytext + 总结
---
统一改了标题。希望这篇能是最后一篇了，本懒人居然折腾工具折腾到这份儿上，真是本末倒置。  
  

## 为什么要用 Jupyter Notebook

我一开始接触 Jupyter 的理由很简单，就是拿它来代替我马上订阅到期的 Ulysses。我没有写长文的习惯，短的文章要不放在这里要不放在手机备忘录里，Ulysses 对我而言只是一个同步很方便的 Markdown / 代码 / 笔记收集处而已。  
重复了很多遍还是要说，我是一个懒人。我喜欢所见即所得，喜欢四处同步，喜欢一步到位，不喜欢重复劳动。所以（？）我一直不甚喜欢 Markdown，平时数学笔记[用 Pages](https://support.apple.com/zh-cn/HT202501)，长这样：  

[![](/post-img/2018-11-25-jupyter-zi-jiu-ri-ji-4-jupytext-zong-jie-Screenshot%2B2018-11-25%2Bat%2B19.30.20.png)](../images/2018-11-25-jupyter-zi-jiu-ri-ji-4-jupytext-zong-jie-Screenshot%2B2018-11-25%2Bat%2B19.30.20.png)


之前写过一篇[关于 Ulysses 的博文](https://loikein.blogspot.com/2018/09/ulysses.html)，其实那是我第一次试图在 Ulysses 里面放表格，非常麻烦，且只有在预览的时候才能看到表格效果。我还尝试过在 Ulysses 里插入数学公式，倒是[在文件顶端加两行](https://ulysses.app/tutorials/writing-equations)就行了，但总还是有点不爽。还有一点，我半年前开始订阅 Ulysses 的时候，对计算机技术并没有现在这么得心应手，大学期间学的计算机课 75% 是在这半年里（大四下学期）学的，思维方式和读英文文档的舒适度可谓日新月异。  
  
至于 R，上个月（10.16）来波恩报到之后，看到教授推荐，我才第一次在电脑里装了 RStudio，然后开始在 DataCamp 上面上课，至今只上完了 10 门课，在这期间几乎一直用 Ulysses 记笔记（因为 Pages 没有代码高亮功能）。  
一开始的笔记是这样的，写起来还挺顺手：  

[![](/post-img/2018-11-25-jupyter-zi-jiu-ri-ji-4-jupytext-zong-jie-Screenshot%2B2018-11-25%2Bat%2B19.19.30.png)](../images/2018-11-25-jupyter-zi-jiu-ri-ji-4-jupytext-zong-jie-Screenshot%2B2018-11-25%2Bat%2B19.19.30.png)

开始学做图之后，想能够同时看到代码和做图效果，就每次都要在 RStudio 里 run 一遍，保存图片，再粘贴到 Ulysses，很是恼人：  

[![](/post-img/2018-11-25-jupyter-zi-jiu-ri-ji-4-jupytext-zong-jie-Screenshot%2B2018-11-25%2Bat%2B19.20.39.png)](../images/2018-11-25-jupyter-zi-jiu-ri-ji-4-jupytext-zong-jie-Screenshot%2B2018-11-25%2Bat%2B19.20.39.png)

  
有一天不知怎的看到了[这篇文章](https://www.jianshu.com/p/86117613b7a6)，心里一惊。虽然我并不写程序，但这种文字、代码、运行结果的混排真是正正地戳中了我记笔记的痛点。修改了代码之后直接在笔记本里运行，直接更新结果，简直是[学习编程](https://i.imgur.com/IarNH89.jpg)的法宝。于是开始了漫长（怎么才过了十天）的搬家过程。  
再过两周就没有 Ulysses 用了，不搬也得搬。  
  

## [Jupytext](https://github.com/mwouts/jupytext) 和 R Notebooks

日前写完前三篇自救日记，在网上漫无目的地摸鱼，发现了[益辉老师的博客](https://yihui.name/cn/)，遂翻之。看到[这篇](https://yihui.name/cn/2018/09/pursuit-of-likes/)的时候，我顿时意识到这正是我需要的多后缀同步工具（`.ipynb` & `.Rmd`）。但疑惑为什么说它是轮子？于是本人第一次知道了 R Notebooks 的存在（这顺序真的，绝了）。  
断断续续看完 RStudio 上的[介绍视频](https://www.rstudio.com/resources/webinars/introducing-notebooks-with-r-markdown/)，以及[第一次笔记本大战](https://yihui.name/en/2018/09/notebook-war/)，我几乎要倒戈 R Notebooks 了（有了 Jupytext，以后如果还想再倒了也很方便，哈哈）。最后，迫使我留在 Jupyter 的最大原因是侧边栏目录插件（toc2），因为我记出来的笔记几乎每篇都很长，没有目录跳转简直只能记不能翻。用 Ulysses 的时候也觉得没有侧边栏目录很恶心，姑且是忍下来了，但是由奢入俭难啊。  
  

## 总结

目前我的使用习惯是这样的：  

-   上统计课 / DataCamp：打开 Jupyter Notebook 记笔记
-   速查笔记 / 给别人看笔记：用随便什么文本编辑器或者 RStudio
    打开自动生成的 `.Rmd` 文件，保存之后下次打开 Jupyter
    Notebook 会自动更新到 `.ipynb` 里

至于 `.html` 之类的更好看的格式，暂时没有分享的需要，等要用了再改
`jupyter_notebook_config.py`，应该也就是一分钟的事儿。  
  

------------------------------------------------------------------------

  
（真诚希望）这个系列日记到这里就结束了。之前脑子一热给统计之都的编辑发了自荐邮件，收到了十分热情的回复，希望能有空好好整理整理，写篇正式一些的文章。
