/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Meta, StoryObj } from '@storybook/react';

import { Playground } from '@actinc/dls/helpers/playground';

import { AppBarNavigation, AppBarNavigationProps } from '.';

/**
 * This component uses App Bar to create a top-level navigation header.
 */
export default {
  args: {
    AppBarProps: { position: 'static' },
    navigationItems: [
      { isActive: true, LinkProps: { to: '#' }, title: 'Home' },
      { isActive: false, LinkProps: { to: '#' }, title: 'Other Page' },
    ],
    RenderLogoProps: {
      alt: 'ACT',
      LinkProps: { to: 'https://act-et.org' },
      src: 'https://i.imgur.com/P0gtzO0.png',
    },
  },
  argTypes: Playground(
    {
      AppBarProps: {},
      headerRightElement: {},
      navigationItems: [],
      RenderLogoProps: {},
    },
    AppBarNavigation,
  ),
  component: AppBarNavigation,
  tags: ['autodocs'],
  title: 'Organisms / AppBarNavigation',
} as Meta<AppBarNavigationProps>;

export const WithOneLink: StoryObj<AppBarNavigationProps> = {
  args: {
    navigationItems: [
      { isActive: true, LinkProps: { to: '#' }, title: 'Home' },
    ],
  },
};

export const WithManyLinks: StoryObj<AppBarNavigationProps> = {
  args: {
    navigationItems: [
      { isActive: true, LinkProps: { to: '#' }, title: 'Home' },
      { isActive: false, LinkProps: { to: '#' }, title: 'Other Page 1' },
      { isActive: false, LinkProps: { to: '#' }, title: 'Other Page 2' },
      { isActive: false, LinkProps: { to: '#' }, title: 'Other Page 3' },
    ],
  },
};
