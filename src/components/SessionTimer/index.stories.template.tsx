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
import moment from 'moment';
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
  promptWithMsRemaining,
  tokenMaxAgeMs,
  ...otherProps
}: SessionTimerProps) => {
  const [expiresAt, setExpiresAt] = React.useState(
    moment().add(tokenMaxAgeMs, 'ms').toDate(),
  );

  const stageOneTimeoutSeconds = promptWithMsRemaining / 1000;
  const stageTwoTimeoutSeconds = (tokenMaxAgeMs - promptWithMsRemaining) / 1000;

  const onExpire = action('onExpire');
  const onKeepAlive = action('onKeepAlive');

  return (
    <SessionTimer
      expiresAt={expiresAt}
      onExpire={(): void => {
        onExpire();
      }}
      onKeepAlive={(): void => {
        onKeepAlive();

        setExpiresAt(moment().add(tokenMaxAgeMs, 'ms').toDate());
      }}
      promptWithMsRemaining={promptWithMsRemaining}
      tokenMaxAgeMs={tokenMaxAgeMs}
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
    promptWithMsRemaining: { type: 'number' },
    tokenMaxAgeMs: { type: 'number' },
  },
  SessionTimer,
);