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
import { Alert as MuiAlert, AlertTitle as MuiAlertTitle } from '@mui/material';
import { FC, forwardRef, ReactElement } from 'react';

export type AlertProps = MuiAlertProps & {
  title?: string | ReactElement;
};

export const Alert: FC<AlertProps> = forwardRef(
  (
    { children, title, ...props }: AlertProps,
    ref,
  ): ReactElement<AlertProps> => {
    return (
      <MuiAlert ref={ref} {...props}>
        {title && <MuiAlertTitle>{title}</MuiAlertTitle>}

        {children}
      </MuiAlert>
    );
  },
);

Alert.defaultProps = {
  title: undefined,
};

export default Alert;
