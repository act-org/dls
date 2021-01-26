// eslint-disable-next-line immutable/no-mutation
module.exports = {
  extends: ['./node_modules/eslint-config'],
  overrides: [
    {
      files: ["./**/*.stories.tsx"],
      rules: {
        "immutable/no-mutation": false,
        "sort-keys": false
      },
    }
  ],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {},
      typescript: {},
    },
  },
};
