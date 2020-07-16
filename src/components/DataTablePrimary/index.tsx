/**
 * @prettier
 */

import * as React from 'react';

import EmptyStatePrimary, {
  Props as EmptyStatePrimaryProps,
} from '~/components/EmptyStatePrimary';
import { SortObject } from '~/types';
import TableBase from '~/components/TableBase';
import TableBodyBase from '~/components/TableBodyBase';
import TableCellBody from '~/components/TableCellBody';
import TableCellHead from '~/components/TableCellHead';
import TableContainerPrimary from '~/components/TableContainerPrimary';
import TableHeadBase from '~/components/TableHeadBase';
import TableRowBase from '~/components/TableRowBase';

import useStyles from './styles';

interface Column<T> {
  renderValue: (item: T) => any;
  label: string;
  sortBy?: string;
  style?: React.CSSProperties;
}

export interface Props<T> {
  columns: Column<T>[];
  currentSortObject: SortObject;
  emptyStateProps: EmptyStatePrimaryProps;
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
      <TableBase>
        <TableHeadBase>
          <TableRowBase>
            {columns.map(
              (column): React.ReactElement<any> => (
                <TableCellHead
                  currentSortObject={currentSortObject}
                  key={column.label}
                  onChangeSort={onChangeSort}
                  sortBy={column.sortBy}
                  style={column.style}
                >
                  {column.label}
                </TableCellHead>
              ),
            )}
          </TableRowBase>
        </TableHeadBase>

        <TableBodyBase>
          {items.map(
            (item, i): React.ReactElement<any> => {
              /* eslint-disable react/no-array-index-key */
              const children = (
                <TableRowBase hover key={i}>
                  {columns.map(
                    (column): React.ReactElement<any> => (
                      <TableCellBody key={column.label} style={column.style}>
                        {column.renderValue(item)}
                      </TableCellBody>
                    ),
                  )}
                </TableRowBase>
              );
              /* eslint-enable react/no-array-index-key */

              if (RowWrapper) {
                return RowWrapper(item, children);
              }

              return children;
            },
          )}
        </TableBodyBase>
      </TableBase>

      {items.length === 0 && emptyStateProps && (
        <div className={classes.emptyStateContainer}>
          <EmptyStatePrimary
            description="No Results Found"
            {...emptyStateProps}
          />
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
