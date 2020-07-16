/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { text } from '@storybook/addon-knobs';

import TableCellBody from '.';

export const Body = (): React.ReactElement<any> => (
  <TableCellBody>{text('Text', 'Table Cell')}</TableCellBody>
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
