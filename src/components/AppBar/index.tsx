/** @format */

import React from 'react';
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
} from '@material-ui/core';

export type AppBarProps = MuiAppBarProps;

/**
 * # AppBar Atom
 *
 * This components creates a top level header for an application navigation
 * @param appBarProps
 */
export function AppBar(
  appBarProps: AppBarProps,
): React.ReactElement<AppBarProps> {
  return <MuiAppBar {...appBarProps} />;
}

AppBar.defaultProps = {
  color: 'primary',
} as AppBarProps;
