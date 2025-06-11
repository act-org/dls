/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  extends: ['@actinc/eslint-config'],
  overrides: [
    {
      files: ['./src/**/*.mdx'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-misused-promise': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-redundant-type-constituents': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/unbound-method': 'off',
    'no-console': 'off',
    'react/react-in-jsx-scope': 'off',
    'regex/invalid-error': [
      'error',
      [
        {
          files: {
            inspect: '[.]ts[x]*$',
          },
          id: 'noTopLevelLodashImportsFixWhenPossible',
          message:
            "To minimize bundle size, avoid doing imports from lodash directly. Instead, do a deep import, e.g., `import compact from 'lodash/compact'`",
          regex: "import {[^}]*} from 'lodash'",
        },
      ],
    ],
  },
};
