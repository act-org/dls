/**
 * @prettier
 */

import * as React from 'react';

import TableHeadBase from '.';

export const Base = (): React.ReactElement<any> => (
  <TableHeadBase>TableHead</TableHeadBase>
);

export default {
  component: TableHeadBase,
  parameters: {
    info: {
      text: 'This is the base variant of the TableHead component.',
    },
  },
  title: 'Atoms/TableHead',
};
