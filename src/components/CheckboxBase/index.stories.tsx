/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';

import CheckboxBase from '.';

export const Base = (): React.ReactElement<any> => (
  <CheckboxBase
    checked={boolean('Checked?', false)}
    color={select(
      'Color',
      {
        Primary: 'primary',
        Secondary: 'secondary',
      },
      'primary',
    )}
    disabled={boolean('Disabled?', false)}
    onChange={action('onChange()')}
    size={select(
      'Size',
      {
        Medium: 'medium',
        Small: 'small',
      },
      'medium',
    )}
  />
);

export default {
  component: CheckboxBase,
  parameters: {
    info: {
      text: 'This is the base variant of the Checkbox component.',
    },
  },
  title: 'Atoms/Checkbox',
};
