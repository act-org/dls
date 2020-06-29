/**
 * @prettier
 */

import * as React from 'react';

import TablePrimary from '.';

export const Primary = (): React.ReactElement<any> => <TablePrimary />;

export default {
  component: TablePrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the Table component.',
    },
  },
  title: 'Organisms/Table',
};
