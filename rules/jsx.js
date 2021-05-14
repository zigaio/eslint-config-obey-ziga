module.exports = {
  plugins: ['react'],
  rules: {
    'react/jsx-child-element-spacing': 0,
    'react/jsx-curly-brace-presence': [2, 'never'],
    'react/jsx-curly-newline': [2, {
      multiline: 'require',
      singleline: 'forbid',
    }],
    'react/jsx-filename-extension': [2, {
      extensions: ['.jsx', '.tsx']
    }],
    'react/jsx-handler-names': [2, {
      checkLocalVariables: true,
      checkInlineFunction: true,
    }],
    'react/jsx-indent': [2, 2, {
      indentLogicalExpressions: true,
    }],
    'react/jsx-indent-props': [2, 'first'],
    'react/jsx-key': [2, {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true,
    }],
    'react/jsx-max-depth': 0,
    'react/jsx-newline': 0,
    'react/jsx-no-literals': 0,
    'react/jsx-no-target-blank': [2, {
      enforceDynamicLinks: 'never',
      warnOnSpreadAttributes: true,
    }],
    'react/jsx-one-expression-per-line': [2, {
      allow: 'none',
    }],
    'react/jsx-sort-default-props': 0,
    'react/jsx-sort-props': [2, {
      shorthandLast: true,
      reservedFirst: true,
    }],
    'react/jsx-tag-spacing': [2, {
      beforeClosing: 'never',
    }],
    'react/jsx-wrap-multilines': [2, {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
  },
};
