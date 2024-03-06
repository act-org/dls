import { StoryFn } from '@storybook/react';

import { Playground } from '~/helpers/playground';

import DropdownButtonBase, { DropdownButtonBaseProps } from '.';

export const Template: StoryFn<DropdownButtonBaseProps> = args => <DropdownButtonBase {...args} />;

export const argTypes = Playground(
  {
    buttonProps: {},
    isFixed: { type: 'boolean' },
    onClick: {},
    value: { type: 'string' },
  },
  DropdownButtonBase,
);
