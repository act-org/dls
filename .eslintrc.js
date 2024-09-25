/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
        'storybook/story-exports': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    'import/order': [
      'error',
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
            pattern: '~/**',
          },
          {
            group: 'internal',
            pattern: '~/icons/**',
          },
          {
            group: 'external',
            pattern: '@**',
          },
        ],
        warnOnUnassignedImports: true,
      },
    ],
    'react/boolean-prop-naming': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
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
