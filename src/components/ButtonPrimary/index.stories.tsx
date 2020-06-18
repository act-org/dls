/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';

import ButtonPrimary from '.';

export const minimalExample = (): React.ReactElement<any> => (
  <ButtonPrimary>Click Me</ButtonPrimary>
);

export const withOnclickHandler = (): React.ReactElement<any> => (
  <ButtonPrimary onClick={action('onClick()')}>Click Me</ButtonPrimary>
);

export default {
  component: ButtonPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the ButtonBase component.',
    },
  },
  title: 'ButtonPrimary',
};
