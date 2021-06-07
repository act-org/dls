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
  Input,
  InputProps,
  FormControl,
  FormControlProps,
  Tooltip,
} from '@material-ui/core';

import { AlertOutline } from '~/icons';
import { InputLabel, InputLabelProps } from '~/components/InputLabel';

export type FormInputProps = InputProps & {
  label?: string | React.ReactElement;
  helpText?: string | React.ReactElement;
  errorMessage?: string;
  labelProps?: InputLabelProps;
  formControlProps?: FormControlProps;
};

/**
 * # Form Input
 *
 * This molecule wraps a standard label and text input to make for a quick form field setup
 * This component also has a mechanism for setting help and error messages when the field is not valid
 *
 * @param param0
 */
export function FormInput({
  disabled,
  error,
  errorMessage,
  helpText,
  id,
  label,
  labelProps,
  required,
  fullWidth,
  formControlProps,
  ...formInputProps
}: FormInputProps): React.ReactElement<FormInputProps> {
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
      <Input
        disabled={disabled}
        error={error}
        id={id}
        required={required}
        {...formInputProps}
      />

      {errorMessage && (
        <Tooltip arrow placement="top" title={errorMessage}>
          <AlertOutline color="error" />
        </Tooltip>
      )}
    </FormControl>
  );
}

export default FormInput;
