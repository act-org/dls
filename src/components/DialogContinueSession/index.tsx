/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import moment from 'moment';
import { FC, ReactElement, useEffect, useState } from 'react';

import { StyledDialogActions } from './styles';

export interface DialogContinueSessionProps {
  expiresAt: Date;
  onContinue: () => void;
  onExpire: () => void;
}

export const DialogContinueSession: FC<DialogContinueSessionProps> = ({
  expiresAt,
  onContinue,
  onExpire,
}: DialogContinueSessionProps): ReactElement<unknown> | null => {
  const [timeUntilExpiration, setTimeUntilExpiration] = useState<number>(
    expiresAt.getTime() - Date.now(),
  );

  useEffect((): (() => void) => {
    const newTime =
      timeUntilExpiration - 1000 <= 0 ? 0 : timeUntilExpiration - 1000;

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
      <Dialog
        aria-labelledby="dialog-continue-session-title"
        fullWidth
        maxWidth="xs"
        open
      >
        <DialogTitle id="dialog-continue-session-title">
          Do you want to continue your session?
        </DialogTitle>

        <DialogContent>
          <Typography variant="body1">
            {`For security reasons, your session will timeout at ${moment(
              expiresAt,
            ).format('h:mm A')} unless you continue.`}
          </Typography>
        </DialogContent>

        <StyledDialogActions>
          <Button
            color="primary"
            fullWidth
            onClick={(): void => {
              onContinue();
            }}
            variant="contained"
          >
            Continue Session
          </Button>
        </StyledDialogActions>
      </Dialog>
    );
  }

  return null;
};

export default DialogContinueSession;
