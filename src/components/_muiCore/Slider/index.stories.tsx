/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Meta, StoryObj } from '@storybook/react';

import { Slider } from './internal';

export default {
  args: {
    defaultValue: 0,
    max: 100,
    min: 0,
  },
  argTypes: {},
  component: Slider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / Slider',
} as Meta<Slider>;
export const Primary: StoryObj<Slider> = { args: { color: 'primary' } };
