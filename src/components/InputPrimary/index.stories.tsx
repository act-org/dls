/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';

import InputPrimary from '.';

export const Preview = (): React.ReactElement<unknown> => {
  const [value, setValue] = React.useState('Input');

  return (
    <InputPrimary
      autoFocus={false}
      disabled={false}
      multiline={false}
      onChange={(e: any): void => {
        action('onChange()');

        setValue(e.target.value);
      }}
      placeholder='Placeholder'
      value={value}
    />
  );
};

export default {
  component: InputPrimary,
  parameters: {
    info: {
      text: 'This is a custom Input component.',
    },
  },
  title: 'Deprecated/Atoms/InputPrimary',
};
