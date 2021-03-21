module.exports = {
  rules: {
    'no-duplicate-imports': [2, {
      includeExports: true,
    }],
    'no-useless-computed-key': [2, {
      enforceForClassMembers: true,
    }],
    'prefer-arrow-callback': [2, {
      allowNamedFunctions: true,
    }],
    'prefer-destructuring': [2, {
      array: false,
      object: true,
    }, {
      enforceForRenamedProperties: true,
    }],
    'sort-imports': 0,
  }
};
