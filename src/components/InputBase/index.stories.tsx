/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import InputBase from '.';

export const Base = (): React.ReactElement<any> => {
  const [value, setValue] = React.useState('Input');

  return (
    <InputBase
      autoFocus={boolean('Auto Focus?', false)}
      color={select(
        'Color',
        {
          Primary: 'primary',
          Secondary: 'secondary',
        },
        'primary',
      )}
      disabled={boolean('Disabled?', false)}
      disableUnderline={boolean('Disable Underline?', false)}
      multiline={boolean('Multiple Lines?', false)}
      onChange={(e: any): void => {
        action('onChange()');

        setValue(e.target.value);
      }}
      placeholder={text('Placeholder', 'Placeholder')}
      value={value}
    />
  );
};

export default {
  component: InputBase,
  parameters: {
    info: {
      text: 'This is the base variant of the Input component.',
    },
  },
  title: 'Atoms/Input',
};
