# Design Language System (DLS)

<!-- markdownlint-disable no-inline-html -->

<a href="https://www.npmjs.com/package/@actinc/dls">
  <img alt="Version" src="https://img.shields.io/npm/v/@actinc/dls"/>
</a>&nbsp;<a href="https://github.com/act-org/dls/actions/workflows/ci.yml">
  <img alt="Build" src="https://github.com/act-org/dls/actions/workflows/ci.yml/badge.svg"/>
</a>&nbsp;<a href="https://github.com/act-org/dls/blob/master/LICENSE">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green"/>
</a>&nbsp;<a href="https://www.npmjs.com/package/@actinc/dls">
  <img alt="Downloads" src="https://img.shields.io/npm/dw/@actinc/dls?color=orange"/>
</a>

<!-- markdownlint-enable no-inline-html -->

The Design Language System for ACT & Encoura front-end projects. View the UI components
[here](https://act-org.github.io/dls).

## Project Setup

### Installation

In order to use the DLS, you must install it along with
[Material UI](https://mui.com/) version `5.x` and
[React](https://reactjs.org/) version `17.x` or `18.x`.

```sh
npm install --save @actinc/dls@latest @mui/material @mui/system @mui/x-data-grid react react-dom
```

### Choosing a Theme

This DLS is built on top of the
[theme engine](https://mui.com/material-ui/customization/theming/) from
Material UI, and ships with several themes out of the box:

1. `"ACT"`: for ACT's "traditional" look and feel
2. `"ACT_ET"`: for ACT's "Emerging Technology" look and feel
3. `"ENCOURA"`: for the Encoura's "MyEncoura" look and feel
4. `"ENCOURA_CLASSIC"`: for Encoura's "Classic" look and feel
5. `"ENCOURAGE"`: for the Encoura's "Encourage" look and feel

To apply one of these themes to your components, simply wrap your application
in the `ThemeProvider` component and specify a theme!

```jsx
import { ThemeProvider } from '@actinc/dls/components/ThemeProvider';

...

const MyApp = () => (
  // specify a theme here!
  <ThemeProvider theme="ACT_ET">
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
import { createTheme } from '@actinc/dls/styles/createTheme';
import { THEME_ACT } from '@actinc/dls/styles/themeAct';
import { ThemeProvider } from '@actinc/dls/components/ThemeProvider';

const myExtendedTheme = createTheme(deepMerge(THEME_ACT, {
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
import { ThemeProvider } from '@actinc/dls/components/ThemeProvider';
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

Within your styled components, if you need to access custom a theme variable
that is not present in the default MUI `Theme` type, we provide a helper
function to generate a `styled` function that is strongly typed to your theme:

```jsx
import { createThemeStyled } from '@actinc/dls/helpers/styled';
import { THEME_ACT } from '@actinc/dls/styles/themeAct';
import TableCell from '@mui/material/TableCell';

const styled = createThemeStyled(THEME_ACT);

const StyledTypography = styled(TableCell)(({ theme }) => ({
   // `customDims` is not available on the default theme
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

#### Museo Sans

The `ENCOURA` and `ENCOURA_CLASSIC` themes assume that the
[Museo Sans](https://fonts.adobe.com/fonts/museo-sans) font
is available in the browser.  Include this embed code in the `head`
of your React app after obtaining the licensed font URL from Marketing:

```html
<style>
  @import url("licensed-font-url");
</style>
```

#### Work Sans, Roboto, Roboto Mono

The `ENCOURAGE` theme assumes that the
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

#### Option 1: Find and import from the DLS

The DLS re-exports all icons that are provided by the
[`mdi-material-ui`](https://www.npmjs.com/package/mdi-material-ui) package. This
is an expansive list of icons that are managed by the material community. You
can search for a specific icon to use on
[materialdesignicons.com](https://materialdesignicons.com). Once you've found
the perfect icon, you can use it in your project like so:

```jsx
// Import the needed icon(s) directly, to avoid bundle size bloat.
import PollBox from '@actinc/dls/icons/PollBox';

...

const MyComponent = () => (
  ...
  <PollBox />
  ...
);
```

#### Option 2: Find and import from `@mui/icons-material`

If the DLS doesn't provide the icon you're looking for, as a second line of
defense, you can search for icons in the
[`@mui/icons-material`](https://www.npmjs.com/package/@mui/icons-material)
library. While most of these icons can be found directly in the DLS via
`mdi-material-ui`, there is some unique selection within this library that could
be useful to you. You can search for a specific icon to use on
[mui.com](https://mui.com/material-ui/material-icons/). Once you've found
the perfect icon, you can use it in your project like so:

```jsx
// Import the needed icon(s) directly, to avoid bundle size bloat.
import PollIcon from '@mui/icons-material/Poll';

...

const MyComponent = () => (
  ...
  <PollIcon />
  ...
);
```

#### Option 3: Create a custom icon

When all else fails, you can create a custom icon using the `SvgIcon` component
from Material UI. Here's an example:

```jsx
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

export const CustomIcon: React.FC<SvgIconProps> = (props: SvgIconProps): React.ReactElement<SvgIconProps> => (
  <SvgIcon style={{ fill: 'none' }} viewBox="0 0 24 24" {...props}>
    <path d="<insert-svg-data-here>" />
  </SvgIcon>
);

export default CustomIcon;
```

### Import Stuff

That's it! You're ready to use the DLS. Simply import the components,
constants, context, helpers, hooks, icons, styles, and types that you need:

```jsx
// components
import { Alert } from '@actinc/dls/components/Alert';
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

### Transient Props and Styled Components

The DLS provides a customized styled helper which omits transient props
(those starting with $) from the rendered HTML, while still being able to use
those parameters in styled components. Use as a drop in replacement of the
`styled` function that exists in `@mui/material/styles`:

```jsx
import { styled } from '@actinc/dls/helpers/styled';
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

## ES Modules & Tree Shaking

Version <= 6 of the DLS were built and exported as
[CommonJS modules](https://nodejs.org/api/modules.html#modules-commonjs-modules).
While this allowed the simplest integration of the DLS into any
project, it also resulted in project bundles being
[larger than desired](https://web.dev/commonjs-larger-bundles/) due to
the inability of bundlers to
[tree-shake](https://www.smashingmagazine.com/2021/05/tree-shaking-reference-guide/)
the DLS.

In version >= 7 of the DLS, we are now building and exporting the library as
[ECMAScript modules](https://nodejs.org/api/esm.html#modules-ecmascript-modules).
This allows your project's bundler to much more easily read and
[tree-shake](https://www.smashingmagazine.com/2021/05/tree-shaking-reference-guide/)
the DLS right out of the box. (No more need for
[`babel-plugin-transform-imports`](https://www.npmjs.com/package/babel-plugin-transform-imports)!)

Furthermore, the DLS's `package.json` is also setting:

```json
"sideEffects": false,
```

to instruct builders to enable even deeper tree-shaking. This should make
bundle sizes significantly smaller with less effort. However, the tradeoff
is that in certain scenarios, like
[Lazy Loading](https://nextjs.org/docs/advanced-features/dynamic-import),
if you are expecting a dependency to be there that is now removed from
tree-shaking, things will break and you may need to import that dependency
directly in a parent bundle.

### SyntaxError: Unexpected token 'export'

One downside of exporting the DLS as ECMAScript modules is that the `import` and
`export` keywords are preserved, which may cause your packager/runner to throw:

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
transpilePackages: ['@actinc/dls'],
```

#### Jest

You can do this in the [Jest](https://jestjs.io/) test runner by omitting the
DLS from the
[`transformIgnorePatterns`](https://jestjs.io/docs/tutorial-react-native#transformignorepatterns-customization)
option in your `jest.config.js` file.

```js
transformIgnorePatterns: ['/node_modules/(?!(@actinc/dls)/)'],
```

## Local Development

Check out the [developer guide](./docs/GUIDE.md) to learn how to build
effectively for the DLS.

To run the DLS locally:

1. Install node modules: `npm install`
2. Start the [Storybook](https://storybook.js.org) component visualizer:
`npm start`

### How to Iterate Locally

For rapid iteration, you can run a local build of this library in your
downstream project:

1. In this library, run the watch script: `npm run watch`

2. In your project, install a local build of this library: `npm install <path-to-this-repo>/dist`

Under the hood, this creates a symlink between the local build and your project.
When changes are detected under the `src` folder, a new build will be output
into the `dist` folder and picked up by your project.

Once you are happy with the changes, you'll want to destroy this symlink
and replace the local build with a formal/hosted version of this library.
You can do that by running the following commands in your project:

1. `npm uninstall @actinc/dls`

2. `npm install @actinc/dls@<pick-your-version> --save --save-exact`

### npm Scripts

There are lots of npm scripts at your disposal during local development.
Here are some of the more important ones:

| Script                    | Description                                                             |
|:------------------------- |:----------------------------------------------------------------------- |
| npm run build             | Transpiles DLS from TypeScript (`./src`) into ES5 (`./dist`).           |
| npm run build-storybook   | Creates a static website for deployment (`./storybook-static`).         |
| npm start                 | Starts the [Storybook](https://storybook.js.org) component visualizer.  |
| npm test                  | Runs all tests.                                                         |
| npm run release           | Publishes a new release of the DLS.                                     |
| npm run release:storybook | Publishes a new release of Storybook (make sure to pull latest `main`). |
| npm run watch             | Watch the `src` folder for changes and transpile on-the-fly to `dist`.  |

### Committing Code

semantic-release scans commits to manage package.json versions and `CHANGELOG.MD`

It is important that we accurately capture what type of development we are doing.

* For changes to storybook (i.e. no change to components), use the `docs` tag:

```bash
git commit -m "docs: Added stories for Alert"
```

* For patches to existing components, use `fix`:

```bash
git commit -m "fix: Fixed Snackbar not appear in center of screen"
```

* For new functionality, use `feat`:

```bash
git commit -m "feat: Added Carousel component"
```

## Pinned Packages

Some npm packages are pinned to non-current versions for a specific reason:

| Package      | Version | Reason |
|:------------ |:------- |:-------|
