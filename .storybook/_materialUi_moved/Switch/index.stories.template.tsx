/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Story } from '@storybook/react/types-6-0';
import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
} from '@mui/material';

export const Switch = MuiSwitch;
export type SwitchProps = MuiSwitchProps;

export const Template: Story<SwitchProps> = (props: SwitchProps) => (
  <Switch {...props} />
);
