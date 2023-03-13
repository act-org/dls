/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

module.exports = {
  extends: [
    '@actinc/eslint-config',
    'plugin:mdx/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      files: ['./**/*.stories.template.tsx', './**/*.stories.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 'off',
        'react/no-array-index-key': 'off',
        'sort-keys': 'off',
        'storybook/story-exports': 'off',
      },
    },
    {
      files: ['./**/*.test.tsx', './**/*.spec.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/no-array-index-key': 'off',
        'sort-keys': 'off',
      },
    },
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'warn',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'internal',
            pattern: '@actinc/dls/**',
          },
          {
            group: 'internal',
            pattern: '@actinc/dls/icons/**',
          },
          {
            group: 'external',
            pattern: '@**',
          },
        ],
        warnOnUnassignedImports: true,
      },
    ],
    'react/function-component-definition': 'off',
    // Allows const defined components,
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
