/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Plus as PlusIcon } from 'mdi-material-ui';

import ButtonPrimary from '.';

export const primary = (): React.ReactElement<any> => (
  <ButtonPrimary
    disabled={boolean('Disabled?', false)}
    endIcon={boolean('End Icon?', false) ? <PlusIcon /> : undefined}
    onClick={action('onClick()')}
    size={select(
      'Size',
      {
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
      },
      'medium',
    )}
    startIcon={boolean('Start Icon?', true) ? <PlusIcon /> : undefined}
  >
    {text('Text', 'Click Me')}
  </ButtonPrimary>
);

export default {
  component: ButtonPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the button component.',
    },
  },
  title: 'Atoms/Button',
};
