/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SearchBar, SearchBarProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';

export const Template: Story<SearchBarProps> = args => <SearchBar {...args} />;

export const argTypes = PlayGround(
  {
    autoFocus: {},
    disabled: {},
    error: {},
    placeholder: {},
    onChange: { action: 'onChange' },
    value: { type: 'string' },
  },
  SearchBar,
);