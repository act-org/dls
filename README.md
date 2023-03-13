# Design Language System (DLS)

<!-- markdownlint-disable line-length -->

[![Version](https://img.shields.io/npm/v/@actinc/dls)](https://www.npmjs.com/package/@actinc/dls) [![Build Status](https://img.shields.io/travis/act-org/dls/master)](https://app.travis-ci.com/github/act-org/dls) [![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/act-org/dls/blob/master/LICENSE) [![Downloads](https://img.shields.io/npm/dw/@actinc/dls?color=orange)](https://www.npmjs.com/package/@actinc/dls)

<!-- markdownlint-enable line-length -->

The Design Language System for ACT & Encoura front-end projects. View the UI components
[here](https://act-org.github.io/dls).

## Project Setup

### Installation

In order to use the DLS, you must install it along with
[Material UI](https://mui.com/) and
[React](https://reactjs.org/) version `17.x` or `18.x`.

```shell
npm install --save @actinc/dls@latest @mui/material @mui/lab @mui/x-data-grid @emotion/styled @emotion/react react react-dom
```

### Choosing a Theme

This DLS is built on top of the
[theming engine](https://mui.com/material-ui/customization/theming/) from
Material UI, and ships with two themes out of the box:

1. `"ACT"`: for ACT's "traditional" look and feel
2. `"ACT_ET"`: for ACT's "Emerging Technology" look and feel
3. `"ENCOURA_CLASSIC"`: for Encoura's "Classic" look and feel
4. `"ENCOURAGE_E4S"`: for Encourage's "E4S" look and feel

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

#### Extending Themes

You can exend the core DLS themes using the
[`createTheme`](https://mui.com/material-ui/customization/theming/#createtheme-options-args-theme)
generator from Material UI:

```jsx
import deepMerge from 'deepmerge';
import { createTheme } from '@actinc/dls/styles/createTheme';
import { THEME_ACT } from '@actinc/dls/styles/themeAct';
import { ThemeProvider } from '@actinc/dls/components';

const myExtendedTheme = createTheme(deepMerge(THEME_ACT_ET, {
  // theme customizations go here!
}));

const MyApp = () => (
  <ThemeProvider theme={myExtendedTheme}>
    <App />
  </ThemeProvider>
);
```

#### Custom Themes

Alternatively, you can build your own theme from scratch using our variation on the
[`createTheme`](https://mui.com/material-ui/customization/theming/#createtheme-options-args-theme)
generator from Material UI. Our version takes the same parameters, but will
return a strongly typed version of the theme with any customizations you may
have added.

```jsx
import { ThemeProvider } from '@actinc/dls/components';
import { createTheme } from '@actinc/dls/styles/createTheme';

const myCustomTheme = createTheme({
  // build your theme here!
});

const MyApp = () => (
  <ThemeProvider theme={myCustomTheme}>
    <App />
  </ThemeProvider>
);
```

#### Custom Themes And Styled Components

If you'd like to use a custom theme (or one of the provided themes) with your
styled components, and your custom theme includes theme options that are not
present in the default MUI Theme type, then we provide a helper function to
generate a styled function that is strongly typed to your theme:

```jsx
import { createThemeStyled } from '@actinc/dls/helpers/material/styled';
import { THEME_ACT } from '@actinc/dls/styles/themeAct';
import TableCell from '@mui/material/TableCell';

const styled = createThemeStyled(THEME_ACT);

const StyledTypography = styled(TableCell)(({ theme}) => ({
   // customDims isn't available on a regular theme
  height: theme.customDims.heights.tableHeader,
}))
```

### Load Fonts

#### Montserrat

The `ACT` and `ACT_ET` themes assume that the
[Montserrat](https://fonts.google.com/specimen/Montserrat) font is available in
the browser. Therefore, it is recommended that you include the following font
reference in the `head` of your React app:

```html
<link
  href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap"
  rel="stylesheet"
/>
```

#### Museo

The `ENCOURA_CLASSIC` theme assumes that the
[Museo](https://github.com/act-org/dls/tree/master/public/fonts/Museo) font
is available in the browser. Therefore, it is recommended that you include the
following font reference in the `head` of your React app:

```html
<style type="text/css">
  @font-face {
    font-family: 'Museo';
    src: url('path/to/Museo300.otf');
    font-style: normal;
    font-weight: 300;
  }
  @font-face {
    font-family: 'Museo';
    src: url('path/to/Museo500.otf');
    font-style: normal;
    font-weight: 500;
  }
  @font-face {
    font-family: 'Museo';
    src: url('path/to/Museo700.otf');
    font-style: normal;
    font-weight: 700;
  }
</style>
```

The Museo font files can be downloaded
[here](https://github.com/act-org/dls/tree/main/public/fonts/Museo).

#### Work Sans, Roboto, Roboto Mono

The `ENCOURAGE_E4S` theme assumes that the
[Work Sans](https://fonts.google.com/specimen/Work+Sans),
[Roboto](https://fonts.google.com/specimen/Roboto), and the
[Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) fonts are available
in the browser. Therefore, it is recommended that you include the following font
reference in the `head` of your React app:

```html
<link
  href="https://fonts.googleapis.com/css2?display=swap&family=Work+Sans:wght@200..800"
  rel="stylesheet"
/>
<link
  href="https://fonts.googleapis.com/css2?display=swap&family=Roboto:wght@300;400;500;700"
  rel="stylesheet"
/>
<link
  href="https://fonts.googleapis.com/css2?display=swap&family=Roboto+Mono:wght@200..700"
  rel="stylesheet"
/>
```

### CSS Baseline

It is recommended to inject the `CssBaseline` component from Material UI near
the root of your component tree in order to reset and normalize browser styles
for your project:

```jsx
import { CssBaseline } from '@mui/material';

...

const MyApp = () => (
  ...
  <CssBaseline />
  ...
);
```

### Server-Side Rendering

If your project's React framework supports SSR, you can configure the DLS
components for server-side rendering. See the official Next.js example
[here](https://github.com/mui/material-ui/tree/master/examples/nextjs-with-typescript).

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

### Transient Props and Styled Components

The DLS provides a customized styled helper which omits transient props
(those starting with $) from the rendered HTML, while still being able to use
those parameters in styled components. Use as a drop in replacement of the
`styled` function that exists in `@mui/material/styles`:

```jsx
import { styled } from '@actinc/dls/helpers/material/styled';
import Button, { ButtonProps } from '@mui/material/Button';
import * as React from 'react';

const StyledButton = styled(Button)<ButtonProps & { $ultraWide: boolean }>(
  ({ $ultraWide, theme }) => ({
    paddingLeft: $ultraWide ? theme.spacing(8) : theme.spacing(4),
    paddingRight: $ultraWide ? theme.spacing(8) : theme.spacing(4),
  }),
);

const MyComponent: React.FC = () => {
  return <StyledButton $ultraWide />;
};
```

* This implementation is how Styled Components does it: <https://styled-components.com/docs/api#transient-props>
* Unfortunately emotion (the default styling engine in React) doesn't seem to
care: <https://github.com/emotion-js/emotion/issues/2193#issuecomment-1178372803>

## Minimizing Bundle Size

The DLS has been refactored to publish more ES friendly JavaScript classes
instead of the prior CommonJS format. This enables mostly out of the box
deep tree shaking by the most common bundlers. The package.json has also
been updated to set

```json
"sideEffects": false,
```

which instructs builders to enable deeper tree shaking.  This should make
bundle sizes significantly smaller with less effort, however the tradeoff
is in certain scenarios, like Lazy Loading, if you are expecting a dependency
to be there that is now removed from tree shaking things will break and you
may need to import that dependency directly in a parent bundle.

### DLS < 7 Bundle Minimizing

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
        '@mui/material': {
          preventFullImport: true,
          transform: '@mui/material/${member}',
        },
        '@actinc/dls/components': {
          transform: '@actinc/dls/components/${member}',
          preventFullImport: true,
        },
        '@actinc/dls/constants': {
          transform: '@actinc/dls/constants/${member}',
          preventFullImport: true,
        },
        '@actinc/dls/context': {
          transform: '@actinc/dls/context/${member}',
          preventFullImport: true,
        },
        '@actinc/dls/helpers': {
          transform: '@actinc/dls/helpers/${member}',
          preventFullImport: true,
        },
        '@actinc/dls/hooks': {
          transform: '@actinc/dls/hooks/${member}',
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
import { SORT_DIRECTION_TYPES } from '@actinc/dls/constants';
// context
import { AlertContext } from '@actinc/dls/context';
// helpers
import { search } from '@actinc/dls/helpers';
// hooks
import { useLocalStorage } from '@actinc/dls/hooks';
// icons
import { ChevronDown } from '@actinc/dls/icons';
// styles & themes
import { THEME_ACT } from '@actinc/dls/styles/themeAct';
// types
import { SortObject } from '@actinc/dls/types';
```

## Local Development

Check out the [developer guide](./docs/GUIDE.md) to learn how to build
effectively for the DLS.

To run the DLS locally:

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

| Package               | Version | Reason                                                      |
|:--------------------- |:------- |:----------------------------------------------------------- |
| `@storybook/mdx2-csf` | `0.0.3` | `0.0.4` is not yet compatible with `@storybook/addon-docs`. |
