/**
 * @prettier
 */

import * as React from 'react';
import { Button, ButtonProps } from '@material-ui/core';

import mergeClasses from '~/helpers/mergeClasses';

import useStyles from './styles';

export type Props = ButtonProps;

const ButtonPrimary: React.FC<Props> = ({
  classes: classesProp,
  ...otherProps
}: Props): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <Button
      classes={mergeClasses(classes, classesProp)}
      variant="outlined"
      {...otherProps}
    />
  );
};

export default ButtonPrimary;
