/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { CssBaseline } from '@mui/material';
import { common, grey } from '@mui/material/colors';
import * as locales from '@mui/material/locale';
import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import { Preview } from '@storybook/react-webpack5';
import React from 'react';

import { ThemeProvider } from '../src/components/ThemeProvider';

global.React = React;

const preview: Preview = {
  decorators: [
    (Story, ctx) => {
      return (
        <ThemeProvider locale={ctx.globals.language} theme={ctx.globals.theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      );
    },
  ],
  globalTypes: {
    theme: {
      defaultValue: 'ENCOURA',
      description: 'Global theme for components',
      name: 'Theme',
      toolbar: {
        icon: 'paintbrush',
        items: ['ENCOURA', 'ENCOURA_CLASSIC', 'ENCOURAGE', 'ENCOURAGE_E4E'],
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
  },
  parameters: {
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
  },
};

export default preview;
