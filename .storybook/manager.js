/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  enableShortcuts: true,
  isFullscreen: false,
  isToolshown: true,
  panelPosition: 'bottom',
  showNav: true,
  showPanel: true,
  sidebarAnimations: true,
  theme: create({
    base: 'light',
    brandImage: 'https://i.imgur.com/P0gtzO0.png',
    brandTitle: 'ACT Design Language System',
    brandUrl: 'https://www.act.org/',
  }),
});
