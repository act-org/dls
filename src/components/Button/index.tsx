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
 * This is the button desciprion
 */
export const Button: React.FC<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    { classes: classesProp, size = 'default', ...otherProps }: ButtonProps,
    ref,
  ): React.ReactElement<ButtonProps> => {
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
        disableElevation
        ref={ref}
        variant="outlined"
        {...otherProps}
      />
    );
  },
);

// eslint-disable-next-line immutable/no-mutation
Button.defaultProps = {
  size: 'default',
  color: 'primary',
  variant: 'outlined',
};
