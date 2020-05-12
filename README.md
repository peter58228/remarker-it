# remarker-it

[remark](https://github.com/gnab/remark) is a simple, in-browser, markdown-driven slideshow tool. 

[remarker](https://github.com/kt3k/remarker) is a command line tool for building a remark-based slideshow page very easily.

[remark-it](https://github.com/1-2-3/remark-it) is some templates and javascripts integration for remark.js

remark is powerful, remark-it is beautiful and remarker is convenient, [remarker-it](https://github.com/peter58228/remarker-it.git) make them work togther.

English | [简体中文](README.md)

## Demo

[中文 Demo](https://remark-it.now.sh)

[English Demo](https://remark-it.now.sh/index-en_US.html)

## Features

- Command line tool for building a remark-based slideshow from markdown file
- Edit your slideshow in your markdown editor and see it in your browser
- Auto update browser, when  you change your markdown file or files in asset folder
- Easy css and javascript integration.
- All resources support offline access
- [Remarkjs](https://github.com/gnab/remark) Samples
- English and Chinese typography, powered by [Typo.css](https://github.com/sofish/typo.css)
- Multi-column layouts, powered by [Pure.css](https://github.com/pure-css/pure)
- Dark ann light theme, powered by [Nord](https://github.com/arcticicestudio/nord)
- 150 text and background colors, powered by [Open color](https://github.com/yeun/open-color)
- Components powered by [Vue.js](https://cn.vuejs.org/index.html)
- Markdown Diagrams powered by [Mermaid](https://github.com/knsv/mermaid)

## 

## Prerequisites

git, node.js and npm, you can find the installation procedure [here]().

## Installation

Install remarker globally.

##### Windows

From windows command line.

```bash
npm i -g remarker # from the npm repository
```

##### Linux

From linux console.

```bash
sudo npm i -g remarker # from the npm repository
```

## Usage

Clone remarker-it to your local folder.

```bash
git clone https://github.com/peter58228/remarker-it.git # remarker-it folder will be created.
cd remarker-it # go inside remarker-it folder.
```

Edit `remarker.yaml` , your can find the detail [here](https://github.com/kt3k/remarker#configuration). 

Edit your markdown file which you was spacified in remarker.yaml with your favor markdown or text editor.

When you done, run `remarker -b`  inside your remarker-it folder.  `-b` means open the browser to the page when server starts.

If your browser dose not open automatically, you can open your page manually with url `http://localhost:6275/`

You can build a portable presentation to a single folder with `remarker build` command, and you can find all files inside `build` folder. 

## License

MIT
