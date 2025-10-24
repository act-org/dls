# Encoura Design Language System (DLS)

<!-- markdownlint-disable no-inline-html -->

<a href="https://www.npmjs.com/package/@encoura/dls" style="margin-right:8px" target="\_blank">
  <img alt="Version" src="https://img.shields.io/npm/v/@encoura/dls"/>
</a>
<a
  href="https://github.com/nrccua/dls/actions/workflows/ci.yml"
  style="margin-right:8px"
  target="_blank"
>
  <img alt="Build" src="https://github.com/nrccua/dls/actions/workflows/ci.yml/badge.svg"/>
</a>
<a
  href="https://github.com/nrccua/dls/blob/master/LICENSE"
  style="margin-right:8px"
  target="_blank"
>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green"/>
</a>
<a href="https://www.npmjs.com/package/@encoura/dls" style="margin-right:8px" target="_blank">
  <img alt="Downloads" src="https://img.shields.io/npm/dw/@encoura/dls?color=orange"/>
</a>

<!-- markdownlint-enable no-inline-html -->

The design system for Encoura front-end projects. View the UI components
[on Storybook](https://main--68fa799bcb1fd1fee72cd08c.chromatic.com).

## Project Setup

### Installation

In order to use the DLS, you must install it along with
[Material UI](https://mui.com/) version `7.x` and
[React](https://reactjs.org/) version `18.x` or `19.x`.

```sh
npm install --save @encoura/dls@latest @mui/material @mui/system @mui/x-data-grid react react-dom
```

### Choosing a Theme

This DLS is built on top of the
[theme engine](https://mui.com/material-ui/customization/theming/) from
Material UI, and ships with several themes out of the box:

1. `"ENCOURA"`: for the Encoura's "MyEncoura" look and feel
2. `"ENCOURA_CLASSIC"`: for Encoura's "Classic" look and feel
3. `"ENCOURAGE"`: for the Encoura's "Encourage for Students" look and feel
4. `"ENCOURAGE_E4E"`: for the Encoura's "Encourage for Educators" look and feel

To apply one of these themes to your components, simply wrap your application
in the `ThemeProvider` component and specify a theme!

```jsx
import { ThemeProvider } from '@encoura/dls/components/ThemeProvider';

...

const MyApp = () => (
  // specify a theme here!
  <ThemeProvider theme="ENCOURAGE_E4E">
    <App />
  </ThemeProvider>
);
```

#### Extending Themes

You can exend the core DLS themes using using our variation on the
[`createTheme`](https://mui.com/material-ui/customization/theming/#createtheme-options-args-theme)
generator from Material UI:

```jsx
import deepMerge from 'deepmerge';
import { createTheme } from '@encoura/dls/styles/createTheme';
import { THEME_ENCOURAGE_E4E } from '@encoura/dls/styles/themeEncourageE4E';
import { ThemeProvider } from '@encoura/dls/components/ThemeProvider';

const myExtendedTheme = createTheme(
  deepMerge(THEME_ENCOURAGE_E4E, {
    // theme customizations go here!
  }),
);

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
import { ThemeProvider } from '@encoura/dls/components/ThemeProvider';
import { createTheme } from '@encoura/dls/styles/createTheme';

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

Within your styled components, if you need to access custom a theme variable
that is not present in the default MUI `Theme` type, we provide a helper
function to generate a `styled` function that is strongly typed to your theme:

```jsx
import { createThemeStyled } from '@encoura/dls/helpers/styled';
import { THEME_ENCOURAGE_E4E } from '@encoura/dls/styles/themeEncourageE4E';
import TableCell from '@mui/material/TableCell';

const styled = createThemeStyled(THEME_ENCOURAGE_E4E);

const StyledTypography = styled(TableCell)(({ theme }) => ({
  // `customDims` is not available on the default theme
  height: theme.customDims.heights.tableHeader,
}));
```

#### Custom Themes and Module Augmentation

In cases where you want to "patch" or [augment](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)
an underlying type (for example, if adding a custom color to your theme's
palette), you can create a TS definition file and include it in your project's
`tsconfig.json`.

Steps:

- Create your TS definition file (must use the `.d.ts` file extension).
  [Example here](./src/styles/themeEncourageE4E/augmentTheme.d.ts).
- Ensure that your definition file does **not** use import aliases.
- Do a release. The DLS will automatically include the definition file in the
  build.
- In your project's repo, update your `tsconfig.json`'s `include` field to
  point to the file in your `node_modules` directory. Example: `./node_modules/@encoura/dls/path/to/your/index.d.ts`.
- You may need to restart your IDE's TS server for the changes to appear.

### Load Fonts

#### Museo Sans

The `ENCOURA` and `ENCOURA_CLASSIC` themes assume that the
[Museo Sans](https://fonts.adobe.com/fonts/museo-sans) font
is available in the browser. Include this embed code in the `head`
of your React app after obtaining the licensed font URL from Marketing:

```html
<style>
  @import url('licensed-font-url');
</style>
```

#### Work Sans, Roboto, Roboto Mono

The `ENCOURAGE` and `ENCOURAGE_E4E` themes assume that the
[Work Sans](https://fonts.google.com/specimen/Work+Sans),
[Roboto](https://fonts.google.com/specimen/Roboto), and the
[Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) fonts are available
in the browser. Therefore, it is recommended that you include the following font
reference in the `head` of your React app:

```html
<!-- Fonts required for ENCOURAGE: -->
<link href="https://fonts.googleapis.com/css2?display=swap&family=Work+Sans:wght@200..800" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?display=swap&family=Roboto:wght@300;400;500;700" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?display=swap&family=Roboto+Mono:wght@200..700" rel="stylesheet" />

<!-- Fonts required for ENCOURAGE_E4E: -->
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?display=swap&family=Work+Sans:wght@200..800" rel="stylesheet" />
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
[in the Material-UI repository](https://github.com/mui/material-ui/tree/master/examples/nextjs-with-typescript).

### Import Stuff

That's it! You're ready to use the DLS. Simply import the components,
constants, context, helpers, hooks, styles, and types that you need:

```jsx
// components
import { Alert } from '@encoura/dls/components/Alert';
// constants
import { SORT_DIRECTION_TYPES } from '@encoura/dls/constants';
// context
import { AlertContext } from '@encoura/dls/context';
// helpers
import { search } from '@encoura/dls/helpers';
// hooks
import { useLocalStorage } from '@encoura/dls/hooks';
// styles & themes
import { THEME_ENCOURAGE_E4E } from '@encoura/dls/styles/themeEncourageE4E';
// types
import { SortObject } from '@encoura/dls/types';
```

### Transient Props and Styled Components

The DLS provides a customized styled helper which omits transient props
(those starting with $) from the rendered HTML, while still being able to use
those parameters in styled components. Use as a drop in replacement of the
`styled` function that exists in `@mui/material/styles`:

```jsx
import { styled } from '@encoura/dls/helpers/styled';
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

- This implementation is how Styled Components does it: <https://styled-components.com/docs/api#transient-props>
- Unfortunately emotion (the default styling engine in React) doesn't seem to
  care: <https://github.com/emotion-js/emotion/issues/2193#issuecomment-1178372803>

### SyntaxError: Unexpected token 'export'

The DLS is exported as an ECMAScript module, meaning the `import` and
`export` keywords are preserved. This may cause your packager/runner to throw:

```sh
SyntaxError: Unexpected token 'export'
```

If you see this error, you'll need to instruct your packager/runner to transpile
the DLS on-the-fly.

#### Next.js

You can do this in a [Next.js](https://nextjs.org/) app by adding the DLS to the
[`transpilePackages`](https://beta.nextjs.org/docs/api-reference/next.config.js#transpilepackages)
option in your `next.config.js` file.

```js
transpilePackages: ['@encoura/dls'],
```

#### Jest

You can do this in the [Jest](https://jestjs.io/) test runner by omitting the
DLS from the
[`transformIgnorePatterns`](https://jestjs.io/docs/tutorial-react-native#transformignorepatterns-customization)
option in your `jest.config.js` file.

```js
transformIgnorePatterns: ['/node_modules/(?!(@encoura/dls)/)'],
```
