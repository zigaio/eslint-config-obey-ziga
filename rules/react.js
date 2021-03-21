module.exports = {
  plugins: ['react'],
  rules: {
    'react/boolean-prop-naming': [2, {
      rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+(ed)$',
      message: 'Boolean props must be prefixed with "is" or "has"',
    }],
    'react/destructuring-assignment': [2, 'always'],
    'react/forbid-component-props': 0,
    'react/forbid-dom-props': 0,
    'react/forbid-elements': 0,
    'react/forbid-foreign-prop-types': 2,
    'react/forbid-prop-types': 2,
    'react/function-component-definition': 2,
  },
};
