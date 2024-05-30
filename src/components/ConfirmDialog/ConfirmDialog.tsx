/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import Button, { ButtonProps } from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent, { DialogContentProps } from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle, { DialogTitleProps } from '@mui/material/DialogTitle';
import { noop } from 'lodash';
import { ReactElement } from 'react';

/**
 * Properties to control the various aspects of a confirmation dialog
 */
export type ConfirmDialogProps = {
  /**
   * Controls the visibility of the confirmation dialog
   */
  isOpen?: boolean;
  /**
   * The message that will appear across the top of the dialog window
   * @default Confirmation
   */
  title?: React.ReactNode;
  /**
   * Any additional props to pass to the DialogTitle component
   */
  titleProps?: DialogTitleProps;
  /**
   * The main text to display in the confirm dialog area.  The logic is
   * to display either the description property OR the content property
   */
  description?: React.ReactNode;
  /**
   * Any React Elemement to display as the dialog contents.  The logic is
   * to display either the description property OR the content property
   */
  content?: React.ReactNode | null;
  /**
   * Any additional props to pass to the DialogContent component
   */
  contentProps?: DialogContentProps;
  /**
   * The label for the confirmation button
   * @default Ok
   */
  confirmationText?: React.ReactNode;
  /**
   * The label for the cancel button
   * @default Cancel
   */
  cancellationText?: React.ReactNode;
  /**
   * Any additional properties to pass to the Dialog component
   */
  dialogProps?: Omit<DialogProps, 'open'>;
  /**
   * Any additional properties to pass to the confirmation Button component
   */
  confirmationButtonProps?: ButtonProps;
  /**
   * Any additional properties to pass to the cancellation Button component
   */
  cancellationButtonProps?: ButtonProps;
  /**
   * Allow dialog to be closed.  If set to true, the user can escape or click away from the dialog
   * @default false
   */
  // eslint-disable-next-line react/boolean-prop-naming
  allowClose?: boolean;
  /**
   * Event fired when the dialog is cancelled
   */
  onCancel?: () => void;
  /**
   * Event fired when the confirm button is clicked
   */
  onConfirm?: () => void;

  /**
   * Event fired when the dialog is closed without choosing confirm or cancel.  Should be treated as cancel normally
   */
  onClose?: (
    event: Record<string, unknown>,
    reason: 'backdropClick' | 'escapeKeyDown',
  ) => void | undefined;
};

/**
 * Main component for a confirmation dialog.  This component can be used in isolation by
 * controlling the open state property and then listening for the various close events,
 * however the simplest usage for this is the use the ConfirmProvider and useConfirm hook
 */
export const ConfirmDialog = (props: ConfirmDialogProps): ReactElement => {
  const {
    isOpen = false,
    onCancel,
    onConfirm,
    onClose,
    title = 'Confirmation',
    description,
    content,
    confirmationText = 'Ok',
    cancellationText = 'Cancel',
    dialogProps,
    confirmationButtonProps,
    cancellationButtonProps,
    titleProps,
    contentProps,
    allowClose = false,
  } = props;

  return (
    <Dialog
      fullWidth
      {...dialogProps}
      onClose={allowClose ? onClose : noop}
      open={isOpen}
    >
      {title && <DialogTitle {...titleProps}>{title}</DialogTitle>}
      {content ? (
        <DialogContent {...contentProps}>{content}</DialogContent>
      ) : (
        description && (
          <DialogContent {...contentProps}>
            <DialogContentText>{description}</DialogContentText>
          </DialogContent>
        )
      )}
      <DialogActions>
        <Button
          color="secondary"
          variant="outlined"
          {...cancellationButtonProps}
          onClick={onCancel}
        >
          {cancellationText}
        </Button>
        <Button
          color="primary"
          variant="contained"
          {...confirmationButtonProps}
          onClick={onConfirm}
        >
          {confirmationText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
