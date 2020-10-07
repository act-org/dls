/**
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';
import { get, omit } from 'lodash';
import { Input, InputProps } from '@material-ui/core';

import { Size } from '~/types';

import useStyles from './styles';

export type Props = InputProps & { size?: Size };

const InputSecondary: React.FC<Props> = ({
  classes: classesProp,
  multiline,
  size = 'default',
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
          get(classesProp, 'input'),
        ),
        root: clsx(
          classes.inputRoot,
          classes[size],
          multiline && classes.multiline,
          get(classesProp, 'root'),
        ),
        ...(omit(classesProp, ['input', 'root']) || {}),
      }}
      disableUnderline
      margin="dense"
      multiline={multiline}
      type={type}
      value={value}
      {...otherProps}
    />
  );
};

// eslint-disable-next-line immutable/no-mutation
InputSecondary.defaultProps = {
  size: 'default',
};

export default InputSecondary;
