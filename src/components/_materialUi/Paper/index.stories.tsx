/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';

import { Paper } from './internal';

export default {
  argTypes: {},
  args: {
    children: <Typography variant="h6">Paper Content</Typography>,
    sx: {
      minHeight: '100px',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  component: Paper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Material UI / Paper',
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
