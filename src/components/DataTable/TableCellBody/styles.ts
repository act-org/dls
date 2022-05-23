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
import { TableCell, tableCellClasses } from '@mui/material';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.root}`]: {
    fontSize: '0.888rem',
    fontWeight: Number(theme.typography.fontWeightRegular),
    padding: `${theme.spacing(1)} !important`,
  },
}));
