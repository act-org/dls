/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/icons/**',
    '!**/*stories*.tsx',
  ],
  coveragePathIgnorePatterns: [
    'src/styles/index.ts',
    'src/constants/index.ts',
    'src/components/index.ts',
    'src/index.ts',
    'src/styles/index.ts',
  ],
  coverageReporters: ['text', 'html'],
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsconfig: './tsconfig.json',
    },
  },
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
};
