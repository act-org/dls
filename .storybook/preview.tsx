/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as locales from '@mui/material/locale';
import { common, grey } from '@mui/material/colors';
import { configureActions } from '@storybook/addon-actions';
import { CssBaseline } from '@mui/material';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';

import { ThemeProvider } from '../src/components/ThemeProvider';

configureActions({
  depth: 3,
  limit: 20,
});

export const parameters = {
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
  controls: { expanded: false },
  docs: {
    container: DocsContainer,
    page: DocsPage,
    story: {
      inline: true,
    },
  },
  layout: 'padded',
  options: {
    storySort: {
      order: [
        'DLS',
        'Foundations',
        'MUI Core',
        'MUI X',
        'Atoms',
        'Molecules',
        'Organisms',
        'Utilities',
        'Forms (WIP)',
        'Deprecated',
      ],
    },
  },
};

export const decorators = [
  (Story, ctx) => {
    return (
      <ThemeProvider locale={ctx.globals.language} theme={ctx.globals.theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    );
  },
];

export const globalTypes = {
  theme: {
    defaultValue: 'ENCOURA',
    description: 'Global theme for components',
    name: 'Theme',
    toolbar: {
      icon: 'paintbrush',
      items: ['ACT', 'ACT_ET', 'ENCOURA', 'ENCOURA_CLASSIC', 'ENCOURAGE'],
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
