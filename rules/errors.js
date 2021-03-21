module.exports = {
  rules: {
    'no-extra-parens': [2, 'all', {
      nestedBinaryExpressions: false,
      ignoreJSX: 'all',
    }],
    'no-unsafe-optional-chaining': [2, {
      disallowArithmeticOperators: true,
    }],
  }
};
