/**
 * @prettier
 */
import * as React from 'react';
import {
  Input as MuiInput,
  InputProps as MuiInputProps,
} from '@material-ui/core';
import mergeClasses from '~/helpers/mergeClasses';
import { primary, secondary } from './styles';
import clsx from 'clsx';

/**
 * Input Props
 */
export interface InputProps extends MuiInputProps {
  variant: 'round' | 'box';
}

/**
 * # Input Component
 *
 *
 * @param inputProps
 */
export function Input({
  variant,
  type,
  classes: classesProp,
  ...props
}: InputProps): React.ReactElement<InputProps> {
  const classes = variant == 'round' ? secondary() : primary();

  return (
    <MuiInput
      classes={mergeClasses(
        {
          input: clsx(
            classes.inputInput,
            type === 'password' && classes.inputInputPassword,
          ),
          root: classes.inputRoot,
        },
        classesProp,
      )}
      {...props}
    />
  );
}
Input.defaultProps = {
  color: 'primary',
  variant: 'box',
  type: 'text',
  disableUnderline: true,
} as InputProps;
