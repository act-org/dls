/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Table, TableBody, TableHead, TableRow } from '@material-ui/core';

import { EmptyState, EmptyStateProps } from '~/components/EmptyState';
import { SortObject } from '~/types';
import TableCellBody from '~/components/TableCellBody';
import TableCellHead from '~/components/TableCellHead';
import TableContainerPrimary from '~/components/TableContainerPrimary';

import useStyles from './styles';

interface Column<T> {
  renderValue: (item: T) => any;
  label?: string;
  sortBy?: string;
  style?: React.CSSProperties;
}

export interface Props<T> {
  columns: Column<T>[];
  currentSortObject: SortObject;
  emptyStateProps: EmptyStateProps;
  items: T[];
  onChangeSort: (sortObject: SortObject) => void;
  RowWrapper?: (
    item: T,
    children: React.ReactElement<any>,
  ) => React.ReactElement<any>;
}

const DataTablePrimary = <T,>({
  columns,
  currentSortObject,
  emptyStateProps,
  items,
  onChangeSort,
  RowWrapper,
}: Props<T>): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <TableContainerPrimary>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(
              (column, i): React.ReactElement<any> => (
                <TableCellHead
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
          {items.map(
            (item, i): React.ReactElement<any> => {
              /* eslint-disable react/no-array-index-key */
              const children = (
                <TableRow hover key={i}>
                  {columns.map(
                    (column, y): React.ReactElement<any> => (
                      <TableCellBody
                        key={column.label || y}
                        style={column.style}
                      >
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
            },
          )}
        </TableBody>
      </Table>

      {items.length === 0 && emptyStateProps && (
        <div className={classes.emptyStateContainer}>
          <EmptyState description="No Results Found" {...emptyStateProps} />
        </div>
      )}
    </TableContainerPrimary>
  );
};

// eslint-disable-next-line immutable/no-mutation
DataTablePrimary.defaultProps = {
  RowWrapper: undefined,
};

export default DataTablePrimary;
