---
title: "如何在 Hugo 中添加复制代码按钮（键盘友好型）"
date: "2022-08-11T16:15:54+01:00"
# published: ""
# lastmod: ""
categories: ["编程笔记"]
tags: ["Hugo", "JavaScript", "CSS"]
# description: "可访问性需要用实际行动来维护。"
---
想做这个东西很久了，但是因为我并没有认真学过 JavaScript，每次都拼凑不出想要的效果而做到一半就放弃。网上其实也有很多文章（见： [Issue #5619 · python-poetry/poetry](https://github.com/python-poetry/poetry/issues/5619)，但是反正我是没找到考虑了 accessibility 的版本。[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event) 上倒是有支持键盘浏览（Enter / Spacebar）的复制代码按钮，但是代码实在是太抽象了，我看不懂……

然而俗话说得好，摸鱼是第一生产力。今天在紧张刺激地摸鱼，突然又想起这件事情，缝了两个小时之后居然真给我缝出来了。摸鱼真的是很可怕的一个……过程。

先上结果：

```plaintext
hello world
```

本文中提到的文件路径都基于整个 Hugo 的网站文件夹。

## 复制代码功能

来源： [How to Add Copy to Clipboard Buttons to Code Blocks in Hugo - Simplernerd](https://simplernerd.com/hugo-add-copy-to-clipboard-button)

### 代码

首先，新建 JavaScript 文件为： `./themes/diary/static/js/clipboard.js`

```js
// buttons
const svgCopy =
  '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>';
const svgCheck =
  '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>';

// add button function
const addCopyButtons = (clipboard) => {
  // 1. Look for pre > code elements in the DOM
  document.querySelectorAll("pre > code").forEach((codeBlock) => {
    // 2. Create a button that will trigger a copy operation
    const button = document.createElement("button");
    button.className = "clipboard-button";
    button.type = "button";
    button.title = "Copy";
    button.innerHTML = svgCopy;
    button.addEventListener("click", () => {
      clipboard.writeText(codeBlock.innerText).then(
        () => {
          button.blur();
          button.innerHTML = svgCheck;
          setTimeout(() => (button.innerHTML = svgCopy), 2000);
        },
        (error) => (button.innerHTML = "Error")
      );
    });
    // 3. Append the button after the pre tag (.highlight > pre > button > code)
    const pre = codeBlock.parentNode;
    pre.parentNode.insertBefore(button, pre.nextSibling);
  });
};

// trigger function
if (navigator && navigator.clipboard) {
  addCopyButtons(navigator.clipboard);
} else {
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/3.0.3/promise/clipboard-polyfill.promise.min.js";
  script.integrity = "sha512-O9Q+AhI1w7LT1/tHysPWDwwrgB1fKJ/nXPNLC30i8LF6RdSz4dGZyWB9WySag3DZMdGuK5yHJEdKXMKI2m5uSQ==";
  script.crossOrigin = "anonymous";
  script.referrerpolicy = "no-referrer";
  script.onload = () => addCopyButtons(clipboard);
  document.body.appendChild(script);
}
```

以上代码中有几处更改：

1. 删除 `svgCheck` 的 `fill` （填充颜色），改为由 CSS 指定
1. 添加 `button.title = "Copy";` （鼠标划过时的说明文字）
1. 将添加按钮的位置改为放在 `pre` 后面（下文有详细解释）
1. 更新 `clipboard-polyfill` 至最新稳定版（未测试）

然后，在 `./themes/diary/layouts/partials/footer.html` 中添加如下代码：

```html
<footer>
...
<!-- copy code -->
{{ if (findRE "<code" .Content 1) }}
    <script src="{{"/js/clipboard.js" | relURL}}"></script>
{{ end }}
</footer>
```

### 解释

首先，使用 Hugo 自带的 [Chroma](https://github.com/alecthomas/chroma) 进行代码高亮，渲染结果为如下格式的 HTML：

```html
<div class="highlight">
    <pre class="...">
        <code class="..." data-lang="...">...</code>
    </pre>
</div>
```

所以 layout 条件设为仅在渲染后的网页中含有 `<code` 时附加 JavaScript。

然后是 JavaScript 代码。第一部分是两个按钮的 SVG，然后是 `addCopyButtons` 方程（包含了添加按钮和复制代码两项功能），最后调用方程。

关于添加按钮这部分，原作者放在了 `<pre>` 前面，应该只是个人喜好问题。然而由于我在测试键盘浏览时，网页上 `:focus` 的首选项是  `<pre>` 而不是 `<div class="highlight">`，所以如果把按钮放在 `<pre>` 前面，就没法用 sibling selector 为按钮添加 `:focus` 时的 CSS 了。经过一些搜索后，我发现进行如下修改即可把按钮添加到 `<pre>` 后面：

```diff
- pre.parentNode.insertBefore(button, pre);
+ pre.parentNode.insertBefore(button, pre.nextSibling);
```

完成上述添加修改后，渲染结果为如下格式的 HTML：

```html
<div class="highlight">
    <pre class="...">
        <code class="..." data-lang="...">...</code>
    </pre>
    <button class="copy-code-button" type="button">
        <svg ...>...</svg>
    </button>
</div>
```

最后调用方程。如果浏览器支持[剪贴板 API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard) 就直接调用，否则加载 [clipboard-polyfill](https://github.com/lgarron/clipboard-polyfill)。备注：后者标记为已淘汰，但是在支持的浏览器上根本不会造成额外请求，留着应该也没太大问题；虽然我也没有特意要支持 IE，但是反正人家都已经写好了，不用白不用……


## 支持键盘浏览

在 `addCopyButtons` 方程中添加步骤 4，其余不变：

```js
const addCopyButtons = (clipboard) => {
  // 1. Look for pre > code elements in the DOM
  document.querySelectorAll("pre > code").forEach((codeBlock) => {
    // 2. Create a button that will trigger a copy operation
    const button = document.createElement("button");
    button.className = "copy-code-button";
    button.type = "button";
    button.title = "Copy";
    button.innerHTML = svgCopy;
    button.addEventListener("click", () => {
      clipboard.writeText(codeBlock.innerText).then(
        () => {
          button.blur();
          button.innerHTML = svgCheck;
          setTimeout(() => (button.innerHTML = svgCopy), 2000);
        },
        (error) => (button.innerHTML = "Error")
      );
    });
    // 3. Append the button after the pre tag (.highlight > pre > button > code)
    const pre = codeBlock.parentNode;
    pre.parentNode.insertBefore(button, pre.nextSibling);
    // 4. Listen to keyboard press
    const highlight = pre.parentNode;
    highlight.addEventListener('keydown', function(event) {
      if (
        event.key === " " ||
        event.key === "Spacebar" ||
        event.code === "Space" ||
        event.key === "Enter" ||
        event.code === "Enter"
      ) {
        clipboard.writeText(codeBlock.innerText).then(
          () => {
            button.blur();
            button.innerHTML = svgCheck;
            setTimeout(() => (button.innerHTML = svgCopy), 2000);
          },
          (error) => (button.innerHTML = "Error")
        );
      }
    });
  });
};
```

这部分的代码参考了好几个 StackOverflow 的回答。首先代码框架来源于[这个回答](https://stackoverflow.com/a/43288177)，然后因为要支持回车键和空格键，又参考了[这个回答](https://stackoverflow.com/a/24386518)。最后，从[这个回答](https://stackoverflow.com/a/4471635)得知 [`keyCode` 和 `which` 已淘汰](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent)，改为 `key` 和 `code`。


## 适配 CSS

也参考了 [How to Add Copy to Clipboard Buttons to Code Blocks in Hugo - Simplernerd](https://simplernerd.com/hugo-add-copy-to-clipboard-button)，不过这部分改动比较大。

新建 CSS 文件为： `./assets/css/code-fense.css` （遵循之前写过的[添加自定义 CSS 的方式](/posts/2021-04-26-hugo-custom-css-the-right-way/)）

```css
.highlight {
  position: relative;
}

.copy-code-button {
  color: var(--white);
  background-color: rgba(255,255,255,50%);
  border: none;
  border-radius: 6px;
  padding: 0 5px 5px 5px;
  font-size: 1rem;
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  margin: 10px;
  transition: .1s;
  opacity: 0.5;
}

.copy-code-button > svg {
  fill: var(--white);
}

.copy-code-button:hover,
.copy-code-button:focus,
pre:active ~ .copy-code-button,
pre:focus ~ .copy-code-button,
div.highlight:active > .copy-code-button,
div.highlight:focus > .copy-code-button {
  cursor: pointer;
  opacity: 1;
}
```

由于我这个博客有黑暗模式，加上 `hover/focus` 本来要写四种不同的样式。给我写烦了，想了半天，想出了禁忌・双重透明度这个东西。然而这也是基于我还没搞清楚怎么在切换模式时自动切换代码高亮样式，目前正偷懒都用 Dracula，有非常方便的黑底色。如果自动切换做出来的话，就确实得分情况重新写了。

首先， `.highlight{ position: relative; }` 和 `.copy-code-button{ position: absolute; }` 是必须的，不然按钮就会漂移到正文栏外面。 `position` 这个东西近似黑魔法，我也没有特别想要深究的意愿。按钮具体位置还是比较好理解的，就是固定在代码框的右上角。

然后按钮图案颜色。原作者似乎是写的鼠标划过代码块才显示，我觉得有些不明显，就改成了始终显示。

最后是与按钮／`<pre>`／`<div class="highlight">` 交互时取消透明度，指针变成手指。理论上 `active` 和 `focus` 是两种不同的情况，但是我并没有精力给所有按钮／链接再写第三套样式，而且写到一起总比不写 `active` 好，所以目前为止我一直都是这么写的。其中关于 `<pre>` 的两行就是前文修改了添加按钮位置的原因。如果有兴趣深究，可以移步阅读：

- [Adjacent sibling combinator - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) （[中文版](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator)）
- [General sibling combinator - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator)（[中文版](https://developer.mozilla.org/zh-CN/docs/Web/CSS/General_sibling_combinator)）


## 题外话：什么是可访问性？为什么网页开发需要考虑可访问性？

<!-- 比如我这些改动做出来，得到了意料之外的正面副作用：鼠标点击某个代码块的任意位置之后，敲回车就能直接复制，不需要再去点按钮了。 -->

可访问性不仅仅是为了方便别人，也能够方便自己。我曾经[花了很多时间学习这个事](https://github.com/loikein/literate-html/blob/master/HTML-accessibility.md)，下面复制一下主要参考链接。

- [Dive Into Accessibility](https://web.archive.org/web/20110927131211/http://diveintoaccessibility.org/) （[中文翻译](https://web.archive.org/web/20071002125036/http://dia.z6i.org/cn/)）（需要根据 HTML5 进行细节调整）
- [Home | 18F Accessibility Guide](https://accessibility.18f.gov/)
- [Front-end development | Accessibility for Teams](https://accessibility.digital.gov/front-end/getting-started/)
- [HTML: A good basis for accessibility - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML) （[中文版](https://developer.mozilla.org/zh-CN/docs/learn/Accessibility/HTML:%E4%B8%BA%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7%E6%8F%90%E4%BE%9B%E4%B8%80%E4%B8%AA%E8%89%AF%E5%A5%BD%E7%9A%84%E5%9F%BA%E7%A1%80)）
- [How to Meet WCAG (Quickref Reference)](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#meaningful-sequence)
- [How I do an accessibility check -- A11ycasts #11 - YouTube](https://www.youtube.com/watch?v=cOmehxAU_4s&feature=youtu.be)
- [Welcome to the Accessibility Developer Guide! - ADG](https://www.accessibility-developer-guide.com/)

借此机会把之前一直手残没做完的跳到主要内容按钮也做好了，不然感觉没脸面教育别人。人生啊。
