/**
 * @prettier
 */

import * as React from 'react';
import { makeStyles, Tooltip } from '@material-ui/core';
import AlertOutline from '~/icons/AlertOutline';
import { InputLabel, InputLabelProps } from '~/components/InputLabel';
import { Input, InputProps } from '~/components/Input';

export type FormInputProps = InputProps & {
  label?: string | React.ReactElement;
  helpText?: string | React.ReactElement;
  errorMessage?: string;
  labelProps?: InputLabelProps;
};

const useStyles = makeStyles({
  labelContainer: {},
  inputContainer: {},
});

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
  value,
  onChange,
  ...formInputProps
}: FormInputProps): React.ReactElement<FormInputProps> {
  const classes = useStyles();
  const [internalValue, setValue] = React.useState<unknown>(value || '');
  return (
    <div>
      <div className={classes.labelContainer}>
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
      </div>

      <div className={classes.inputContainer}>
        <Input
          id={id}
          error={error}
          required={required}
          disabled={disabled}
          value={internalValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
            if (onChange) {
              onChange(e);
            }
          }}
          {...formInputProps}
        />

        {errorMessage && (
          <Tooltip arrow placement="top" title={errorMessage}>
            <AlertOutline color="error" />
          </Tooltip>
        )}
      </div>
    </div>
  );
}
