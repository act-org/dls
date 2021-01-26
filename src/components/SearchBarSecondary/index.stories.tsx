import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SearchBarSecondary, { Props } from '.';

export const Secondary: Story<Props> = args => {
  const [value, setValue] = React.useState('');
  return <SearchBarSecondary
    onChange= {(e: any): void => {
      setValue(e.target.value);
    }}
    value
    {...args} 
  />;
};

Secondary.args = {
  placeholder: 'Search...',
  size: 'default'
};

export default {
  component: SearchBarSecondary,
  parameters: {
    argTypes: {
      size: {
        control: {
          type: 'select',
          options: ['default', 'large']
        }
      }
    }
  },
  title: 'Molecules/SearchBar',
} as Meta<Props>;
