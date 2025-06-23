/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { MenuItem, SelectProps } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import range from 'lodash/range';
import { useState } from 'react';

import { Select } from './internal';

/**
 * You probably would just want to use a &lt;TextField select /&gt; element, however there may be specific use
 * cases for an isolated Select control
 */
export default {
  args: {
    children: range(10).map((i): any => (
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
  title: 'MUI Core / Select',
} as Meta<Select>;

export const Primary: StoryObj<SelectProps> = {};

export const Secondary: StoryObj<SelectProps> = {
  args: { color: 'secondary' },
};

export const Disabled: StoryObj<SelectProps> = { args: { disabled: true } };

export const Multiple: StoryObj<SelectProps> = {
  render: (args: Partial<SelectProps>) => {
    const { children } = args;
    const [value, setValue] = useState<string[]>([]);
    return (
      <Select
        {...args}
        multiple
        onChange={(event): void => setValue(event.target.value as string[])}
        value={value}
      >
        {children}
      </Select>
    );
  },
};
