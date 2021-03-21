const {resolve} = require;

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    './rules/errors',
    './rules/best-practices',
    './rules/strict',
    './rules/variables',
    './rules/stylistic',
    './rules/es6',
  ].map(resolve),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
};

