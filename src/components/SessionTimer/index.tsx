/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Button } from '@material-ui/core';
import pluralize from 'pluralize';
import { round } from 'lodash';
import { useIdleTimer } from 'react-idle-timer';

export interface SessionTimerProps {
  timeoutMs: number;
}

export const SessionTimer: React.FC<SessionTimerProps> = ({
  timeoutMs,
}: SessionTimerProps): React.ReactElement<any> => {
  const [dialogIsOpen, setDialogIsOpen] = React.useState(false);
  const [remainingTime, setRemainingTime] = React.useState(timeoutMs); // ms
  const [timeout, setTimeout] = React.useState(timeoutMs); // ms

  const { getRemainingTime, reset } = useIdleTimer({
    debounce: 50,
    onAction: (event): void => {
      console.log('dialogIsOpen', dialogIsOpen);
      if (!dialogIsOpen) {
        // setTimeout(timeoutMs);
      }
    },
    onActive: (event): void => {},
    onIdle: (event): void => {},
    stopOnIdle: true,
    timeout,
  });

  const refresh = (): void => {
    setRemainingTime(getRemainingTime());
  };

  React.useEffect((): void => {
    setInterval((): void => {
      refresh();
    }, 1000);
  }, []);

  const remainingTimeSeconds = round(remainingTime / 1000, 0);

  React.useEffect((): void => {
    if (remainingTimeSeconds === 0) {
      if (dialogIsOpen) {
        setDialogIsOpen(false);
      }
    } else if (remainingTimeSeconds <= 5) {
      if (!dialogIsOpen) {
        setDialogIsOpen(true);
      }
    }
  }, [dialogIsOpen, remainingTimeSeconds]);

  return (
    <>
      {remainingTimeSeconds > 0 && (
        <>
          <span>
            {`Session expires in ${remainingTimeSeconds} ${pluralize(
              'seconds',
              remainingTimeSeconds,
            )}`}
          </span>
        </>
      )}

      {dialogIsOpen && <div>open</div>}

      {remainingTimeSeconds === 0 && (
        <>
          <div>Session expired!</div>

          <br />

          <Button
            color="primary"
            onClick={(): void => {
              reset();
            }}
          >
            Start Over
          </Button>
        </>
      )}
    </>
  );
};

export default SessionTimer;
