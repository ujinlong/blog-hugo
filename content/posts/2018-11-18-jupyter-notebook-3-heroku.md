---
author: loikein
published: "2018-11-18T17:00:00+01:00"
slug: 2018-11-18-jupyter-notebook-3-heroku
categories:
- 笔记
tags:
- R
- Python
title: Jupyter 自救日记（3）云端运行 Jupyter Notebook：Heroku & GitHub（Python）+ rnotebook.io（R）
---
继续（继续）折腾 Jupyter。  
后记：出于各种原因我已经把[我的 fork](https://github.com/loikein/heroku-jupyter)  存档了，存档之后 Heroku 链接还能继续用。  

> TLDR：人生苦短，请用 [rnotebook.io](https://rnotebook.io/)。

## Python：Heroku & GitHub

看了以下两篇文章之后决定试试 Heroku。  
[Heroku 快速搭建 免费高性能 Jupyter
Notebook](https://www.jianshu.com/p/598dabc085ac)  
[Herokuの無料枠を使ってJupyterサーバを立てる方法](https://myenigma.hatenablog.com/entry/2016/08/08/225242)  
  
首先需要注册一个 Heroku 的帐号，免费的。  
这个[自动一键部署](https://github.com/pl31/heroku-jupyter)的环境目前稳定版只支持
Python 3，我完整部署了三次才成功。作者写了 2 + 3
正在开发中，没试，不知道好不好用。  
使用方法：  

1.  Fork 它
2.  在自己 fork 出来的 repository 里面点一下紫色的 Deploy to Heroku 按钮
3.  弹出的 Heroku 页面里面如果没有设置 Config Vars
    的选项的话失败了，关掉重新点一次，如果有就继续
4.  在 `JUPYTER_NOTEBOOK_PASSWORD` 里输入登录 Jupyter 首页的密码，如果在
    repository 里放了自己的文档的话就不要告诉别人，如果打算纯当平台就随便设个简单的
5.  点 Deploy
6.  等

等个三五分钟，全部跑好之后会出现 View
按钮，点进去（第一次打开需要再等等）输入密码就出现 Jupyter 首页了。  
  
只用 Python 的人大概到这里就很开心了，但是我只用 R……。  
  

## 在 Heroku 上部署 Jupyter kernel 的尝试

一把辛酸泪，目前暂时没有总结的动力了，姑且列一下参考链接。  
（意外成功部署了 LaTeX kernel，但是 Heroku 免费用户每个 deployment 只有
500 MB 的限额，发布不动了，查 TinyTeX 就是为了修正，但是我已经被 Heroku
折腾怕了，有缘再见吧。）  
  
[Using R with Jupyter
Notebooks](https://blog.revolutionanalytics.com/2015/09/using-r-with-jupyter-notebooks.html)  
[installspec: Install the kernelspec to tell Jupyter about
IRkernel](https://rdrr.io/github/IRkernel/IRkernel/man/installspec.html)  
[GitHub - IRkernel](https://github.com/IRkernel/IRkernel)  
[IRkernel - Installing from
source](https://irkernel.github.io/installation/#source-panel)  
  
[R FAQ - How can R be installed
(Unix-like)](https://cran.r-project.org/doc/FAQ/R-FAQ.html#How-can-R-be-installed_003f)  
[R FAQ - What machines does R run
on?](https://cran.r-project.org/doc/FAQ/R-FAQ.html#What-machines-does-R-run-on_003f)  
[R installation - Installing R under
Unix-alikes](https://cran.r-project.org/doc/manuals/r-devel/R-admin.html#Installing-R-under-Unix_002dalikes)  
[Installing R in
Linux](http://www.jason-french.com/blog/2013/03/11/installing-r-in-linux/)  
[The minimal R
package](http://kbroman.org/pkg_primer/pages/minimal.html)  
  
[TinyTeX](https://yihui.name/tinytex/)  
  
[GitHub - repo2docker](https://github.com/jupyter/repo2docker)  
  

## [rnotebook.io](https://rnotebook.io/)

这是我目前能找到的最好的在线 Jupyter Notebook 解决方案。  
  
优点：  

1.  自带 R kernel
2.  Launch 奇快（反例：Binder）
3.  每个用户分配一个文件夹，可以保存，保存了下次还能打开，且文件修改不影响
    launch 速度（反例：Binder）
4.  任何有链接的人都能看、运行、编辑、保存
5.  在手机上操作顺畅

缺点：  

1.  目前还没有设置密码的方式
2.  无法直接下载为 PDF
3.  不支持 Python（但是管它的！我又不用 Python）
