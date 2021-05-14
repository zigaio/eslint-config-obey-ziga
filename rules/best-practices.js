module.exports = {
  rules: {
    'consistent-return': [2, {
      treatUndefinedAsUnspecified: true,
    }],
    'dot-location': [2, 'property'],
    'grouped-accessor-pairs': [2, 'getBeforeSet'],
    'no-else-return': [2, {
      allowElseIf: false,
    }],
    'no-floating-decimal': 0,
    'no-magic-numbers': [2, {
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
    }],
    'no-param-reassign': [2, {
      props: true,
    }],
    'no-restricted-properties': 0,
    'no-return-assign': [2, 'always'],
    'no-warning-comments': 1,
    'prefer-named-capture-group': 0,
    'require-unicode-regexp': 0,
    'wrap-iife': [2, 'inside'],
  }
};
