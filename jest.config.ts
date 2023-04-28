/* eslint-disable filenames/match-exported */
/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { JestConfigWithTsJest, pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

const config: JestConfigWithTsJest = {
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
    'internal.tsx',
  ],
  coverageReporters: ['text', 'html'],
  moduleNameMapper: {
    "^.+\\.(css|less|sass|scss)$": "<rootDir>/src/helpers/test/mocks/styleMock.tsx",
    ...pathsToModuleNameMapper(compilerOptions.paths , { prefix: '<rootDir>/' })
  },
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        babelConfig: 'babel.test.js',
        diagnostics: false,
        tsconfig: './tsconfig.json'
      },
    ],
  },
};

export default config;
