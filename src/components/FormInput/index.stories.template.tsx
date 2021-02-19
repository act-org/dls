/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable sort-keys */
/* eslint-disable immutable/no-mutation */

import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { FormInput, FormInputProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';

export const Template: Story<FormInputProps> = args => <FormInput {...args} />;
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
