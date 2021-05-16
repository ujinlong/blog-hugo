---
author: loikein
title: 折腾火狐浏览器（外观篇）
published: "2021-05-15T21:49:56+0200"
categories:
- 应用程序
tags:
- 浏览器
- Firefox
---
可能有朋友已经发现了，我是个控制狂。很懒的控制狂，但依然是个控制狂。尤其是在我日常用的物品上，我会几乎不择手段地折腾每一件物品，直到完全满意为止；但是一旦我满意了，那么接下来很长一段时间我都不会再对它动任何手脚了，除非又出现新的不满。

对电子产品也一样，不仅是物理上的外观，还有软件层面，我都想要折腾到完全满意为止。但折腾软件这事儿并不是那么简单；作为一个半路出家的业余程序员，我一直觉得自己对电脑知识的认知是一个螺旋上升的过程，有时候一下就懂了，有时候过了几个月甚至几年才发现，哦，原来那句话是那个意思。因此，对电脑上的很多软件我都还处在正在早期的折腾过程中。

但最近折腾了好一通火狐之后，感觉好像已经到达了一个不错的平衡，适合写篇总结了。我本来想把目前为止知道的所有东西都塞进这一篇博文里，但发现这个，方向性实在差得有点远……那就先从容易写完（。）的外观改造开始吧。

---

本系列的下一篇博文（如果有的话……）中会具体写我为什么喜欢火狐。一言以蔽之，火狐本身并不是一个专注于隐私（privacy-oriented）的浏览器，却是一个可定制化程度非常高的浏览器。有许多选项和插件能够用来控制火狐的一举一动，包括各种隐私增强，也包括改变整个浏览器的外观。  
在我对浏览器隐私问题的警惕性还没有现在这么高的时候，因为火狐对外观定制的支持，它就已成为我的第一选择了。我不是在说主题啊颜色啊那些几乎每个浏览器都有的东西。妳见过能够仅仅通过添加几个文件，就把一个浏览器改造成另一个浏览器的样子吗？我第一次发现这些东西的时候整个人都是懵的：（没试过，仅供参考，不代表推荐）

{{< figure
    link="https://github.com/ideaweb/firefox-safari-style"
    class="no-border"
    src="https://raw.githubusercontent.com/ideaweb/firefox-safari-style/master/img/preview-legacy.png"
    caption="[ideaweb/firefox-safari-style](https://github.com/ideaweb/firefox-safari-style)"
>}}

{{< figure
    link="https://github.com/kube/firefox-edge-theme"
    class="no-border"
    src="https://raw.githubusercontent.com/kube/firefox-edge-theme/master/screenshotLight.png"
    caption="[kube/firefox-edge-theme](https://github.com/kube/firefox-edge-theme)"
>}}

{{< figure
    link="https://github.com/muckSponge/MaterialFox"
    class="no-border"
    src="https://user-images.githubusercontent.com/5405629/45172944-21d91900-b24a-11e8-8bc5-03814121b0de.png"
    caption="[muckSponge/MaterialFox](https://github.com/muckSponge/MaterialFox)"
>}}

既然这种操作都可以，那么隐藏某个功能或按钮，或者改掉某个难看的图标，这种小事还不敢敢单单？

对火狐的外观改造，主要是通过 `userChrome.css` 和 `userContent.css` 这两个文件进行的。这时候又要祭出我的{{< ruby 名言 迷惑发言 >}}了：

{{< mstdn mastodon.social 105140316454973088 >}}

那能怎么办，学呗。最近梳理博文，发现短短三年前我还是个[写出了几行表格 CSS 就欢呼雀跃的小朋友](/posts/2018-09-18-me-vs-tables-in-ulysses/)。时光飞逝啊。

## 别人的设置

{{< preview "https://github.com/Aris-t2/CustomCSSforFx" >}}

这是我所知道的最全面也是最活跃的火狐外观改造社区了。这个 repo 包含的选项之多之杂，偶尔翻一下很好玩，看久了容易头痛，我一般是有需要或者想参考具体写法的时候才去。

另外一些好康的：

