/**
 * @prettier
 */

import * as React from 'react';
import { Button, ButtonProps } from '@material-ui/core';

export type Props = ButtonProps;

const ButtonBase: React.FC<Props> = (props: Props): React.ReactElement<any> => (
  <Button {...props} />
);

export default ButtonBase;
