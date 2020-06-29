/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import SearchBarPrimary from '.';

export const Primary = (): React.ReactElement<any> => {
  const [value, setValue] = React.useState('');

  return (
    <SearchBarPrimary
      onChange={(e: any): void => {
        action('onChange()');

        setValue(e.target.value);
      }}
      placeholder={text('Placeholder', 'Search...')}
      value={value}
    />
  );
};

export default {
  component: SearchBarPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the SearchBar component.',
    },
  },
  title: 'Molecules/SearchBar',
};
