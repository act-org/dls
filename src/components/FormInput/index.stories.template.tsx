/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { FormInput, FormInputProps } from '.';
import { Playground } from '~/helpers/playground';

export const Template: Story<FormInputProps> = args => {
  const { value } = args;
  const [state, setState] = React.useState<string>(value || '');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState(e.target.value);
  };
  return <FormInput onChange={onChange} value={state} {...args} />;
};
export const argTypes = Playground(
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
    onChange: { action: 'change' },
    margin: {},
    multiline: {},
    placeholder: {},
    required: {},
    type: {},
    value: { type: 'string' },
  },
  FormInput,
);
