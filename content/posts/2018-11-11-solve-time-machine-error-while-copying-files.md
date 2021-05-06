---
author: loikein
published: "2018-11-11T09:27:00+01:00"
slug: 2018-11-11-solve-time-machine-error-while-copying-files
categories:
- 笔记
tags:
- macOS
title: 血书：Time Machine 拷贝文件时出错的解决法
---
换了电脑之后继承了备份，但是还没备份过，结果备份不出来，除此之外还有图片文件夹整个没有还原回来，挖出了上个电脑的 SSD 拷贝了一份之后有用户权限问题之类的杂七杂八的问题，今天一次性解决了。舒服。  


## 修复系统权限

High Sierra
的磁盘工具里没有这项了，在[苹果官网](https://support.apple.com/en-us/HT203538)上找了一个笨办法：  

1.  访达 &gt; 前往 &gt; 个人
2.  文件 &gt; 显示简介
3.  If the Sharing & Permissions section at the bottom of the window
    isn't open, click the triangle  in that section to open it.
4.  If the Lock button at the bottom of the window shows a closed lock 
    , click the lock and enter an administrator name and password.
5.  Click the Action menu  in the bottom corner of the window, then
    choose "Apply to enclosed items." Click OK to confirm the action. A
    progress bar appears at the top of the window.
6.  When the progress bar completes, open the Terminal app, which is in
    the Utilities folder of your Applications folder.
7.  Paste or type this command in Terminal, then press Return:  
    `` diskutil resetUserPermissions / `id -u` ``  
    After entering the diskutil command, if Terminal says that
    permissions reset on user home directory failed (error -69841),
    enter `chflags -R nouchg ~`, then enter the diskutil command
    again.  
8.  When the process completes, quit Terminal. Restart the computer,
    then test to see if the issue is fixed.  

  

## Time Machine 问题

上一步之后备份依然没有恢复。苹果社区里有[这么一个回答](https://discussions.apple.com/message/31272399#message31272399)：  

1.  Open Console
2.  Click your computer under devices. Typically says "NameMacbookPro"
3.  In the search bar type "backupd" without the quotes
4.  Run TM backup and let the error occur
5.  In Console, look for the an error that looks something like this:
    `Error: (-8062) SrcErr:NO Copying /Users/NAME/Library...`  
    this is the corrupt file that caused my TM error.
6.  Locate the file in the location given in console and either delete
    or backup separately (drag and drop somewhere).
7.  Re-run TM and the it should complete the backup

  
这解决了我的问题。后面紧跟着一个补充，仅作为马克用：  

1.  search for "backup" rather than "backupd". This may show a few more
    messages.
2.  after step 4, select the first console message of the start of that
    Backup. Then delete the search string so that you can see ALL
    messages from that point, and look again (starting at the line you
    selected) for that error message.
