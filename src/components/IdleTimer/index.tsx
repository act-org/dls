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

export interface IdleTimerProps {
  children?: ({
    remainingTimeMs,
    reset,
  }: {
    remainingTimeMs: number;
    reset: () => void;
  }) => React.ReactElement<unknown> | null;
  onAction?: (event?: any) => void;
  onActive?: (event?: any) => void;
  onIdle?: (event?: any) => void;
  stopOnIdle?: boolean;
  timeoutMs: number;
}

export const IdleTimer: React.FC<IdleTimerProps> = ({
  children,
  onAction,
  onActive,
  onIdle,
  stopOnIdle,
  timeoutMs,
}: IdleTimerProps): React.ReactElement<unknown> | null => {
  const [remainingTimeMs, setRemainingTimeMs] = React.useState(timeoutMs);

  const { getRemainingTime, reset } = useIdleTimer({
    debounce: 250,
    onAction: (event): void => {
      if (onAction) {
        onAction(event);
      }
    },
    onActive: (event): void => {
      if (onActive) {
        onActive(event);
      }
    },
    onIdle: (): void => {
      if (onIdle) {
        onIdle({});
      }
    },
    stopOnIdle,
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

  if (children) {
    return children({ remainingTimeMs, reset });
  }

  return null;
};

export default IdleTimer;
