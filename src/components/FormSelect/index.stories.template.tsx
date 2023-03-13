/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { SelectChangeEvent } from '@mui/material';
import { Story } from '@storybook/react/types-6-0';
import { useState } from 'react';

import { Playground } from '@actinc/dls/helpers/playground';

import { FormSelect, FormSelectProps } from '.';

export const Template: Story<FormSelectProps> = args => {
  const { value } = args;
  const [state, setState] = useState<string>((value as string) || '');
  const onChange = (e: SelectChangeEvent<unknown>): void => {
    setState(e.target.value as string);
  };
  return <FormSelect {...args} onChange={onChange} value={state} />;
};
export const argTypes = Playground(
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
);
