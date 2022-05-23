/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { TablePagination, tablePaginationClasses } from '@mui/material';

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
