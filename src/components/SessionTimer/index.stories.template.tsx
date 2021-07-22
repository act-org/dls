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
import { Story } from '@storybook/react/types-6-0';
import { Playground } from '~/helpers/playground';

import DialogSessionTimer from '~/components/DialogSessionTimer';

import { SessionTimer, SessionTimerProps } from '.';

export const Template: Story<SessionTimerProps> = (
  props: SessionTimerProps,
) => {
  const [expired, setExpired] = React.useState(false);

  return (
    <>
      <SessionTimer {...props}>
        {({ remainingTimeMs, reset }): React.ReactElement<any> => {
          const remainingTimeSeconds = round(remainingTimeMs / 1000, 0);

          return (
            <>
              {remainingTimeSeconds > 0 && (
                <>
                  <span>
                    {`Idle in ${remainingTimeSeconds} ${pluralize(
                      'seconds',
                      remainingTimeSeconds,
                    )}`}
                  </span>
                </>
              )}

              {remainingTimeSeconds === 0 && (
                <DialogSessionTimer
                  onContinue={(): void => {
                    reset();
                  }}
                  onExpire={(): void => {
                    setExpired(true);
                  }}
                />
              )}

              {expired && (
                <>
                  <div>Session expired!</div>

                  <br />

                  <Button
                    color="primary"
                    onClick={(): void => {
                      setExpired(false);
                      reset();
                    }}
                  >
                    Start Over
                  </Button>
                </>
              )}
            </>
          );
        }}
      </SessionTimer>
    </>
  );
};

export const argTypes = Playground(
  {
    timeoutMs: { type: 'number' },
  },
  SessionTimer,
);
