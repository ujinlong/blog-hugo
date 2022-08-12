---
author: loikein
title: "在 Hugo 中管理草稿的一点心得"
published: "2021-05-11T14:53:44+02:00"
lastmod: "2021-05-23T17:20:32+0200"
categories:
    - 编程笔记
tags:
    - Hugo
---
先前也写过了，曾经有一阵子我喜欢把 Blogger 的草稿箱当日记本用。截止目前为止我一共有 72 篇草稿，对比公开发布的博文共 149 篇，这数量还是蛮可观的；再加上其中一部分草稿作为日记的特殊意义，使我陷入了需要一个正经的草稿管理系统的麻烦境地。

Hugo 的草稿管理，光看官方文档的话，感觉就是没有草稿管理。确实，标记为 draft 的页面是不会在正式发布出来的站点中显示的，但是用 Hugo 的大家基本都会把所有源代码扔到某个 repository 里，然后如果没什么特殊原因的话都是公开的，那么草稿也会一并展现出来，这是我所不希望的。  
但另一方面，并不是说只要彻底 `git ignore` 就好了的，毕竟这么重要的草稿，没有异地备份的话，万一不小心删了怎么办？因此还是需要某种 repository，而且需要跟现存的服务（GitHub，Netlify，等等）和谐共存。  
再者，我自己的草稿，在本地当然是想看起来怎么方便怎么好，一个是方便自省，一个是确实也有很多正在写的打算发出来的文章，需要提醒自己别忘了还有这些 WIP 的存在。

那么需求就很明朗了。

1. 草稿跟公开的页面彻底分离；
2. 草稿有在线备份，并且只有我自己能查看；
3. 运行 `hugo server --buildDrafts` 的时候，有草稿一览界面，并且很容易找到入口。

---

以下是我的配置。省略了其他跟本文主题无关的文件，以及所有路径都是从整个站点的路径开始的。

首先，整个站点的源文件是一个 git repo，在线地址是 [loikein/blog-hugo](https://github.com/loikein/blog-hugo)。这是所有人都能看到的，里面不包含任何草稿文件。

`/.gitignore` 里相关的行如下：（`draft/` 主要用于防手残）

```plaintext
draft/
/content/drafts/
```

第二，我的电脑上的本地文件中，`/content/` 的结构如下：

```plaintext
.
└── content
    ├── archives
    │   ├── drafts.md
    │   └── posts.md
    ├── drafts
    ├── posts
    ├── about.md
    └── ...
```

其中 `/content/drafts/` 里放着所有的草稿，`hugo new` 新建文件的时候也都是直接新建在那里。  
`/content/archives/drafts.md` 的内容其实跟 `/content/archives/posts.md` 基本一模一样，只有 frontmatter，但以防万一我还是在 `/content/archives/` 底下放了个 `.gitignore` 来略过它。

然后，我在 `/content/drafts/` 底下新建了一个 git repository，添加所有文件，并将它上传到 GitHub 上的一个 private repo 里。  
在这个过程中我尝试了 submodule，但是这玩意儿虽然自己用起来方便，Netlify 却硬是想 pull，还不能够设置忽略某几个文件或文件夹，因而作罢。

---

至此，需求 1，2，和 3 的前三分之二就都满足了。3 的最后一点让我头痛了好一阵子，在某天厕所沉思的时候终于想了出来。

在运行 `hugo server --buildDrafts` 的时候，一篇草稿的题头在我眼里是这样的：

{{< figure
    name="2021-05-11-hugo-draft-management.png"
    alt="Example title part of a draft">}}

这个蓝色的草稿标签正是完美的草稿一览页面入口。因此，只要在 `/layouts/_default/single.html` 里，将对应的代码改一下就行了。点击之后，就会跳转到跟「博文归档」一模一样的「草稿归档」，且这两个页面列出的文章是完全没有交集的。

```html
{{- if .Draft -}}
<span class="draft-label"><a href="/archives/drafts/">{{ i18n "draft" }}</a></span>
{{- end -}}
```

对这个结果很满意，撰文记录一下。至于归档页面要怎么搞才能这么行云流水，那就是另外一篇（已经躺在草稿箱里的）文章的事儿了……

---

2021-05-23 更新：

对了，忘记加上，我平时在 Hugo 里新建草稿的命令如下：

```bash
hugo new drafts/$(date +"%Y-%m-%d")-draft$(date +"%H%M%S").md
```

它能够保证新建出来的草稿标题标准化，而且绝不会重复。只要加到妳常用的文字变换工具里，给个容易记的名字，用起来就很方便了。例如我在 espanso 里有这样的设置：

```yaml
  - trigger: ":hugonew"
    replace: |
      hugo new drafts/$(date +"%Y-%m-%d")-draft$(date +"%H%M%S").md
```
