/**
 * @prettier
 */

import * as React from 'react';
import { Button as MuiButton, ButtonProps } from '@material-ui/core';

import useStyles from './styles';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  startIcon,
  style,
  ...props
}: ButtonProps): React.ReactElement<ButtonProps> => {
  const classes = useStyles();

  return (
    <MuiButton
      classes={{
        label: classes.buttonLabel,
        outlined: classes.buttonOutlined,
        text: classes.buttonText,
      }}
      onClick={onClick}
      startIcon={startIcon}
      style={style}
      variant="outlined"
      {...props}
    >
      {children || null}
    </MuiButton>
  );
};

export default Button;
