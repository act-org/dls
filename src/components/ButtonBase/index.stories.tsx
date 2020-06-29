/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import ButtonBase from '.';

export const base = (): React.ReactElement<any> => (
  <ButtonBase onClick={action('onClick()')}>
    {text('Text', 'Click Me')}
  </ButtonBase>
);

export default {
  component: ButtonBase,
  parameters: {
    info: {
      text: 'This is the base variant of the Button component.',
    },
  },
  title: 'Atoms/Button',
};
