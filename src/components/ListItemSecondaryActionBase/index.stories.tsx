/**
 * @prettier
 */

import * as React from 'react';

import ListItemSecondaryActionBase from '.';

export const Base = (): React.ReactElement<any> => (
  <ListItemSecondaryActionBase>
    ListItemSecondaryAction
  </ListItemSecondaryActionBase>
);

export default {
  component: ListItemSecondaryActionBase,
  parameters: {
    info: {
      text:
        'This is the base variant of the ListItemSecondaryAction component.',
    },
  },
  title: 'Atoms/ListItemSecondaryAction',
};
