---
author: loikein
published: "2018-11-28T08:40:00+01:00"
lastmod: "2021-04-25 14:35:46.938 +0200"
slug: 2018-11-28-card-links
categories:
- 笔记
tags:
- 网页制作
- Blogger
- Hugo
title: 把链接做成卡片形式：一个纯 HTML 的尝试
---
2021-04-25 更新：

今天发现了这个好东西：[Useful Hugo Templating · Ypertex Blog](https://blog.ypertex.com/articles/useful-hugo-templating/)

使用：

```html
{{</*preview src="…"*/>}}
```

效果：

{{<preview src="https://blog.ypertex.com/articles/useful-hugo-templating/">}}

{{<preview src="https://liatas.com/posts/escaping-hugo-shortcodes/">}}

如何呢？

Shortcode 代码如下：（保存为 `/layouts/shortcodes/preview.html`）  
CSS 有点多就不贴了，都在 `custom.css` 里，有兴趣的朋友可以用 inspector 查看。

```html
{{ with getJSON (printf "https://api.microlink.io/?url=%s" (.Get "src")) }}
<div class="link-card">
    <div class="link-card--body">
        {{ with .data.logo }}
        <img src="{{ .url }}" alt="" class="link-card--favicon">
        {{ end }}
        <div class="link-card--info">
            <h6><a href="{{ .data.url }}"class="stretched-link">{{ .data.title | title }}</a></h6>
            {{ with .data.description }}<p>{{ . | htmlUnescape | markdownify }}</p>{{ end }}
        </div>
    </div>
    <div class="link-card--footer">
        <p class="link-card--attribution">
            {{ with .data.author }}{{ . }}{{ end }}{{ if and .data.author .data.publisher}},
            {{ end }}{{ with .data.publisher }}<cite>{{ . }}</cite>{{ end }}
        </p>
    </div>
</div>
{{ end }}
```

***

我一直很想做一个这种东西，但是不知道该搜什么关键词（……），就一直偷懒，昨晚终于是给我找到了摸鱼的时间，搞出来了。  
先上预览。这是我用关键词 `カード リンク -wordpress` 搜出来的惟一一个相关的链接，结果证明它真的很有用。  

<a href="https://qiita.com/mamohacy/items/f2a8538bb0ff17833e0c" rel="nofollow noopener noreferrer">
<table class="link-box" data-align="center">
<tbody>
<tr>
<td width="160px"><img src="https://api.thumbnail.ws/api/abced59c1824672a69ab5d7dfd3043b9323ac8d36cd9/thumbnail/get?width=160&url=https://qiita.com/mamohacy/items/f2a8538bb0ff17833e0c" /></td>
<td width="320px">Qiitaに「はてなブログ」のブログカード風リンク埋め込みを挿入する方法 - Qiita</td>
</tr>
</tbody>
</table>
</a>
  
递归：  

<a href="/posts/2018-11-28-card-links/">
<table class="link-box" data-align="center">
<tbody>
<tr>
<td width="160px"><img src="https://api.thumbnail.ws/api/abced59c1824672a69ab5d7dfd3043b9323ac8d36cd9/thumbnail/get?width=160&url=https://loikein.blogspot.com/2018/11/html.html" /></td>
<td width="320px">把链接做成卡片形式：一个纯 HTML 的尝试</td>
</tr>
</tbody>
</table>
</a>

我用了文中提到的 Chrome extension：[Create
Link](https://chrome.google.com/webstore/detail/create-link/gcmghdmnkfdbncmnmlkkglmnnhagajbm?hl=ja)，换到 Firefox 之后，又找了一个功能类似的插件：[Link Text and Location Copier](https://addons.mozilla.org/en-US/firefox/addon/link-text-and-location-copier/)。

只要把以下代码粘贴进对应的浏览器拓展的选项页面，再设置一个容易记的名字，在任何网页上右键就可以一键复制粘贴到 Blogger 的 HTML 编辑器。  

Create Link 版本：（[GitHub Gist](https://gist.github.com/loikein/8c62bceb235bbb104f51333a2153c27f#file-blogger-link-box-html)）

```html
<style>%newline%
    .link-box { box-shadow:2px 2px 5px #DDD; }%newline%
    .link-box table{ border-collapse: collapse; margin: auto; }%newline%
    .link-box tr { border: 1px solid #DDD; text-align: left; }%newline%
    .link-box td { padding: 1em; border: 0px; text-align: left;}%newline%
</style>%newline%
<a href="%url%" target="_blank">%newline%
<table align=center class="link-box"><tr>%newline%
    <td width=160px>%newline%
        <img style="float:left;" src="https://api.thumbnail.ws/api/abced59c1824672a69ab5d7dfd3043b9323ac8d36cd9/thumbnail/get?width=160&url=%url%" alt="" width="160" height="90" />%newline%
    </td>%newline%
    <td width=320px>%newline%
        %title%%newline%
    </td>%newline%
</tr></table></a><br />
```

Link Text and Location Copier 版本：（[GitHub Gist](https://gist.github.com/loikein/8c62bceb235bbb104f51333a2153c27f#file-blogger-link-box2-html)）

```html
<style>%N
  .link-box { box-shadow:2px 2px 5px #DDD; }%N
  .link-box table{ border-collapse: collapse; margin: auto; }%N
  .link-box tr { border: 1px solid #DDD; text-align: left; }%N
  .link-box td { padding: 1em; border: 0px; text-align: left;}%N
</style>%N
<a href="%U" target="_blank">%N
  <table align=center class="link-box"><tr>%N
  <td width=160px>%N
    <img style="float:left;" src="https://api.thumbnail.ws/api/abced59c1824672a69ab5d7dfd3043b9323ac8d36cd9/thumbnail/get?width=160&url=%linkurl%" alt="" width="160" height="90" />%N
  </td>%N
  <td width=320px>%N
  %T%N
  </td>%N
 </tr></table></a><br />
```

Create Link 为开源项目，地址：[ku/CreateLink: Make Link alternative to chrome](https://github.com/ku/CreateLink)

Link Text and Location Copier 为开源项目，地址：[evilnickname/link-text-location-copier: Firefox web extension that lets you copy link text and location.](https://github.com/evilnickname/link-text-location-copier)
