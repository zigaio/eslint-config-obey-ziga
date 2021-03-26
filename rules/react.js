module.exports = {
  plugins: ['react'],
  rules: {
    'react/boolean-prop-naming': [2, {
      rule: '^(is|has|should|can|did|will)[A-Z]([A-Za-z0-9]?)+(ed)?$',
      message: 'Boolean props must be prefixed with "is", "has", "should", "can", "did", or "will".',
    }],
    'react/destructuring-assignment': [2, 'always'],
    'react/forbid-component-props': 0,
    'react/forbid-dom-props': 0,
    'react/forbid-elements': 0,
    'react/no-children-prop': 0,
    'react/no-did-mount-set-state': [2, 'disallow-in-func'],
    'react/no-did-update-set-state': [2, 'disallow-in-func'],
    'react/no-set-state': 0,
    'react/no-string-refs': [2, {
      noTemplateLiterals: true,
    }],
    'react/no-unescaped-entities': 0,
    'react/no-will-update-set-state': [2, 'disallow-in-func'],
    'react/require-default-props': [2, {
      forbidDefaultForRequired: true,
    }],
    'react/require-optimization': 0,
    'react/self-closing-comp': [2, {
      html: false,
    }],
    'react/sort-comp': [2, {
      order: [
        'static-variables',
        'static-methods',
        'lifecycle',
        '/^handle.+$/',
        '/^on.+$/',
        'everything-else',
        'render',
      ],
      groups: {
        rendering: [
          '/^render.+$/',
          'render',
        ]
      },
    }],
    'react/sort-prop-types': [2, {
      callbacksLast: true,
      noSortAlphabetically: true,
      requiredFirst: true,
      sortShapeProp: true,
    }],
    'react/state-in-constructor': [2, 'never'],
  },
};
