/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
} from '@material-ui/core';

export type AppBarProps = MuiAppBarProps;

/**
 * # App Bar
 *
 * The App Bar component is used to create a top-level header for application
 * navigation. Our implementation is based on the
 * <a href="https://material-ui.com/components/app-bar" target="_blank">App Bar</a>
 * &nbsp;component from Material UI.
 *
 * @param AppBarProps
 */
export function AppBar(
  appBarProps: AppBarProps,
): React.ReactElement<AppBarProps> {
  return <MuiAppBar {...appBarProps} />;
}

export default AppBar;
