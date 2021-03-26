# no-magic-numbers

## Details

```javascript
'no-magic-numbers': [2, {
  detectObjects: true,
  enforceConst: true,
  ignoreArrayIndexes: true,
}]
```

## Reason

More often than not numbers in your application can seem random or magic, because nothing in your application tells the reader otherwise.

You as the author might know the meaning of the number value at the moment, but will you 6 months from now?

This rule enforces `const` variables to hold the number as it is commonly not a value you want to change throughout the application.

It doesn't allow number values to be set as defaults, as they can seem just as out of place.

## Docs

<https://eslint.org/docs/rules/no-magic-numbers>
