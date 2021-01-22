/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import Plus from '~/icons/Plus';

import ButtonSecondary from '.';

export const Secondary = (): React.ReactElement<any> => (
  <ButtonSecondary
    disabled={boolean('Disabled?', false)}
    endIcon={boolean('End Icon?', false) ? <Plus /> : undefined}
    onClick={action('onClick()')}
    size={select(
      'Size',
      {
        Small: 'small',
        Default: 'default',
        Large: 'large',
      },
      'default',
    )}
    startIcon={boolean('Start Icon?', true) ? <Plus /> : undefined}
    variant={select(
      'Variant',
      {
        Contained: 'contained',
        Outlined: 'outlined',
        Text: 'text',
      },
      'outlined',
    )}
  >
    {text('Text', 'Click Me')}
  </ButtonSecondary>
);

export default {
  component: ButtonSecondary,
  parameters: {
    info: {
      text: 'This is the secondary variant of the Button component.',
    },
  },
  title: 'Deprecated/Atoms/Button',
};
