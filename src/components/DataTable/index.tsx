/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';

import { EmptyState, EmptyStateProps } from '~/components/EmptyState';
import { SortObject } from '~/types';
import TablePaginationActions from '~/components/TablePaginationActions';

import TableCellBody from './TableCellBody';
import TableCellHead from './TableCellHead';
import TableContainer from './TableContainer';

import useStyles from './styles';

interface Column<T> {
  renderValue: (item: T) => any;
  label?: string;
  sortBy?: string;
  style?: React.CSSProperties;
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
  RowWrapper?: (
    item: T,
    children: React.ReactElement<any>,
  ) => React.ReactElement<any>;
  totalCount?: number;
}

export const DataTable = <T,>({
  color,
  columns,
  currentSortObject,
  emptyStateProps,
  items,
  limit,
  offset,
  onChangeLimit,
  onChangeOffset,
  onChangeSort,
  RowWrapper,
  totalCount,
}: DataTableProps<T>): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(
              (column, i): React.ReactElement<any> => (
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
          {items.map((item, i): React.ReactElement<any> => {
            /* eslint-disable react/no-array-index-key */
            const children = (
              <TableRow hover key={i}>
                {columns.map(
                  (column, y): React.ReactElement<any> => (
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
              <TablePagination
                ActionsComponent={TablePaginationActions as any}
                classes={{
                  root: classes.tablePaginationRoot,
                }}
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
                }}
                page={round(offset / limit, 0)}
                rowsPerPage={limit}
                rowsPerPageOptions={[25, 50, 100]}
              />
            )}
        </TableBody>
      </Table>

      {items.length === 0 && emptyStateProps && (
        <div className={classes.emptyStateContainer}>
          <EmptyState description="No Results Found" {...emptyStateProps} />
        </div>
      )}
    </TableContainer>
  );
};

DataTable.defaultProps = {
  color: 'default',
  limit: undefined,
  offset: undefined,
  onChangeLimit: undefined,
  onChangeOffset: undefined,
  RowWrapper: undefined,
  totalCount: undefined,
};

export default DataTable;
