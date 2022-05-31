/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { TableCellProps } from '@mui/material';

import { StyledTableCell } from './styles';

export type TableCellBodyProps = TableCellProps;

export const TableCellBody: React.FC<TableCellBodyProps> = ({
  classes: classesProp,
  ...otherProps
}: TableCellBodyProps): React.ReactElement<unknown> => (
  <StyledTableCell
    classes={classesProp}
    component="td"
    padding="none"
    {...otherProps}
  />
);

export default TableCellBody;
