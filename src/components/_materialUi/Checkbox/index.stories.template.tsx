/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

export const Checkbox = MuiCheckbox;
export type CheckboxProps = MuiCheckboxProps;

export const Template: Story<CheckboxProps> = (props: CheckboxProps) => (
  <Checkbox {...props} />
);
