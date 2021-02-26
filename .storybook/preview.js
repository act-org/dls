/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as locales from '@material-ui/core/locale';
import { common, grey } from '@material-ui/core/colors';
import { configureActions } from '@storybook/addon-actions';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '../src/components/ThemeProvider';

configureActions({
  depth: 3,
  limit: 20,
});

export const parameters = {
  controls: { expanded: false },
  backgrounds: {
    default: 'White',
    values: [
      {
        name: 'White',
        value: common.white,
      },
      {
        name: 'Grey',
        value: grey[300],
      },
      {
        name: 'Black',
        value: common.black,
      },
    ],
  },
  layout: 'centered',
};

export const decorators = [
  (Story, ctx) => (
    <ThemeProvider locale={ctx.globals.language} theme={ctx.globals.theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];

export const globalTypes = {
  theme: {
    defaultValue: 'ACT',
    description: 'Global theme for components',
    name: 'Theme',
    toolbar: {
      icon: 'paintbrush',
      items: ['ACT', 'ACT_ET'],
    },
  },
  language: {
    name: 'Language',
    description: 'Global language for components',
    defaultValue: 'enUS',
    toolbar: {
      icon: 'book',
      items: Object.keys(locales),
    },
  },
};
