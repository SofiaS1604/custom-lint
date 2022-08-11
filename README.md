# React TSX Boilerplate

## Introduction

This repository is a minimal boilerplate repo for React, WebPack and TypeScript. It comes with `react-router-dom` and modular SCSS support set up, but does not come with Redux or any other React state management library.

## Using the code

The `src` folder contains a basic example app to get started.

* Clone this repo.
* Run `npm install` to install dependencies.
* Run one of the following commands:
    1. `npm run build-dev` to build the app in `development` mode.
    2. `npm run build-prod` to build in `production` mode. Note that the prod build extracts the transpiled CSS into `dist/main.css` using `mini-css-extract-plugin`, whereas the dev build bundles it into the JS file.
    3. `npm run start` to start the dev-server.
* Make whatever additional changes you need for your project.

## Debugging

Debugging settings are included for VS Code.

Linting settings are also included for VS Code; you'll need the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VS Code.

If you don't use VS Code for your development, you can safely delete the `.vscode` folder.
