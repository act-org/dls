/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable immutable/no-mutation, no-template-curly-in-string */

module.exports = {
  ignore: [
    '**/*.stories.tsx',
    '**/*.stories.template.tsx',
    '**/*.test.tsx',
    '**/test/*',
  ],
  plugins: [
    // FIXME:
    // https://github.com/entwicklerstube/babel-plugin-root-import/issues/136
    // https://bitbucket.org/amctheatres/babel-transform-imports/issues/17/compatibility-issue-with-babel-plugin-root
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: './src',
      },
    ],
    [
      'babel-plugin-transform-imports',
      {
        '@material-ui/core': {
          preventFullImport: true,
          transform: '@material-ui/core/${member}',
        },
        '@material-ui/core/colors': {
          preventFullImport: true,
          transform: '@material-ui/core/colors/${member}',
        },
        '@material-ui/styles': {
          preventFullImport: true,
          transform: '@material-ui/styles/${member}',
        },
        '~/components': {
          preventFullImport: true,
          transform: '~/components/${member}',
        },
        '~/constants': {
          preventFullImport: true,
          transform: '~/constants/${member}',
        },
        '~/helpers': {
          preventFullImport: true,
          transform: '~/helpers/${member}',
        },
        '~/icons': {
          preventFullImport: true,
          transform: '~/icons/${member}',
        },
        '~/styles': {
          preventFullImport: true,
          transform: '~/styles/${member}',
        },
        lodash: {
          preventFullImport: true,
          transform: 'lodash/${member}',
        },
        'mdi-material-ui': {
          preventFullImport: true,
          transform: 'mdi-material-ui/${member}',
        },
      },
    ],
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
};
