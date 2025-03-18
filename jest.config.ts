/* eslint-disable filenames/match-exported */
/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    'd3-array': '<rootDir>/node_modules/d3-array/dist/d3-array.min.js',
    'd3-color': '<rootDir>/node_modules/d3-color/dist/d3-color.min.js',
    'd3-format': '<rootDir>/node_modules/d3-format/dist/d3-format.min.js',
    'd3-interpolate':
      '<rootDir>/node_modules/d3-interpolate/dist/d3-interpolate.min.js',
    'd3-path': '<rootDir>/node_modules/d3-path/dist/d3-path.min.js',
    'd3-scale': '<rootDir>/node_modules/d3-scale/dist/d3-scale.min.js',
    'd3-shape': '<rootDir>/node_modules/d3-shape/dist/d3-shape.min.js',
    'd3-time': '<rootDir>/node_modules/d3-time/dist/d3-time.min.js',
  },
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        babelConfig: 'babel.test.js',
        diagnostics: false,
        tsconfig: './tsconfig.json',
      },
    ],
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(color|color-convert|color-name|color-string)/)',
  ],
};

export default config;