- [FirefoxCSS Store](https://firefoxcss-store.github.io/)
- [Timvde/UserChrome-Tweaks: A community maintained repository of userChrome.css tweaks for Firefox](https://github.com/Timvde/UserChrome-Tweaks)
- [MrOtherGuy/firefox-csshacks: Collection of userstyles affecting the browser](https://github.com/MrOtherGuy/firefox-csshacks/)

然后还有经常会碰到的几篇介绍向文章，如果妳完全不知道我在说什么的话推荐读一读：

- [userchrome - firefox](https://www.reddit.com/r/firefox/wiki/userchrome)
- [index/tutorials - FirefoxCSS](https://www.reddit.com/r/FirefoxCSS/wiki/index/tutorials/)
- [What is userChrome.css? What can it do?](https://www.userchrome.org/what-is-userchrome-css.html)

## 开启自定义外观的方法

1. 在地址栏里打 `about:config`，点`接受风险并继续`。
1. 搜索 `toolkit.legacyUserProfileCustomizations.stylesheets`。
    - 如果不存在（？真的会这样吗），那么选择`布尔`类型，然后创建；
    - 如果已经存在，但值是 `False`，点最右边的双箭头改成 `True`；
    - 如果值是 `True`，那没事了。

找到用户文件夹：

1. 菜单栏里`帮助 > 更多故障排除信息`。
1. 找到`配置文件夹`，打开。这里面应该已经放着一些，比如说 `prefs.js`，`extensions.json`，之类的文件。
1. 如果没有文件夹叫 `chrome`，那么创建一个。如果有，点进去。
1. 把 `userChrome.css` 和 `userContent.css` 放 `chrome` 里面就行了。注意每次修改后都需要重启浏览器才能生效。

开启浏览器工具箱：

1. 找到 Web 工具箱设置。
    - 按 {{< kbd command option I>}}，或者 Windows，{{< kbd ctrl shift I >}}，打开 Web 工具箱，然后某个地方有省略号下拉菜单，点进去找到设置；
    - 或者直接按 {{< kbd F1 >}}。
1. 在高级设置里，勾选`启用浏览器界面及附加组件的调试工具箱`和`启用远程调试`。

或者，如果妳知道妳在做什么，所有东西放一起：

```js
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("devtools.chrome.enabled", true);
user_pref("devtools.debugger.remote-enabled", true);
user_pref("devtools.debugger.prompt-connection", false);
```

## 我的 `userChrome.css`

以下代码全都是直接粘贴进 `userChrome.css` 就能用的。

### 给标签图标加背景

第一次跳进这个兔子洞，其实是出于一件非常具体的不满。我不知道 Mac 的常规版本以及 Windows 版是什么样的，但是我用的 Firefox Developer Edition 在 Mac 上的默认主题是这样的：

{{< figure
    name="2021-05-08-firefox-default-theme.png"
    alt="Firfox default theme">}}

鉴于[我对浏览器的要求是「消失」](https://mastodon.social/@loikein/106151100055012195)，这蓝色不够消失，我就整了个自定义主题，管它叫 boring theme，长这样：

{{< figure
    name="2021-05-08-firefox-boring-theme.png"
    alt="Firfox boring theme">}}

但是用久了发现，有些网站的图标（favicon）在背景标签页里是这样的：

{{< figure
    name="2021-05-08-firefox-favicon-problem.png"
    alt="Firfox favicon problem">}}

如果妳用过 GitHub CI 就会知道，它会在 GitHub 那个本来已经很小的 favicon 右下角加一个更小的红色的叉或者绿色的勾来表示 CI 成功了没有。真的，就这个背景啊，根本没有人类能够看出它到底是个勾还是个叉。  
这事儿困扰了我好几个月，哪儿都没有答案，reddit 上有个加方格子背景的，用了一阵子之后觉得不够优雅（详情参见[我在 r/firefox 发的帖](https://www.reddit.com/r/firefox/comments/n5b9hu/)），最后还是浴室沉思完自己解决了。现在我的标签页栏长这样：

{{< figure
    name="2021-05-08-firefox-favicon-solution.png"
    alt="Firfox favicon solution">}}

这就是那种，只要找到了解决方法（通常还很简单）动手一次就能一劳永逸的问题。而且 `userChrome.css` 是直接写在设置里的，就算重启、重装、甚至换电脑，也只要把文件复制过去就完事儿了。这件事情让我回味了好久最开始学编程的感动。

扯远了。代码：

```css
.tab-icon-image {
  filter: drop-shadow(1px 0 0 white) 
          drop-shadow(-1px 0 0 white) 
          drop-shadow(0 1px 0 white) 
          drop-shadow(0 -1px 0 white) !important;
}
```

### 隐藏不需要的按钮，显示需要的按钮

比如一个很简单的需求：能不能一直显示「阅读器视图」按钮？（~~我不要火狐觉得这个页面合不合适阅读模式，我要我觉得~~）  
有时候火狐到底给不给妳那个按钮的逻辑是很混乱的，甚至有许多人做了[各种各样的扩展](https://addons.mozilla.org/en-US/firefox/search/?q=Reader%20View)试图解决这个问题，但是我基本都试了，没一个稳定的。最后某天在浏览器工具箱里乱翻的时候发现，得，这个按钮居然永远都在那儿，只是有时候不显示而已。靠。

代码：

```css
#reader-mode-button {
    visibility: visible !important;
    display: block !important;
}
```

再比如一个很简单的需求：能不能不要显示那个新建标签页的加号按钮？我压根就没用过，那么大一个按钮搁那儿，白白占了我本来就标签页一大堆的位置。

代码：

```css
#new-tab-button {
    visibility: collapse !important;
    display: none !important;
}
```

不难看出，火狐 UI 里重要的按钮基本上都有 id，所以不论要显示什么或者隐藏什么，找到 id 之后照着这个模板往里加就是了。很简单吧。

### 改造标签的布局

先直接看效果吧：

{{< video name="2021-05-08-firefox-tab">}}

这是我非常喜欢的一个改动，融合了 Aris-t2/CustomCSSforFx 里的几个（标着不能同时使用！的）文件。怎么说呢，一切都是为了有更多空间显示标题，以及能随时关掉任何背景标签页。  
本来灵感是 Safari，结果改完之后回头一看，好家伙，Safari 的关闭按钮跟 favicon 是分别占位置的。那没事了。

代码中的要点如下：

1. 让关闭按钮仅在 hover 时显示（对背景标签页也生效）；
1. 把关闭按钮放到整个标签的最左边；
1. hover 时不显示 favicon；
1. 由于必须确保 favicon 的位置，所以在网站没设置 favicon 的时候显示默认占位用 favicon；
1. （不知道是强迫症友好还是强迫症不友好）标题如果显示不全的话，上面本来会有个半透明的遮罩，我嫌麻烦给隐藏了。

```css
/* Firefox Quantum userChrome.css tweaks ************************************************/
/* Github: https://github.com/aris-t2/customcssforfx ************************************/

/****************************************************************************************/
/* tab close icon settings - [only use one at a time] ***********************************/
/* tab_close_show_on_hover_only.css */

#TabsToolbar #tabbrowser-tabs .tabbrowser-tab:not([pinned]):not(:hover) .tab-close-button {
  visibility: collapse !important;
  display: none !important;
}

#TabsToolbar #tabbrowser-tabs .tabbrowser-tab:not([pinned]):hover .tab-close-button {
  visibility: visible !important;
  display: block !important;
}

/* tab_close_at_tabs_start.css" */
/* loikein: slightly adjusted margins to go with favicon */

#TabsToolbar #tabbrowser-tabs .tabbrowser-tab:not([pinned]) .tab-close-button {
  -moz-box-ordinal-group: 0 !important;
  -moz-margin-start: -4px !important;
  -moz-margin-end: 6px !important;
}

/* missing_tab_favicon_restored_default.css */

.tabbrowser-tab:not([pinned]) .tab-icon-image:not([src]) {
  display: inline !important;
}

.tabbrowser-tab:not([pinned])[busy] .tab-icon-image {
  display: none !important;
}

/* loikein: hide favicon when close button appears */

#TabsToolbar #tabbrowser-tabs .tabbrowser-tab:not([pinned]):hover .tab-icon-stack {
  visibility: collapse !important;
  display: none !important;
}

.tab-label-container { mask-image: none !important; }
```

## 我的 `userContent.css`

兔子洞里更深一层的兔子洞。

这个文件是用来修改火狐自带的设置等页面的。我没什么特别想改的，所以还没太深入了解，到目前为止惟一改了的是把扩展一览页面改成紧凑模式，用的这个文件： [CustomCSSforFx/addonlists_compact_fx72.css](https://github.com/Aris-t2/CustomCSSforFx/blob/master/classic/css/aboutaddons/addonlists_compact_fx72.css) （直接全选粘贴）。效果长这样：

{{< figure name="2021-05-08-firefox-about-addons.png" alt="Firefox about:addons">}}

呼，真是篇长文。今天就到此为止吧。
