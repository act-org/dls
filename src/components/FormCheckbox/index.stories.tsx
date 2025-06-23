/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { Playground } from '~/helpers/playground';

import { FormCheckbox, FormCheckboxProps } from '.';

/**
 * This molecule takes the basic switch and adds a label and various label capabilities
 */
export default {
  args: {
    id: 'primarycheckbox',
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
    FormCheckbox,
  ),
  component: FormCheckbox,
  tags: ['autodocs'],
  title: 'Forms (WIP) / FormCheckbox',
} as Meta<FormCheckboxProps>;

export const Preview: StoryObj<FormCheckboxProps> = {
  args: {},
};
