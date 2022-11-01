# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [6.2.0](https://github.com/act-org/dls/compare/v6.1.2...v6.2.0) (2022-11-01)


### Features

* Upgrade NPM deps to their latest compatible releases ([00e7861](https://github.com/act-org/dls/commit/00e7861ac503cfea486e9d05830a273ede802e12))

### [6.1.2](https://github.com/act-org/dls/compare/v6.1.1...v6.1.2) (2022-08-31)


### Bug Fixes

* Fix 'Select' component playground not interacting well with 'multiple' control ([9f0e9ae](https://github.com/act-org/dls/commit/9f0e9aef74d576dd0931203d0ba47f7528aa47ea))

### [6.1.1](https://github.com/act-org/dls/compare/v6.1.0...v6.1.1) (2022-07-14)


### Bug Fixes

* React runtime build ([4a9fa81](https://github.com/act-org/dls/commit/4a9fa8149708377c9e09ee28a1b73fc26d17eb44))
* Update Confirm Story imports and storybook warnings ([08e9859](https://github.com/act-org/dls/commit/08e98593c6dd7bb2849fc61c96acbe442dad504c))

### [6.0.5](https://github.com/act-org/dls/compare/v6.0.4...v6.0.5) (2022-07-14)

## [6.1.0](https://github.com/act-org/dls/compare/v6.0.4...v6.1.0) (2022-07-14)


### Features

* Add Confirmation Dialog component ([7c43699](https://github.com/act-org/dls/commit/7c436991432637a9218e15d39e84fccc9e856da1))


### Bug Fixes

* Confirmation hook multiple fires and API organization ([9531207](https://github.com/act-org/dls/commit/953120790e00561f914625d0ad544c9fa86f1aa1))
* Remove story types from build ([3d1b80b](https://github.com/act-org/dls/commit/3d1b80bf0c0601ebd50527747202593f4dc458f4))

### [6.0.4](https://github.com/act-org/dls/compare/v6.0.3...v6.0.4) (2022-07-05)

### [6.0.3](https://github.com/act-org/dls/compare/v6.0.2...v6.0.3) (2022-06-29)

### [6.0.2](https://github.com/act-org/dls/compare/v6.0.1...v6.0.2) (2022-06-29)

## 6.0.1 (2022-05-31)


### ⚠ BREAKING CHANGES

* mui 5 and mui 4 are incompatible
* mui 5 no longer uses JSS but emotion

* chore(release): 6.0.0-alpha.0

* chore: Add release scripts

* chore: Fix labs peer dep

* chore(release): 6.0.0-alpha.1

* chore: Cleanup typography settings after migration

* chore(release): 6.0.0-alpha.2

* chore: Clean up babel build overrides

* chore(release): 6.0.0-alpha.3

* chore: Clean up act theme fix babel remaps and config inheritance

* chore(release): 6.0.0-alpha.4

* chore: Refactor styled engine provider location

* chore: Fix styled-engine peerDep

* chore(release): 6.0.0-alpha.5

* chore: Use rem for typography spacing

* chore(release): 6.0.0-alpha.6

* chore: Update snap

* chore: Clean ui mui stories and update tests

* chore(release): 6.0.0-alpha.7

* chore: Update lock file

* chore(release): 6.0.0-alpha.8

* chore: NPM package upgrades

* test: Update tests

* test: Fix all tests

* fix: Rename story names

* feat: Remove deprecated components

* refactor: Rename FormInputGroups to GridGenerator

* feat: Added status badges, documentation cleanup

* chore: Documentation cleanup

* refactor: Migrate styling from JSS to emotion

* fix: Remove @mui/styles dep

* chore: Updated packages

* test: Fix tests

* fix: Fix issues with React 18 upgrade

* docs: Remove versions from install command since we are compatible with latest

* docs: Fix versions

* docs: Fix dev guide for mui5

* chore(release): 6.0.0-alpha.9

* fix: Import classes directly to fix downstream module issues

* chore(release): 6.0.0-alpha.10

* fix: Import StyledEngineProvider from main package

* chore(release): 6.0.0-alpha.11

* fix: Fix import of StyledEngineProvider

* chore(release): 6.0.0-alpha.12

* docs: Minor doc improvements

* chore: Fix storybook publish command

* fix: Do not import colors on private path

* chore(release): 6.0.0-alpha.13

* build: Prep for release

* chore(release): 6.0.0

* build: Prep for release

* chore(release): 6.0.0

* build: Prep for release

* chore(release): 6.0.0

Co-authored-by: Justin Watkins <justin.watkins@act.org>

### Features

* Replace ACT logo with ACT|Encoura lockup logo ([#40](https://github.com/act-org/dls/issues/40)) ([4e18c14](https://github.com/act-org/dls/commit/4e18c1418606cc6a56740256e9bc4596cba63d1f))


* Migrate to MUI5, Add Support for React 18 (#75) ([13528a5](https://github.com/act-org/dls/commit/13528a523e3003e37e4c04290cd7389c05ed3114)), closes [#75](https://github.com/act-org/dls/issues/75)

## [6.0.0-alpha.13](https://github.com/act-org/dls/compare/v6.0.0-alpha.12...v6.0.0-alpha.13) (2022-05-31)


### Bug Fixes

* Do not import colors on private path ([d21b426](https://github.com/act-org/dls/commit/d21b4263ee43f4734ffdd45000cd0401e09dde51))

## [6.0.0-alpha.12](https://github.com/act-org/dls/compare/v6.0.0-alpha.11...v6.0.0-alpha.12) (2022-05-26)


### Bug Fixes

* Fix import of StyledEngineProvider ([77cd478](https://github.com/act-org/dls/commit/77cd478d6d20e37d0b700620595e60f2726f2432))

## [6.0.0-alpha.11](https://github.com/act-org/dls/compare/v6.0.0-alpha.10...v6.0.0-alpha.11) (2022-05-26)


### Bug Fixes

* Import StyledEngineProvider from main package ([a2e489f](https://github.com/act-org/dls/commit/a2e489f5d7bfa65ecb88590c12416b4612cb1f29))

## [6.0.0-alpha.9](https://github.com/act-org/dls/compare/v6.0.0-alpha.8...v6.0.0-alpha.9) (2022-05-24)


### Features

* Added status badges, documentation cleanup ([19a6207](https://github.com/act-org/dls/commit/19a6207714c4b7ff408b07e19433226db1db26ff))
* Remove deprecated components ([232d221](https://github.com/act-org/dls/commit/232d2215815d79433df51c6a2cfe9f27446e655a))


### Bug Fixes

* Fix issues with React 18 upgrade ([795c361](https://github.com/act-org/dls/commit/795c361829269158b168660fed43c6252a605ade))
* Remove @mui/styles dep ([eab73de](https://github.com/act-org/dls/commit/eab73de5b8a9ff3bf582581e85a18a7150f345d2))
* Rename story names ([913d10c](https://github.com/act-org/dls/commit/913d10c4dd9c7f17561a420e93190fc0f980a83f))

## [6.0.0-alpha.8](https://github.com/act-org/dls/compare/v6.0.0-alpha.7...v6.0.0-alpha.8) (2022-05-20)


### Features

* Replace ACT logo with ACT|Encoura lockup logo ([#40](https://github.com/act-org/dls/issues/40)) ([4e18c14](https://github.com/act-org/dls/commit/4e18c1418606cc6a56740256e9bc4596cba63d1f))

## [6.0.0-alpha.7](https://github.com/act-org/dls/compare/v6.0.0-alpha.6...v6.0.0-alpha.7) (2022-04-05)

## [6.0.0-alpha.6](https://github.com/act-org/dls/compare/v6.0.0-alpha.5...v6.0.0-alpha.6) (2022-04-04)

## [6.0.0-alpha.5](https://github.com/act-org/dls/compare/v6.0.0-alpha.4...v6.0.0-alpha.5) (2022-04-01)

## [6.0.0-alpha.4](https://github.com/act-org/dls/compare/v6.0.0-alpha.3...v6.0.0-alpha.4) (2022-04-01)

## [6.0.0-alpha.3](https://github.com/act-org/dls/compare/v6.0.0-alpha.2...v6.0.0-alpha.3) (2022-03-31)

## [6.0.0-alpha.2](https://github.com/act-org/dls/compare/v6.0.0-alpha.1...v6.0.0-alpha.2) (2022-03-09)

## [6.0.0-alpha.1](https://github.com/act-org/dls/compare/v6.0.0-alpha.0...v6.0.0-alpha.1) (2022-03-04)

## [6.0.0-alpha.0](https://github.com/act-org/dls/compare/v5.11.1...v6.0.0-alpha.0) (2022-03-02)


### ⚠ BREAKING CHANGES

* mui 5 and mui 4 are incompatible
* mui 5 no longer uses JSS but emotion

### Features

* Documentation and Working build for mui-5 upgrade ([be6662e](https://github.com/act-org/dls/commit/be6662eb006e35c526d6752d8f7af4dd022edf3b))
* Material UI 5 support ([36c942e](https://github.com/act-org/dls/commit/36c942e828ba558e13a20624a9aa18e0396ff009))
* Mui 5 functional themes, cleaned up Mui storybook examples ([2ae784b](https://github.com/act-org/dls/commit/2ae784bddd0ca32af48bc8b545df60a1a2115acb))

## [v5.12.3] - May 19, 2022

* Moved `@material-ui/core`, `@material-ui/data-grid`, and `@material-ui/lab`
to the `devDependencies` section of `package.json`, since they are peer
dependencies. This allows the downstream project to choose the exact versions
of these packages that they would like to use. Any `4.x` version should suffice!

## [v5.12.3] - May 19, 2022

* Moved `@material-ui/core`, `@material-ui/data-grid`, and `@material-ui/lab`\
to the `devDependencies` section of `package.json`, since they are peer
dependencies. This allows the downstream project to choose the exact versions of
these packages that they would like to use. Any `4.x` version should suffice!

## [v5.12.1] - Mar 09, 2022

* Improved the TypeScript definition of the `titleTypographyProps` prop on
the `<EmptyState />` component.

## [v5.12.0] - Mar 09, 2022

* Added new optional props to the `EmptyState` component
  * `descriptionTypographyProps`
  * `iconProps`
  * `titleTypographyProps`
* Improved the styling of the `EmptyState` title so that this component
looks good across all themes.

## [v5.11.1] - Feb 28, 2022

* Upgraded most of the NPM dependencies and dev-dependencies to their latest
compatible releases.

## [v5.11.0] - Jan 20, 2022

* Added a new color option, `customColors.tertiary.main`, to all themes.
  * Material UI v4 does not support the "tertiary" keyword on the `palette`, so
  this was implemented through `customColors` instead.
* Updated the `palette.secondary.dark` color on the `ENCOURA_DATALAB` theme to
`#003359`.

## [v5.10.1] - Jan 20, 2022

* Enable more flexibility on the react version used by downstream projects by
moving `react` and `react-dom` to dev dependencies.

## [v5.10.0] - Jan 13, 2022

* Added a new theme, `ENCOURA_DATALAB`, to the DLS. This theme is representative
of one of [Encoura](https://encoura.org/)'s product lines.
* Minor improvements and bug fixes for the `ACT_ET` theme.
* Added more stories to the Storybook.

## [v5.9.0] - Dec 06, 2021

* New component: `<TablePaginationActions />`
  * Useful for paginating large lists and tables
* Enhanced `<DataTable />` component with `<TablePaginationActions />` and
optional props to support server-side pagination:

    ```ts
    limit?: number;
    offset?: number;
    onChangeLimit?: (limit: number) => void;
    onChangeOffset?: (offset: number) => void;
    rowsPerPageOptions?: number[];
    totalCount?: number;
    ```

## [v5.8.1] - Nov 03, 2021

* Bind `this` to `addError` in `AlertContext`.

## [v5.8.0] - Nov 03, 2021

* Added a new helper: `getErrorMessage`
* Added new action for `AlertContext`: `addError`.

## [v5.7.0] - Nov 01, 2021

* Updated the `ACT_ET` theme to produce cleaner text inputs and dropdowns
when using Material UI's
[`<TextField />`](https://v4.mui.com/api/text-field/#textfield-api) component.
* Updated the documentation for `<FormInputGroups />` to use `<TextField />`
under the hood, since this is now the preferred way to add inputs to your app.

## [v5.6.0] - Nov 01, 2021

* Added a new helper: `oxfordCommaJoin`

## [v5.5.2] - Aug 06, 2021

* Added `useLocalStorage` hook, which replaces the NPM package
`react-use-localstorage`.

## [v5.5.1] - July 29, 2021

* Fixes the `ReferenceError: regeneratorRuntime is not defined` exception in
`AlertContext`.

## [v5.5.0] - July 28, 2021

* Added `<SnackbarAlert />` component, which is an enhanced `<Alert />`
component that can transition on and off of the screen.
* Added `AlertContext` (React Context) to queue and manage the display of
multiple `SnackbarAlert`s at the same time. Downstream apps should use the
provided `AlertContext` to programmatically trigger alerts, rather than
using `SnackbarAlert` directly. Example below!
  * Powered by [notistack](https://github.com/iamhosseindhv/notistack).

```jsx
// APP SETUP:
import AlertContextProvider from '@actinc/dls/context/AlertContext/provider';

const Root: React.FC = (): React.ReactElement<any> => (
  <AlertContextProvider
    anchorOriginHorizontal="right" // optional
    anchorOriginVertical="bottom" // optional
    maxSnack={5} // optional
  >
    <MyApp />
  </AlertContextProvider>
);
```

```jsx
// COMPONENT USAGE:
import { AlertContext } from '@actinc/dls/context';

const MyComponent: React.FC = (): React.ReactElement<any> => {
  const { actions } = React.useContext(AlertContext);

  return (
    <span
      onClick={async (): Promise<void> => {
        await actions.addAlert({
          message: 'Some error message',
          options: {
            variant: 'error',
          },
        });
      }}
    >
      Click Me
    </span>
  );
};
```

## [v5.4.0] - July 27, 2021

* Lots of CSS improvements for the `<DataGrid />` component on the `ACT_ET`
theme
* Revamped the `<DataTable />` component as a simpler alternative to
`<DataGrid />`
  * All styles are now pulled from the Material UI theme
  * Introduced a new `color: 'default' | 'primary' | 'secondary'` prop
    * BREAKING STYLE CHANGE: Previously, the default color treatment was
    `primary` (blue header row). The new default color treatment is `default`
    (grey header row).
* Fixed some style issues with the `<Switch />` and `<Badge />` components in
the `ACT_ET` theme
* Fixed some minor style issues with the `<AppBarNavigation />` component
* We are no longer exporting the some components that were previously marked
as V3 / Deprecated:
  * `<TableCellHead />`
  * `<TableCellBody />`
  * `<TableContainer />`

## [v5.3.0] - July 23, 2021

* Added `<IdleTimer />` utility
  * Monitors keyboard and mouse activity to determine when the user
  has gone idle.
* Added `<DialogContinueSession />` molecule
  * Used to prompt the user to continue their current session. If the user does
  not choose to continue their session by the provided date, the user's
  session will expire.
* Added `<SessionTimer />` organism
  * Combines two `IdleTimer`s with the `DialogContinueSession` component
  in order to fully and effectively manage the user's session.

## [v5.2.0] - July 22, 2021

* NPM package updates (`@material-ui/core` -> `^4.12.1`)
* Added `<SessionStorageKeySharer />` utility component which allows a
newly-opened tab to obtain a key:value pair from the Session Storage of another
tab.
  * This is useful if you are storing your application's auth token in Session
  Storage and want to allow your users to open your app in another tab without
  having to re-authenticate.
  * The implementation was inspired by
  [this blog post](https://medium.com/@marciomariani/sharing-sessionstorage-between-tabs-5b6f42c6348c).
  * Note: Since this component makes use of Session Storage and Local Storage,
  this component is only meant to be rendered in the browser context. SSR apps
  should not use Session Storage for key/value pairs that are critical to the
  render (such as the user's auth token).

## [v5.1.0] - June 15, 2021

* Updated `<FormSelect />` component to allow options to be disabled.
([Pull Request](https://github.com/act-org/dls/pull/9))

## [v5.0.0] - June 07, 2021

* With this release, the DLS will no longer export components that you can
import directly from Material UI, such as `<Button />` and `<Link />`.
* In almost all cases, there is no functional/stylistic difference between
importing a MUI component from the DLS vs. MUI. The only exception is with the
`<Link />` component, as the MUI `Link` component does not accept a `to` prop.
* Removed `COLORS` and `DIMS` constants. All DLS components are now powered
by the theme engine.
* Renamed the following components:
  * Renamed `<DataTablePrimary />` to `<DataTable />`
  * Renamed `<LoadingPrimary />` to `<Loading />`
  * Renamed `<TableContainerPrimary />` to `<TableContainer />`
* Re-instated, and marked as deprecated, the following v3 components to help
with reverse compatibility / application migration. These components should
be removed when they have suitable alternatives that are powered by the MUI
themeing engine:
  * `<FormInputPrimary />`
  * `<FormSelectPrimary />`
  * `<InputLabelPrimary />`
  * `<InputPrimary />`
  * `<SelectPrimary />`
  * `<SelectSecondary />`

## [v4.1.0] - May 25, 2021

* This release includes a new
[`<AppBarNavigation />`](https://act-org.github.io/dls/?path=/docs/organisms-appbarnavigation--default-navigation)
component, courtesy of @stefansolyom.

## [v4.0.0] - April 01, 2021

* The DLS has been completely rebuilt on top of the Material UI
[theme engine](https://material-ui.com/customization/theming/).
  * There are two UI themes that are provided out of the box:
  `ACT` and `ACT_ET`.
  * Refer to the README for usage instructions and more details.

## [v3.1.0] - March 05, 2021

* This package is now open source! Available on NPM at `@actinc/dls`
* Check the `README.md` file for slightly modified installation and usage
instructions

## [v3.0.0] - January 06, 2021

This release improves the ability for developers to extend / override DLS
components within their downstream applications.

Previously, the DLS styles were defined in a rigid manner, such that when you
would send in a custom `classes` prop with some custom styles, these styles
would _replace_ the default styling of the component, rather than
_extend / compliment_ it.

To that end, v3 components will now _extend_ their default styling when a
custom `classes` prop is supplied.

Furthermore, we have introduced a new `mergeClasses` helper function -- the
brains behind the new style merging behavior -- since this is a useful utility
for downstream apps as well.

Here's an example of how you can use `mergeClasses` to help create your own
component variants that are based on Material UI:

```tsx
/**
 * @prettier
 */

import * as React from 'react';
import { Button, ButtonProps } from '@material-ui/core';
import { mergeClasses } from 'act-dls/lib/helpers';

import useStyles from './styles';

type Props = ButtonProps & {
  subject: Subject;
};

const CustomButtonForTestPrep: React.FC<Props> = ({
  classes: classesProp, // allow custom classes/styling to be supplied
  subject,
  ...otherButtonProps
}: Props): React.ReactElement<any> => {
  const classes = useStyles({ subject });

  return (
    <Button
      classes={mergeClasses( // merge the default and custom styles together
        {
          outlined: classes.buttonOutlined,
          root: classes.buttonRoot,
        },
        classesProp, // the custom styles take preference
      )}
      {...otherButtonProps}
    />
  );
};

export default CustomButtonForTestPrep;
```
<!-- markdownlint-disable-file MD001 MD012 MD013 MD024 -->