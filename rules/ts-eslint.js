module.exports = {
  plugins: ['@typescript-eslint'],
  extends: {
    '@typescript-eslint/comma-dangle': [2, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'only-multiline',
      exports: 'always-multiline',
      functions: 'never',
      enums: 'never',
      generics: 'never',
      tuples: 'never',
    }],
    '@typescript-eslint/indent': [2, 2, {
      VariableDeclarator: 'first',
      flatTernaryExpressions: true,
      offsetTernaryExpressions: true,
    }],
    '@typescript-eslint/no-duplicate-imports': [2, {
      includeExports: true,
    }],
    '@typescript-eslint/no-extra-parens': [2, 'all', {
      nestedBinaryExpressions: false,
      ignoreJSX: 'all',
    }],
    '@typescript-eslint/no-magic-numbers': [2, {
      ignoreArrayIndexes: true,
      detectObjects: true,
      enforceConst: true,
      ignoreNumericLiteralTypes: true,
    }],
    '@typescript-eslint/no-shadow': [2, {
      builtinGlobals: true,
    }],
    '@typescript-eslint/quotes': [2, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    '@typescript-eslint/semi': [2, 'always', {
      omitLastInOneLineBlock: false,
    }],
    '@typescript-eslint/space-before-function-paren': [2, 'never'],
  }
};