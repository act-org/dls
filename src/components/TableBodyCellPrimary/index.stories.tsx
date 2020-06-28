/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';

import TableBodyCellPrimary from '.';

export const primary = (): React.ReactElement<any> => (
  <TableBodyCellPrimary
    dataKey="itemKey"
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
  >
    {text('Text', 'Cell')}
  </TableBodyCellPrimary>
);

export default {
  component: TableBodyCellPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the table body cell component.',
    },
  },
  title: 'Atoms/TableBodyCell',
};
