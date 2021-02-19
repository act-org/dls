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

import { Input, InputProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';

export const Template: Story<InputProps> = args => {
  const [value, setValue] = React.useState<string>(args.value as string);
  return (
    <Input
      onChange={newValue => {
        setValue(newValue.target.value);
      }}
      value={value}
      {...args}
    />
  );
};

export const argTypes: Record<string, any> = PlayGround(
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
  Input,
);
