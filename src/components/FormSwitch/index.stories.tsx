/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Meta, StoryObj } from '@storybook/react';

import { Playground } from '@actinc/dls/helpers/playground';

import { FormSwitch, FormSwitchProps } from '.';

/**
 * This molecule takes the basic switch and adds a label and various label capabilities
 */
export default {
  args: {
    id: 'defaultswitch',
    label: 'The label',
  },
  argTypes: Playground(
    {
      checked: {},
      disabled: {},
      id: {},
      label: { type: 'string' },
      labelPlacement: {},
      onChange: { action: 'change' },
    },
    FormSwitch,
  ),
  component: FormSwitch,
  tags: ['autodocs'],
  title: 'Forms (WIP) / FormSwitch',
} as Meta<FormSwitchProps>;

export const Preview: StoryObj<FormSwitchProps> = {
  args: {},
};