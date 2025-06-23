/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { Typography } from './internal';

export default {
  args: {
    children: 'Lorem ipsum dolor',
  },
  argTypes: {},
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Typography',
} as Meta<Typography>;

type Story = StoryObj<Typography>;

export const Heading1: Story = { args: { variant: 'h1' } };
export const Heading2: Story = { args: { variant: 'h2' } };
export const Heading3: Story = { args: { variant: 'h3' } };
export const Heading4: Story = { args: { variant: 'h4' } };
export const Heading5: Story = { args: { variant: 'h5' } };
export const Heading6: Story = { args: { variant: 'h6' } };
export const Body1: Story = {
  args: { variant: 'body1' },
};
export const Body2: Story = {
  args: { variant: 'body2' },
};
export const Subtitle1: Story = {
  args: { variant: 'subtitle1' },
};
export const Subtitle2: Story = {
  args: { variant: 'subtitle2' },
};
export const Button: Story = {
  args: { variant: 'button' },
};
export const Caption: Story = {
  args: { variant: 'caption' },
};
export const Overline: Story = {
  args: { variant: 'overline' },
};
