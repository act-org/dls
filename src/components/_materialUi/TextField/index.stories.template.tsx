/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { get } from 'lodash';
import { MenuItem, TextField, TextFieldProps } from '@material-ui/core';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

export const Template: Story<TextFieldProps> = ({
  value,
  ...props
}: TextFieldProps) => {
  const [textValue, setTextValue] = React.useState(value as string);

  return (
    <TextField
      onChange={(e: any): void => {
        setTextValue(e.target.value);
      }}
      placeholder="Placeholder"
      type="text"
      value={textValue}
      {...props}
    />
  );
};

const values = ['One', 'Two', 'Three', 'Four', 'Five'];

export const SelectTemplate: Story<TextFieldProps> = (
  props: TextFieldProps,
) => {
  const [value, setValue] = React.useState<string | string[]>(
    get(props, 'SelectProps.multiple') ? ['One'] : 'One',
  );

  return (
    <TextField
      onChange={(e: any): void => {
        setValue(e.target.value);
      }}
      select
      value={value}
      {...props}
    >
      {values.map((v): any => (
        <MenuItem key={v} value={v}>
          {v}
        </MenuItem>
      ))}
    </TextField>
  );
};

export const argTypes = Playground(
  {
    disabled: { control: { type: 'boolean' } },
    error: { control: { type: 'boolean' } },
    fullWidth: { control: { type: 'boolean' } },
    helperText: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    type: {
      options: ['text', 'number', 'password', 'email'],
      control: { type: 'radio' },
    },
    value: { control: { type: 'text' } },
  },
  TextField,
);
