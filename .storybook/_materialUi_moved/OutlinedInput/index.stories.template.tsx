/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import {
  OutlinedInput as MuiOutlinedInput,
  OutlinedInputProps as MuiOutlinedInputProps,
} from '@mui/material';
import { Story } from '@storybook/react/types-6-0';
import { useState } from 'react';

export const OutlinedInput = MuiOutlinedInput;
export type OutlinedInputProps = MuiOutlinedInputProps;

export const Template: Story<OutlinedInputProps> = ({
  value,
  ...args
}: OutlinedInputProps) => {
  const [v, setV] = useState<string>(String(value || ''));

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
