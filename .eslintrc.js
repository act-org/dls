/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

module.exports = {
  extends: ['@actinc/eslint-config', 'plugin:mdx/recommended'],
  overrides: [
    {
      files: ['./**/*.stories.template.tsx', './**/*.stories.tsx'],
      rules: {
        'sort-keys': 'off',
      },
    },
  ],
  rules: {
    'react/function-component-definition': 'off', // Allows const defined components,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    'mdx/code-blocks': true,
    // optional, if you want to disable language mapper, set it to `false`
    // if you want to override the default language mapper inside, you can provide your own
    'mdx/language-mapper': {},
  },
};
