/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { MenuItem, SelectProps } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Select } from './internal';

/**
 * You probably would just want to use a &lt;TextField select /&gt; element, however there may be specific use
 * cases for an isolated Select control
 */
export default {
  args: {
    children: Array(...Array(10)).map((_, i): any => (
      <MenuItem key={i} value={i}>
        {i + 1}
      </MenuItem>
    )),
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
  component: Select,
  parameters: {},
  tags: ['autodocs'],
  title: 'Material UI / Select',
} as Meta<Select>;

export const Primary: StoryObj<SelectProps> = {};
export const Secondary: StoryObj<SelectProps> = {
  args: { color: 'secondary' },
};
export const Disabled: StoryObj<SelectProps> = { args: { disabled: true } };
export const Multiple: StoryObj<SelectProps> = {
  render: args => {
    const { children } = args;
    const [value, setValue] = useState<string[]>([]);
    return (
      <Select
        {...args}
        multiple
        onChange={event => setValue(event.target.value as unknown as string[])}
        value={value}
      >
        {children}
      </Select>
    );
  },
};