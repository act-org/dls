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
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

import { Playground } from '~/helpers/playground';

import { SessionTimer, SessionTimerProps } from '.';

export const Template: Story<SessionTimerProps> = ({
  stageOneTimeoutMs,
  stageTwoTimeoutMs,
  ...otherProps
}: SessionTimerProps) => {
  const stageOneTimeoutSeconds = stageOneTimeoutMs / 1000;
  const stageTwoTimeoutSeconds = stageTwoTimeoutMs / 1000;

  const onContinue = action('onContinue');
  const onExpire = action('onExpire');
  const onStageOneAction = action('onStageOneAction');
  const onStageOneIdle = action('onStageOneIdle');
  const onStageTwoAction = action('onStageTwoAction');
  const onStageTwoIdle = action('onStageTwoIdle');

  return (
    <SessionTimer
      onContinue={async (): Promise<void> => {
        onContinue();

        window.location.reload();
      }}
      onExpire={(): void => {
        onExpire();

        window.location.reload();
      }}
      onStageOneAction={(e): void => {
        onStageOneAction(e);
      }}
      onStageOneIdle={(e): void => {
        onStageOneIdle(e);
      }}
      onStageTwoAction={(e, reset): void => {
        onStageTwoAction(e);

        reset();
      }}
      onStageTwoIdle={(e): void => {
        onStageTwoIdle(e);
      }}
      stageOneTimeoutMs={stageOneTimeoutMs}
      stageTwoTimeoutMs={stageTwoTimeoutMs}
      {...otherProps}
    >
      {({
        remainingTimeStageOne,
        remainingTimeStageTwo,
      }): React.ReactElement<any> => {
        const remainingTimeStageOneSeconds = round(
          remainingTimeStageOne / 1000,
          0,
        );
        const remainingTimeStageTwoSeconds = round(
          remainingTimeStageTwo / 1000,
          0,
        );

        return (
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="overline">Idle Stage</Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="overline">Duration</Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="overline">
                      Countdown to Idle
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>Stage 1</Typography>
                  </TableCell>

                  <TableCell>
                    <Typography>
                      {`${stageOneTimeoutSeconds} ${pluralize(
                        'seconds',
                        stageOneTimeoutSeconds,
                      )}`}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography>
                      {`${remainingTimeStageOneSeconds} ${pluralize(
                        'seconds',
                        remainingTimeStageOneSeconds,
                      )}`}
                    </Typography>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography>Stage 2</Typography>
                  </TableCell>

                  <TableCell>
                    <Typography>
                      {`${stageTwoTimeoutSeconds} ${pluralize(
                        'seconds',
                        stageTwoTimeoutSeconds,
                      )}`}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography>
                      {`${remainingTimeStageTwoSeconds} ${pluralize(
                        'seconds',
                        remainingTimeStageTwoSeconds,
                      )}`}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        );
      }}
    </SessionTimer>
  );
};

export const argTypes = Playground(
  {
    expiresAt: { type: 'date' },
    stageOneTimeoutMs: { type: 'number' },
    stageTwoTimeoutMs: { type: 'number' },
  },
  SessionTimer,
);
