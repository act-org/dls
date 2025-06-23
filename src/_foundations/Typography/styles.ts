/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Divider, { dividerClasses } from '@mui/material/Divider';
import Grid, { gridClasses } from '@mui/material/Grid';

import { styled } from '~/helpers/styled';

export const StyledCode = styled('code')({
  display: 'block',
});

export const StyledGridItem = styled(Grid)(({ theme }) => ({
  [`&.${gridClasses.root}`]: {
    alignItems: 'center',
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
}));

export const StyledGridItemTypography = styled(Grid)(({ theme }) => ({
  [`&.${gridClasses.root}`]: {
    alignItems: 'center',
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    padding: theme.spacing(2),
  },
}));

export const StyledGridContainerInfo = styled(Grid)({
  [`&.${gridClasses.container}`]: {
    alignItems: 'center',
    display: 'flex',
  },
});

export const StyledDivider = styled(Divider)(({ theme }) => ({
  [`&.${dividerClasses.root}`]: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
}));
