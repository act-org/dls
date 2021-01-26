/**
 * @prettier
 */

import * as React from 'react';
import { InputLabel, InputLabelProps } from '@material-ui/core';

import mergeClasses from '~/helpers/mergeClasses';

import useStyles from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Props extends InputLabelProps {}

const InputLabelPrimary: React.FC<Props> = ({
  classes: classesProp,
  children,
  required,
  ...otherProps
}: Props): React.ReactElement<any> => {
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
