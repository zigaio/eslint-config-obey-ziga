const {resolve} = require;

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    './rules/jsx',
    './rules/jsx-a11y',
    './rules/react',
    './rules/hooks',
  ].map(resolve),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
