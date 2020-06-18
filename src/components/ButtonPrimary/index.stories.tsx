/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import ButtonPrimary from '.';

export const example = (): React.ReactElement<any> => (
  <ButtonPrimary
    disabled={boolean('disabled', false)}
    fullWidth={boolean('fullWidth', false)}
    onClick={action('onClick()')}
    size={select(
      'size',
      {
        small: 'small',
        medium: 'medium',
        large: 'large',
      },
      'medium',
    )}
  >
    {text('children', 'Click Me')}
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
