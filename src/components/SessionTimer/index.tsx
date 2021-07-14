/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import IdleTimer from 'react-idle-timer';

export interface SessionTimerProps {
  a: string;
  b: string;
}

export const SessionTimer: React.FC<SessionTimerProps> = ({
  a,
  b,
}: SessionTimerProps): React.ReactElement<any> => {
  const idleTimerEl = React.useRef(null);

  console.log('a', a);
  console.log('b', b);

  return (
    <IdleTimer
      debounce={250}
      onAction={(event): void => {
        console.log('user did something', event);
      }}
      onActive={(event): void => {
        console.log('user is active', event);
        console.log('time remaining', idleTimerEl.current.getRemainingTime());
      }}
      onIdle={(event): void => {
        console.log('user is idle', event);
        console.log('last active', idleTimerEl.current.getLastActiveTime());
      }}
      ref={idleTimerEl}
      timeout={1000 * 60 * 1}
    />
  );
};

export default SessionTimer;
