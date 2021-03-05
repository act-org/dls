/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { AppBar as MuiAppBar, AppBarProps } from '@material-ui/core';

export type { AppBarProps };

/**
 * # App Bar
 *
 * The App Bar component is used to create a top-level header for application
 * navigation. Our implementation is based on the
 * <a href="https://material-ui.com/components/app-bar" target="_blank">App Bar</a>
 * &nbsp;component from Material UI.
 *
 * @param props
 */
export function AppBar(props: AppBarProps): React.ReactElement<AppBarProps> {
  return <MuiAppBar {...props} />;
}

export default AppBar;
