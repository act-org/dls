/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';

import DialogContinueSession from '~/components/DialogContinueSession';
import IdleTimer from '~/components/IdleTimer';

export interface SessionTimerProps {
  expiresAt: Date;
  firstTimeoutMs: number;
  onContinue: (reset) => void;
  onExpire: () => void;
  onFirstIdle?: (event: any) => void;
  onSecondAction?: (event: any, reset: () => void) => void;
  secondTimeoutMs: number;
}

export const SessionTimer: React.FC<SessionTimerProps> = ({
  expiresAt,
  firstTimeoutMs,
  onContinue,
  onExpire,
  onFirstIdle,
  onSecondAction,
  secondTimeoutMs,
}: SessionTimerProps): React.ReactElement<any> | null => (
  <IdleTimer
    onIdle={async (e): Promise<void> => {
      if (onFirstIdle) {
        onFirstIdle(e);
      }
    }}
    stopOnIdle
    timeoutMs={firstTimeoutMs}
  >
    {({
      remainingTimeMs: remainingTimeFirst,
      reset,
    }): React.ReactElement<any> | null => {
      console.log('remainingTimeFirst', remainingTimeFirst);

      // The user has been idle for the first timeout.
      if (remainingTimeFirst === 0) {
        return (
          <IdleTimer
            onAction={async (e): Promise<void> => {
              if (onSecondAction) {
                onSecondAction(e, reset);
              }
            }}
            stopOnIdle
            timeoutMs={secondTimeoutMs}
          >
            {({
              remainingTimeMs: remainingTimeSecond,
            }): React.ReactElement<any> | null => {
              console.log('remainingTimeSecond', remainingTimeSecond);

              // The user has been idle for the first timeout and the second
              // timeout.
              if (remainingTimeSecond === 0) {
                return (
                  <DialogContinueSession
                    expiresAt={expiresAt}
                    onContinue={(): void => {
                      onContinue(reset);
                    }}
                    onExpire={onExpire}
                  />
                );
              }

              return null;
            }}
          </IdleTimer>
        );
      }

      return null;
    }}
  </IdleTimer>
);

SessionTimer.defaultProps = {
  onFirstIdle: undefined,
  onSecondAction: undefined,
};

export default SessionTimer;
