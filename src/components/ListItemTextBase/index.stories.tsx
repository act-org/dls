/**
 * @prettier
 */

import * as React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import ListItemTextBase from '.';

export const Base = (): React.ReactElement<any> => (
  <ListItemTextBase
    disableTypography={boolean('Disable Typography?', false)}
    inset={boolean('Inset?', false)}
    primary={text('Primary Text', 'List item primary text')}
    secondary={text('Secondary Text', 'List item secondary text')}
  >
    ListItemText
  </ListItemTextBase>
);

export default {
  component: ListItemTextBase,
  parameters: {
    info: {
      text: 'This is the base variant of the ListItemText component.',
    },
  },
  title: 'Atoms/ListItemText',
};
