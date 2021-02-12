/** @format */

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
