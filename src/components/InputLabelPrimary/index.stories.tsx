/**
 * @prettier
 */

import * as React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';

import InputLabelPrimary from '.';

export const Preview = (): React.ReactElement<unknown> => (
  <InputLabelPrimary
    color={select(
      'Color',
      {
        Primary: 'primary',
        Secondary: 'secondary',
      },
      'primary',
    )}
    disabled={boolean('Disabled?', false)}
    error={boolean('Error?', false)}
    required={boolean('Required?', true)}
    style={{
      width: 300,
    }}
  >
    {text('Label', 'Input Label')}
  </InputLabelPrimary>
);

export default {
  component: InputLabelPrimary,
  parameters: {
    info: {
      text: 'This is a custom InputLabel component.',
    },
  },
  title: 'Deprecated/Atoms/InputLabelPrimary',
};
