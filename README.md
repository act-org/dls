# Design Language System (DLS)
<!-- markdownlint-disable-next-line MD013 -->
[![Build Status](https://travis-ci.com/act-org/dls.svg)](https://travis-ci.com/act-org/dls)

The Design Language System for ACT front-end projects. View the UI components
[here](https://act-org.github.io/dls).

## Project Setup

### Installation

In order to use the DLS, you must install it along with
[Material UI](https://material-ui.com/) version `4.x` and
[React](https://reactjs.org/) version `16.x` or `17.x`.

```shell
npm install --save @actinc/dls@latest @material-ui/core@4 react@17 react-dom@17
```

### Choosing a Theme

This DLS is built on top of the
[theming engine](https://material-ui.com/customization/theming/) from
Material UI, and ships with two themes out of the box:

1. `"ACT"` - for ACT's "traditional" look and feel
2. `"ACT_ET"` - for ACT's "emerging technology" look and feel

To apply one of these themes to your components, simply wrap your application
in the `ThemeProvider` component and specify a theme!

```jsx
import { ThemeProvider } from '@actinc/dls/components';

...

const MyApp = () => (
  // specify a theme here!
  <ThemeProvider theme="ACT_ET">
    <App />
  </ThemeProvider>
);
```

#### Custom Themes

Alternatively, you can build your own theme from scratch using the
<!-- markdownlint-disable-next-line MD013 -->
[`createMuiTheme`](https://material-ui.com/customization/theming/#createmuitheme-options-args-theme)
generator from Material UI:

```jsx
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@actinc/dls/components';

const myCustomTheme = createMuiTheme({ ... });

const MyApp = () => (
  <ThemeProvider theme={myCustomTheme}>
    <App />
  </ThemeProvider>
);
```

### Load Fonts

The DLS uses [Montserrat](https://fonts.google.com/specimen/Montserrat) as the
base font inside the default theme. To ensure that the browser has access to
this font, it is recommended that you include the following font reference in
the `head` of your React app:

```jsx
...
<link
  href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap"
  rel="stylesheet"
/>
...
```

### CSS Baseline

It is recommended to inject the `CssBaseline` component from Material UI near
the root of your component tree in order to reset and normalize browser styles
for your project:

```jsx
import { CssBaseline } from '@material-ui/core';

...

const MyApp = () => (
  ...
  <CssBaseline />
  ...
);
```

### Server-Side Rendering

If your project's React framework supports SSR, you can configure the DLS
components for server-side rendering by using the `ServerStyleSheets` export
from Material UI.

In a [Next.js](https://nextjs.org/) project, for example, you would add the
following to your `pages/_document.tsx` file:

```jsx
import { ServerStyleSheets } from '@material-ui/core/styles';

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

### Icons

The DLS re-exports all icons that are provided by the
[`mdi-material-ui`](https://www.npmjs.com/package/mdi-material-ui) package.

You can search for a specific icon to use on
[materialdesignicons.com](https://materialdesignicons.com). Once you've found
the perfect icon, you can use it in your project like so:

```jsx
import { PollBox } from '@actinc/dls/icons';

...

const MyComponent = () => (
  ...
  <PollBox />
  ...
);
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
        '@material-ui/core': {
          preventFullImport: true,
          transform: '@material-ui/core/${member}',
        },
        '@material-ui/core/colors': {
          preventFullImport: true,
          transform: '@material-ui/core/colors/${member}',
        },
        '@actinc/dls/components': {
          transform: '@actinc/dls/components/${member}',
          preventFullImport: true,
        },
        '@actinc/dls/constants': {
          transform: '@actinc/dls/constants/${member}',
          preventFullImport: true,
        },
        '@actinc/dls/helpers': {
          transform: '@actinc/dls/helpers/${member}',
          preventFullImport: true,
        },
        '@actinc/dls/icons': {
          transform: '@actinc/dls/icons/${member}',
          preventFullImport: true,
        },
        '@actinc/dls/styles': {
          transform: '@actinc/dls/styles/${member}',
          preventFullImport: true,
        },
        '@actinc/dls/types': {
          transform: '@actinc/dls/types/${member}',
          preventFullImport: true,
        },
      },
    ],
    ...
  ],
  presets: [...],
}
```

### Import Stuff

That's it! You're ready to use the DLS. Simply import the colors, components,
constants, helpers, icons, styles, and types that you need:

```jsx
// components
import { Alert } from '@actinc/dls/components';
// constants
import { sortDirectionTypes as SORT_DIRECTION_TYPES } from '@actinc/dls/constants';
// helpers
import { search } from '@actinc/dls/helpers';
// icons
import { ChevronDown } from '@actinc/dls/icons';
// styles & themes
import { THEME_ACT } from '@actinc/dls/styles/themeAct';
// types
import { SortObject } from '@actinc/dls/types';
```

## Local Development

In order to run the DLS locally:

1. Install node modules: `npm install`
2. Start the [Storybook](https://storybook.js.org) component visualizer:
`npm start`

### npm Scripts

There are lots of npm scripts at your disposal during local development.
Here are some of the more important ones:

| Script                  | Description                                                           |
|:----------------------- |:--------------------------------------------------------------------- |
| npm run build           | Transpile DLS from TypeScript (`./src`) into ES5 (`./dist`).          |
| npm run build-storybook | Create a static website for deployment (`./storybook-static`).        |
| npm start               | Start the [Storybook](https://storybook.js.org) component visualizer. |
| npm test                | Run all tests.                                                        |
| npm run release         | Publish a new release of the DLS.                                     |

## Pinned Packages

Some npm packages are pinned to non-current versions for a specific reason:

| Package      | Version | Reason                                                                      |
|:------------ |:------- |:--------------------------------------------------------------------------- |
| `np`         | `7.4.0` | Version `7.5.0` is [broken](https://github.com/sindresorhus/np/issues/613). |
| `typescript` | `4.2.3` | Version `4.3.2` has issues with the test suite.                             |
