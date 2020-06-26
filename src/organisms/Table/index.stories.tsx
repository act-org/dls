/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
// import { action } from '@storybook/addon-actions';
// import { boolean, select, text } from '@storybook/addon-knobs';
import { BubbleChart } from '@material-ui/icons';
import moment from 'moment';
import { Table, TableBody, TableHead, TableRow } from '@material-ui/core';

import SORT_DIRECTION_TYPES from '~/constants/sortDirectionTypes';
import { SortObject } from '~/types';
import TableBodyCell from '~/components/TableBodyCell';
import TableContainer from '~/components/TableContainer';
import TableEmptyState from '~/components/TableEmptyState';
import TableHeadCell from '~/components/TableHeadCell';
import TableHeadRow from '~/components/TableHeadRow';

import RenderActions from './RenderActions';
import type { Thing, ThingExtended } from './types';

const TABLE_CELLS = [
  {
    dataKey: 'name' as keyof ThingExtended,
    label: 'Name',
    searchable: true,
    sortable: true,
    style: {
      width: 100,
    },
  },
  {
    dataKey: 'createdAt' as keyof ThingExtended,
    displayValueFn: (thing: ThingExtended): string =>
      moment(new Date(thing.createdAt)).fromNow(),
    label: 'Created',
    searchable: false,
    sortable: true,
    style: {
      width: 125,
    },
  },
  {
    dataKey: 'actions' as keyof ThingExtended,
    label: 'Actions',
    searchable: false,
    sortable: false,
    style: {
      width: 300,
    },
  },
];

const THINGS: ThingExtended[] = Array(...Array(5))
  .map(
    (_, i): Thing => ({
      createdAt: new Date(`01/${i + 1}/2020`),
      id: i + 1,
      name: `Thing ${i + 1}`,
    }),
  )
  .map(
    (thing): ThingExtended => ({
      ...thing,
      actions: <RenderActions thing={thing} />,
    }),
  );

export const Things: React.FC = (): React.ReactElement<any> => {
  const [sortObject, setSortObject] = React.useState<SortObject<any>>({
    dataKey: 'name',
    direction: SORT_DIRECTION_TYPES.ASC,
  });

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableHeadRow>
            {TABLE_CELLS.map(
              (tableCell): React.ReactElement<any> => (
                <TableHeadCell<ThingExtended>
                  dataKey={tableCell.dataKey}
                  key={tableCell.dataKey}
                  setSortObject={setSortObject}
                  sortable={tableCell.sortable}
                  sortObject={sortObject}
                  style={tableCell.style}
                >
                  {tableCell.label}
                </TableHeadCell>
              ),
            )}
          </TableHeadRow>
        </TableHead>

        <TableBody>
          {THINGS.map(
            (thing): React.ReactElement<any> => (
              <TableRow hover key={thing.id}>
                {TABLE_CELLS.map(
                  (tableCell): React.ReactElement<any> => (
                    <TableBodyCell<ThingExtended>
                      dataKey={tableCell.dataKey}
                      key={tableCell.dataKey}
                      sortObject={sortObject}
                      style={tableCell.style}
                    >
                      {tableCell.displayValueFn
                        ? tableCell.displayValueFn(thing)
                        : thing[tableCell.dataKey]}
                    </TableBodyCell>
                  ),
                )}
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>

      {THINGS.length === 0 && (
        <TableEmptyState description="No Things Found" Icon={BubbleChart} />
      )}
    </TableContainer>
  );
};

export default {
  component: Things,
  parameters: {
    info: {
      text: 'This is the primary variant of the button component.',
    },
  },
  title: 'Organisms/Table',
};
