/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Playground } from '~/helpers/playground';

import { SessionTimer, SessionTimerProps } from '.';

export const Template: Story<SessionTimerProps> = ({
  a,
  b,
}: SessionTimerProps) => {
  return (
    <>
      <SessionTimer />
    </>
  );
};

export const argTypes = Playground(
  {
    a: { type: 'string' },
    b: { type: 'string' },
  },
  SessionTimer,
);
