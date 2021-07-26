/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import pluralize from 'pluralize';
import { round } from 'lodash';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

import { IdleTimer, IdleTimerProps } from '.';

export const Template: Story<IdleTimerProps> = ({
  timeoutMs,
  ...otherProps
}: IdleTimerProps) => {
  const timeoutSeconds = timeoutMs / 1000;

  const onAction = action('onAction');
  const onActive = action('onActive');
  const onIdle = action('onIdle');

  return (
    <IdleTimer
      onAction={(event): void => {
        onAction(event);
      }}
      onActive={(event): void => {
        onActive(event);
      }}
      onIdle={(event): void => {
        onIdle(event);
      }}
      timeoutMs={timeoutMs}
      {...otherProps}
    >
      {({ remainingTimeMs }): React.ReactElement<any> => {
        const remainingTimeSeconds = round(remainingTimeMs / 1000, 0);

        return (
          <span>
            {remainingTimeSeconds > 0
              ? `Going idle in ${remainingTimeSeconds} ${pluralize(
                  'seconds',
                  remainingTimeSeconds,
                )}...`
              : `You went idle for ${timeoutSeconds} ${pluralize(
                  'seconds',
                  timeoutSeconds,
                )}!`}
          </span>
        );
      }}
    </IdleTimer>
  );
};

export const argTypes = Playground(
  {
    stopOnIdle: { type: 'boolean' },
    timeoutMs: { type: 'number' },
  },
  IdleTimer,
);
