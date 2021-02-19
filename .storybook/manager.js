/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  enableShortcuts: true,
  isFullscreen: false,
  isToolshown: true,
  panelPosition: 'bottom',
  showNav: true,
  showPanel: true,
  sidebarAnimations: true,
  theme: {
    ...themes.light,
    // brandImage: 'https://www.act.org/etc/designs/act/clientlibs/act-base/img/logo-act-blue-300.png',
    brandTitle: 'ACT Design Language System',
  },
});
