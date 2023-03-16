/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import HelpCircleOutline from '@actinc/dls/icons/HelpCircleOutline';
import { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './internal';

export default {
  args: {
    children: <HelpCircleOutline />,
    placement: 'right',
    title: 'Tooltip title goes here',
  },
  argTypes: {
    onClose: { action: 'onClose' },
    onOpen: { action: 'onOpen' },
  },
  component: Tooltip,
  parameters: {},
  tags: ['autodocs'],
  title: 'Material UI / Tooltip',
} as Meta<Tooltip>;

export const Primary: StoryObj<Tooltip> = { args: {} };

export const Left: StoryObj<Tooltip> = {
  args: { color: 'primary', placement: 'left' },
};

export const Top: StoryObj<Tooltip> = {
  args: { color: 'primary', placement: 'top' },
};

export const Bottom: StoryObj<Tooltip> = {
  args: { color: 'primary', placement: 'bottom' },
};

export const Open: StoryObj<Tooltip> = {
  args: { color: 'primary', open: true, placement: 'right' },
};
