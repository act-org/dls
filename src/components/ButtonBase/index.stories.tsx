/**
 * @prettier
 */

import * as React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import ButtonBase from '.';

export const example = (): React.ReactElement<any> => (
  <ButtonBase>{text('children', 'Click Me')}</ButtonBase>
);

export default {
  component: ButtonBase,
  decorators: [withA11y, withKnobs],
  parameters: {
    info: {
      text:
        'This is the base button component. It is not intended to be used directly.',
    },
  },
  title: 'ButtonBase',
};
