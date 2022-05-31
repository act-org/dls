/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import {
  MenuItem,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@mui/material';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

export const Select = MuiSelect;
export type SelectProps = MuiSelectProps;

export const Template: Story<SelectProps> = args => {
  const [value, setValue] = React.useState(1);

  return (
    <Select
      onChange={(e: any): void => {
        setValue(e.target.value);
      }}
      value={value}
      {...args}
    >
      {Array(...Array(10)).map((_, i): any => (
        // eslint-disable-next-line react/no-array-index-key
        <MenuItem key={i} value={i}>
          {i + 1}
        </MenuItem>
      ))}
    </Select>
  );
};
