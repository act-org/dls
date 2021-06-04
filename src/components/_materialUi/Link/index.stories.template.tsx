/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Link, LinkProps } from '@material-ui/core';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

interface StoryProps extends LinkProps {
  text: string;
}

export const Template: Story<StoryProps> = ({ text, ...args }: StoryProps) => (
  <Link {...args}>{text}</Link>
);

export const argTypes: Record<string, unknown> = Playground(
  {
    text: {},
    variant: {},
    color: {},
    target: {},
    underline: {},
  },
  Link,
);
