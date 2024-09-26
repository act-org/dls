/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react';

import { Switch } from './internal';

export default {
  args: {},
  argTypes: {},
  component: Switch,
  parameters: {},
  tags: ['autodocs'],
  title: 'MUI Core / Switch',
} as Meta<Switch>;
export const Primary: StoryObj<Switch> = { args: { color: 'primary' } };
export const Secondary: StoryObj<Switch> = { args: { color: 'secondary' } };
export const Disabled: StoryObj<Switch> = { args: { disabled: true } };
