/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Typography, TypographyProps } from '@mui/material';
import Grid, { gridClasses } from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import DLS_COMPONENT_NAMES from '~/constants/DLS_COMPONENT_NAMES';
import DLS_COMPONENT_SLOT_NAMES from '~/constants/DLS_COMPONENT_SLOT_NAMES';
import { VariantType } from '~/types';

type StyledTypographyType = TypographyProps & {
  hasHighlight?: boolean;
  variantSize?: VariantType;
};

export const StyledTypography = styled(Typography, {
  name: DLS_COMPONENT_NAMES.PIE_CHART,
  slot: DLS_COMPONENT_SLOT_NAMES[DLS_COMPONENT_NAMES.PIE_CHART].TITLE_TEXT,
})<StyledTypographyType>(({ hasHighlight, theme, variantSize }) => ({
  marginTop: variantSize ? theme.spacing(1.5) : 0,
  paddingRight: hasHighlight ? theme.spacing(30) : 0,
  paddingTop: hasHighlight ? theme.spacing(3) : 0,
}));

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
