/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import { Story } from '@storybook/react/types-6-0';

export const Button = MuiButton;
export type ButtonProps = MuiButtonProps;

export const Template: Story<ButtonProps> = (props: ButtonProps) => (
  <Button {...props} />
);