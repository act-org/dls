/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';

import TableContainerPrimary from '.';

export const primary = (): React.ReactElement<any> => <TableContainerPrimary />;

export default {
  component: TableContainerPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the table container component.',
    },
  },
  title: 'Atoms/TableContainer',
};
