/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { noop } from 'lodash';
import { number, select, text } from '@storybook/addon-knobs';

import TableHeadCell from '.';

export const primary = (): React.ReactElement<any> => (
  <TableHeadCell
    dataKey="itemKey"
    setSortObject={noop}
    sortable
    sortObject={{
      dataKey: 'itemKey',
      direction: select(
        'Sort Direction',
        {
          Ascending: 'ASC',
          Descending: 'DESC',
        },
        'ASC',
      ),
    }}
    style={{
      width: number('Style:Width', 300),
    }}
  >
    {text('Text', 'Header')}
  </TableHeadCell>
);

export default {
  component: TableHeadCell,
  parameters: {
    info: {
      text: 'This is the primary variant of the TableBodyCell component.',
    },
  },
  title: 'Atoms/TableHeadCell',
};
