/**
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';
import { Input, InputProps } from '@mui/material';

import mergeClasses from '~/helpers/mergeClasses';

import useStyles from './styles';

export type InputPrimaryProps = InputProps;

const InputPrimary: React.FC<InputPrimaryProps> = ({
  classes: classesProp,
  type,
  value,
  ...otherProps
}: InputPrimaryProps): React.ReactElement<unknown> => {
  const classes = useStyles();

  return (
    <Input
      classes={mergeClasses(
        {
          input: clsx(
            classes.inputInput,
            type === 'password' &&
              !!value &&
              String(value).length > 0 &&
              classes.inputInputPassword,
          ),
          root: classes.inputRoot,
        },
        classesProp,
      )}
      disableUnderline
      margin="dense"
      type={type}
      value={value}
      {...otherProps}
    />
  );
};

export default InputPrimary;
