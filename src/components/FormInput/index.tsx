/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import AlertOutline from '@actinc/dls/icons/AlertOutline';
import {
  FormControl,
  FormControlProps,
  Input,
  InputProps,
  Tooltip,
} from '@mui/material';
import { ReactElement } from 'react';

import { InputLabel, InputLabelProps } from '@actinc/dls/components/InputLabel';

export type FormInputProps = InputProps & {
  errorMessage?: string;
  formControlProps?: FormControlProps;
  helpText?: string | ReactElement;
  label?: string | ReactElement;
  labelProps?: InputLabelProps;
};

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
}: FormInputProps): ReactElement<FormInputProps> {
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

FormInput.defaultProps = {
  errorMessage: undefined,
  formControlProps: undefined,
  helpText: undefined,
  label: undefined,
  labelProps: undefined,
};

export default FormInput;
