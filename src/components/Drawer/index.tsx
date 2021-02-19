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
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
} from '@material-ui/core';

export type DrawerProps = MuiDrawerProps;

/**
 * # Drawer
 *
 * @param appBarProps
 */
export function Drawer(
  appBarProps: DrawerProps,
): React.ReactElement<DrawerProps> {
  return <MuiDrawer {...appBarProps} />;
}

Drawer.defaultProps = {
  color: 'primary',
  variant: 'persistent',
} as DrawerProps;
