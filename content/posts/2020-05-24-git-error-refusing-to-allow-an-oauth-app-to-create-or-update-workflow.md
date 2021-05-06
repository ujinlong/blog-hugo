---
author: loikein
published: "2020-05-24T15:52:00+02:00"
lastmod: "2021-04-14 19:33:55.040 +0200"
slug: 2020-05-24-git-error-refusing-to-allow-an-oauth-app-to-create-or-update-workflow
categories:
- 笔记
tags:
- macOS
- Git
title: '血书：git error: refusing to allow an OAuth App to create or update workflow (macOS)'
---
## 在 Mac 的图形界面里：

-   打开 `Keychain Access.app`
-   搜索 `github`
-   找到这一项（注意是互联网密码，不是应用程序密码，如果有好几个不确定的可以都删了反正还能再登录的），右键删除：

![](/post-img/2020-05-24-git-error-refusing.png)

## 在 github.com：

-   右上角点击
    `头像 > Settings > Developer settings > Personal access tokens`
-   点击 `Generate new token`， 勾上 `repo` 和 `workflow`，确认
-   把出现的那串数字字母复制下来

## 在终端：

-   `$ git push`
-   用户名输入自己的 GitHub 用户名
-   密码输入刚才复制的 token
-   回车，成功
