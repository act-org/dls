/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

import ButtonPrimary from '.';

export const example = (): React.ReactElement<any> => (
  <ButtonPrimary onClick={action('onClick()')}>
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
