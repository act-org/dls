/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable import/prefer-default-export */

import { styled } from '@mui/material/styles';

export const StyledText = styled('text')(({ theme }) => ({
  fontSize: theme.typography.h3.fontSize,
  fontWeight: Number(theme.typography.fontWeightBold),
}));
