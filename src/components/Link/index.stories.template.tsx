/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable immutable/no-mutation */

import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Link, LinkProps } from '.';
import { Button } from '../Button';
import { PlayGround } from '../../helpers/argBlocks';

interface StoryProps extends LinkProps {
  text: string;
}

export const Template: Story<StoryProps> = ({ text, ...args }) => (
  <Link {...args}>{text}</Link>
);

export const argTypes: Record<string, any> = PlayGround(
  {
    to: {},
    text: {},
    variant: {},
    color: {},
    target: {},
    underline: {},
  },
  Link,
);
