# Blog with Hugo

[![Netlify Status](https://api.netlify.com/api/v1/badges/5c630036-da22-42af-b033-b5b1aa98d015/deploy-status)](https://app.netlify.com/sites/epic-mestorf-3202f7/deploys)

Well, here we are.

## Commands

### Codespace

- Install Browser Preview (`auchenberg.vscode-browser-preview`)

- Install Chrome:

    ```bash
    sudo apt-get install libxss1 libappindicator1 libindicator7

    wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

    sudo apt install ./google-chrome*.deb
    ```

- Configure the extension with:

    ```json
    "browser-preview.chromeExecutable": "/usr/bin/google-chrome",
    "browser-preview.ignoreHttpsErrors": true,
    "browser-preview.startUrl": "localhost:1818"
    ```

- Run Hugo server with fixed port:

    ```bash
    hugo server --buildDrafts --port 1818
    ```

- Access `https://loikein-blog-hugo-w8cj-1818.githubpreview.dev/` once to log into GitHub.

- Then can access `localhost:1818` directly.

- Notice that any draft (only exists on local machine) will not show up.

## Refs

- [Host on Netlify | Hugo](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/#configure-hugo-version-in-netlify)
- [[SOLVED]Do I need to build the public folder if I host on Netlify? - support - HUGO](https://discourse.gohugo.io/t/18615)
