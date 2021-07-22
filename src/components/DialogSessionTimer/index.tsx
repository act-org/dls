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
  Divider,
  Typography,
} from '@material-ui/core';
import pluralize from 'pluralize';
import { round } from 'lodash';

export interface DialogSessionTimerProps {
  onContinue: () => void;
  onExpire: () => void;
}

export const DialogSessionTimer: React.FC<DialogSessionTimerProps> = ({
  onContinue,
  onExpire,
}: DialogSessionTimerProps): React.ReactElement<any> | null => {
  const [time, setTime] = React.useState(1000 * 8);

  React.useEffect((): (() => void) => {
    let timer;

    if (time >= 1000) {
      timer = setTimeout((): void => {
        setTime(time - 1000);
      }, 1000);
    }

    if (time === 0) {
      onExpire();
    }

    return (): void => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [time]);

  const timeSeconds = round(time / 1000, 0);

  if (time > 0) {
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
            {`For security reasons, your session will timeout in ${timeSeconds} ${pluralize(
              'seconds',
              timeSeconds,
            )} unless you continue.`}
          </Typography>
        </DialogContent>

        <br />

        <Divider />

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
