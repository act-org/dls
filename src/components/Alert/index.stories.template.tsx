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

import { PlayGround } from '~/helpers/playground';

import { Alert, AlertProps } from '.';

export const Template: Story<AlertProps> = (props: AlertProps) => (
  <Alert {...props} />
);

export const argTypes = PlayGround(
  {
    children: { type: 'string' },
    closeText: {},
    onClose: { action: 'close' },
    severity: {},
    title: { type: 'string' },
    variant: {},
  },
  Alert,
);
