/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import AddIcon from '@actinc/dls/icons/Plus';
import { Meta, StoryObj } from '@storybook/react';

import { Fab } from './internal';

/**
 * Renders a standard Material UI Button using the
 * chosen theme parameters
 */
export default {
  args: {
    'aria-label': 'Floating Icon Button',
    children: <AddIcon />,
    size: 'medium',
  },
  argTypes: {
    onClick: { action: 'onClick' },
  },
  component: Fab,
  tags: ['autodocs'],
  title: 'MUI Core / Fab',
} as Meta<Fab>;

/**
 * The Primary color palette
 */
export const Primary: StoryObj<Fab> = { args: { color: 'primary' } };
/**
 * The Secondary color palette
 */
export const Secondary: StoryObj<Fab> = { args: { color: 'secondary' } };
/**
 * The Disabled state
 */
export const Disabled: StoryObj<Fab> = {
  args: { color: 'primary', disabled: true },
};
/**
 * The Extended variant
 */
export const Extended: StoryObj<Fab> = {
  args: { color: 'primary', variant: 'extended' },
};
