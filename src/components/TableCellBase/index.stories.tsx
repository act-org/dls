/**
 * @prettier
 */

import * as React from 'react';
import { text } from '@storybook/addon-knobs';

import TableCellBase from '.';

export const Base = (): React.ReactElement<any> => (
  <TableCellBase>{text('Text', 'Table Cell')}</TableCellBase>
);

export default {
  component: TableCellBase,
  parameters: {
    info: {
      text: 'This is the base variant of the TableCell component.',
    },
  },
  title: 'Atoms/TableCell',
};
