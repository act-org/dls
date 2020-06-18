/**
 * @prettier
 */

import * as React from 'react';

import ButtonBase, { Props as ButtonBaseProps } from '~/components/ButtonBase';

import useStyles from './styles';

export type Props = ButtonBaseProps;

const ButtonPrimary: React.FC<Props> = ({
  children,
  onClick,
  startIcon,
  style,
  ...props
}: Props): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <ButtonBase
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
    </ButtonBase>
  );
};

export default ButtonPrimary;
