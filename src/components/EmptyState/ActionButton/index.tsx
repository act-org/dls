/**
 * @prettier
 */

import * as React from 'react';
import { Button } from '@material-ui/core';
import { noop } from 'lodash';

export interface Props {
  disabled?: boolean;
  onClick?: () => void;
  title: string;
  variant?: 'contained' | 'outlined' | 'text';
}

const ActionButton: React.FC<Props> = ({
  disabled,
  onClick,
  title,
  variant,
}: Props): React.ReactElement<any> => (
  <Button
    color="primary"
    disabled={disabled}
    onClick={onClick || noop}
    variant={variant || 'contained'}
  >
    {title}
  </Button>
);

export default ActionButton;
