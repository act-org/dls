/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Alert as MuiAlert, AlertProps as MuiAlertProps, Snackbar as MuiSnackbar, SnackbarProps as MuiSnackbarProps } from '@mui/material';

export const Snackbar = MuiSnackbar;
export type Snackbar = typeof MuiSnackbar;
export type SnackbarProps = MuiSnackbarProps;

export const Alert = MuiAlert;
export type Alert = typeof MuiAlert;
export type AlertProps = MuiAlertProps;
