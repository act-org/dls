/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { SnackbarContent, useSnackbar } from 'notistack';

import Alert from '~/components/Alert';

import useStyles from './styles';

export interface SnackbarAlertProps {
  id: number;
  message: string;
  variant: any;
}

// eslint-disable-next-line react/display-name
export const SnackbarAlert: React.FC<SnackbarAlertProps> = React.forwardRef(
  (
    { id, message, variant }: SnackbarAlertProps,
    ref,
  ): React.ReactElement<unknown> => {
    const { closeSnackbar } = useSnackbar();

    const handleDismiss = React.useCallback(() => {
      closeSnackbar(id);
    }, [id, closeSnackbar]);

    const classes = useStyles();

    return (
      <SnackbarContent ref={ref as any}>
        <Alert
          classes={{
            root: classes.snackbarContentRoot,
          }}
          onClose={handleDismiss}
          severity={variant}
          variant="filled"
        >
          {message}
        </Alert>
      </SnackbarContent>
    );
  },
);

export default SnackbarAlert;
