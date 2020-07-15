# Design Language System (DLS)

DLS for ACT front-end projects.

## Getting Started

1. Install node modules:

    ```shell
    npm install
    ```

2. Start the [Storybook](https://storybook.js.org) component visualizer:

    ```shell
    npm start
    ```

## npm Scripts

There are lots of npm scripts at your disposal during local development.
Here are some of the more important ones:

| Script                  | Description                                                           |
|:----------------------- |:--------------------------------------------------------------------- |
| npm run build           | Transpile DLS from TypeScript (`./src`) into ES5 (`./lib`).           |
| npm run build-storybook | Create a static website for deployment (`./storybook-static`).        |
| npm start               | Start the [Storybook](https://storybook.js.org) component visualizer. |
| npm test                | Run all tests.                                                        |
