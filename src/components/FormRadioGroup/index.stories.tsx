/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';

import { Playground } from '~/helpers/playground';

import { FormRadioGroup, FormRadioGroupProps } from '.';

const Template: StoryFn<FormRadioGroupProps> = args => {
  const [state, setState] = useState<string>('one');

  return (
    <FormRadioGroup
      onChange={(_, value): void => {
        setState(value);
      }}
      value={state}
      {...args}
    />
  );
};

/**
 * This molecule wraps several controls together to bring a radio group
 * along with a label and options to display
 */
export default {
  args: {
    id: 'defaultradiogroup',
    label: 'The label',
    name: 'radiooptions',
    options: [
      { id: 'one', label: 'one', value: 'one' },
      { id: 'two', label: 'two', value: 'two' },
    ],
  },
  argTypes: Playground(
    {
      helpText: {},
      label: { type: 'string' },
      name: {},
      onChange: { action: 'onChange' },
      options: {},
      row: {},
    },
    FormRadioGroup,
  ),
  component: Template,
  tags: ['autodocs'],
  title: 'Forms (WIP) / FormRadioGroup',
} as Meta<FormRadioGroupProps>;

export const Preview: StoryObj<FormRadioGroupProps> = {
  args: {},
};

export const WithInputLabelProps: StoryObj<FormRadioGroupProps> = {
  args: {
    inputLabelProps: {
      required: true,
    },
    name: 'helpTextExample',
    options: [
      { id: 'one', label: 'Option One', value: 'one' },
      { id: 'two', label: 'Option Two', value: 'two' },
    ],
  },
};
