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
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

export const TextField = MuiTextField;
export type TextFieldProps = MuiTextFieldProps;

export const Template: Story<TextFieldProps> = ({
  value,
  ...props
}: TextFieldProps) => {
  const [textValue, setTextValue] = React.useState(String(value || ''));

  return (
    <TextField
      onChange={(e): void => {
        setTextValue(e.target.value);
      }}
      placeholder="Placeholder"
      value={textValue}
      {...props}
    />
  );
};
