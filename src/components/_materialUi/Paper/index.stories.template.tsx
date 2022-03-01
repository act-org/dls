/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Paper, PaperProps } from '@mui/material';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

export const Template: Story<PaperProps> = (props: PaperProps) => (
  <Paper
    {...props}
    style={{
      alignItems: 'center',
      display: 'flex',
      height: 100,
      justifyContent: 'center',
      width: 200,
    }}
  />
);

export const argTypes = Playground(
  {
    children: {},
    elevation: {},
    square: {},
    variant: {},
  },
  Paper,
);
