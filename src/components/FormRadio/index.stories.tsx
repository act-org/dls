/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react';

import { Playground } from '~/helpers/playground';

import { FormRadio, FormRadioProps } from '.';

/**
 * This molecule takes the basic switch and adds a label and various label capabilities
 */
export default {
  args: {
    id: 'primaryswitch',
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
    FormRadio,
  ),
  component: FormRadio,
  tags: ['autodocs'],
  title: 'Forms (WIP) / FormRadio',
} as Meta<FormRadioProps>;

export const Preview: StoryObj<FormRadioProps> = {
  args: {},
};
