/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

module.exports = {
  extends: ['@actinc/eslint-config'],
  overrides: [
    {
      files: ['./**/*.stories.template.tsx', './**/*.stories.tsx'],
      rules: {
        'sort-keys': 'off',
      },
    },
  ],
  rules: {
    'react/function-component-definition': 'off', // Allows const defined components
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {},
      typescript: {},
    },
  },
};
