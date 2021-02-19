/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import React from 'react';
import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from '@material-ui/core';

export type IconButtonProps = MuiIconButtonProps;

/**
 * # Drawer
 *
 * @param IconButtonProps
 */
export function IconButton(
  IconButtonProps: IconButtonProps,
): React.ReactElement<IconButtonProps> {
  return <MuiIconButton {...IconButtonProps} />;
}

IconButton.defaultProps = {
  color: 'primary',
  edge: 'start',
} as IconButtonProps;
