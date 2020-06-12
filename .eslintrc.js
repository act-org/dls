/**
 * @prettier
 */

module.exports = {
  extends: ['./node_modules/eslint-config'],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {},
      typescript: {},
    },
  },
};
