# Changelog

Chronological history of changes to the Design Language System.

## [v5.0.0] - June 04, 2021

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

* [Git Commit](https://bitbucket.org/actet/act-dls/commits/f41917a1ca382b0378f14a862a2c876462fd047c)
* [Git Tag](https://bitbucket.org/actet/act-dls/commits/tag/v3.0.0)
