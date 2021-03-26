# no-unsafe-optional-chaining

## Details

```javascript
'no-unsafe-optional-chaining': [2, {
  disallowArithmeticOperators: true,
}]
```

## Reason

Avoid short-circuiting. If you have code paths where an object is potentially undefined, make an effort to ensure that path has an alternative.

## Docs

<https://eslint.org/docs/rules/no-unsafe-optional-chaining>
