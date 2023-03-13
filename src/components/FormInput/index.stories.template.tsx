/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Story } from '@storybook/react/types-6-0';
import { ChangeEvent, useState } from 'react';

import { Playground } from '@actinc/dls/helpers/playground';

import { FormInput, FormInputProps } from '.';

export const Template: Story<FormInputProps> = args => {
  const { value } = args;
  const [state, setState] = useState<string>((value as string) || '');
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
    margin: {},
    multiline: {},
    onChange: { action: 'change' },
    placeholder: {},
    required: {},
    type: {},
    value: { type: 'string' },
  },
  FormInput,
);
