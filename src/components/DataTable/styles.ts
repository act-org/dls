/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { grey } from '@mui/material/colors';
import TablePagination, { tablePaginationClasses } from '@mui/material/TablePagination';

import { styled } from '~/helpers/styled';

export const StyledEmptyStateContainer = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  paddingTop: theme.spacing(2.5),
  width: '100%',
}));

export const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
  [`&.${tablePaginationClasses.root}`]: {
    backgroundColor: grey[50],
    fontSize: theme.typography.body2.fontSize,
  },
}));
