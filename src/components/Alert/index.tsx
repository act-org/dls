/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable react/display-name */

import {
  Alert as MuiAlert,
  AlertProps as MuiAlertProps,
  AlertTitle as MuiAlertTitle,
} from '@mui/material';
import { forwardRef, ForwardRefRenderFunction, ReactElement } from 'react';

export type AlertProps = MuiAlertProps & {
  // eslint-disable-next-line react/require-default-props
  title?: string | ReactElement;
};

const AlertComponent: ForwardRefRenderFunction<HTMLDivElement, AlertProps> = (
  { children, title, ...props }: AlertProps,
  ref,
): ReactElement<AlertProps> => {
  return (
    <MuiAlert ref={ref} {...props}>
      {title && <MuiAlertTitle>{title}</MuiAlertTitle>}

      {children}
    </MuiAlert>
  );
};

export const Alert = forwardRef(AlertComponent);

export default Alert;
