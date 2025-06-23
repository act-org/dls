/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SnackbarContent, useSnackbar } from 'notistack';
import { FC, forwardRef, ReactElement, ReactNode, useCallback } from 'react';

import Alert, { AlertProps } from '~/components/Alert';

export interface SnackbarAlertProps {
  CustomAlert?: React.FC<AlertProps>;
  id: number;
  message: string | ReactNode;
  variant: any;
}

// eslint-disable-next-line react/display-name
export const SnackbarAlert: FC<SnackbarAlertProps> = forwardRef(
  (
    { CustomAlert, id, message, variant }: SnackbarAlertProps,
    ref,
  ): ReactElement<unknown> => {
    const { closeSnackbar } = useSnackbar();

    const handleDismiss = useCallback(() => {
      closeSnackbar(id);
    }, [id, closeSnackbar]);

    const Component = CustomAlert || Alert;

    return (
      <SnackbarContent ref={ref as any}>
        <Component
          onClose={handleDismiss}
          severity={variant}
          style={{
            width: '100%',
          }}
          variant="filled"
        >
          {message}
        </Component>
      </SnackbarContent>
    );
  },
);

export default SnackbarAlert;
