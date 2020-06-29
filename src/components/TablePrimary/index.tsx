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

interface Cell {
  dataKey: string;
  displayValueFn?: (item: any) => void;
  label: string;
  searchable: boolean;
  sortable: boolean;
  style?: React.CSSProperties;
}

export interface Props {
  cells: Cell[];
  items: any[];
  searchQuery?: string;
  setSortObject: (sortObject: SortObject) => void;
  sortObject: SortObject;
}

const TablePrimary: React.FC<Props> = ({
  cells,
  items: originalItems,
  searchQuery = '',
  setSortObject,
  sortObject,
}: Props): React.ReactElement<any> => {
  // sort items
  let items = originalItems.sort(sort(sortObject));

  // search items
  const searchableKeys = compact(
    cells.map(({ dataKey, searchable }): string | null =>
      searchable ? dataKey : null,
    ),
  );
  if (searchableKeys.length > 0 && searchQuery.length > 0) {
    items = search(items, searchableKeys, searchQuery);
  }

  return (
    <TableContainerPrimary>
      <Table>
        <TableHead>
          <TableRowBase>
            {cells.map(
              (cell): React.ReactElement<any> => (
                <TableCellHead
                  dataKey={cell.dataKey}
                  key={cell.dataKey}
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
              // eslint-disable-next-line react/no-array-index-key
              <TableRowBase key={i}>
                {cells.map(
                  (cell): React.ReactElement<any> => (
                    <TableCellBody key={cell.dataKey} style={cell.style}>
                      {cell.displayValueFn
                        ? cell.displayValueFn(item)
                        : item[cell.dataKey]}
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
