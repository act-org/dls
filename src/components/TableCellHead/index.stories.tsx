/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { noop } from 'lodash';
import { number, select, text } from '@storybook/addon-knobs';

import TableCellHead from '.';

export const head = (): React.ReactElement<any> => (
  <TableCellHead
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
  </TableCellHead>
);

export default {
  component: TableCellHead,
  parameters: {
    info: {
      text: 'This is the head variant of the TableCell component.',
    },
  },
  title: 'Atoms/TableCell',
};
