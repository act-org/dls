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
  Alert as MiuAlert,
  AlertProps as MuiAlertProps,
  AlertTitle as MuiAlertTitle,
  AlertTitleProps as MuiAlertTitleProps,
} from '@material-ui/lab';

export type AlertProps = MuiAlertProps & {
  alertTitle?: string | React.ReactElement;
};

export type AlertTitleProps = MuiAlertTitleProps;

/**
 * # Alert
 *
 * This component creats a simple visual alert to notify the user of something
 *
 * @param alertProps
 */
export function Alert({
  alertTitle,
  children,
  ...alertProps
}: AlertProps): React.ReactElement<AlertProps> {
  return (
    <MiuAlert {...alertProps}>
      {alertTitle && <MuiAlertTitle>{alertTitle}</MuiAlertTitle>}
      {children}
    </MiuAlert>
  );
}

export default Alert;

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
