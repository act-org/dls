/**
 * @prettier
 */

import * as React from 'react';
import { Button, ButtonProps } from '@material-ui/core';

export type Props = ButtonProps;

const ButtonBase: React.FC<Props> = ({
  children,
  ...props
}: Props): React.ReactElement<any> => (
  <Button {...props}>{children || 'Button'}</Button>
);

export default ButtonBase;
