/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Meta, StoryObj } from '@storybook/react';
import { Rating } from './internal';

/**
 * Renders a standard Material UI Button using the
 * chosen theme parameters
 */
export default {
  component: Rating,
  title: 'Material UI / Rating',
  args: {},
  argTypes: {
    onClick: { action: 'onClick' },
    onChange: { action: 'onChange' },
  },
  tags: ['autodocs'],
} as Meta<Rating>;

export const Primary: StoryObj<Rating> = { args: {} };