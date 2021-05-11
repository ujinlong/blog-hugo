---
author: loikein
published: "2018-11-15T14:55:00+01:00"
slug: 2018-11-15-jupyter-notebook-1-installation-config
categories:
- 笔记
tags:
- R
title: Jupyter 自救日记（1）下载，配置 R，配置 R embed in Python，杂七杂八
---
## 下载 Jupyter Notebook

下载安装 [Anaconda](https://www.anaconda.com/download/#macos)。  
  
Terminal：`jupyter notebook` 自动在网页里打开 Jupyter 主页，就可以写
Python 了。  
  
注意：所有 Anaconda 环境下的 terminal 命令（`conda …`）都需要 quit
Jupyter 之后才能使用。  
  

## 杂项之一

`pip --upgrade` 升级一下  
  

## 安装 JDK

装了 Jupyter 之后 terminal 老提示我没有
JDK，不知道为什么没人说过，反正装了没坏处。  
[JDK 8
官网下载](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)，安装。  
Terminal：`java -version`，出现 `java version "1.8.0_191"`
之类的提示就算成功了。  
  

## 安装 [IRkernel](https://github.com/IRkernel/IRkernel)

首先电脑里要装了 R。  
Terminal：`conda install -c r r-essentials`，遇到 `y/n` 一路 `y`
就行了。  
  

## 安装扩展管理（nbextensions），安装目录扩展（TOC2）

Terminal：`conda install -c conda-forge jupyter_contrib_nbextensions`  
  
打开 Jupyter，主页上方多了一个叫 Nbextensions 的标签，在里面搜索 Table
of Contents (2)， 点 Enable 就行了。  
上图：  

![](/post-img/2018-11-15-jupyter-notebook-1.png)


## 调整 R 输出图像尺寸

来源：[这里](https://blog.revolutionanalytics.com/2015/09/resizing-plots-in-the-r-kernel-for-jupyter-notebooks.html)  

  
  

## 安装 [rpy2](https://rpy2.bitbucket.io/)（目前用不了）

Terminal：`pip install rpy2`  
  
`import rpy2print(rpy2.__version__)`  
  

## R embed in Python

Jupyter notebook（python）：`%load_ext rpy2.ipython`  
  

## Troubleshooting

`conda update r-essentials`  
  
Dead kernel 反复且无法自动重启：  
`conda install -c defaults zeromq`  [来源于这里](https://github.com/ContinuumIO/anaconda-issues/issues/999#issuecomment-243165502)  
  
退出 `(base)`（Anaconda）环境：  
`source deactivate`  
  

## 导出 PDF

电脑里要装了 [MacTeX](http://tug.org/mactex/mactex-download.html)。  
  
~~安装 [nbconvert](https://nbconvert.readthedocs.io/en/latest/index.html)~~ 通过
Anaconda 安装的版本默认自带。  
Jupyter notebook：File \> Download as \> PDF via LaTeX
