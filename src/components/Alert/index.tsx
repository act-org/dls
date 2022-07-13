/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable react/display-name */

import { AlertProps as MuiAlertProps } from '@mui/lab';
import { Alert as MiuAlert, AlertTitle as MuiAlertTitle } from '@mui/material';
import { FC, forwardRef, ReactElement } from 'react';

export type AlertProps = MuiAlertProps & {
  title?: string | ReactElement;
};

/**
 * # Alert
 *
 * The Alert component is used to notify the user of something. Our
 * implementation is based on the
 * <a href="https://material-ui.com/components/alert" target="_blank">Alert</a>
 * &nbsp;component from Material UI.
 *
 * @param props
 */
export const Alert: FC<AlertProps> = forwardRef(
  (
    { children, title, ...props }: AlertProps,
    ref,
  ): ReactElement<AlertProps> => {
    return (
      <MiuAlert ref={ref} {...props}>
        {title && <MuiAlertTitle>{title}</MuiAlertTitle>}

        {children}
      </MiuAlert>
    );
  },
);

export default Alert;
