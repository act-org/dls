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

export default AppBar;
