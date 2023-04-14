/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */
import type { StorybookConfig } from '@storybook/core-common';
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const config: StorybookConfig = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-controls', '@storybook/addon-docs', '@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  core: {},
  features: {
    previewMdx2: true,
    storyStoreV7: true,
    babelModeV7: true,
    emotionAlias: false,
    previewCsfV3: true,
    modernInlineRender: true
  },
  // babel: async options => {
  //   options.plugins.push([
  //     'babel-plugin-root-import',
  //     {
  //       rootPathPrefix: '@actinc/dls',
  //       rootPathSuffix: './src',
  //     },
  //   ]);
  //   return options;
  // },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  staticDirs: ['../public'],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: false,
      shouldRemoveUndefinedFromOptional: true,
      skipChildrenPropWithoutDoc: false
    }
  },
  webpackFinal: async config => {
    if (config.resolve) {
      config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin({
        extensions: config.resolve.extensions
      })];
    }
    return config;
  },
  docs: {
    autodocs: true
  }
};
export default config;