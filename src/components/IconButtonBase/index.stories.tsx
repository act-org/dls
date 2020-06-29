/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Plus } from 'mdi-material-ui';

import IconButtonBase from '.';

export const base = (): React.ReactElement<any> => (
  <IconButtonBase onClick={action('onClick()')}>
    <Plus />
  </IconButtonBase>
);

export default {
  component: IconButtonBase,
  parameters: {
    info: {
      text: 'This is the base variant of the IconButton component.',
    },
  },
  title: 'Atoms/IconButton',
};
