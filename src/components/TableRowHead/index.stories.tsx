/**
 * @prettier
 */

import * as React from 'react';

import TableRowHead from '.';

export const Head = (): React.ReactElement<any> => (
  <TableRowHead>Table Row</TableRowHead>
);

export default {
  component: TableRowHead,
  parameters: {
    info: {
      text: 'This is the head variant of the TableRow component.',
    },
  },
  title: 'Atoms/TableRow',
};
