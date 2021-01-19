# Changelog

Chronological history of changes to the Design Language System.

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
