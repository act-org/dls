import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SearchBar, SearchBarProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';

export const Template: Story<SearchBarProps> = args => {
  return <SearchBar
    {...args} 
  />;
};

export const argTypes = PlayGround({
  autoFocus: {},
  disabled: {},
  error: {},
  placeholder: {},
  onChange: {action: 'onChange'},
  value: {type: 'string'}

}, SearchBar);
