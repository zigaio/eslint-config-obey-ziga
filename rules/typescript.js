module.exports = {
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/array-type': [2, {
      default: 'array-simple'
    }],
    '@typescript-eslint/consistent-type-imports': [2, {
      prefer: 'no-type-imports',
    }],
    '@typescript-eslint/member-delimiter-style': [2, {
      singleline: {
        requireLast: true
      }
    }],
    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'default',
        format: ['strictCamelCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'interface',
        format: ['StrictPascalCase'],
        prefix: ['I']
      },
      {
        selector: ['typeAlias', 'typeParameter'],
        format: ['StrictPascalCase'],
        prefix: ['T']
      },
      {
        selector: ['function'],
        format: ['strictCamelCase', 'StrictPascalCase'],
      },
      {
        selector: ['enum', 'class'],
        format: ['StrictPascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['StrictPascalCase', 'UPPER_CASE'],
      },
      {
        selector: ['variable', 'parameter', 'property'],
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: [
          'is',
          'should',
          'has',
          'can',
          'did',
          'will'
        ],
      },
      {
        "selector": "variable",
        "modifiers": ["destructured"],
        "format": null
      }
    ],
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 0,
    '@typescript-eslint/no-type-alias': 0,
    '@typescript-eslint/non-nullable-type-assertion-style': 0,
    '@typescript-eslint/prefer-enum-initializers': 0,
    '@typescript-eslint/prefer-function-type': 0,
    '@typescript-eslint/prefer-readonly-parameter-types': 0,
    '@typescript-eslint/require-array-sort-compare': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/sort-type-union-intersection-members': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/typedef': 0,
  },
};
