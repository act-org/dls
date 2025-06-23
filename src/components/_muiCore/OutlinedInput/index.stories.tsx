/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { OutlinedInput, OutlinedInputProps } from './internal';

export default {
  args: {
    color: 'primary',
    placeholder: 'Placeholder',
  },
  argTypes: {
    onBlur: { action: 'onBlur' },
    onChange: { action: 'onChange' },
    onFocus: { action: 'onFocus' },
  },
  component: OutlinedInput,
  tags: ['autodocs'],
  title: 'MUI Core / OutlinedInput',
} as Meta<OutlinedInput>;

type Story = StoryObj<OutlinedInputProps>;

export const Primary: Story = {};
export const Secondary: Story = {
  args: { color: 'secondary' },
};
export const Disabled: Story = {
  args: { disabled: true },
};
/**
 * Note: The text will not update here on the render because
 * the onChange event is wired to the Actions display control
 */
export const WithValue: Story = {
  args: { value: 'Some Value' },
};
