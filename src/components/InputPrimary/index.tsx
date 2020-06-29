/**
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';

import InputBase, { Props as InputBaseProps } from '~/components/InputBase';

import useStyles from './styles';

export type Props = InputBaseProps;

const InputPrimary: React.FC<Props> = ({
  type,
  value,
  ...otherProps
}: Props): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <InputBase
      classes={{
        input: clsx(
          classes.inputBaseInput,
          type === 'password' &&
            value &&
            String(value).length > 0 &&
            classes.inputBaseInputPassword,
        ),
        root: classes.inputBaseRoot,
      }}
      disableUnderline
      type={type}
      value={value}
      {...otherProps}
    />
  );
};

export default InputPrimary;
