/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react';

import { Playground } from '~/helpers/playground';

import { SearchBar, SearchBarProps } from '.';

/**
 * This component wraps a nice visual for a search bar component the the ability to set the initial value
 * and listen for changes to the search value
 */
export default {
  args: {},
  argTypes: Playground(
    {
      autoFocus: {},
      disabled: {},
      error: {},
      onChange: { action: 'onChange' },
      placeholder: {},
      value: { type: 'string' },
    },
    SearchBar,
  ),
  component: SearchBar,
  tags: ['autodocs'],
  title: 'Molecules / SearchBar',
} as Meta<SearchBarProps>;

export const Preview: StoryObj<SearchBarProps> = {
  args: {},
};
