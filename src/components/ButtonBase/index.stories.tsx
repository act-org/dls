/**
 * @prettier
 */

import * as React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

import ButtonBase from '.';

export const example = (): React.ReactElement<any> => (
  <ButtonBase>{text('children', 'Click Me')}</ButtonBase>
);

export default {
  component: ButtonBase,
  decorators: [withKnobs],
  parameters: {
    info: {
      text:
        'This is the base button component. It is not intended to be used directly.',
    },
  },
  title: 'ButtonBase',
};
