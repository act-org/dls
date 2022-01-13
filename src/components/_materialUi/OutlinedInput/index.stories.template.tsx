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

export const Template: Story<OutlinedInputProps> = ({
  value,
  ...args
}: OutlinedInputProps) => {
  const [v, setV] = React.useState<string>(String(value || ''));

  return (
    <OutlinedInput
      {...args}
      onChange={(e): void => {
        setV(e.target.value);
      }}
      placeholder="Placeholder"
      value={v}
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
