/**
 * @prettier
 */

import * as React from 'react';

import ListItemIconBase from '.';

export const Base = (): React.ReactElement<any> => (
  <ListItemIconBase>ListItemIcon</ListItemIconBase>
);

export default {
  component: ListItemIconBase,
  parameters: {
    info: {
      text: 'This is the base variant of the ListItemIcon component.',
    },
  },
  title: 'Atoms/ListItemIcon',
};
