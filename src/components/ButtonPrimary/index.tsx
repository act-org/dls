/**
 * @prettier
 */

import * as React from 'react';
import { Button, ButtonProps } from '@material-ui/core';

import useStyles from './styles';

export type Props = ButtonProps;

const ButtonPrimary: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => {
  const classes = useStyles();

  return <Button classes={classes} variant="outlined" {...props} />;
};

export default ButtonPrimary;
