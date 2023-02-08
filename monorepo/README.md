# asasinmode monorepo starter

This is a [PNPM](https://pnpm.io/) monorepo template for new projects. It's designed for fullstack projects with [NodeJS](https://nodejs.org/en/) **api** and local packages (any packages in `packages/` directory) in mind. Local packages can be shared between each other and **api** or any other sub-directories you might have. For example **frontend clients** like [Vue SPA](https://github.com/asasinmode/starters/tree/master/vue) or [Nuxt SSR Application](https://github.com/asasinmode/starters/tree/master/nuxt).

## disclaimer

This template is mainly supposed to be an example of monorepo and contains the bare minimum of config required to work. Because of this before you start using it I'd recommend digging into what [tsconfig](https://www.typescriptlang.org/tsconfig) and [package.json](https://docs.npmjs.com/cli/v9/configuring-npm/package-json) configuration you might need.

Besides that, it's not a library template, so if you are looking for that I'd recommend checking out [vue-use](https://github.com/vueuse/vueuse) repository.

## tools

 - [typescript](https://www.typescriptlang.org/)
 - [PNPM](https://pnpm.io/)
 - [eslint](https://eslint.org/) with [custom config](https://github.com/asasinmode/eslint-config/)

## overview

`packages` directory contains one package `example` that can be accessed by other packages with the name declared in `package.json` **name** field (`@local-package/example`).

To see it in action and for some additional information about initial state of **api** package check out the **api's** package  [README](https://github.com/asasinmode/starters/tree/master/monorepo/api).

## get started

### 1. copy the repository

```sh
npx degit git@github.com:asasinmode/starters/monorepo my-project
```

### 2. before installing dependencies

Go to `package.json` and update the following:
  - **author**, **description** and **license**.

### 3. install dependencies

This monorepo is made with [PNPM Workspaces](https://pnpm.io/workspaces). As such, it won't work with other package managers.

```sh
pnpm i
```
