/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { action } from '@storybook/addon-actions';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { round } from 'lodash';
import pluralize from 'pluralize';
import { ReactElement } from 'react';

import { Playground } from '@actinc/dls/helpers/playground';

import { IdleTimer, IdleTimerProps } from '.';

const Template: StoryFn<IdleTimerProps> = ({
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
      {({ remainingTimeMs }): ReactElement<unknown> => {
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

/*
 * The `<IdleTimer />` component monitors keyboard and mouse activity to determine
 * when the user has gone idle.
 */
export default {
  args: {
    timeoutMs: 10000,
  },
  argTypes: Playground(
    {
      stopOnIdle: { type: 'boolean' },
      timeoutMs: { type: 'number' },
    },
    IdleTimer,
  ),
  component: Template,
  tags: ['autodocs'],
  title: 'Utilities / IdleTimer',
} as Meta<IdleTimerProps>;

export const Preview: StoryObj<IdleTimerProps> = {
  args: {},
};

/*
 * Use `stopOnIdle: true` to prevent the timer from resetting itself when the
 * user comes back after having been idle.
 */
export const StopOnIdle: StoryObj<IdleTimerProps> = {
  args: {
    stopOnIdle: true,
  },
};
