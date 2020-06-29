/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { Plus } from 'mdi-material-ui';

import IconButtonPrimary from '.';

export const primary = (): React.ReactElement<any> => (
  <IconButtonPrimary
    disabled={boolean('Disabled?', false)}
    onClick={action('onClick()')}
    size={select(
      'Size',
      {
        Small: 'small',
        Medium: 'medium',
      },
      'medium',
    )}
  >
    <Plus />
  </IconButtonPrimary>
);

export default {
  component: IconButtonPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the IconButton component.',
    },
  },
  title: 'Atoms/IconButton',
};
