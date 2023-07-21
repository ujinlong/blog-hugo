---
title: "在 Hugo 里显示系列文章"
date: "2021-05-28T16:42:58+02:00"
lastmod: "2021-06-17T17:27:15+0200"
categories: 
    - 编程笔记
tags:
    - Hugo
---
实机演示：

{{< figure
    name="2021-05-28-hugo-series.png"
    alt="Series partial in a post" >}}

参考：

- [Building a Series List with Hugo Shortcodes - RealJenius.com](https://realjenius.com/2017/08/07/series-list-with-hugo/)
- [Show related content in series in Hugo [shortcode]](https://damien.co/blog/2020-07-18-hugo-related-series-content-shortcode/)
    + Code: [hugo-content-shortcodes/series.html at master · damien1/hugo-content-shortcodes](https://github.com/damien1/hugo-content-shortcodes/blob/master/series.html)
- [Use Custom Taxonomies in Hugo](https://damien.co/blog/2020-08-01-create-custom-taxonomies-hugo/)

主要改动点：

- 做成 partial 而不是 shortcode，不需要手动添加；
- 允许一篇文章属于多个 series；
- 使用 `<dl>` 排版，内容与形式统一。

代码：（[hugo-theme-diary/series.html](https://github.com/loikein/hugo-theme-diary/blob/main/layouts/partials/series.html)）

```go-html-template
{{ range $index, $series := .Params.series }}
<dl class="post-series">
  <dt>
    This is a post in the
    <a href="{{ "/series/" | relLangURL }}{{ . | urlize }}">{{ $series }}</a>
    series:
  </dt>
  <dd>
  <ol>
    {{ range $ind, $post := $.Site.Pages.ByDate }}
      {{ if in $post.Params.series $series }}
        <li>
          {{ if eq $post.Permalink $.Page.Permalink }}
            {{ $post.Params.title }}&emsp;(current post)
          {{ else }}
            <a href="{{ $post.Permalink }}">{{ $post.Params.title }}</a>
          {{ end }}
        </li>
      {{ end }}
    {{ end }}
  </ol>
  </dd>
</dl>
{{ end }}
<hr />
```

站点设置需要更改：（`config.yaml`）

```diff
taxonomies:
    tag: tags
    category: categories
+    series: series
```
