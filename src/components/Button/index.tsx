/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Button as MiuButton, ButtonProps } from '@material-ui/core';

export type { ButtonProps };

/**
 * # Button
 *
 * The Button component is used to create a clickable action on the screen.
 * Our implementation is based on the
 * [Button](https://material-ui.com/components/buttons) component from
 * Material UI.
 *
 * @param ButtonProps
 */
export const Button: React.FC<ButtonProps> = (
  props: ButtonProps,
): React.ReactElement<ButtonProps> => {
  return <MiuButton {...props} />;
};

export default Button;
