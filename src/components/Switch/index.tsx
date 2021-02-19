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
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
} from '@material-ui/core';

/**
 * Basic props for a Switch element
 */
export type SwitchProps = MuiSwitchProps;

/**
 * # Switch
 *
 * Works like a radio button but better looking visually and works well on mobile devices.
 *
 * See (Material UI Switch)[https://material-ui.com/components/switches/]
 * @param switchProps
 */
export function Switch(
  switchProps: SwitchProps,
): React.ReactElement<SwitchProps> {
  return <MuiSwitch {...switchProps} />;
}

export default Switch;
