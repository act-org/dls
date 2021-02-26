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

import { PlayGround } from '~/helpers/argBlocks';

import { Alert, AlertProps } from '.';

interface DocProps extends AlertProps {
  text: string;
}

export const Template: Story<DocProps> = ({ text, ...args }: DocProps) => (
  <Alert {...args}>{text}</Alert>
);

export const argTypes = PlayGround(
  {
    closeText: {},
    onClose: { action: 'close' },
    severity: {},
    text: { type: 'string' },
    title: { type: 'string' },
    variant: {},
  },
  Alert,
);
