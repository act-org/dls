/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { Plus as PlusIcon } from 'mdi-material-ui';

import ButtonPrimary from '.';

export const example = (): React.ReactElement<any> => (
  <ButtonPrimary
    disabled={boolean('Disabled?', false)}
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
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'This is the primary variant of the ButtonBase component.',
    },
  },
  title: 'ButtonPrimary',
};
