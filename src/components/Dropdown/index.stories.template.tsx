import { StoryFn } from '@storybook/react';
import * as React from 'react';

import { Playground } from '~/helpers/playground';

import Dropdown, { IDropdownOption } from '.';

const OPTIONS = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
  { label: 'Option 6', value: '6' },
];

export const Template: StoryFn = args => {
  const [value, setValue] = React.useState<IDropdownOption>();

  return (
    <Dropdown
      idSubstring="test"
      onChange={(newValue): void => {
        setValue(newValue);
      }}
      options={OPTIONS}
      value={value}
      {...args}
    />
  );
};

export const argTypes = Playground(
  {
    containerProps: {},
    onClickStop: {},
  },
  Dropdown,
);
