module.exports = {
  rules: {
    'no-extra-parens': [2, 'all', {
      enforceForArrowConditionals: false,
      nestedBinaryExpressions: false,
      ignoreJSX: 'all',
    }],
    'no-unsafe-optional-chaining': [2, {
      disallowArithmeticOperators: true,
    }],
  }
};
