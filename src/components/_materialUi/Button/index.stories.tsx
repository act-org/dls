/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Meta, StoryObj } from '@storybook/react';

import { Button } from './internal';

/**
 * Renders a standard Material UI Button using the
 * chosen theme parameters
 */
export default {
  args: {
    children: 'Click Me',
    variant: 'contained',
  },
  argTypes: {
    onClick: { action: 'onClick' },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Material UI / Button',
} as Meta<Button>;

/**
 * The Primary color palette
 */
export const Primary: StoryObj<Button> = { args: { color: 'primary' } };
/**
 * The Secondary color palette
 */
export const Secondary: StoryObj<Button> = { args: { color: 'secondary' } };
/**
 * The Disabled state
 */
export const Disabled: StoryObj<Button> = {
  args: { color: 'primary', disabled: true },
};
