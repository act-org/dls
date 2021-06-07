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
  FormControl,
  FormControlProps,
  Select,
  SelectProps,
  Tooltip,
} from '@material-ui/core';

import { AlertOutline } from '~/icons';
import { InputLabel, InputLabelProps } from '~/components/InputLabel';

export interface SelectOption {
  label: string | null;
  value: number | string;
}

export type FormSelectProps = SelectProps & {
  errorMessage?: string;
  formControlProps?: FormControlProps;
  helpText?: string;
  label: string;
  labelProps?: InputLabelProps;
  options?: SelectOption[];
  placeholder?: string;
  placeholderIsDisabled?: boolean;
};

export function FormSelect({
  id,
  disabled,
  error,
  errorMessage,
  formControlProps,
  fullWidth,
  helpText,
  label,
  labelProps,
  options = [],
  placeholder,
  placeholderIsDisabled,
  required,
  ...selectProps
}: FormSelectProps): React.ReactElement<FormSelectProps> {
  return (
    <FormControl {...formControlProps} fullWidth={fullWidth}>
      <InputLabel
        {...labelProps}
        disabled={disabled}
        error={error}
        helpText={helpText}
        htmlFor={id}
        required={required}
      >
        {label}
      </InputLabel>
      <Select
        {...selectProps}
        disabled={disabled}
        error={error}
        id={id}
        required={required}
      >
        <MenuItem disabled={placeholderIsDisabled} value="">
          {placeholder || 'Select'}
        </MenuItem>
        {options.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {errorMessage && (
        <Tooltip arrow placement="top" title={errorMessage}>
          <AlertOutline color="error" />
        </Tooltip>
      )}
    </FormControl>
  );
}

export default FormSelect;
