/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable react/display-name */

import * as React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@material-ui/core';

export type ButtonProps = MuiButtonProps;

/**
 * # Button
 * This is the main Button component.  It has several variations and options for the display
 * @param ButtonProps
 */
export function Button({
  ...buttonProps
}: ButtonProps): React.ReactElement<ButtonProps> {
  return <MuiButton {...buttonProps} />;
}

export default Button;
