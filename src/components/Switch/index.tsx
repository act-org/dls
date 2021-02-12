/** @format */

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
): React.ReactElement<SwitchProps, any> {
  return <MuiSwitch {...switchProps}></MuiSwitch>;
}

Switch.defaultProps = {
  size: 'medium',
  color: 'primary',
} as SwitchProps;
