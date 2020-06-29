/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import InputPrimary from '.';

export const Primary = (): React.ReactElement<any> => {
  const [value, setValue] = React.useState('Input');

  return (
    <InputPrimary
      autoFocus={boolean('Auto Focus?', false)}
      disabled={boolean('Disabled?', false)}
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
  component: InputPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the Input component.',
    },
  },
  title: 'Atoms/Input',
};
