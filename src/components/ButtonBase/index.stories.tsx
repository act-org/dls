/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';

import ButtonBase from '.';

export const base = (): React.ReactElement<any> => (
  <ButtonBase onClick={action('onClick()')}>Click Me</ButtonBase>
);

export default {
  component: ButtonBase,
  parameters: {
    info: {
      text: 'This is the primary variant of the Button component.',
    },
  },
  title: 'Atoms/Button',
};
