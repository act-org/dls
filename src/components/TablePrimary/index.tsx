/**
 * @prettier
 */

import * as React from 'react';
import { compact } from 'lodash';
import { Table, TableBody, TableHead } from '@material-ui/core';

import search from '~/helpers/search';
import sort from '~/helpers/sort';
import { SortObject } from '~/types';
import TableCellBody from '~/components/TableCellBody';
import TableCellHead from '~/components/TableCellHead';
import TableContainerPrimary from '~/components/TableContainerPrimary';
import TableRowBase from '~/components/TableRowBase';

interface Cell<T> {
  dataKey: keyof T;
  label: string;
  searchable: boolean;
  sortable: boolean;
  style?: React.CSSProperties;
}

export interface Props<T> {
  cells: Cell<T>[];
  items: T[];
  searchQuery?: string;
  setSortObject: (sortObject: SortObject<T>) => void;
  sortObject: SortObject<T>;
}

const TablePrimary = <T,>({
  cells,
  items: originalItems,
  searchQuery = '',
  setSortObject,
  sortObject,
}: Props<T>): React.ReactElement<any> => {
  // sort items
  let items = originalItems.sort(sort<T>(sortObject));

  // search items
  const searchableKeys = compact(
    cells.map(({ dataKey, searchable }): keyof T | null =>
      searchable ? dataKey : null,
    ),
  );
  if (searchableKeys.length > 0 && searchQuery.length > 0) {
    items = search<T>(items, searchableKeys, searchQuery);
  }

  return (
    <TableContainerPrimary>
      <Table>
        <TableHead>
          <TableRowBase>
            {cells.map(
              (cell): React.ReactElement<any> => (
                <TableCellHead<T>
                  dataKey={cell.dataKey}
                  key={String(cell.dataKey)}
                  setSortObject={setSortObject}
                  sortable={cell.sortable}
                  sortObject={sortObject}
                  style={cell.style}
                >
                  {cell.label}
                </TableCellHead>
              ),
            )}
          </TableRowBase>
        </TableHead>

        <TableBody>
          {items.map(
            (item, i): React.ReactElement<any> => (
              <TableRowBase key={i}>
                {cells.map(
                  (cell): React.ReactElement<any> => (
                    <TableCellBody
                      key={String(cell.dataKey)}
                      style={cell.style}
                    >
                      {item[cell.dataKey]}
                    </TableCellBody>
                  ),
                )}
              </TableRowBase>
            ),
          )}
        </TableBody>
      </Table>
    </TableContainerPrimary>
  );
};

export default TablePrimary;
