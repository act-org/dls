/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Typography, TypographyProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';
import { Story } from '@storybook/react/types-6-0';

export interface StoryProps extends TypographyProps {
  text: string;
}

export const Template: Story<StoryProps> = ({ text, ...args }) => (
  <Typography {...args}>{text}</Typography>
);
export const argTypes = PlayGround(
  {
    align: {},
    color: {},
    display: {},
    gutterBottom: {},
    noWrap: {},
    paragraph: {},
    text: { type: 'string' },
    variant: {},
  },
  Typography,
);
