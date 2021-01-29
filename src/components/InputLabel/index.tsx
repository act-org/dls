/**
 * @prettier
 */

import * as React from 'react';
import {
  InputLabel as MuiInputLabel,
  InputLabelProps as MuiInputLabelProps,
} from '@material-ui/core';
import mergeClasses from '~/helpers/mergeClasses';
import useStyles from './styles';

export type InputLabelProps = MuiInputLabelProps;

/**
 * #Input Label
 *
 * This component is the primary label for various form fields.  In general, when applicable, you should use
 * a molecule or organism that already contains this component to make it easier.  This would be used in a scenario where
 * a molecule does not exist for your use case.
 * @param InputProps
 */
export function InputLabel({
  classes: classesProp,
  children,
  required,
  ...otherProps
}: InputLabelProps): React.ReactElement<InputLabelProps> {
  const classes = useStyles();

  return (
    <MuiInputLabel
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
    </MuiInputLabel>
  );
}

InputLabel.defaultProps = {
  color: 'primary',
} as InputLabelProps;
