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
} from '@material-ui/lab';

export type AlertProps = MuiAlertProps & {
  title?: string | React.ReactElement;
};

/**
 * # Alert
 *
 * The Alert component is used to notify the user of something. Our
 * implementation is based on the
 * [Alert](https://material-ui.com/components/alert/#alert) component from
 * Material UI.
 *
 * @param alertProps
 */
export function Alert({
  children,
  title,
  ...alertProps
}: AlertProps): React.ReactElement<AlertProps> {
  return (
    <MiuAlert {...alertProps}>
      {title && <MuiAlertTitle>{title}</MuiAlertTitle>}

      {children}
    </MiuAlert>
  );
}

export default Alert;
