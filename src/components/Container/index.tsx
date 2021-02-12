/** @format */

import React from 'react';
import {
  Container as MuiContainer,
  ContainerProps as MuiContainerProps,
} from '@material-ui/core';

export type ContainerProps = MuiContainerProps;

/**
 * # Drawer
 *
 * @param containerProps
 */
export function Container(
  containerProps: ContainerProps,
): React.ReactElement<ContainerProps> {
  return <MuiContainer {...containerProps} />;
}

Container.defaultProps = {} as ContainerProps;
