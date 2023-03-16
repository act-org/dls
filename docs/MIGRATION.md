# Migrating from DLS6 to DLS7

## Breaking Changes

* Converted the DLS build from
[CommonJS modules](https://nodejs.org/api/modules.html#modules-commonjs-modules)
to
[ECMAScript modules](https://nodejs.org/api/esm.html#modules-ecmascript-modules).
(See below if you experience bundler issues!)
* Renamed the `ENCOURA_DATALAB` theme to
[`ENCOURA_CLASSIC`](https://github.com/act-org/dls/tree/main/src/styles/themeEncouraClassic)
* Renamed `sortDirectionTypes` constant to
[`SORT_DIRECTION_TYPES`](https://github.com/act-org/dls/blob/main/src/constants/SORT_DIRECTION_TYPES.ts)

## New Features

* Faster load times due to significantly reduced bundle sizes (see below!)
* Added support for [MUI X v6 packages](https://mui.com/blog/mui-x-v6/)
* Added a new
[`ENCOURAGE`](https://github.com/act-org/dls/tree/main/src/styles/themeEncourage)
theme
* Added `theme.spacingPx` as a convenience number that is accessible on all
themes. If your theme uses an 8px layout, `theme.spacingPx = 8`.
* Added new helper functions:
  * [`cssRadius`](https://github.com/act-org/dls/blob/main/src/helpers/cssRadius.ts)
  * [`makeShadow`](https://github.com/act-org/dls/blob/main/src/helpers/makeShadow.ts)
  * [`px`](https://github.com/act-org/dls/blob/main/src/helpers/px.ts)
  * [`pxToNumber`](https://github.com/act-org/dls/blob/main/src/helpers/pxToNumber.ts)
  * [`styled`](https://github.com/act-org/dls/blob/main/src/helpers/styled.ts)
  * [`types`](https://github.com/act-org/dls/blob/main/src/helpers/types.ts)
* Added utilities to make it easier to customize your theme beyond the default
MUI key/value pairs (check the `README` for more details)

## Refactoring

* Bumped every NPM dependency to its latest release
* Partial re-write of storybook stories to the simpler
[Component Story Format 3](https://storybook.js.org/blog/storybook-csf3-is-here/)
* The DLS release process is now automated via
[Github Actions](https://github.com/act-org/dls/actions).
* Slightly stricter ESLint rules when contributing to the DLS.

## Performance

One of the major benefits you will receive by upgrading your app from DLS6
to DLS7 is faster load times due to a significantly reduced (~65%) bundle size.

### Bundle Size Reduction

Version <= 6 of the DLS were built and exported as
[CommonJS modules](https://nodejs.org/api/modules.html#modules-commonjs-modules).
While this allowed the simplest integration of the DLS into any
project, it also resulted in project bundles being
[larger than desired](https://web.dev/commonjs-larger-bundles/) due to
the inability of bundlers to
[tree-shake](https://www.smashingmagazine.com/2021/05/tree-shaking-reference-guide/)
the DLS.

Here's what a Next.js application bundle looks like on DLS6:

![DLS6 Bundle Size](https://user-images.githubusercontent.com/4974609/225627645-5ae03d9e-2901-4521-bb80-11b452505341.png)

![DLS6 Bundle Analyzer](https://user-images.githubusercontent.com/4974609/225627688-08fbd0e4-7ff5-4e51-bb16-a77a726828e9.png)

Notice how all DLS icons are being brought into the bundle, even though
this application is only using a handful of them.

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

Here's what the same Next.js application bundle looks like on DLS7:

![DLS7 Bundle Size](https://user-images.githubusercontent.com/4974609/225627726-148969c3-abc4-4a17-a5b1-9a697e8feb36.png)

![DLS7 Bundle Analyzer](https://user-images.githubusercontent.com/4974609/225627746-8692ca34-3413-42cd-aec9-7ca688cfcbee.png)

Icons begone!

## SyntaxError: Unexpected token 'export'

One downside of exporting DLS7 as ECMAScript modules is that the `import` and
`export` keywords are preserved, which may cause your packager/runner to throw:

```sh
SyntaxError: Unexpected token 'export'
```

If you see this error, you'll need to instruct your packager/runner to transpile
the DLS on-the-fly.

You can do this in a [Next.js](https://nextjs.org/) app by adding the DLS to the
[`transpilePackages`](https://beta.nextjs.org/docs/api-reference/next.config.js#transpilepackages)
option in your `next.config.js` file.

```js
transpilePackages: ['@actinc/dls'],
```

You can also do this in the [Jest](https://jestjs.io/) test runner by omitting
the DLS from the
[`transformIgnorePatterns`](https://jestjs.io/docs/tutorial-react-native#transformignorepatterns-customization)
option in your `jest.config.js` file.

```js
transformIgnorePatterns: ['/node_modules/(?!(@actinc/dls)/)'],
```
