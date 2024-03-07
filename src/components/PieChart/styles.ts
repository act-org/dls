/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Typography, TypographyProps } from '@mui/material';
import Grid, { gridClasses } from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import { VariantType } from '~/types';

type StyledTypographyType = TypographyProps & {
  hasHighlight?: boolean;
  variantSize?: VariantType;
};

export const StyledTypography = styled(Typography)<StyledTypographyType>(
  ({ hasHighlight, theme, variantSize }) => ({
    color: theme.palette.secondary.dark,
    fontWeight: Number(theme.typography.fontWeightBold),
    marginTop: variantSize ? theme.spacing(1.5) : 0,
    paddingRight: hasHighlight ? theme.spacing(30) : 0,
    paddingTop: hasHighlight ? theme.spacing(3) : 0,
  }),
);

export const StyledGridTitle = styled(Grid)(({ theme }) => ({
  [`&.${gridClasses.root}`]: {
    paddingTop: theme.spacing(3),
  },
}));

export const StyledGridBody = styled(Grid)(({ theme }) => ({
  [`&.${gridClasses.root}`]: {
    paddingTop: theme.spacing(2),
  },
}));
