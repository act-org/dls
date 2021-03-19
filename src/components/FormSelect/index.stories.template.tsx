/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { FormSelect, FormSelectProps } from '.';
import { PlayGround } from '~/helpers/argBlocks';

export const Template: Story<FormSelectProps> = args => {
  const { value } = args;
  const [state, setState] = useState<string>((value as string) || '');
  const onChange = (e): void => {
    setState(e.target.value);
  };
  return <FormSelect {...args} onChange={onChange} value={state} />;
};
export const argTypes = PlayGround(
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
