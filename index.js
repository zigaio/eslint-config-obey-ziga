'use strict';

const {resolve} = require;

module.exports = {
  extends: [
    'eslint:all',
    './rules/errors',
    './rules/best-practices',
    './rules/strict',
    './rules/variables',
    './rules/stylistic',
    './rules/es6',
  ].map(resolve),
  rules: {}
};
