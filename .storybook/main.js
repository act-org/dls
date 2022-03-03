/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  },
  features: {
    storyStoreV7: true,
    babelModeV7: true,
  },
  babel: async options => {
    options.plugins.push([
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: './src',
      },
    ]);
    return options;
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      propFilter: prop => true,
      shouldExtractLiteralValuesFromEnum: true,
    },
  },
};
