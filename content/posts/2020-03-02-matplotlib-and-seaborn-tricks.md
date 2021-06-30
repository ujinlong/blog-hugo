---
author: loikein
published: "2020-03-02T18:52:00+01:00"
lastmod: "2020-05-29T17:01:28.900+02:00"
slug: 2020-03-02-matplotlib-and-seaborn-tricks
categories:
- 编程笔记
tags:
- Python
title: Matplotlib & seaborn tricks
---
Moved to: [Plotting - wiki](https://wiki.loikein.one/computer/python/plotting), this post is no longer updated.  


------------------------------------------------------------------------

  
Recently I have been using these package, and found some little tricks.
I'll have to write them down just to save the future me.  

## General

Any colormap can be reversed by adding `_r` after its name, e.g.
`cmap="RdBu_r"` makes the smaller value blue and the bigger value red.  
  

## Single plot

### Title

Seaborn: `sns.someplot(…).set_title("This is a title")`  
  

### Axis

Use `plt.axis('equal')` before any two-way plot to set the x-axis and
y-axis the same scale.  
  
Set label: `fig.xlabel(r"Value of $x$")`  
  

## Plot with subplots

### Sizing

Put this right before `plt.show()` or `fig.savefig()`
([credit](https://stackoverflow.com/questions/6541123/improve-subplot-size-spacing-with-many-subplots-in-matplotlib)):
`fig.tight_layout()`  
  

### Title

Main title ([credit](https://stackoverflow.com/a/29814281/10668706)):
`plt.subplots_adjust(top=0.9); grid.fig.suptitle("This is a big title")`  
  
Sub titles: `ax[0, 0].set_title('Axis [0, 0]')`  
  

### Axis

Use `graph.axes.Axes.set_xlim(left=0)` to set only lower limit, and the
upper limit would be auto-generated.  
  
Set label: `ax[0,0].set_xlabel(r"Value of $x_1$")`
