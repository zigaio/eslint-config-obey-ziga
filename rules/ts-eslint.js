module.exports = {
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/comma-dangle': [2, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never'
    }],
    '@typescript-eslint/indent': [2, 2, {
      VariableDeclarator: 'first',
      SwitchCase: 1,
    }],
    '@typescript-eslint/no-duplicate-imports': [2, {
      includeExports: true,
    }],
    '@typescript-eslint/no-extra-parens': [2, 'all', {
      enforceForArrowConditionals: false,
      nestedBinaryExpressions: false,
      ignoreJSX: 'all',
    }],
    '@typescript-eslint/no-magic-numbers': [2, {
      ignore: [
        -1, // Common out-of-range/sub-zero comparor.
        0, // Common starting number.
        1, // Common Array.length comparor.
        16, // Common base font-size.
        60, // Commonly used for calculating time.
        100, // Commonly used for percentage calculations.
        1000, // Commonly used for ms conversion.
        1024 // Commonly used for calculating byte sizes.
      ],
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
