/**
 * @prettier
 */

/* eslint-disable immutable/no-mutation */

module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig: './tsconfig.json',
    },
  },
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
};
