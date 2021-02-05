/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { MenuItem } from '@material-ui/core';

import { Select, SelectProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';
import { Story } from '@storybook/react/types-6-0';

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
export const argTypes = PlayGround(
  {
    autoWidth: {},
    disabled: {},
    error: {},
    fullWidth: {},
    multiple: {},
    value: { type: 'string' },
  },
  Select,
);
