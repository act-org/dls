/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import round from 'lodash/round';
import pluralize from 'pluralize';
import { ReactElement, useState } from 'react';

import { Playground } from '~/helpers/playground';

import { SessionTimer, SessionTimerProps } from '.';

const Template: StoryFn<SessionTimerProps> = ({
  promptWithMsRemaining,
  tokenMaxAgeMs,
  ...otherProps
}: SessionTimerProps) => {
  const [expiresAt, setExpiresAt] = useState(
    dayjs().add(tokenMaxAgeMs, 'ms').toDate(),
  );

  const stageOneTimeoutSeconds = promptWithMsRemaining / 1000;
  const stageTwoTimeoutSeconds = (tokenMaxAgeMs - promptWithMsRemaining) / 1000;

  return (
    <SessionTimer
      {...otherProps}
      expiresAt={expiresAt}
      onKeepAlive={(): void => {
        setExpiresAt(dayjs().add(tokenMaxAgeMs, 'ms').toDate());
      }}
      promptWithMsRemaining={promptWithMsRemaining}
      tokenMaxAgeMs={tokenMaxAgeMs}
    >
      {({
        remainingTimeStageOne,
        remainingTimeStageTwo,
      }): ReactElement<unknown> => {
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

/**
 * The `<SessionTimer />` component combines two `IdleTimer`s with the
 * `DialogContinueSession` component in order to fully and effectively manage
 * the user's session.
 */
export default {
  args: {
    promptWithMsRemaining: 5000,
    tokenMaxAgeMs: 15 * 1000,
  },
  argTypes: Playground(
    {
      expiresAt: { type: 'date' },
      onExpire: { action: 'onExpire' },
      onKeepAlive: { action: 'onKeepAlive' },
      promptWithMsRemaining: { type: 'number' },
      tokenMaxAgeMs: { type: 'number' },
    },
    SessionTimer,
  ),
  component: Template,
  tags: ['autodocs'],
  title: 'Organisms / SessionTimer',
} as Meta<SessionTimerProps>;

export const Preview: StoryObj<SessionTimerProps> = {
  args: {},
};
