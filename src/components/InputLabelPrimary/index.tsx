/**
 * @prettier
 */

import * as React from 'react';
import { InputLabel, InputLabelProps } from '@material-ui/core';

import mergeClasses from '~/helpers/mergeClasses';

import useStyles from './styles';

export type InputLabelPrimaryProps = InputLabelProps;

export const InputLabelPrimary: React.FC<InputLabelPrimaryProps> = ({
  classes: classesProp,
  children,
  required,
  ...otherProps
}: InputLabelPrimaryProps): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <InputLabel
      classes={mergeClasses(
        {
          root: classes.labelRoot,
        },
        classesProp,
      )}
      {...otherProps}
    >
      <div className="label-split">
        <span>{children}</span>

        {required && <span className="required">Required</span>}
      </div>
    </InputLabel>
  );
};

export default InputLabelPrimary;
