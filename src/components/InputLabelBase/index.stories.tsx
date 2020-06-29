/**
 * @prettier
 */

import * as React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';

import InputLabelBase from '.';

export const Base = (): React.ReactElement<any> => (
  <InputLabelBase
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
    focused={boolean('Focused?', false)}
    required={boolean('Required?', false)}
    variant={select(
      'Variant',
      {
        Filled: 'filled',
        Outlined: 'outlined',
        Standard: 'standard',
      },
      'standard',
    )}
  >
    {text('Label', 'Input Label')}
  </InputLabelBase>
);

export default {
  component: InputLabelBase,
  parameters: {
    info: {
      text: 'This is the base variant of the InputLabel component.',
    },
  },
  title: 'Atoms/InputLabel',
};
