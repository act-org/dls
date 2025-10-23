/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Grid, { gridClasses, GridProps } from '@mui/material/Grid';
import Typography, { typographyClasses, TypographyProps } from '@mui/material/Typography';

import { styled } from '~/helpers/styled';

export const StyledContainer = styled('div')({
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
});

export const StyledTypographyDescription = styled(Typography)<
  TypographyProps & {
    $withoutTitle: boolean;
  }
>(({ $withoutTitle, theme }) => ({
  [`&.${typographyClasses.root}`]: {
    marginBottom: theme.spacing(2),
    marginTop: $withoutTitle ? theme.spacing(2) : theme.spacing(0.5),
    maxWidth: 350,
  },
}));

export const StyledTypographyTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  [`&.${typographyClasses.root}`]: {
    // Use one font weight higher than `body1` (varies from theme to theme)
    fontWeight: Number(theme.typography.body1.fontWeight) + 100,
    // Scale the font to be 20% larger than `body1` (also varies from theme to theme)
    transform: 'scale(1.2)',
  },
}));

export const StyledGridContainer = styled(Grid)<GridProps>(({ theme }) => ({
  [`&.${gridClasses.container}`]: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    maxWidth: 300,
  },
}));

export const StyledGridItem = styled(Grid)<GridProps>({
  [`&.${gridClasses.root}`]: {
    display: 'flex',
  },
});
