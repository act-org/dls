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
  children?: ({
    remainingTimeStageOne,
    remainingTimeStageTwo,
  }: {
    remainingTimeStageOne: number;
    remainingTimeStageTwo: number;
  }) => React.ReactElement<any> | null;
  expiresAt: Date;
  onContinue: (reset: () => void) => void;
  onExpire: () => void;
  onStageOneAction?: (event: any) => void;
  onStageOneIdle?: (event: any) => void;
  onStageTwoAction?: (event: any, reset: () => void) => void;
  onStageTwoIdle?: (event: any) => void;
  stageOneTimeoutMs: number;
  stageTwoTimeoutMs: number;
}

export const SessionTimer: React.FC<SessionTimerProps> = ({
  children,
  expiresAt,
  onContinue,
  onExpire,
  onStageOneAction,
  onStageOneIdle,
  onStageTwoAction,
  onStageTwoIdle,
  stageOneTimeoutMs,
  stageTwoTimeoutMs,
}: SessionTimerProps): React.ReactElement<any> | null => (
  <IdleTimer
    onAction={async (e): Promise<void> => {
      if (onStageOneAction) {
        onStageOneAction(e);
      }
    }}
    onIdle={async (e): Promise<void> => {
      if (onStageOneIdle) {
        onStageOneIdle(e);
      }
    }}
    stopOnIdle
    timeoutMs={stageOneTimeoutMs}
  >
    {({
      remainingTimeMs: remainingTimeStageOne,
      reset,
    }): React.ReactElement<any> | null => {
      // The user has been idle for the entire first stage.
      if (remainingTimeStageOne === 0) {
        return (
          <IdleTimer
            onAction={async (e): Promise<void> => {
              if (onStageTwoAction) {
                onStageTwoAction(e, reset);
              }
            }}
            onIdle={async (e): Promise<void> => {
              if (onStageTwoIdle) {
                onStageTwoIdle(e);
              }
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
                      onContinue={(): void => {
                        onContinue(reset);
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

SessionTimer.defaultProps = {
  children: undefined,
  onStageOneAction: undefined,
  onStageOneIdle: undefined,
  onStageTwoAction: undefined,
  onStageTwoIdle: undefined,
};

export default SessionTimer;
