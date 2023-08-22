# Blog with Hugo

[![Netlify Status](https://api.netlify.com/api/v1/badges/5c630036-da22-42af-b033-b5b1aa98d015/deploy-status)](https://app.netlify.com/sites/epic-mestorf-3202f7/deploys)

Well, here we are. Migration purely for ~~new content~~ fun.

## Build

### Local

```sh
# generate pagefind index first
hugo && npm_config_yes=true npx pagefind --source "public"
# run local server
hugo server --buildDrafts --disableFastRender
```

### Codespace

<details>
<summary>Not in use any more</summary>

- Install Browser Preview (`auchenberg.vscode-browser-preview`)

- Install Chrome: (Credit: [How to install Chrome browser properly via command line? - Ask Ubuntu](https://askubuntu.com/a/79284))

    ```bash
    cd ..

    pwd
    # /workspaces

    sudo apt-get install libxss1 libappindicator1 libindicator7

    wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

    sudo apt install ./google-chrome*.deb
    ```

- Configure the extension with:

    ```json
    "browser-preview.chromeExecutable": "/usr/bin/google-chrome",
    "browser-preview.ignoreHttpsErrors": true,
    "browser-preview.startUrl": "localhost:1818",
    ```

- Run Hugo server with fixed port: ([all options](https://gohugo.io/commands/hugo_server/#options))

    ```bash
    hugo server --buildDrafts --port 1818 --baseURL "https://loikein-blog-hugo-w8cj-1818.githubpreview.dev/"
    ```

- Access `https://loikein-blog-hugo-w8cj-1818.githubpreview.dev/` once to log into GitHub.

- Then can access:
    - `localhost:1818` directly from the Browser Preview, or
    - `https://loikein-blog-hugo-w8cj-1818.githubpreview.dev/` from iPad, etc.

- Notice that any draft (only exists on local machine) will not show up.

</details>


## Refs

- [Host on Netlify | Hugo](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/#configure-hugo-version-in-netlify)
- [[SOLVED]Do I need to build the public folder if I host on Netlify? - support - HUGO](https://discourse.gohugo.io/t/18615)
- [public directory and output not generated · Issue #4407 · gohugoio/hugo](https://github.com/gohugoio/hugo/issues/4407#issuecomment-365530120)
- [Pagefind is quite a find for site search | BryceWray.com](https://www.brycewray.com/posts/2022/07/pagefind-quite-find-site-search/)
