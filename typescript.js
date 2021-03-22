const {resolve} = require;

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ['./rules/typescript'].map(resolve),
  parser: '@typescript-eslint/parser',
};
