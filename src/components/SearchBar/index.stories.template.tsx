/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { StoryFn } from '@storybook/react';

import { Playground } from '@actinc/dls/helpers/playground';

import { SearchBar, SearchBarProps } from '.';

export const Template: StoryFn<SearchBarProps> = args => (
  <SearchBar {...args} />
);

export const argTypes = Playground(
  {
    autoFocus: {},
    disabled: {},
    error: {},
    onChange: { action: 'onChange' },
    placeholder: {},
    value: { type: 'string' },
  },
  SearchBar,
);
