/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Box, DialogTitle, IconButton, Dialog as MuiDialog, DialogProps as MuiDialogProps } from '@mui/material';
import CloseCircle from 'mdi-material-ui/CloseCircle';
import { ReactElement } from 'react';

export type DialogProps = MuiDialogProps & {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown' | 'closeIconClick') => void;
  title?: string;
};

/**
 * # Dialog
 *
 *
 * @param formSwitchProps
 */
export function Dialog({ children, onClose, title, ...dialogProps }: DialogProps): ReactElement<DialogProps> {
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
