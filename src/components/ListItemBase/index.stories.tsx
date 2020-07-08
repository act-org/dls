/**
 * @prettier
 */

import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';

import ListItemBase from '.';

export const Base = (): React.ReactElement<any> => (
  <ListItemBase
    alignItems={select(
      'Align Items',
      {
        Center: 'center',
        FlexStart: 'flex-start',
      },
      'center',
    )}
    autoFocus={boolean('Auto Focus?', false)}
    button={boolean('Clickable?', false) as any}
    dense={boolean('Dense?', false)}
    disabled={boolean('Disabled?', false)}
    disableGutters={boolean('Disable Gutters?', false)}
    divider={boolean('Add Divider?', false)}
    selected={boolean('Selected?', false)}
  >
    ListItem
  </ListItemBase>
);

export default {
  component: ListItemBase,
  parameters: {
    info: {
      text: 'This is the base variant of the ListItem component.',
    },
  },
  title: 'Atoms/ListItem',
};
