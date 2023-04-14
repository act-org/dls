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

import { AppBarNavigation, AppBarNavigationProps } from '.';

export const Template: StoryFn<AppBarNavigationProps> = (
  props: AppBarNavigationProps,
) => <AppBarNavigation {...props} />;

export const argTypes = Playground(
  {
    AppBarProps: {},
    headerRightElement: {},
    navigationItems: [],
    RenderLogoProps: {},
  },
  AppBarNavigation,
);
