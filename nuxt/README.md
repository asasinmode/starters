# asasinmode vue starter

This is a [nuxt 3](https://nuxt.com/) template for new projects.

## tools

 - [typescript](https://www.typescriptlang.org/)
 - [pinia](https://pinia.vuejs.org/)
 - [eslint](https://eslint.org/) with [custom config](https://github.com/asasinmode/eslint-config/)
 - [unocss](https://github.com/unocss/unocss)

Besides packages listed above this template includes

 - dark mode switch
 - template error page

## get started

### 1. copy the repository

```sh
npx degit git@github.com:asasinmode/starters/nuxt my-project
```

### 2. before installing dependencies

Go to `package.json` and update the following:
  - **author**, **description** and **license**.
  - **packageManager** with your package manager of choice.
  - **@iconify/\*** _devDependencies_ with your preferred icon sets from [iconify](https://iconify.design/).

### 3. install dependencies

```sh
# or npm/yarn
pnpm i
```

### 4. clean up template

1. update **title** and **favicon** in `app.vue`
2. remove `public/favicon.webp`
3. update `unocss.config.ts`
4. remove **about** page in `pages/about.vue`
5. remove `components/DependencyIcon.vue` and `components/DependencyIconsCircle.vue`
6. remove `assets/pinia.svg` and `assets/unocss.svg`
