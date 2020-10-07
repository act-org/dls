/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';

import SearchBarSecondary from '.';

export const Secondary = (): React.ReactElement<any> => {
  const [value, setValue] = React.useState('');

  return (
    <SearchBarSecondary
      onChange={(e: any): void => {
        action('onChange()');

        setValue(e.target.value);
      }}
      placeholder={text('Placeholder', 'Search...')}
      size={select(
        'Size',
        {
          Default: 'default',
          Large: 'large',
        },
        'default',
      )}
      value={value}
    />
  );
};

export default {
  component: SearchBarSecondary,
  parameters: {
    info: {
      text: 'This is the secondary variant of the SearchBar component.',
    },
  },
  title: 'Molecules/SearchBar',
};
