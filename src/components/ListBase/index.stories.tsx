/**
 * @prettier
 */

import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';

import ListBase from '.';

export const Base = (): React.ReactElement<any> => (
  <ListBase
    dense={boolean('Dense?', false)}
    disablePadding={boolean('Disable Padding?', false)}
  >
    List
  </ListBase>
);

export default {
  component: ListBase,
  parameters: {
    info: {
      text: 'This is the base variant of the List component.',
    },
  },
  title: 'Atoms/List',
};
