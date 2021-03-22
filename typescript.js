const {resolve} = require;

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    './rules/typescript',
    './rules/ts-eslint',
  ].map(resolve),
};
