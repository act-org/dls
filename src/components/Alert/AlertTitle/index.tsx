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
  AlertTitle as MuiAlertTitle,
  AlertTitleProps as MuiAlertTitleProps,
} from '@material-ui/lab';

export type AlertTitleProps = MuiAlertTitleProps;

/**
 * The alert title element
 * @param alertTitleProps
 */
export function AlertTitle({
  children,
  ...alertTitleProps
}: AlertTitleProps): React.ReactElement<AlertTitleProps> {
  return <MuiAlertTitle {...alertTitleProps}>{children}</MuiAlertTitle>;
}
