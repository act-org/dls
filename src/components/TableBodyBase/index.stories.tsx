/**
 * @prettier
 */

import * as React from 'react';

import TableBodyBase from '.';

export const Base = (): React.ReactElement<any> => (
  <TableBodyBase>TableBody</TableBodyBase>
);

export default {
  component: TableBodyBase,
  parameters: {
    info: {
      text: 'This is the base variant of the TableBody component.',
    },
  },
  title: 'Atoms/TableBody',
};
