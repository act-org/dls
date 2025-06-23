/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { Radio } from './internal';

export default {
  args: {},
  argTypes: {
    onChange: { action: 'onChange' },
    onClick: { action: 'onClick' },
  },
  component: Radio,
  parameters: {},
  tags: ['autodocs'],
  title: 'MUI Core / Radio',
} as Meta<Radio>;

export const Primary: StoryObj<Radio> = { args: { color: 'primary' } };
export const Secondary: StoryObj<Radio> = { args: { color: 'secondary' } };
export const Disabled: StoryObj<Radio> = { args: { disabled: true } };
export const Small: StoryObj<Radio> = { args: { size: 'small' } };
export const Medium: StoryObj<Radio> = { args: { size: 'medium' } };
