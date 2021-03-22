module.exports = {
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/array-type.': [2, {
      default: 'array-simple'
    }],
    '@typescript-eslint/consistent-type-assertions': [2, {
      assertionStyle: 'angle-bracket',
      objectLiteralTypeAssertions: 'never',
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
        format: ['strictCamelCase'],
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
        format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
      },
      {
        selector: ['enum', 'enumMember', 'class'],
        format: ['StrictPascalCase', 'UPPER_CASE'],
      },
      {
        selector: ['variable', 'memberLike', 'variableLike'],
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
    '@typescript-eslint/no-non-null-asserted-optional-chain': 0,
    '@typescript-eslint/no-type-alias': 0,
    '@typescript-eslint/non-nullable-type-assertion-style': 0,
    '@typescript-eslint/prefer-enum-initializers': 0,
    '@typescript-eslint/prefer-function-type': 0,
    '@typescript-eslint/require-array-sort-compare': 0,
    '@typescript-eslint/sort-type-union-intersection-members': 0,
    '@typescript-eslint/typedef': 0,
  },
};
