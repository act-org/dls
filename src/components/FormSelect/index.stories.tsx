/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SelectChangeEvent } from '@mui/material';
import { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';

import { Playground } from '~/helpers/playground';

import { FormSelect, FormSelectProps } from '.';

const Template: StoryFn<FormSelectProps> = args => {
  const { value } = args;
  const [state, setState] = useState<string>((value as string) || '');
  const onChange = (e: SelectChangeEvent<unknown>): void => {
    setState(e.target.value as string);
  };

  return <FormSelect {...args} onChange={onChange} value={state} />;
};

export default {
  args: {
    label: 'Select Label',
    options: [
      {
        label: 'One',
        value: 'ONE',
      },
      {
        label: 'Two',
        value: 'TWO',
      },
      {
        label: 'Three',
        value: 'THREE',
      },
    ],
    placeholder: 'Placeholder',
  },
  argTypes: Playground(
    {
      disabled: {},
      error: {},
      errorMessage: {},
      helpText: {},
      id: {},
      options: {},
      placeholder: {},
      placeholderIsDisabled: {},
      required: {},
    },
    FormSelect,
  ),
  component: Template,
  tags: ['autodocs'],
  title: 'Forms (WIP) / FormSelect',
} as Meta<FormSelectProps>;

export const Preview: StoryObj<FormSelectProps> = {
  args: {},
};
