/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material';
import { Story } from '@storybook/react/types-6-0';

export const Checkbox = MuiCheckbox;
export type CheckboxProps = MuiCheckboxProps;

export const Template: Story<CheckboxProps> = (props: CheckboxProps) => (
  <Checkbox {...props} />
);
