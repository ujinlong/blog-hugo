---
title: "Promnesia + cron(tab) 历险记"
date: "2021-09-10T11:12:09+02:00"
published: "2021-09-10T17:10:01+0200"
# lastmod: ""
categories: ["用户笔记"]
tags: ["浏览器", "Shell"]
---

## 前置

生命，宇宙，以及其余的一切的起因是这样的。Mailbrew 近日又免费了，于是我建了个 newsletter，每天发送 Hacker News 分数前几的链接以及其他一些科技新闻（虽然大概没什么人感兴趣但是[预览或者订阅点此](https://app.mailbrew.com/loikein/tech-news-for-me-Y3pg1hrRluCg)）。前两天有这么一个标题引起了我的兴趣：

{{< preview "https://news.ycombinator.com/item?id=28446147" >}}

[这个浏览器](https://bonsaibrowser.com/)本身当然已经很有意思了，但是更有意思的是评论里有一堆其他形式类似或者形式不类似但是想法类似的推荐（略过那些窗口管理程序）。我遍历了评论里的所有链接，列表如下：

- 独立程序
    + [karlicoss/promnesia: Another piece of your extended mind](https://github.com/karlicoss/promnesia)
    + [thesephist/monocle: Universal personal search engine, powered by a full text search algorithm written in pure Ink, indexing Linus's blogs and private note archives, contacts, tweets, and over a decade of journals.](https://github.com/thesephist/monocle)
    + [SigmaOS](https://sigmaos.com/)
- 浏览器标签／历史分组插件
    + [Flow Tab Manager: Focus on your tabs that matter.](https://enterflow.app/)
    + [projectdelphai/panorama-tab-groups: An add-on for Firefox that implements the old Tab Groups/Panorama functionality](https://github.com/projectdelphai/panorama-tab-groups)
    + [Histree - Chrome Web Store](https://chrome.google.com/webstore/detail/histree/linpklflmolmnhckgoojppnfhajngaoh?hl=en) （GitHub repo：[MacroChip/Histree](https://github.com/MacroChip/Histree)）
- 概念设计：[Mercury](https://www.mercuryos.com/)

看了一下 Flow Tab Manager 和 Panorama Tab Groups，但是我是个快乐的 Workona 用户，更别说苹果下版本 Safari （iOS + macOS）马上出 Tab Group。[Monocle 的 demo](https://monocle.surge.sh/) 真的很好看，但是文档写得不清不楚的，一时间不知如何下手。然后我看向了 Promnesia。

## 关于：Promnesia

先偏题一下。我很喜欢的 YouTuber CGPGray 昨天发了个新视频，总结了[他上一个视频](https://www.youtube.com/watch?v=9LMr5XTgeyI)的取材过程，叫做 [Someone Dead Ruined My Life… Again.](https://www.youtube.com/watch?v=qEV9qoup2mQ)。这就是那个准备安装 Promnesia 的我的写照，完全不知道前面等待着我的是怎样的一个九曲十八弯的兔子洞。

我刚看到这个 [Readme](https://github.com/karlicoss/promnesia#readme) 和里面几个 demo 视频的时候，感觉 too good to be true，而且这个作者名字我不熟悉，然后看到了旁边侧栏里的[介绍文章](https://beepb00p.xyz/promnesia.html) 才发现原来是 beepb00p 的作者！那没事了，立即下载。

主要安装步骤 Readme 里都写了，分两个部分，索引系统 + 本地服务器，和浏览器插件。但是有几个坑。然后我也参考了一下（大坑，**不要**用 `promnesia install-server`！） [[[promnesia-howto]]](https://anagora.org/promnesia-howto#)，结果又被坑了个爽。

### 正确的安装姿势（macOS）

首先，检查 Python 版本。我因为 Miniconda 的关系装了两个 pip，因此给了个别名：

```bash
python3 --version
Python 3.9.7
```

然后检查 PATH（`echo $PATH`）：

- 检查 pip user 文件夹 `~/Library/Python/3.9/bin` 是否在 PATH 里，检查里面东西多不多。
- 检查 pip 文件夹 `/usr/local/bin/` 是否在 PATH 里，检查里面东西多不多。

如果 user 文件夹里什么都没的话，普通地安装：

```bash
brew install libmagic
pip3 install promnesia bs4 lxml mistletoe logzero
```

还有其他一些[可选的安装项](https://github.com/karlicoss/promnesia/blob/master/doc/SOURCES.org)，不过我暂时不需要，以后再说。

如果一开始安装时用错了 flag，只需要加上 `--force-reinstall` 然后用对的 flag 重新安装一次就行了。

此时 Promnesia 已被安装至 `~/Library/Application Support/promnesia/`。鉴于这个文件夹之后还会放设置文档，时不时需要拿出来改一下，嫌麻烦的话可以随便在哪里放个 symlink：

```bash
ln -s "~/Library/Application Support/promnesia/" ~/Desktop/
```

最后，[有个 bug 还没修](https://github.com/karlicoss/promnesia/pull/246)，暂时解决方案是：

```bash
pip3 install 'tzlocal==2.1' --force-reinstall
```

---

安装浏览器插件：

- [Promnesia - Chrome 网上应用店](https://chrome.google.com/webstore/detail/promnesia/kdmegllpofldcpaclldkopnnjjljoiio)
- [Promnesia – Get this Extension for 🦊 Firefox (en-US)](https://addons.mozilla.org/en-US/firefox/addon/promnesia/)

最后试试装好了没：运行 `promnesia demo https://github.com/karlicoss/exobrain`，然后打开 [Reddit](https://www.reddit.com/)，拓展图标变绿并且点击有记录，就行了。

可以更换快捷键，在 Firefox 上右键拓展图标，点击`管理拓展` > 齿轮图标 > `管理拓展快捷键`，找到 Promnesia。主要需要 Activate sidebar 这个键位，其他我都删掉了。

### `promnesia install-server` 的问题

这个命令本意是好的，能让本地服务器自动重启，但是问题就在于它太强力了导致这个服务器像杀不死的小强，[kill 一个 PID](https://superuser.com/a/1411294) 新长出来另一个 PID。我试了好多命令，最后给它关掉了，但也不知道具体是哪个起作用了。

```bash
sudo launchctl remove "com.github.karlicoss.promnesia"
sudo launchctl stop "com.github.karlicoss.promnesia"
sudo launchctl unload -w "~/Library/LaunchAgents/com.github.karlicoss.promnesia.plist"
```

大概试了以上这些，完之后运行 `launchctl list | grep "promnesia"` 没有结果，就算成功。

如果我能早点发现这个问题就好了：[launchd - Launchctl difference between load and start, unload and stop - Ask Different](https://apple.stackexchange.com/a/308421)

### 运行和设置

首先，创建一个设置文档：`promnesia config create`。然后编辑它（`~/Library/Application Support/promnesia/config.py`）。设置里面最重要的是 `SOURCES` 部分，这个是主要数据来源（另外就是浏览器书签和历史了）。目前我个人感觉显示效果比较好的格式是 HTML，Markdown，和纯文本。JSON 和 CSV 都不能显示具体匹配的位置，也没有上下文，就没什么意义。

参考[示例](https://github.com/karlicoss/promnesia/blob/master/doc/config.py)，我的长这样。Mastodon 那段的解释在[下文](#关于mastodon-archive)，另外三个就是我的其他几个网站的源文件（Markdown 格式）。

```python
SOURCES = [
    Source(
        auto.index,
        '~/Documents/GitHub/hugo-diary-source/content/',
        ignored=['*.html'],  # we can exclude certain files if we want
        name='blog',
    ),

    Source(
        auto.index,
        '~/Documents/GitHub/wiki/',
        name='wiki',
    ),

    Source(
        auto.index,
        '~/Documents/GitHub/loikein.github.io-source/content/',
        name='notes',
    ),

    Source(
        auto.index,
        '~/Documents/__backups/fedi/mastodon-archiver/',
        ignored=['*.json', '*.md', '*.html'],
        name='Mastodon'
    ),
]
```

`OUTPUT_DIR` 和 `CACHE_DIR` 最好别改，感觉有点问题，改了之后老报错。

然后运行 `promnesia doctor config` 检查有没有语法错误。

然后运行索引：`promnesia index`，如果文件很大的话需要几十秒的样子。最后会报错，但是只要出现一句 `updated database "~/Library/Application Support/promnesia/promnesia.sqlite"` 就算成功了。

启动服务器：`promnesia serve`，在浏览器里打开一个之前提到过的网页，看到拓展图标变绿并且有记录，完成。

## 关于：mastodon-archive

一切折腾的起源：なんとかならないかな……

{{< mstdn "mastodon.social" "106895327647647804" >}}

众所周知，Mastodon 自带的导出功能，那就真的只能用来备份，完全没法读的。我在 mastodon.social 这个站发了 11k 条嘟文，`outbox.json` 有 22.4 MB，打开都要好半天；索引后却如上图所示，没有任何定位，这没有意义的啊。

所以需要找一个第三方的备份器。之前 [BGME 站长其实发过](https://bgme.me/@bgme/104659103161540127)，我还转了，但是转完就忘了（……），所以还是搜出来的：

{{< preview "https://github.com/kensanata/mastodon-backup" >}}

### 安装

之前梅伊娜调侃：

{{< mstdn "mastodon.social" "104659373886008261" >}}

但如果妳在看本文的话，这么多坑都踩过来了，也不差这一个对不对（靠）

```bash
pip3 install setuptools mastodon-archive
```

### `archive`

必须先运行 `archive` 才能运行后续命令。有三种备份模式，总结如下。书签目前为止还停留在[饼阶段](https://github.com/kensanata/mastodon-backup/issues/60)。

|           | 原创／回复别人／转嘟 | 爱心 | 别人回复我  | 书签  |
|-----------|:-------:|:---:|:---------:|:----:|
| `archive --with-mentions` | ⭕      | ⭕   | ⭕  | ❌  |
| `archive` | ⭕      | ⭕   | ❌  | ❌  |
| `archive --no-favourites` | ⭕      | ❌   | ❌  | ❌  |

那当然是我全都要嘛。

```bash
mastodon-archive archive --with-mentions example@mastodon.social
```

第一次运行的时候会需要登录，其实就是新增一个[已授权的应用](https://mastodon.social/oauth/authorized_applications)。注意，登录文件是直接保存在当前路径的[^1]，所以最好像我一样在某个熟悉的地方建一个文件夹，专门用来放这些存档。

### `media`

```bash
mastodon-archive media --collection favourites example@mastodon.social
```

不加 `--collection favourites` 的话，就不保存爱心嘟文的附件。

### `text`

这一步会生成可用于 Promnesia 的纯文本文件。我加了 `--reverse` 是为了跟之后生成的 HTML 版保持一致，新的嘟文在最前面。不加也可。

```bash
mastodon-archive text --reverse example@mastodon.social > mastodon.txt
```

如果纯粹是为了给 Promnesia 用的话，到这里就可以结束了。效果如下图。虽然其实也没有很完美，但是有行数，真的想回溯上下文的话找个编辑器打开看一下就可以了。

{{< mstdn "mastodon.social" "106895763694905957">}}

### `html`

生成原创／回复别人／转嘟页面：

```bash
mastodon-archive html example@mastodon.social
```

生成爱心页面：

```bash
mastodon-archive html --collection favourites example@mastodon.social
```

似乎无法生成别人回复我的页面。`--toots-per-page` 可以不用填，数量太大了它会自动分页。以及如果生成了 HTML 页面的话就不要动媒体文件夹了，不然会找不到图片的。

### [我懒得敲键盘](https://xkcd.com/1319/)

一旦登录过之后，整个流程就可以自动完成了。新建一个 `mastodon-archiver.sh`，写类似这样的东西。

如果妳用的不是 Zsh 记得改掉第一行，然后还有就是第三行 `cd` 的地方也要改。我把 `media` 那行注释掉了是因为它好像不是增量更新，而是重新下载一遍，太耗时了，完全可以等有空手动操作的时候再来。

```bash
#! /usr/bin/env zsh

cd ~/documents/__backups/mastodon-pawoo/mastodon-archiver
mastodon-archive archive --with-mentions example@mastodon.social
# mastodon-archive media --collection favourites example@mastodon.social
mastodon-archive text --reverse example@mastodon.social > mastodon.txt

mastodon-archive html example@mastodon.social
mastodon-archive html --collection favourites example@mastodon.social
```

保存后加运行权限（我老忘记这步）：`chmod +x mastodon-archiver.sh`

## 关于：cron

`promnesia index` 和 `mastodon-archive` 都是需要周期性运行拉取最新数据的。karlicoss 推荐用 cron，我一直不想学 cron，拖了大概两百年了，然而。算了。来都来了。

以下内容需要妳消毒双手，戴上黑兜帽，非常小心地打开一个 Terminal，以及狂补一些 Vim 知识。

```bash
sudo su -
# 打密码...
# 打错了密码, 重打...

crontab -u <用户名> -e
```

`crontab` 是 cron table 的简写，每一行是一个任务，不可以错行。按 {{< kbd "i" >}} 进入输入模式，打类似下文的东西，记得改路径，以回车结尾：

```crontab
0 * * * *      promnesia index    >~/Library/Caches/promnesia-index.log     2>~/Library/Caches/promnesia-index.err
0 0 1,16 * *      ~/documents/__backups/mastodon-pawoo/mastodon-archivermastodon-archiver.sh
```

按 {{< kbd "esc" >}} 退出输入模式，按 {{< kbd ":w" >}} 保存，{{< kbd ":q" >}} 退出。

如果提示 `crontab: installing new crontab` 就说明成功了。查看当前 cron 任务：

```bash
crontab -u <用户名> -l
```

看到两个都有，就可以打 `exit` 退出 su 模式了。但是不知道为什么我在这里有一定概率失败，所以先在其他地方写好要添加的任务，然后复制进去，比较不容易在失败的时候心肌梗塞。

解释一下时间格式。`0 * * * *` 表示每小时的 00 分运行，`0 0 1,16 * *` 表示每月的 1 号和 16 号的 00:00 运行。具体其实我也记不得，用这个网站算的：[Crontab.guru - The cron schedule expression editor](https://crontab.guru/#0_0_1,16_*_*)

没了吧？希望没了。这程序安装了一整天，文章又写一整天，唉。

[^1]: 我意识到这句话在不懂 shell 的人眼里毫无意义了……对不起……
