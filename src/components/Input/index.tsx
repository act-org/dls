/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
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
