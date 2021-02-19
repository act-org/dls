/**
 * @prettier
 */

import * as React from 'react';
import { Tooltip, FormControl, FormControlProps } from '@material-ui/core';
import AlertOutline from '~/icons/AlertOutline';
import { InputLabel, InputLabelProps } from '~/components/InputLabel';
import { Input, InputProps } from '~/components/Input';

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
        required={required}
        error={error}
        htmlFor={id}
        helpText={helpText}
      >
        {label}
      </InputLabel>
      <Input
        id={id}
        error={error}
        required={required}
        disabled={disabled}
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
