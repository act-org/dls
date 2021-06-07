/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { OutlinedInput, OutlinedInputProps } from '@material-ui/core';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

export const Template: Story<OutlinedInputProps> = args => {
  const [value, setValue] = React.useState<string>(args.value as string);
  return (
    <OutlinedInput
      onChange={(newValue): void => {
        setValue(newValue.target.value);
      }}
      value={value}
      {...args}
    />
  );
};

export const argTypes: Record<string, any> = Playground(
  {
    autoFocus: {},
    color: {},
    disabled: {},
    error: {},
    onChange: { action: 'change' },
    multiline: {},
    placeholder: {},
    required: {},
    type: {},
    value: { type: 'string' },
    variant: {},
  },
  OutlinedInput,
);
