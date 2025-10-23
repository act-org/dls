/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const storybookTheme = create({
  base: 'dark',
  brandImage: 'img/dls-logo.png',
  brandTitle: 'Encoura Design Language System',
  brandUrl: '/',
  colorPrimary: '#003359',
  colorSecondary: '#0097c2',
});

addons.setConfig({
  theme: storybookTheme,
});
