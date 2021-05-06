---
author: loikein
published: "2019-11-10T15:12:00+01:00"
lastmod: "2020-03-08T19:36:49.144+01:00"
slug: 2019-11-10-macbook-gets-warm-overnight-while-connected-to-power
categories:
- 笔记
tags:
- macOS
title: 'MacBook gets very warm overnight while closed & connected
  to power adapter'
---
## The Problem

It's been several days, and I am rightfully annoyed by the fact that
everyday when I wake up and put my Mac into the backpack, it is WARM.
(It gets warm doing very light works as well, but I'm gonna look into
that another time.)  
  
I'm using MacBook Pro (13-inch, 2018) with Catalina 10.15 (19A583). I'll
try to keep the "wake reason log" during this process, but they are so
long so I just post a representative portion of it for every day.  
  

## Informative Pages

Here is a list of informative articles and forums that have mentioned
this (from most recent):  

-   [Why is my MacBook warm when the lid is closed (in sleep mode)? | alvinalexander.com](https://alvinalexander.com/macos/why-is-macbook-warm-when-lid-closed-sleep-mode) (last update: 2019-09-30)
-   [MacBook Pro 2018 Draining Battery when lid closed | MacRumors Forums](https://forums.macrumors.com/threads/macbook-pro-2018-draining-battery-when-lid-closed.2134679/) (last update: 2019-08-06)
-   [盒盖睡眠耗电异常，一晚耗电 40%左右 - 51sudo](http://51sudo.cn/fqTopic/detail/3865) (last update: 2019-07-26)
-   [MBpro 2018 - Battery drain completely in sleep mode：MacOS](https://www.reddit.com/r/MacOS/comments/a0cnea/mbpro_2018_battery_drain_completely_in_sleep_mode/) (last update: 2019-02-26)
-   [MacBook Pro 15 draining battery while sleeping. Wake reason: EC.ARPT (Maintenance).：applehelp](https://www.reddit.com/r/applehelp/comments/aqeeru/macbook_pro_15_draining_battery_while_sleeping/?st=k2lp9wlu&sh=21347747) (last update: 2019-02-14)
-   [Macbook Gets Hot with Lid Closed - sfbayhacker - Medium](https://medium.com/sfbayhacker/macbook-gets-hot-with-lid-closed-12fc0e7e7016) (last update: 2018-05-18)
-   [MacBook Pro runs HOT in sleep mode - Apple Community](https://discussions.apple.com/thread/8323603) (last update: 2018-03-28)
-   [wifi - MacBook Pro continually wakes while in sleep mode - Ask Different](https://apple.stackexchange.com/questions/217433/macbook-pro-continually-wakes-while-in-sleep-mode) (last update: 2017-10-13)
-   [Fix OSX battery draining on sleep due to wifi activity](https://gist.github.com/ziadoz/7bddcf346adb89da1e990126c9f82429) last update: 2016-09-26
-   [macos - iMac randomly wakes up from sleep - Ask Different](https://apple.stackexchange.com/questions/234351/) (last update: 2016-04-19)
-   [Battery Drain When Lid Closed | MacRumors Forums](https://forums.macrumors.com/threads/battery-drain-when-lid-closed.1885973/) (last update: 2016-03-24)
-   [mac 怎么不能休眠了 - V2EX](https://www.v2ex.com/t/255793) (last update: 2016-02-08)
-   [Determine Why Your Mac Wakes Up From Sleep](http://osxdaily.com/2010/07/17/why-mac-wakes-from-sleep/) (last update: 2010-07-17)


## Potensial solutions that I don't want to try yet

-   Reset [SMC](https://support.apple.com/en-us/HT201295)
-   [Mac Sleep Settings for Performance and Battery Life](https://www.lifewire.com/change-mac-sleep-settings-2260804): `sudo pmset -a hibernatemode 25`


## 2019-11-04

Wake reason log (these five lines repeat almost every minute for the
whole night):  

  
There seems to be several different reasons for this, but today I'm
doing the basic: turning off the two toggles in power setting that were
checked. Let's see what happens tomorrow.  
  

[![](../images/thumbnails/2019-11-10-journal-day-8-macbook-gets-very-warm-overnight-while-closed-connected-to-power-adapter-Screenshot%2B2020-03-08%2Bat%2B19.29.45.png)](../images/2019-11-10-journal-day-8-macbook-gets-very-warm-overnight-while-closed-connected-to-power-adapter-Screenshot%2B2020-03-08%2Bat%2B19.29.45.png)

  

## 2019-11-05

I did so many things yesterday that I do not understand what worked.
Today it's not warm anymore, but the waking history still looks
annoying.  
Today's wake reason log, pretty much nothing has changed.  
  

  
So I consulted one of the reddit thread, and turned on two toggles in do
not disturb settings. Let's see what happens tomorrow.  

[![](../images/thumbnails/2019-11-10-journal-day-8-macbook-gets-very-warm-overnight-while-closed-connected-to-power-adapter-Screenshot%2B2020-03-08%2Bat%2B19.29.57.png)](../images/2019-11-10-journal-day-8-macbook-gets-very-warm-overnight-while-closed-connected-to-power-adapter-Screenshot%2B2020-03-08%2Bat%2B19.29.57.png)

  

## 2019-11-06

So I forgot to connect my mac to power adapter yesterday night. Today
when I opened the lid, it still has around 70% power, which is good  
Wake reason log (repeat less than before, but still a lot):  

  
  

### `kernel: AppleACPIPlatform: EC.RTC (Alarm)`

This thing is new, so here are the top Google results:  

-   [Wake reason: EC.RTC (Alarm) Wakes my Mac … - Apple Community](https://discussions.apple.com/thread/250577943) (last update: 2019-08-23)
-   [Wake reason: RTC (Alarm) - how to deactivate? | MacRumors Forums](https://forums.macrumors.com/threads/wake-reason-rtc-alarm-how-to-deactivate.1766477/) (last update: 2015-08-17)
-   [Fix yosemite rtc alarm wakeup issue • ISPIRE.ME](https://ispire.me/fix-yosemite-rtc-alarm-wakeup-issue/) (last update: 2014-12-22)

There seems to be two solutions, either disable autoupdate time and date
(which I don't want to) + disable autoupdate time zone (which I already
did), or this command:  
`sudo defaults write /System/Library/LaunchDaemons/com.apple.mDNSResponder.plist ProgramArguments -array-add -DisableSleepProxyClient`  
Curious enough, I don't have the file `com.apple.mDNSResponder.plist`. I
did not delete it or anything, it's just not there. I don't have
`com.apple.discoveryd.plist` either, which came with the older system?
Need to do more research before actually doing anything about it.  
Meanwhile, I used OnyX to clean up Spotlight indices among other things,
as well as `sudo mdutil -a -i off` (after this, mac automatically turned
it back on for the time machine volume, which is a feature according to
Google). Let's see what happens tomorrow.  
  

## 2019-11-07

Woke up and found that the mac is dead cold. Cool.  
Wake reason log (repeat every hour, which is much better than before):  

  
Well, up to this point, I want to look into each of the reasons.  
  

### `corespeedchd`

[CPU usage... corespeechd | MacRumors Forums](https://forums.macrumors.com/threads/cpu-usage-corespeechd.2158710/)  
Tried the fix in this thread: [corespeechd is sending a massive amount t… - Apple Community](https://discussions.apple.com/thread/8643914?page=2)  
  
  

[![](../images/thumbnails/2019-11-10-journal-day-8-macbook-gets-very-warm-overnight-while-closed-connected-to-power-adapter-Screenshot%2B2020-03-08%2Bat%2B19.30.07.png)](../images/2019-11-10-journal-day-8-macbook-gets-very-warm-overnight-while-closed-connected-to-power-adapter-Screenshot%2B2020-03-08%2Bat%2B19.30.07.png)

  

### `powerd`

Found this fix, may try tomorrow: [CPU usage... corespeechd | MacRumors
Forums](https://forums.macrumors.com/threads/cpu-usage-corespeechd.2158710/)  
  

### `kernel: AppleTopCaseHIDEventDriver: Host (0x01)`

TBA  
  

## 2019-11-08~10

Busy days, but I managed to keep all the logs at the beginning of each
day, so [here they
are](https://gist.github.com/loikein/4c0c225bda7272793ab0fa5e492749d3).
Up to this point there are really nothing new. Dumb person as I am, I
start to notice the pattern here.  
The morning of 9th I woke up and found that the mac is warm again, but
the rest two days were just cool and fine.  
So I'm gonna do the trick: turn on and off Siri, and immediately restart
the computer. If the log still looks like this tomorrow, well then we're
going all the way to SMC land.  
  

## 2019-11-11

No, nothing has changed. Reset SMC and see what happens tomorrow.
