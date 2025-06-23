/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';

import { Paper } from './internal';

export default {
  args: {
    children: <Typography variant="h6">Paper Content</Typography>,
    sx: {
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100px',
    },
  },
  argTypes: {},
  component: Paper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Paper',
} as Meta<Paper>;

export const Primary: StoryObj<Paper> = { args: {} };
export const Outlined: StoryObj<Paper> = { args: { variant: 'outlined' } };
export const Rounded: StoryObj<Paper> = {
  args: {
    children: <Typography variant="h6">Rounded</Typography>,
    square: false,
  },
};
export const Square: StoryObj<Paper> = {
  args: {
    children: <Typography variant="h6">Square</Typography>,
    square: true,
  },
};
