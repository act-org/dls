/**
 * @prettier
 */
import React from 'react';
import { OutlinedInput, OutlinedInputProps } from '@material-ui/core';

/**
 * Input Props
 */
export type InputProps = OutlinedInputProps;

/**
 * # Input Component
 *
 *
 * @param inputProps
 */
export function Input(inputProps: InputProps): React.ReactElement<InputProps> {
  return <OutlinedInput {...inputProps} />;
}
