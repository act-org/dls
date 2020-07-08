/**
 * @prettier
 */

import * as React from 'react';

import GridBase from '.';

export const Base = (): React.ReactElement<any> => (
  <GridBase>Grid Base</GridBase>
);

export default {
  component: GridBase,
  parameters: {
    info: {
      text: 'This is the base variant of the Grid component.',
    },
  },
  title: 'Layouts/Grid',
};
