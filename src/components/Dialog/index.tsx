/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import {
  Box,
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  DialogTitle,
  IconButton,
} from '@mui/material';

import CloseCircle from '~/icons/CloseCircle';

export type DialogProps = MuiDialogProps & {
  title?: string;
  onClose?: (
    // eslint-disable-next-line @typescript-eslint/ban-types
    event: {},
    reason: 'backdropClick' | 'escapeKeyDown' | 'closeIconClick',
  ) => void;
};

/**
 * # Dialog
 *
 *
 * @param formSwitchProps
 */
export function Dialog({
  title,
  onClose,
  children,
  ...dialogProps
}: DialogProps): React.ReactElement<DialogProps> {
  return (
    <MuiDialog {...dialogProps} onClose={onClose}>
      {title && (
        <DialogTitle>
          <Box alignContent="center" display="flex">
            <Box flexGrow={1}>{title}</Box>
            <Box>
              <IconButton
                color="default"
                onClick={(): void => {
                  if (onClose) {
                    onClose({}, 'closeIconClick');
                  }
                }}
                size="large"
              >
                <CloseCircle />
              </IconButton>
            </Box>
          </Box>
        </DialogTitle>
      )}
      {children}
    </MuiDialog>
  );
}

export default Dialog;
