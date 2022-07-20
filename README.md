# BangFocus for DuckDuckGo

A
[WebExtension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
to focus the [DuckDuckGo](https://duckduckgo.com/) searchbar by typing `!`.

## Installation

### Firefox

#### [AMO](https://addons.mozilla.org/) (recommended)

<https://addons.mozilla.org/en-US/firefox/addon/bangfocus-for-duckduckgo/>

#### GitHub

Download
[the latest release's](https://github.com/smmr0/bang-focus/releases/latest)
XPI.

## Building

### Prerequisites

1. `corepack enable`
2. `yarn install`

### Build for development

1. `yarn run build`
2. Load extension from `build/`

### Run in browser

`yarn run run`

### Package for distribution

1. `yarn run package`
2. Package will be available in `dist/`

### Lint

`yarn run lint`
