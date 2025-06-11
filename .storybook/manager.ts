/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { create } from 'storybook/theming';

import { version } from '../package.json';

create({
  base: 'light',
  brandImage: 'img/dls-logo.png',
  brandTitle: `ACT Design Language System v${version}`,
  brandUrl: '/',
});
