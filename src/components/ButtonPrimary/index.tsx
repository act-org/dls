/**
 * @prettier
 */

import * as React from 'react';

import ButtonBase, { Props as ButtonBaseProps } from '~/components/ButtonBase';

import useStyles from './styles';

export type Props = ButtonBaseProps;

const ButtonPrimary: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => {
  const classes = useStyles();

  return <ButtonBase classes={classes} variant="outlined" {...props} />;
};

export default ButtonPrimary;
