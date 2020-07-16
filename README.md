# Design Language System (DLS)

DLS for ACT front-end projects.

## Getting Started

1. Install node modules: `npm install`
2. Start the [Storybook](https://storybook.js.org) component visualizer:
`npm start`

### npm Scripts

There are lots of npm scripts at your disposal during local development.
Here are some of the more important ones:

| Script                  | Description                                                           |
|:----------------------- |:--------------------------------------------------------------------- |
| npm run build           | Transpile DLS from TypeScript (`./src`) into ES5 (`./lib`).           |
| npm run build-storybook | Create a static website for deployment (`./storybook-static`).        |
| npm start               | Start the [Storybook](https://storybook.js.org) component visualizer. |
| npm test                | Run all tests.                                                        |

## Project Setup

### Installation

Add the following line to your `package.json` file:

```shell
{
  ...
  "dependencies": {
    ...
    "act-dls": "git+ssh://bitbucket.org/actet/act-dls.git#vX.X.X",
    ...
  }
  ...
}
```

Be sure to replace `vX.X.X` with the specific version of the DLS that you would
like to install (e.g. `v1.4.0`). Then install the DLS into your project by
running:

```shell
npm install
```

### Connect Style System

The DLS comes with a complete style and theming system that is based on
[Material UI](https://material-ui.com/). In order to connect your project to
this system, simply wrap your app with the `ThemeProviderBase` or
`ThemeProviderPrimary` component.

```jsx
import { ThemeProviderPrimary } from 'act-dls/lib/components';

...

const MyApp = () => (
  <ThemeProviderPrimary>
    <App />
  </ThemeProviderPrimary>
)
```

### CSS Baseline

It is recommended to inject the `CssBaselineBase` component near the root of
your component tree in order to reset and normalize browser styles for your
project:

```jsx
import { CssBaselineBase, ThemeProviderPrimary } from 'act-dls/lib/components';

...

const MyApp = () => (
  <ThemeProviderPrimary>
    <CssBaselineBase />
    <App />
  </ThemeProviderPrimary>
)
```

### Server-Side Rendering

If your project's React framework supports SSR, you can configure the DLS for
server-side rendering by using the `ServerStyleSheets` style API.

In a [Next.js](https://nextjs.org/) project, you would add the following to
your `pages/_document.tsx` file:

```jsx
import { ServerStyleSheets } from 'act-dls/lib/styles';

...

class Document extends DocumentImport<Props> {
  static async getInitialProps(ctx: Context): Promise<Props> {
    ...

    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = (): void =>
      originalRenderPage({
        enhanceApp: (App: any): any => (props: any): any =>
          sheets.collect(<App {...props} />),
      });

    ...

    return {
      ...
      styles: sheets.getStyleElement(),
      ...
    }
  }

  ...
}
```

### Minimizing Bundle Size

If you import modules from the ACT DLS using named imports, more code may be
loaded into memory than you need. In order to use named imports while keeping
your bundle size as small as possible, we recommend configuring the
[babel-plugin-transform-imports](https://bitbucket.org/amctheatres/babel-transform-imports/src/master/)
plugin for [Babel](https://babeljs.io/).

```shell
npm install --save-dev babel-plugin-transform-imports
```

Then add the following to your Babel config file (e.g. `.babelrc.js`):

```js
module.exports = {
  plugins: [
    ...
    [
      'babel-plugin-transform-imports',
      {
        'act-dls/lib/colors': {
          transform: 'act-dls/lib/colors/${member}',
          preventFullImport: true,
        },
        'act-dls/lib/components': {
          transform: 'act-dls/lib/components/${member}',
          preventFullImport: true,
        },
        'act-dls/lib/constants': {
          transform: 'act-dls/lib/constants/${member}',
          preventFullImport: true,
        },
        'act-dls/lib/helpers': {
          transform: 'act-dls/lib/helpers/${member}',
          preventFullImport: true,
        },
        'act-dls/lib/icons': {
          transform: 'act-dls/lib/icons/${member}',
          preventFullImport: true,
        },
        'act-dls/lib/styles': {
          transform: 'act-dls/lib/styles/${member}',
          preventFullImport: true,
        },
        'act-dls/lib/types': {
          transform: 'act-dls/lib/types/${member}',
          preventFullImport: true,
        },
      },
    ],
    ...
  ],
  presets: [...],
}
```

### Import Stuff!

That's it! You're ready to use the DLS. Simply import the colors, components,
constants, helpers, icons, styles, and types that you need:

```jsx
// colors
import { red } from 'act-dls/lib/colors';
// components
import { ButtonPrimary } from 'act-dls/lib/components';
// constants
import { typography as TYPOGRAPHY } from 'act-dls/lib/constants';
// helpers
import { search } from 'act-dls/lib/helpers';
// icons
import { ChevronDown } from 'act-dls/lib/icons';
// styles
import { makeStyles } from 'act-dls/lib/styles';
// types
import { SortObject } from 'act-dls/lib/types';
```

### Configure Pipelines

If your project is using Bitbucket Pipelines, you'll need to add an SSH Key
to your pipeline as well as a new Access Key to this repository. The combination
of these two things will enable your pipelines to successfully `npm install`
this dependency.
