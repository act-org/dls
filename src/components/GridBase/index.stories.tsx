/**
 * @prettier
 */

import * as React from 'react';

import GridBase from '.';

export const base = (): React.ReactElement<any> => (
  <GridBase>
    <div>Grid Base</div>
  </GridBase>
);

export default {
  component: GridBase,
  parameters: {
    info: {
      text: 'This is the base variant of the Grid component.',
    },
  },
  title: 'Atoms/Grid',
};
