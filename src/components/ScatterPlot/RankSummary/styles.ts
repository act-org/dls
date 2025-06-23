/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Box,
  BoxProps,
  IconButton,
  Table,
  TableCell,
  TableContainer,
  TableContainerProps,
  TableRow,
} from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Color from 'color';

type StyledBoxType = BoxProps & {
  showSummary?: boolean;
};

export const StyledTableContainer = styled(TableContainer)<TableContainerProps>(
  () => ({
    maxHeight: '100%',
    maxWidth: 250,
    overflowX: 'hidden',
    overflowY: 'auto',
  }),
);

export const StyledTable = styled(Table)(({ theme }) => ({
  backgroundColor: blue[50],
  borderSpacing: theme.spacing(0),
  padding: theme.spacing(1),
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: grey[800],
  opacity: 1,
  padding: theme.spacing(0.75, 1, 0.75, 2),
}));

export const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-child(even):hover': {
    backgroundColor: `${blue[50]} !important`,
  },
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'flex-start',
}));

export const StyledBox = styled(Box)<StyledBoxType>(
  ({ showSummary, theme }) => ({
    height: '85%',
    position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(5),
    transition: '0.5s',
    width: showSummary ? 250 : 0,
  }),
);

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  '&:hover': {
    background: Color(theme.palette.secondary.main).darken(0.25).rgb().string(),
  },
  background: theme.palette.secondary.main,
  border: `2px solid ${theme.palette.secondary.main}`,
  color: theme.palette.common.white,
  height: theme.spacing(4),
  left: theme.spacing(-2.25),
  position: 'absolute',
  top: theme.spacing(1.75),
  width: theme.spacing(4),
  zIndex: 100,
}));
