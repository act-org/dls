/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material';
import { Story } from '@storybook/react/types-6-0';

export const Typography = MuiTypography;
export type TypographyProps = MuiTypographyProps;

export const Template: Story<TypographyProps> = (props: TypographyProps) => (
  <Typography {...props} />
);