/**
 * /* eslint-disable sort-keys
 *
 * @format
 */

/* eslint-disable immutable/no-mutation */
/**
 * @prettier
 */

import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { FormInput, FormInputProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';

export const Template: Story<FormInputProps> = args => {
  const { value } = args;
  const [state, setState] = useState<string>(value || '');
  const onChange = e => {
    console.log(e);
    setState(e.target.value);
  };
  return <FormInput value={state} onChange={onChange} {...args} />;
};
export const argTypes = PlayGround(
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
