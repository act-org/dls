/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import DialogContinueSession from '~/components/DialogContinueSession';
import IdleTimer from '~/components/IdleTimer';

export interface SessionTimerProps {
  children?: ({
    remainingTimeStageOne,
    remainingTimeStageTwo,
  }: {
    remainingTimeStageOne: number;
    remainingTimeStageTwo: number;
  }) => React.ReactElement<any> | null;
  expiresAt: Date;
  onExpire: () => void;
  onKeepAlive: () => void;
  promptWithMsRemaining: number;
  tokenMaxAgeMs: number;
}

export const SessionTimer: React.FC<SessionTimerProps> = ({
  children,
  expiresAt,
  onExpire,
  onKeepAlive,
  promptWithMsRemaining,
  tokenMaxAgeMs,
}: SessionTimerProps): React.ReactElement<any> | null => {
  const [stageOneIsIdle, setStageOneIsIdle] = React.useState(false);
  const [tick, setTick] = React.useState(0);

  const stageTwoTimeoutMs = tokenMaxAgeMs - promptWithMsRemaining;

  React.useEffect((): (() => void) => {
    if (typeof window !== 'undefined') {
      const timeUntilExpirationMs = new Date(expiresAt).getTime() - Date.now();

      // If the user is active but the token is about to expire, renew it.
      if (!stageOneIsIdle && timeUntilExpirationMs < promptWithMsRemaining) {
        onKeepAlive();
      }

      const timer = setTimeout((): void => {
        setTick(tick + 1);
      }, 1000);

      return (): void => {
        clearTimeout(timer);
      };
    }

    return noop;
  }, [expiresAt, onKeepAlive, promptWithMsRemaining, stageOneIsIdle, tick]);

  return (
    <IdleTimer
      onIdle={async (): Promise<void> => {
        // If the user goes idle for the first stage, refresh the token
        // and start the main timer.

        setStageOneIsIdle(true);

        await onKeepAlive();
      }}
      stopOnIdle
      timeoutMs={promptWithMsRemaining}
    >
      {({
        remainingTimeMs: remainingTimeStageOne,
        reset,
      }): React.ReactElement<any> | null => {
        // The user has been idle for the entire first stage.
        if (remainingTimeStageOne === 0) {
          return (
            <IdleTimer
              onAction={async (): Promise<void> => {
                // If the user comes back within the second stage,
                // refresh the token and start over.

                setStageOneIsIdle(false);

                await onKeepAlive();

                reset();
              }}
              stopOnIdle
              timeoutMs={stageTwoTimeoutMs}
            >
              {({
                remainingTimeMs: remainingTimeStageTwo,
              }): React.ReactElement<any> | null => {
                // The user has been idle for the entire first and second stages.
                if (remainingTimeStageTwo === 0) {
                  return (
                    <>
                      <DialogContinueSession
                        expiresAt={expiresAt}
                        onContinue={async (): Promise<void> => {
                          // If the user chooses to continue the session before
                          // it expires, keep the session alive and start over.
                          await onKeepAlive();

                          reset();
                        }}
                        onExpire={onExpire}
                      />

                      {children &&
                        children({
                          remainingTimeStageOne,
                          remainingTimeStageTwo,
                        })}
                    </>
                  );
                }

                if (children) {
                  return children({
                    remainingTimeStageOne,
                    remainingTimeStageTwo,
                  });
                }

                return null;
              }}
            </IdleTimer>
          );
        }

        if (children) {
          return children({
            remainingTimeStageOne,
            remainingTimeStageTwo: stageTwoTimeoutMs,
          });
        }

        return null;
      }}
    </IdleTimer>
  );
};

SessionTimer.defaultProps = {
  children: undefined,
};

export default SessionTimer;
