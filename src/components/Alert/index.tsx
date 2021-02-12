/** @format */

import React from 'react';
import {
  Alert as MiuAlert,
  AlertProps as MuiAlertProps,
  AlertTitle as MuiAlertTitle,
  AlertTitleProps as MuiAlertTitleProps,
} from '@material-ui/lab';

export interface AlertProps extends MuiAlertProps {
  alertTitle?: string | React.ReactElement;
}
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

Alert.defaultProps = {
  variant: 'standard',
  severity: 'info',
  closeText: 'Close',
} as AlertProps;

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
