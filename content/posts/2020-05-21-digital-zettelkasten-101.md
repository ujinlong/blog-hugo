---
author: loikein
published: "2020-05-21T21:28:00+02:00"
lastmod: "2020-06-07T10:00:30.293+02:00"
slug: 2020-05-21-digital-zettelkasten-101
categories:
- 折腾
tags:
- iOS
- macOS
- Zettelkasten
title: Digital Zettelkasten 101, aka My Second Great Markdown Editor Contest
---
Edit: I found out that both Blockquote and 1Writer support `<mark>highlight</mark>`.  

-----------------

Recently I have been reading about this thing called Zettelkasten.
Obviously, a huge point of doing Zettelkasten is to use real paper
cards, to **not** search, and to use the advantage of human brain
to find order from chaos.  
I almost bought some paper cards to try it out. But I thought better. I
have been on the quest to de-paper-ise everything for four years now,
and Zettelkasten, no matter how captivating, should not be the trigger
that I introduce more paper into my life.  
Therefore, I must find a way to practice Zettelkasten on all my
preferred platforms (iOS & macOS) which is the only way to give it an
honest try, which turned out to be much trickier than I thought.  
  
The problem is, I already have a collection of close to 3000 markdown
files, part of which was converted from my entire Evernote backlog, and
the rest were notes that I created after that. Plus, they are stored in
my iCloud, so that I can add, view and edit on the go. Therefore, if I
am to choose a Zettelkasten tool, it must be compatible with all these.
That means it should support [Open in
Place](https://developer.apple.com/document-based-apps/) (also for macOS
in some sense), at least [some variant of
markdown](https://www.iana.org/assignments/markdown-variants/markdown-variants.xhtml),
preferably footnote and LaTeX, as well as all those Zettelkasten
funcionalities (internal/wiki link, tag, etc).  
  

## iOS

There are surprisingly few valid candidates on iOS.
[Drafts](https://getdrafts.com/) could have been a great option, which
[recently added internal links
support](https://www.macstories.net/news/drafts-20-introduces-advanced-wiki-style-linking/),
but it does not support Open in Place, which is the prime reason that
has stopped me from making it my main text editor on iOS.  
[Ulysses](https://ulysses.app/) has the same problems as Drafts. Also, I
don't think that subscription (a quite expensive one) is the best
pricing model for text editors.  
[iA Writer](https://ia.net/writer) does not support internal links. As
well as [‎MDNotes](https://apps.apple.com/us/app/mdnotes/id1471287219),
[Edidown](https://edidown.app/), and many other good editors on iOS.  
  
Before this experiment, my beloved markdown editor is
[Blockquote](https://www.blockquoteapp.com/), who won my previous iOS
markdown editor contest (not documented) against the other finalist,
[Pretext](https://twitter.com/pretext_app), for outstanding
editor/preview panels. And before <u>**that**</u>, I was using
[Joplin](https://joplinapp.org/), who converted my Evernote backlog for
me.  
  
In the end, I landed on [1Writer](http://1writerapp.com/), on which
[Federico's great
experiments](https://www.macstories.net/ios/markdown-and-automation-experiments-with-1writer/)
certainly helped a lot (who has since moved on to iA Writer). If you
know me, well, you saw this coming: I have built a test file that
includes all markdown functions that I may or may not ever need, and
opened it in both 1Writer and Blockquote. You can find the source file
[here](https://gist.github.com/loikein/27ef6913386b206d1b3c18b8e93c5768),
and this is a side-by-side screenshot (left: 1Writer, right: Blockquote,
both in iPad portrait mode):  

![](/post-img/2020-05-21-digital-zettelkasten-1.jpeg)


## macOS

There **seem** to be may candidates on macOS, but none of them is
perfect. Therefore, I (again) have to trade-off among features that I
absolutely want.  
I have been using [Typora](https://typora.io/) for long (as you will see
in the summary, I use it as the benchmark editor). However, it does not
support Zettelkasten links or tags.  
After some searching, I found [Zettlr](https://www.zettlr.com/), which
is also cross-platform & open. However, I don't really prefer it over
Typora, and, although print kind of does the job, there is no real quick
preview functionality in Zettlr. My quest continues.  
  
Purely out of coincidence, one of the bloggers that I follow introduced
this new cross-platform programme some day: [Obsidian 未来的笔记应用 |
Verne in
GitHub](https://einverne.github.io/post/2020/05/obsidian-note-taking.html).
Obviously, I got excited, and joined the [Obsidian
beta](https://obsidian.md/).  
Here is a Reddit thread for those who cannot read Chinese: [Obsidian -
take great notes in Markdown and let your knowledge outlive you :
r/SideProject](https://www.reddit.com/r/SideProject/comments/fuegtl/obsidian_take_great_notes_in_markdown_and_let/)
and the official roadmap: [Obsidian Roadmap |
Trello](https://trello.com/b/Psqfqp7I/obsidian-roadmap)  
Obsidian is almost perfect an editor. It is not WYSIWYG like Typora, but
the optional side-by-side preview panel scrolls in sync (most of the
time). It supports almost infinite split view (see the screenshot
below). It even has a ramdom note switcher, which I believe will help
with the Zettelkasten method. However, it does not export, or print, or
anything that gets the markdown file into another form.  
You can get my theme here: [loikein/Dracula-for-Obsidian: A dark theme
for Obsidian.md](https://github.com/loikein/Dracula-for-Obsidian). I did
not modify the dark theme that I forked from, only the light theme that
I actually want to use.  
  
![](/post-img/2020-05-21-digital-zettelkasten-2.png)


PS: If you cannot compile PDF in Zettlr, in RStudio, or any LaTeX file
really, try this command in the terminal: (Source: [r - undefined
control sequence in Rmarkdown - Stack Overflow](https://stackoverflow.com/questions/60489469/xdef-fontencloadlist-fontencloadlist-undefined-control-sequence-in-rmark))  
`$ fmtutil-sys --all`  
  

## Summary

(\*): No tag support for external (Open-in-Place-ed) files  
(†): Only block LaTeX  
(‡): Only inline LaTeX  
(§): Using `.cls` (tedious LaTeX style files)  
  

|                            | 1Writer | Blockquote | Obsidian  (0.6.0) | Zettlr  | iA Writer  (macOS) | Benchmark:  Typora |
|----------------------------|---------|------------|-------------------|---------|--------------------|--------------------|
| Metadata  (When exporting) | Yes     | No         | No export         | Yes     | Yes                | Yes                |
| LaTeX                      | No      | Yes        | Yes (†)           | Yes (‡) | Yes                | Yes                |
| TOC                        | Yes     | No         | No                | Yes     | Yes                | Yes                |
| Internal Link              | Yes     | No         | Yes               | Yes     | No                 | No                 |
| Tags                       | No (*)  | No         | Yes               | Yes     | Yes                | No                 |
| Table                      | Yes     | Yes        | Yes               | Yes     | Yes                | Yes                |
| Highlight                  | No      | No         | Yes               | Yes     | Yes                | Yes                |
| Mermaid                    | No      | No         | No                | Yes     | No                 | Yes                |
| Footnote                   | Yes     | No         | Yes               | Yes     | Yes                | Yes                |
| Custom Theme /  Editor CSS | No      | No         | Yes               | Yes     | No                 | Yes                |
| Custom Export  Template    | No      | No         | No export         | Yes (§) | Yes                | No                 |
