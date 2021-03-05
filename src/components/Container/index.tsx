/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Container as MuiContainer, ContainerProps } from '@material-ui/core';

export type { ContainerProps };

/**
 * # Container
 *
 * The Container component is used to center your content horizontally. It's the
 * most basic layout element. Our implementation is based on the
 * <a href="https://material-ui.com/components/container" target="_blank">Container</a>
 * &nbsp;component from Material UI.
 *
 * @param props
 */
export function Container(
  props: ContainerProps,
): React.ReactElement<ContainerProps> {
  return <MuiContainer {...props} />;
}
