/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Table, TableBody, TableHead, TableRow } from '@mui/material';
import constant from 'lodash/constant';
import isNumber from 'lodash/isNumber';
import round from 'lodash/round';
import { CSSProperties, ReactElement } from 'react';

import { EmptyState, EmptyStateProps } from '~/components/EmptyState';
import TablePaginationActions from '~/components/TablePaginationActions';
import { SortObject } from '~/types';

import { StyledEmptyStateContainer, StyledTablePagination } from './styles';
import TableCellBody from './TableCellBody';
import TableCellHead from './TableCellHead';
import TableContainer from './TableContainer';

interface Column<T> {
  renderValue: (item: T) => any;
  label?: string;
  sortBy?: string;
  style?: CSSProperties;
}

export interface DataTableProps<T> {
  color?: 'default' | 'primary' | 'secondary';
  columns: Column<T>[];
  currentSortObject: SortObject;
  emptyStateProps?: EmptyStateProps;
  items: T[];
  limit?: number;
  offset?: number;
  onChangeLimit?: (limit: number) => void;
  onChangeOffset?: (offset: number) => void;
  onChangeSort: (sortObject: SortObject) => void;
  rowsPerPageOptions?: number[];
  RowWrapper?: (
    item: T,
    children: ReactElement<unknown>,
  ) => ReactElement<unknown>;
  totalCount?: number;
}

export const DataTable = <T,>({
  color = 'default',
  columns,
  currentSortObject,
  emptyStateProps,
  items,
  limit,
  offset,
  onChangeLimit,
  onChangeOffset,
  onChangeSort,
  rowsPerPageOptions,
  RowWrapper,
  totalCount,
}: DataTableProps<T>): ReactElement<unknown> => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          {columns.map(
            (column, i): ReactElement<unknown> => (
              <TableCellHead
                color={color}
                currentSortObject={currentSortObject}
                key={column.label || i}
                onChangeSort={onChangeSort}
                sortBy={column.sortBy}
                style={column.style}
              >
                {column.label || ''}
              </TableCellHead>
            ),
          )}
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map((item, i): ReactElement<unknown> => {
          /* eslint-disable react/no-array-index-key */
          const children = (
            <TableRow hover key={i}>
              {columns.map(
                (column, y): ReactElement<unknown> => (
                  <TableCellBody key={column.label || y} style={column.style}>
                    {column.renderValue(item)}
                  </TableCellBody>
                ),
              )}
            </TableRow>
          );
          /* eslint-enable react/no-array-index-key */

          if (RowWrapper) {
            return RowWrapper(item, children);
          }

          return children;
        })}

        {items.length > 0 &&
          isNumber(limit) &&
          isNumber(offset) &&
          isNumber(totalCount) && (
            <StyledTablePagination
              ActionsComponent={TablePaginationActions as any}
              count={totalCount}
              labelDisplayedRows={constant('')}
              labelRowsPerPage="Rows Per Page:"
              onPageChange={(_, zeroBasedPage: number): void => {
                if (onChangeOffset) {
                  onChangeOffset(zeroBasedPage * limit);
                }
              }}
              onRowsPerPageChange={(e): void => {
                if (onChangeLimit) {
                  onChangeLimit(Number(e.target.value));
                }

                if (onChangeOffset) {
                  onChangeOffset(0);
                }
              }}
              page={round(offset / limit, 0)}
              rowsPerPage={limit}
              rowsPerPageOptions={rowsPerPageOptions || [25, 50, 100]}
            />
          )}
      </TableBody>
    </Table>

    {items.length === 0 && emptyStateProps && (
      <StyledEmptyStateContainer>
        <EmptyState description="No Results Found" {...emptyStateProps} />
      </StyledEmptyStateContainer>
    )}
  </TableContainer>
);

export default DataTable;
