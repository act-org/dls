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
  Container as MuiContainer,
  ContainerProps as MuiContainerProps,
} from '@material-ui/core';

export type ContainerProps = MuiContainerProps;

/**
 * # Container
 *
 * @param containerProps
 */
export function Container(
  containerProps: ContainerProps,
): React.ReactElement<ContainerProps> {
  return <MuiContainer {...containerProps} />;
}
