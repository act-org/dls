/**
 * @prettier
 */

import * as React from 'react';

import TableRowBase from '.';

export const Base = (): React.ReactElement<any> => (
  <TableRowBase>Table Row</TableRowBase>
);

export default {
  component: TableRowBase,
  parameters: {
    info: {
      text: 'This is the base variant of the TableRow component.',
    },
  },
  title: 'Atoms/TableRow',
};
