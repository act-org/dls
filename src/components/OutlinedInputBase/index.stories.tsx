/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import OutlinedInputBase from '.';

export const Base = (): React.ReactElement<any> => {
  const [value, setValue] = React.useState('OutlinedInput');

  return (
    <OutlinedInputBase
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
  component: OutlinedInputBase,
  parameters: {
    info: {
      text: 'This is the base variant of the OutlinedInput component.',
    },
  },
  title: 'Atoms/OutlinedInput',
};
