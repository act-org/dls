/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TableCellProps } from '@mui/material';
import { FC, ReactElement } from 'react';

import { StyledTableCell } from './styles';

export type TableCellBodyProps = TableCellProps;

export const TableCellBody: FC<TableCellBodyProps> = ({
  classes: classesProp,
  ...otherProps
}: TableCellBodyProps): ReactElement<unknown> => (
  <StyledTableCell
    classes={classesProp}
    component="td"
    padding="none"
    {...otherProps}
  />
);

export default TableCellBody;
