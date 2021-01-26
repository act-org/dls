import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SearchBarPrimary, { Props } from '.';

export const Primary: Story<Props> = args => {
  const [value, setValue] = React.useState('');
  return <SearchBarPrimary
    onChange= {(e: any): void => {
      setValue(e.target.value);
    }}
    value
    {...args} 
  />;
};

Primary.args = {
  placeholder: 'Search...',
};

export default {
  component: SearchBarPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the SearchBar component.',
    },
  },
  title: 'Molecules/SearchBar',
} as Meta<Props>;
