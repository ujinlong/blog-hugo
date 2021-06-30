---
author: loikein
published: "2020-02-15T19:47:00+01:00"
lastmod: "2020-02-19T13:14:55.495+01:00"
slug: 2020-02-15-bookdown-and-rmarkdown-vs-me
categories:
- 用户笔记
tags:
- Rmarkdown
title: Bookdown/Rmarkdown vs. me
---
These days I have bumped into so many issues in Bookdown. Having been
asking at [GitHub](https://github.com/rstudio/rmarkdown/issues/1769) and
[RStudio
Community](https://community.rstudio.com/t/knit-error-when-trying-to-compile-pdf-for-bookdown/52190)
with no one answering, it's my own quest now.  

## Issues with Bookdown

-   some unknown configs would overwrite GitBook's TOC settings. I.e.,
    `output: bookdown::gitbook: config: toc: collapse: none` becomes
    ineffective.
-   Putting anything in the
    `output: bookdown::gitbook: config: sharing: all: […]` list crashes
    the sharing menu
-   <s>`bookdown::gitbook: css` is ineffective</s> works after many
    refreshes

  

## Issues with Rmarkdown

-   [The method in the
    documentation](https://bookdown.org/yihui/rmarkdown/learnr-videos.html)
    for embedding YouTube video (`![](link)`) does not work. Instead,
    use the embedding iframe link provided by YouTube.
-   When doing citation, you cannot put two dashes in any key (`--`),
    otherwise that entry is not recognised anywhere
-   Cannot put `.bib` files in sub-folders, otherwise it would not be
    found
