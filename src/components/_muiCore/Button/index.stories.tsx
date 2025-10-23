/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';
import ChevronLeft from 'mdi-material-ui/ChevronLeft';
import ChevronRight from 'mdi-material-ui/ChevronRight';

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
    children: { control: 'text', name: 'label' },
    onClick: { action: 'onClick' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    variant: { control: 'radio', options: ['text', 'outlined', 'contained'] },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'MUI Core / Button',
} as Meta<Button>;

/**
 * The Primary color palette
 */
export const Primary: StoryObj<Button> = { args: { color: 'primary' } };
/**
 * The Secondary color palette
 */
export const Secondary: StoryObj<Button> = {
  args: { variant: 'outlined' },
  argTypes: {
    variant: { control: false },
  },
};
/**
 * The Disabled state
 */
export const Disabled: StoryObj<Button> = {
  args: { color: 'primary', disabled: true },
};

export const RightArrow: StoryObj<Button> = {
  args: { endIcon: <ChevronRight fontSize="inherit" /> },

  parameters: {
    // This is based on the name of the prop, UNLESS, it's being renamed by the argType options.
    controls: { include: ['label', 'size', 'variant'] },
  },
  render: args => {
    const iconSize = args.size === 'small' ? 'small' : 'medium';

    return <Button {...args} endIcon={<ChevronRight fontSize={iconSize} />} />;
  },
};

export const LeftArrow: StoryObj<Button> = {
  args: { startIcon: <ChevronLeft fontSize="inherit" /> },
  parameters: {
    // This is based on the name of the prop, UNLESS, it's being renamed by the argType options.
    controls: { include: ['label', 'size', 'variant'] },
  },
  render: args => {
    const iconSize = args.size === 'small' ? 'small' : 'medium';

    return <Button {...args} startIcon={<ChevronLeft fontSize={iconSize} />} />;
  },
};
