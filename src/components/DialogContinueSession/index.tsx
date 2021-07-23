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

import useStyles from './styles';

export interface DialogContinueSessionProps {
  expiresAt: Date;
  onContinue: () => void;
  onExpire: () => void;
}

export const DialogContinueSession: React.FC<DialogContinueSessionProps> = ({
  expiresAt,
  onContinue,
  onExpire,
}: DialogContinueSessionProps): React.ReactElement<any> | null => {
  const [timeUntilExpiration, setTimeUntilExpiration] = React.useState<number>(
    expiresAt.getTime() - Date.now(),
  );

  React.useEffect((): (() => void) => {
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
  }, [setTimeUntilExpiration, timeUntilExpiration]);

  const classes = useStyles();

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

        <DialogActions
          classes={{
            root: classes.dialogActionsRoot,
          }}
        >
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
        </DialogActions>
      </Dialog>
    );
  }

  return null;
};

export default DialogContinueSession;
