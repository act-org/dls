/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable no-template-curly-in-string */

module.exports = {
  ignore: [
    '**/*.stories.template.tsx',
    '**/*.stories.tsx',
    '**/*.test.tsx',
    '**/test/*',
  ],
  plugins: [
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
        '@mui/material/colors': {
          preventFullImport: true,
          transform: '@mui/material/colors/${member}',
        },
        '@mui/material/styles': {
          preventFullImport: true,
          transform: '@mui/material/styles/${member}',
        },
        '@mui/material': {
          preventFullImport: true,
          transform: '@mui/material/${member}',
        },
        '@mui/styles': {
          preventFullImport: true,
          transform: '@mui/styles/${member}',
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
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
};
