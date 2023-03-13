/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable import/prefer-default-export */

import { TableCell } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';

import { styled } from '@actinc/dls/helpers/styled';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.root}`]: {
    fontSize: '0.888rem',
    fontWeight: Number(theme.typography.fontWeightRegular),
    padding: `${theme.spacing(1)} !important`,
  },
}));
