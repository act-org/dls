/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable react/display-name */

import * as React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@material-ui/core';
// import clsx from 'clsx';

// import mergeClasses from '~/helpers/mergeClasses';

// import useStyles from './styles';

export type ButtonProps = MuiButtonProps;

/**
 * # Button
 * This is the main Button component.  It has several variations and options for the display
 * @param ButtonProps
 */
export function Button({
  ...buttonProps
}: ButtonProps): React.ReactElement<ButtonProps> {
  //const classes = useStyles();

  return (
    <MuiButton
      // classes={mergeClasses(
      //   {
      //     contained: clsx(classes.contained, classes[size]),
      //     label: classes.label,
      //     outlined: clsx(classes.outlined, classes[size]),
      //   },
      //   classesProp,
      // )}
      {...buttonProps}
    />
  );
}

// eslint-disable-next-line immutable/no-mutation
Button.defaultProps = {
  size: 'medium',
  color: 'primary',
  variant: 'outlined',
  disableElevation: true,
} as ButtonProps;
