import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { Playground } from '~/helpers/playground';

import Dropdown, { DropdownProps, IDropdownOption } from '.';


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
      onChange={(newValue): void => {
        setValue(newValue);
      }}
      options={OPTIONS}
      value={value}
      {...args}
    />
  );
};

export default {
  args: {},
  argTypes: Playground(
    {},
    Dropdown,
  ),
  component: Template,
  tags: ['autodocs'],
  title: 'Molecules / Dropdown',
} as Meta<DropdownProps>;

export const Default: StoryObj<DropdownProps> = {
  args: {},
};

export const WithLabel: StoryObj<DropdownProps> = {
  args: {
    label: 'My Dropdown',
  },
};

export const Required: StoryObj<DropdownProps> = {
  args: {
    label: 'My Dropdown',
    required: true,
  },
};

export const Disabled: StoryObj<DropdownProps> = {
  args: {
    disabled: true,
  },
};

export const WithError: StoryObj<DropdownProps> = {
  args: {
    error: true,
  },
};


