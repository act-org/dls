/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { FormControlLabel } from '@mui/material';
import { StoryObj } from '@storybook/react';

import { Checkbox } from './internal';

export default {
  argTypes: {
    onChange: { action: 'onChange' },
    onClick: { action: 'onClick' },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'MUI Core / Checkbox',
} as StoryObj<Checkbox>;

export const Primary: StoryObj<Checkbox> = { args: { color: 'primary' } };
export const Secondary: StoryObj<Checkbox> = { args: { color: 'secondary' } };
export const Disabled: StoryObj<Checkbox> = { args: { disabled: true } };
export const Indeterminate: StoryObj<Checkbox> = {
  args: { indeterminate: true },
};
export const WithLabel: StoryObj<Checkbox> = {
  render: args => {
    return <FormControlLabel control={<Checkbox {...args} />} label="Value" />;
  },
};
