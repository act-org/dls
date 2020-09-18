/**
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';
import { Input, InputProps } from '@material-ui/core';

import useStyles from './styles';

export type Props = InputProps;

const InputPrimary: React.FC<Props> = ({
  type,
  value,
  ...otherProps
}: Props): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <Input
      classes={{
        input: clsx(
          classes.inputInput,
          type === 'password' &&
            value &&
            String(value).length > 0 &&
            classes.inputInputPassword,
        ),
        root: classes.inputRoot,
      }}
      disableUnderline
      margin="dense"
      type={type}
      value={value}
      {...otherProps}
    />
  );
};

export default InputPrimary;
