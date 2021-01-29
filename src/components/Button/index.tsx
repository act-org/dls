/**
 * @prettier
 */
/* eslint-disable react/display-name */

import * as React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@material-ui/core';
import clsx from 'clsx';

import mergeClasses from '~/helpers/mergeClasses';

import useStyles from './styles';

export type ButtonProps = Omit<MuiButtonProps, 'size'> & {
  size?: 'default' | 'large' | 'small';
};

/**
 * # Button
 * This is the main Button component.  It has several variations and options for the display
 * @param ButtonProps
 */
export function Button({
  classes: classesProp,
  size = 'default',
  ...otherProps
}: ButtonProps): React.ReactElement<ButtonProps> {
  const classes = useStyles();

  return (
    <MuiButton
      classes={mergeClasses(
        {
          contained: clsx(classes.contained, classes[size]),
          label: classes.label,
          outlined: clsx(classes.outlined, classes[size]),
        },
        classesProp,
      )}
      {...otherProps}
    />
  );
}

// eslint-disable-next-line immutable/no-mutation
Button.defaultProps = {
  size: 'default',
  color: 'primary',
  type: 'button',
  variant: 'outlined',
  disableElevation: true,
} as ButtonProps;
