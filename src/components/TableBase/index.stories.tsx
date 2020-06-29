/**
 * @prettier
 */

import * as React from 'react';
import { select } from '@storybook/addon-knobs';

import TableBase from '.';

export const Base = (): React.ReactElement<any> => (
  <TableBase
    size={select(
      'Size',
      {
        Medium: 'medium',
        Small: 'small',
      },
      'medium',
    )}
  >
    Table
  </TableBase>
);

export default {
  component: TableBase,
  parameters: {
    info: {
      text: 'This is the base variant of the Table component.',
    },
  },
  title: 'Atoms/Table',
};
