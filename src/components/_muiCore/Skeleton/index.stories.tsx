/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { Skeleton } from './internal';

/**
 * Renders a standard MUI [Skeleton](https://mui.com/material-ui/react-skeleton/)
 * using the chosen theme parameters.
 */
export default {
  args: {
    height: 100,
    style: { fontSize: 20 },
    width: 300,
  },
  argTypes: {},
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Skeleton',
} as Meta<Skeleton>;

export const Default: StoryObj<Skeleton> = {
  args: {},
};

export const AnimationPulse: StoryObj<Skeleton> = {
  args: { animation: 'pulse' },
  name: 'Animation: Pulse',
};

export const AnimationWave: StoryObj<Skeleton> = {
  args: { animation: 'wave' },
  name: 'Animation: Wave',
};

export const AnimationNone: StoryObj<Skeleton> = {
  args: { animation: false },
  name: 'Animation: None',
};

export const VariantRectangular: StoryObj<Skeleton> = {
  args: { variant: 'rectangular' },
  name: 'Variant: Rectangular',
};

export const VariantCircular: StoryObj<Skeleton> = {
  args: { height: 100, variant: 'circular', width: 100 },
  name: 'Variant: Circular',
};

export const VariantRounded: StoryObj<Skeleton> = {
  args: { variant: 'rounded' },
  name: 'Variant: Rounded',
};

export const VariantText: StoryObj<Skeleton> = {
  args: { variant: 'text' },
  name: 'Variant: Text',
};

export const CustomColor: StoryObj<Skeleton> = {
  args: {
    sx: { bgcolor: 'grey.900' },
  },
};
