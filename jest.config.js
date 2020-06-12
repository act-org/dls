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
  preset: 'ts-jest',
  roots: ['<rootDir>/core'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
};
