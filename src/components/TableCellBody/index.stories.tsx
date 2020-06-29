/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';

import TableCellBody from '.';

export const Body = (): React.ReactElement<any> => (
  <TableCellBody
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
    {text('Text', 'Table Cell')}
  </TableCellBody>
);

export default {
  component: TableCellBody,
  parameters: {
    info: {
      text: 'This is the body variant of the TableCell component.',
    },
  },
  title: 'Atoms/TableCell',
};
