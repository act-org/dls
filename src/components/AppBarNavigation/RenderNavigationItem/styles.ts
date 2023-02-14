/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable import/prefer-default-export */

import { Typography, TypographyProps } from '@mui/material';
import { typographyClasses } from '@mui/material/Typography';

import { styled } from '@actinc/dls/helpers/material/styled';

export const StyledTypography = styled(Typography)<
  TypographyProps & {
    $isActive?: boolean;
  }
>(({ $isActive, theme }) => ({
  [`&.${typographyClasses.root}`]: {
    '&:after': {
      backgroundColor: $isActive ? 'currentcolor' : 'transparent',
      borderRadius: theme.shape.borderRadius,
      bottom: '-2px',
      content: '""',
      height: 4,
      left: 0,
      position: 'absolute',
      right: 0,
      transition: 'all .2s linear',
    },
    '&:hover': {
      '&:after': {
        backgroundColor: 'currentcolor',
      },
      textShadow: '0 0 .65px currentcolor, 0 0 .65px currentcolor',
    },
    '&:not(:hover)': !$isActive ? { color: 'none' } : {},
    fontSize: '0.75rem',
    lineHeight: '1.5rem',
    position: 'relative',
    textShadow: $isActive
      ? '0 0 .65px currentcolor, 0 0 .65px currentcolor'
      : 'unset',
    transition: 'all .2s linear',
  },
}));
