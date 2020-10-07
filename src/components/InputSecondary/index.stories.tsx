/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import InputSecondary from '.';

export const Secondary = (): React.ReactElement<any> => {
  const [value, setValue] = React.useState('Input');

  return (
    <InputSecondary
      autoFocus={boolean('Auto Focus?', false)}
      disabled={boolean('Disabled?', false)}
      multiline={boolean('Multiple Lines?', false)}
      onChange={(e: any): void => {
        action('onChange()');

        setValue(e.target.value);
      }}
      placeholder={text('Placeholder', 'Placeholder')}
      size={select(
        'Size',
        {
          Default: 'default',
          Large: 'large',
        },
        'default',
      )}
      type={select(
        'Type',
        {
          Password: 'password',
          Text: 'text',
        },
        'text',
      )}
      value={value}
    />
  );
};

export default {
  component: InputSecondary,
  parameters: {
    info: {
      text: 'This is the secondary variant of the Input component.',
    },
  },
  title: 'Atoms/Input',
};
