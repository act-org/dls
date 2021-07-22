/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { useIdleTimer } from 'react-idle-timer';

export interface SessionTimerProps {
  children: ({
    remainingTimeMs,
    reset,
  }: {
    remainingTimeMs: number;
    reset: () => void;
  }) => React.ReactElement<any>;
  onIdle: () => void;
  timeoutMs: number;
}

export const SessionTimer: React.FC<SessionTimerProps> = ({
  children,
  onIdle,
  timeoutMs,
}: SessionTimerProps): React.ReactElement<any> => {
  const [remainingTimeMs, setRemainingTimeMs] = React.useState(timeoutMs);

  const { getRemainingTime, reset } = useIdleTimer({
    debounce: 50,
    onAction: (event): void => {},
    onActive: (event): void => {},
    onIdle: (event): void => {
      if (onIdle) {
        onIdle();
      }
    },
    stopOnIdle: true,
    timeout: timeoutMs,
  });

  const refresh = (): void => {
    setRemainingTimeMs(getRemainingTime());
  };

  React.useEffect((): (() => void) => {
    const interval = setInterval((): void => {
      refresh();
    }, 1000);

    return (): void => {
      clearInterval(interval);
    };
  }, []);

  return children({ remainingTimeMs, reset });
};

export default SessionTimer;
