/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, ButtonProps, Dialog, DialogContent, DialogContentProps, DialogProps, DialogTitle, DialogTitleProps, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { FC, ReactElement, ReactNode, useEffect, useState } from 'react';

import { StyledDialogActions } from './styles';

export interface DialogContinueSessionProps {
  confirmationButtonProps?: ButtonProps;
  confirmationText?: ReactNode;
  cancellationButtonProps?: ButtonProps;
  cancellationText?: ReactNode;
  content?: ReactNode | null;
  contentProps?: DialogContentProps;
  dialogProps?: Omit<DialogProps, 'open'>;
  title?: ReactNode;
  titleProps?: DialogTitleProps;
  expiresAt: Date;
  onContinue: () => void;
  onExpire: () => void;
}

export const DialogContinueSession: FC<DialogContinueSessionProps> = ({
  confirmationButtonProps,
  confirmationText = 'Continue Session',
  cancellationButtonProps,
  cancellationText,
  content,
  contentProps,
  dialogProps,
  expiresAt,
  onContinue,
  onExpire,
  title = 'Do you want to continue your session?',
  titleProps,
}: DialogContinueSessionProps): ReactElement<unknown> | null => {
  const [timeUntilExpiration, setTimeUntilExpiration] = useState<number>(expiresAt.getTime() - Date.now());

  useEffect((): (() => void) => {
    const newTime = timeUntilExpiration - 1000 <= 0 ? 0 : timeUntilExpiration - 1000;

    const timer = setTimeout((): void => {
      setTimeUntilExpiration(newTime);
    }, 1000);

    if (!timeUntilExpiration) {
      onExpire();
    }

    return (): void => {
      clearTimeout(timer);
    };
  }, [onExpire, setTimeUntilExpiration, timeUntilExpiration]);

  if (timeUntilExpiration > 0) {
    return (
      <Dialog aria-labelledby="dialog-continue-session-title" fullWidth maxWidth="xs" open {...dialogProps}>
        <DialogTitle id="dialog-continue-session-title" {...titleProps}>
          {title}
        </DialogTitle>

        <DialogContent {...contentProps}>
          {content || (
            <Typography variant="body1">
              {`For security reasons, your session will timeout at ${dayjs(expiresAt).format('h:mm A')} unless you continue.`}
            </Typography>
          )}
        </DialogContent>

        <StyledDialogActions>
          {cancellationText && (
            <Button
              color="primary"
              fullWidth
              onClick={(): void => {
                onExpire();
              }}
              variant="contained"
              {...cancellationButtonProps}
            >
              {cancellationText}
            </Button>
          )}

          <Button
            color="primary"
            fullWidth
            onClick={(): void => {
              onContinue();
            }}
            variant="contained"
            {...confirmationButtonProps}
          >
            {confirmationText}
          </Button>
        </StyledDialogActions>
      </Dialog>
    );
  }

  return null;
};

export default DialogContinueSession;
