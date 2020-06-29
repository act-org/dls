/**
 * @prettier
 */

import * as React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';

import InputLabelPrimary from '.';

export const Primary = (): React.ReactElement<any> => (
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
      text: 'This is the primary variant of the InputLabel component.',
    },
  },
  title: 'Atoms/InputLabel',
};
