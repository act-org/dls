/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import {
  Link as MuiLink,
  LinkProps as MuiLinkProps,
  Typography,
} from '@mui/material';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

export const Link = MuiLink;
export type LinkProps = MuiLinkProps;
export const Template: Story<LinkProps> = (args: LinkProps) => (
  <Link href="https://www.act.org" target="_blank" {...args}>
    <Typography>Click Me</Typography>
  </Link>
);

export const argTypes: Record<string, unknown> = Playground(
  {
    color: {},
    target: {},
    text: {},
    underline: {},
    variant: {},
  },
  Link,
);
