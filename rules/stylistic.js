module.exports = {
  rules: {
    'array-element-newline': [2, {
      ArrayExpression: 'always',
      ArrayPattern: {
        multiline: true,
        minItems: 4,
      },
    }],
    'capitalized-comments': [2, 'always', {
      ignoreInlineComments: true,
      ignoreConsecutiveComments: true,
    }],
    'comma-dangle': [2, 'always-multiline'],
    'consistent-this': 0,
    'func-name-matching': [2, {
      includeCommonJSModuleExports: true,
    }],
    'func-names': [2, 'as-needed'],
    'func-style': [2, 'declaration', {
      allowArrowFunctions: true,
    }],
    'function-call-argument-newline': [2, 'consistent'],
    'function-paren-newline': [2, 'multiline-arguments'],
    'id-denylist': [2, 'cb', 'callback', 'data', 'err', 'error'],
    'id-length': [2, {
      min: 3,
      exceptions: [
        'id',
        'ex',
      ],
      exceptionPatterns: [
        '[ijktTx-z]',
      ],
    }],
    'id-match': 0,
    'indent': [2, 2, {
      VariableDeclarator: 'first',
      SwitchCase: 1,
    }],
    'linebreak-style': 0,
    'max-len': [2, {
      code: 100,
      tabWidth: 2,
      comments: 80,
      ignoreTrailingComments: true,
      ignoreUrls: true,
    }],
    'max-lines-per-function': [2, {
      skipBlankLines: true,
      skipComments: true,
    }],
    'max-nested-callbacks': [2, 4],
    'max-params': [2, 5],
    'max-statements': 0,
    'multiline-comment-style': 0,
    'multiline-ternary': 0,
    'no-inline-comments': 0,
    'no-multiple-empty-lines': [2, {
      max: 1,
      maxEOF: 1,
      maxBOF: 0,
    }],
    'no-nested-ternary': 0,
    'no-plusplus': [2, {
      allowForLoopAfterthoughts: true,
    }],
    'no-restricted-syntax': 0,
    'no-ternary': 0,
    'no-unneeded-ternary': [2, {
      defaultAssignment: false,
    }],
    'nonblock-statement-body-position': [2, 'below'],
    'object-curly-newline': [2, {
      ObjectExpression: {
        multiline: true,
        minProperties: 1,
      },
      ObjectPattern: {
        multiline: true,
        minProperties: 4
      },
      ImportDeclaration: {
        multiline: true,
        minProperties: 4
      },
      ExportDeclaration: 'always',
    }],
    'one-var': [2, 'never'],
    'one-var-declaration-per-line': [2, 'always'],
    'operator-linebreak': [2, 'after', {
      overrides: {
        '&&': 'before',
        '||': 'before',
      }
    }],
    'padded-blocks': [2, 'never'],
    'padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        prev: '*',
        next: '*',
      },
      {
        blankLine: 'never',
        prev: 'directive',
        next: 'directive',
      },
      {
        blankLine: 'never',
        prev: 'import',
        next: 'import',
      },
      {
        blankLine: 'never',
        prev: ['singleline-const', 'singleline-let', 'singleline-var'],
        next: ['singleline-const', 'singleline-let', 'singleline-var'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: ['multiline-const', 'multiline-expression', 'multiline-let', 'multiline-var'],
      },
    ],
    'prefer-exponentiation-operator': 0,
    'quote-props': [2, 'as-needed'],
    'quotes': [2, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    'semi': [2, 'always'],
    'sort-keys': [2, 'asc', {
      natural: true,
    }],
    'sort-vars': 0,
    'space-before-function-paren': [2, 'never'],
    'wrap-regex': 0,
  },
};
