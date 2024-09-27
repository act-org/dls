/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

import { Playground } from '~/helpers/playground';

import { FormInput, FormInputProps } from '.';

const Template: StoryFn<FormInputProps> = args => {
  const { value } = args;
  const [state, setState] = useState<string>((value as string) || '');
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setState(e.target.value);
  };
  return <FormInput onChange={onChange} value={state} {...args} />;
};

/**
 * This molecule wraps a standard label and text input to make for a quick form field setup
 * This component also has a mechanism for setting help and error messages when the field is not valid
 */
export default {
  args: {
    label: 'Form Label',
    placeholder: 'Placeholder',
  },
  argTypes: Playground(
    {
      autoFocus: {},
      disabled: {},
      error: {},
      errorMessage: {},
      fullWidth: {},
      helpText: { type: 'string' },
      id: {},
      inputMode: {},
      label: { type: 'string' },
      margin: {},
      multiline: {},
      onChange: { action: 'change' },
      placeholder: {},
      required: {},
      type: {},
      value: { type: 'string' },
    },
    FormInput,
  ),
  component: Template,
  tags: ['autodocs'],
  title: 'Forms (WIP) / FormInput',
} as Meta<FormInputProps>;

export const Preview: StoryObj<FormInputProps> = {
  args: {},
};

export const HelpText: StoryObj<FormInputProps> = {
  args: {
    helpText: 'Some Help Text',
  },
};
