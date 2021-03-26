# consistent-return

## Details

```javascript
'consistent-return': [2, {
  treatUndefinedAsUnspecified: true,
}]
```

## Reason

`undefined` is an unacceptable return type. Implicitly you are telling your application that a certain variable or object does not exist in the scope of the application anymore.

This rule is configured to remind you to return valid values in all branched paths of your application.

`null` is preferred to `undefined` as a return type. This explicitly tells your application that a certain variable or object exists, but it holds no value.

`undefined` does not mean "no value." `null` does.

## Docs

<https://eslint.org/docs/rules/consistent-return>
