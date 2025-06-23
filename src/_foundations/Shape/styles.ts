/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Grid, { gridClasses } from '@mui/material/Grid';
import Paper, { paperClasses } from '@mui/material/Paper';

import { styled } from '~/helpers/styled';

export const StyledComment = styled('span')(({ theme }) => ({
  color: theme.palette.grey[500],
}));

export const StyledGridItem = styled(Grid)(({ theme }) => ({
  [`&.${gridClasses.root}`]: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: theme.spacing(2),
  },
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  [`&.${paperClasses.root}`]: {
    marginTop: theme.spacing(3),
    overflow: 'hidden',
    padding: theme.spacing(4),
    width: 500,
  },
}));
