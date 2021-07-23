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
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import moment from 'moment';

export interface DialogSessionTimerProps {
  expiresAt: Date;
  onContinue: () => void;
  onExpire: () => void;
}

export const DialogSessionTimer: React.FC<DialogSessionTimerProps> = ({
  expiresAt,
  onContinue,
  onExpire,
}: DialogSessionTimerProps): React.ReactElement<any> | null => {
  const [timeUntilExpiration, setTimeUntilExpiration] = React.useState<number>(
    expiresAt.getTime() - Date.now(),
  );

  React.useEffect((): (() => void) => {
    let timer;

    if (timeUntilExpiration >= 1000) {
      timer = setTimeout((): void => {
        setTimeUntilExpiration(timeUntilExpiration - 1000);
      }, 1000);
    }

    if (timeUntilExpiration === 0) {
      onExpire();
    }

    return (): void => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [onExpire, setTimeUntilExpiration, timeUntilExpiration]);

  if (timeUntilExpiration > 0) {
    return (
      <Dialog
        aria-labelledby="session-dialog-title"
        fullWidth
        maxWidth="xs"
        open
      >
        <DialogTitle id="session-dialog-title">
          Do you want to continue your session?
        </DialogTitle>

        <DialogContent>
          <Typography variant="body1">
            {`For security reasons, your session will timeout at ${moment(
              expiresAt,
            ).format('h:mm A')} unless you continue.`}
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button
            color="primary"
            fullWidth
            onClick={(): void => {
              onContinue();
            }}
          >
            Continue Session
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  return null;
};

export default DialogSessionTimer;
