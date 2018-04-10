# Vue Webpack Multi Page

> Vue+Webpack Multi Page HTML generator

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## Structure Tree
```
├──README.md
├──build
│   ├─build.js
│   ├─utils.js
│   ├─vue-loader.conf.js
│   ├─webpack.base.conf.js
│   ├─webpack.dev.confjs
│   └─webpack.prod.conf.js
├──config
│   ├─dev.env.js
│   ├─index.js
│   ├─prod.env.js
│   └─test.env.js
├──src
│   └─pages   // Multi pages directory
│       ├─busitest    // Page 1
│       │     ├─index.js       // new Vue
│       │     ├─index.vue
│       │     ├─route.js       // vue-router for page1
│       │     └─score.vue
│       ├─busitest2   // Page 2
│       │     ├─index.js
│       │     ├─index.vue
│       │     ├─route.js       // vue-router for page2
│       │     └─score.vue
│       └─app.vue     // Root
├──.babelrc
├──.editorconfig
├──.eslintignore
├──.eslintrc.js
├──.gitignore
├──.postcssrc.js
├──app.json     // Pages config
├──index.html   // html template
├──package-lock.json
└──package.json
```
## How to create a new page
1. Create a folder under `src/pages`, and then config the folder name in `app.json` (The entry name in app.json should be the same as the folder name).
2. Create `index.js`, `route.js` and `index.vue` into your new folder
3. Config router in `route.js` as sample shows

## Advantages
1. All pages uses one template `index.html`
2. Build pages as `app.json` configured
3. Pages use its own vue-router separately

## Notice
If you don't want to build any page, just remove it from `app.json`. Then webpack won't build it.
