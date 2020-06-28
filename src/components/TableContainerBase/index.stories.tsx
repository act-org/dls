/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';

import TableContainerBase from '.';

export const primary = (): React.ReactElement<any> => <TableContainerBase />;

export default {
  component: TableContainerBase,
  parameters: {
    info: {
      text: 'This is the base variant of the table container component.',
    },
  },
  title: 'Atoms/TableContainer',
};
