module.exports = {
  'consistent-return': [2, {
    treatUndefinedAsUnspecified: true,
  }],
  'curly': [2, 'all'],
  'dot-location': [2, 'property'],
  'grouped-accessor-pairs': [2, 'getBeforeSet'],
  'no-else-return': [2, {
    allowElseIf: false,
  }],
  'no-floating-decimal': 0,
  'no-magic-numbers': [2, {
    ignoreDefaultValues: true,
    detectObjects: true,
  }],
  'no-param-reassign': [2, {
    props: true,
  }],
  'no-restricted-properties': 0,
  'no-return-assign': [2, 'always'],
  'no-warning-comments': 1,
  'prefer-named-capture-group': 0,
  'require-unicode-regexp': 0,
  'wrap-iife': [2, 'inside'],
  'yoda': [2, 'never', {
    exceptRange: true,
  }],
};