---
author: loikein
title: "如何脱出（英文）论文地狱"
published: "2021-06-02T16:42:29+0200"
categories:
    - 笔记
tags:
    - 学术
    # - academic
---
鉴于在可以预见的未来我至少还要写一到两篇大论文……

{{< sticker name="cat-sigh.png" animated="false" >}}


## 总体流程

1. 列出粗略目录，包括每章节题目
2. 跳过介绍和文献梳理，直接从正文开始写
3. 然后文献梳理
4. 然后介绍
5. 然后总结
6. （如果需要的话）最后摘要


## 文本层面的注意点

- 保持块状的、互相独立的文本结构：
    + 别讲 last section， next section 之类的，用编号或章节题目；
- 一旦大致有了点内容就开始用 [Grammarly](https://app.grammarly.com/) 逐段检查，能有效整理思路；


## LaTeX 相关的注意点

- 保持块状的、互相独立的文本结构：
    + 多用 `\label{}` 和 `\ref{}`；
    + Label 定了之后没发生大事儿就别改（大事儿：整节不存在了之类的）；
- 别改 [float position](https://tex.stackexchange.com/questions/8652/)！
- 准备一块备用屏幕，或者：
    - [通过“随航”将 iPad 用作 Mac 的第二个显示屏 - Apple 支持](https://support.apple.com/zh-cn/HT210380)
    - [Luna Display | Turn your Mac or iPad into a second display](https://astropad.com/product/lunadisplay/)
    - [Duet Display](https://www.duetdisplay.com/)


## 外围层面的注意点

- 写文本和做数据／做图的时候需要的姿势和心情是不一样的，多多尝试；
- 准备足够的咖啡和茶叶，特别是最后两周，不要逼自己熬夜之后还要出门补充物资；
- 准备几袋小包装的巧克力，实在写不动的时候吃一颗；
- 每天在开始工作之前洗澡，不要等到「正常时间」或者一天结束的时候再洗。


## 工作歌单

- <cite>All Day</cite>，适合一天刚开始心神不定的时候听：
    + [Girl Talk - All Day by mstrflsh | Free Listening on SoundCloud](https://soundcloud.com/mstrflsh/girltalk_allday)
    + [Girl Talk Shop](https://web.archive.org/web/20210413004858/http://illegalart.net/girltalk/shop/)（官网，可以免费下载，但网站最近好像挂了）
    <!-- + [All Day Girl Talk.m4a on Google Drive](https://drive.google.com/file/d/19vLOw42vxaF4Ci7BuobHfr1zw24e1nwS/view)（我自己从官网下载后转码的单文件完整版） -->
-  咖啡店类型的白噪音：
    +  [Coffitivity](https://coffitivity.com/)
    +  [The Ultimate Cafe Restaurant Background Noise Generator](https://mynoise.net/NoiseMachines/cafeRestaurantNoiseGenerator.php) （点右边栏中的 Presets 可以尝试不同的预设参数）
    +  [Coffee shop ambient noise by 145785379 | Free Listening on SoundCloud](https://soundcloud.com/145785379/sets/coffee)
- 下雨类型的白噪音：
    + [Online Rain Sound Generator and Forecast | Rain.today](https://rain.today/)
    + [Rainy Mood • #1 Rain Sounds • Sleep & Study](https://rainymood.com/)
    + [rainy mood by 145785379 | Free Listening on SoundCloud](https://soundcloud.com/145785379/sets/rainy-mood)（包含了上面那个网站使用的音乐文件，和另外一首也很长的）
-  [Noizio – ambient sound equalizer for macOS, iOS & Android.](https://noiz.io/)（付费 app。我常用的组合：巴黎咖啡馆 + 键盘 + 雷雨）


## 前辈给我提的细节意见

{{< row >}}
{{< col >}}
感谢 Dr. Felix Mauersberger 给予我的大力支持和一大堆建议。
{{< /col >}}
{{< col >}}
Huge shout-out to Dr. Felix Mauersberger for all the advice and support.
{{< /col >}}
{{< /row >}}

介绍部分：

> The best structure of introduction is:
> 
> 1. What is the status quo that most researchers agree with? Also define everything.
> 2. What is the problem with current methods?
> 3. How are you contributing towards a solution?

总结部分：

> Tips for writing the conclusion:
> 
> 1. what do we learn from your thesis in brief?
> 1. what is the punchline? any policy implications?
> 1. What are the limitations and implications for future research?
>     - if you had 2-5 years instead of just a few months for the thesis, what would you do?

表格：

> Tables and figures are the heart of a thesis/paper and need to be self-explanatory – at the very least when reading the captions. 
> 
> - All variables needs to be clearly labelled.
> - Avoid the use of acronyms.
> - And often summary statistics tables are more extensive.

看了以上修改意见以及例子之后我修改的表格：

{{< figure
    name="2021-06-01-surviving-thesis-hell-table.png"
    alt="Summary statistics table" >}}

数据来源：

- <cite>Scherpenzeel, A.C. and M. Das, ““True” Longitudinal and Probability-Based Internet Panels: Evidence From the Netherlands,” in M. Das, P. Ester, and L. Kaczmirek, eds., Social and Behavioral Research and the Internet: Advances in Applied Methods and Research Strategies, Boca Raton: Taylor & Francis, 2010, pp. 77–104.</cite>
- <cite>Gaudecker, Hans-Martin Von, Christian Zimpelmann, Moritz Mendel, Bettina Siﬂinger, Lena Janys, Jürgen Maurer, Egbert Jongen, Radost Holler, Renata Abikeyeva, Felipe Augusto Azuero Mutis, Annica Gehlen, and Eva Lucia Kleifgen, “CoViD-19 Impact Lab Questionnaire Documentation,” March 2021.</cite>
