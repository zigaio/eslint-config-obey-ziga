module.exports = {
  rules: {
    'array-bracket-newline': [2, {
      minItems: 4,
    }],
    'array-element-newline': [2, {
      multiline: true,
      minItems: 4,
    }],
    'capitalized-comments': [2, 'always', {
      ignoreInlineComments: true,
      ignoreConsecutiveComments: true,
    }],
    'comma-dangle': [2, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'only-multiline',
      exports: 'always-multiline',
      functions: 'never'
    }],
    'consistent-this': [2, 'self'],
    'func-name-matching': [2, 'always', {
      includeCommonJSModuleExports: true,
    }],
    'func-names': [2, 'as-needed'],
    'func-style': [2, 'declaration', {
      allowArrowFunctions: true,
    }],
    'function-call-argument-newline': [2, 'consistent'],
    'function-paren-newline': [2, 'multiline-arguments'],
    'id-denylist': 0,
    'id-length': [2, {
      min: 3,
      exceptions: [
        'id',
        'ex',
        'i',
      ],
      exceptionPatterns: [
        '([a-c]|[x-z]|[1-3])',
      ],
    }],
    'id-match': 0,
    'indent': [2, 2, {
      VariableDeclarator: 'first',
      flatTernaryExpressions: true,
      offsetTernaryExpressions: true,
    }],
    'linebreak-style': [2, 'windows'],
    'max-len': [2, {
      code: 100,
      tabWidth: 2,
      comments: 80,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: true,
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
    'padded-blocks': [2, 'never', {
      allowSingleLineBlocks: false,
    }],
    'padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
      {
        blankLine: 'never',
        prev: 'directive',
        next: 'directive',
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'never',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: ['case', 'default'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: 'export',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: 'import',
        next: '*',
      },
      {
        blankLine: 'never',
        prev: 'import',
        next: 'import',
      },
      {
        blankLine: 'always',
        prev: ['function', 'iife', 'for'],
        next: '*',
      }
    ],
    'prefer-exponentiation-operator': 0,
    'quote-props': [2, 'as-needed'],
    'quotes': [2, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    'semi': [2, 'always', {
      omitLastInOneLineBlock: false,
    }],
    'sort-keys': [2, 'asc', {
      natural: true,
    }],
    'sort-vars': 0,
    'space-before-function-paren': [2, 'never'],
    'template-tag-spacing': [2, 'always'],
    'wrap-regex': 0,
  },
};
